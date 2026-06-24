---
sidebar_position: 2
hide_table_of_contents: true
title: 🗂️ REST APIs
---
For general usage we recommend using our [GraphQL](GraphQL.md).
For edge devices, we provide microservice-specific, versioned REST APIs.

REST API documentation is hosted by the microservices themselves so the docs stay tied to their service-owned OpenAPI contracts. Import the OpenAPI URLs into Postman, Bruno, or Insomnia to generate client collections, or use Swagger UI to copy cURL examples.

- [Telemetry API Swagger UI](https://telemetry.gratheon.com/docs/)
- [Telemetry API OpenAPI JSON](https://telemetry.gratheon.com/openapi.json)
- [Gate Video Stream Swagger UI](https://video.gratheon.com/docs/) — depends on `video.gratheon.com` availability
- [Gate Video Stream OpenAPI JSON](https://video.gratheon.com/openapi.json)

<iframe class="api-docs-iframe api-docs-iframe--rest" title="Gratheon Telemetry REST API Swagger UI" src="https://telemetry.gratheon.com/docs/" width="100%" height="850" loading="lazy"></iframe>
