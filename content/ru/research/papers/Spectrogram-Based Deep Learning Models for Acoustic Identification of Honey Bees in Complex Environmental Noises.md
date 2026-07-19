---
hideNav: true
layout: research
hideToc: true
title: "Спектрограммы-основанные модели глубокого обучения для акустической идентификации медоносных пчёл в сложных шумовых условиях окружающей среды"
description: "Открытое сравнение архитектур CNN для распознавания жужжания медоносных пчёл в зашумлённых полевых записях, где MobileNetV2 обеспечивает наилучшую обобщающую способность."
year: '2026'
authors:
- Muhammad Anus Khan
- Bilal Hassan Khan
- Shafiq ur Rehman Khan
- Ali Raza
- Asif Raza
- Shehzad Ashraf Chaudhry
orgs:
- 🇵🇰 Namal University
- 🇵🇰 University of Mianwali
- 🇦🇪 Abu Dhabi University
- 🇹🇷 Nişantaşı University
topics:
- audio-acoustics
- datasets-benchmarks
- edge-ai-energy
productAreas:
- monitoring-platform
- edge-device
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-spectrogram-honey-bee-identification.pdf"
doi: 10.1016/j.mlwa.2025.100807
abstract: >-
  This study addresses the first stage of practical acoustic hive monitoring: distinguishing honeybee buzzing from complex environmental noise. It combines public audio with recordings from Pakistani research sites and converts the signals to mel spectrograms and chromograms for transfer learning. Among EfficientNetB0, ResNet50, and MobileNetV2, MobileNetV2 generalized best, reaching 95.29% accuracy on spectrograms and more than 90% on chromograms at an 80% confidence threshold. Augmentation improved robustness to natural noise and varying recording devices.
---

## External links

- [DOI and open-access publisher page](https://doi.org/10.1016/j.mlwa.2025.100807)
- [Referenced public bee-audio dataset](https://www.kaggle.com/dsv/5135390)

## Relevancy to Gratheon

Reliable bee-versus-background classification is a necessary input gate for any downstream model that detects queenlessness, swarming, stress, or other colony states from sound. The paper's field-noise focus is therefore more actionable than results limited to curated laboratory recordings.

MobileNetV2's generalization and relatively small compute footprint make it a useful baseline for Gratheon's edge devices. The comparison also supports using heterogeneous microphones, locations, and augmentation during training rather than optimizing only for one hive or recording setup.
