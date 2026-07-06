---
hideNav: true
layout: research
hideToc: true
title: "Automated, non-invasive Varroa mite detection by vibrational measurements of gait combined with machine learning"
description: "2023 Scientific Reports paper using vibrational signatures of Varroa destructor gait and machine learning as a non-invasive remote Varroa monitoring modality."
year: "2023"
authors:
- Harriet Hall
- Martin Bencsik
- Michael I. Newton
orgs:
- 🇬🇧 Nottingham Trent University
topics:
- varroa-health
- audio-acoustics
- iot-sensors
productAreas:
- colony-health
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/automated-non-invasive-varroa-mite-detection-vibrational-gait-machine-learning.pdf"
doi: 10.1038/s41598-023-36810-0
---

[PDF](pdfs/automated-non-invasive-varroa-mite-detection-vibrational-gait-machine-learning.pdf)

<object data={require('./pdfs/automated-non-invasive-varroa-mite-detection-vibrational-gait-machine-learning.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1038/s41598-023-36810-0
- [Publisher PDF](https://www.nature.com/articles/s41598-023-36810-0.pdf)

## Abstract

Varroa destructor is a devastating ectoparasite of the honeybee, and the authors investigate whether Varroa-specific vibrational traces can be detected automatically for remote, non-invasive monitoring. Vibrations were measured from freshly collected capped brood-comb while video recordings and critical listening were used to build a training database for discrimination and classification. The work characterises Varroa gait vibrations and evaluates signal features for distinguishing mite activity from honeybee signals, highlighting the value of two-dimensional Fourier transforms in invertebrate vibration analysis. Detection was more difficult for mites inside capped brood cells, where induced signals are weaker than on the cell surface, but the study advances a new vibration-based detection strategy for Varroa control.

## Relevancy to Gratheon

This is a strong fit for Gratheon's colony-health roadmap because it proposes a sensing modality that does not require sticky-board imaging or opening the hive. Vibration-based Varroa monitoring could complement Gratheon's audio, weight, and entrance-camera signals and may be deployable with low-cost piezo or accelerometer hardware. The paper is also a useful cautionary reference: signal strength depends on mite location and comb context, so Gratheon would need robust sensor placement, validation datasets, and confidence scoring before turning vibration detections into treatment recommendations.
