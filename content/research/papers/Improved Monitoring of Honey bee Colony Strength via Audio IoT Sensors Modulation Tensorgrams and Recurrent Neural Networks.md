---
hideNav: true
layout: research
hideToc: true
title: Improved Monitoring of Honey bee Colony Strength via Audio IoT Sensors, Modulation Tensorgrams and Recurrent Neural Networks
description: Modulation-tensorgram and CRDNN method for estimating honey bee colony strength from IoT hive audio, evaluated with hive-independent splits on more than 3,000 hours of UrBAN recordings.
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
- 🇨🇦 Université Laval
- 🇨🇦 Nectar Technologies Inc.
topics:
- audio-acoustics
- colony-health
- iot-sensors
- precision-beekeeping
productAreas:
- colony-health
- monitoring-platform
paperType: preprint
pdf: "/assets/research/papers/pdfs/2026-audio-colony-strength-modulation-tensorgrams.pdf"
doi: 10.48550/arXiv.2607.20386
abstract: >-
  This work estimates honey bee colony strength from remotely recorded hive audio while preserving temporal information that conventional modulation-spectrum features discard. The authors introduce modulation tensorgrams and compare two-dimensional and three-dimensional CNN, attention, and CRDNN architectures using more than 3,000 hours of public UrBAN audio; the colony-strength experiment uses recordings from nine hives. Under hive-independent cross-validation, the best CRDNN-3D model achieved a mean absolute error of 3.31 frames of bees and a correlation of 0.78, improving on the prior random-forest benchmark. Saliency and Grad-CAM analyses indicate that temporal modulation dynamics contribute to the predictions.
---

## External links

- [arXiv abstract and source](https://arxiv.org/abs/2607.20386)
- [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/)
- [UrBAN dataset paper](https://doi.org/10.1038/s41597-025-04869-1)

## Relevancy to Gratheon

This paper provides a direct acoustic route to a product-relevant colony metric rather than only classifying isolated events. Estimating frames of bees continuously could help prioritize feeding, treatment, pollination-contract, and inspection decisions while reducing disruptive manual strength assessments.

The hive-independent evaluation is particularly useful for Gratheon because it tests whether a model transfers to colonies absent from training. The modulation-tensorgram representation, reported CRDNN baseline, and explainability maps provide concrete components for benchmarking acoustic models on Gratheon's own microphones and for deciding whether the added temporal processing cost produces enough field-level accuracy.
