---
title: 🧿 Colmena robótica
navTitle: Colmena robótica
layout: products
sidebar_position: 5
---

Estamos desarrollando una plataforma robótica vertical para inspección de colmenas. La dirección del producto es:
- levantar varias secciones para llegar más rápido al nido;
- tomar fotos de cuadros con cámaras integradas, reduciendo el levantamiento manual;
- subir resultados de inspección a la [aplicación web](/es/products/web_app/);
- moverse sobre ruedas para inspeccionar distintas colmenas.

La dirección de hardware se documenta en la [documentación técnica de colmena robótica](/docs/robotic-beehive/). El flujo de inspección depende de la gestión de lados de cuadro y de la gestión de inspecciones en la aplicación web.

`status`: [TRL 2](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

## Enfoque del problema

Este producto ayuda con:
- observabilidad de la colonia;
- inspecciones intrusivas;
- trabajo físico pesado;
- infestaciones;
- muerte de abejas por lavados con alcohol;
- colonias sin reina;
- colmenas difíciles de inspeccionar o poco estéticas;
- barrera de entrada para nuevos apicultores.

## Clientes objetivo

Una plataforma robótica de inspección costará más de 2000 EUR y su valor principal está en digitalizar y organizar el estado del apiario. Puede resultar demasiado grande para algunos apicultores industriales o agricultores, y demasiado compleja para principiantes absolutos. Parece más viable para:

- apicultores semiprofesionales;
- apiarios urbanos;
- programas corporativos de patrocinio de colmenas;
- equipos técnicos que quieren datos repetibles de inspección.

## Requisitos no funcionales

La extracción debe ocurrir sin perturbar a las abejas, exponerlas al clima o poner en riesgo a las personas cercanas.

- Adaptarse al tamaño de cuadro y sección elegido por el cliente (Langstroth, Farrar, National, etc.).
- No dañar al operador humano.
- No aplastar abejas ni causar hipotermia o robbing por aperturas innecesarias.
- Extraer cuadros incluso si están pegados con cera.
- Evitar riesgo de incendio por calor, sol o cableado eléctrico.
- Mover cuadros llenos de miel.
- Ser reparable, modular y con piezas sustituibles.
- Funcionar offline-first y ofrecer control manual en sitio.
- Entrar en modo seguro ante pérdida de energía.

## Prototipo

El prototipo combina actuadores, GPU y cámaras. Está en una fase muy temprana porque ahora el foco principal es la [aplicación web](/es/products/web_app/) y [Entrance Observer](/es/products/entrance_observer/entrance_observer/).

## Más información en inglés

Las listas detalladas de ideas y tareas siguen en inglés hasta que se localicen:
- [Funciones e ideas de la colmena robótica](/products/robotic_beehive/robotic-beehive/)
