---
title: Модели
sidebar_position: 4
---

Некоторые модели, которые мы обучили
### Детекция пчёл
https://github.com/Gratheon/models-bee-detector/
https://github.com/Gratheon/entrance-observer/tree/main/weights

### Детекция матки
https://github.com/Gratheon/models-queen-bee-detector

Внутренний object detector для поиска **маток среди рабочих пчёл, трутней, пчёл с пыльцой и содержимого рамки/фона**.

Поддерживаются два варианта развёртывания:
- browser inference для [Live Queen Finder](/about/products/web_app/free-tier/live-queen-finder/) через ONNX + `onnxruntime-web`
- HTTP inference service для серверных экспериментов и интеграций

Базовая конфигурация обучения:
- Model: `yolov8n.pt`
- Image size: `512`
- Epochs: `60`
- Dataset: объединённые датасеты с матками, где queen labels нормализованы к классу `queen`, а изображения без матки сохранены как negative/background samples

Тестовые метрики (`weights/best.pt`):
- Precision: `0.9727`
- Recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Precision высокая, но recall всё ещё оставляет вероятность пропуска маток, поэтому в полевых условиях детекции нужно подтверждать визуально.

![Live Queen Finder detection example](/assets/img/blog/img/live-queen-finder-detection-preview.webp)

### BeePose
https://github.com/Gratheon/models-beepose2

<iframe width="100%" height="400" src="https://www.youtube.com/embed/BSwhqxDsRck" title="Bee pose model with 13 key points" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Детекция varroa-on-bee
https://github.com/Gratheon/models-varroa-on-bee

Внутренняя модель и микросервис для обнаружения **клещей varroa непосредственно на пчёлах** на изображениях улья.
Модель встроена в наш pipeline (`web-app -> graphql-router -> image-splitter -> models-varroa-on-bee`) и возвращает bounding boxes по HTTP.

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

![Varroa-on-bee detection example](/assets/img/research/img/varroa-detection-example-preview.webp)
