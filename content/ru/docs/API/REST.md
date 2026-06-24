---
sidebar_position: 2
hide_table_of_contents: true
title: 🗂️ REST APIs
---
Для общего использования мы рекомендуем наш [GraphQL](GraphQL.md).
Для edge devices мы предоставляем versioned REST API, привязанные к конкретным microservices.

REST API documentation теперь хостится самими microservices, поэтому docs остаются привязаны к service-owned OpenAPI contracts. OpenAPI URL можно импортировать в Postman, Bruno или Insomnia для генерации client collections, а в Swagger UI можно копировать cURL examples.

- [Telemetry API Swagger UI](https://telemetry.gratheon.com/docs/)
- [Telemetry API OpenAPI JSON](https://telemetry.gratheon.com/openapi.json)
- [Gate Video Stream Swagger UI](https://video.gratheon.com/docs/) — зависит от доступности `video.gratheon.com`
- [Gate Video Stream OpenAPI JSON](https://video.gratheon.com/openapi.json)

<iframe title="Gratheon Telemetry REST API Swagger UI" src="https://telemetry.gratheon.com/docs/" width="100%" height="850"></iframe>
