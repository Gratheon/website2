"""Normalization and sorting helpers for research metadata."""

from __future__ import annotations

from .constants import ACRONYM_WORDS, SLUG_SAFE, UNKNOWN_YEAR_SLUG
from .models import Paper, Term

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


def yaml_double_quote(value: str) -> str:
    # WHY: Generated titles can contain `: `, which is invalid as a plain YAML scalar.
    # WHAT: Return a simple double-quoted scalar for frontmatter title fields.
    escaped = value.replace("\\", "\\\\").replace('"', '\"').replace("\n", "\\n")
    return f'"{escaped}"'


def paper_sort_key(paper: Paper) -> tuple[tuple[int, int, str], str, str]:
    return (paper.year_sort, paper.title.casefold(), paper.filename.casefold())


def sort_term_key(term: Term) -> tuple[str, str]:
    return (term.label.casefold(), term.slug)


def sort_term_key_by_count(term: Term, count: int) -> tuple[int, str, str]:
    return (-count, term.label.casefold(), term.slug)


def term_sort_key_for_year(year: Term, year_papers: list[Paper]) -> tuple[int, int, str]:
    if year.slug == UNKNOWN_YEAR_SLUG:
        return (1, 0, year.label.casefold())
    if year.slug.isdigit():
        return (0, -int(year.slug), year.slug)
    return (0, 0, year.label.casefold())
