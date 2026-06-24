---
hideNav: true
layout: research
hideToc: true
title: "Towards dense object tracking in a 2D honeybee hive"
description: "U-Net segmentation with orientation-aware loss and temporal recurrence for dense markerless bee detection and tracking, with a 375k-instance labeled dataset."
year: "2018"
orgs:
  - 🇯🇵 Okinawa Institute of Science and Technology Graduate University
  - 🇳🇱 VU University Amsterdam
topics:
  - computer-vision
  - bee-behaviour
productAreas:
  - hive-scanner
paperType: conference
featured: true
---

[PDF](pdfs/Bozek_Towards_Dense_Object_CVPR_2018_paper.pdf)

<object data={require('./pdfs/Bozek_Towards_Dense_Object_CVPR_2018_paper.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- [CVPR 2018 open access (CVF)](https://openaccess.thecvf.com/content_cvpr_2018/papers/Bozek_Towards_Dense_Object_CVPR_2018_paper.pdf)
- [Publisher (IEEE Xplore)](https://ieeexplore.ieee.org/document/8578773)

## Abstract

From human crowds to cells in tissue, the detection and efficient tracking of multiple objects in dense configurations is an important and unsolved problem. In the past, limitations of image analysis restricted studies of dense groups to tracking a single or subset of marked individuals, or to coarse-grained group-level dynamics, all of which yield incomplete information. Here, the authors combine convolutional neural networks (CNNs) with the model environment of a honeybee hive to automatically recognize all individuals in a dense group from raw image data. A new, adapted individual labeling scheme is created and the segmentation architecture U-Net is used with a loss function dependent on both object identity and orientation. Temporal regularities of the video recording are exploited in a recurrent manner, reducing network size by 94% compared to the original U-Net while achieving near human-level performance. The dataset contains over 375,000 labeled bee instances across 720 video frames at 2 FPS. The method correctly detects 96% of individuals with a location error of ~7% of a typical body dimension and orientation error of ~12°, and provides an important step toward automated dense object tracking in biological systems.

## Relevancy to Gratheon

This CVPR 2018 paper is the foundational precursor to the full-colony markerless tracking work (Bozek et al., Nature Communications 2021) and sets the dataset and detection baseline that Gratheon's hive-scanner model can build upon. The U-Net segmentation approach with orientation-aware loss is directly applicable to Gratheon's comb-frame video analysis pipeline. The 375k-instance labeled dataset is a significant open resource for bootstrapping Gratheon's training data. The 96% detection rate at 2 FPS defines the minimum performance bar that Gratheon's real-time hive-scanner must eventually exceed, while the temporal-recurrence trick offers a model-compression technique Gratheon can reuse for edge deployment.
