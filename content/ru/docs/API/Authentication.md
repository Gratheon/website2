---
title: 🔑 Authentication
order: 2
---
Чтобы получить доступ к нашему API, нужно сгенерировать API token в [user profile](https://app.gratheon.com/account). Tokens позволяют нам аутентифицировать вас.

Tokens основаны на JWT и являются stateless.

Вы должны передавать этот token в HTTP header `Authorization` с префиксом `Bearer `, например:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```

То же самое для REST API:

```bash
curl --location 'https://telemetry.gratheon.com/iot/v1/metrics' \
--header 'Authorization: Bearer API_TOKEN_HERE'
--data '{
"hiveId": 123,
"fields":{ "temperatureCelsius":31.25, "weightKg": 82.34 }
}'
```


Для web-app и mobile app мы храним JWT tokens в HTTP header `token` или cookie `gratheon_session`.
