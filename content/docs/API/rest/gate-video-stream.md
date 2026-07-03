---
order: 2
sidebar_position: 2
hide_table_of_contents: true
title: Gate Video Stream
---
Use this service when an app needs historical HLS playlists or on-demand Entrance Observer live-stream control. `web-app` should talk only to `graphql-router` and `gate-video-stream`; it must not access Jetson private URLs.

`gate-video-stream` now owns:

- stored entrance video upload and HLS playback
- GraphQL live session lifecycle for `startEntranceLiveStream`, `keepEntranceLiveStreamAlive`, `stopEntranceLiveStream`, and `entranceLiveStreamSession`
- device-facing polling/status/event endpoints for `entrance-observer`
- service-owned relay/playback endpoint issuance placeholders for the live MVP
- optional handoff from live sessions back into the stored clip flow via the existing `uploadGateVideo` path

For REST consumers such as `entrance-observer`:

- [Swagger UI](https://video.gratheon.com/docs/)
- [OpenAPI JSON](https://video.gratheon.com/openapi.json)

Contract notes for the current live-control MVP:

- Browser clients start, keep alive, inspect, and stop live sessions through GraphQL, not REST.
- `entrance-observer` reports device heartbeat/status with `POST /api/entrance-live/device/status`.
- `entrance-observer` polls `POST /api/entrance-live/device/poll` for pending `START_STREAM` and `STOP_STREAM` commands.
- The poll request doubles as a heartbeat update because it carries the latest `cameraStatus`, `publisherState`, and optional diagnostics payload.
- Devices acknowledge command handling through `POST /api/entrance-live/device/command-ack`.
- Devices report lifecycle transitions such as `DEVICE_ONLINE`, `STREAM_STARTING`, `STREAM_ACTIVE`, `STREAM_FAILED`, and `STREAM_STOPPED` through `POST /api/entrance-live/device/event`.
- `DEVICE_ONLINE` refreshes device presence and status payload but does not, by itself, move a session into `STARTING` or `ACTIVE`.

For browser clients, use GraphQL through `graphql-router`, not direct device URLs.

<iframe class="api-docs-iframe api-docs-iframe--rest" title="Gate Video Stream REST API Swagger UI" src="https://video.gratheon.com/docs/" width="100%" height="850" loading="lazy"></iframe>
