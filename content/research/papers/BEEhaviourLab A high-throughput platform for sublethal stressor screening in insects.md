---
hideNav: true
layout: research
hideToc: true
title: 'BEEhaviourLab: A high-throughput platform for sublethal stressor screening in insects'
description: Open-source multimodal platform combining synchronized video, audio, tag-free computer vision tracking, and acoustic analysis for honey bees, bumblebees, solitary bees, and hoverflies.
year: '2026'
authors:
- Rachel H. Parkinson
- Oliver N. F. King
- Jung Chun (Zaza) Kuo
- Kieran Walter
- Ash Silva
- Jennifer Scott
- Cait Newport
- Geraldine A. Wright
- Stephen Roberts
orgs:
- 🇬🇧 University of Oxford
- 🇬🇧 Queen Mary University of London
- 🇬🇧 University of Edinburgh
topics:
- audio-acoustics
- behavior-recognition
- computer-vision
- datasets-benchmarks
productAreas:
- monitoring-platform
paperType: preprint
doi: 10.64898/2026.03.03.709383
abstract: >-
  BEEhaviourLab is a low-cost platform for long-duration, high-throughput insect behavioral phenotyping with synchronized video and audio. A lightweight YOLOv8n detector tracks multiple untagged insects and generalizes across Bombus terrestris, Apis mellifera, Colletes hederae, and Eristalis tenax, while the acoustic pipeline quantifies buzzing behavior. The authors demonstrate that video activity and buzzing reveal sublethal pesticide stress in bumblebees. Hardware designs, Raspberry Pi control software, and a detector-training tutorial are released under CC0.
---

## Open hardware and software

- [Apparatus designs and Raspberry Pi control software](https://github.com/BEEhaviourLab/BEEhaviourLab-apparatus)
- [YOLO detector training tutorial](https://github.com/BEEhaviourLab/BEEhaviourLab-YOLO-training)

## Source and access

- [bioRxiv preprint](https://doi.org/10.64898/2026.03.03.709383)
- [Open bioRxiv PDF](https://www.biorxiv.org/content/10.64898/2026.03.03.709383v1.full.pdf)
- [Creative Commons Attribution-NonCommercial 4.0 license](https://creativecommons.org/licenses/by-nc/4.0/)

## Relevancy to Gratheon

BEEhaviourLab provides a reusable blueprint for combining camera and microphone data instead of treating the modalities as separate experiments. Its tag-free honey-bee tracking, synchronized acquisition, and modular Raspberry Pi controls can inform Gratheon prototypes for recognizing subtle behavior and stress before colony-level symptoms become obvious.

The fully open apparatus and retraining tutorial are especially useful for reproducibility. Although the validation experiment is laboratory-based and focuses on pesticide stress in bumblebees, the platform's multi-species detector and acoustic endpoints can be adapted to honey-bee health, movement, and behavior studies with substantially less custom infrastructure.
