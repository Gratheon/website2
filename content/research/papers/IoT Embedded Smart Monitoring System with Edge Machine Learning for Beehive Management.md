---
hideNav: true
layout: research
hideToc: true
title: "IoT Embedded Smart Monitoring System with Edge Machine Learning for Beehive Management"
description: "2024 open-access IoT/TinyML beehive monitoring proof-of-concept using sensors, hive-noise feature extraction, edge inference, and low-power microcontroller deployment for automated hive-management support."
year: "2024"
authors:
- Mihai Doinea
- Ioana Trandafir
- Cristian-Valeriu Toma
- Marius Popa
- Alin Zamfiroiu
orgs:
- 🇷🇴 Bucharest University of Economic Studies
- 🇷🇴 National Institute for Research & Development in Informatics
topics:
- iot-sensors
- edge-ai-energy
- audio-acoustics
productAreas:
- monitoring-platform
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/iot-embedded-smart-monitoring-system-edge-machine-learning-beehive-management.pdf"
doi: 10.15837/ijccc.2024.4.6632
---

[PDF](pdfs/iot-embedded-smart-monitoring-system-edge-machine-learning-beehive-management.pdf)

<object data={require('./pdfs/iot-embedded-smart-monitoring-system-edge-machine-learning-beehive-management.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.15837/ijccc.2024.4.6632
- [Publisher PDF](https://univagora.ro/jour/index.php/ijccc/article/download/6632/2103)

## Abstract

The need of an automated support system that helps beekeepers maintain and improve beehive population was always a very stressing aspect of their work considering the importance of a healthy bee population. This paper presents a proof of concept based on Internet of Things technology, proposing a smart monitoring system using machine-learning processes and edge computing for communication and control. IoT sensors collect data and extract features from hive noises, while a TinyML network performs inference on low-power microcontroller devices for decision support. By moving inference to the edge, the system improves the autonomy of beekeeping solutions and supports healthier hive maintenance without relying on high-power cloud processing.

## Relevancy to Gratheon

This paper is directly relevant to Gratheon's edge-device roadmap because it combines the same product constraints Gratheon faces in remote apiaries: low-power sensing, local audio/noise processing, and actionable hive-state inference without continuous cloud dependence. Its TinyML framing is useful for deciding which colony-health signals should run on-device and which should be uploaded to the monitoring dashboard. The proof-of-concept also provides a concrete benchmark for packaging sensor acquisition, feature extraction, and beekeeper decision support into one deployable smart-hive node.
