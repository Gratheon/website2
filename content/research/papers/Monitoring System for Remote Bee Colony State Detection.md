---
hideNav: true
layout: research
hideToc: true
title: "Monitoring System for Remote Bee Colony State Detection"
description: "2020 Latvia/Indonesia precision-beekeeping paper describing an ESP8266-based remote monitoring unit using hive weight and temperature for real-time bee-colony state detection."
year: "2020"
authors:
- Aleksejs Zacepins
- Armands Kviesis
- Vitālijs Komašilovs
- Fakhri Rido Muhammad
orgs:
- 🇱🇻 Latvia University of Life Sciences and Technologies
- 🇮🇩 Universitas Prima Indonesia
topics:
- iot-sensors
productAreas:
- monitoring-platform
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/monitoring-system-remote-bee-colony-state-detection.pdf"
doi: 10.22364/bjmc.2020.8.3.05
---

[PDF](pdfs/monitoring-system-remote-bee-colony-state-detection.pdf)

<object data={require('./pdfs/monitoring-system-remote-bee-colony-state-detection.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.22364/bjmc.2020.8.3.05
- [Publisher PDF](https://doi.org/10.22364/bjmc.2020.8.3.05)

## Abstract

Real-time remote monitoring of honeybee colonies can help beekeepers detect abnormalities and identify colony states while reducing disruptive inspections. The paper describes a bee-colony monitoring system for remote state detection, with weight and temperature treated as key metrics for state and behaviour analysis. The hardware is based on the ESP8266 low-cost Wi-Fi microchip and a single-point load cell capable of measuring up to 200 kg, with data transfer from the remote apiary via an external 3G router. The system supports data collection and further analysis for precision beekeeping deployment.

## Relevancy to Gratheon

This known precision-beekeeping team paper is a practical hardware reference for Gratheon's monitoring-platform work. Its ESP8266/load-cell/temperature architecture is close to the minimal viable hive node that many beekeepers can afford, and it reinforces why weight plus temperature remain core metrics even as audio and vision systems become available. The deployment details are useful for Gratheon's remote-apiary constraints: cellular backhaul, low-cost hardware, and converting simple physical measurements into colony-state cues.
