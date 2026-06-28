---
hideNav: true
layout: research
hideToc: true
title: Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression
description: Traditional methods for assessing honey storage in beehives predominantly rely on manual visual inspection, which often leads to inconsistencies and inefficiencies.
year: '2025'
authors:
- Watit Khokthong
- Panpakorn Kritangkoon
- Chainarong Sinpoo
- Phuwasit Takioawong
- Patcharin Phokasem
- Terd Disayathanoowat
orgs:
- "\U0001F1F9\U0001F1ED Chiang Mai University"
topics:
- computer-vision
productAreas:
- hive-scanner
paperType: journal
pdf: "/assets/research/papers/pdfs/insects-16-00575.pdf"
doi: 10.3390/insects16060575
abstract: Traditional methods for assessing honey storage in beehives predominantly rely on manual visual inspection, which often leads to inconsistencies and inefficiencies. This study presents an automated deep learning approach utilizing the YOLOv11 model to detect, classify, and quantify honey cells within Apis mellifera frames across monthly sampling periods. The model’s performance varied depending on image resolution and dataset partitioning. Using the free version of YOLOv11 with high-resolution images (960 × 960 resolution) and a dataset split of 90:5:5 for training, validating, and testing, the model achieved a mean average precision at IoU threshold of 0.5 (mAP@0.5) of 83.4% for uncapped honey cells and 80.5% for capped honey cells. A strong correlation (r = 0.94) was observed between the 90:5:5 and 80:10:10 dataset splits, indicating that increasing the volume of training data enhances classification.
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs camera-based hive-scanner and computer-vision models. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
