---
hideNav: true
layout: research
hideToc: true
title: Fast, accurate measurement of the worker populations of honey bee colonies using deep learning
description: Honey bees play a crucial role in pollination, contributing significantly to global agriculture and ecosystems.
year: '2025'
orgs:
- 🇺🇸 Arizona State University
- 🇺🇸 Texas A&M University–Kingsville
topics:
- computer-vision
- datasets-benchmarks
productAreas:
- hive-scanner
- monitoring-platform
paperType: preprint
---

[PDF](pdfs/2512.11075v1.pdf)

<object data={require('./pdfs/2512.11075v1.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.48550/arXiv.2512.11075
- arXiv: https://arxiv.org/abs/2512.11075

## Abstract

Honey bees play a crucial role in pollination, contributing significantly to global agriculture and ecosystems. Accurately estimating hive populations is essential for understanding the effects of environmental factors on bee colonies, yet traditional methods of counting bees are timeconsuming, labor-intensive, and prone to human error, particularly in large-scale studies. In this paper, we present a deep learning-based solution for automating bee population counting using CSRNet and introduce ASUBEE, the FIRST high-resolution dataset specifically designed for this task. Our method employs density map estimation to predict bee populations, effectively addressing challenges such as occlusion and overlapping bees that are common in hive monitoring. We demonstrate that CSRNet achieves superior performance in terms of time efficiency, with a computation time of just 1 second per image, while delivering accurate counts even in complex and densely populated hive.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models, sensor hardware, telemetry pipelines, and monitoring dashboards, dataset design, benchmarking, and model validation workflows. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
