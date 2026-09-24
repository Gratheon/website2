---
hideNav: true
layout: research
hideToc: true
title: Bee Detection and Tracking at Hive Entrance using YOLO11 and ByteTrack
description: An entrance-monitoring preprint showing how detector training and ByteTrack tuning affect bee counts, with markedly different incoming and outgoing accuracy.
year: '2026'
authors:
- Thi Thu Thao Nguyen
- Johannes Reschke
orgs:
- 🇫🇮 Savonia University of Applied Sciences
- 🇩🇪 Ostbayerische Technische Hochschule Regensburg
topics:
- computer-vision
- bee-traffic
- bee-counting
productAreas:
- gate-tracker
paperType: preprint
doi: 10.48550/arXiv.2608.23213
abstract: >-
  This work combines YOLO11 transfer learning with ByteTrack for automatic bee entrance monitoring. It compares data augmentation, backbone freezing, and tracker settings for small, fast-moving bees. Progressive backbone unfreezing achieves approximately 97.0 percent precision and 98.7 percent mAP50, while light augmentation performs better than heavy augmentation. On an independent 25 FPS side-view video, the optimized system correctly counts 43 of 47 incoming bees (91.5 percent) but only 7 of 30 outgoing bees (23.3 percent). Error analysis attributes most counting errors to missed detections caused by rapid motion and blur, although tracker optimization reduces tracking failures. The results demonstrate why strong frame-level detection metrics must be supplemented by directional counting evaluation.
---

## Publication and access

- arXiv preprint, cs.CV, submitted 24 August 2026; version 1 has 17 pages and 13 figures. **Not identified as a peer-reviewed publication.**
- [arXiv source and author metadata](https://arxiv.org/abs/2608.23213)
- [Original open PDF, version 1](https://arxiv.org/pdf/2608.23213v1)
- License: [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/). This author grant to arXiv does not establish permission for Gratheon to redistribute the paper, so no local PDF copy is published.

The abstract above is an editorial summary of the paper. Affiliations are taken from the PDF's first page.

## Relevancy to Gratheon

The detector-plus-tracker architecture closely matches an entrance-observer pipeline. Moderate augmentation, progressive unfreezing, and low-confidence association are useful implementation hypotheses for Gratheon's own videos.

The main product lesson is the large directional performance gap. An apparently strong detector can still severely undercount departing bees, making an inferred return ratio or colony-loss alert misleading. Gratheon should evaluate incoming and outgoing count errors separately and test exposure time, frame rate, motion blur, and camera geometry before interpreting those counts as colony-health signals. A single independent video is not evidence of cross-apiary reliability.
