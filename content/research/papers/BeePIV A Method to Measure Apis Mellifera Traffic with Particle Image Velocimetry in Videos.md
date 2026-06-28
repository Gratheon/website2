---
hideNav: true
layout: research
hideToc: true
title: 'BeePIV: A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos'
description: Accurate measurement of honeybee (Apis mellifera) traffic in the vicinity of the hive is critical in systems that continuously monitor honeybee colonies to detect deviations from the norm.
year: '2021'
authors:
- Vladimir Kulyukin
- Sarbajit Mukherjee
- Angela Minichiello
- Tadd Truscott
orgs:
- "\U0001F1FA\U0001F1F8 Utah State University"
topics:
- computer-vision
- bee-behaviour
productAreas:
- gate-tracker
paperType: journal
pdf: "/assets/research/papers/pdfs/applsci-11-02276-v2.pdf"
doi: 10.3390/app11052276
abstract: Accurate measurement of honeybee (Apis mellifera) traffic in the vicinity of the hive is critical in systems that continuously monitor honeybee colonies to detect deviations from the norm. BeePIV, the algorithm we describe and evaluate in this article, is a new significant result in our longitudinal investigation of honeybee flight and traffic in electronic beehive monitoring. BeePIV converts frames from bee traffic videos to particle motion frames with uniform background, applies particle image velocimetry to these motion frames to compute particle displacement vector fields, classifies individual displacement vectors as incoming, outgoing, and lateral, and uses the respective vector counts to measure incoming, outgoing, and lateral bee traffic. We evaluate BeePIV on twelve 30-s color videos with a total frame count of 8928 frames for which we obtained the ground truth by manually counting every full bee motion in each frame. The bee motion counts obtained from these videos with BeePIV come closer to the human bee motion counts than the bee motion counts obtained with our previous video-based bee counting.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
