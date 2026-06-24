---
hideNav: true
layout: research
hideToc: true
title: 'Mapping Crop Types for Beekeepers Using Sentinel-2 Satellite Image Time Series: Five Essential Crops in the Pollination Services'
description: Driven by the widespread adoption of deep learning (DL) in crop mapping with satellite image time series (SITS), this study was motivated by the recent success of temporal attentionbased approaches in crop mapping.
year: '2024'
orgs:
- 🇨🇦 Université de Montréal
topics:
- pollination-ecology
- computer-vision
productAreas:
- monitoring-platform
paperType: journal
---

[PDF](pdfs/remotesensing-16-04225.pdf)

<object data={require('./pdfs/remotesensing-16-04225.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/rs16224225

## Abstract

Driven by the widespread adoption of deep learning (DL) in crop mapping with satellite image time series (SITS), this study was motivated by the recent success of temporal attentionbased approaches in crop mapping. To meet the needs of beekeepers, this study aimed to develop DL-based classification models for mapping five essential crops in pollination services in Quebec province, Canada, by using Sentinel-2 SITS. Due to the challenging task of crop mapping using SITS, this study employed three DL-based models, namely one-dimensional temporal convolutional neural networks (CNNs) (1DTempCNNs), one-dimensional spectral CNNs (1DSpecCNNs), and long short-term memory (LSTM). Accordingly, this study aimed to capture expert-free temporal and spectral features, specifically targeting temporal features using 1DTempCNN and LSTM models, and spectral features using the 1DSpecCNN model. Our findings indicated that the LSTM model (macro-averaged recall of 0.80, precision of 0.80, F1-score of 0.80, and ROC of 0.89) outperformed both 1DTempCNNs (macro-averaged recall of 0.73, precision of 0.74, F1-score of 0.73, and ROC of 0.85) and 1DSpecCNNs (macro-averaged recall of 0.78, precision of 0.77, F1-score of 0.77, and ROC of 0.88) models, underscoring its effectiveness in capturing temporal features and highlighting its suitability for crop mapping using Sentinel-2.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models, sensor hardware, telemetry pipelines, and monitoring dashboards, pollination ecology and apiary-location intelligence. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
