---
sidebar_position: 1
title: 🔑 Autentimine
---
Meie dokumendile API pääsemiseks peate looma [kasutajaprofiilis](https://app.gratheon.com/account) märgi API. Tokenid võimaldavad meil teid autentida.

Märgid on JWT-põhised, need on kodakondsuseta.

Peate selle märgi edastama `Authorization` http-päises ja selle eesliitena peab olema `Bearer `, näiteks:

```bash
curl --location 'https://graphql.gratheon.com/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"{ apiaries { id name } }"}' \
--header 'Authorization: Bearer API_TOKEN_HERE'
```

Sama asi REST API-ga:

```bash
curl --location 'https://telemetry.gratheon.com/iot/v1/metrics' \
--header 'Authorization: Bearer API_TOKEN_HERE'
--data '{
"hiveId": 123,
"fields":{ "temperatureCelsius":31.25, "weightKg": 82.34 }
}'
```


web-app ja mobiilirakenduse jaoks salvestame JWT märgid `token` HTTP päisesse või __ETDOCS_INLINE__ küpsisesse000.