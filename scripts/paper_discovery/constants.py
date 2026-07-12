"""Paths and shared constants for research paper discovery."""

from __future__ import annotations

from pathlib import Path

SITE_ROOT = Path(__file__).resolve().parents[2]
PAPERS_DIR = SITE_ROOT / "content/research/papers"
PDF_DIR = PAPERS_DIR / "pdfs"
CACHE_DIR = SITE_ROOT / ".cache/paper_discovery"

OPENALEX_USER_AGENT = "mailto:research@gratheon.com"

OPENALEX_QUERIES = [
    "precision beekeeping",
    "precision apiculture",
    "smart beehive",
    "smart bee hive",
    "honey bee monitoring",
    "honey bee sensor",
    "honey bee IoT",
    "honey bee camera",
    "honey bee acoustic",
    "honey bee vibration",
    "honeybee computer vision",
    "honeybee deep learning",
    "honeybee object detection",
    "honeybee tracking",
    "Apis mellifera monitoring",
    "Apis mellifera detection",
    "Varroa destructor",
    "bee traffic",
    "hive entrance",
    "queenless",
    "queenlessness",
    "swarming honey bee",
    "waggle dance",
    "bee dataset",
    "beehive dataset",
    "pollinator computer vision",
]

ARXIV_QUERIES = [
    "beekeeping",
    "apiculture",
    "beehive",
    "honeybee",
    '"honey bee"',
    '"Apis mellifera"',
    '"Varroa destructor"',
]

REJECTION_KEYWORDS = [
    "breeding goal",
    "essential oil",
    "nanoemulsion",
    "nutritional supplement",
    "candy paste",
    "microbiome",
    "pesticide",
    "neonicotinoid",
    "toxic",
    "toxicology",
    "heavy metal",
    "pollen analysis",
    "flower",
    "forage behavior",
    "stingless bee",
    "tetragonisca",
    "apitherapy",
    "ferromagnetism",
    "phylogeny",
    "pathogen",
    "virus",
    "recapping behaviour",
    "pyrethroid resistance",
    "honey yield",
    "climate-driven",
    "maxent",
    "parasitism",
    "semen",
    "sperm",
    "venom",
    "mating",
    "gut microbiota",
    "gut bacteria",
    "foraged",
    "foraging pattern",
    "foraging activity of",
    "foraging performance of",
    "plant-pollinator",
]

TECH_TERMS = [
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
    "hall-effect",
    "microphone",
]
