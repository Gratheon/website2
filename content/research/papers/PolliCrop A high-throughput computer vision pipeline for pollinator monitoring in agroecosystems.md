---
hideNav: true
layout: research
hideToc: true
title: 'PolliCrop: A high-throughput computer vision pipeline for pollinator monitoring in agroecosystems'
description: A reproducible camera-trap and deep-learning pipeline for continuous monitoring of honey bees, bumble bees, and other flower visitors on sunflower crops.
year: '2026'
authors:
- Stan Chabert
- Jordan Bernigaud-Samatan
- Benjamin K. Blackman
- Nicolas Blanchet
- Olivier Catrice
- Cécile Donnadieu
- Marianne Gani
- Rémi Grousset
- Salena Husband
- Guillaume Tueux
- Silvio Erler
- Nicolas B. Langlade
orgs:
- "🇫🇷 INRAE"
- "🇫🇷 CNRS"
- "🇺🇸 University of California, Berkeley"
- "🇩🇪 Julius Kühn Institute"
- "🇩🇪 Technische Universität Braunschweig"
topics:
- computer-vision
- pollination-ecology
- datasets-benchmarks
productAreas:
- monitoring-platform
paperType: preprint
pdf: "/assets/research/papers/pdfs/2026-pollicrop-pollinator-monitoring.pdf"
doi: 10.64898/2026.07.08.737348
abstract: >-
  PolliCrop combines standardized day-and-night sunflower camera traps with deep-learning models that detect three major visitor classes: non-Bombus bees, including Apis mellifera, bumble bees, and lepidopterans. The authors validate two model versions against manual observations on three sunflower genotypes and present statistical workflows for comparing visitation frequencies with or without weather variables. The best version estimated visitation on two genotypes within 10% of the observed values. Data, spreadsheets, Python libraries, and R analysis code are publicly available.
---

## Code and data

- [Public data, Python libraries, and R code](https://forge.inrae.fr/astr/public/pollicrop_libraries)

## Source and access

- [bioRxiv preprint](https://doi.org/10.64898/2026.07.08.737348)
- [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/)

## Relevancy to Gratheon

PolliCrop is useful for extending Gratheon's monitoring beyond the hive entrance to crop-level pollination activity. Its standardized camera-trap protocol, continuous day-and-night capture, and weather-aware analysis provide a practical template for measuring how managed honey bees and bumble bees use flowering crops without relying on destructive sampling.

The documented processing and statistical resources are especially valuable for prototyping a pollination-service monitoring product. The reported performance also sets a realistic validation target: visitation estimates can be accurate at aggregate level even when individual detections remain imperfect, but transfer to a new crop or camera geometry requires local images and retraining.d retraining.images and retraining.