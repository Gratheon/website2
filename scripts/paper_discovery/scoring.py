"""Relevance scoring and filtering for OpenAlex candidates."""

from __future__ import annotations

import re
from typing import Any

from .constants import REJECTION_KEYWORDS, TECH_TERMS


FIELD_MONITORING_TERMS = [
    "apiary monitoring",
    "beehive monitoring",
    "hive monitoring",
    "hive sensor",
    "hive sensors",
    "in-hive sensor",
    "in hive sensor",
    "smart beehive",
    "smart bee hive",
    "precision beekeeping",
    "precision apiculture",
    "remote monitoring",
    "electronic hive monitoring",
    "beehive telemetry",
    "hive telemetry",
    "continuous hive weight monitoring",
    "weight monitoring",
    "hive weight monitoring",
    "environmental sensing",
    "sensor board",
    "sensor platform",
    "sensor system",
    "wireless sensor platform",
    "hall-effect",
    "microphone",
    "accelerometer",
    "camera",
    "thermal imaging",
    "computer vision",
    "object detection",
    "image-based",
    "video tracking",
    "acoustic monitoring",
    "acoustic analysis",
    "hive audio",
    "bee audio",
    "vibration",
    "edge computing",
    "edge machine learning",
    "iot",
    "lora",
    "telemetry",
]

DATASET_TECH_TERMS = [
    "annotated hive frame",
    "hive frame image",
    "image dataset",
    "video dataset",
    "audio dataset",
    "acoustic dataset",
    "computer vision",
    "object detection",
    "yolo",
    "tracking dataset",
]

HIVE_CONTEXT_TERMS = [
    "apiary",
    "apiculture",
    "bee hive",
    "bee colony",
    "beehive",
    "colony health",
    "hive",
    "honey bee colony",
    "honeybee colony",
    "queen bee",
    "varroa",
]

BEE_SUBJECT_TERMS = [
    "apis mellifera",
    "bee hive",
    "bee colony",
    "beehive",
    "honey bee",
    "honeybee",
    "honeybees",
    "varroa",
]

BIO_INSPIRED_COMPUTING_TERMS = [
    "artificial bee colony",
    "bee algorithm",
    "bee colony algorithm",
    "bee colony optimization",
    "bee-inspired",
    "bio-inspired",
    "biomimetic",
    "honeybee algorithm",
    "honeybee foraging behavior",
    "swarm intelligence",
    "waggle dance-driven",
]

OFF_DOMAIN_COMPUTING_TERMS = [
    "5g-nidd",
    "breast cancer",
    "cicids",
    "dwa",
    "feature optimization",
    "intrusion detection",
    "landmine",
    "medical image",
    "medical imaging",
    "mobile sink",
    "network intrusion",
    "obstacle avoidance",
    "path planning",
    "robot navigation",
    "routing",
    "sdn",
    "software-defined network",
    "tumor",
    "wireless sensor network",
    "wsn",
]

SNIFFER_SECURITY_TERMS = [
    "defense",
    "defences",
    "defenses",
    "explosive",
    "explosives",
    "illicit",
    "landmine",
    "landmines",
    "security",
]

MOLECULAR_BIOLOGY_TERMS = [
    "bioinformatics",
    "cerna",
    "gene expression",
    "genomic",
    "hemolymph",
    "lncrna",
    "mass spectrometry",
    "metabolomic",
    "microrna",
    "molecular",
    "non-coding rna",
    "proteome",
    "proteomic",
    "rna sequencing",
    "transcriptome",
    "transcriptomic",
    "virome",
]

NON_MONITORING_ECOLOGY_TERMS = [
    "bee products",
    "biomonitoring",
    "biodiversity",
    "ecological adaptation",
    "environmental pollution",
    "foraging productivity",
    "locomotor activity",
    "mycorrhizal fungus",
    "plant-pollinator",
    "pollination services",
    "sustainable ecosystem",
]

GENERIC_RESEARCH_NOISE_TERMS = [
    "editorial:",
    "quantum-like",
    "neuroscience",
    "question-answering phenomena",
]

GENERIC_ROBOT_NAVIGATION_TERMS = [
    "a*-dwa",
    "desert ants",
    "dynamic obstacle",
    "global path planning",
    "obstacle avoidance",
    "path relaxation",
    "robot navigation",
]

STRONG_REJECTION_KEYWORDS = {
    "apitherapy",
    "breeding goal",
    "candy paste",
    "essential oil",
    "ferromagnetism",
    "gut bacteria",
    "gut microbiota",
    "microbiome",
    "nanoemulsion",
    "nutritional supplement",
    "pesticide",
    "phylogeny",
    "semen",
    "sperm",
    "stingless bee",
    "tetragonisca",
    "venom",
}


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


