---
hideNav: true
layout: research
hideToc: true
title: Evaluation of Single-Shot Object Detection Models for Identifying Fanning Behavior in Honeybees at the Hive Entrance
description: Thermoregulatory fanning behavior in honeybees is a vital indicator of colony health and environmental response.
year: '2025'
authors:
- Tomyslav Sledevič
orgs:
- "\U0001F1F1\U0001F1F9 Vilnius Gediminas Technical University"
topics:
- computer-vision
- bee-behaviour
productAreas:
- gate-tracker
paperType: journal
pdf: "/assets/research/papers/pdfs/agriculture-15-01609-v2.pdf"
doi: 10.3390/agriculture15151609
abstract: 'Терморегуляционное вентилирующее поведение медоносных пчёл — важный индикатор состояния колонии и её реакции на окружающую среду. В этой работе представлен новый датасет из 18 000 размеченных видеокадров, содержащий 57 597 примеров поведения у летка улья в различных условиях. Оцениваются три современные single-shot модели обнаружения объектов (YOLOv8, YOLO11, YOLO12) с использованием как стандартного RGB-входа, так и двух вариантов кодирования движения: Temporally Stacked Grayscale (TSG) и Temporally Encoded Motion (TEM). Результаты показывают, что модели, учитывающие временную информацию через TSG и TEM, заметно превосходят подход с одним только RGB и достигают до 85% mAP@50 при сохранении возможности работы в реальном времени на производительных GPU. Тесты развёртывания на платформе Jetson AGX Orin подтверждают применимость подхода для edge computing, хотя для более компактных моделей возникают компромиссы между точностью и скоростью.'
---

## Актуальность для Gratheon

Эта статья важна для Gratheon, потому что помогает развивать аналитику поведения у летка в веб-приложении Gratheon, а также компьютерное зрение для камерных систем мониторинга улья. Её методы и выводы можно перевести в продуктовые требования для надёжных полевых развёртываний: какие сигналы следует измерять, как их интерпретировать и какие ограничения по неопределённости или валидации нужно показывать пчеловодам. Для Gratheon работа особенно полезна как подтверждённый исследованиями ориентир при связывании локальных наблюдений за ульем с практическими рекомендациями в веб-приложении, при этом сохраняя аппаратную часть реалистичной для удалённых пасек.
