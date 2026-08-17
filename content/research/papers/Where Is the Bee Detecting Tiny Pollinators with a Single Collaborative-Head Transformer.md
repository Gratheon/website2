---
hideNav: true
layout: research
hideToc: true
title: 'Where Is the Bee? Detecting Tiny Pollinators with a Single Collaborative-Head Transformer'
description: First-place BuzzSpot Challenge system for detecting tiny bees and other pollinators in field video with a single Co-DINO model, class-aware crop mosaics, and fixed-ETF regularization.
year: '2026'
authors:
- Junsu Kim
- Seungryul Baek
orgs:
- 🇰🇷 Ulsan National Institute of Science and Technology (UNIST)
topics:
- computer-vision
- datasets-benchmarks
- pollination-monitoring
productAreas:
- monitoring-platform
paperType: preprint
doi: 10.48550/arXiv.2608.08580
abstract: >-
  This paper presents the first-place single-model solution to the CVPPA@ECCV 2026 BuzzSpot Challenge, which localizes bees, bumblebees, hoverflies, and moths in high-resolution field video. The authors select Co-DINO with a Swin-L backbone after comparing ten detector configurations, then address severe class imbalance with rare-class crop mosaics and a class-weighted simplex equiangular tight frame loss. The resulting model reached 0.5062 mAP@[.5:.95] on the hidden FinalTest set without inference-time ensembling or test-time augmentation.
---

## Code and benchmark

- [Official BeeHunters implementation](https://github.com/jjunsss/BeeHunters)
- [BuzzSpot Challenge benchmark](https://www.codabench.org/competitions/16441/)

## Source and access

- [arXiv abstract](https://arxiv.org/abs/2608.08580)
- [Open arXiv PDF](https://arxiv.org/pdf/2608.08580)

## Relevancy to Gratheon

This work provides a strong, externally evaluated baseline for detecting bees when each insect occupies only a tiny fraction of a field image. Its comparison of detector families and its rare-class strategy are directly useful when Gratheon must distinguish honey bees from visually similar insects rather than merely detect generic motion.

The single-model result is operationally relevant because it avoids ensemble and test-time augmentation costs. The code, hidden-test score, and explicit treatment of class imbalance make the system a practical benchmark for crop-level pollination monitoring and for testing whether similar training methods improve small-bee detection around hive entrances.
