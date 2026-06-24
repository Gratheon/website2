---
hideNav: true
layout: research
hideToc: true
title: Varroa destructor detection on honey bees using hyperspectral imagery
description: Hyperspectral (HS) imagery in agriculture is becoming increasingly common.
year: '2024'
orgs:
- 🇨🇿 Brno University of Technology
- 🇫🇮 LUT University
topics:
- varroa-health
- computer-vision
productAreas:
- colony-health
paperType: journal
---

[PDF](pdfs/2024-varroa-destructor.pdf)

<object data={require('./pdfs/2024-varroa-destructor.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- arXiv: https://arxiv.org/abs/2403.14359

## Abstract

Hyperspectral (HS) imagery in agriculture is becoming increasingly common. These images have the advantage of higher spectral resolution. Advanced spectral processing techniques are required to unlock the information potential in these HS images. The present paper introduces a method rooted in multivariate statistics designed to detect parasitic Varroa destructor mites on the body of western honey bee Apis mellifera, enabling easier and continuous monitoring of the bee hives. The methodology explores unsupervised (K-means++) and recently developed supervised (Kernel Flows - Partial Least-Squares, KF-PLS) methods for parasitic.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models, colony-health diagnostics and Varroa/queen-state alerting. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
