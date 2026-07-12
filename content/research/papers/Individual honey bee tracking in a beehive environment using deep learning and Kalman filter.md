---
hideNav: true
layout: research
hideToc: true
title: "Individual honey bee tracking in a beehive environment using deep learning and Kalman filter"
description: "2024 Scientific Reports paper on segmenting and tracking individual bees in an observation hive using Mask R-CNN and a Kalman filter."
year: "2024"
authors:
- Panadda Kongsilp
- Unchalisa Taetragool
- Orawan Duangphakdee
orgs:
- 🇹🇭 King Mongkut's University of Technology Thonburi (KMUTTH)
topics:
- computer-vision
- bee-behaviour
- datasets-benchmarks
productAreas:
- monitoring-platform
- hive-scanner
paperType: journal
pdf: "/assets/research/papers/pdfs/individual-honey-bee-tracking-deep-learning-kalman-filter.pdf"
doi: 10.1038/s41598-023-44718-y
abstract: >-
  The honey bee is the most essential pollinator and a key contributor to the natural ecosystem. Individual trajectories and social interactions are complex behavioral features that can provide valuable information for ecological study. This study investigated tracking individual bees in a beehive environment using deep learning and a Kalman filter. Detection and segmentation used Mask R-CNN with a ResNet-101 backbone; the Kalman filter linked segmented bees across frames. Videos from a custom observation hive were recorded at 30 fps and processed at 10 fps. The system achieved 0.85 mAP for segmentation, 77.48% MOTA, 79.79% MOTSP, and 79.56% recall for tracking.
---

[PDF](pdfs/individual-honey-bee-tracking-deep-learning-kalman-filter.pdf)

<object data={require('./pdfs/individual-honey-bee-tracking-deep-learning-kalman-filter.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1038/s41598-023-44718-y
- [Publisher page](https://www.nature.com/articles/s41598-023-44718-y)

## Abstract

Honey bee behavior inside a hive is difficult to analyze because of high density of similar objects, occlusions, small object size, diverse backgrounds, and fast motion. The authors studied individual bee tracking in an observation hive using deep learning and a Kalman filter.

Mask R-CNN with a ResNet-101 backbone was used for detection and instance segmentation. A Kalman filter then linked segmented objects across frames to build multi-bee trajectories. Video was captured in a custom observation hive at 30 fps and processed at 10 fps. Metrics included mAP for detection and segmentation, CLEAR MOT for tracking, and MOTS for joint tracking and segmentation. The model reached 0.85 mAP for segmentation, 77.48% MOTA, 79.79% MOTSP, and 79.56% recall, showing practical utility for in-hive behavior analysis.

## Relevancy to Gratheon

This paper is directly applicable to Gratheon's video-based hive monitoring: it combines detection, segmentation, and multi-object tracking in conditions similar to real observation hives. The stack could power entrance-camera analytics, bee interaction analysis, and future in-hive frame video monitoring.

The chosen metrics are especially useful for product development: Gratheon can use MOTA, MOTSP, and recall as quality benchmarks when comparing its own tracking models. The work also shows that detection alone is insufficient - useful behavioral analytics need a robust tracking layer that preserves individual trajectories through occlusions and dense motion.
