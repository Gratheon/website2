---
hideNav: true
layout: research
hideToc: true
title: 'InsectDCT: A generalized pipeline for detection, taxonomic classification, and tracking of insects in camera-trap recordings'
description: An open computer-vision pipeline and 60,000-image resource for detecting, hierarchically classifying, and tracking pollinators including honey bees and bumble bees.
year: '2026'
authors:
- Kim Bjerge
- Simon F. A. Wogram
- Pau Enric Serra-Marin
- Otar Sakhiashvili
- Toke T. Høye
orgs:
- "🇩🇰 Aarhus University"
- "🇩🇪 Helmholtz Centre for Environmental Research"
- "🇪🇸 Mediterranean Institute for Advanced Studies"
- "🇬🇪 Ilia State University"
topics:
- computer-vision
- datasets-benchmarks
- pollination-ecology
- edge-ai-energy
productAreas:
- monitoring-platform
- edge-device
paperType: preprint
pdf: "/assets/research/papers/pdfs/2026-insectdct-pollinator-detection-tracking.pdf"
doi: 10.64898/2026.07.07.736939
abstract: >-
  InsectDCT is an open pipeline for detecting insects in camera-trap footage with YOLO11, classifying detections through an 80-group hierarchical taxonomy, and linking observations with multi-object tracking. Motion-enhanced images improve robustness against cluttered vegetation, and the detector is trained and tested on more than 60,000 images from varied plants, habitats, and camera systems. The taxonomy includes Apis mellifera and several Bombus groups. The authors release the GPL-licensed Python implementation and datasets and demonstrate inference on low-power Raspberry Pi hardware.
---

## Code and data

- [GPL-3.0 source code](https://github.com/kimbjerge/insectDCT)
- [Published training and evaluation datasets](https://doi.org/10.5281/zenodo.21154489)

## Source and access

- [bioRxiv preprint](https://doi.org/10.64898/2026.07.07.736939)
- [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/)

## Relevancy to Gratheon

Although InsectDCT targets pollinators and other insects rather than only hive footage, it is directly reusable for Gratheon's field monitoring because honey bees and bumble bees are explicit taxonomy classes. Hierarchical classification is particularly valuable when image quality does not support species-level certainty: the system can still return a defensible family or genus-level label instead of forcing an unreliable prediction.

The motion-enhanced detector, track-level visitation summaries, diverse public datasets, and Raspberry Pi deployment path offer practical components for entrance-observer and pollination-monitoring prototypes. They also provide a strong benchmark for testing whether Gratheon's models generalize across vegetation backgrounds, camera types, insect sizes, and deployment sites.