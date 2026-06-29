---
hideNav: true
layout: research
hideToc: true
title: Queen Detection in Beehives via Environmental Sensor Fusion for Low-Power Edge Computing
description: Lightweight environmental-sensor fusion system for queen presence detection, using temperature, humidity, and pressure differentials with quantized decision-tree inference on STM32 hardware.
year: '2025'
authors:
- Chiara De Luca
- Elisa Donati
orgs:
- "🇨🇭 Institute of Neuroinformatics, University of Zurich and ETH Zurich"
- "🇨🇭 Digital Society Initiative, University of Zurich"
topics:
- iot-sensors
- edge-ai-energy
- colony-health
productAreas:
- monitoring-platform
- edge-device
paperType: preprint
pdf: "/assets/research/papers/pdfs/2509.14061v1.pdf"
doi: 10.48550/arXiv.2509.14061
abstract: Queen bee presence is essential for the health and stability of honeybee colonies, yet current monitoring methods rely on manual inspections that are labor-intensive, disruptive, and impractical for large-scale beekeeping. While recent audio-based approaches have shown promise, they often require high power consumption, complex preprocessing, and are susceptible to ambient noise. To overcome these limitations, this paper proposes a lightweight, multimodal system for queen detection based on environmental sensor fusion—specifically, temperature, humidity, and pressure differentials between the inside and outside of the hive. The approach employs quantized decision tree inference on a commercial STM32 microcontroller, enabling real-time, low-power edge computing without compromising accuracy. The system achieves over 99% queen detection accuracy using only environmental inputs, with audio features offering no significant performance gain.
---

## Relevancy to Gratheon

This paper is highly relevant to Gratheon's low-power hive monitoring roadmap because it challenges the assumption that queen-state detection must rely on microphones or heavy audio preprocessing. The reported >99% accuracy from temperature, humidity, and pressure differentials suggests a practical product path for battery-powered edge devices using cheap sensors and explainable decision-tree inference on STM32-class hardware. It also gives Gratheon a useful comparison point for deciding when acoustic sensing is worth its power and deployment cost, especially for remote apiaries where continuous audio capture is fragile and energy-intensive.
