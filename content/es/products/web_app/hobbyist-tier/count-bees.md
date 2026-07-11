---
title: "🐝 Contar abejas"
navTitle: Contar abejas
layout: products
---

## Historia de usuario

- El apicultor sube una foto de un cuadro de colmena mediante [subida de foto de cara de cuadro](/docs/web-app/features/frame-photo-upload/).

- La aplicación ejecuta las detecciones:

  - [Detección de abejas obreras](/products/web_app/hobbyist-tier/worker-bee-detection/)
  - [Detección de zánganos](/products/web_app/future-ideas/pro-tier-ideas/drone-detection/)
  - [Detección de reina](queen-detection.md)

- La aplicación actualiza la vista de la cara del cuadro y muestra la cantidad de abejas detectadas, por ejemplo `Abejas obreras (120)`.

  ![](/products/web_app/hobbyist-tier/img/screenshot-2024-07-10-at-21-04-24.png)

- La aplicación actualiza la vista de la colmena y muestra el recuento total de abejas.

  ![](/products/web_app/hobbyist-tier/img/screenshot-2024-07-10-at-21-02-31.png)

- La aplicación actualiza la lista de apiarios y muestra el recuento total de abejas por colmena.
