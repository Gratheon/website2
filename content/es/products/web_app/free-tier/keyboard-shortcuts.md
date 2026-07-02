---
layout: products
status: complete
title: 🖮 Atajos de teclado
navTitle: Atajos
---

### 🎯 Propósito

Ofrecer navegación y acciones mediante teclado en la aplicación web de Gratheon para revisar apiarios, colmenas, cuadros, dispositivos, almacén, diálogos y herramientas de dibujo sin depender solo del ratón o la pantalla táctil.

El soporte de teclado también mejora la accesibilidad para personas que usan lectores de pantalla, dispositivos conmutadores u otras tecnologías de asistencia.

### 🎭 Historia de usuario

- Como apicultor que trabaja desde portátil, teclado de tableta o tecnología asistiva,
- quiero que las pantallas comunes respondan a controles de teclado claros,
- para revisar datos, cambiar de registro, editar anotaciones y confirmar acciones rutinarias más rápido.

### 🚀 Beneficios clave

- **Descubrimiento de atajos**: `Shift + ?` abre la vista de atajos del AI Advisor y muestra pistas visibles.
- **Navegación global**: las teclas numéricas abren secciones principales y `Ctrl + M` alterna el menú izquierdo.
- **Revisión más rápida**: las flechas se mueven por apiarios, tarjetas de colmena, cajas y cuadros.
- **Controles accesibles**: filas, botones, encabezados ordenables y diálogos son enfocables.
- **Acciones destructivas más seguras**: Delete y Backspace abren confirmaciones.
- **Diálogos consistentes**: Enter confirma cuando procede y Escape cancela o cierra paneles.
- **Comportamiento consciente de escritura**: los atajos globales se ignoran mientras se escribe en campos de texto.

### ⌨️ Atajos implementados

#### Atajos globales

| Área | Atajo | Comportamiento |
| --- | --- | --- |
| Cualquier contexto sin escritura | `Shift + ?` | Abre la vista de atajos del AI Advisor para la página actual y activa pistas visibles. |
| Cualquier contexto sin escritura | `Ctrl + M` | Muestra u oculta el menú lateral. |
| Cualquier contexto sin escritura | `1` | Abre Apiarios. |
| Cualquier contexto sin escritura | `2` | Abre Reinas o Detección de reina en el plan gratuito. |
| Cualquier contexto sin escritura | `3` | Abre Insights cuando está disponible. |
| Cualquier contexto sin escritura | `4` | Abre Almacén cuando está disponible. |
| Cualquier contexto sin escritura | `5` | Abre Dispositivos cuando está disponible. |
| Cualquier contexto sin escritura | `6` | Abre Configuración de alertas cuando está disponible. |
| Cualquier contexto sin escritura | `7` | Abre Cuenta. |
| Cualquier contexto sin escritura | `8` | Abre AI Advisor cuando está disponible. |
| Cualquier contexto sin escritura | `9` | Abre Facturación. |
| Cualquier contexto sin escritura | `0` | Abre Tokens de cuenta. |
| Panel AI Advisor | `Esc` | Cierra el panel. |
| Pistas de atajos | `Esc` o desenfoque de ventana | Oculta las pistas visibles. |

#### Apiarios y lista de colmenas

| Área | Atajo | Comportamiento |
| --- | --- | --- |
| Tabla de apiario | Flecha arriba / abajo | Selecciona la colmena anterior o siguiente. |
| Vista de tarjetas | Flechas | Se mueve visualmente entre tarjetas de colmena. |
| Lista de apiario | Primera flecha | Enfoca la colmena seleccionada o la primera disponible. |
| Encabezados ordenables | Enter o Espacio | Cambia el orden de la columna enfocada. |
| Vista general | `H` | Vuelve a la lista principal de apiarios y colmenas. |

#### Detalle y estructura de colmena

