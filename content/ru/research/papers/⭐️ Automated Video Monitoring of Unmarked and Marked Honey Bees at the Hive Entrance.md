---
hideNav: true
layout: research
hideToc: true
title: "Automated Video Monitoring of Unmarked and Marked Honey Bees at the Hive Entrance"
description: "CNN-based system for automatic video monitoring of honeybee foraging activity at the hive entrance, detecting entrance/exit events, pollen loads, and individual barcoded bees without physical marking."
year: "2022"
orgs:
  - 🇵🇷 University of Puerto Rico
  - 🇺🇸 Brown University
  - 🇺🇸 Howard Hughes Medical Institute (Janelia Research Campus)
topics:
  - computer-vision
  - bee-behaviour
productAreas:
  - gate-tracker
paperType: journal
featured: true
---

[PDF](pdfs/fcomp-03-769338.pdf)

<object data={require('./pdfs/fcomp-03-769338.pdf').default} type="application/pdf" width="100%" height="800"></object>

## Внешние ссылки

- DOI: https://doi.org/10.3389/fcomp.2021.769338
- [Полный текст (Frontiers in Computer Science)](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2021.769338/full)

## Аннотация

Мы представляем новую систему автоматического видеомониторинга фуражировочной активности медоносных пчёл у летка. Эта система мониторинга построена на сверточных нейронных сетях, которые выполняют многообъектную оценку позы животных без необходимости маркировки. Точная детекция частей тела пчелы — ключевой элемент системы, позволяющий выявлять события входа и выхода у летка, включая точную детекцию пыльцы. В работе представлены подробная оценка качества детекции и исследование влияния параметров. Полная система также включает идентификацию пчёл, помеченных штрихкодами, что делает возможным мониторинг как на агрегированном уровне, так и на уровне отдельных особей. Результаты, полученные на видеозаписях за несколько дней, показывают применимость подхода для крупномасштабного развёртывания. Это важный шаг вперёд для понимания сложного поведения медоносных пчёл и автоматической оценки здоровья пчелиной семьи.

## Актуальность для Gratheon

Эта статья — прямой технический ориентир для аппаратного продукта Gratheon Entrance Observer. Пайплайн оценки позы для детекции событий входа/выхода и наличия пыльцы практически полностью совпадает с тем, на что нацелена модель gate-tracker в Gratheon: считать пчёл на вход и выход без физической модификации улья. Описанное здесь индивидуальное отслеживание по штрихкодам представляет более продвинутую версию того, что камерный модуль Gratheon мог бы поддерживать в будущем продуктовом уровне. Открытая методология оценки также даёт бенчмарк, с которым можно сравнивать собственную точность детекции объектов и наблюдаемость поведения у летка в решениях Gratheon.
