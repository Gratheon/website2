---
hideNav: true
layout: research
hideToc: true
title: "Honeybee Counting on Comb Images via Part-Level Annotation and Hungarian Matching"
description: "Open-access 2026 SN Computer Science paper proposing automated honeybee counting from single comb images using abdomen/head/body detectors and Hungarian matching to reduce occlusion-related misses."
year: "2026"
orgs:
  - 🇯🇵 Utsunomiya University
topics:
  - computer-vision
  - bee-counting
  - colony-health
productAreas:
  - hive-scanner
  - monitoring-platform
paperType: journal
---

[PDF](pdfs/Honeybee Counting on Comb Images via Part-Level Annotation and Hungarian Matching.pdf)

<object data={require('./pdfs/Honeybee Counting on Comb Images via Part-Level Annotation and Hungarian Matching.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1007/s42979-026-05189-w
- [Full text (Springer Nature Link)](https://link.springer.com/article/10.1007/s42979-026-05189-w)

## Abstract

Inspection of combs is a critical task in beekeeping where the condition of the comb and the size of the bee population within a hive are assessed. Manual counting of bees is a cumbersome process that compromises efficiency and accuracy. To address this issue, we propose an automated, machine-learning-based inspection method that uses single images of combs with bees. This method eliminates the need for specialized equipment, such as optical sensors, video cameras, or additional entrance modifications for bee traffic monitoring. The research question was to determine which anatomical region of the honeybee provides the most accurate detection results, and whether combining multiple detection approaches could improve accuracy overall. We annotated three distinct parts of honeybees in comb images: the abdomen, head, and whole-body. The SSD models with VGG16 pretrained backbones and YOLOv11 were fine-tuned to detect each part, and their detection accuracies were compared. We also attempted to combine predicted bounding boxes using the Hungarian method to compensate for those that were not detected due to occlusions. Experimental results showed superior accuracy of the abdomen detector compared to the head and whole-body detectors across different densities of bee images. The integrated approach effectively reduced the number of undetected bees compared to individual detection methods. Furthermore, applying the matching framework to YOLOv11 yielded consistent recall improvements over whole-body detection alone, empirically demonstrating that the proposed matching strategy is detector-agnostic and addresses occlusion-induced false negatives independently of the underlying detection architecture. The proposed machine learning-based method successfully automates bee counting from single comb images. This offers a simple solution for beekeeping comb inspection automation.

## Relevancy to Gratheon

This paper is highly relevant to Gratheon's hive-scanner and computer-vision roadmap because it focuses on a practical inspection workflow: counting bees from one comb photo rather than requiring a modified hive entrance, continuous camera, or specialized optical hardware. The comparison between abdomen, head, and whole-body annotations provides concrete guidance for dataset labeling strategy, and the Hungarian matching step is a reusable technique for crowded/occluded bee scenes where false negatives dominate. It can inform product features for comb inspection, colony-strength estimation, and beekeeper mobile-photo analysis.
