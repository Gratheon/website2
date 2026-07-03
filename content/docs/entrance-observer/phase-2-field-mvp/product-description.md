---
title: Product description
order: 1
sidebar_position: 1
hide_table_of_contents: false
---

## Goal

The Field MVP is the first useful outdoor Entrance Observer. It should answer one question: can a beekeeper install a camera at a real hive entrance and receive trustworthy bee-traffic telemetry without continuous video upload or direct device access?

This phase should keep the Jetson reference platform unless a measured cost-down prototype already meets the accuracy and live-session targets. The main new work is not more AI headroom. It is weatherproof installation, power, network resilience, serviceability, and repeatable camera geometry.

## Functionality

- Detects and tracks bees at one hive entrance.
- Produces direction-aware counts such as `beesIn`, `beesOut`, unknown direction, confidence, and count interval.
- Reports camera/device health: FPS, temperature, disk free space, network signal, app version, uptime, and last error.
- Uploads telemetry continuously or in short batches when connectivity is weak.
- Publishes live video only while an authorized `gate-video-stream` session is active.
- Stores selected event clips locally and uploads only sampled/anomaly/manual clips.
- Survives rain-protected outdoor operation, temperature swings, insects, dust, and beekeeper handling.

## Field MVP architecture

```mermaid
flowchart LR
  subgraph Hive[Hive entrance]
    bracket[Fixed entrance bracket]
    window[Sealed optical window or hood]
    camera[Camera + lens]
  end

  subgraph Box[Weather-protected electronics]
    compute[Jetson Orin or measured alternative]
    storage[Local clip buffer]
    watchdog[Watchdog and health logs]
    power[Power supply or battery system]
    network[WiFi/Ethernet/LTE uplink]
  end

  subgraph Cloud[Gratheon cloud]
    telemetry[telemetry-api]
    gate[gate-video-stream]
    graphql[graphql-router]
  end

  subgraph UI[web-app]
    charts[Traffic charts]
    live[On-demand live player]
    archive[Selected clips]
  end

  bracket --> camera
  window --> camera
  camera --> compute
  compute --> storage
  compute --> watchdog
  power --> compute
  network --> telemetry
  network --> gate
  compute -->|movement and health metrics| telemetry
  gate -->|start/stop commands| compute
  compute -->|live media only while viewed| gate
  compute -->|selected clips| gate
  graphql --> telemetry
  graphql --> gate
  charts --> graphql
  live --> graphql
  archive --> graphql
```

## Field operating modes

| Mode | Camera | AI | Network | Video | When used |
| --- | --- | --- | --- | --- | --- |
| Traffic telemetry | On during daylight | On | Periodic upload | Off | Default daily monitoring. |
| On-demand live | On | On | Active session | Relay through `gate-video-stream` | User actively watches a hive. |
| Event clip | On | On | Deferred upload allowed | Short selected clip | Anomaly, model QA sample, or manual recording. |
| Low-bandwidth field | On or lower FPS | On at reduced profile | Batched | No default video | Weak WiFi/LTE or metered data. |
| Night sleep | Off or low-power | Off | Heartbeat only if needed | Off | Darkness or no useful visual activity. |
| Service | On | Optional | Local web/SSH plus cloud | Optional | Camera alignment and maintenance visit. |

## Component assessment for outdoor MVP

| Subsystem | Keep from lab? | MVP requirement | Better field alternative |
| --- | --- | --- | --- |
| Compute | Keep Jetson if no benchmark alternative is ready. | Must be mounted with airflow, watchdog, stable power, and remote logs. | Raspberry Pi 5 + Hailo AI HAT+ should be evaluated side-by-side if the model converts and reaches accuracy target. |
| Camera | Keep USB UVC only if cable and exposure are stable outdoors. | Need locked focus, fixed angle, stable exposure, and serviceable cable path. | CSI/MIPI camera for shorter internal cable; IP camera with onboard H.265 if video reliability matters more than edge AI flexibility. |
| Lens | Keep varifocal for pilot discovery. | Final pilot units should have locked lens settings documented per entrance geometry. | Fixed-focus lens once field of view is known. |
| Optical cover | Do not use loose acrylic sheets as final field window. | Needs glare control, scratch tolerance, water shedding, and cleaning access. | AR-coated acrylic/polycarbonate window, small hood, tilted window, or camera placed behind a shaded opening. |
| Enclosure | Replace lab fixture. | IP65/IP67 box, cable glands, drain path, desiccant only as backup, and UV-resistant materials. | Branded electrical enclosure with gasket, sealed connectors, and sun shield. |
| Power | Bench USB-C is not enough. | Stable supply under camera + SSD + WiFi peaks. For battery tests, measure Wh/day first. | PoE for fixed sites; solar/battery only after measured duty-cycle reduction. |
| Network | WiFi is acceptable for pilot sites. | Antenna placement must work from inside/through enclosure. Upload must retry. | Ethernet/PoE for stationary apiaries; LTE router or gateway for remote pilot. |
| Storage | Keep NVMe for buffering. | Retention policy must delete oldest clips and protect logs from filling disk. | Industrial storage for field units; smaller storage if video is truly optional. |
| Local display | Remove. | Field setup should not depend on a permanently installed screen. | Temporary service laptop, phone setup page, or LED/status button. |

