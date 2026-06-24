---
hideNav: true
layout: research
hideToc: true
title: 'Bee Together: Joining Bee Audio Datasets for Hive Extrapolation in AI-Based Monitoring'
description: Beehive health monitoring has gained interest in the study of bees in biology, ecology, and agriculture.
year: '2024'
orgs:
- 🇫🇷 University of Toulon
topics:
- audio-acoustics
- datasets-benchmarks
productAreas:
- monitoring-platform
paperType: journal
---

[PDF](pdfs/sensors-24-06067.pdf)

<object data={require('./pdfs/sensors-24-06067.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/s24186067

## Abstract

Beehive health monitoring has gained interest in the study of bees in biology, ecology, and agriculture. As audio sensors are less intrusive, a number of audio datasets (mainly labeled with the presence of a queen in the hive) have appeared in the literature, and interest in their classification has been raised. All studies have exhibited good accuracy, and a few have questioned and revealed that classification cannot be generalized to unseen hives. To increase the number of known hives, a review of open datasets is described, and a merger in the form of the “BeeTogether” dataset on the open Kaggle platform is proposed. This common framework standardizes the data format and features while providing data augmentation techniques and a methodology for measuring hives’ extrapolation.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs sensor hardware, telemetry pipelines, and monitoring dashboards, audio-acoustic monitoring models for remote hive status detection, dataset design, benchmarking, and model validation workflows. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
