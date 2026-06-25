---
hideNav: true
orgs:
  - 🇪🇸 University of Zaragoza
  - 🇪🇸 University of La Rioja
  - 🇪🇸 University of Valencia
year: "2025"
title: "An AI-Based Open-Source Software for Varroa Mite Fall Analysis in Honeybee Colonies"
layout: research
hide_table_of_contents: true
description: "Open-source VarroDetector software using YOLO v11 Nano and smartphone images of sticky boards for automated Varroa mite counting on honeybee colonies."
topics:
  - varroa-health
  - computer-vision
productAreas:
  - colony-health
paperType: journal
featured: true
---

[PDF](/assets/research/papers/pdfs/agriculture-15-00969.pdf)

<object data="/assets/research/papers/pdfs/agriculture-15-00969.pdf" type="application/pdf" width="100%" height="800"></object>

## Внешние ссылки

- DOI: https://doi.org/10.3390/agriculture15090969
- [Full text (MDPI Agriculture)](https://www.mdpi.com/2077-0472/15/9/969)

## Аннотация

Заражение *Varroa destructor* является одной из ключевых причин высокой смертности колоний *Apis mellifera* по всему миру. В этом исследовании разработано и протестировано в полевых условиях новое бесплатное ПО VarroDetector, основанное на подходе deep learning для автоматического обнаружения и подсчёта клещей *Varroa* по изображениям липких поддонов, полученным в пчелиных семьях с помощью смартфона. Всего было собрано 204 листа, разделённых зелёными шнурами на четыре секции и сфотографированных при контролируемом освещении разными моделями смартфонов с минимальным разрешением 48 мегапикселей. Алгоритм обнаружения *Varroa* включает два основных этапа: сначала определяется область интереса, в которой нужно считать клещей, затем применяется одноэтапный детектор (YOLO v11 Nano). Результаты VarroDetector показали высокую корреляцию с ручным контрольным подсчётом (R² = 0.98–0.99 в зависимости от используемой камеры смартфона). Когда количество клещей *Varroa* превышало 50 на лист, VarroDetector превосходил обученных визуальных инспекторов по надёжности, одновременно существенно сокращая время обработки. Приложение работает офлайн на смартфоне и распространяется как open source.

## Актуальность для Gratheon

VarroDetector напрямую релевантен продукту Gratheon для сканирования улья: статья показывает, что лёгкая модель семейства YOLO способна обнаруживать клещей Varroa на изображениях липких поддонов, снятых обычным смартфоном — сценарий, который Gratheon может воспроизвести с помощью камеры Raspberry Pi, установленной над дном улья. Требование офлайн-работы без постоянного подключения хорошо совпадает с целью Gratheon по edge AI для пасек с нестабильным интернетом. Кроме того, workflow с липкими поддонами даёт практичный и неинвазивный протокол мониторинга, который Gratheon может предложить пчеловодам как периодическую проверку здоровья семьи наряду с данными в реальном времени с камеры у летка.