def _contains_any(text: str, terms: list[str] | tuple[str, ...] | set[str]) -> bool:
    return any(_contains_word_or_phrase(text, term) for term in terms)


def _contains_word_or_phrase(text: str, term: str) -> bool:
    if not re.search(r"\w", term):
        return term in text

    suffix = r"(?:s|es|ed|ing|ies)?" if re.search(r"[a-z]$", term) else ""
    return re.search(rf"(?<!\w){re.escape(term)}{suffix}(?!\w)", text) is not None


def _has_hive_context(text: str) -> bool:
    return _contains_any(text, HIVE_CONTEXT_TERMS)


def _has_bee_subject(text: str) -> bool:
    return _contains_any(text, BEE_SUBJECT_TERMS)


def _has_field_monitoring_technology(text: str) -> bool:
    """Return true for technology that observes real bees, hives, or Varroa.

    July 2026 OpenAlex results contained many papers that used words such as
    sensor, detection, dataset, and waggle dance metaphorically. This helper is
    intentionally stricter than TECH_TERMS: generic ML, generic datasets, and
    biomonitoring are not enough unless tied to hive/bee observation technology.
    """
    if _contains_any(text, FIELD_MONITORING_TERMS) and _has_hive_context(text):
        return True

    if "dataset" in text and _contains_any(text, DATASET_TECH_TERMS) and _has_bee_subject(text):
        return True

    if _contains_any(text, ("roboroyale", "bee robot", "bee robotics", "bio-hybrid")) and _has_bee_subject(text):
        return True

    return False


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
    if _contains_any(full_text, direct_terms):
        topic_score = 4
    elif _contains_any(full_text, ("honey bee", "honeybee", "honeybees", "apis mellifera")):
        monitoring_terms = [
            "monitoring",
            "sensor",
            "sensors",
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
        topic_score = 3 if _contains_any(full_text, monitoring_terms) else 1
    elif _contains_word_or_phrase(full_text, "pollinator") and _contains_any(
        full_text, ("monitoring", "camera", "computer vision", "acoustic")
    ):
        topic_score = 2
    else:
        topic_score = 0

    novelty_score = 2
    high_relevance_terms = [
        "dataset",
        "detection",
        "detect",
        "detecting",
        "detected",
        "classify",
        "classifies",
        "classified",
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
    if topic_score >= 3 and _contains_any(full_text, high_relevance_terms):
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
    has_field_technology = _has_field_monitoring_technology(full_text)

    if _contains_any(full_text, GENERIC_RESEARCH_NOISE_TERMS) and not has_field_technology:
        return True

    if _contains_any(full_text, GENERIC_ROBOT_NAVIGATION_TERMS) and not has_field_technology:
        return True

    if "biomonitoring" in title_lower and not _contains_any(full_text, FIELD_MONITORING_TERMS):
        return True
    # Reject computing papers that only borrow bee metaphors, e.g. waggle-dance
    # transformers for SDN, honeybee foraging WSN routing, or medical models tuned
    # by a honeybee algorithm. Real bee robotics/CV work is kept by the field-tech check.
    if _contains_any(full_text, BIO_INSPIRED_COMPUTING_TERMS) and _contains_any(full_text, OFF_DOMAIN_COMPUTING_TERMS):
        if not has_field_technology:
            return True

    if "sniffer bee" in full_text or "sniffer bees" in full_text:
        if _contains_any(full_text, SNIFFER_SECURITY_TERMS):
            return True

    if _contains_any(full_text, MOLECULAR_BIOLOGY_TERMS) and not has_field_technology:
        return True

    if _contains_any(full_text, NON_MONITORING_ECOLOGY_TERMS) and not has_field_technology:
        return True

    if " ant " in f" {title_lower} " and not _has_bee_subject(full_text):
        return True

    for keyword in REJECTION_KEYWORDS:
        if keyword in title_lower:
            if keyword in STRONG_REJECTION_KEYWORDS or not has_field_technology:
                return True
        if keyword in abstract_lower and keyword not in {"detection", "monitoring", "sensor"}:
            if keyword in STRONG_REJECTION_KEYWORDS or not has_field_technology:
                return True

    if "stingless" in full_text:
        return True
    return False


def passes_quality_filter(scored: dict[str, Any]) -> bool:
    if not scored.get("pdf_url"):
        return False

    full_text = f"{scored['title']} {scored['abstract']}".lower()
    if not _contains_any(full_text, TECH_TERMS):
        return False
    return True
