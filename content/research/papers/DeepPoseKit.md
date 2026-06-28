---
hideNav: true
layout: research
hideToc: true
title: DeepPoseKit, a software toolkit for fast and robust animal pose estimation using deep learning
description: Quantitative behavioral measurements are important for answering questions across scientiﬁc disciplines—from neuroscience to ecology.
year: '2019'
orgs:
- "\U0001F1E9\U0001F1EA Max Planck Institute of Animal Behavior"
- "\U0001F1E9\U0001F1EA University of Konstanz"
- "\U0001F1FA\U0001F1F8 Princeton University"
- "\U0001F1E9\U0001F1EA Technische Universität München"
topics:
- computer-vision
productAreas:
- hive-scanner
paperType: preprint
pdf: "/assets/research/papers/pdfs/47994v1.pdf"
abstract: Quantitative behavioral measurements are important for answering questions across scientiﬁc disciplines—from neuroscience to ecology. State-of-the-art deep-learning methods offer major advances in data quality and detail by allowing researchers to automatically estimate locations of an animal’s body parts directly from images or videos. However, currently-available animal pose estimation methods have limitations in speed and robustness. Here we introduce a new easy-to-use software toolkit, DeepPoseKit, that addresses these problems using an eﬃcient multi-scale deep-learning model, called Stacked DenseNet, and a fast GPU-based peak-detection algorithm for estimating keypoint locations with subpixel precision. These advances improve processing speed >2× with no loss in accuracy compared to currently-available.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
