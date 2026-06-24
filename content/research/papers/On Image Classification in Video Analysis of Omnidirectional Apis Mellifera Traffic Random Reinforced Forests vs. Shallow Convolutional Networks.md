---
hideNav: true
layout: research
hideToc: true
title: 'On Image Classification in Video Analysis of Omnidirectional Apis Mellifera Traffic: Random Reinforced Forests vs. Shallow Convolutional Networks'
description: Omnidirectional honeybee traffic is the number of bees moving in arbitrary directions in close proximity to the landing pad of a beehive over a period of time.
year: '2021'
orgs:
- 🇺🇸 Utah State University
topics:
- computer-vision
- bee-behaviour
productAreas:
- gate-tracker
paperType: journal
---

[PDF](pdfs/applsci-11-08141-v3.pdf)

<object data={require('./pdfs/applsci-11-08141-v3.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/app11178141
- [Original URL](https://www.mdpi.com/2076-3417/11/17/8141)

## Abstract

Omnidirectional honeybee traffic is the number of bees moving in arbitrary directions in close proximity to the landing pad of a beehive over a period of time. Automated video analysis of such traffic is critical for continuous colony health assessment. In our previous research, we proposed a two-tier algorithm to measure omnidirectional bee traffic in videos. Our algorithm combines motion detection with image classification: in tier 1, motion detection functions as class-agnostic object location to generate regions with possible objects; in tier 2, each region from tier 1 is classified by a class-specific classifier. In this article, we present an empirical and theoretical comparison of random reinforced forests and shallow convolutional networks as tier 2.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
