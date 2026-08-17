---
hideNav: true
layout: research
hideToc: true
title: Small-Pollinator Detection in Cluttered Field Video
description: Reproducible BuzzSpot benchmark study comparing RF-DETR and YOLO detectors, resolution scaling, sliced inference, ensembling, and temporal post-processing for tiny pollinators.
year: '2026'
authors:
- Onur Onal
- Chen Chen
orgs:
- 🇺🇸 Iowa State University
- 🇺🇸 University of Central Florida
topics:
- computer-vision
- datasets-benchmarks
- pollination-monitoring
productAreas:
- monitoring-platform
paperType: preprint
doi: 10.48550/arXiv.2607.22913
abstract: >-
  This study evaluates small-pollinator detection under a practical single-GPU budget using the CVPPA 2026 BuzzSpot dataset of bees, bumblebees, hoverflies, and moths in cluttered field video. RF-DETR Large at 1344-pixel resolution achieved the best hidden-test result of 0.405 mAP50:95, outperforming both a lower-resolution RF-DETR model and the strongest submitted YOLO baseline. Sliced inference, size-routed ensembling, higher-resolution continuation, and post-hoc temporal processing did not improve the strongest single model; bee-hoverfly confusion remained the primary error source.
---

## Code and benchmark

- [Experiment notebooks, metrics, and reproducibility scripts](https://github.com/OnurOnal7/buzzspot-pollinator-detection)
- [BuzzSpot Challenge benchmark](https://www.codabench.org/competitions/16441/)

## Source and access

- [arXiv abstract](https://arxiv.org/abs/2607.22913)
- [Open arXiv PDF](https://arxiv.org/pdf/2607.22913)

## Relevancy to Gratheon

The paper documents both successful and unsuccessful interventions for detecting very small pollinators in realistic video. This is valuable for Gratheon because it shows that increasing detector resolution and choosing a stronger architecture can matter more than adding slicing, routing, or post-processing complexity.

The repository includes fifteen experiments, hidden-test metrics, and integrity hashes, providing an unusually reproducible comparison. Its class-level analysis also exposes bee-hoverfly confusion as a concrete validation target for pollination monitoring, while the negative temporal result suggests that useful video context may need to be learned before classification rather than fused after independent frame detections.
