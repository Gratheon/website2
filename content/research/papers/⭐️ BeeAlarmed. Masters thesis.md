---
hideNav: true
layout: research
hideToc: true
title: "BeeAlarmed. Masters thesis"
description: "Open-source YOLOv3-tiny bee counter for hive entrance monitoring with direction detection, which Gratheon forked as the basis for its gate-tracker model."
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
- [Gratheon adaptation (models-gate-tracker)](https://github.com/Gratheon/models-gate-tracker)
- [Video presentation (Facebook)](https://www.facebook.com/fhsuedwestfalen/videos/703400580980712/)

## Abstract

BeeAlarmed is a master's thesis project from South Westphalia University of Applied Sciences that develops an open-source software system for automatically counting bees entering and leaving the hive at its entrance ramp. The system uses a YOLOv3-tiny detection network to locate individual bees in video frames recorded by a fixed camera at the hive entrance. Direction-of-movement classification (entering vs. leaving) is determined from trajectory analysis across consecutive frames. The project goal is to provide beekeepers with a non-invasive, continuous traffic count as a proxy for colony activity and health. The full thesis PDF was not publicly released; the primary deliverable is the open-source code repository with model weights and inference pipeline.

## Relevancy to Gratheon

BeeAlarmed is the direct predecessor of Gratheon's models-gate-tracker repository. Gratheon forked and adapted this codebase for the Entrance Observer hardware product, making it the most operationally relevant research entry in this library. The detection-and-direction pipeline that BeeAlarmed established — YOLO inference → trajectory tracking → in/out classification — is the same architecture Gratheon continues to iterate on. Improvements Gratheon makes (model accuracy, diverse lighting conditions, pollen-load detection) can be tracked against the BeeAlarmed baseline to quantify progress over the original fork.
