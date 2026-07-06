---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Описание

Lab BOM относится к текущему Jetson Orin Nano prototype. Он ставит model iteration, Linux camera debugging и video pipeline development выше стоимости, питания и weatherproofing.

## Functionality covered

- Локально запускает текущее приложение `entrance-observer`.
- Захватывает USB UVC video и записывает selected clips.
- Тестирует detection, tracking, direction counting и telemetry upload.
- Тестирует on-demand video sessions через `gate-video-stream`.
- Даёт benchmark data for production alternatives.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Existing note | Lab recommendation |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | Edge AI computer | NVIDIA Jetson Orin Nano Super Developer Kit, 8 GB | 1 | $249 | [Orin Nano](../components-orin/Orin%20Nano.md) | Оставить reference platform for model/API development. |
| Required | Camera | MOKOSE 4K USB UVC camera | 1 | $154.50 | [Camera](../components-orin/Camera.md) | Good lab choice: UVC работает с OpenCV, GStreamer и common Linux tools. |
| Required | Lens | 5-50 mm CS/C mount CCTV lens или camera bundled 6-12 mm lens | 1 | €43.35 | [Camera lens](../components-orin/Camera%20lens.md) | Использовать varifocal только пока unknown entrance FOV. Lock focus/zoom during tests. |
| Required | Storage | 250 GB M.2 NVMe SSD | 1 | €23.88 | [M2 SSD](../components-orin/M2%20SSD.md) | OS, Docker images, logs, clip buffers и benchmark videos. |
| Required | Network | Ethernet or Waveshare AC8265 WiFi module and antennas | 1 | €0-22.92 | [WiFi antennas](../components-orin/WiFi%20antennas.md) | Prefer Ethernet for repeatable tests; WiFi to reproduce field conditions. |
| Required | Power | Official-quality USB-C power supply for Jetson | 1 | not yet documented | Add exact part | Должен покрывать Jetson, camera, SSD и WiFi under load. |
| Required | Camera mount | Adjustable 1/4 inch camera wall mount | 1 | $9.59 | [Mounts](../components-orin/Mounts.md) | Быстрая alignment; mark distance, height and angle after tests. |
| Recommended | Temporary frame | 2020 aluminium extrusion pack | 1 pack | €40.62 | [2020 Aluminum Extrusion](../components-orin/2020%20Aluminum%20Extrusion.md) | Good for lab fixture, not field enclosure. |
| Recommended | Optical cover sample | Plexiglass/acrylic sheets | 1 pack | €8.32 | [Plexiglass](../components-orin/Plexiglass.md) | Test glare, blur, scratches, condensation and cleaning; not production-grade by default. |
| Optional | Local setup display | 7 inch HDMI touchscreen | 1 | $47.99 | [Display](../components-orin/Display.md) | Bench-only. Remove from field/production BOMs. |
| Optional | Acrylic dev case | Acrylic case originally noted for Jetson Nano 2 GB | 1 | €11.36 | [Case](../components-orin/Case.md) | Treat as incompatible until Orin fit/cooling confirmed. |

## Component decisions for Phase 1

| Decision | Recommendation | Why |
| --- | --- | --- |
| Compute | Keep Jetson Orin Nano as reference. | Fastest route from Python model code to edge inference. |
| Camera interface | Keep USB UVC in lab. | Easy to inspect with `v4l2-ctl`, `ffmpeg`, GStreamer, OpenCV and browser previews. |
| Lens | Use varifocal only for discovery. | Lab discovers working distance and entrance coverage before fixed lens. |
| Storage | Keep NVMe. | Video datasets, Docker images and local buffers exceed small storage quickly. |
| Networking | Test both Ethernet and WiFi. | Ethernet isolates camera/model bugs; WiFi reveals retry/bandwidth behavior. |
| Enclosure | Use fixture, not final enclosure. | Desk fixture should make camera movement and cable access fast. |
| Power | Add a real power meter to BOM. | FPS/W and Wh/day cannot be estimated reliably from datasheets. |

## Missing lab items before next build

| Missing item | Why it is needed |
| --- | --- |
| USB-C inline power meter or AC wall power meter | Required for FPS/W and energy benchmarks. |
| Known test video set or printed moving-target fixture | Makes model changes comparable. |
| USB3 cable same length as planned field tests | Long or poor cables can cause camera drops. |
| Lens lock or thread-locking method | Prevents focus/zoom drift. |
| Small fan or thermal probe | Helps detect thermal throttling. |
| Labels for distance, angle, lens setting and profile | Makes datasets reproducible. |

## Alternatives not recommended for Phase 1 default

| Alternative | Why not default in lab | When to revisit |
| --- | --- | --- |
| Raspberry Pi 5 + Hailo AI HAT+ | Requires model conversion and Hailo runtime before algorithm is stable. | Phase 2 side-by-side benchmark or Phase 3 cost-down path. |
| RK3588 NPU board | Tooling/model conversion less predictable than Jetson. | If video encoding/media pipeline efficiency matters more. |
| Coral TPU | Current YOLO-style detector may need major simplification. | If very small telemetry-only model is trained. |
| Smart/IP camera with onboard AI | Vendor lock-in and less model control. | Long-term production research after count logic/dataset stabilize. |

## Estimated lab cost

Because current notes mix USD and EUR, keep totals as planning ranges:

- Required documented USD items: **$413.09** (`$249.00 + $154.50 + $9.59`).
- Required documented EUR items: **€90.15** (`€43.35 + €23.88 + €22.92`) before fixture/cover.
- Recommended fixture/cover EUR items: **€48.94** (`€40.62 + €8.32`).
- Optional bench/debug items: **$47.99 + €11.36**.

At a rough 1:1 USD/EUR planning rate, current lab prototype is about **€550-650 before shipping, taxes, power supply, cables, power meter and assembly time**.

## Exit criteria

- All required parts documented with links or substitute rules.
- Camera runs for several hours without USB resets.
- Jetson processes reference clips at target FPS profile.
- Telemetry and on-demand video can be demonstrated from same hardware.
- Power and thermal measurements recorded so Phase 2 does not inherit unknown energy risk.
