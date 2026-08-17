---
hideNav: true
layout: research
hideToc: true
title: On-device deep learning for real-time acoustic monitoring of endangered Bombus dahlbomii and invasive congeners
description: Published TinyML study deploying an 8-bit pollinator acoustic classifier on a MAX78000 sensor with measured accuracy, latency, and energy consumption.
year: '2026'
authors:
- Patrick Chwalek
- Marie Kuronaga
- Marco Giordano
- Aidan Bradshaw
- Isamar Zhu
- Joseph A. Paradiso
- Marina Arbetman
orgs:
- 🇺🇸 Massachusetts Institute of Technology
- 🇯🇵 Kioxia Corporation
- 🇨🇭 ETH Zurich
- 🇦🇷 INIBIOMA, Universidad Nacional del Comahue and CONICET
topics:
- audio-acoustics
- edge-ai-energy
- pollination-monitoring
productAreas:
- edge-device
- monitoring-platform
paperType: journal
doi: 10.1038/s41598-026-65371-1
abstract: >-
  This study develops an on-device acoustic classifier for the endangered Patagonian bumblebee Bombus dahlbomii, invasive Bombus terrestris, and background sounds. An 8-bit quantized CNN with 158,144 parameters was deployed on a MAX78000 microcontroller integrated into the BuzzCam sensor platform. It achieved 86.1 percent held-out accuracy, processed each one-second audio segment in 10.4 milliseconds, and consumed 794 microjoules per active classification. The underlying field audio and annotations are publicly available.
---

## Data and source

- [Public acoustic and environmental dataset](https://doi.org/10.6084/m9.figshare.28408568)
- [Open-access publisher page](https://doi.org/10.1038/s41598-026-65371-1)
- [Open publisher PDF](https://www.nature.com/articles/s41598-026-65371-1_reference.pdf)
- [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 license](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## Relevancy to Gratheon

Although this system classifies bumblebees outside the hive, it validates a reusable edge architecture for bee acoustics with unusually complete deployment measurements. Gratheon can use its 158K-parameter model, quantization-aware workflow, 10.4 ms latency, and sub-millijoule inference result as realistic design targets for autonomous acoustic sensors.

The work also demonstrates the value of rejecting environmental negatives on-device before transmitting data. That pattern transfers to hive monitoring, where edge filtering can reduce bandwidth and storage while preserving recordings likely to contain bees, queenlessness cues, swarming signals, or other management-relevant acoustic events.
