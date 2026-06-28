---
hideNav: true
layout: research
hideToc: true
title: Audio, Image, Video, and Weather Datasets for Continuous Electronic Beehive Monitoring
description: In 2014, we designed and implemented BeePi, a multi-sensor electronic beehive monitoring system.
year: '2021'
authors:
- Vladimir Kulyukin
orgs:
- "\U0001F1FA\U0001F1F8 Utah State University"
topics:
- datasets-benchmarks
- audio-acoustics
- iot-sensors
productAreas:
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/applsci-11-04632.pdf"
doi: 10.3390/app11104632
abstract: In 2014, we designed and implemented BeePi, a multi-sensor electronic beehive monitoring system. Since then we have been using BeePi monitors deployed at different apiaries in northern Utah to design audio, image, and video processing algorithms to analyze forager traffic in the vicinity of Langstroth beehives. Since our first publication on BeePi in 2016, we have received multiple requests from researchers and practitioners for the datasets we have used in our research. The main objective of this article is to provide a comprehensive point of reference to the datasets that we have so far curated for our research. We hope that our datasets will provide stable performance benchmarks for continuous electronic beehive monitoring, help interested parties verify our findings and correct errors, and advance the state of the art in continuous electronic beehive monitoring and related areas of AI, machine learning, and data.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs sensor hardware, telemetry pipelines, and monitoring dashboards, audio-acoustic monitoring models for remote hive status detection, dataset design, benchmarking, and model validation workflows. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
