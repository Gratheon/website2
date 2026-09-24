---
hideNav: true
layout: research
hideToc: true
title: Multimodal beehive weight forecasting using IoT telemetry and acoustic signal processing
description: A field-telemetry study of short-term hive-weight forecasting using more than 3.4 million records from over 250 hives, with lightweight regression baselines.
year: '2026'
authors:
- Sebastian Górecki
- James Brusey
orgs:
- 🇵🇱 Lodz University of Technology
- 🇬🇧 Coventry University
topics:
- iot-sensors
- audio-acoustics
- edge-ai-energy
productAreas:
- monitoring-platform
paperType: journal
doi: 10.2478/jee-2026-0044
abstract: >-
  The authors evaluate short-term beehive weight forecasting with data from the Intelligent Hives monitoring system. Their multimodal framework combines load-cell measurements, environmental sensors, acoustic telemetry, edge acquisition, and cloud analytics. More than 3.4 million telemetry records were collected from over 250 instrumented hives in working apiaries between 2022 and 2025. Multiple linear regression, gradient boosting, and feedforward neural networks are compared using MSE, RMSE, and R-squared. Historical weight is the dominant predictive input, while environmental and acoustic measurements supply complementary context. Lightweight regression models offer a favorable accuracy-complexity trade-off for resource-constrained IoT platforms.
---

## Publication and access

- Journal of Electrical Engineering, volume 77, issue 4, pages 460-471 (2026). Crossref publication date: 1 August 2026.
- [DOI and publisher page](https://doi.org/10.2478/jee-2026-0044)
- [Original open publisher PDF](https://reference-global.com/pdf/10.2478/jee-2026-0044)
- License: [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/). The publisher PDF was checked, but it is linked rather than mirrored because noncommercial redistribution permission should not be assumed for a commercial product website.

The abstract above is an editorial summary based on the publisher PDF and Crossref metadata.

## Relevancy to Gratheon

This study provides a practical baseline for combining Gratheon's hive scales, environmental measurements, and acoustic features. The finding that weight history dominates prediction argues for measuring incremental value over a weight-only model before adding microphones, bandwidth, or model complexity.

The paper describes chronological splitting, which is preferable to randomly mixing adjacent time-series observations. That does not by itself establish generalization to unseen apiaries or seasons. For Gratheon, follow the paper's lightweight baseline approach while separately testing held-out hives, forecast horizons, missing telemetry, and abnormal events. The reported telemetry volume should not be mistaken for a verified public dataset release.
