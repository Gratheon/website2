---
title: 🔔 Alertas
layout: products
---

Gratheon debe avisar a los apicultores en situaciones importantes: cambios bruscos de telemetría, riesgo de enjambrazón, problemas de reina, temperaturas fuera de rango o eventos detectados por cámaras y modelos de IA. Esta página describe la configuración de alertas, canales y tipos soportados en el nivel Flexible.

## Resumen

El nivel Flexible ofrece un sistema unificado de alertas con múltiples canales de entrega y reglas avanzadas. Las alertas pueden configurarse por apiario, colmena o dispositivo y entregarse por correo, SMS, notificaciones móviles, Telegram o webhooks.

## Canales

- Correo electrónico
- SMS mediante un proveedor como Twilio
- Notificaciones push o de aplicación móvil
- Bot de Telegram
- Integraciones por webhook

## Configurar canales de alerta

- El usuario abre la página de configuración.
- En la sección `Alertas`:
  - elige canales preferidos en un selector como `Avisarme por: [email]`;
  - puede activar canales como notificación móvil, correo, SMS, Telegram o webhooks.

## Tipos de alerta

El usuario puede activar o desactivar los tipos que le interesen. Ejemplos:

- Riesgo de enjambrazón, relacionado con celdas reales o análisis de cuadros.
- Ataque de avispones.
- Reina ausente o fallo de puesta.
- Cría de zángano anormal o proporción inusual.
- Temperatura demasiado baja o alta dentro de la colmena.
- Enjambrazón detectada.
- Alertas de anomalía personalizadas desde analítica de series temporales.

## Notificaciones SMS

- Los SMS se entregan mediante un proveedor externo.
- Están pensados para mensajes cortos y prioritarios, por ejemplo reina ausente o emergencia de temperatura.
- Los clientes del nivel Flexible pueden activar o desactivar SMS y configurar números de teléfono por cuenta.

## Webhooks

- Los webhooks permiten integrar alertas con automatización externa, sistemas de monitorización o herramientas internas.
- El nivel Flexible admite endpoints configurables por regla de alerta.

## Recibir una alerta: ejemplo

1. El usuario sube fotos de todos los cuadros y ejecuta el análisis.
2. Una regla detecta una posible ausencia de reina.
3. Se genera y guarda una alerta.
4. La alerta aparece en la aplicación y se entrega por los canales configurados: correo, SMS, webhook u otros.

## Notas técnicas

- Arquitectura sugerida: un servicio dedicado de alertas que almacena eventos y expone API GraphQL/REST.
- Las alertas pueden ser creadas por servicios de análisis de cuadros, telemetría, vídeo o reglas de negocio.
- El servicio de alertas gestiona entrega, reintentos, historial y preferencias del usuario.
