---
title: 🚪 Rate limiting
---
Сейчас traffic не ограничивается rate limit, но это будет добавлено.

В зависимости от [pricing plan](../../pricing.md) мы будем ограничивать частоту запросов.
Queries и mutations в [GraphQL](GraphQL.md) API ограничиваются по complexity.

| Plan     | Read endpoints | Write/Delete endpoints |
| -------- | -------------- | ---------------------- |
| Free     | 5 req/sec      | 5 req/sec              |
| Simple   | 10 req/sec     | 5 req/sec              |
| Flexible | 50 req/sec     | 20 req/sec `*`         |

`*` Flexible pricing plan usage-based, поэтому requests уменьшают tokens.
