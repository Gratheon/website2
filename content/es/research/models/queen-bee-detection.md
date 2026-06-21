---
title: Detección de abejas reinas
layout: research
order: 2
---

Detector de objetos interno de Gratheon para encontrar **abejas reinas entre obreras, zánganos, abejas con polen y contenido de marco/fondo**.

Repositorio: https://github.com/Gratheon/models-queen-bee-detector

Admite dos rutas de despliegue:

- inferencia en navegador para [Live Queen Finder](/products/web_app/free-tier/live-queen-finder/) mediante ONNX + `onnxruntime-web`
- servicio de inferencia HTTP para experimentos e integraciones del lado del servidor

Configuración base de entrenamiento:

- Modelo: `yolov8n.pt`
- Tamaño de imagen: `512`
- Épocas: `60`
- Conjunto de datos: datasets de reinas combinados, con etiquetas de reina normalizadas a la clase `queen` e imágenes sin reina conservadas como muestras negativas/de fondo

Métricas de prueba (`weights/best.pt`):

- Precisión: `0.9727`
- Recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

La precisión es alta, pero el recall todavía deja margen para reinas no detectadas, por lo que las detecciones deben confirmarse visualmente en uso de campo.

![Ejemplo de detección de Live Queen Finder](/assets/img/blog/img/live-queen-finder-detection-preview.webp)
