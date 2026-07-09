"""Domain models for generated research paper indexes."""

from __future__ import annotations

from dataclasses import dataclass

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
