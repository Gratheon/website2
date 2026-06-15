---
sidebar_position: 1
title: 🔑 Authentication
---
To access our API, you will need to generate API token in [user profile](https://app.gratheon.com/account). Tokens allow us to authenticate you.

Tokens are JWT-based, they are stateless.

You must pass this token in `Authorization` http header and have `Bearer ` as prefix, for example:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```

Same thing with REST API:

```bash
curl --location 'https://telemetry.gratheon.com/iot/v1/metrics' \
--header 'Authorization: Bearer API_TOKEN_HERE'
--data '{
"hiveId": 123,
"fields":{ "temperatureCelsius":31.25, "weightKg": 82.34 }
}'
```


For web-app and mobile app, we store JWT tokens in `token` HTTP header or a `gratheon_session` cookie. 