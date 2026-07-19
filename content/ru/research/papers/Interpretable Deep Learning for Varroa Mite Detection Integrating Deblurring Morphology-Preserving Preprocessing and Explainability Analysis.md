---
hideNav: true
layout: research
hideToc: true
title: "Interpretable Deep Learning for Varroa Mite Detection: Integrating Deblurring, Morphology-Preserving Preprocessing, and Explainability Analysis"
description: VarroaNet combines morphology-preserving preprocessing with explainability analysis, reaching 97.28% mean classification accuracy and correctly localizing mite regions in 92.7% of infested test images.
year: '2026'
authors:
- Hong-Gu Lee
- Jeong-Yong Shin
- Woon-Tak Han
- Su-Bae Kim
- Min-Jee Kim
- Giyoung Kim
- Changyeun Mo
orgs:
- 🇰🇷 Kangwon National University
- 🇰🇷 National Institute of Agricultural Sciences
topics:
- computer-vision
- varroa-health
productAreas:
- hive-scanner
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/agronomy-16-01292.pdf"
doi: 10.3390/agronomy16131292
abstract: 'Varroa destructor is the most devastating ectoparasite of Apis mellifera, and early detection is critical for colony survival. This study systematically investigated how image preprocessing, model architecture, and feature map resolution jointly affect classification accuracy and Grad-CAM++ explainability in deep-learning-based Varroa detection. From comb-surface images of 20 A. mellifera colonies, 3400 region-of-interest images were processed through 12 preprocessing pipelines. Nineteen CNN architectures, including the custom lightweight VarroaNet model, were screened across all pipelines. VarroaNet achieved 97.28% mean accuracy with low cross-configuration variability. The recommended configuration at 28 × 28 feature-map resolution achieved a Pointing Game score of 0.927, indicating correct attention to the mite region in 92.7% of infested test images.'
---

## Relevancy to Gratheon

This study is directly applicable to Gratheon's hive-scanner and Varroa monitoring work. Its comparison of 516 preprocessing, architecture, and feature-resolution configurations provides an unusually strong basis for selecting a lightweight detector. The finding that classification accuracy can diverge from localization quality is especially important for product validation: a trustworthy mite detector should verify that its prediction is based on the mite rather than background features. VarroaNet and the morphology-preserving preprocessing pipeline offer concrete baselines for image-based colony health diagnostics.
