---
hideNav: true
layout: research
hideToc: true
title: "Time-series dataset of honey bee colony dynamics before, during, and after sunflower pollination"
description: "Open 2026 BMC Research Notes data paper releasing synchronized smart-hive IoT time series from nine Apis mellifera colonies around a sunflower pollination-service window."
year: "2026"
orgs:
  - 🇺🇦 AmoHive / Ukraine smart-hive deployment
topics:
  - datasets
  - iot-sensors
  - precision-beekeeping
  - pollination-monitoring
productAreas:
  - monitoring-platform
  - colony-health
paperType: dataset
---

[PDF](pdfs/Time-series dataset of honey bee colony dynamics before during and after sunflower pollination.pdf)

<object data={require('./pdfs/Time-series dataset of honey bee colony dynamics before during and after sunflower pollination.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1186/s13104-026-07812-8
- [Full text (Springer Nature Link / BMC Research Notes)](https://link.springer.com/article/10.1186/s13104-026-07812-8)
- Dataset DOI: https://doi.org/10.5281/zenodo.17966409

## Abstract

### Objectives

Precision beekeeping is an integral part of precision agriculture, which relies on sensor technologies and high-quality datasets to quantify and optimize ecosystem services such as crop pollination. To support reproducible research and the planning and evaluation of crop pollination campaigns in precision beekeeping, we release a time-series dataset that characterizes colony dynamics before, during, and after pollination, using sunflower as a case study.

### Data description

We release synchronized, non-invasive time series from nine smart hives (*Apis mellifera*) monitored in Ukraine (Europe/Kyiv) from 01 May to 31 Aug 2024, including a sunflower pollination service window (07–23 Jul 2024) and a documented attractant intervention. Sensors record hive weight, in-hive and ambient temperature, in-hive and ambient relative humidity, and device signals (processor temperature and stabilized solar voltage). The repository includes raw telemetry exports, cleaned hourly series aligned to a fixed local time grid, and a beekeeper event log, together with reproducible scripts and a documented processing protocol.

## Relevancy to Gratheon

This dataset paper is valuable for Gratheon's time-series analytics because it provides real smart-hive telemetry with synchronized weight, in-hive/ambient temperature, humidity, power/device status, event logs, and cleaned hourly series. The pollination-service framing is especially relevant for future Gratheon features around colony readiness, pollination-contract monitoring, anomaly detection, sensor-data cleaning, and forecasting. The Zenodo repository and documented preprocessing pipeline make it a practical benchmark for backend data models and dashboard experiments.
