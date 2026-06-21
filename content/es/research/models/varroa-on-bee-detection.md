---
title: Detección de varroa sobre abejas
layout: research
order: 4
---

Modelo y microservicio interno de Gratheon para detectar **ácaros varroa directamente sobre abejas** en imágenes de colmena.

Repositorio: https://github.com/Gratheon/models-varroa-on-bee

Está integrado en nuestro flujo (`web-app -> graphql-router -> image-splitter -> models-varroa-on-bee`) y devuelve bounding boxes por HTTP.

Aspectos destacados:

- Detecciones dedicadas de `varroa_on_bee` (no solo ácaros en el fondo de la colmena)
- API simple (`POST /` con subida de imagen mediante `multipart/form-data`)
- Endpoint de salud para operaciones (`GET /health`)

Métricas de validación (`varroa_model5`, `best.pt`):

- Precisión: `0.926`
- Recall: `0.823`
- mAP50: `0.871`
- mAP50-95: `0.485`
- Precisión/recall de la clase Varroa: `0.858` / `0.651`
- Fuente del conjunto de datos: Roboflow Universe `varroa-j8231/varroa8k` v1  
  https://universe.roboflow.com/varroa-j8231/varroa8k/dataset/1

![Ejemplo de detección de varroa sobre abejas](/assets/img/research/img/varroa-detection-example-preview.webp)
