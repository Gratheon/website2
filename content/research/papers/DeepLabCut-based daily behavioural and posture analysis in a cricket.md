---
hideNav: true
layout: research
hideToc: true
title: DeepLabCut-based daily behavioural and posture analysis in a cricket
description: Circadian rhythms are indispensable intrinsic programs that regulate the daily rhythmicity of physiological processes, such as feeding and sleep.
year: '2021'
orgs:
- "\U0001F1EF\U0001F1F5 Waseda University"
topics:
- computer-vision
- bee-behaviour
productAreas:
- hive-scanner
paperType: journal
pdf: "/assets/research/papers/pdfs/bio060237.pdf"
doi: 10.1242/bio.060237
abstract: Circadian rhythms are indispensable intrinsic programs that regulate the daily rhythmicity of physiological processes, such as feeding and sleep. The cricket has been employed as a model organism for understanding the neural mechanisms underlying circadian rhythms in insects. However, previous studies measuring rhythm-controlled behaviours only analysed locomotive activity using seesaw-type and infrared sensor-based actometers. Meanwhile, advances in deep learning techniques have made it possible to analyse animal behaviour and posture using software that is devoid of human bias and does not require physical tagging of individual animals. Here, we present a system that can simultaneously quantify multiple behaviours in individual crickets – such as locomotor activity, feeding, and sleep-like states – in the longterm, using DeepLabCut, a supervised machine learning-based software for body keypoints.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
