#!/usr/bin/env python3
"""Generate deterministic research-paper index pages from frontmatter.

WHY: Research paper metadata lives in the individual paper markdown files, while
index pages need to stay easy to browse and easy to maintain by hand.

WHAT: The script scans ``content/research/papers/*.md``, reads YAML
frontmatter, and updates generated sections between marker comments in:
- ``content/research/papers/index.md``
- ``content/research/papers/topics/*.md``
- ``content/research/papers/years/*.md``

Any prose outside the generated markers is preserved, so editors can keep manual
introductions or notes around the generated content.
"""

from __future__ import annotations

import re
import sys
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import quote

import yaml

SITE_ROOT = Path(__file__).resolve().parents[1]
PAPERS_DIR = SITE_ROOT / "content/research/papers"
TOPICS_DIR = PAPERS_DIR / "topics"
YEARS_DIR = PAPERS_DIR / "years"

START_MARKER = "<!-- GENERATED RESEARCH INDEX:START -->"
END_MARKER = "<!-- GENERATED RESEARCH INDEX:END -->"
LEGACY_START_MARKER = "<!--use obsidian DATAVIEW serializer plugin, DO NOT edit manually-->"
LEGACY_END_MARKER = "<!-- SerializedQuery END -->"
FRONTMATTER_PATTERN = re.compile(r"\A---\s*\n(.*?)\n---\s*(\n|\Z)", re.DOTALL)
SLUG_SAFE = re.compile(r"[^a-z0-9]+")
ACRONYM_WORDS = {
    "ai": "AI",
    "api": "API",
    "cv": "CV",
    "gis": "GIS",
    "iot": "IoT",
    "rf": "RF",
    "ml": "ML",
    "ui": "UI",
    "ux": "UX",
}
UNCATEGORIZED_TOPIC_SLUG = "uncategorized"
UNKNOWN_YEAR_SLUG = "unknown"


@dataclass(frozen=True)
class Term:
    slug: str
    label: str


@dataclass(frozen=True)
class Paper:
    filename: str
    title: str
    year_slug: str
    year_label: str
    year_sort: tuple[int, int, str]
    topics: tuple[Term, ...]
    product_areas: tuple[Term, ...]
    orgs: tuple[str, ...]


class FrontmatterError(RuntimeError):
    pass


def main() -> int:
    if not PAPERS_DIR.exists():
        raise SystemExit(f"Papers directory does not exist: {PAPERS_DIR}")

    papers = load_papers()

    TOPICS_DIR.mkdir(parents=True, exist_ok=True)
    YEARS_DIR.mkdir(parents=True, exist_ok=True)

    write_or_update(
        PAPERS_DIR / "index.md",
        render_main_index(papers),
        create_main_index_shell,
    )

    papers_by_topic = group_papers_by_topic(papers)
    for topic in sorted(papers_by_topic, key=sort_term_key):
        write_or_update(
            TOPICS_DIR / f"{topic.slug}.md",
            render_topic_page(topic, papers_by_topic[topic]),
            lambda current_topic=topic: create_topic_shell(current_topic),
        )

    papers_by_year = group_papers_by_year(papers)
    for year in sorted(papers_by_year, key=lambda term: term_sort_key_for_year(term, papers_by_year[term])):
        write_or_update(
            YEARS_DIR / f"{year.slug}.md",
            render_year_page(year, papers_by_year[year]),
            lambda current_year=year: create_year_shell(current_year),
        )

    print(
        "Generated research indexes for "
        f"{len(papers)} papers, {len(papers_by_topic)} topic pages, and {len(papers_by_year)} year pages."
    )
    return 0


def load_papers() -> list[Paper]:
    papers: list[Paper] = []
    for path in sorted(PAPERS_DIR.glob("*.md"), key=lambda item: item.name.casefold()):
        if path.name == "index.md":
            continue
        frontmatter = load_frontmatter(path)
        title = str(frontmatter.get("title") or path.stem).strip()
        year_label, year_slug, year_sort = normalize_year(frontmatter.get("year"))
        topics = normalize_terms(frontmatter.get("topics"), fallback_label="Uncategorized")
        if not topics:
            topics = (Term(UNCATEGORIZED_TOPIC_SLUG, "Uncategorized"),)
        product_areas = normalize_terms(frontmatter.get("productAreas"))
        orgs = tuple(normalize_string_list(frontmatter.get("orgs")))
        papers.append(
            Paper(
                filename=path.name,
                title=title,
                year_slug=year_slug,
                year_label=year_label,
                year_sort=year_sort,
                topics=topics,
                product_areas=product_areas,
                orgs=orgs,
            )
        )
    return sorted(papers, key=paper_sort_key)


