---
order: 4
hide_table_of_contents: true
title: 🗂️ REST APIs
showChildren: true
---
For general usage we recommend using our [GraphQL](../GraphQL.md).
For edge devices, we provide microservice-specific, versioned REST APIs.

REST API documentation is hosted by the microservices themselves so the docs stay tied to their service-owned OpenAPI contracts. Import the OpenAPI URLs into Postman, Bruno, or Insomnia to generate client collections, or use Swagger UI to copy cURL examples.

- [Telemetry API](telemetry-api.md) — sensor telemetry and entrance movement metrics.
- [Gate Video Stream](gate-video-stream.md) — HLS playback REST endpoints for entrance video streams.
