---
hideNav: true
layout: research
hideToc: true
title: 'FAIRHiveFrames-1K: A Public FAIR Dataset of 1265 Annotated Hive Frame Images with Preliminary YOLOv8 and YOLOv11 Baselines'
description: В precision apiculture портативная цифровая камера — экономичный сенсор для съёмки изображений и видео улья с количественной оценкой параметров семьи.
year: '2026'
authors:
- Vladimir Kulyukin
- Reagan Hill
- Aleksey Kulyukin
orgs:
- 🇺🇸 Utah State University
topics:
- computer-vision
- datasets-benchmarks
productAreas:
- monitoring-platform
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-fair-hive-frames-dataset.pdf"
doi: 10.3390/s26082518
abstract: В precision apiculture портативная цифровая камера — экономичный сенсор для съёмки изображений и видео улья с количественной оценкой параметров семьи. Открытые, хорошо размеченные и взаимодействующие датасеты на уровне ячеек соты остаются редкостью. В статье представлен FAIRHiveFrames-1K — публичный набор из 1265 размеченных изображений рамок (1920 × 1080 PNG) для исследований автоматизации анализа сот на базе ИИ. Датасет содержит 124 669 аннотированных областей интереса по семи биологически значимым категориям, согласованным с литературой по анализу сот.
---

## Актуальность для Gratheon

FAIRHiveFrames-1K — ценный открытый ресурс для обучения и бенчмаркинга моделей hive-scanner и анализа рамок в платформе мониторинга Gratheon. Семь категорий на уровне ячеек соты покрывают типичные задачи инспекции, которые Gratheon хочет автоматизировать. Предварительные базовые линии YOLOv8 и YOLOv11 задают отправную точку для сравнения собственных моделей детекции на рамках.
