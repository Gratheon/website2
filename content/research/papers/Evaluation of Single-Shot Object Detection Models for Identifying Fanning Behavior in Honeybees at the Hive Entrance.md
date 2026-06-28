---
hideNav: true
layout: research
hideToc: true
title: Evaluation of Single-Shot Object Detection Models for Identifying Fanning Behavior in Honeybees at the Hive Entrance
description: Thermoregulatory fanning behavior in honeybees is a vital indicator of colony health and environmental response.
year: '2025'
authors:
- Tomyslav Sledevič
orgs:
- "\U0001F1F1\U0001F1F9 Vilnius Gediminas Technical University"
topics:
- computer-vision
- bee-behaviour
productAreas:
- gate-tracker
paperType: journal
pdf: "/assets/research/papers/pdfs/agriculture-15-01609-v2.pdf"
doi: 10.3390/agriculture15151609
abstract: 'Thermoregulatory fanning behavior in honeybees is a vital indicator of colony health and environmental response. This study presents a novel dataset of 18,000 annotated video frames containing 57,597 instances capturing fanning behavior at the hive entrance across diverse conditions. Three state-of-the-art single-shot object detection models (YOLOv8, YOLO11, YOLO12) are evaluated using standard RGB input and two motion-enhanced encodings: Temporally Stacked Grayscale (TSG) and Temporally Encoded Motion (TEM). Results show that models incorporating temporal information via TSG and TEM significantly outperform RGB-only input, achieving up to 85% mAP@50 with real-time inference capability on high-performance GPUs. Deployment tests on the Jetson AGX Orin platform demonstrate feasibility for edge computing, though with accuracy–speed trade-offs in smaller.'
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
