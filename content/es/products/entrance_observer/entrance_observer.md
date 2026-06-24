---
sidebar_position: 4
title: 👁️‍🗨️ Entrance Observer
navTitle: Entrance Observer
layout: products
---

`status: alpha`, [TRL 5](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

Entrance Observer es un conjunto de cámaras y dispositivos de hardware que analiza la piquera de la colmena. Graba vídeo, ejecuta análisis de IA y envía métricas y clips a la [aplicación web](../web_app/web_app.md) para visualización y alertas.

El código abierto está disponible en [GitHub: entrance-observer](https://github.com/Gratheon/entrance-observer/). Para detalles de implementación, consulta la [documentación técnica de Entrance Observer](/docs/entrance-observer/). Las métricas que produce se almacenan mediante [telemetría de colmena](/products/web_app/pro-tier/hive-telemetry-storage/) y pueden alimentar [alertas](/products/web_app/flexible-tier/alerts/).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/hNval4v44ao" title="Beehive Entrance Observer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Enfoque del problema

Este producto ayuda a observar señales relacionadas con:
- ataques de avispones;
- robbing;
- infestaciones;
- enjambrazón;
- enfermedades;
- colonias sin reina;
- exposición a pesticidas.

## Funciones principales

- Streaming de vídeo por API.
- Detección de enjambrazón.
- Aplicación cliente con interfaz de usuario.
- Conteo de abejas que entran y salen en el edge.
- Métricas de movimiento de abejas.
- Mapas de calor de la tabla de vuelo.

Las subpáginas técnicas de estas funciones todavía están disponibles en inglés:
- [Video streaming via API](/products/entrance_observer/features/video-streaming-via-api/)
- [Count bees coming in and out - on the edge](/products/entrance_observer/features/count-bees-coming-in-and-out-on-the-edge/)
- [Bee movement metric reporting](/products/entrance_observer/features/bee-movement-metric-reporting/)
- [Landing board heatmap generation](/products/entrance_observer/features/landing-board-heatmap-generation/)

## Ideas y trabajo futuro

- Detección de infestación por varroa desde vídeo.
- Detección de ataques de avispones.
- Detección y conteo de zánganos.
- Detección de abejas con polen para estadísticas de pecoreo.
- Detección de vuelos de orientación.
- Detección de guardias, apareamiento de reina y exposición a pesticidas.

## Público objetivo

- Apicultores aficionados y entusiastas técnicos.
- Programas corporativos de patrocinio de colmenas.
- Equipos de investigación que necesitan vídeo continuo de piquera.
