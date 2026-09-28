---
hideNav: true
layout: research
hideToc: true
title: Digital Monitoring and Modeling of Honey Bee Foraging on Clover Flowers Under Heat Stress
description: A two-stage YOLO11 pipeline detects clover flowers and classifies bee presence, with public analysis scripts and explicit limits on within-dataset validation.
year: '2026'
authors:
- Peter Oliver
- Sushma Naithani
- Joussy Hidrobo-Chavez
- Yashoda Murali
- Benjamin Nichols
- Ramesh Sagili
- Pankaj Jaiswal
- Yue Zhang
orgs:
- 🇺🇸 Oregon State University
topics:
- computer-vision
- behavior-recognition
- pollination-monitoring
productAreas:
- gate-tracker
- monitoring-platform
paperType: journal
doi: 10.17912/micropub.biology.002378
pdf: /assets/research/papers/pdfs/2026-clover-honeybee-foraging-monitoring.pdf
abstract: >-
  This proof-of-concept study uses image-based monitoring to quantify honey bee visits to white clover under normal and hot conditions. A two-stage YOLO11 pipeline first detects flowers and then classifies bee presence in cropped flower images. More than 280,000 images were collected; the flower detector was trained and evaluated using 177 annotated images, and the bee-presence classifier used a separate collection of labeled flower cutouts. The methods report flower-detection precision of 0.922 and mAP50 of 0.953, and bee-presence classification accuracy of 0.989. These are within-dataset evaluations rather than independent-site tests. Analysis scripts are publicly available. The experiment demonstrates a monitoring method, not definitive causal effects of heat stress on bee foraging.
---

[PDF](/assets/research/papers/pdfs/2026-clover-honeybee-foraging-monitoring.pdf)

<object data="/assets/research/papers/pdfs/2026-clover-honeybee-foraging-monitoring.pdf" type="application/pdf" width="100%" height="800"><a href="/assets/research/papers/pdfs/2026-clover-honeybee-foraging-monitoring.pdf">Download PDF</a></object>

## External links

- [DOI](https://doi.org/10.17912/micropub.biology.002378)
- [Publisher article, author affiliations, and review history](https://www.micropublication.org/journals/biology/micropub-biology-002378/)
- [Original publisher PDF](https://www.micropublication.org/static/pdf/micropub-biology-002378.pdf)
- [PubMed record](https://pubmed.ncbi.nlm.nih.gov/42729857/)
- [Analysis scripts: Naithani Lab, Clover-honeybees](https://github.com/naithanis/Naithani-lab-codes/tree/master/Clover-honeybees)

## Publication and access

Published in **microPublication Biology on 27 August 2026**, after acceptance on 24 August 2026. The publisher identifies an anonymous reviewer; this is a peer-reviewed methodology/new-finding article, not a preprint. The DOI is registered through DataCite.

Copyright 2026 by the authors, licensed under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). The local PDF is an unmodified publisher copy, attributed to Peter Oliver and coauthors. The analysis repository is publicly accessible; its availability alone does not establish the reuse license for every code or data file.

## Abstract

The frontmatter abstract is an editorial summary of the downloaded paper. The system monitors bee-flower interactions with a flower-first detector and a second classifier for whether a honey bee is present. This makes small bees in wide-field images easier to analyze without requiring a single detector to solve flower localization and bee recognition simultaneously.

The methods distinguish **flower-detection precision (0.922)** from **mAP50 (0.953)**. The introductory description loosely reports 95% precision; the values above follow the more detailed methods, avoiding confusion between precision and average precision. Bee-presence classification accuracy is 0.989 on held-out cutouts.

Both stages use train/test partitions from their respective image collections. The paper explicitly warns that shared cameras, days, scenes, and environmental conditions can correlate the splits. These scores therefore do not demonstrate generalization to new apiaries, flower species, or camera configurations. The authors also frame the heat-stress comparison as a proof of concept rather than a definitive causal experiment.

## Relevancy to Gratheon

- **Pollination monitoring:** provides a practical route from images to flower occupancy and visitation indicators, potentially complementing hive-entrance traffic with observations at forage plants.
- **Vision pipeline design:** cropping around a relevant region before classification is a useful pattern for small targets in Entrance Observer and other bee-monitoring cameras, but the trained clover models are not entrance counters.
- **Evaluation:** use separate cameras, days, and sites for external validation and assess visit-count errors separately from image-level classification. Repeated images of a bee on one flower must not automatically count as independent visits.
- **Reproducibility:** the linked analysis scripts are a starting point for experiments; verify code/data permissions and independently reproduce results before product integration.
