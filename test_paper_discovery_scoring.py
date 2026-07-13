from __future__ import annotations

import unittest
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent / "scripts"))

from paper_discovery.cli import score_candidates_file
from paper_discovery.scoring import passes_quality_filter, score_candidate, should_reject_candidate


def abstract_index(text: str) -> dict[str, list[int]]:
    index: dict[str, list[int]] = {}
    for position, word in enumerate(text.split()):
        index.setdefault(word, []).append(position)
    return index


def candidate(title: str, abstract: str) -> dict:
    return {
        "title": title,
        "abstract_inverted_index": abstract_index(abstract),
        "publication_year": 2026,
        "publication_date": "2026-07-01",
        "type": "journal-article",
        "open_access": {"is_oa": True},
        "best_oa_location": {"is_oa": True, "pdf_url": "https://example.org/paper.pdf"},
    }


POSITIVE_FIXTURES = [
    candidate(
        "A Wireless Sensor Platform for Beehive Monitoring",
        "A wireless sensor board provides real-time monitoring of honey bee colonies with temperature, humidity, CO2 sensors and telemetry from live beehives.",
    ),
    candidate(
        "FAIRHiveFrames-1K: A Public FAIR Dataset of Annotated Hive Frame Images",
        "In precision apiculture a camera captures hive frame image data for computer vision. The image dataset contains annotated hive frame regions and YOLO object detection baselines.",
    ),
    candidate(
        "BeeVe: Unsupervised Acoustic State Discovery in Honey Bee Buzzing",
        "This work uses hive audio and acoustic monitoring of honey bee buzzing with machine learning to discover colony state from unlabelled bee audio recordings.",
    ),
    candidate(
        "On the Prediction of Varroa Mite Infestations in Honeybee Colonies via Acoustic Monitoring",
        "The paper predicts Varroa destructor infestation in honeybee colonies using acoustic monitoring, microphones, hive sensors and machine learning.",
    ),
    candidate(
        "Localising Honeybees with Deep-Learning Based Methods",
        "The RoboRoyale bee robotics project trains deep-learning object detection models to detect honeybees in low-light observation hives and support bio-hybrid colony experiments.",
    ),
    candidate(
        "A Hall-Effect Sensor-Based Queen Bee Detection System - a Proof of Concept",
        "A queen bee detection system uses an array of Hall-effect sensors and a magnetic tag at the hive entrance to monitor queen passages during mating flights.",
    ),
]


NEGATIVE_FIXTURES = [
    candidate(
        "Bio-inspired Waggle Dance-driven Transformer for Adaptive Intrusion Detection in Software-defined Networks",
        "A bio-inspired waggle dance-driven transformer for SDN intrusion detection routes traffic images to experts and is evaluated on CICIDS and 5G-NIDD security datasets.",
    ),
    candidate(
        "Integrating sniffer bees into security and defenses: Advancements in the detection of explosives and illicit substances",
        "Sniffer bees are trained for security, landmine and explosive detection, illicit drugs and defense applications using olfactory conditioning.",
    ),
    candidate(
        "Comparative Transcriptomic and ceRNA Network Analyses of Apis mellifera Workers from Queenright and Queenless Colonies",
        "Whole-transcriptome sequencing, lncRNA, miRNA and bioinformatics analyses profile non-coding RNA networks in heads of Apis mellifera workers.",
    ),
    candidate(
        "Integrated respiratory metabolism and hemolymph proteome of caste specific features during honeybee development",
        "Respirometry and high-resolution mass spectrometry build a proteomic dataset of hemolymph proteome profiles for biological characteristics of queens, workers and drones.",
    ),
    candidate(
        "A tiny ant that uses pine mycorrhizal fungus to line its nest",
        "Colonies of a tiny ant use mycorrhizal fungus in nest chambers. This ecology study measures foraging, soil bacteria and nest architecture without bee monitoring technology.",
    ),
    candidate(
        "Biomonitoring with bees and bee products: multielement profiles including technology-critical elements",
        "Honeybees and bee products are biomonitors of environmental pollution. Propolis, pollen, honey and wax are analysed by ICP-MS for multielement profiles.",
    ),
    candidate(
        "Improved Breast Cancer Localization by using Hybrid Approach with Swarm Intelligence and Deep Learning",
        "A medical imaging model uses a Honeybee Algorithm for hyperparameter optimization on breast cancer MRI and ultrasound datasets.",
    ),
    candidate(
        "Bio-Inspired Energy-Efficient Routing for Wireless Sensor Networks Based on Honeybee Foraging Behavior",
        "A generic WSN mobile sink routing algorithm maps honeybee foraging behavior to MILP and Q-learning for wireless sensor network scheduling.",
    ),
]


class ScoringFilterTest(unittest.TestCase):
    def test_positive_monitoring_fixtures_pass_filter(self) -> None:
        for fixture in POSITIVE_FIXTURES:
            with self.subTest(title=fixture["title"]):
                scored = score_candidate(fixture)
                self.assertGreaterEqual(scored["total_score"], 7)
                self.assertFalse(should_reject_candidate(scored))
                self.assertTrue(passes_quality_filter(scored))

    def test_negative_false_positive_fixtures_are_rejected(self) -> None:
        for fixture in NEGATIVE_FIXTURES:
            with self.subTest(title=fixture["title"]):
                scored = score_candidate(fixture)
                self.assertTrue(should_reject_candidate(scored))

    def test_cli_scoring_keeps_recall_while_removing_false_positives(self) -> None:
        input_path = Path(self._testMethodName + "_input.json")
        output_path = Path(self._testMethodName + "_output.json")
        try:
            import json

            input_path.write_text(json.dumps(POSITIVE_FIXTURES + NEGATIVE_FIXTURES), encoding="utf-8")
            scored = score_candidates_file(input_path, min_score=7, apply_filter=True, output_path=output_path)
            titles = {item["title"] for item in scored}

            self.assertEqual(titles, {fixture["title"] for fixture in POSITIVE_FIXTURES})
        finally:
            input_path.unlink(missing_ok=True)
            output_path.unlink(missing_ok=True)


if __name__ == "__main__":
    unittest.main()
