---
hideNav: true
layout: research
hideToc: true
title: "An intelligent monitoring system for forecasting and anomaly detection in precision beekeeping"
description: "BeeViz IoT platform combining transformer-based time-series forecasting and anomaly detection for predictive hive management using temperature, humidity, and weight sensors."
year: "2026"
orgs:
  - 🇫🇷 EFREI Research Lab
  - 🇫🇷 Université Paris-Panthéon-Assas
topics:
  - iot-sensors
  - edge-ai-energy
productAreas:
  - monitoring-platform
  - colony-health
paperType: journal
---

[PDF](pdfs/An intelligent monitoring system for forecasting and anomaly detection in precision beekeeping.pdf)

<object data={require('./pdfs/An intelligent monitoring system for forecasting and anomaly detection in precision beekeeping.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1038/s41598-026-37877-1
- [Full text (Scientific Reports)](https://www.nature.com/articles/s41598-026-37877-1)

## Abstract

Bees play a vital ecological role as pollinators, contributing to biodiversity, forest regeneration, and agricultural productivity. In recent years, precision beekeeping has emerged as a promising approach to support hive management through sensor-based monitoring. However, existing systems often lack predictive capabilities, limiting their usefulness in anticipating disruptive events that threaten colony health. To address this gap, we present BeeViz, an intelligent monitoring system that combines time series forecasting and anomaly detection to enhance decision-making in apiculture. The system integrates sensor networks, cloud infrastructure, and AI-based data processing modules to continuously track key hive parameters (temperature, humidity, and weight) and generate short-term forecasts and real-time alerts. Preliminary results show that the system can effectively detect anomalies and generate short-term forecasts for key hive parameters, with promising accuracy across different metrics. By enabling proactive interventions, BeeViz supports more resilient and sustainable beekeeping practices, paving the way for collaborative learning and data-driven hive management.

## Relevancy to Gratheon

BeeViz models exactly the analytical layer that Gratheon's web app needs above raw sensor telemetry: transformer-based time-series forecasting that can predict colony stress events hours or days before they manifest, and anomaly detection that fires targeted alerts rather than simple threshold breaches. The system's three monitored parameters — temperature, humidity, and weight — match the sensor suite already integrated into Gratheon hardware prototypes, so the BeeViz forecasting architecture could be adopted with minimal sensor-side changes. The collaborative learning angle (pooling data across connected hives to improve predictive models) aligns directly with Gratheon's long-term vision of a cross-apiary intelligence network. The survey data in this paper (Figure 1) showing that beekeepers most want graphical representation, alert services, and dashboards also validates Gratheon's web-app feature prioritization.
