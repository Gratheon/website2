---
hideNav: true
layout: research
hideToc: true
title: 'Accuracy vs. Energy: An Assessment of Bee Object Inference inVideos from On-Hive Video Loggers with YOLOv3,YOLOv4-Tiny, and YOLOv7-Tiny'
description: A continuing trend in precision apiculture is to use computer vision methods to quantify characteristics of bee traffic in managed colonies at the hive’s entrance.
year: '2023'
orgs:
- 🇺🇸 Utah State University
topics:
- computer-vision
- edge-ai-energy
productAreas:
- gate-tracker
paperType: journal
---

[PDF](pdfs/2023-yolov4.pdf)

<object data={require('./pdfs/2023-yolov4.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/s23156791

## Abstract

A continuing trend in precision apiculture is to use computer vision methods to quantify characteristics of bee traffic in managed colonies at the hive’s entrance. Since traffic at the hive’s entrance is a contributing factor to the hive’s productivity and health, we assessed the potential of three open-source convolutional network models, YOLOv3, YOLOv4-tiny, and YOLOv7-tiny, to quantify omnidirectional traffic in videos from on-hive video loggers on regular, unmodified oneand two-super Langstroth hives and compared their accuracies, energy efficacies, and operational energy footprints. We trained and tested the models with a 70/30 split on a dataset of 23,173 flying bees manually labeled in 5819 images from 10 randomly selected videos and manually evaluated the trained models on 3600 images from 120 randomly selected videos from different apiaries, years, and queen races. We designed a new energy efficacy metric as a ratio of performance units per energy unit required to make a model operational in a continuous hive monitoring data pipeline. In terms of accuracy, YOLOv3 was first, YOLOv7-tiny—second, and.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models, edge-AI deployment, power budgeting, and offline operation. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
