---
hideNav: true
layout: research
hideToc: true
title: "The Relevance of Compound Events in Bee Traffic Monitoring"
description: "A 2026 open-access MDPI Informatics paper showing that U-turns and guarding-like compound movements are common at hive entrances and must be modeled for accurate bee traffic reconstruction."
year: "2026"
orgs:
  - 🇵🇷 University of Puerto Rico at Río Piedras
topics:
  - computer-vision
  - bee-traffic
  - behavior-recognition
productAreas:
  - monitoring-platform
  - colony-health
paperType: journal
---

[PDF](pdfs/The Relevance of Compound Events in Bee Traffic Monitoring.pdf)

<object data={require('./pdfs/The Relevance of Compound Events in Bee Traffic Monitoring.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/informatics13050065
- [Full text (MDPI Informatics)](https://www.mdpi.com/2227-9709/13/5/65)

## Abstract

Bees are essential pollinators for agricultural systems, making accurate, automated monitoring of their behavior critical for assessing colony health and ecosystem stability. Recent advances in computer vision and artificial intelligence have enabled large-scale bee traffic monitoring at hive entrances; however, most existing event classification methods focus exclusively on simple entrance and exit events. This simplification overlooks compound movements—such as U-turns and guarding behaviors—that represent a substantial portion of bee activity and can lead to inaccurate trajectory reconstruction and misleading behavioral interpretations. In this work, we systematically analyze existing event classification strategies used in automatic bee traffic monitoring, evaluating their performance on both simple and compound movements. We then propose extended classification methods that explicitly model compound events by incorporating bidirectional movement patterns derived from positional and angular cues. Using a manually annotated dataset of computer-vision-based hive entrance recordings, we compare threshold-based, displacement-based, and angle-based approaches under simple and mixed-event conditions. Our results demonstrate that compound events account for over one-third of all detected movements and that classification methods explicitly designed to handle bidirectional behavior substantially outperform traditional approaches in both accuracy and robustness. In particular, threshold-based bidirectional classification achieves near-perfect performance when full trajectories are available, while displacement-based methods provide a reliable alternative under partial observations. These findings highlight the importance of modeling compound behaviors in automated bee monitoring systems and contribute to more accurate flight reconstruction, behavioral analysis, and AI-driven decision support for precision agriculture and pollinator management.

## Relevancy to Gratheon

This paper is directly actionable for Gratheon's entrance-camera analytics. It warns that reducing hive entrance observations to simple in/out counts can misrepresent a large fraction of behavior: compound movements such as U-turns and guarding-like trajectories may exceed one-third of events. The proposed bidirectional classification features are useful for improving traffic reconstruction, alert quality, and colony-state interpretation in a monitoring dashboard. It is also from the BigDBee/LabelBee research lineage represented in the collection through Rémi Mégret's group.
