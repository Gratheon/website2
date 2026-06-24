---
hideNav: true
layout: research
hideToc: true
title: "Markerless tracking of an entire honey bee colony"
description: "CNN segmentation method achieving markerless detection of all bees in a full colony on natural honeycomb background, enabling months-long sociometric monitoring with ~79% trajectory recovery."
year: "2021"
orgs:
  - 🇯🇵 Okinawa Institute of Science and Technology Graduate University
  - 🇦🇺 Australian National University
  - 🇳🇱 Vrije Universiteit Amsterdam
topics:
  - computer-vision
  - bee-behaviour
productAreas:
  - hive-scanner
paperType: journal
featured: true
---

[PDF](pdfs/2021-markerless.pdf)

<object data={require('./pdfs/2021-markerless.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1038/s41467-021-21769-1
- [Full text (Nature Communications)](https://www.nature.com/articles/s41467-021-21769-1)

## Abstract

From cells in tissue, to bird flocks, to human crowds, living systems display a stunning variety of collective behaviors. Yet quantifying such phenomena first requires tracking a significant fraction of the group members in natural conditions — a substantial and ongoing challenge. The authors present a comprehensive, computational method for tracking an entire colony of the honey bee *Apis mellifera* using high-resolution video on a natural honeycomb background. A convolutional neural network (CNN) segmentation architecture is adapted to automatically identify bee and brood cell positions, body orientations, and within-cell states. The method achieves high accuracy (~10% body width error in position, ~10° error in orientation, and true positive rate > 90%) and demonstrates months-long monitoring of sociometric colony fluctuations. These fluctuations include ~24 h cycles in counted detections, negative correlation between bee and brood, and nightly enhancement of bees inside comb cells. Detected positions are combined with visual features of organism-centered images to track individuals over time and through challenging occluding events, recovering ~79% of bee trajectories from five observation hives over 5-min timespans. The trajectories reveal important individual behaviors including waggle dances and crawling inside comb cells.

## Relevancy to Gratheon

This Nature Communications paper establishes the state of the art for the hive-scanner product area that Gratheon is targeting. The markerless, full-colony tracking approach is exactly what Gratheon needs for its observation-hive module: no physical marking of bees, no disruption to natural behavior, and automated extraction of population-level metrics — bee count, brood area, and daily cycle amplitude. The months-long deployment at OIST provides a template for how Gratheon's hive-scanner should log continuous sociometric data and surface colony trends in the web-app dashboard. The public dataset and code linked in the paper are also direct training-data resources for Gratheon's computer-vision pipeline.
