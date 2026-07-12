"""String normalization helpers for deduplication."""

from __future__ import annotations

import re

STAR_EMOJI_PATTERN = re.compile(r"[\u2b50\ufe0f]")


def normalize_title(title: str | None) -> str:
    if not title:
        return ""
    normalized = title.lower()
    normalized = STAR_EMOJI_PATTERN.sub("", normalized)
    normalized = re.sub(r"[^\w\s]", "", normalized)
    return " ".join(normalized.split())


def normalize_doi(doi: str | None) -> str:
    if not doi:
        return ""
    return doi.strip().lower().replace("https://doi.org/", "")
