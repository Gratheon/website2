---
sidebar_position: 2
hide_table_of_contents: true
title: 🗂️ REST APIs
---
Для общего использования мы рекомендуем наш [GraphQL](GraphQL.md).
Для edge devices мы предоставляем versioned REST API, привязанные к конкретным microservices.

Документация REST API теперь генерируется из OpenAPI specs, которые принадлежат самим сервисам [`telemetry-api`](https://github.com/Gratheon/telemetry-api) и [`gate-video-stream`](https://github.com/Gratheon/gate-video-stream). Встроенный Swagger UI позволяет переключаться между сервисами, пробовать запросы, смотреть cURL examples и скачивать сгенерированные Postman, Bruno или Insomnia collections.

- [Открыть REST API docs на весь экран](/assets/docs/API/rest-docs/)
- [Telemetry API OpenAPI JSON](/assets/docs/API/rest-docs/telemetry-api.openapi.json)
- [Gate Video Stream OpenAPI JSON](/assets/docs/API/rest-docs/gate-video-stream.openapi.json)

<iframe title="Gratheon REST API Swagger UI" src="/assets/docs/API/rest-docs/" width="100%" height="850"></iframe>
