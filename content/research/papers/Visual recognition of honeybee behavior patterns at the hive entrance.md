---
hideNav: true
layout: research
hideToc: true
title: Visual recognition of honeybee behavior patterns at the hive entrance
description: YOLOv8-based visual analysis framework for recognizing foraging, fanning, washboarding, and defense behavior patterns at honeybee hive entrances, with an open Mendeley dataset.
year: '2025'
authors:
- Tomyslav Sledevič
- Artūras Serackis
- Dalius Matuzevičius
- Darius Plonis
- Gabriela Vdoviak
orgs:
- "🇱🇹 Vilnius Gediminas Technical University"
topics:
- computer-vision
- bee-behaviour
- datasets
productAreas:
- gate-tracker
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/journal.pone.0318401.pdf"
doi: 10.1371/journal.pone.0318401
abstract: This study presents a method for automatically recognizing honeybee behavior patterns at the hive entrance. Using YOLOv8 models for detection and segmentation, the approach analyzes bee location, direction, path trajectory, and movement speed on the hive landing board. The system detects multiple activities, including foraging, fanning, washboarding, and defense, achieving a mean detection accuracy of 98% and up to 36 fps. Key contributions include a dataset with 7200 frames from eight beehives, behavior-class tracks, and a comparative evaluation of object detection and tracking algorithms tailored for bee detection and behavior recognition.
---

## Relevancy to Gratheon

This paper is directly actionable for Gratheon's entrance-camera and gate-tracker concepts. It moves beyond simple in/out counting by linking object detection, segmentation, trajectories, speed, direction, and density maps to recognizable hive-entrance behaviors such as foraging, fanning, washboarding, and defense. The open dataset is also valuable for benchmarking Gratheon models on real entrance footage and for designing behavior alerts in the web app without opening the hive. The reported 98% mean detection accuracy and up to 36 fps provide useful performance targets for real-time monitoring deployments.