def load_frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    match = FRONTMATTER_PATTERN.match(text)
    if not match:
        return {}

    try:
        data = yaml.safe_load(match.group(1)) or {}
    except yaml.YAMLError as exc:
        raise FrontmatterError(f"Failed to parse YAML frontmatter in {path}: {exc}") from exc

    if not isinstance(data, dict):
        raise FrontmatterError(f"Frontmatter in {path} must be a YAML mapping.")
    return data


def normalize_year(raw_value: object) -> tuple[str, str, tuple[int, int, str]]:
    if raw_value is None:
        return ("Unknown year", UNKNOWN_YEAR_SLUG, (1, 0, ""))

    text = str(raw_value).strip()
    if not text:
        return ("Unknown year", UNKNOWN_YEAR_SLUG, (1, 0, ""))

    if text.isdigit():
        year = int(text)
        return (text, text, (0, -year, text))

    slug = slugify(text) or UNKNOWN_YEAR_SLUG
    return (text, slug, (0, 0, text.casefold()))


def normalize_terms(raw_value: object, fallback_label: str | None = None) -> tuple[Term, ...]:
    values = normalize_string_list(raw_value)
    terms = {make_term(value) for value in values if value}
    ordered_terms = sorted(terms, key=sort_term_key)
    if ordered_terms:
        return tuple(ordered_terms)
    if fallback_label:
        return (Term(slugify(fallback_label), fallback_label),)
    return ()


def normalize_string_list(raw_value: object) -> list[str]:
    if raw_value is None:
        return []
    if isinstance(raw_value, str):
        items = [raw_value]
    elif isinstance(raw_value, (list, tuple, set)):
        items = [str(item) for item in raw_value if item is not None]
    else:
        items = [str(raw_value)]

    deduped: dict[str, None] = {}
    for item in items:
        normalized = str(item).strip()
        if normalized:
            deduped[normalized] = None
    return list(deduped.keys())


def make_term(raw_value: str) -> Term:
    slug = slugify(raw_value)
    if not slug:
        slug = slugify("unknown")
    return Term(slug=slug, label=humanize_slug(slug))


def slugify(value: str) -> str:
    normalized = value.strip().lower().replace("&", " and ")
    normalized = SLUG_SAFE.sub("-", normalized)
    return normalized.strip("-")


def humanize_slug(slug: str) -> str:
    words = [word for word in slug.replace("_", "-").split("-") if word]
    if not words:
        return "Unknown"

    humanized: list[str] = []
    for word in words:
        humanized.append(ACRONYM_WORDS.get(word, word.capitalize()))
    return " ".join(humanized)


def paper_sort_key(paper: Paper) -> tuple[tuple[int, int, str], str, str]:
    return (paper.year_sort, paper.title.casefold(), paper.filename.casefold())


def sort_term_key(term: Term) -> tuple[str, str]:
    return (term.label.casefold(), term.slug)


def term_sort_key_for_year(year: Term, year_papers: list[Paper]) -> tuple[int, int, str]:
    if year.slug == UNKNOWN_YEAR_SLUG:
        return (1, 0, year.label.casefold())
    if year.slug.isdigit():
        return (0, -int(year.slug), year.slug)
    return (0, 0, year.label.casefold())


def group_papers_by_topic(papers: Iterable[Paper]) -> dict[Term, list[Paper]]:
    grouped: dict[Term, list[Paper]] = defaultdict(list)
    for paper in papers:
        for topic in paper.topics:
            grouped[topic].append(paper)
    return {topic: sorted(items, key=paper_sort_key) for topic, items in grouped.items()}


def group_papers_by_year(papers: Iterable[Paper]) -> dict[Term, list[Paper]]:
    grouped: dict[Term, list[Paper]] = defaultdict(list)
    for paper in papers:
        year = Term(paper.year_slug, paper.year_label)
        grouped[year].append(paper)
    return {year: sorted(items, key=paper_sort_key) for year, items in grouped.items()}


