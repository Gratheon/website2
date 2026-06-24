---
hideNav: true
layout: research
hideToc: true
title: "An AI-Based Open-Source Software for Varroa Mite Fall Analysis in Honeybee Colonies"
description: "Open-source VarroDetector software using YOLO v11 Nano and smartphone images of sticky boards for automated Varroa mite counting on honeybee colonies."
year: "2025"
orgs:
  - 🇪🇸 University of Zaragoza
  - 🇪🇸 University of La Rioja
  - 🇪🇸 University of Valencia
topics:
  - varroa-health
  - computer-vision
productAreas:
  - colony-health
paperType: journal
featured: true
---

[PDF](pdfs/agriculture-15-00969.pdf)

<object data={require('./pdfs/agriculture-15-00969.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/agriculture15090969
- [Full text (MDPI Agriculture)](https://www.mdpi.com/2077-0472/15/9/969)

## Abstract

Infestation by *Varroa destructor* is responsible for high mortality rates in *Apis mellifera* colonies worldwide. This study developed and field-tested a new free software (VarroDetector) based on a deep learning approach for the automated detection and counting of *Varroa* mites using smartphone images of sticky boards collected in honeybee colonies. A total of 204 sheets were collected, divided into four frames using green strings, and photographed under controlled lighting conditions with different smartphone models at a minimum resolution of 48 megapixels. The *Varroa* detection algorithm comprises two main steps: first, the region of interest where *Varroa* mites must be counted is established; then a one-stage detector (YOLO v11 Nano) is applied. The results obtained with VarroDetector were highly correlated with manual control counts (R² = 0.98–0.99, depending on the smartphone camera used). When *Varroa* mite numbers were higher than 50 per sheet, VarroDetector outperformed trained human visual inspectors in reliability while significantly reducing processing time. The software runs offline on a smartphone and is released as open source.

## Relevancy to Gratheon

VarroDetector directly informs Gratheon's hive-scanner product: the paper validates that a lightweight YOLO-family model can detect Varroa mites on sticky-board images captured with a consumer smartphone — a setup Gratheon could replicate with a Raspberry Pi camera positioned above the hive bottom board. The offline, no-connectivity requirement aligns with Gratheon's edge-AI goal for apiaries without reliable internet. The sticky-board workflow also provides an actionable, non-invasive monitoring protocol that Gratheon can offer beekeepers as a periodic colony-health check alongside real-time entrance camera data.
