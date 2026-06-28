---
hideNav: true
layout: research
hideToc: true
title: 'Ambient Electromagnetic Radiation as a Predictor of Honey Bee (Apis mellifera) Traffic in Linear and Non-Linear Regression: Numerical Stability, Physical Time and Energy Efficiency'
description: Since bee traffic is a contributing factor to hive health and electromagnetic radiation has a growing presence in the urban milieu, we investigate ambient electromagnetic radiation as a predictor of bee traffic in the hive’s.
year: '2023'
authors:
- Vladimir A. Kulyukin
- Daniel Coster
- Anastasiia Tkachenko
- Daniel Hornberger
- Aleksey V. Kulyukin
orgs:
- "\U0001F1FA\U0001F1F8 Utah State University"
topics:
- iot-sensors
- bee-behaviour
productAreas:
- gate-tracker
paperType: journal
pdf: "/assets/research/papers/pdfs/sensors-23-02584-v3.pdf"
doi: 10.3390/s23052584
abstract: Since bee traffic is a contributing factor to hive health and electromagnetic radiation has a growing presence in the urban milieu, we investigate ambient electromagnetic radiation as a predictor of bee traffic in the hive’s vicinity in an urban environment. To that end, we built two multi-sensor stations and deployed them for four and a half months at a private apiary in Logan, UT, USA. to record ambient weather and electromagnetic radiation. We placed two non-invasive video loggers on two hives at the apiary to extract omnidirectional bee motion counts from videos. The time-aligned datasets were used to evaluate 200 linear and 3,703,200 non-linear (random forest and support vector machine) regressors to predict bee motion counts from time, weather, and electromagnetic radiation. In all regressors, electromagnetic radiation was as good a predictor of traffic as.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, sensor hardware, telemetry pipelines, and monitoring dashboards. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
