---
hideNav: true
layout: research
hideToc: true
title: Estimating colony strength and pollination efficiency in honey bees using a novel dataset and deep learning-based models
description: This research introduces a deep learning-based computer vision system for automated honey bee identification and categorization at hive entrances to estimate different castes. The presence of pollen f...
year: '2026'
authors:
- Piyush Chaudhary
- C. Michael Foley
- Sathishkumar Samiappan
- Leon Kohler
- Volkan Senyurek
- Dawson Boes
- Priyadarshini Chakrabarti
orgs:
- 🇺🇸 University of Arkansas at Fayetteville
- 🇺🇸 Washington State University
- 🇺🇸 University of Arkansas System
- 🇺🇸 Mississippi State University
- 🇺🇸 University of Tennessee at Knoxville
topics:
- computer-vision
- bee-behaviour
- datasets-benchmarks
productAreas:
- monitoring-platform
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-estimating-colony-strength-deep-learning.pdf"
doi: 10.1016/j.atech.2026.102005
abstract: This research introduces a deep learning-based computer vision system for automated honey bee identification and categorization at hive entrances to estimate different castes. The presence of pollen foragers at hive entrances is used to estimate colony health, colony strength and pollination efficiency. No study has created a tool for monitoring completely unmodified hives in real-world conditions. The system was trained and evaluated on video frames captured over two years via GoPro cameras, which encompasses various lighting and weather conditions. Bees were annotated to three categories: 1. Worker bee – No pollen, 2. Worker bee – pollen and 3. Drone bee. Five object detection models were compared: YOLOv10, FrCNN, RetinaNet, FCOS, and SSD. YOLOv10 and FrCNN achieved >93% accuracy. The study also contributes to a publicly available dataset of 4,590 frames with 79,212 bee annotations.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it directly informs the development of monitoring-platform, colony-health using technologies like computer-vision, bee-behaviour, datasets-benchmarks. Its findings and methods can be directly applied to our precision apiculture telemetry and edge diagnostics pipelines to build reliable, scalable beehive monitoring products.