def group_papers_by_product_area(papers: Iterable[Paper]) -> dict[Term, list[Paper]]:
    grouped: dict[Term, list[Paper]] = defaultdict(list)
    for paper in papers:
        for product_area in paper.product_areas:
            grouped[product_area].append(paper)
    return {area: sorted(items, key=paper_sort_key) for area, items in grouped.items()}


def render_main_index(papers: list[Paper]) -> str:
    topic_groups = group_papers_by_topic(papers)
    year_groups = group_papers_by_year(papers)
    product_area_groups = group_papers_by_product_area(papers)

    lines: list[str] = []
    lines.extend([
        "## Browse by topic",
        "",
    ])
    lines.extend(render_counted_links(
        items=sorted(topic_groups, key=sort_term_key),
        count_lookup=lambda topic: len(topic_groups[topic]),
        link_lookup=lambda topic: f"topics/{quote(topic.slug + '.md', safe='/')}",
    ))
    lines.extend([
        "",
        "## Browse by year",
        "",
    ])
    lines.extend(render_counted_links(
        items=sorted(year_groups, key=lambda year: term_sort_key_for_year(year, year_groups[year])),
        count_lookup=lambda year: len(year_groups[year]),
        link_lookup=lambda year: f"years/{quote(year.slug + '.md', safe='/')}",
    ))

    if product_area_groups:
        lines.extend([
            "",
            "## Browse by product area",
            "",
        ])
        lines.extend(render_counted_links(
            items=sorted(product_area_groups, key=sort_term_key),
            count_lookup=lambda area: len(product_area_groups[area]),
            link_lookup=lambda area: f"#product-area-{area.slug}",
        ))

    lines.extend([
        "",
        "## Papers by year",
        "",
    ])
    for year in sorted(year_groups, key=lambda item: term_sort_key_for_year(item, year_groups[item])):
        lines.append(f"### [{year.label}](years/{quote(year.slug + '.md', safe='/')})")
        lines.append("")
        lines.extend(render_paper_bullets(year_groups[year], base_prefix=""))
        lines.append("")

    if product_area_groups:
        lines.extend([
            "## Papers by product area",
            "",
        ])
        for area in sorted(product_area_groups, key=sort_term_key):
            lines.append(f'<a id="product-area-{area.slug}"></a>')
            lines.append(f"### {area.label}")
            lines.append("")
            lines.extend(render_paper_bullets(product_area_groups[area], base_prefix="", include_year=True))
            lines.append("")

    return "\n".join(lines).rstrip()


def render_topic_page(topic: Term, papers: list[Paper]) -> str:
    year_groups = group_papers_by_year(papers)
    product_area_groups = group_papers_by_product_area(papers)

    lines: list[str] = [
        "## Summary",
        "",
        f"- Topic key: `{topic.slug}`",
        f"- Total papers: {len(papers)}",
        "- [All research papers](../index.md)",
    ]

    if product_area_groups:
        lines.extend([
            "",
            "## Product areas",
            "",
        ])
        lines.extend(render_counted_links(
            items=sorted(product_area_groups, key=sort_term_key),
            count_lookup=lambda area: len(product_area_groups[area]),
            link_lookup=lambda area: f"../index.md#product-area-{area.slug}",
        ))

    lines.extend([
        "",
        "## Years",
        "",
    ])
    lines.extend(render_counted_links(
        items=sorted(year_groups, key=lambda year: term_sort_key_for_year(year, year_groups[year])),
        count_lookup=lambda year: len(year_groups[year]),
        link_lookup=lambda year: f"../years/{quote(year.slug + '.md', safe='/')}",
    ))
    lines.extend([
        "",
        "## Papers by year",
        "",
    ])
    for year in sorted(year_groups, key=lambda item: term_sort_key_for_year(item, year_groups[item])):
        lines.append(f"### [{year.label}](../years/{quote(year.slug + '.md', safe='/')})")
        lines.append("")
        lines.extend(render_paper_bullets(year_groups[year], base_prefix="../"))
        lines.append("")

    return "\n".join(lines).rstrip()


