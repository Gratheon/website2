---
sidebar_position: 2
title: 📱 Aplicación web
navTitle: Aplicación web
layout: products
---

La aplicación web de Gratheon ayuda a los apicultores a gestionar [datos del apiario](/es/products/web_app/free-tier/apiary-management/), comunicarse con dispositivos modulares instalados en las colmenas, analizar imágenes de cuadros y fondos sanitarios, guardar [telemetría de series temporales](/es/products/web_app/pro-tier/hive-telemetry-storage/), generar [alertas](/es/products/web_app/flexible-tier/alerts/), hacer previsiones y recibir sugerencias de IA para resolver problemas.

`status`: [TRL 6](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

## Entidades principales del dominio

| Entidad | Descripción | Propiedades clave |
|--------|-------------|-------------------|
| **Apiario** | Conjunto de colmenas ubicadas juntas en un lugar concreto. Su tamaño está limitado por el entorno que las abejas pueden polinizar. | Ubicación (lat/lng), nombre, estado activo |
| **Colmena** | Estructura física con secciones verticales. Puede dividirse, fusionarse o marcarse como colapsada. | Nombre, color, estado, cajas, colonia, historial de división/fusión, seguimiento de colapso |
| **Familia (colonia/reina)** | Superorganismo de abejas dirigido por una reina que pone huevos. | Raza (variación de Apis mellifera), año de incorporación, edad calculada, tratamientos |
| **Caja (sección de colmena)** | Sección hueca de madera que contiene cuadros. Tipos: cámara de cría, alza, piquera, ventilación, excluidor de reina, alimentador horizontal, fondo sanitario. | Tipo, posición, color, cuadros |
| **Cuadro** | Marco de madera con cera dentro de una sección. Tipos: lámina, panal vacío, espacio vacío, partición, alimentador. | Tipo, posición, caras izquierda/derecha |
| **Cara del cuadro** | Un lado del cuadro donde se pueden subir fotos para análisis con IA. | Referencias de archivos, recursos detectados |
| **Inspección** | Instantánea del estado completo de la colmena durante una intervención del apicultor. Guarda la composición de la colmena en JSON en un momento concreto. | ID de colmena, datos (JSON), marca de tiempo |
| **Tratamiento** | Intervenciones químicas contra varroa registradas por familia, caja o colmena para mantener historial sanitario. | Tipo, marca de tiempo, objetivo (colmena/caja/familia) |
| **Archivo** | Imágenes subidas, como fotos de cuadros o fondos con varroa. Se procesan mediante el pipeline de detección por IA. | Hash, dimensiones, ID de usuario, tipo de archivo, trabajos de detección |
| **Recursos detectados** | Tipos de celdas detectados por IA en fotos de cuadros: cría operculada, huevos, miel, larvas, néctar, polen y otros. | Clase, coordenadas (x,y), radio, probabilidad |
| **Abejas/reinas detectadas** | Posiciones de abejas y reinas detectadas por IA en los cuadros. | Cajas delimitadoras, puntuaciones de confianza |
| **Varroa detectada** | Ácaros varroa detectados por IA en fotos del fondo sanitario. | Recuento, posiciones (próximamente) |
| **Métricas (telemetría)** | Datos de series temporales enviados por dispositivos IoT. | Temperatura (°C), humedad (%), peso (kg), marca de tiempo |
| **Movimiento en la piquera** | Análisis del tráfico de abejas a partir de cámaras en la entrada de la colmena. | Abejas entrando/saliendo, flujo neto, estadísticas de velocidad, abejas estacionarias, interacciones |
| **Alerta** | Avisos generados según umbrales y reglas de métricas. | Texto, tipo/valor de métrica, ID de colmena, estado de entrega, marca de tiempo |
| **Regla de alerta** | Condiciones definidas por el usuario que disparan alertas. | Tipo de métrica, condición, umbral, duración, estado activo, alcance (colmena/apiario) |
| **Canal de alerta** | Métodos de entrega de alertas. | Tipo (email/teléfono/Telegram), contacto, ventana horaria, estado activo |

![](/about/img/web-app.png)

## Casos de uso principales
Un caso de uso agrupa funciones que juntas aportan más valor al cliente.

### Subir fotos para obtener estadísticas de la colonia
- Crea una colmena.
- Abre una sección concreta y añade cuadros.
- Abre un cuadro específico y pulsa "subir foto del cuadro" con abejas y celdas visibles. Consulta también [gestión de caras de cuadros](/es/products/web_app/free-tier/frame-side-management/) y [gestión de inspecciones](/es/products/web_app/hobbyist-tier/inspection-management/).
- Espera a que el backend procese la imagen.
- Recibe estadísticas asistidas por IA sobre el recuento de abejas y la distribución de celdas.
- Compara colmenas para ver cuáles son más fuertes con datos reales detrás.

### Seguir el desarrollo de la colonia en el tiempo
- Añade fotos de cuadros después de una inspección de la colmena.
- Pulsa el botón "Crear inspección" para guardar una instantánea del estado de la colmena.
- Comprueba que la nueva inspección aparece en la pestaña de inspecciones.
- Observa cómo cambia la distribución de recursos entre inspecciones a lo largo del tiempo.

### Enviar telemetría desde sensores IoT
- Genera un token de API en la configuración de la cuenta.
- Enciende el dispositivo de sensores IoT y sigue la [documentación de sensores de colmena](/docs/beehive-sensors/) para conectarlo a WiFi y enviar datos.
- Abre la colmena objetivo, entra en la pestaña de métricas y revisa los gráficos de peso y temperatura.
- Abre la pestaña de analítica para ver datos acotados por tiempo y correlacionarlos, por ejemplo, con el clima.

### Transmitir vídeo de la piquera
- Configura una cámara [Entrance Observer](../entrance_observer/entrance_observer.md) para transmitir vídeo.
- Comprueba que el flujo de vídeo sea visible.

### Monitorizar varroa mediante el fondo sanitario
- Añade una sección de fondo sanitario a la colmena.
- Sube una foto de la bandeja blanca extraíble donde se vean ácaros varroa.
- Las imágenes se versionan con las inspecciones para mantener seguimiento histórico.
- El [recuento de varroa en el fondo de la colmena](/es/products/web_app/starter-tier/hive-bottom-varroa-count/) ayuda a estimar la infestación y a decidir tratamientos.

## Funciones importantes en esta sección localizada
- [Live Queen Finder](/es/products/web_app/free-tier/live-queen-finder/)
- [Recuento de varroa en el fondo de la colmena](/es/products/web_app/starter-tier/hive-bottom-varroa-count/)

## Páginas relacionadas
- [Gestión de apiarios](/es/products/web_app/free-tier/apiary-management/)
- [Almacenamiento de telemetría de colmenas](/es/products/web_app/pro-tier/hive-telemetry-storage/)
- [Alertas](/es/products/web_app/flexible-tier/alerts/)
- [Análisis de series temporales](/es/products/web_app/pro-tier/timeseries-data-analytics/)
- [Documentación de sensores de colmena](/docs/beehive-sensors/)
