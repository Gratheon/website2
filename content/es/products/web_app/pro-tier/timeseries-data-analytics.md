---
title: 📊 Analítica de datos de series temporales
navTitle: Analítica temporal
layout: products
---

Panel de analítica para comparar métricas de varias colmenas a lo largo del tiempo, identificar tendencias, encontrar correlaciones y detectar anomalías en todo el apiario.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/aBsKVInYCno" title="Features - Telemetry API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Resumen

La analítica de series temporales muestra datos de telemetría de dos maneras:

1. **Vista individual de colmena**: métricas de una colmena en la pestaña “Métricas”.
2. **Panel multicolmena**: vista comparativa para analizar varias colmenas al mismo tiempo.

Al superponer datos de diferentes colonias, el apicultor puede detectar patrones, comparar rendimiento y encontrar colmenas fuera de lo normal.

Esta función ayuda a:

- comparar el desarrollo de colonias dentro del apiario;
- identificar correlaciones entre métricas, por ejemplo bajadas de peso y enjambrazón;
- detectar colmenas con bajo rendimiento antes de que el problema sea visible;
- analizar el impacto del clima sobre el comportamiento de las abejas;
- exportar datos para informes o análisis externo.

## Gráficos disponibles

### Población de colonia

Sigue estimaciones de población a partir de datos de inspección y permite compararlas con una curva ideal de crecimiento.

### Peso de colmena

Compara el peso medio diario entre colmenas para monitorizar mielada, escasez de néctar, consumo de reservas y momento de cosecha.

### Temperatura interna

Monitoriza patrones térmicos dentro de cada colmena. Temperaturas estables en la zona de cría, alrededor de 34–35 °C, suelen indicar colonias sanas con cría activa.

### Tráfico en la piquera

Analiza actividad de entrada:

- **Abejas entrando y saliendo**: flujo direccional.
- **Flujo neto**: diferencia entre entradas y salidas.
- **Velocidad media**: velocidad de movimiento en la entrada.
- **Percentil 95 de velocidad**: detección de abejas o eventos rápidos.
- **Abejas estacionarias**: posibles conductas de guardia o bloqueo.
- **Abejas detectadas**: conteo total en el encuadre.
- **Interacciones**: contactos entre abejas, como trofalaxia o agresión.

### Correlación con clima

Superpone variables externas para entender factores ambientales:

- temperatura y viento;
- lluvia y nubosidad;
- radiación solar;
- disponibilidad de polen;
- contaminación del aire.

## Cómo funciona

### Vista individual de colmena

1. **Abrir detalles de una colmena**: selecciona una colmena desde el apiario.
2. **Consultar métricas**: abre la pestaña “Métricas”.
3. **Analizar datos recientes**: revisa peso, temperatura y movimiento de entrada en rangos cortos.
4. **Correlacionar eventos**: compara cambios de métricas con inspecciones, tratamientos o alimentación.

### Panel multicolmena

1. **Seleccionar apiario**: filtra las colmenas por ubicación.
2. **Elegir colmenas**: selecciona una o varias para comparar.
3. **Definir rango temporal**: usa 7, 30, 90, 180 o 365 días según el objetivo.
4. **Activar gráficos**: muestra solo las métricas relevantes.
5. **Navegación sincronizada**: al hacer zoom o desplazar un gráfico, los demás mantienen el mismo eje temporal.
6. **Exportar datos**: descarga CSV para análisis externo o informes.

## Funciones

### Dos modos de vista

- **Colmena individual**: acceso rápido desde la página de detalles.
- **Panel multicolmena**: comparación completa para apiarios con varias colonias.

### Comparación entre colmenas

Superpone varias colmenas en un mismo gráfico con líneas coloreadas para encontrar rápidamente colonias que ganan peso, pierden actividad o mantienen temperaturas anómalas.

### Análisis de correlación

Busca relaciones como:

- pérdida brusca de peso antes de un enjambre;
- temperaturas extremas que reducen actividad;
- clima que afecta el forrajeo;
- crecimiento de población acompañado de aumento de peso.

### Umbrales de alerta

Los gráficos pueden mostrar líneas de umbral configuradas para evaluar la severidad cuando una métrica sale del rango esperado.

### Marcadores de inspección

Las inspecciones aparecen como marcadores temporales para vincular observaciones manuales con patrones de sensores.

### Exportación de datos

Exporta datos para:

- análisis en hojas de cálculo;
- modelos estadísticos;
- visualizaciones personalizadas;
- informes de temporada o de cliente.

## Casos de uso

### Planificación estacional

Compara patrones de peso entre temporadas para prever cosecha, escasez o necesidad de alimentación.

### Evaluación de reinas

Compara crecimiento de población para identificar colonias fuertes, genética superior o necesidad de reemplazo de reina.

### Predicción de enjambrazón

Busca señales como caídas de peso, actividad intensa en la entrada, fluctuaciones térmicas o picos de población.

### Impacto ambiental

Correlaciona actividad con temperatura, lluvia, viento, radiación o disponibilidad de floración.

### Seguimiento de tratamientos

Compara métricas antes y después de una intervención para evaluar recuperación, estabilidad o efectividad.

## Detalles técnicos

**Fuentes de datos:**

- Telemetría desde telemetry-api.
- Registros de inspección de la aplicación.
- Datos meteorológicos externos.
- Estimaciones de población derivadas de inspecciones y análisis de imágenes.

**Rendimiento:**

- Los rangos largos usan agregación diaria.
- La caché cliente reduce consultas repetidas.
- Las preferencias de gráficos pueden guardarse localmente.
- Las consultas se optimizan para no cargar más puntos de los necesarios.

**Limitaciones:**

- Las métricas de entrada requieren hardware Entrance Observer.
- Los datos meteorológicos requieren ubicación GPS del apiario.
- Las estimaciones de población dependen de inspecciones o fotos suficientes.
- Los rangos de alta resolución pueden estar limitados por rendimiento y retención.

## Funciones relacionadas

- [📈 Almacenamiento de telemetría](hive-telemetry-storage.md): recogida y almacenamiento de datos.
- [🔔 Alertas](../flexible-tier/alerts.md): notificaciones por umbrales y anomalías.
