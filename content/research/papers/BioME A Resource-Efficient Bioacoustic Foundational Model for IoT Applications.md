---
hideNav: true
layout: research
hideToc: true
title: 'BioME: A Resource-Efficient Bioacoustic Foundational Model for IoT Applications'
description: Open bioacoustic foundation models distilled for edge devices and evaluated on queen presence, colony strength, bee identification, and hive-audio activity detection.
year: '2026'
authors:
- Heitor R. Guimarães
- Abhishek Tiwari
- Mahsa Abdollahi
- Anderson R. Avila
- Tiago H. Falk
orgs:
- 🇨🇦 Institut national de la recherche scientifique (INRS)
topics:
- audio-acoustics
- colony-health
- edge-ai-energy
- iot-sensors
productAreas:
- colony-health
- edge-device
- monitoring-platform
paperType: preprint
pdf: "/assets/research/papers/pdfs/2026-biome-bioacoustic-foundation-model.pdf"
doi: 10.48550/arXiv.2602.09970
abstract: >-
  BioME is a family of resource-efficient bioacoustic audio encoders trained by layer-wise knowledge distillation and conditioned with modulation-spectrum features. The models reduce parameter count by up to 75 percent while matching or exceeding larger encoders on broad bioacoustic benchmarks. The authors also evaluate queen-presence classification, colony-strength regression, bee identification, and voice-activity detection from beehive audio. The six-million-parameter Edge model produced the best efficiency-weighted aggregate score and generalized strongly across hives. Code and pretrained checkpoints are public.
---

## Models and access

- [Pretrained BioME model collection](https://huggingface.co/collections/Hguimaraes/biome)
- [arXiv abstract and source](https://arxiv.org/abs/2602.09970)
- [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/)

## Relevancy to Gratheon

BioME is directly actionable for Gratheon's acoustic monitoring stack because it benchmarks one reusable encoder across four hive tasks rather than optimizing a separate feature pipeline for each outcome. The cross-hive queen-presence test is particularly important for avoiding models that memorize the acoustics of individual colonies or recording setups.

The six-million-parameter Edge checkpoint offers a concrete starting point for local inference and transfer learning. Its strong efficiency-weighted score and publicly downloadable model variants let Gratheon compare accuracy, memory, and latency trade-offs before collecting enough labeled hive audio to train a foundation model from scratch.
