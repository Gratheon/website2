---
sidebar_position: 2
title: 📱 Aplicación web
navTitle: Aplicación web
layout: products
---

La aplicación web de Gratheon ayuda a los apicultores a gestionar [datos de apiario](free-tier/apiary-management.md), comunicarse con dispositivos modulares instalados en la colmena, analizar fotos de cuadros y bandejas inferiores, almacenar [telemetría de series temporales](pro-tier/hive-telemetry-storage.md), generar [alertas](flexible-tier/alerts.md) y recibir sugerencias de IA para resolver problemas.

`status`: [TRL 6](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

## Entidades principales del dominio

| Entidad | Descripción | Propiedades clave |
|--------|-------------|-------------------|
| **Apiario** | Conjunto de colmenas ubicadas en un lugar concreto. | Ubicación, nombre, estado activo |
| **Colmena** | Estructura física con secciones verticales. Puede dividirse, fusionarse o colapsar. | Nombre, color, estado, cajas, familia, historial |
| **Familia (colonia/reina)** | Superorganismo de abejas dirigido por una reina que pone huevos. | Raza, año de incorporación, edad, tratamientos |
| **Caja (sección de colmena)** | Sección de madera que contiene cuadros. | Tipo, posición, color, cuadros |
| **Cuadro** | Marco de madera con cera dentro de una sección. | Tipo, posición, lados izquierdo y derecho |
| **Lado de cuadro** | Una cara del cuadro donde se pueden subir fotos para análisis de IA. | Imágenes y recursos detectados |
| **Inspección** | Instantánea del estado completo de la colmena en una intervención. | ID de colmena, datos, fecha |
| **Tratamiento** | Intervenciones contra varroa registradas por familia, caja o colmena. | Tipo, fecha, objetivo |
| **Archivo** | Imágenes subidas y procesadas por la canalización de detección con IA. | Hash, dimensiones, usuario, tipo |
| **Recursos detectados** | Tipos de celda detectados por IA: cría operculada, huevos, miel, larvas, néctar, polen y otros. | Clase, coordenadas, probabilidad |
| **Abejas/reinas detectadas** | Posiciones de abejas y reinas detectadas en fotos de cuadros. | Cajas delimitadoras, confianza |
| **Varroa detectada** | Ácaros varroa detectados en fotos de bandeja inferior. | Conteo y posiciones |
| **Métricas (telemetría)** | Datos temporales procedentes de dispositivos IoT. | Temperatura, humedad, peso, fecha |
| **Movimiento en la piquera** | Análisis de tráfico de abejas desde cámaras de entrada. | Entradas/salidas, flujo neto, velocidad |
| **Alerta** | Aviso generado por umbrales y reglas. | Texto, métrica, colmena, entrega, fecha |

## Casos de uso principales

### Subir fotos para obtener una visión general de la colonia
- Crea una colmena.
- Abre una sección, añade cuadros y sube una foto del cuadro con abejas y panal.
- Espera a que el backend procese la imagen.
- Recibe estadísticas asistidas por IA sobre conteo de abejas y distribución de celdas.
- Compara colmenas con datos reales detrás de la decisión.

### Seguir el desarrollo de la colonia en el tiempo
- Guarda cada inspección como una instantánea del estado de la colmena.
- Revisa cómo cambia la distribución de recursos entre inspecciones.
- Usa el historial para decidir si alimentar, tratar, dividir o esperar.

### Enviar telemetría desde sensores IoT
- Genera un token API en la configuración de cuenta.
- Conecta el dispositivo de sensores a Wi‑Fi siguiendo la [documentación de sensores](/docs/beehive-sensors/).
- Abre la pestaña de métricas de la colmena y consulta gráficas de peso y temperatura.
- Correlaciona los datos con clima, inspecciones y alertas.

### Transmitir vídeo desde la piquera
- Configura una cámara [Entrance Observer](/es/products/entrance_observer/entrance_observer/).
- Comprueba que el vídeo sea visible.
- Usa métricas y alertas para interpretar actividad, robbing, enjambrazón u otros eventos.

### Monitorizar varroa mediante la bandeja inferior
- Añade una bandeja inferior a la colmena.
- Sube una foto del panel blanco deslizante con ácaros varroa.
- Las imágenes se versionan junto con inspecciones para seguimiento histórico.
- [El conteo de varroa en bandeja inferior](starter-tier/hive-bottom-varroa-count.md) ayuda a evaluar el nivel de infestación y las decisiones de tratamiento.

## Funciones localizadas destacadas

- [👑 Live Queen Finder](free-tier/live-queen-finder.md)
- [🦀 Conteo de varroa en bandeja inferior](starter-tier/hive-bottom-varroa-count.md)

## Funciones localizadas adicionales
- [Gestión de apiarios](free-tier/apiary-management.md)
- [Gestión de lados de cuadro](free-tier/frame-side-management.md)
- [Gestión de inspecciones](hobbyist-tier/inspection-management.md)
- [Almacenamiento de telemetría de colmena](pro-tier/hive-telemetry-storage.md)
- [Alertas](flexible-tier/alerts.md)
- [Analítica de datos de series temporales](pro-tier/timeseries-data-analytics.md)
