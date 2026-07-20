---
hideNav: true
layout: research
hideToc: true
title: An Automated AI-Based Vision Inspection System for Bee Mite and Deformed Bee Detection Using YOLO Models
description: An automated two-sided comb imaging system that detects Varroa mites and deformed honey bees with YOLOv8 and YOLOv11 models.
year: '2026'
authors:
- Jeong-Yong Shin
- Hong-Gu Lee
- Su-bae Kim
- Changyeun Mo
orgs:
- "🇰🇷 Kangwon National University"
- "🇰🇷 National Institute of Agricultural Sciences"
- "🇰🇷 Terramolab Ltd."
topics:
- computer-vision
- varroa-health
- colony-health
- edge-ai-energy
productAreas:
- hive-scanner
- colony-health
- edge-device
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-ai-vision-bee-mite-deformed-bee-detection.pdf"
doi: 10.3390/agriculture16080840
abstract: >-
  The authors present an automated visual inspection system that rotates a comb for RGB imaging on both sides and detects normal bees, Varroa mites, and deformed bees with six YOLOv8 and YOLOv11 models. Evaluated on 405 test images containing 6441 objects, the system reduced inspection time from 240 seconds manually to 20 seconds per comb. YOLOv8l achieved an F1 score of 92.5% and mAP@0.5 of 92.1% for mites, while YOLOv11s reached an F1 score of 95.1% for deformed bees. The study also reports morphology-dependent errors and a sensitivity-specificity trade-off between the model variants.
---

## Source and access

- [DOI and publisher page](https://doi.org/10.3390/agriculture16080840)
- [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/)

## Relevancy to Gratheon

This work is directly applicable to Gratheon's hive-scanner and colony-health roadmap. Its motorized two-sided imaging fixture provides a concrete reference for repeatable comb capture, while the task-specific comparison shows that the best small-mite detector is not necessarily the best deformed-bee detector. A production scanner may therefore benefit from separate optimized models or a routed multi-model pipeline rather than one universal detector.

The reported false-negative and false-positive trade-off is also operationally important. Gratheon can use a high-sensitivity model for screening and a more discriminative model or human review for confirmation, while retaining the 12-fold inspection-time improvement demonstrated by the automated acquisition workflow.