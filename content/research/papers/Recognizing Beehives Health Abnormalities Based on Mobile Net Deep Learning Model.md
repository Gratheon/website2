---
hideNav: true
layout: research
hideToc: true
title: "Recognizing Beehives’ Health Abnormalities Based on Mobile Net Deep Learning Model"
description: "2023 open-access deep-learning paper using a modified MobileNet model to classify beehive health abnormalities such as Varroa/hive beetles, ant problems, and missing queen cases."
year: "2023"
authors:
- Mohamed Torky
- Aida A. Nasr
- Aboul Ella Hassanien
orgs:
- 🇪🇬 Egyptian Russian University
- 🇪🇬 Cairo University
- 🇪🇬 Tanta University
- 🇪🇬 Scientific Research Group in Egypt
topics:
- computer-vision
- varroa-health
- colony-health
productAreas:
- hive-scanner
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/recognizing-beehives-health-abnormalities-mobilenet.pdf"
doi: 10.1007/s44196-023-00311-9
---

[PDF](pdfs/recognizing-beehives-health-abnormalities-mobilenet.pdf)

<object data={require('./pdfs/recognizing-beehives-health-abnormalities-mobilenet.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1007/s44196-023-00311-9
- [Publisher PDF](https://link.springer.com/content/pdf/10.1007/s44196-023-00311-9.pdf)

## Abstract

Monitoring beehive health is a major challenge in beekeeping, including detection of Varroa destructor, hive beetles, ant problems, and missing queens. The paper proposes a deep-learning methodology for recognizing beehive health abnormalities using a modified MobileNet model. Three optimization algorithms—Adam, Nadam, and SGD—are compared on a benchmark beehive dataset, and the MobileNet model with Adam optimizer achieved reported testing accuracy of 95% for classifying the targeted abnormality classes. The study positions AI, computer vision, and IoT as components of warning, prediction, and recognition systems for hive health and bee behavior monitoring.

## Relevancy to Gratheon

For Gratheon, this paper is a useful reference for lightweight vision models that classify multiple hive-health abnormality classes rather than a single pest or behavior. The MobileNet focus is relevant to edge or mobile deployment, while the abnormality categories map directly to beekeeper-facing alerts. It should be treated as a benchmark and design reference rather than a field-ready solution: Gratheon would need to verify dataset representativeness, class definitions, and real-apiary performance before using similar models in production.
