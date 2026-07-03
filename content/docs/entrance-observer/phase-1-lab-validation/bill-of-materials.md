---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Description

The lab BOM is for the current Jetson Orin Nano prototype. It prioritizes model iteration, Linux camera debugging, and video pipeline development over cost, power, and weatherproofing.

## Functionality covered

- Runs the current `entrance-observer` application locally.
- Captures USB UVC video and records selected clips.
- Tests detection, tracking, direction counting, and telemetry upload.
- Tests on-demand video sessions through `gate-video-stream`.
- Produces benchmark data for production alternatives.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Existing note | Lab recommendation |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | Edge AI computer | NVIDIA Jetson Orin Nano Super Developer Kit, 8 GB | 1 | $249 | [Orin Nano](../components-orin/Orin%20Nano.md) | Keep as the reference platform for model and API development. |
| Required | Camera | MOKOSE 4K USB UVC camera | 1 | $154.50 | [Camera](../components-orin/Camera.md) | Good lab choice because UVC works with OpenCV, GStreamer, and common Linux tools. |
| Required | Lens | 5-50 mm CS/C mount CCTV lens or camera bundled 6-12 mm lens | 1 | €43.35 | [Camera lens](../components-orin/Camera%20lens.md) | Use varifocal only while the entrance field of view is unknown. Lock focus/zoom during tests. |
| Required | Storage | 250 GB M.2 NVMe SSD | 1 | €23.88 | [M2 SSD](../components-orin/M2%20SSD.md) | Stores OS, Docker images, logs, clip buffers, and benchmark videos. |
| Required | Network | Ethernet or Waveshare AC8265 WiFi module and antennas | 1 | €0-22.92 | [WiFi antennas](../components-orin/WiFi%20antennas.md) | Prefer Ethernet for repeatable tests; use WiFi to reproduce field conditions. |
| Required | Power | Official-quality USB-C power supply for Jetson | 1 | not yet documented | Add exact part | Missing from the old BOM. Must be sized for Jetson, camera, SSD, and WiFi under load. |
| Required | Camera mount | Adjustable 1/4 inch camera wall mount | 1 | $9.59 | [Mounts](../components-orin/Mounts.md) | Useful for quick alignment. Mark final distance, height, and angle after each test. |
| Recommended | Temporary frame | 2020 aluminium extrusion pack | 1 pack | €40.62 | [2020 Aluminum Extrusion](../components-orin/2020%20Aluminum%20Extrusion.md) | Good for a lab fixture, not a field enclosure. |
| Recommended | Optical cover sample | Plexiglass/acrylic sheets | 1 pack | €8.32 | [Plexiglass](../components-orin/Plexiglass.md) | Use to test glare, blur, scratches, condensation, and cleaning. Do not assume it is production-grade. |
| Optional | Local setup display | 7 inch HDMI touchscreen | 1 | $47.99 | [Display](../components-orin/Display.md) | Bench-only. Remove from field and production BOMs. |
| Optional | Acrylic dev case | Acrylic case originally noted for Jetson Nano 2 GB | 1 | €11.36 | [Case](../components-orin/Case.md) | Treat as incompatible until Orin physical fit and cooling are confirmed. |

## Component decisions for Phase 1

| Decision | Recommendation | Why |
| --- | --- | --- |
| Compute | Keep Jetson Orin Nano as the reference. | It gives the fastest route from Python model code to edge inference and reduces early software risk. |
| Camera interface | Keep USB UVC in lab. | USB cameras are easiest to inspect with `v4l2-ctl`, `ffmpeg`, GStreamer, OpenCV, and browser previews. |
| Lens | Use varifocal only for discovery. | The lab should discover working distance and entrance coverage before a fixed lens is selected. |
| Storage | Keep NVMe. | Video datasets, Docker images, and local buffers quickly exceed small built-in storage. |
| Networking | Test both Ethernet and WiFi. | Ethernet isolates camera/model bugs; WiFi reveals retry and bandwidth behavior. |
| Enclosure | Use fixture, not final enclosure. | A desk fixture should make camera movement and cable access fast. Field sealing is Phase 2. |
| Power | Add a real power meter to the BOM. | FPS/W and Wh/day cannot be estimated reliably from datasheets. |

## Missing lab items to add before the next build

| Missing item | Why it is needed |
| --- | --- |
| USB-C inline power meter or AC wall power meter | Required for FPS/W and energy benchmarks. |
| Known test video set or printed moving-target fixture | Makes model changes comparable. |
| USB3 cable of the same length planned for field tests | Long or poor cables can cause camera drops. |
| Lens lock or thread-locking method | Prevents accidental focus/zoom changes during repeated tests. |
| Small fan or thermal probe | Helps detect thermal throttling before outdoor testing. |
| Label set for camera distance, angle, lens setting, and profile | Makes video datasets reproducible. |

## Alternatives not recommended for Phase 1 default

| Alternative | Why not default in lab | When to revisit |
| --- | --- | --- |
| Raspberry Pi 5 + Hailo AI HAT+ | Requires model conversion and Hailo runtime work before the algorithm is stable. | Phase 2 side-by-side benchmark or Phase 3 cost-down path. |
| RK3588 NPU board | Tooling and model conversion are less predictable than Jetson. | If video encoding and media pipeline efficiency become more important than ML ecosystem speed. |
| Coral TPU | Current YOLO-style detector may need major simplification. | If a very small telemetry-only model is trained. |
| Smart/IP camera with onboard AI | Can create vendor lock-in and less control over model iteration. | Long-term production research after count logic and dataset stabilize. |

## Estimated lab cost

Because the current notes mix USD and EUR, keep totals as planning ranges rather than a single quote:

- Required documented USD items: **$413.09** (`$249.00 + $154.50 + $9.59`).
- Required documented EUR items: **€90.15** (`€43.35 + €23.88 + €22.92`) before fixture/cover.
- Recommended fixture/cover EUR items: **€48.94** (`€40.62 + €8.32`).
- Optional bench/debug items: **$47.99 + €11.36**.

At a rough 1:1 USD/EUR planning rate, the current lab prototype is about **€550-650 before shipping, taxes, power supply, cables, power meter, and assembly time**.

## Exit criteria

- All required parts are documented with links or substitute rules.
- The camera can run for several hours without USB resets.
- The Jetson can process the reference clips at the target FPS profile.
- Telemetry and on-demand video can be demonstrated from the same hardware.
- Power and thermal measurements are recorded so Phase 2 does not inherit unknown energy risk.