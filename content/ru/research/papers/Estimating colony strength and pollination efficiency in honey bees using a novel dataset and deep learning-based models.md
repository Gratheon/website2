---
hideNav: true
layout: research
hideToc: true
title: Estimating colony strength and pollination efficiency in honey bees using a novel dataset and deep learning-based models
description: Исследование представляет систему компьютерного зрения на базе глубокого обучения для автоматической идентификации и классификации пчёл у летка с оценкой разных каст.
year: '2026'
authors:
- Piyush Chaudhary
- C. Michael Foley
- Sathishkumar Samiappan
- Leon Kohler
- Volkan Senyurek
- Dawson Boes
- Priyadarshini Chakrabarti
orgs:
- 🇺🇸 University of Arkansas at Fayetteville
- 🇺🇸 Washington State University
- 🇺🇸 University of Arkansas System
- 🇺🇸 Mississippi State University
- 🇺🇸 University of Tennessee at Knoxville
topics:
- computer-vision
- bee-behaviour
- datasets-benchmarks
productAreas:
- monitoring-platform
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/2026-estimating-colony-strength-deep-learning.pdf"
doi: 10.1016/j.atech.2026.102005
abstract: >-
  Исследование представляет систему компьютерного зрения на базе глубокого обучения для автоматической идентификации и классификации пчёл у летка с оценкой разных каст. Наличие пыльносборщиц у входа используется для оценки здоровья семьи, её силы и эффективности опыления. Ранее не существовало инструмента для мониторинга полностью неизменённых ульев в реальных условиях. Система обучена и проверена на кадрах видео, снятых за два года камерами GoPro в разных условиях освещения и погоды. Пчёлы размечены по трём категориям: 1. Рабочая пчела без пыльцы, 2. Рабочая пчела с пыльцой, 3. Трутень. Сравнивались пять моделей детекции объектов: YOLOv10, FrCNN, RetinaNet, FCOS и SSD. YOLOv10 и FrCNN достигли точности >93%. Также опубликован набор данных из 4590 кадров с 79 212 аннотациями пчёл.
---

## Актуальность для Gratheon

Классификация пчёл у летка по кастам и наличию пыльцы — ключевая функция для gate-tracker и оценки силы семьи в веб-приложении Gratheon. Публичный датасет с разметкой пыльносборщиц даёт бенчмарк для собственных моделей entrance observer. Работа на неизменённых ульях в полевых условиях подтверждает продуктовую гипотезу Gratheon: сила семьи и опылительный потенциал можно оценивать по видео у входа без вскрытия рамок.
