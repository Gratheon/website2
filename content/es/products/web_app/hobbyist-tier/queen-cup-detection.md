---
title: "🐝 Detección de copas reales"
navTitle: Copas reales
layout: products
---

## Problema

Tenemos una detección de objetos muy sencilla para copas reales, entrenada con un conjunto pequeño de unas 15 imágenes. Se ejecuta en el servicio `image-splitter`, que llama a [clarifai.com](http://clarifai.com/) donde está alojado el modelo.

El problema es que en apicultura existen distintos tipos de copas reales. Necesitamos distinguirlos.

## Pasos sugeridos

Crear y entrenar dos modelos diferentes o, mejor, un solo modelo con dos clases.

![](/products/web_app/hobbyist-tier/img/queen-cup.png)
