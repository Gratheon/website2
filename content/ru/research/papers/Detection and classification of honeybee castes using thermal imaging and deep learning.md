---
hideNav: true
layout: research
hideToc: true
title: "Обнаружение и классификация каст медоносных пчёл с помощью тепловизионной съёмки и глубокого обучения"
description: "Открытое исследование по классификации маток, рабочих пчёл и трутней более чем на 500 тепловых изображениях с использованием ручных тепловых признаков и нейронных сетей."
year: '2026'
authors:
- Alireza Derakhshi
- Hekmat Rabbani
- Rashid Gholami
- Saeid Farokhzad
- Saeid Jalali Honarmand
orgs:
- 🇮🇷 Razi University
topics:
- computer-vision
- bee-behaviour
- datasets-benchmarks
productAreas:
- hive-scanner
- colony-health
paperType: journal
doi: 10.1016/j.jafr.2026.102828
abstract: >-
  This study captures more than 500 thermal images of honeybee queens, workers, and drones in a controlled temperature and humidity setup. It analyzes caste-specific surface-temperature distributions and evaluates histogram and co-occurrence features with artificial neural networks as well as convolutional and probabilistic neural networks. The reported results show that thermal imagery contains enough information to distinguish honeybee castes, with the convolutional approach classifying the study images correctly.
---

## External links

- [DOI and legal open full text](https://doi.org/10.1016/j.jafr.2026.102828)
- [Publisher article page](https://www.sciencedirect.com/science/article/pii/S2666154326001985)

## Relevancy to Gratheon

Thermal imagery offers a modality that is less dependent on visible-light conditions and surface color than standard RGB cameras. Caste classification could help a hive scanner locate queens and separate drones from workers while also providing body-temperature measurements.

The reported perfect classification should be treated as an in-dataset result rather than evidence of field-ready generalization, because the dataset is controlled and relatively small. Even so, the paper provides a useful baseline and supports testing thermal and RGB fusion in future Gratheon data-collection experiments.
