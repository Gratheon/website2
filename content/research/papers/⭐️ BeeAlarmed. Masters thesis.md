---
hideNav: true
layout: research
hideToc: true
title: "BeeAlarmed. Masters thesis"
description: "Open-source camera-based bee-hive monitoring system for entrance counting, bee tracking, and neural-network classification of pollen, varroa, cooling behavior, and wasps."
year: "2020"
orgs:
  - 🇩🇪 South Westphalia University of Applied Sciences
topics:
  - computer-vision
  - bee-behaviour
productAreas:
  - gate-tracker
paperType: thesis
featured: true
---

[VIDEO](pdfs/fabien.mov)

## External links

- [GitHub (BeeAlarmed)](https://github.com/BeeAlarmed/BeeAlarmed)
- [Upstream README](https://raw.githubusercontent.com/BeeAlarmed/BeeAlarmed/main/README.md)
- [Example video (YouTube)](https://www.youtube.com/watch?v=sRm5TmTcnpg)
- [Gratheon adaptation (models-gate-tracker)](https://github.com/Gratheon/models-gate-tracker)
- [Video presentation (Facebook)](https://www.facebook.com/fhsuedwestfalen/videos/703400580980712/)

## Abstract

BeeAlarmed is an open-source camera-based bee-hive monitoring project that identifies, tracks, and classifies bees at a hive entrance. Each camera frame is processed to detect bee positions; the system reconstructs trajectories with Kalman-filter-based tracking and counts bees entering or leaving the hive according to movement across the filmed pane. Cropped and rotated bee images are then passed to a neural network that classifies operationally useful traits: pollen packets, Varroa mite infestation, bees cooling the hive, and wasps. The upstream implementation was designed for Jetson Nano deployment but can also process video files, and it sends aggregated observations through LoRaWAN / The Things Network. Its README documents a practical prototype camera tunnel, LED lighting, pretrained model download, sample videos, and limitations around camera angle, image quality, and the need to retrain on deployment-specific data. A thesis PDF was not found in the local archive or upstream repository; the available local artifact is the presentation video linked above.

## Relevancy to Gratheon

BeeAlarmed is directly relevant to Gratheon's Entrance Observer and gate-tracker roadmap because it demonstrates the same edge-computer-vision pattern Gratheon needs in production: entrance-camera capture, bee detection, trajectory reconstruction, in/out counts, and trait classification. Its Jetson Nano target, LoRaWAN telemetry path, and sensitivity to camera geometry are useful constraints for Gratheon's hardware design and installer guidance. For the web app, BeeAlarmed's output categories map to dashboard metrics and alerts: traffic balance, pollen inflow, Varroa suspicion, cooling/fanning behavior, and wasp intrusion. In the autonomous-apiary vision, this project is an early blueprint for turning passive entrance video into machine-readable colony state that can trigger follow-up inspections, model retraining, or automated interventions.
