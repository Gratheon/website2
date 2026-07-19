---
hideNav: true
layout: research
hideToc: true
title: "Высокоточный пчелиный улей с открытым исходным кодом для долгосрочного наблюдения и исследования медоносных пчёл"
description: "Стандартизированный наблюдательный улей с открытым аппаратным обеспечением, предназначенный для повышения воспроизводимости долгосрочных экспериментов с компьютерным зрением и отслеживания медоносных пчёл в различных исследовательских центрах."
year: '2026'
authors:
- Jiří Ulrich
- Martin Stefanec
- Tomáš Rouček
- Laurenz Alexander Fedotoff
- Harald Pascher
- Zdeněk Rozsypálek
- Thomas Schmickl
- Tomáš Krajník
orgs:
- 🇨🇿 Czech Technical University in Prague
- 🇦🇹 University of Graz
topics:
- computer-vision
- bee-behaviour
- precision-beekeeping
productAreas:
- hive-scanner
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-open-source-high-precision-hive.pdf"
doi: 10.1242/bio.062523
abstract: >-
  Computer vision can automate observation-hive research, but differences in hive geometry and imaging conditions make experiments and trained models difficult to reproduce. This paper presents an adaptable open-hardware observation hive that standardizes physical and optical properties for long-term honeybee monitoring. The authors demonstrate the platform with an open-source system for focused tracking of an individual bee and publish the supporting hardware designs, software, and supplementary resources.
---

## External links

- [DOI and publisher page](https://doi.org/10.1242/bio.062523)
- [Open hardware, software, and supplementary resources](https://zenodo.org/records/20641893)

## Relevancy to Gratheon

The paper addresses an important deployment problem for Gratheon's computer-vision systems: models trained with one hive and camera geometry often do not transfer cleanly to another. Its standardized, washable observation-hive frame and fixed optical configuration provide practical references for repeatable camera placement, illumination, calibration, and multi-site data collection.

The open designs are also directly useful for the hive-scanner roadmap. They can inform prototype fixtures and controlled validation environments where Gratheon can compare tracking and frame-analysis models without introducing uncontrolled changes in image geometry.
