---
hideNav: true
layout: research
hideToc: true
title: Detection of Varroa destructor Infestation of Honeybees Based on Segmentation and Object Detection Convolutional Neural Networks
description: Two-stage CNN pipeline combining a segmentation network with YOLOX and Coordinate Attention to detect Varroa destructor on honeybees, achieving 1.13% vs 1.19% true infestation rate.
year: '2023'
authors:
- Mochen Liu
- Mingshi Cui
- Baohua Xu
- Zhenguo Liu
- Zhenghao Li
- Zhenyuan Chu
- Xinshan Zhang
- Guanlu Liu
- Xiaoli Xu
- Yinfa Yan
orgs:
- "\U0001F1E8\U0001F1F3 Shandong Agriculture University"
topics:
- varroa-health
- computer-vision
productAreas:
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/Detection of Varroa destructor Infestation of Honeybees Based on Segmentation and Object Detection Convolutional Neural Networks.pdf"
doi: 10.3390/agriengineering5040102
abstract: "*Varroa destructor* infestation is a major factor leading to the global decline of honeybee populations. Monitoring the level of *Varroa mite* infestation in order to take timely control measures is crucial for the protection of bee colonies. Machine vision systems can achieve non-invasive *Varroa mite* detection on bee colonies, but it is challenged by two factors: the complex dynamic scenes of honeybees and small-scale and limited data on *Varroa destructor*. We design a convolutional neural network integrated with machine vision to solve these problems. To address the first challenge, we separate the image of the honeybee from its surroundings using a segmentation network, and the object-detection network YOLOX detects *Varroa mites* within the segmented regions. This collaboration between segmentation and object detection allows for more precise detection and reduces false positives. To handle the second challenge, we add a Coordinate Attention (CA) mechanism in YOLOX to extract a more discriminative representation of *Varroa destructor* and improve the confidence loss function to alleviate the problem of class imbalance. The experimental results in the bee farm showed that the evaluation metrics of our model are better than other models. Our network's detection value for the percentage of honeybees infested with *Varroa mites* is 1.13%, which is the closest to the true value of 1.19% among all the detection values."
---

## Relevancy to Gratheon

The two-stage segmentation-then-detection pipeline described here offers a concrete model architecture for Gratheon's colony-health visual analysis: a segmentation network first isolates each bee, then YOLOX finds the mite within the segmented region, dramatically reducing false positives from complex background scenes. The Coordinate Attention mechanism and improved confidence loss function are engineering techniques Gratheon can adopt directly to handle the small object size and class imbalance inherent in mite detection. The 1.13% vs 1.19% true infestation rate accuracy — the best among all compared models — sets a high-quality benchmark for Gratheon's own model evaluation. The bee-farm validation setting (real hives, field conditions) gives the results practical weight directly applicable to Gratheon's deployment context.
