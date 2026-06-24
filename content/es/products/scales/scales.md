---
sidebar_position: 3
title: 🌡️ Básculas para colmenas
navTitle: Básculas
layout: products
---

Las básculas para colmenas son dispositivos IoT inteligentes con sensores y chips de comunicación adicionales. Miden periódicamente el estado de la colmena y envían los datos a la [aplicación web](../web_app/web_app.md). Estos datos agregados ayudan a monitorizar colonias en campo con costes mínimos.

La dirección de hardware se describe en la [documentación de sensores de colmena](/docs/beehive-sensors/), mientras que la aplicación almacena las lecturas en [telemetría de colmena](/products/web_app/pro-tier/hive-telemetry-storage/) y las compara mediante [analítica de series temporales](/products/web_app/pro-tier/timeseries-data-analytics/).

`status`: [TRL 4](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/) (prototipo)

## Enfoque del problema

Este producto ayuda con:
- enjambrazón;
- hambre o falta de reservas;
- robbing;
- daños por osos o manipulación;
- colmenas volcadas por viento;
- seguimiento de colmenas en ubicaciones remotas.

## Público objetivo

- Apicultores aficionados que quieren señales sencillas sin visitas constantes.
- Apicultores industriales que necesitan priorizar desplazamientos.
- Apiarios urbanos o educativos donde la observabilidad remota aporta valor.

## Qué mide

La configuración puede variar, pero el objetivo es combinar:
- peso de la colmena;
- temperatura;
- humedad;
- eventos o cambios bruscos;
- conectividad y estado de batería.

## Integración

Las básculas no son una aplicación separada: envían métricas al mismo modelo de datos que usa la aplicación web, para que las lecturas se puedan correlacionar con inspecciones, alimentación, clima y alertas.
