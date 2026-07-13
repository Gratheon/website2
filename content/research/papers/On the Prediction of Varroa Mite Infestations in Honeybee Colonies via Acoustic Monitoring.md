---
hideNav: true
layout: research
hideToc: true
title: On the Prediction of Varroa Mite Infestations in Honeybee Colonies via Acoustic Monitoring
description: IEEE Sensors Journal study using conventional and modulation spectrogram descriptors with machine learning to predict Varroa infestation levels from hive audio.
year: '2026'
authors:
- Mahsa Abdollahi
- Yi Zhu
- Heitor R. Guimarães
- Nico Coallier
- Ségolène Maucourt
- Pierre Giovenazzo
- Tiago H. Falk
orgs:
- 🇨🇦 Institut national de la recherche scientifique (INRS)
- 🇨🇦 Nectar Technologies Inc.
- 🇨🇦 Université Laval
topics:
- audio-acoustics
- varroa-health
- colony-health
- precision-beekeeping
productAreas:
- colony-health
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-varroa-acoustic-monitoring.pdf"
doi: 10.1109/JSEN.2026.3666127
abstract: >-
  This study predicts Varroa mite infestation levels from acoustic recordings made inside honeybee hives. It introduces nine spectral shape descriptors computed from conventional and modulation spectrograms and compares them with traditional cepstral features using support vector machines, random forests, and k-nearest neighbors. The proposed descriptors improve classification across multiple measures, particularly under the more demanding hive-independent evaluation, supporting scalable and non-invasive monitoring of parasitic threats.
---

## External links

- [DOI and publisher page](https://doi.org/10.1109/JSEN.2026.3666127)
- [Open TechRxiv version](https://www.techrxiv.org/doi/10.36227/techrxiv.177102146.64196787)

## Relevancy to Gratheon

This is a direct colony-health use case for microphones already suitable for continuous hive monitoring. The hive-independent evaluation is especially valuable because production models must generalize beyond the colonies and recording sessions used for training.

The nine spectral shape descriptors and modulation-spectrogram pipeline provide concrete features to benchmark against Gratheon's existing acoustic embeddings. Their output could complement visual mite detection and environmental telemetry, helping prioritize physical inspections while avoiding disruptive alcohol-wash sampling as the first-line screening method.
