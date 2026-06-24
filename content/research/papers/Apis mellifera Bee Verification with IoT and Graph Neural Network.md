---
hideNav: true
layout: research
hideToc: true
title: Apis mellifera Bee Verification with IoT and Graph Neural Network
description: Automatic recognition systems (ARS) have been proposed in scientific and technological research for the care and preservation of endangered species; these systems, consisting of Internet of Things (IoT) devices and.
year: '2025'
orgs:
- 🇲🇽 Instituto Tecnológico El Llano Aguascalientes
topics:
- iot-sensors
- computer-vision
productAreas:
- gate-tracker
paperType: journal
---

[PDF](pdfs/applsci-15-07969.pdf)

<object data={require('./pdfs/applsci-15-07969.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/app15147969

## Abstract

Automatic recognition systems (ARS) have been proposed in scientific and technological research for the care and preservation of endangered species; these systems, consisting of Internet of Things (IoT) devices and object-recognition techniques with artificial intelligence (AI), have emerged as proposed solutions to detect and prevent parasite attacks on Apis mellifera bees. This article presents a pilot ARS for the recognition and analysis of honeybees at the hive entrance using IoT devices and automatic object-recognition techniques, for the early detection of the Varroa mite in test apiaries. Two object-recognition techniques, namely the k-Nearest Neighbor Algorithm (kNN) and Graph Neural Network (GNN), were evaluated with an image dataset of 600 images from a single beehive. The results of the experiments show the viability of using GNN in real environments. GNN has greater accuracy in bee recognition, but with greater processing time, while the kNN classifier requires fewer processing resources but has lower recognition.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models, sensor hardware, telemetry pipelines, and monitoring dashboards. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
