---
hideNav: true
layout: research
hideToc: true
title: Keypoint-Based Bee Orientation Estimation and Ramp Detection at the Hive Entrance for Bee Behavior Identification System
description: This paper addresses the challenge of accurately estimating bee orientations on beehive landing boards, which is crucial for optimizing beekeeping practices and enhancing agricultural productivity.
year: '2024'
orgs:
- 🇱🇹 Vilnius Gediminas Technical University
topics:
- computer-vision
- bee-behaviour
productAreas:
- gate-tracker
paperType: journal
---

[PDF](pdfs/agriculture-14-01890.pdf)

<object data={require('./pdfs/agriculture-14-01890.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/agriculture14111890

## Abstract

This paper addresses the challenge of accurately estimating bee orientations on beehive landing boards, which is crucial for optimizing beekeeping practices and enhancing agricultural productivity. The research utilizes YOLOv8 pose models, trained on a dataset created using an open-source computer vision annotation tool. The annotation process involves associating bounding boxes with keypoints to represent bee orientations, with each bee annotated using two keypoints: one for the head and one for the stinger. The YOLOv8-pose models demonstrate high precision, achieving 98% accuracy for both bounding box and keypoint detection in 1024 × 576 px images. However, trade-offs between model size and processing speed are addressed, with the smaller nano model reaching 67 frames per second on 640 × 384 px.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
