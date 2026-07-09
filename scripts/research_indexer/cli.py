"""Command-line orchestration for research index generation."""

from __future__ import annotations

import sys

from .constants import PAPERS_DIR, PRODUCT_AREAS_DIR, SCIENTIFIC_PUBLICATIONS_DIR, TOPICS_DIR, YEARS_DIR
from .grouping import group_papers_by_product_area, group_papers_by_topic, group_papers_by_year
from .loader import load_papers
from .models import FrontmatterError
from .normalize import sort_term_key, term_sort_key_for_year
from .rendering import (
    render_main_index,
    render_product_area_page,
    render_product_areas_index,
    render_scientific_publications_index,
    render_topic_page,
    render_topics_index,
    render_year_page,
    render_years_index,
)
from .shells import (
    create_main_index_shell,
    create_product_area_shell,
    create_product_areas_index_shell,
    create_scientific_publications_shell,
    create_topic_shell,
    create_topics_index_shell,
    create_year_shell,
    create_years_index_shell,
)
from .writer import write_or_update

def main() -> int:
    if not PAPERS_DIR.exists():
        raise SystemExit(f"Papers directory does not exist: {PAPERS_DIR}")

    papers = load_papers()

    SCIENTIFIC_PUBLICATIONS_DIR.mkdir(parents=True, exist_ok=True)
    TOPICS_DIR.mkdir(parents=True, exist_ok=True)
    YEARS_DIR.mkdir(parents=True, exist_ok=True)
    PRODUCT_AREAS_DIR.mkdir(parents=True, exist_ok=True)

    write_or_update(
        PAPERS_DIR / "index.md",
        render_main_index(papers),
        create_main_index_shell,
    )

    papers_by_topic = group_papers_by_topic(papers)
    papers_by_year = group_papers_by_year(papers)
    papers_by_product_area = group_papers_by_product_area(papers)

    write_or_update(
        SCIENTIFIC_PUBLICATIONS_DIR / "index.md",
        render_scientific_publications_index(papers),
        create_scientific_publications_shell,
    )
    write_or_update(
        TOPICS_DIR / "index.md",
        render_topics_index(papers_by_topic),
        create_topics_index_shell,
    )
    write_or_update(
        YEARS_DIR / "index.md",
        render_years_index(papers_by_year),
        create_years_index_shell,
    )
    write_or_update(
        PRODUCT_AREAS_DIR / "index.md",
        render_product_areas_index(papers_by_product_area),
        create_product_areas_index_shell,
    )

    for topic in sorted(papers_by_topic, key=sort_term_key):
        write_or_update(
            TOPICS_DIR / f"{topic.slug}.md",
            render_topic_page(topic, papers_by_topic[topic]),
            lambda current_topic=topic: create_topic_shell(current_topic),
        )

    for year in sorted(papers_by_year, key=lambda term: term_sort_key_for_year(term, papers_by_year[term])):
        write_or_update(
            YEARS_DIR / f"{year.slug}.md",
            render_year_page(year, papers_by_year[year]),
            lambda current_year=year: create_year_shell(current_year),
        )

    for product_area in sorted(papers_by_product_area, key=sort_term_key):
        write_or_update(
            PRODUCT_AREAS_DIR / f"{product_area.slug}.md",
            render_product_area_page(product_area, papers_by_product_area[product_area]),
            lambda current_product_area=product_area: create_product_area_shell(current_product_area),
        )

    print(
        "Generated research indexes for "
        f"{len(papers)} papers, {len(papers_by_topic)} topic pages, "
        f"{len(papers_by_year)} year pages, and "
        f"{len(papers_by_product_area)} product-area pages."
    )
    return 0


def run() -> None:
    try:
        raise SystemExit(main())
    except FrontmatterError as exc:
        print(exc, file=sys.stderr)
        raise SystemExit(1)
