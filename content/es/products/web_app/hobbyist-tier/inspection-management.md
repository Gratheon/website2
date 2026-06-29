---
title: "🔎 Gestión de inspecciones"
navTitle: Inspecciones
layout: products
status: complete
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/5tYttNWfQPA" title="Beehive inspections feature" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Crear una inspección

- El usuario realizó una inspección manual de la colmena y tomó fotos.
- Ya existe una colmena con cajas y fotos de cuadros subidas.
- Después de un tiempo, por ejemplo dos semanas, realiza otra inspección y necesita guardar el estado anterior.
- El usuario hace clic en `Crear inspección`.
  - Todos los datos de la colmena se guardan como una instantánea en el tiempo.
  - La fecha de la inspección se toma de la fecha de creación de la foto de cuadro más antigua, no necesariamente del momento actual.
  - Así se puede registrar correctamente una inspección realizada días o semanas antes.
- Las fotos actuales de cuadros se desvinculan o limpian junto con los objetos detectados.
- Las estadísticas de celdas se limpian para permitir una nueva carga de fotos.
- Los cuadros quedan vacíos y el usuario puede subir imágenes de la nueva inspección.
- Se muestra el mensaje `Inspección creada`.
- Aparece un enlace a la línea de tiempo de inspecciones junto al menú, con el número de inspecciones guardadas.

## Listar inspecciones

- El usuario abre la lista de inspecciones de una colmena, por ejemplo desde una ruta de la aplicación como `/apiaries/7/hives/118/inspections`.
- Ve una lista de inspecciones con sus fechas.
- Puede hacer clic en una inspección para consultar los detalles.

## Vista de inspección

En la vista de inspección el usuario puede revisar:

- la estructura de cuadros guardada en ese momento;
- fotos de los cuadros asociadas a la inspección;
- estadísticas de celdas y recursos detectados;
- comparaciones con inspecciones anteriores o posteriores cuando hay suficientes datos.

## Valor para el apicultor

- Conserva evidencia visual de cada revisión importante.
- Evita sobrescribir fotos antiguas al preparar la siguiente inspección.
- Permite estudiar la evolución de cría, reservas y población.
- Conecta datos manuales con telemetría, tratamientos, alimentación y alertas.
