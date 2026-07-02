---
title: "🌍 Localización"
navTitle: Localización
layout: products
status: complete
---

### 🎯 Propósito

Ofrecer soporte multilingüe en la aplicación web con detección automática del idioma y preferencias configurables por el usuario.

### 🎭 Historia de usuario

- Como apicultor de cualquier país,
- quiero usar la aplicación en mi idioma,
- para entender todas las funciones y datos sin barreras lingüísticas.

### 🚀 Beneficios clave

- **Accesibilidad global**: varios idiomas reducen barreras para usuarios internacionales.
- **Detección automática**: idioma sugerido según la configuración del navegador.
- **Control del usuario**: selección manual y guardado de preferencias.
- **Experiencia localizada**: fechas, números y textos adaptados al idioma.

### 🔧 Resumen técnico

Implementa un sistema i18n con detección del idioma del navegador durante registro e inicio de sesión. El usuario puede cambiar su idioma desde la configuración de cuenta; las traducciones se aplican a la interfaz y al formato de fechas.

### 📋 Criterios de aceptación

- Detección automática durante registro e inicio de sesión.
- Selector de idioma disponible en [la cuenta](https://app.gratheon.com/account).
- Preferencia guardada en el perfil y persistente entre sesiones.
- Textos de UI traducidos según el idioma elegido.
- Formato de fechas ajustado al idioma o región.
- Actualización inmediata o tras recarga cuando cambia la preferencia.

### 🔠 Lógica de idiomas soportados

El orden de idiomas en nuestras interfaces se prioriza según el potencial comercial estimado. Para ello se considera el PIB acumulado de los hablantes de cada idioma, de modo que los mercados con mayor impacto económico se mantienen más visibles y actualizados.

### 🚫 Fuera de alcance

- Soporte avanzado para idiomas de derecha a izquierda.
- Formatos regionales complejos más allá de fechas básicas.
- Traducciones aportadas por usuarios.
- Cambio dinámico completo sin recargar la página.

### 🏗️ Enfoque de implementación

- **Detección**: idioma del navegador mediante cabeceras `Accept-Language`.
- **Almacenamiento**: preferencia en el perfil del usuario.
- **Traducciones**: archivos por clave con fallback al idioma principal.
- **Fechas**: presentación con formato local.
- **UI**: recarga o rerender tras cambiar idioma.

### 📊 Métricas de éxito

- Precisión de detección superior al 90% para idiomas soportados.
- Cambio de idioma en menos de 2 segundos.
- Cobertura de traducción superior al 95% para la UI principal.
- Mejor retención de usuarios no angloparlantes.
- Cero rupturas de diseño por longitud de texto.

### 🔗 Funciones relacionadas

- [Registro de usuario](user-registration.md)
- [Inicio de sesión](user-login.md)
- [Edición del perfil de usuario](user-editing.md)

### 📚 Recursos y referencias

- [Captura de configuración de cuenta](/about/img/Screenshot%202024-07-10%20at%2021.05.39.png)

### 💬 Notas

La función está completa para el cambio básico de idioma. Futuras mejoras pueden incluir formato regional avanzado y reglas plurales por idioma.

---
**Última actualización**: 18 de noviembre de 2025
**Próxima revisión**: diciembre de 2025
