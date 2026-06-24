---
hideNav: true
layout: research
hideToc: true
title: Assessing Honey Bee Colony Health Using Temperature Time Series
description: Honey bees face an increasing number of stressors that disrupt the natural behaviour of colonies and, in extreme cases, can lead to their collapse.
year: '2026'
orgs:
- 🇦🇺 The University of Sydney
- 🇦🇺 Macquarie University
topics:
- iot-sensors
- bee-behaviour
productAreas:
- colony-health
- monitoring-platform
paperType: journal
---

[PDF](pdfs/2506.00602v1.pdf)

<object data={require('./pdfs/2506.00602v1.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1098/rsif.2025.0505
- arXiv: https://arxiv.org/abs/2506.00602

## Abstract

Honey bees face an increasing number of stressors that disrupt the natural behaviour of colonies and, in extreme cases, can lead to their collapse. Quantifying the status and resilience of colonies is essential to measure the impact of stressors and to identify colonies at risk. In this manuscript, we present and apply new methodologies to efficiently diagnose the status of a honey bee colony from widely available time series of hive and environmental temperature. Healthy hives have a remarkable ability to control temperature near the brood area. Our method exploits this fact and quantifies the status of a hive by measuring how resilient they are to extreme environmental temperatures, which act as natural.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, colony-health diagnostics and Varroa/queen-state alerting, sensor hardware, telemetry pipelines, and monitoring dashboards. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
