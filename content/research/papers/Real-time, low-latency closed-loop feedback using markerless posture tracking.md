---
hideNav: true
layout: research
hideToc: true
title: Real-time, low-latency closed-loop feedback using markerless posture tracking
description: The ability to control a behavioral task or stimulate neural activity based on animal behavior in real-time is an important tool for experimental neuroscientists.
year: '2020'
orgs:
- "\U0001F1FA\U0001F1F8 Harvard University"
- "\U0001F1EC\U0001F1E7 NeuroGEARS Ltd"
- "\U0001F1FA\U0001F1F8 University of Oregon"
- "\U0001F1E8\U0001F1ED Swiss Federal Institute of Technology"
topics:
- computer-vision
- bee-behaviour
productAreas:
- hive-scanner
paperType: journal
pdf: "/assets/research/papers/pdfs/elife-61909-v3.pdf"
doi: 10.7554/eLife.61909
abstract: 'The ability to control a behavioral task or stimulate neural activity based on animal behavior in real-time is an important tool for experimental neuroscientists. Ideally, such tools are noninvasive, low-latency, and provide interfaces to trigger external hardware based on posture. Recent advances in pose estimation with deep learning allows researchers to train deep neural networks to accurately quantify a wide variety of animal behaviors. Here, we provide a new DeepLabCut-Live! package that achieves low-latency real-time pose estimation (within 15 ms, >100 FPS), with an additional forward-prediction module that achieves zero-latency feedback, and a dynamic-cropping mode that allows for higher inference speeds. We also provide three options for using this tool with ease: (1) a stand-alone GUI (called DLC-Live!XGUI), and integration into (2) Bonsai, and (3)'
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
