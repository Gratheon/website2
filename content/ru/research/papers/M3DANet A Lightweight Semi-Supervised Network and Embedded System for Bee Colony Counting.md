---
hideNav: true
layout: research
hideToc: true
title: "M3DANet: лёгкая полуобучаемая сеть и встраиваемая система для подсчёта пчёл в семье"
description: "Статья 2026 года о лёгкой semi-supervised density regression сети M3DANet и портативной edge-системе для подсчёта пчёл по изображениям."
year: "2026"
authors:
- Xue Li
- Mingzhen Ma
- Ying Kong
- Huijun Huang
- Qian Li
- Feng Liu
- Zhenguo Liu
- Guangming Wang
orgs:
- 🇨🇳 Shandong Agricultural University
- 🇨🇳 Apiculture Institute of Jiangxi Province
topics:
- computer-vision
- edge-ai-energy
productAreas:
- hive-scanner
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/agriculture-16-01284.pdf"
doi: 10.3390/agriculture16121284
---

[PDF](/assets/research/papers/pdfs/agriculture-16-01284.pdf)

<object data="/assets/research/papers/pdfs/agriculture-16-01284.pdf" type="application/pdf" width="100%" height="800"></object>

## Внешние ссылки

- DOI: https://doi.org/10.3390/agriculture16121284

## Аннотация

Точный подсчёт пчёл важен для мониторинга силы семьи, оценки опыления и задач точного пчеловодства. Ручной подсчёт и плотная точечная разметка изображений требуют много времени, поэтому авторы предлагают M3DANet - лёгкую полуобучаемую сеть регрессии плотности и связанную с ней встраиваемую систему для подсчёта пчёл.

Для обучения был создан набор данных из 586 валидных изображений высокого разрешения с 34869 точечными аннотациями. Semi-supervised подход снижает зависимость от дорогой ручной разметки, а лёгкая архитектура ориентирована на развёртывание в портативной системе. Работа связывает алгоритм компьютерного зрения с практическим edge-устройством, что делает её ближе к полевому применению, чем чисто лабораторные модели подсчёта.

## Значимость для Gratheon

M3DANet полезна для Gratheon как ориентир по подсчёту силы семьи на изображениях рамок, сканах улья или фотографиях из hive-scanner. Важен не только алгоритм, но и системный подход: модель проектируется сразу с учётом вычислительных ограничений и встраиваемого устройства.

Для Gratheon это помогает формулировать требования к камере, разрешению, разметке и локальному инференсу. Semi-supervised обучение также может снизить стоимость создания собственных датасетов, если часть изображений будет размечена вручную, а остальная часть использована как неразмеченные полевые данные.
