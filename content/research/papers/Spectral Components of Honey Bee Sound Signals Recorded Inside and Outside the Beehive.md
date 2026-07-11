---
hideNav: true
layout: research
hideToc: true
title: 'Spectral Components of Honey Bee Sound Signals Recorded Inside and Outside the Beehive: An Explainable Machine Learning Approach to Diurnal Pattern Recognition'
description: Explainable comparison of internal and external hive microphones using spectral features, Extra Trees, and CNNs to classify diurnal honey bee activity patterns.
year: '2025'
authors:
- Piotr Książek
- Urszula Libal
- Aleksandra Król-Nowak
orgs:
- "🇵🇱 Wrocław University of Science and Technology"
- "🇵🇱 AGH University of Krakow"
topics:
- audio-acoustics
- iot-sensors
- edge-ai-energy
productAreas:
- monitoring-platform
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/sensors-25-04424.pdf"
doi: 10.3390/s25144424
abstract: This study investigates the impact of microphone placement on honey bee audio monitoring for time-of-day classification, a key step toward automated activity monitoring and anomaly detection. A custom apparatus enabled simultaneous audio acquisition from internal brood-frame and external hive locations. Sound signals were represented using power spectral density, and Extra Trees and convolutional neural network classifiers were trained to identify diurnal activity patterns. Extra Trees achieved 98-99% accuracy with internal recordings but only 61-72% with external recordings, while CNNs trained on external data achieved 76-87%. Feature selection identified the 100-600 Hz band as especially informative, with relevant components remaining below 2 kHz. The results support internal microphone placement and suggest that low sampling rates and comparatively lightweight models can be sufficient for baseline acoustic hive monitoring.
---

## Relevancy to Gratheon

This paper provides concrete hardware and signal-processing guidance for Gratheon's acoustic monitoring stack. Its simultaneous inside-versus-outside comparison shows that microphone placement can matter more than model complexity: classical Extra Trees reached near-perfect diurnal classification from protected brood-frame recordings but degraded substantially outside the hive. The identified frequency range also suggests that a 4 kHz sampling rate may be sufficient for this task, reducing storage, bandwidth, and edge-compute requirements. These results are useful for microphone enclosure design, sensor placement, edge preprocessing, and establishing a normal daily acoustic baseline before attempting colony-state anomaly detection.

## Source and access

The peer-reviewed article was published in *Sensors* and is available under the [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/). Metadata and the publisher version are available through [DOI 10.3390/s25144424](https://doi.org/10.3390/s25144424).