| Área | Atajo | Comportamiento |
| --- | --- | --- |
| Detalle de colmena | `H` | Vuelve a la lista principal. |
| Detalle de colmena | `A` | Vuelve al apiario de la colmena actual. |
| Detalle de colmena | `E` | Abre la edición de información principal si es editable. |
| Pestaña de estructura | Flecha arriba / abajo | Se mueve entre cajas. |
| Pestaña de estructura | Flecha izquierda / derecha | Se mueve entre cuadros de la caja seleccionada. |
| Pestaña de estructura | Backspace | Abre confirmación para quitar la caja seleccionada. |
| Pestaña de estructura | Delete / Del | Abre confirmación para quitar el cuadro seleccionado. |

#### Herramientas de dibujo en caras de cuadro

| Área | Atajo | Comportamiento |
| --- | --- | --- |
| Lienzo de cuadro | `C` | Cambia al pincel de celdas. |
| Lienzo de cuadro | `F` | Cambia a dibujo libre. |
| Lienzo de cuadro | `X` | Cambia al borrador de celdas. |
| Lienzo de cuadro | `N` | Selecciona celdas con néctar. |
| Lienzo de cuadro | `Y` | Selecciona miel. |
| Lienzo de cuadro | `P` | Selecciona polen. |
| Lienzo de cuadro | `G` | Selecciona huevos. |
| Lienzo de cuadro | `B` | Selecciona cría. |
| Lienzo de cuadro | `K` | Selecciona cría operculada. |
| Lienzo de cuadro | `D` | Selecciona cría de zángano. |
| Lienzo de cuadro | `U` | Selecciona celdas vacías. |
| Lienzo de cuadro | `+` o `=` | Aumenta el tamaño del pincel. |
| Lienzo de cuadro | `-` | Reduce el tamaño del pincel. |
| Lienzo de cuadro | `Ctrl + Z` / `⌘ + Z` | Deshace el último trazo. |

#### Almacén, dispositivos y diálogos

| Área | Atajo | Comportamiento |
| --- | --- | --- |
| Dispositivos | Flecha arriba / abajo | Selecciona el dispositivo anterior o siguiente. |
| Dispositivos | Delete / Del | Abre la confirmación de eliminación. |
| Almacén de sistemas de colmena | Flecha arriba / abajo | Selecciona el sistema anterior o siguiente. |
| Almacén de sistemas de colmena | Enter | Abre el sistema seleccionado. |
| Diálogos de confirmación | Enter | Confirma acciones compatibles. |
| Diálogos y modales | Escape | Cancela o cierra cuando está permitido. |
| Menús emergentes | Escape | Cierra el menú abierto. |

### 🔧 Resumen técnico

El soporte se implementa con manejadores `keydown` conscientes del contexto. Los atajos del menú global viven en el componente compartido del menú, mientras que listas, detalle, almacén, dispositivos, diálogos y herramientas de dibujo gestionan sus atajos en los componentes propietarios.

Los manejadores ignoran campos de escritura (`input`, `textarea`, `select` y contenido editable) y evitan combinaciones con modificadores cuando podrían interferir con el navegador o el sistema operativo.

### ✅ Cobertura actual

- Descubrimiento global de atajos y navegación por secciones.
- Navegación con Tab por botones, enlaces, campos, filas y diálogos.
- Navegación de apiarios, tarjetas de colmena y estructura de colmena.
- Atajos de dibujo y anotación de celdas.
- Flujos de dispositivos, almacén y confirmaciones.

### 🚫 Limitaciones actuales

- `Shift + ?` abre la vista del AI Advisor, no un modal independiente.
- Los atajos no son personalizables por el usuario.
- Todavía no existe una paleta completa de comandos.
- No todas las páginas garantizan atajos específicos.
- La cobertura automática completa de accesibilidad por teclado aún no está documentada como finalizada.

### 🔗 Funciones relacionadas

- [Gestión de apiarios](apiary-management.md)
- [Gestión de colmenas](hive-management.md)
- [Gestión de caras de cuadro](frame-side-management.md)

### 💬 Notas

Los atajos son conservadores: evitan campos de texto y envían acciones destructivas a diálogos de confirmación para reducir pérdidas accidentales de datos.

---
**Última actualización**: 24 de junio de 2026
