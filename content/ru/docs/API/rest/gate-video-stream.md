---
order: 2
sidebar_position: 2
hide_table_of_contents: true
title: Gate Video Stream
---
Используйте этот сервис, когда приложению нужны HLS-плейлисты для исторических записей или on-demand live control для Entrance Observer. `web-app` должен общаться только с `graphql-router` и `gate-video-stream` и не должен знать приватные URL Jetson.

Сейчас `gate-video-stream` отвечает за:

- загрузку и HLS-воспроизведение сохраненного видео у входа
- GraphQL lifecycle live-сессии через `startEntranceLiveStream`, `keepEntranceLiveStreamAlive`, `stopEntranceLiveStream` и `entranceLiveStreamSession`
- device-facing polling/status/event endpoints для `entrance-observer`
- выдачу service-owned placeholder playback/publisher endpoints для live MVP
- опциональную передачу live-сессии обратно в stored clip flow через существующий путь `uploadGateVideo`

Для REST-клиентов, таких как `entrance-observer`:

- [Swagger UI](https://video.gratheon.com/docs/)
- [OpenAPI JSON](https://video.gratheon.com/openapi.json)

Текущий контракт live-control MVP:

- Браузерные клиенты запускают, продлевают, читают и останавливают live-сессии через GraphQL, а не через REST.
- `entrance-observer` отправляет heartbeat/status через `POST /api/entrance-live/device/status`.
- `entrance-observer` опрашивает `POST /api/entrance-live/device/poll`, чтобы получать ожидающие команды `START_STREAM` и `STOP_STREAM`.
- Запрос poll одновременно обновляет heartbeat устройства, потому что несет актуальные `cameraStatus`, `publisherState` и опциональный payload с диагностикой.
- Устройство подтверждает обработку команды через `POST /api/entrance-live/device/command-ack`.
- Устройство сообщает о переходах жизненного цикла через `POST /api/entrance-live/device/event`, включая `DEVICE_ONLINE`, `STREAM_STARTING`, `STREAM_ACTIVE`, `STREAM_FAILED` и `STREAM_STOPPED`.
- Событие `DEVICE_ONLINE` обновляет присутствие устройства и status payload, но само по себе не переводит сессию в `STARTING` или `ACTIVE`.

Для browser clients используйте GraphQL через `graphql-router`, а не прямые URL устройства.

<iframe class="api-docs-iframe api-docs-iframe--rest" title="Gate Video Stream REST API Swagger UI" src="https://video.gratheon.com/docs/" width="100%" height="850" loading="lazy"></iframe>
