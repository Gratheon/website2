---
hideNav: true
layout: research
hideToc: true
title: "Automated Video Monitoring of Unmarked and Marked Honey Bees at the Hive Entrance"
description: "CNN-based system for automatic video monitoring of honeybee foraging activity at the hive entrance, detecting entrance/exit events, pollen loads, and individual barcoded bees without physical marking."
year: "2022"
orgs:
  - 🇵🇷 University of Puerto Rico
  - 🇺🇸 Brown University
  - 🇺🇸 Howard Hughes Medical Institute (Janelia Research Campus)
topics:
  - computer-vision
  - bee-behaviour
productAreas:
  - gate-tracker
paperType: journal
featured: true
---

[PDF](pdfs/fcomp-03-769338.pdf)

<object data={require('./pdfs/fcomp-03-769338.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3389/fcomp.2021.769338
- [Full text (Frontiers in Computer Science)](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2021.769338/full)

## Abstract

We present a novel system for the automatic video monitoring of honey bee foraging activity at the hive entrance. This monitoring system is built upon convolutional neural networks that perform multiple animal pose estimation without the need for marking. This precise detection of honey bee body parts is a key element of the system to provide detection of entrance and exit events at the entrance of the hive including accurate pollen detection. A detailed evaluation of the quality of the detection and a study of the effect of the parameters are presented. The complete system also integrates identification of barcode marked bees, which enables the monitoring at both aggregate and individual levels. The results obtained on multiple days of video recordings show the applicability of the approach for large-scale deployment. This is an important step forward for the understanding of complex behaviors exhibited by honey bees and the automatic assessment of colony health.

## Relevancy to Gratheon

This paper is a direct technical reference for Gratheon's Entrance Observer hardware product. The pose-estimation pipeline for detecting entrance/exit events and pollen load mirrors exactly what Gratheon's gate-tracker model targets: counting bees in and out without physical modification of the hive. The barcode-level individual tracking described here represents a more advanced version of what Gratheon's camera module could support in a future product tier. The open evaluation methodology also provides a benchmark against which Gratheon's own detection accuracy can be measured.
