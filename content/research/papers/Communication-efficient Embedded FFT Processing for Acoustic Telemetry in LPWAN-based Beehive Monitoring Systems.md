---
hideNav: true
layout: research
hideToc: true
title: Communication-efficient Embedded FFT Processing for Acoustic Telemetry in LPWAN-based Beehive Monitoring Systems
description: Embedded FFT pipeline for ESP32-class hive nodes that sends compact acoustic descriptors over LTE-M or NB-IoT instead of bandwidth- and energy-intensive raw audio.
year: '2026'
authors:
- Sebastian Górecki
orgs:
- 🇵🇱 Lodz University of Technology
topics:
- audio-acoustics
- edge-ai-energy
- iot-sensors
- precision-beekeeping
productAreas:
- edge-device
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-embedded-fft-acoustic-telemetry.pdf"
doi: 10.26636/jtit.2026.3.2678
abstract: >-
  This paper presents an embedded fast Fourier transform pipeline for communication-efficient acoustic monitoring of honey bee colonies. An ESP32-class node extracts dominant frequency, amplitude, spectral centroid, entropy, and band-energy descriptors locally and sends a compact feature vector over LTE-M or NB-IoT instead of raw audio. The firmware benchmark reports 0.227 ms total processing time, a 4-byte minimal descriptor versus a 32,768-byte I2S buffer, and an 8,192-fold estimated reduction in payload, airtime, and transmission energy. Evaluation on labeled queenright and queenless recordings found that mean spectral amplitude remained statistically significant while dominant frequency alone did not reliably separate colony states.
---

## External links

- [DOI and publisher page](https://doi.org/10.26636/jtit.2026.3.2678)
- [Journal open-access policy](https://jtit.pl/jtit/oap)
- [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/)

## Relevancy to Gratheon

This study directly addresses the cost of operating acoustic sensors in remote apiaries. Its local FFT design and measured payload reduction provide a practical reference for sending interpretable hive-audio telemetry over constrained networks without uploading a continuous raw stream.

For Gratheon's edge devices, the firmware memory, processing-time, sleep-current, LTE-M, and NB-IoT measurements can inform sampling and transmission budgets. The small biological evaluation should not be treated as a production queenlessness classifier, but its negative result for dominant frequency is equally actionable: a reliable product should retain richer spectral descriptors and validate them across more hives before generating colony-health alerts.
