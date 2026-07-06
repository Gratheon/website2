---
hideNav: true
layout: research
hideToc: true
title: "Pollen Bearing Honey Bee Detection in Hive Entrance Video Recorded by Remote Embedded System for Pollination Monitoring"
description: "2016 ISPRS paper on real-time embedded detection of pollen-bearing honey bees from hive-entrance video using segmentation, color features, and simple classification for pollination monitoring."
year: "2016"
authors:
- Zdenka Babić
- Ratko Pilipović
- Vladimir Risojević
- Goran Mirjanić
orgs:
- 🇧🇦 University of Banja Luka
topics:
- computer-vision
- bee-behaviour
- pollination-ecology
productAreas:
- gate-tracker
paperType: conference
pdf: "/assets/research/papers/pdfs/pollen-bearing-honey-bee-detection-hive-entrance-video-remote-embedded-system.pdf"
doi: 10.5194/isprs-annals-III-7-51-2016
---

[PDF](pdfs/pollen-bearing-honey-bee-detection-hive-entrance-video-remote-embedded-system.pdf)

<object data={require('./pdfs/pollen-bearing-honey-bee-detection-hive-entrance-video-remote-embedded-system.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.5194/isprs-annals-III-7-51-2016
- [Publisher PDF](https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/III-7/51/2016/isprs-annals-III-7-51-2016.pdf)

## Abstract

Honey bees have a crucial role in pollination, and this paper presents a simple, non-invasive system for pollen-bearing honey bee detection in surveillance video recorded at the hive entrance. The system is intended as part of a more complex tracking and counting pipeline for remote pollination monitoring. It runs in real time on embedded systems co-located with the hive, using background subtraction, color segmentation, and morphology to segment bees. Classification into pollen-bearing and non-pollen-bearing bees is performed using a nearest-mean classifier with color-variance and eccentricity features, achieving an 88.7% correct classification rate with 50 training images per class.

## Relevancy to Gratheon

This older paper fills an important historical and practical gap for Gratheon's gate-tracker ideas: pollen-load detection can turn entrance video from a generic traffic counter into a pollination-service and forage-quality signal. Its lightweight embedded pipeline is also relevant for low-power field deployment, especially when deep networks are too expensive or unnecessary. Gratheon can use it as a baseline for comparing modern CNN/YOLO pollen classifiers against simpler color-and-shape methods on edge hardware.
