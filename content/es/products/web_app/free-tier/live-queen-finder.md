---
status: complete
title: 👑 Live Queen Finder
navTitle: Live Queen Finder
layout: products
---

### 🎯 Propósito

Live Queen Finder ayuda a los apicultores a localizar reinas durante las inspecciones usando la cámara de un teléfono móvil.

Abre la aplicación de Gratheon, apunta la cámara a un cuadro y el detector dibuja un recuadro alrededor de detecciones similares a una reina mientras inspeccionas.

![](/about/blog/img/live-queen-finder-mobile.jpg)

### 🎭 Historia de usuario

- Como apicultor que inspecciona una colmena
- quiero recibir ayuda en vivo de la cámara mientras busco la reina
- para encontrarla más rápido y pasar menos tiempo revisando cada cuadro.

### 🚀 Beneficios clave

- **Listo para campo**: funciona desde la aplicación de Gratheon en un teléfono móvil con acceso a cámara.
- **Sin paso de subida**: los fotogramas de la cámara se procesan localmente en el navegador.
- **Disponible en el plan gratuito**: la inferencia se ejecuta en el dispositivo del usuario.
- **Inspecciones más rápidas**: ayuda a dirigir la atención hacia detecciones parecidas a una reina mientras la reina se mueve por el cuadro.

### 🎓 Cómo usarlo

1. Abre [app.gratheon.com](https://app.gratheon.com/) en tu teléfono.
2. Ve a **Reinas** → **Detector en vivo**.
3. Permite el acceso a la cámara cuando el navegador lo solicite.
4. Muévete de forma estable por el panal y observa el recuadro de detección.

Enlace directo: [app.gratheon.com/warehouse/queens/detect](https://app.gratheon.com/warehouse/queens/detect)

![](/about/blog/img/live-queen-finder-detection.png)

### 🔧 Resumen técnico

Live Queen Finder usa un detector de reinas YOLOv8 nano exportado a ONNX y lo ejecuta en el navegador con ONNX Runtime Web. No consume créditos de procesamiento de imágenes del servidor de Gratheon para la inferencia.

El modelo base actual informa estas métricas en el conjunto de prueba:

- precisión: `0.9727`
- recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Repositorio del modelo: [github.com/Gratheon/models-queen-bee-detector](https://github.com/Gratheon/models-queen-bee-detector)

### ⚠️ Limitaciones actuales

- Requiere un navegador moderno y acceso a la cámara.
- La velocidad depende del teléfono, navegador e iluminación.
- Puede no detectar algunas reinas o producir falsos positivos, especialmente con desenfoque, mala iluminación, cuadros muy poblados o reinas parcialmente ocultas.
- Confirma siempre la detección visualmente antes de tomar decisiones de manejo de reinas.

### 🔗 Funciones relacionadas

- [Gestión de reinas](/products/web_app/hobbyist-tier/queen-management/)
- [Detección de reinas](/products/web_app/hobbyist-tier/queen-detection/)
- [Modelo de detección de reinas](/es/research/models/queen-bee-detection/)

---
**Última actualización**: 8 de junio de 2026
