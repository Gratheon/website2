---
hideNav: true
layout: research
hideToc: true
title: Beehive Smart Detector Device for the Detection of CriticalConditions That Utilize Edge Device Computations and DeepLearning Inferences
description: This paper presents a new edge detection process implemented in an embedded IoT device called Bee Smart Detection node to detect catastrophic apiary events.
year: '2024'
authors:
- Sotirios Kontogiannis (S.K.)
orgs:
- "\U0001F1EC\U0001F1F7 University of Ioannina"
topics:
- edge-ai-energy
- iot-sensors
- computer-vision
productAreas:
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/sensors-24-05444-v3.pdf"
doi: 10.3390/s24165444
abstract: This paper presents a new edge detection process implemented in an embedded IoT device called Bee Smart Detection node to detect catastrophic apiary events. Such events include swarming, queen loss, and the detection of Colony Collapse Disorder (CCD) conditions. Two deep learning sub-processes are used for this purpose. The first uses a fuzzy multi-layered neural network of variable depths called fuzzy-stranded-NN to detect CCD conditions based on temperature and humidity measurements inside the beehive. The second utilizes a deep learning CNN model to detect swarming and queen loss cases based on sound.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models, sensor hardware, telemetry pipelines, and monitoring dashboards, edge-AI deployment, power budgeting, and offline operation. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
