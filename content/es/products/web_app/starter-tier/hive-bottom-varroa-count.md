---
status: in-progress
title: 🦀 Conteo de varroa en bandeja inferior
navTitle: Conteo de varroa
layout: products
---

Los ácaros varroa son parásitos que debilitan las colonias de abejas al alimentarse de su hemolinfa. Monitorizar regularmente sus poblaciones es esencial para la salud de la colonia. Los métodos tradicionales usan una bandeja blanca adhesiva en el fondo de la colmena y requieren contar manualmente los ácaros caídos, un proceso lento y propenso a errores.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/1ghYZX55LP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎯 Propósito

Seguir el nivel de infestación de varroa subiendo y analizando imágenes de la bandeja inferior de la colmena. La aplicación cuenta automáticamente los ácaros con IA, evita el conteo manual y permite ver tendencias históricas más consistentes.

### 🎭 Historia de usuario

- Como apicultor
- quiero subir fotos de la lámina adhesiva de la bandeja inferior de mi colmena
- para contar automáticamente los ácaros varroa y monitorizar la infestación en el tiempo
- y tomar medidas de tratamiento a tiempo cuando se superen los umbrales.

### 🚀 Beneficios clave

- **Elimina el conteo manual**: la IA detecta y cuenta automáticamente los ácaros en las imágenes.
- **Más consistente**: la visión por computador ofrece conteos más repetibles que una inspección humana cansada.
- **Seguimiento histórico**: las imágenes versionadas con inspecciones muestran tendencias durante semanas o meses.
- **Planificación de tratamientos**: los datos objetivos ayudan a decidir cuándo tratar; normalmente más de 3 ácaros por día indica un umbral de atención.
- **Ahorro de tiempo**: sube una foto y recibe resultados en segundos, sin revisar manualmente la bandeja punto por punto.

### 📋 Cómo usarlo

#### 1. Añadir una bandeja inferior a la colmena

1. Abre la vista de estructura de la colmena en la aplicación.
2. Haz clic en el menú desplegable de opciones de caja.
3. Selecciona **"Añadir fondo"**.
4. La sección de bandeja inferior aparece en la estructura de la colmena.

#### 2. Subir imágenes de la bandeja inferior

1. Selecciona la bandeja inferior en la estructura de la colmena.
2. Haz clic en **"Subir imagen de bandeja inferior"**.
3. Elige una foto desde tu dispositivo.
4. La imagen se sube y la IA cuenta automáticamente los ácaros varroa.
5. Los resultados aparecen en segundos con los ácaros detectados.

**Consejos para la foto:**

- Usa una bandeja adhesiva blanca o una lámina de plástico corrugado clara.
- Asegura buena iluminación, sin reflejos ni sombras fuertes.
- Incluye toda la bandeja inferior en el encuadre.
- Mantén la cámara paralela a la bandeja, evitando fotos inclinadas.
- Toma fotos a intervalos comparables, por ejemplo después de 24 h de exposición.
- Retira residuos si es posible para mejorar la precisión.

#### 3. Interpretar los resultados

La aplicación resalta los ácaros varroa detectados en la imagen y proporciona:

- **Conteo total**: número de ácaros detectados.
- **Puntuaciones de confianza**: precisión estimada de cada detección.
- **Comparación histórica**: línea de tendencia que muestra cómo cambia el conteo con el tiempo.

**Umbrales de tratamiento:**

- **Menos de 3 ácaros/día**: nivel saludable; continuar monitorizando.
- **3–10 ácaros/día**: considerar tratamiento y vigilar de cerca.
- **Más de 10 ácaros/día**: tratamiento recomendado.

#### 4. Seguimiento histórico

Las imágenes se versionan junto con inspecciones:

- Crea una nueva inspección para capturar el estado actual.
- Compara conteos entre semanas y meses.
- Comprueba si los tratamientos redujeron el nivel de ácaros.
- Sigue los ciclos estacionales de la población de varroa.

### 🔍 Estado de la función

**Disponible actualmente:**

- ✅ Añadir una bandeja inferior a la estructura de la colmena.
- ✅ Subir imágenes desde teléfono o cámara.
- ✅ Almacenamiento y versionado de imágenes con inspecciones.
- ✅ Ver imágenes subidas en la vista de colmena.

**En desarrollo:**

- 🚧 Conteo automático de ácaros varroa con IA.
- 🚧 Resaltado visual de ácaros detectados en las imágenes.
- 🚧 Gráficas y tendencias históricas.
- 🚧 Alertas por umbrales de tratamiento.
- 🚧 Seguimiento de efectividad de tratamientos.

### 🚫 Lo que esta función no hace

- No incluye hardware físico de bandeja inferior; es una función de software.
- No ofrece monitorización de varroa en vivo; requiere subir imágenes.
- No aplica tratamientos automáticamente.
- No sustituye un diagnóstico veterinario profesional.

### 🔗 Funciones relacionadas

- [🔎 Gestión de inspecciones](/products/web_app/hobbyist-tier/inspection-management/) — versionar imágenes con inspecciones.
- Diario de tratamientos contra varroa (planificado).
- Panel de salud de colonia (planificado).
- [Modelo relacionado de detección de varroa en abejas](/es/research/models/varroa-on-bee-detection/).

### 📚 Más información

- [Documentación técnica de detección de varroa en bandeja inferior](/docs/web-app/features/varroa-bottom-detection/)

**Para apicultores:**

- [Honey Bee Health Coalition - Varroa Guide](https://honeybeehealthcoalition.org/varroa/)
- [Understanding Varroa Mite Thresholds](https://honeybeehealthcoalition.org/varroa/)
