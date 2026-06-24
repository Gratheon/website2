---
hideNav: true
layout: research
hideToc: true
title: 'Honeybee Re-identification in Video: New Datasets and Impact of Self-supervision'
description: This paper presents an experimental study of long-term re-identification of honeybees from the appearance of their abdomen in videos.
year: '2022'
orgs:
- 🇵🇷 University of Puerto Rico
topics:
- computer-vision
- datasets-benchmarks
productAreas:
- gate-tracker
paperType: conference
---

[PDF](pdfs/VISAPP.pdf)

<object data={require('./pdfs/VISAPP.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.5220/0010843100003124

## Abstract

This paper presents an experimental study of long-term re-identification of honeybees from the appearance of their abdomen in videos. The first contribution is composed of two image datasets of single honeybees extracted from 12 days of video and annotated with information about their identity on long-term and short-term scales. The long-term dataset contains 8,962 images associated to 181 known identities and used to evaluate the long-term re-identification of individuals. The short-term dataset contains 109,654 images associated to 4,949 short-term tracks that provide multiple views of an individual suitable for self-supervised training. A deep convolutional network was trained to map an image of the honeybee’s abdomen to a 128 dimensional feature vector using several.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models, dataset design, benchmarking, and model validation workflows. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
