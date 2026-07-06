---
hideNav: true
layout: research
hideToc: true
title: "Image-based honey bee larval viral and bacterial diagnosis using machine learning"
description: "2025 Scientific Reports paper testing image-based machine-learning diagnosis of honey bee brood disease from larval images molecularly verified for European foulbrood and viral infections."
year: "2025"
authors:
- Duan C. Copeland
- Brendon M. Mott
- Oliver L. Kortenkamp
- Robert J. Erickson
- Nathan O. Allen
- Kirk E. Anderson
orgs:
- 🇺🇸 USDA Carl Hayden Bee Research Center
- 🇺🇸 University of Arizona
- 🇺🇸 Arizona Science Center
topics:
- computer-vision
- colony-health
- datasets-benchmarks
productAreas:
- hive-scanner
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/image-based-honey-bee-larval-viral-bacterial-diagnosis-machine-learning.pdf"
doi: 10.1038/s41598-025-16261-5
---

[PDF](pdfs/image-based-honey-bee-larval-viral-bacterial-diagnosis-machine-learning.pdf)

<object data={require('./pdfs/image-based-honey-bee-larval-viral-bacterial-diagnosis-machine-learning.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1038/s41598-025-16261-5
- [Publisher PDF](https://www.nature.com/articles/s41598-025-16261-5.pdf)

## Abstract

Honey bees are essential pollinators, but commercial beekeepers often lose large fractions of hives annually, including to brood diseases caused by bacterial, viral, and fungal pathogens. Accurate diagnosis of brood disease, especially distinguishing European Foulbrood from visually similar viral infections, is difficult and can lead to unnecessary antibiotic treatment. The authors generated a dataset of 2,759 honey bee larvae images from Michigan apiaries, molecularly verified through 16S rRNA microbiome sequencing and qPCR viral screening, then augmented the EFB and viral image classes. Transfer learning with deep convolutional networks including ResNet-50v2, ResNet-101v2, and InceptionResNet-v2 achieved 73–88% accuracy on training/validation sets. On an independent Illinois dataset, performance was stronger for EFB than viral infections, demonstrating both the promise and the current limits of image-based field diagnosis.

## Relevancy to Gratheon

This paper extends Gratheon's computer-vision literature beyond adult bee detection into brood-health diagnosis from inspection images. It is especially useful for a hive-scanner or beekeeper mobile-photo workflow because it ties visual symptoms to molecularly verified pathogen status rather than only human labels. The reported limitations are also product-relevant: Gratheon would need broad geographic and pathogen coverage before presenting automated brood-disease results as reliable alerts, and the UI should communicate uncertainty when a disease image is outside the model's training distribution.
