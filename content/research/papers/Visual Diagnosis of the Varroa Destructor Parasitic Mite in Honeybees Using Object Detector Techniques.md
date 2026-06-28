---
hideNav: true
layout: research
hideToc: true
title: Visual Diagnosis of the Varroa Destructor Parasitic Mite in Honeybees Using Object Detector Techniques
description: The Varroa destructor mite is one of the most dangerous Honey Bee (Apis mellifera) parasites worldwide and the bee colonies have to be regularly monitored in order to control its spread.
year: '2021'
authors:
- Simon Bilik
- Lukas Kratochvila
- Adam Ligocki
- Ondrej Bostik
- Tomas Zemcik
- Matous Hybl
- Karel Horak
- Ludek Zalud
orgs:
- "\U0001F1E8\U0001F1FF Brno University of Technology"
topics:
- varroa-health
- computer-vision
productAreas:
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/sensors2102764.pdf"
doi: 10.3390/s21082764
abstract: The Varroa destructor mite is one of the most dangerous Honey Bee (Apis mellifera) parasites worldwide and the bee colonies have to be regularly monitored in order to control its spread. In this paper we present an object detector based method for health state monitoring of bee colonies. This method has the potential for online measurement and processing. In our experiment, we compare the YOLO and SSD object detectors along with the Deep SVDD anomaly detector. Based on the custom dataset with 600 ground-truth images of healthy and infected bees in various scenes, the detectors reached the highest F1 score up to 0.874 in the infected bee detection and up to 0.714 in the detection of the Varroa destructor mite.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models, colony-health diagnostics and Varroa/queen-state alerting. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
