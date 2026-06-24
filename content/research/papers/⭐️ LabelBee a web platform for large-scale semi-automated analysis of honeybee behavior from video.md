---
hideNav: true
layout: research
hideToc: true
title: "LabelBee: a web platform for large-scale semi-automated analysis of honeybee behavior from video"
description: "Web platform combining human annotation and AI for large-scale labeling of honeybee entrance videos, extracting individual trajectories, pollen events, fanning, and behavioral tags."
year: "2019"
orgs:
  - 🇵🇷 University of Puerto Rico
topics:
  - computer-vision
  - bee-behaviour
  - datasets-benchmarks
productAreas:
  - gate-tracker
paperType: conference
featured: true
---

[PDF](pdfs/3359115.3359120.pdf)

![](pdfs/Screenshot%202023-10-25%20at%2002.28.50.png)

<object data={require('./pdfs/3359115.3359120.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1145/3359115.3359120
- [Publisher (ACM DL)](https://dl.acm.org/doi/10.1145/3359115.3359120)
- [GitHub (LabelBee)](https://github.com/rmegret/labelbee)

## Abstract

The LabelBee system is a web application designed to facilitate the collection, annotation, and analysis of large amounts of honeybee behavior data from video monitoring. Developed as part of the NSF BIGDATA project "Large-scale multi-parameter analysis of honeybee behavior in their natural habitat", it provides advanced AI and visualization capabilities to enable the construction of good-quality datasets necessary for discovering complex behavior patterns. LabelBee integrates raw video, honeybee positions, decoded barcode tags, individual trajectories, and behavior events (entrance/exit, presence of pollen, fanning, etc.). This integration enables the combination of manual and automatic processing by biologist end-users who share and correct their annotations through a centralized server. The resulting annotations are used by computer scientists to create new automatic models and improve the quality of detection modules.

## Relevancy to Gratheon

LabelBee is a reference architecture for how Gratheon could build a data-labeling workflow on top of its entrance camera footage. The web-based annotation UI — video scrubbing, bee selection, behavior tagging — addresses the same data-pipeline bottleneck that Gratheon will face when training and improving its gate-tracker model at scale. Gratheon's platform could adopt a LabelBee-style human-in-the-loop interface where beekeeper reports of unusual events are used to create labeled segments for model retraining. The behavioral label vocabulary (entering, leaving, pollen, fanning) directly maps to the metrics Gratheon exposes in its analytics dashboard.
