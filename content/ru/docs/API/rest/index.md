---
order: 4
hide_table_of_contents: true
title: 🗂️ REST APIs
showChildren: true
---
Для общего использования мы рекомендуем наш [GraphQL](../GraphQL.md).
Для edge devices мы предоставляем versioned REST API, привязанные к конкретным microservices.

REST API documentation хостится самими microservices, поэтому docs остаются привязаны к service-owned OpenAPI contracts. OpenAPI URL можно импортировать в Postman, Bruno или Insomnia для генерации client collections, а в Swagger UI можно копировать cURL examples.

- [Telemetry API](telemetry-api.md) — sensor telemetry и entrance movement metrics.
- [Gate Video Stream](gate-video-stream.md) — HLS playback REST endpoints для entrance video streams.
