---
hideNav: true
layout: research
hideToc: true
title: A Wireless Sensor Platform for Beehive Monitoring
description: A field-validated wireless board for monitoring hive temperature, relative humidity, and CO2, including measurements of colony responses to mechanical disturbance.
year: '2026'
authors:
- Sudipta Das Gupta
- Jeffrey S. Erickson
- Joseph Rinehart
- Benjamin D. Braaten
- Sulaymon Eshkabilov
orgs:
- 🇺🇸 North Dakota State University
- 🇺🇸 USDA Agricultural Research Service
topics:
- iot-sensors
- colony-health
- edge-ai-energy
- precision-beekeeping
productAreas:
- monitoring-platform
- edge-device
paperType: journal
doi: 10.3390/s26061846
abstract: >-
  The authors design and validate a wireless sensor board for real-time measurement of temperature, relative humidity, and CO2 inside honeybee hives. The platform combines SCD30 and SCD41 sensors, a custom two-layer PCB, and a Particle Argon Wi-Fi microcontroller and was tested with live colonies in summer and winter. Mechanical disturbances produced observable responses, including temperature increases above 5 degrees Celsius, CO2 increases from 3000 to more than 10000 ppm, and relative-humidity decreases of about 10 percent. The study also quantifies the power impact of different sampling rates.
---

## External links

- [DOI and publisher page](https://doi.org/10.3390/s26061846)
- [Legal open full text at PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC13030150/)

## Relevancy to Gratheon

The custom board is a useful reference for Gratheon's sensor stack because it combines three complementary measures on one wireless node and validates them in live hives across seasons. In particular, CO2 can reveal rapid colony responses that temperature-only installations may miss.

The measured sampling-rate power trade-off is directly relevant to remote apiaries. It supports event-aware sampling and edge aggregation instead of transmitting high-frequency telemetry continuously, while the reported wax-obstruction and enclosure considerations can inform sensor placement and maintainability.
