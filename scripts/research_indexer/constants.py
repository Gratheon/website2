"""Shared paths and constants for research index generation."""

from __future__ import annotations

import re
from pathlib import Path

SITE_ROOT = Path(__file__).resolve().parents[2]
PAPERS_DIR = SITE_ROOT / "content/research/papers"
SCIENTIFIC_PUBLICATIONS_DIR = PAPERS_DIR / "scientific-publications"
TOPICS_DIR = PAPERS_DIR / "topics"
YEARS_DIR = PAPERS_DIR / "years"
PRODUCT_AREAS_DIR = PAPERS_DIR / "product-areas"

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
