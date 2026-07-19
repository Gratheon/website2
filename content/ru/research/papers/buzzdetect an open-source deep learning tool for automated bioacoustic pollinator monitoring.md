---
hideNav: true
layout: research
hideToc: true
title: "BuzzDetect: инструмент на базе открытого кода для автоматизированного биоакустического мониторинга опылителей"
description: "Инструмент глубокого обучения с открытым исходным кодом, воспроизводимые данные и модели для обнаружения звуков полёта насекомых в длительных полевых аудиозаписях."
year: '2025'
authors:
- Luke E. Hearon
- Lillian H. P. Johnson
- James Underwood
- Chia-Hua Lin
- Reed M. Johnson
orgs:
- "🇺🇸 The Ohio State University"
- "🇺🇸 Dartmouth College"
topics:
- audio-acoustics
- datasets-benchmarks
- pollination-ecology
productAreas:
- monitoring-platform
paperType: preprint
pdf: "/assets/research/papers/pdfs/2025-buzzdetect.pdf"
doi: 10.1101/2025.06.13.659554
abstract: Long-term pollinator studies are limited by the cost and poor scalability of traditional observations such as sweep netting and pan trapping. This work introduces buzzdetect, an open-source tool that applies deep learning to passive audio recordings to distinguish insect flight buzzes from environmental noise. At a precision of 95%, the accompanying model achieved 27% sensitivity. Applied to recordings from pumpkin, watermelon, mustard, and soybean fields, the system revealed differences in the timing and intensity of foraging activity. The authors provide the source code and current models on GitHub and archive the data and code required to reproduce the manuscript results on Zenodo.
---

## Relevancy to Gratheon

buzzdetect contributes a reproducible software and data pipeline for processing long-duration field audio, a capability that can complement Gratheon's in-hive acoustics with monitoring of foraging activity around an apiary. Its public code, models, and Zenodo archive make it useful for evaluating audio segmentation, deployment workflows, and transfer learning on Gratheon recordings. The reported operating point must be interpreted carefully: 95% precision minimizes false buzz detections, but 27% sensitivity misses most buzz events. It is therefore a practical open baseline and data resource, not yet a drop-in production counter.

## Code and data

- [Source code and current models](https://github.com/OSU-Bee-Lab/buzzdetect)
- [Reproducibility archive on Zenodo](https://doi.org/10.5281/zenodo.15644084)

## Source and access

The preprint is available from [bioRxiv](https://doi.org/10.1101/2025.06.13.659554) under the [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/).
