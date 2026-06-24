---
hideNav: true
layout: research
hideToc: true
title: A Preliminary Study of Image Analysis forParasite Detection on Honey Bees
description: Varroa destructor is a parasite harming bee colonies.
year: '2018'
orgs:
- 🇦🇹 Vienna University of Technology
- 🇪🇸 Universidad de Oviedo
- 🇪🇸 Universitat de Barcelona
topics:
- computer-vision
- varroa-health
productAreas:
- colony-health
paperType: conference
---

[PDF](pdfs/162572124.pdf)

<object data={require('./pdfs/162572124.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- [Local PDF](pdfs/162572124.pdf)

## Abstract

Varroa destructor is a parasite harming bee colonies. As the worldwide bee population is in danger, beekeepers as well as researchers are looking for methods to monitor the health of bee hives. In this context, we present a preliminary study to detect parasites on bee videos by means of image analysis and machine learning techniques. For this purpose, each video frame is analyzed individually to extract bee image patches, which are then processed to compute image descriptors and finally classified into mite and no mite bees. The experimental results demonstrated the adequacy of the proposed method, which will be a perfect stepping stone for a further bee monitoring.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models, colony-health diagnostics and Varroa/queen-state alerting. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
