"""Load research paper metadata from markdown frontmatter."""

from __future__ import annotations

from pathlib import Path

import yaml

from .constants import FRONTMATTER_PATTERN, PAPERS_DIR, UNCATEGORIZED_TOPIC_SLUG
from .models import FrontmatterError, Paper, Term
from .normalize import normalize_string_list, normalize_terms, normalize_year, paper_sort_key

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
