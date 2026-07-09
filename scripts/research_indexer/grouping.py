"""Grouping helpers for research paper indexes."""

from __future__ import annotations

from collections import defaultdict
from typing import Iterable

from .models import Paper, Term
from .normalize import paper_sort_key

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
