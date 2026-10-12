---
hideNav: true
layout: research
hideToc: true
title: A U-Net–Based Segmentation Approach for Honeybee Pollen Detection Using Deep Learning
description: U-Net segmentation of pollen loads on honeybees using manually produced masks for a public 714-image dataset.
year: '2026'
authors:
- Esra Yılmaz
- Ali Sarıkaş
orgs:
- Marmara University, İstanbul, Türkiye
topics:
- computer-vision
- bee-traffic
- precision-beekeeping
productAreas:
- gate-tracker
paperType: journal-article
doi: 10.21205/deufmd.2026288411
abstract: This research article applies U-Net to segment pollen carried by honeybees in the public Pollen Dataset. The 714 images include 368 pollen-bearing bees and 346 without pollen. The authors manually annotate pollen regions, generate binary masks and use a random 80/20 split with 571 training images and 143 held-out test images. They report an F1 score of 99.4%. The study demonstrates a compact image-analysis approach for pollen-load monitoring, but does not establish transfer to unseen apiaries, camera systems or continuous entrance video.
---

## Publication and access

- Published 30 September 2026 in *Dokuz Eylül Üniversitesi Mühendislik Fakültesi Fen ve Mühendislik Dergisi*, volume 28, issue 84, pages 443-448; publisher category: Research Article.
- [DOI](https://doi.org/10.21205/deufmd.2026288411) · [Publisher record](https://dergipark.org.tr/en/pub/deumffmd/article/1816323) · [Open publisher PDF](https://dergipark.org.tr/en/download/article-file/5386773)
- Author names, affiliations and publication date agree between the publisher record, Crossref and the PDF.
- The publisher states [Creative Commons Attribution-NonCommercial 4.0](https://creativecommons.org/licenses/by-nc/4.0/). The six-page PDF was downloaded and parsed for verification, but **is not mirrored on Gratheon's product website** because commercial redistribution permission was not established.

The abstract above is an editorial summary, not a verbatim author abstract.

## Relevancy to Gratheon

Pollen-load segmentation is directly relevant to entrance-camera estimates of incoming pollen-bearing foragers. The manual-mask workflow also illustrates how an existing image-classification collection can be extended into a segmentation task.

The reported F1 is an in-dataset result, not an estimate of field performance. The paper uses an image-random split rather than a demonstrated apiary-, camera- or video-disjoint evaluation. Segmentation scores and whole-bee pollen-presence classification scores should not be treated as interchangeable when comparing methods. No release of the new masks or trained checkpoint was verified. A Gratheon evaluation should use independent entrance video and separately measure missed pollen carriers, false positives and mask quality.
