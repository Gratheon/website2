"""Frontmatter shells for generated research index pages."""

from __future__ import annotations

from .constants import END_MARKER, START_MARKER, UNKNOWN_YEAR_SLUG
from .models import Term
from .normalize import yaml_double_quote

def create_main_index_shell() -> str:
    return "\n".join([
        "---",
        f"title: {yaml_double_quote('Research papers')}",
        "navTitle: Papers",
        "layout: research",
        "order: 5",
        "hideToc: true",
        "---",
        "",
        "This section tracks external academic work relevant to digital beekeeping, bee health, observability, robotics, and machine learning.",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def create_scientific_publications_shell() -> str:
    return "\n".join([
        "---",
        f"title: {yaml_double_quote('Scientific publications')}",
        "description: Browse the full Gratheon bibliography of external scientific publications relevant to digital beekeeping, bee health, observability, robotics, and machine learning.",
        "navTitle: Publications",
        "layout: research",
        "order: 10",
        "hideToc: true",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def create_topics_index_shell() -> str:
    return "\n".join([
        "---",
        f"title: {yaml_double_quote('Research paper topics')}",
        "navTitle: Topics",
        "layout: research",
        "order: 20",
        "hideToc: true",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def create_years_index_shell() -> str:
    return "\n".join([
        "---",
        f"title: {yaml_double_quote('Research papers by year')}",
        "navTitle: Years",
        "layout: research",
        "order: 30",
        "hideToc: true",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def create_product_areas_index_shell() -> str:
    return "\n".join([
        "---",
        f"title: {yaml_double_quote('Research papers by product area')}",
        "navTitle: Product areas",
        "layout: research",
        "order: 40",
        "hideToc: true",
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
        "layout: research",
        "hideToc: true",
        f"title: {yaml_double_quote(f'Research topic: {topic.label}')}",
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
        "layout: research",
        "hideToc: true",
        f"title: {yaml_double_quote(title)}",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])


def create_product_area_shell(product_area: Term) -> str:
    return "\n".join([
        "---",
        "hideNav: true",
        "layout: research",
        "hideToc: true",
        f"title: {yaml_double_quote(f'Research product area: {product_area.label}')}",
        "---",
        "",
        START_MARKER,
        END_MARKER,
        "",
    ])
