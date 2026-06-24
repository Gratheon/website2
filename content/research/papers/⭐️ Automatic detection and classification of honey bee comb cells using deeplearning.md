---
hideNav: true
layout: research
hideToc: true
title: "Automatic detection and classification of honey bee comb cells using deep learning"
description: "DeepBee© free software using CNN segmentation and Circle Hough Transform to detect and classify comb cells into 7 content categories, achieving 98.7% detection accuracy."
year: "2020"
orgs:
  - 🇵🇹 Instituto Politécnico de Bragança
  - 🇧🇷 Federal Technological University of Paraná
  - 🇫🇷 Université Clermont-Auvergne
topics:
  - computer-vision
  - datasets-benchmarks
productAreas:
  - hive-scanner
paperType: journal
featured: true
---

[PDF](pdfs/65.pdf)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/yTYRx04Xr6E" title="Honey Bee Conservation using Deep Learning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<object data={require('./pdfs/65.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1016/j.compag.2020.105244
- [Full text (Computers and Electronics in Agriculture)](https://www.sciencedirect.com/science/article/pii/S0168169920302957)
- [GitHub (DeepBee source code and dataset)](https://github.com/AvsThiago/DeepBee-source)

## Abstract

In a scenario of worldwide honey bee decline, assessing colony strength is becoming increasingly important for sustainable beekeeping. Temporal counts of comb cells with brood and food reserves offer researchers data for modelling colony dynamics and give beekeepers information on colony strength, an indicator of colony health and honey yield. Counting cells manually in comb images is labour intensive, tedious, and prone to error. The authors developed DeepBee©, free software capable of automatically detecting cells in comb images and classifying their contents into seven classes: eggs, larvae, capped brood, pollen, nectar, honey, and other. Using Circle Hough Transform and the semantic segmentation technique, a cell detection rate of 98.7% was achieved — 16.2% higher than the best result found in the literature. Thirteen CNN architectures were trained and evaluated for cell classification; MobileNet revealed the best compromise between training cost (~9 s per full comb image) and accuracy (F1-Score of 94.3%). All CNN models, source code, and datasets are publicly available.

## Relevancy to Gratheon

DeepBee© is the closest published analogue to Gratheon's hive-scanner product area. The seven-class cell classification (brood stages, pollen, honey) directly maps to the metrics Gratheon wants to surface in the beekeeper web app: brood nest size, food-store ratios, and brood-stage distribution. The MobileNet-based approach is lightweight enough to run on edge hardware, consistent with Gratheon's Raspberry Pi pipeline. The public dataset and open-source code are a direct training-data resource and baseline starting point for Gratheon's own comb analysis model.
