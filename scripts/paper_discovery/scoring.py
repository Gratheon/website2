"""Relevance scoring and filtering for OpenAlex candidates."""

from __future__ import annotations

from typing import Any

from .constants import REJECTION_KEYWORDS, TECH_TERMS


def reconstruct_abstract(inverted_index: dict[str, list[int]] | None) -> str:
    if not inverted_index:
        return ""
    try:
        words: list[tuple[int, str]] = []
        for word, indices in inverted_index.items():
            for idx in indices:
                words.append((idx, word))
        words.sort()
        return " ".join(word for _, word in words)
    except Exception:
        return ""


def score_candidate(item: dict[str, Any]) -> dict[str, Any]:
    title = item.get("title", "")
    abstract = reconstruct_abstract(item.get("abstract_inverted_index", {}))
    full_text = f"{title} {abstract}".lower()

    direct_terms = [
        "precision beekeeping",
        "precision apiculture",
        "smart beehive",
        "smart bee hive",
        "varroa destructor",
        "varroa mite",
        "bee traffic",
        "hive entrance",
        "waggle dance",
        "queenless",
        "queenlessness",
        "swarming",
        "mite fall",
        "beehive monitoring",
        "hive monitoring",
        "electronic hive monitoring",
        "continuous electronic",
        "beehive telemetry",
    ]
    if any(term in full_text for term in direct_terms):
        topic_score = 4
    elif any(term in full_text for term in ("honey bee", "honeybee", "apis mellifera")):
        monitoring_terms = [
            "monitoring",
            "sensor",
            "iot",
            "camera",
            "acoustic",
            "vibration",
            "weight",
            "computer vision",
            "deep learning",
            "machine learning",
            "object detection",
            "tracking",
            "dataset",
            "telemetry",
        ]
        topic_score = 3 if any(term in full_text for term in monitoring_terms) else 1
    elif "pollinator" in full_text and any(
        term in full_text for term in ("monitoring", "camera", "computer vision", "acoustic")
    ):
        topic_score = 2
    else:
        topic_score = 0

    novelty_score = 2

    high_relevance_terms = [
        "dataset",
        "detection",
        "detect",
        "classify",
        "classification",
        "forecast",
        "forecasting",
        "predicting",
        "prediction",
        "counting",
        "count",
        "acoustic monitoring",
        "weight monitoring",
        "vision",
        "video",
        "microphone",
        "accelerometer",
    ]
    if topic_score >= 3 and any(term in full_text for term in high_relevance_terms):
        relevance_score = 2
    elif topic_score >= 2:
        relevance_score = 1
    else:
        relevance_score = 0

    venue_type = item.get("type", "")
    source_score = 1 if venue_type in {
        "journal-article",
        "journal",
        "book-chapter",
        "proceedings-article",
        "proceedings",
    } else 0

    open_access = item.get("open_access", {})
    best_oa = item.get("best_oa_location") or {}
    pdf_url = best_oa.get("pdf_url") or item.get("primary_location", {}).get("pdf_url")
    pdf_score = 1 if pdf_url and (open_access.get("is_oa") or best_oa.get("is_oa")) else 0

    return {
        "title": title,
        "doi": item.get("doi"),
        "date": item.get("publication_date"),
        "year": item.get("publication_year"),
        "pdf_url": pdf_url,
        "topic_score": topic_score,
        "novelty_score": novelty_score,
        "relevance_score": relevance_score,
        "source_score": source_score,
        "pdf_score": pdf_score,
        "total_score": topic_score + novelty_score + relevance_score + source_score + pdf_score,
        "abstract": abstract,
        "item": item,
    }


def should_reject_candidate(scored: dict[str, Any]) -> bool:
    title_lower = scored["title"].lower()
    abstract_lower = scored["abstract"].lower()
    full_text = f"{title_lower} {abstract_lower}"

    for keyword in REJECTION_KEYWORDS:
        if keyword in title_lower:
            return True
        if keyword in abstract_lower and keyword not in {"detection", "monitoring", "sensor"}:
            return True

    if "stingless" in full_text:
        return True
    return False


def passes_quality_filter(scored: dict[str, Any]) -> bool:
    if not scored.get("pdf_url"):
        return False

    full_text = f"{scored['title']} {scored['abstract']}".lower()
    if not any(term in full_text for term in TECH_TERMS):
        return False
    return True