## Camera and mechanical placement

The camera installation matters as much as the model. Bee movement is fast, lighting changes quickly, and small camera shifts can change count behavior.

| Design choice | Recommendation | Why |
| --- | --- | --- |
| View geometry | Mount the camera so the entrance plane and crossing line remain visible across the full landing board. | Count direction depends on stable crossing regions. |
| Height and angle | Record height, distance, angle, lens setting, and sample frame in the device notes. | Allows another unit to reproduce the same field of view. |
| Focus | Lock focus after setup. | Small focus drift can look like model regression. |
| Exposure | Prefer manual or constrained auto-exposure after testing dawn/noon/cloud conditions. | Auto-exposure hunting can cause missed detections. |
| Window | Tilt or hood the window to reduce rain, glare, and internal reflection. | A flat shiny window can ruin daytime images. |
| Cable routing | Use drip loops and strain relief before every gland or connector. | Prevents water ingress and cable pull damage. |

## Power strategy

Do not promise solar autonomy in the MVP until the real platform energy budget is measured. A Jetson-class device running camera, AI, SSD, and WiFi can easily require a large panel and battery if it stays active all day.

| Power option | Best use | Notes |
| --- | --- | --- |
| Mains adapter in sealed box | Lab-adjacent pilot or apiary with power | Simplest stable pilot power. Must be safe outdoors. |
| PoE splitter or PoE-capable carrier | Fixed installation near Ethernet | Best MVP path when Ethernet is available because it solves data and power together. |
| Battery-only | Short pilot tests | Useful for measuring Wh/day, not a production promise. |
| Solar + battery | Later MVP after duty cycle is known | Requires measured active watts, sleep watts, sunless-day target, and safe charging design. |
| LTE router with its own power | Remote pilot | Easy to deploy but raises energy and data costs. |

## Telemetry payload scope

| Metric group | Fields | Use |
| --- | --- | --- |
| Bee movement | `beesIn`, `beesOut`, `unknownDirection`, `netFlow`, `countIntervalSeconds`, `confidence` | Product value and alerts. |
| Vision health | `fps`, `frameWidth`, `frameHeight`, `cameraOnline`, `droppedFrames`, `exposureProfile` | Explains trustworthiness of counts. |
| Device health | `deviceTemperature`, `diskFreeBytes`, `uptimeSeconds`, `appVersion`, `modelVersion`, `lastError` | Support and remote diagnostics. |
| Network health | `rssi`, `uploadLatencyMs`, `queuedTelemetryCount`, `queuedClipCount` | Explains missing or delayed data. |
| Power health | `inputVoltage`, `batteryVoltage`, `batteryPercent` where available | Required before solar/battery claims. |

## Field acceptance tests

- 24-72 hour continuous outdoor run with telemetry and local logs.
- Rain or hose-splash test appropriate to the claimed MVP enclosure, without overclaiming an IP rating.
- Dawn/noon/evening lighting test with sample clips and count review.
- Temporary network outage test that proves telemetry queueing and clip-retention limits.
- Power-cycle test that proves the app restarts, camera reconnects, and device presence returns.
- Live-session test from `web-app` through `graphql-router` and `gate-video-stream` without direct device URL access.
- Manual service test: beekeeper or technician can clean the window and verify alignment without opening electronics unnecessarily.

## Exit criteria

- A real hive pilot produces useful bee-traffic trends for multiple days.
- Stored video is selective, not continuous by default.
- On-demand live view starts and stops reliably through the cloud video gateway.
- The enclosure, window, cable entries, and mount survive realistic outdoor handling.
- The team has measured energy, bandwidth, FPS, temperature, and count accuracy for the pilot hardware.
- The pilot produces enough data to decide whether to continue with Jetson, switch to Pi + Hailo, or test another platform.

## Bill of materials

The detailed purchase list is in [Phase 2 - Field MVP BOM](bill-of-materials.md). It adds a real enclosure, stable power, cable glands/connectors, mounting hardware, power measurement, and service consumables to the lab compute/camera stack.