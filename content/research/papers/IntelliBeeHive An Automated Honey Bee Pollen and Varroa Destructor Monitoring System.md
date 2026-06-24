---
hideNav: true
layout: research
hideToc: true
title: 'IntelliBeeHive: An Automated Honey Bee, Pollen, and Varroa Destructor Monitoring System'
description: Utilizing computer vision and the latest technological advancements, in this study, we developed a honey bee monitoring system that aims to enhance our understanding of Colony Collapse Disorder, honey bee behavior, population.
year: '2024'
orgs:
- 🇺🇸 University of Texas Rio Grande Valley
topics:
- computer-vision
- varroa-health
- bee-behaviour
productAreas:
- gate-tracker
- colony-health
paperType: conference
---

[PDF](pdfs/2309.08955v1.pdf)

<object data={require('./pdfs/2309.08955v1.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1109/ICMLA61862.2024.00122
- arXiv: https://arxiv.org/abs/2309.08955

## Abstract

Utilizing computer vision and the latest technological advancements, in this study, we developed a honey bee monitoring system that aims to enhance our understanding of Colony Collapse Disorder, honey bee behavior, population decline, and overall hive health. The system is positioned at the hive entrance providing real-time data, enabling beekeepers to closely monitor the hive’s activity and health through an account-based website. Using machine learning, our monitoring system can accurately track honey bees, monitor pollengathering activity, and detect Varroa mites, all without causing any disruption to the honey bees. Moreover, we have ensured that the development of this monitoring system utilizes costeffective technology, making it accessible to apiaries of various scales, including hobbyists, commercial beekeeping businesses, and researchers. The inference models used to detect honey bees, pollen, and mites are based on the YOLOv7-tiny architecture trained with our own.

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models, colony-health diagnostics and Varroa/queen-state alerting. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
