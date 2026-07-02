---
title: "🧑‍🚀 Restauración de contraseña"
navTitle: Recuperar contraseña
layout: products
status: complete
---

### 🎯 Propósito

Permitir que un usuario recupere el acceso a su cuenta cuando olvida la contraseña, mediante un flujo seguro de restablecimiento.

### 🎭 Historia de usuario

- Como usuario que olvidó su contraseña,
- quiero solicitar un enlace de recuperación,
- para definir una nueva contraseña y volver a acceder a mis datos.

### 🚀 Beneficios clave

- **Autoservicio**: recuperación sin contactar soporte.
- **Seguridad**: enlaces temporales y verificación por correo.
- **Menos fricción**: reduce abandonos por pérdida de contraseña.
- **Continuidad**: el usuario recupera acceso a colmenas y registros.

### 🔧 Resumen técnico

El usuario solicita recuperación con su correo. El sistema envía un enlace temporal con token seguro; al abrirlo, permite definir una nueva contraseña y luego iniciar sesión.

### 📋 Criterios de aceptación

- Formulario para solicitar recuperación por email.
- Envío de enlace con token de un solo uso o caducidad.
- Validación del token antes de aceptar nueva contraseña.
- Mensajes claros para éxito, caducidad o errores.
- Inicio de sesión posible con la nueva contraseña.

### 🚫 Fuera de alcance

- Recuperación mediante SMS.
- Preguntas de seguridad.
- Recuperación manual por soporte.

### 🔗 Funciones relacionadas

- [Inicio de sesión](user-login.md)
- [Registro de usuario](user-registration.md)
- [Edición del perfil de usuario](user-editing.md)

### 📚 Recursos y referencias

- [Página de autenticación](https://app.gratheon.com/account/authenticate/?lang=es)

---
**Última actualización**: 18 de noviembre de 2025
**Próxima revisión**: diciembre de 2025
