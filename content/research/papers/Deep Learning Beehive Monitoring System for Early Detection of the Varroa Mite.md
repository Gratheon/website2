---
hideNav: true
layout: research
hideToc: true
title: "Deep Learning Beehive Monitoring System for Early Detection of the Varroa Mite"
description: "Embedded camera module with two-stage CNN pipeline (bee detection + mite identification) placed inside the brood box for real-time, offline-capable Varroa detection."
year: "2022"
orgs:
  - 🇬🇷 University of Ioannina
topics:
  - varroa-health
  - computer-vision
  - edge-ai-energy
productAreas:
  - colony-health
paperType: journal
---

[PDF](pdfs/Deep Learning Beehive Monitoring System for Early Detection of the Varroa Mite.pdf)

<object data={require('./pdfs/Deep Learning Beehive Monitoring System for Early Detection of the Varroa Mite.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/signals3030030
- [Full text (MDPI Signals)](https://www.mdpi.com/2624-6120/3/3/30)

## Abstract

One of the most critical causes of colony collapse disorder in beekeeping is caused by the Varroa mite. This paper presents an embedded camera module supported by a deep learning algorithm for the process of early detecting of Varroa infestations. This is achieved using a deep learning algorithm that tries to identify bees inside the brood frames carrying the mite in real-time. The end-node device camera module is placed inside the brood box. It is equipped with offline detection in remote areas of limited network coverage or online imagery data transmission and mite detection over the cloud. The proposed deep learning algorithm uses a deep learning network for bee object detection and an image processing step to identify the mite on the previously detected objects. Finally, the authors present their proof of concept experimentation of their approach that can offer a total bee and Varroa detection accuracy of close to 70%.

## Relevancy to Gratheon

This paper's architecture — a camera module placed inside the brood box with on-device deep learning inference and an optional cloud fallback — is precisely the hardware and software model Gratheon would deploy for its in-hive Varroa scanner. The two-stage pipeline (first detect bee, then detect mite on the bee) provides a practical CNN architecture blueprint that Gratheon can adapt with more recent model families to push accuracy above the 70% baseline established here. The edge/cloud dual-mode design also supports Gratheon's connectivity-constrained deployment scenario in remote apiaries, where reliable internet is unavailable. Published in 2022, this paper represents a directly citable proof of concept for Gratheon's in-hive camera product concept.
