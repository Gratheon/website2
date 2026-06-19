---
title: Детекция varroa-on-bee
order: 4
---

Внутренняя модель и микросервис Gratheon для обнаружения **клещей варроа непосредственно на пчёлах** на изображениях улья.

Репозиторий: https://github.com/Gratheon/models-varroa-on-bee

Модель встроена в наш пайплайн (`web-app -> graphql-router -> image-splitter -> models-varroa-on-bee`) и возвращает bounding boxes по HTTP.

Ключевые особенности:

- Отдельные детекции `varroa_on_bee` (не только клещи на донье улья)
- Простое API (`POST /` с загрузкой изображения через `multipart/form-data`)
- Health endpoint для эксплуатации (`GET /health`)

Валидационные метрики (`varroa_model5`, `best.pt`):

- Precision: `0.926`
- Recall: `0.823`
- mAP50: `0.871`
- mAP50-95: `0.485`
- Varroa class precision/recall: `0.858` / `0.651`
- Источник датасета: Roboflow Universe `varroa-j8231/varroa8k` v1  
  https://universe.roboflow.com/varroa-j8231/varroa8k/dataset/1

![Пример детекции varroa-on-bee](/assets/img/research/img/varroa-detection-example-preview.webp)
