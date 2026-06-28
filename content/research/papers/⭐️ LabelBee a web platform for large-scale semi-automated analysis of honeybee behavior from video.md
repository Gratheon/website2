---
hideNav: true
layout: research
hideToc: true
title: 'LabelBee: a web platform for large-scale semi-automated analysis of honeybee behavior from video'
description: Web platform combining human annotation and AI for large-scale labeling of honeybee entrance videos, extracting individual trajectories, pollen events, fanning, and behavioral tags.
year: '2019'
orgs:
- "\U0001F1F5\U0001F1F7 University of Puerto Rico"
topics:
- computer-vision
- bee-behaviour
- datasets-benchmarks
productAreas:
- gate-tracker
paperType: conference
pdf: "/assets/research/papers/pdfs/3359115.3359120.pdf"
doi: 10.1145/3359115.3359120
abstract: 'LabelBee is a browser-based annotation and analysis system for large volumes of honeybee entrance video collected in natural colony conditions. The platform combines a web GUI, server-side storage, automated preprocessing, and Jupyter-based analysis so biologists can label bees, validate detections, correct trajectories, and annotate events such as entering, leaving, pollen carrying, and fanning. It supports tagged bees through AprilTag detection, untagged bee detection and tracking, pollen classification, fanning recognition, pose estimation, and exportable event files. The paper emphasizes a human-in-the-loop workflow: expert and volunteer annotations improve data quality, those labels train automatic models, and model outputs are brought back into the GUI for validation and curation. This design enables large-scale behavioral datasets and visual analytics such as hourly entrance/exit counts and individual actograms across multiple days.'
featured: true
---

![](pdfs/Screenshot 2023-10-25 at 02.28.50.png)

## Relevancy to Gratheon

LabelBee is a strong reference for Gratheon's entrance-camera data pipeline. The web app can borrow its human-in-the-loop concepts: video review, timeline navigation, bee selection, event labels, and quality-control states for correcting model predictions before they become training data. For the Entrance Observer and gate-tracker product area, the paper's label vocabulary maps directly to Gratheon metrics: entering, leaving, pollen return, fanning/cooling, and identity or trajectory confidence. In the autonomous-apiary vision, a LabelBee-style workflow would let beekeepers and researchers turn rare visual observations into curated datasets, close the loop between deployed hardware and model retraining, and make Gratheon's analytics auditable instead of treating computer-vision output as an opaque counter.
