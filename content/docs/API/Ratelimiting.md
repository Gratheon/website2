---
title: 🚪 Rate limiting
---
Currently traffic is not rate limited, however it will be.

Depending on the [pricing plan](/pricing), we will limit how frequently you can make requests.
[GraphQL](GraphQL.md) API queries and mutations are limited in complexity

| Plan     | Read endpoints | Write/Delete endpoints |
| -------- | -------------- | ---------------------- |
| Free     | 5 req/sec      | 5 req/sec              |
| Simple   | 10 req/sec     | 5 req/sec              |
| Flexible | 50 req/sec     | 20 req/sec `*`         |

`*` Flexible pricing plan is usage-based, so requests reduce tokens