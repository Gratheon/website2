---
hideNav: true
layout: research
hideToc: true
title: Automatic detection and classification of honey bee comb cells using deep learning
description: DeepBee© free software using CNN segmentation and Circle Hough Transform to detect and classify comb cells into 7 content categories, achieving 98.7% detection accuracy.
year: '2020'
authors:
- Thiago S. Alves
orgs:
- "\U0001F1F5\U0001F1F9 Instituto Politécnico de Bragança"
- "\U0001F1E7\U0001F1F7 Federal Technological University of Paraná"
- "\U0001F1EB\U0001F1F7 Université Clermont-Auvergne"
topics:
- computer-vision
- datasets-benchmarks
productAreas:
- hive-scanner
paperType: journal
pdf: "/assets/research/papers/pdfs/65.pdf"
doi: 10.1016/j.compag.2020.105244
abstract: 'In a scenario of worldwide honey bee decline, assessing colony strength is becoming increasingly important for sustainable beekeeping. Temporal counts of comb cells with brood and food reserves offer researchers data for modelling colony dynamics and give beekeepers information on colony strength, an indicator of colony health and honey yield. Counting cells manually in comb images is labour intensive, tedious, and prone to error. The authors developed DeepBee©, free software capable of automatically detecting cells in comb images and classifying their contents into seven classes: eggs, larvae, capped brood, pollen, nectar, honey, and other. Using Circle Hough Transform and the semantic segmentation technique, a cell detection rate of 98.7% was achieved — 16.2% higher than the best result found in the literature. Thirteen CNN architectures were trained and evaluated for cell classification; MobileNet revealed the best compromise between training cost (~9 s per full comb image) and accuracy (F1-Score of 94.3%). All CNN models, source code, and datasets are publicly available.'
featured: true
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/yTYRx04Xr6E" title="Honey Bee Conservation using Deep Learning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Relevancy to Gratheon

DeepBee© is the closest published analogue to Gratheon's hive-scanner product area. The seven-class cell classification (brood stages, pollen, honey) directly maps to the metrics Gratheon wants to surface in the beekeeper web app: brood nest size, food-store ratios, and brood-stage distribution. The MobileNet-based approach is lightweight enough to run on edge hardware, consistent with Gratheon's Raspberry Pi pipeline. The public dataset and open-source code are a direct training-data resource and baseline starting point for Gratheon's own comb analysis model.
