---
hideNav: true
layout: research
hideToc: true
title: 'WaggleNet: A LoRa and MQTT-Based Monitoring System for Internal and External Beehive Conditions'
description: Low-cost dual-scope precision-beekeeping network that uses LoRa, MQTT, and modular sensor nodes to monitor conditions both inside and around beehives.
year: '2025'
authors:
- Minju Jeon
- Jiyun Kim
- Sewon Kim
- Seongmin Park
- Bo Zhang
- Anthony H. Smith
orgs:
- "🇰🇷 Kyonggi University"
- "🇰🇷 Hallym University"
- "🇰🇷 Jeonbuk National University"
- "🇺🇸 Purdue University"
topics:
- iot-sensors
- edge-ai-energy
productAreas:
- monitoring-platform
paperType: preprint
pdf: "/assets/research/papers/pdfs/2512.07408v1.pdf"
doi: 10.48550/arXiv.2512.07408
abstract: WaggleNet is a dual-scope beehive monitoring system that captures internal hive conditions and external environmental parameters using a low-cost LoRa-MQTT architecture. Modular worker nodes costing approximately USD 15 use temperature, humidity, light, and GPS sensors inside and around hives. A master node acts as a LoRa-MQTT gateway and forwards observations to a cloud server and mobile application. Field experiments reported 100% packet delivery over 110 meters in line-of-sight conditions and successful communication over 95 meters with obstructions, including nodes inside wooden hives. The system maintained end-to-end latency below five seconds and operated continuously for two months, supporting contextual anomaly detection for resource-constrained precision beekeeping deployments.
---

## Relevancy to Gratheon

WaggleNet is directly actionable for Gratheon's remote-apiary architecture because it evaluates a complete low-cost telemetry path rather than only a sensor prototype. The internal/external node pairing provides context for separating colony-driven changes from weather-driven changes, while the LoRa gateway topology reduces per-hive connectivity cost. Its measured range, packet delivery, latency, two-month field operation, and approximate node bill of materials provide useful engineering baselines for edge-device networking and monitoring-platform ingestion. The system's simple threshold alerts are also a clear baseline against which Gratheon's richer anomaly-detection methods can be evaluated.

## Source and access

This open preprint is available from [arXiv:2512.07408](https://arxiv.org/abs/2512.07408). The copied PDF is version 1, submitted on 8 December 2025.