def render_year_page(year: Term, papers: list[Paper]) -> str:
    topic_groups = group_papers_by_topic(papers)
    product_area_groups = group_papers_by_product_area(papers)

    lines: list[str] = [
        "## Summary",
        "",
        f"- Year: {year.label}",
        f"- Total papers: {len(papers)}",
        "- [All research papers](../index.md)",
    ]

    lines.extend([
        "",
        "## Topics",
        "",
    ])
    lines.extend(render_counted_links(
        items=sorted(topic_groups, key=sort_term_key),
        count_lookup=lambda topic: len(topic_groups[topic]),
        link_lookup=lambda topic: f"../topics/{quote(topic.slug + '.md', safe='/')}",
    ))

    if product_area_groups:
        lines.extend([
            "",
            "## Product areas",
            "",
        ])
        lines.extend(render_counted_links(
            items=sorted(product_area_groups, key=sort_term_key),
            count_lookup=lambda area: len(product_area_groups[area]),
            link_lookup=lambda area: f"../index.md#product-area-{area.slug}",
        ))

    lines.extend([
        "",
        "## Papers by topic",
        "",
    ])
    for topic in sorted(topic_groups, key=sort_term_key):
        lines.append(f"### [{topic.label}](../topics/{quote(topic.slug + '.md', safe='/')})")
        lines.append("")
        lines.extend(render_paper_bullets(topic_groups[topic], base_prefix="../"))
        lines.append("")

    return "\n".join(lines).rstrip()


def render_counted_links(
    *,
    items: Iterable[Term],
    count_lookup,
    link_lookup,
) -> list[str]:
    lines: list[str] = []
    for item in items:
        lines.append(f"- [{item.label}]({link_lookup(item)}) ({count_lookup(item)})")
    return lines or ["- None"]


def render_paper_bullets(
    papers: Iterable[Paper],
    *,
    base_prefix: str,
    include_year: bool = False,
) -> list[str]:
    lines: list[str] = []
    for paper in papers:
        parts: list[str] = []
        if include_year:
            parts.append(paper.year_label)
        if paper.orgs:
            parts.append("; ".join(paper.orgs))
        metadata = f" — {' · '.join(parts)}" if parts else ""
        lines.append(f"- [{paper.title}]({paper_link(base_prefix, paper.filename)}){metadata}")
    return lines or ["- None"]


def paper_link(base_prefix: str, filename: str) -> str:
    return quote(f"{base_prefix}{filename}", safe="/.")


def create_main_index_shell() -> str:
    return "\n".join([
        "---",
        "title: Research papers",
        "hide_table_of_contents: true",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def create_topic_shell(topic: Term) -> str:
    return "\n".join([
        "---",
        "hideNav: true",
        "hide_table_of_contents: true",
        f"title: Research topic: {topic.label}",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def create_year_shell(year: Term) -> str:
    title = f"Research papers from {year.label}" if year.slug != UNKNOWN_YEAR_SLUG else "Research papers with unknown year"
    return "\n".join([
        "---",
        "hideNav: true",
        "hide_table_of_contents: true",
        f"title: {title}",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def write_or_update(path: Path, generated_body: str, shell_factory) -> None:
    existing = path.read_text(encoding="utf-8") if path.exists() else shell_factory()
    updated = replace_generated_block(existing, generated_body)
    if updated != existing:
        path.write_text(updated, encoding="utf-8")


def replace_generated_block(text: str, generated_body: str) -> str:
    generated_block = f"{START_MARKER}\n{generated_body.rstrip()}\n{END_MARKER}"

    if START_MARKER in text and END_MARKER in text:
        start_index = text.index(START_MARKER)
        end_index = text.index(END_MARKER, start_index) + len(END_MARKER)
        replaced = text[:start_index] + generated_block + text[end_index:]
        return ensure_trailing_newline(replaced)

    if LEGACY_START_MARKER in text and LEGACY_END_MARKER in text:
        start_index = text.index(LEGACY_START_MARKER)
        end_index = text.index(LEGACY_END_MARKER) + len(LEGACY_END_MARKER)
        migrated = text[:start_index].rstrip() + "\n\n" + generated_block + text[end_index:]
        return ensure_trailing_newline(migrated)

    separator = "\n\n" if text.rstrip() else ""
    return ensure_trailing_newline(text.rstrip() + separator + generated_block)


def ensure_trailing_newline(text: str) -> str:
    return text.rstrip() + "\n"


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except FrontmatterError as exc:
        print(exc, file=sys.stderr)
        raise SystemExit(1)
