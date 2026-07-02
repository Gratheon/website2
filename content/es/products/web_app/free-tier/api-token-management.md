---
title: "🔐 Gestión de tokens de API"
navTitle: Tokens de API
layout: products
status: complete
---

### 🎯 Propósito

Permite generar, administrar y revocar tokens de API para acceder de forma segura a los servicios de Gratheon desde dispositivos externos, sensores IoT y aplicaciones propias.

### 🎭 Historia de usuario

- Como apicultor con dispositivos IoT o integraciones personalizadas,
- quiero generar y gestionar tokens de API para mi hardware,
- para conectar de forma segura observadores de piquera, sensores y otros equipos a mi cuenta de Gratheon.

### 🚀 Beneficios clave

- **Autenticación segura de dispositivos**: autenticación mediante tokens Bearer para equipos IoT.
- **Gestión del ciclo de vida**: genera, revisa y revoca tokens cuando sea necesario.
- **Soporte para varios dispositivos**: usa tokens separados para distintos dispositivos o aplicaciones.
- **Control de seguridad**: revoca tokens comprometidos sin afectar a los demás.

### 🔧 Resumen técnico

El sistema de gestión de tokens permite crear credenciales Bearer para autenticar dispositivos sin usar la contraseña del usuario. Los tokens se usan en observadores de piquera, sistemas de telemetría y servicios de subida de vídeo para acceder a las API protegidas de Gratheon.

### 📋 Criterios de aceptación

- Interfaz de gestión de tokens disponible en la configuración de la cuenta.
- Generación de nuevos tokens con nombres o etiquetas descriptivas.
- Visualización de tokens existentes con fecha de creación y estado de uso.
- Revocación individual con efecto inmediato.
- Validación de tokens en todos los endpoints que requieren autenticación.
- Generación de tokens mediante métodos criptográficamente seguros.
- Seguimiento básico del uso y de la última utilización del token.

### 🚫 Fuera de alcance

- Fechas de caducidad automáticas; los tokens permanecen activos hasta revocarse.
- Permisos granulares; los tokens tienen acceso completo a la cuenta.
- Analítica avanzada del uso de tokens.
- Operaciones masivas sobre tokens.

### 🏗️ Enfoque de implementación

- **Frontend**: interfaz de tokens dentro de la configuración de cuenta.
- **Backend**: generación segura mediante bibliotecas criptográficas.
- **Base de datos**: almacenamiento asociado al usuario con metadatos.
- **API**: validación Bearer en endpoints protegidos.
- **Seguridad**: hash y almacenamiento seguro de tokens.

### 📊 Métricas de éxito

- Tasa de generación de tokens del 100%.
- Tasa de autenticación de API superior al 99% para tokens válidos.
- Revocación efectiva de inmediato.
- Cero incidentes de acceso no autorizado.
- Adopción por usuarios con dispositivos conectados.

### 🔗 Funciones relacionadas

- [Edición del perfil de usuario](user-editing.md)
- [API de telemetría](/products/scales/features/📈%20Telemetry%20API/)
- [Transmisión de vídeo mediante API](/products/entrance_observer/features/🎥%20Video%20streaming%20via%20API/)

### 📚 Recursos y referencias

- [Ejemplo de uso de token en Entrance Observer](https://github.com/Gratheon/entrance-observer/blob/main/example.env)
- [Documentación de autenticación de la API de telemetría](/products/scales/features/📈%20Telemetry%20API/)

### 💬 Notas

Función crítica para conectar dispositivos de forma segura. Es esencial para observadores de piquera, telemetría y cualquier integración de hardware que requiera acceso autenticado.

---
**Última actualización**: 18 de noviembre de 2025
**Próxima revisión**: diciembre de 2025
