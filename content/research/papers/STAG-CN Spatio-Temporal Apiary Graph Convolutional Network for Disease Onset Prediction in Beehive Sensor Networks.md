---
hideNav: true
layout: research
hideToc: true
title: 'STAG-CN: Spatio-Temporal Apiary Graph Convolutional Network for Disease Onset Prediction in Beehive Sensor Networks'
description: Honey bee colony losses threaten global pollination services, yet current monitoring systems treat each hive as an isolated unit, ignoring the spatial pathways through which diseases spread across apiaries.
year: '2026'
orgs:
- 🇰🇷 Korea University
topics:
- iot-sensors
productAreas:
- colony-health
- monitoring-platform
paperType: preprint
---

[PDF](pdfs/2603.14462v1.pdf)

<object data={require('./pdfs/2603.14462v1.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- arXiv: https://arxiv.org/abs/2603.14462

## Abstract

Honey bee colony losses threaten global pollination services, yet current monitoring systems treat each hive as an isolated unit, ignoring the spatial pathways through which diseases spread across apiaries. This paper introduces the SpatioTemporal Apiary Graph Convolutional Network (STAG-CN), a graph neural network that models inter-hive relationships for disease onset prediction. STAG-CN operates on a dual adjacency graph combining physical co-location and climatic sensor correlation among hive sessions, and processes multivariate IoT sensor streams through a temporal–spatial–temporal sandwich architecture built on causal dilated convolutions and Chebyshev spectral graph convolutions. Evaluated on the Korean AI Hub apiculture dataset (dataset #71488) with expanding-window temporal cross-validation, STAG-CN achieves an F1 score of 0.607 at a three-day forecast horizon. An ablation study reveals that the climatic adjacency matrix alone matches full-model performance (F1 = 0.607), while the physical adjacency alone yields F1 = 0.274, indicating that shared environmental response patterns carry stronger predictive signal than spatial proximity for disease.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs colony-health diagnostics and Varroa/queen-state alerting, sensor hardware, telemetry pipelines, and monitoring dashboards. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
