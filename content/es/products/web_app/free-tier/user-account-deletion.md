---
title: "🙅 Eliminación de cuenta de usuario"
navTitle: Eliminar cuenta
layout: products
status: complete
---

### 🎯 Propósito

Permitir que los usuarios eliminen permanentemente sus cuentas de Gratheon y los datos asociados, cumpliendo requisitos de privacidad y tiendas de aplicaciones.

### 🎭 Historia de usuario

- Como usuario registrado,
- quiero eliminar definitivamente mi cuenta y todos mis datos,
- para ejercer mi derecho de supresión y retirar mi presencia de la plataforma.

### 🚀 Beneficios clave

- **Cumplimiento de privacidad**: compatible con GDPR y requisitos de Google Play.
- **Eliminación completa**: borrado irreversible de datos y asociaciones.
- **Control del usuario**: gestión total del ciclo de vida de la cuenta.
- **Cumplimiento regulatorio**: satisface derechos de protección de datos.

### 🔧 Resumen técnico

Sistema de eliminación irreversible de cuentas y datos asociados, incluyendo colmenas, telemetría, vídeos y perfil. Implementa los requisitos de Google Play para la funcionalidad de eliminación de datos.

### 📋 Criterios de aceptación

- Eliminación accesible en [app.gratheon.com/account](https://app.gratheon.com/account).
- Botón claro “Eliminar cuenta” con confirmación.
- Eliminación de perfil, colmenas, sensores y telemetría.
- Advertencias explícitas sobre irreversibilidad.
- Cumplimiento de requisitos de Google Play.
- Mensaje de confirmación tras completar el borrado.
- Sin recuperación de datos después de eliminar.

### 🚫 Fuera de alcance

- Exportación de datos antes de eliminar.
- Desactivación temporal de cuenta.
- Eliminación selectiva de datos.
- Recuperación posterior.

### 🏗️ Enfoque de implementación

- **Frontend**: interfaz con advertencias y confirmación.
- **Backend**: borrado en cascada de datos asociados.
- **Base de datos**: eliminación completa de tablas y referencias.
- **Cumplimiento**: alineación con Google Play.
- **Auditoría**: registro de eliminación para verificación.

### 📊 Métricas de éxito

- Finalización del 100% cuando el usuario confirma.
- Verificación de eliminación en todos los componentes.
- Cero datos remanentes tras el proceso.
- Éxito en auditorías de cumplimiento.
- Comprensión clara por parte del usuario antes de confirmar.

### 🔗 Funciones relacionadas

- [Edición del perfil de usuario](user-editing.md)
- [Suscripción y facturación](billing-subscription.md)
- [Gestión de tokens de API](api-token-management.md)

### 📚 Recursos y referencias

- [Requisitos de Google Play sobre eliminación de datos](https://support.google.com/googleplay/android-developer/answer/13327111)
- [Interfaz de cuenta](https://app.gratheon.com/account)

### 💬 Notas

Función de cumplimiento regulatorio requerida para distribución en Google Play. Debe dejar claro que el proceso no es reversible.

## Flujo

- Abre [https://app.gratheon.com/account](https://app.gratheon.com/account).
- Haz clic en “Eliminar cuenta”.
- Confirma que el borrado no es reversible.

![](/about/img/Screenshot%202024-06-02%20at%2014.13.40.png)

---
**Última actualización**: 18 de noviembre de 2025
**Próxima revisión**: diciembre de 2025
