---
hideNav: true
layout: research
hideToc: true
title: "Development of Wingbeat-Based Acoustic Health Monitoring System for Bee Colonies"
description: "Three-tier IoT/fog/cloud system using Raspberry Pi microphone and STFT spectrograms with CNN/ViT classifiers to distinguish four queen-related colony states from in-hive audio."
year: "2026"
orgs:
  - 🇹🇼 National Formosa University
topics:
  - audio-acoustics
  - iot-sensors
productAreas:
  - monitoring-platform
  - colony-health
paperType: conference
---

[PDF](pdfs/Development of Wingbeat-Based Acoustic Health Monitoring System for Bee Colonies.pdf)

<object data={require('./pdfs/Development of Wingbeat-Based Acoustic Health Monitoring System for Bee Colonies.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/engproc2025120073
- [Full text (MDPI Engineering Proceedings)](https://www.mdpi.com/2673-4591/120/1/73)

## Abstract

We developed an intelligent acoustic health monitoring system for honeybee colonies based on wingbeat frequency analysis, offering a practical solution for modernizing apicultural practices. The system employs a three-layer architecture — the Internet of Things, fog, and cloud — to achieve real-time, non-invasive hive condition assessment. At the edge level, a Raspberry Pi 4B and a low-noise omnidirectional microphone continuously capture in-hive audio at 22,050 Hz, which is converted into spectrograms using short-time Fourier transform (STFT). These are analyzed by a deep learning classification model deployed on the fog layer to distinguish four critical queen-related states: original queen present, queen absent, new queen rejected, and new queen accepted. The cloud layer supports data storage, visualization, and model refinement through manual annotations. Both the vision Transformer (ViT) and CNN models perform effectively in classifying complex hive states, each contributing to the overall classification task, demonstrating the system's potential for improving colony management and early intervention. The hardware additionally includes an infrared camera, an AHT20 temperature/humidity sensor, and an HX711 load cell module.

## Relevancy to Gratheon

This paper's three-tier IoT/fog/cloud architecture — Raspberry Pi 4B plus microphone at the edge, local STFT spectrogram processing, cloud dashboard — is a direct reference implementation for Gratheon's acoustic monitoring hardware and closely mirrors Gratheon's own planned stack. The four-class queen-state classifier (present / absent / new queen rejected / new queen accepted) goes beyond binary queenlessness detection and maps to the nuanced colony-health alerts Gratheon wants to surface in its web app. The use of Vision Transformers and CNNs on spectrogram images also suggests that Gratheon's existing image-processing model pipeline could be repurposed for acoustic analysis with minimal architectural changes. The supplementary IR camera and weight sensor in the same node provide a compact multi-modal sensing blueprint that Gratheon can replicate as a single integrated hive unit.
