"""Markdown and HTML renderers for research indexes."""

from __future__ import annotations

import html
from typing import Iterable
from urllib.parse import quote

from .constants import UNKNOWN_YEAR_SLUG
from .grouping import group_papers_by_product_area, group_papers_by_topic, group_papers_by_year
from .models import Paper, Term
from .normalize import sort_term_key, term_sort_key_for_year

def render_main_index(papers: list[Paper]) -> str:
    topic_groups = group_papers_by_topic(papers)
    year_groups = group_papers_by_year(papers)
    product_area_groups = group_papers_by_product_area(papers)

    # WHY: /research/papers/ should not repeat the visual Papers map above.
    # WHAT: render compact filter cards with emoji icons that point to each
    # browsing mode while keeping the page short and scannable.
    cards = [
        (
            "📚",
            "Scientific publications",
            "scientific-publications/",
            f"All {len(papers)} paper notes in one bibliography.",
        ),
        (
            "🏛️",
            "Research teams",
            "teams/",
            "Academic groups active in precision beekeeping research.",
        ),
        (
            "🏷️",
            "Topics",
            "topics/",
            f"Filter by {len(topic_groups)} research topics.",
        ),
        (
            "📅",
            "Years",
            "years/",
            f"Filter by {len(year_groups)} publication years.",
        ),
    ]

    if product_area_groups:
        cards.append((
            "🧩",
            "Product areas",
            "product-areas/",
            f"Map papers to {len(product_area_groups)} Gratheon product areas.",
        ))

    cards.append((
        "🔎",
        "Sources",
        "other-research-sources/",
        "Open external academic search entry points.",
    ))

    lines: list[str] = [
        '<section class="research-paper-filters" aria-labelledby="research-paper-filters-title">',
        '  <div class="research-paper-filters__intro">',
        '    <p class="research-card-meta">Paper filters</p>',
        '    <h2 id="research-paper-filters-title">Find papers by bibliography, topic, year, product area, or team</h2>',
        '    <p>Use these filters to narrow the literature library. The full list of individual papers starts on Scientific publications.</p>',
        '  </div>',
        '  <div class="research-paper-filter-grid">',
    ]

    for icon, label, href, description in cards:
        lines.extend([
            f'    <a class="research-paper-filter-card" href="{html.escape(href, quote=True)}">',
            f'      <span class="research-paper-filter-card__icon" aria-hidden="true">{html.escape(icon)}</span>',
            f'      <span class="research-paper-filter-card__body"><strong>{html.escape(label)}</strong><small>{html.escape(description)}</small></span>',
            '    </a>',
        ])

    lines.extend([
        '  </div>',
        '</section>',
    ])

    return "\n".join(lines).rstrip()


def render_scientific_publications_index(papers: list[Paper]) -> str:
    topic_groups = group_papers_by_topic(papers)
    year_groups = group_papers_by_year(papers)
    product_area_groups = group_papers_by_product_area(papers)

    lines: list[str] = [
        '<section class="research-publications-summary" aria-label="Scientific publications summary">',
        f'  <p class="research-card-meta">{len(papers)} paper notes</p>',
        '  <p>This bibliography links to individual paper notes kept at their existing URLs under <code>/research/papers/</code>.</p>',
        '  <div class="research-publication-filter-links" aria-label="Alternative filters">',
        f'    <a href="../topics/">🏷️ Topics <span>{len(topic_groups)}</span></a>',
        f'    <a href="../years/">📅 Years <span>{len(year_groups)}</span></a>',
    ]

    if product_area_groups:
        lines.append(f'    <a href="../product-areas/">🧩 Product areas <span>{len(product_area_groups)}</span></a>')

    lines.extend([
        '    <a href="../">← Research papers hub</a>',
        '  </div>',
        '</section>',
        '',
        '## Publications',
        '',
    ])
    lines.extend(render_paper_bullets(papers, base_prefix="../", include_year=True))
    return "\n".join(lines).rstrip()


def render_topics_index(papers_by_topic: dict[Term, list[Paper]]) -> str:
    lines: list[str] = [
        "Browse research papers by topic.",
        "",
        "- [Research papers hub](../index.md)",
        "- [Scientific publications](../scientific-publications/index.md)",
        "",
        "Topics:",
        "",
    ]
    lines.extend(render_counted_links(
        items=sorted(papers_by_topic, key=sort_term_key),
        count_lookup=lambda topic: len(papers_by_topic[topic]),
        link_lookup=lambda topic: quote(topic.slug + ".md", safe="/."),
    ))
    return "\n".join(lines).rstrip()


def render_years_index(papers_by_year: dict[Term, list[Paper]]) -> str:
    lines: list[str] = [
        "Browse research papers by publication year.",
        "",
        "- [Research papers hub](../index.md)",
        "- [Scientific publications](../scientific-publications/index.md)",
        "",
        "Years:",
        "",
    ]
    lines.extend(render_counted_links(
        items=sorted(papers_by_year, key=lambda year: term_sort_key_for_year(year, papers_by_year[year])),
        count_lookup=lambda year: len(papers_by_year[year]),
        link_lookup=lambda year: quote(year.slug + ".md", safe="/."),
    ))
    return "\n".join(lines).rstrip()


def render_product_areas_index(papers_by_product_area: dict[Term, list[Paper]]) -> str:
    lines: list[str] = [
        "Browse research papers by Gratheon product area.",
        "",
        "- [Research papers hub](../index.md)",
        "- [Scientific publications](../scientific-publications/index.md)",
        "",
        "Product areas:",
        "",
    ]
    lines.extend(render_counted_links(
        items=sorted(papers_by_product_area, key=sort_term_key),
        count_lookup=lambda area: len(papers_by_product_area[area]),
        link_lookup=lambda area: quote(area.slug + ".md", safe="/."),
    ))
    return "\n".join(lines).rstrip()


def render_topic_page(topic: Term, papers: list[Paper]) -> str:
    year_groups = group_papers_by_year(papers)
    product_area_groups = group_papers_by_product_area(papers)

    lines: list[str] = [
        "## Summary",
        "",
        f"- Topic key: `{topic.slug}`",
        f"- Total papers: {len(papers)}",
        "- [Research papers hub](../index.md)",
        "- [All topics](index.md)",
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
            link_lookup=lambda area: f"../product-areas/{quote(area.slug + '.md', safe='/')}",
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
        "- [Research papers hub](../index.md)",
        "- [All years](index.md)",
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
            link_lookup=lambda area: f"../product-areas/{quote(area.slug + '.md', safe='/')}",
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


def render_product_area_page(product_area: Term, papers: list[Paper]) -> str:
    topic_groups = group_papers_by_topic(papers)
    year_groups = group_papers_by_year(papers)

    lines: list[str] = [
        "## Summary",
        "",
        f"- Product area key: `{product_area.slug}`",
        f"- Total papers: {len(papers)}",
        "- [Research papers hub](../index.md)",
        "- [All product areas](index.md)",
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
