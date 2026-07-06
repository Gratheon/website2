---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Описание

Field MVP BOM превращает лабораторный прототип в pilotable outdoor unit. Он всё ещё должен позволять быстрые изменения, но больше не может опираться на loose desk hardware, exposed USB cabling и undocumented mounting geometry.

## Functionality covered

- One outdoor hive-entrance camera.
- Edge detection/tracking на Jetson или measured equivalent.
- Telemetry upload и cloud-controlled on-demand live video.
- Local clip buffering with retention limits.
- Weather-protected enclosure, power, network and service access.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Current source | MVP recommendation |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | Edge compute | Jetson Orin Nano Super Developer Kit | 1 | $249 | [Orin Nano](../components-orin/Orin%20Nano.md) | Keep for first field pilot unless Pi + Hailo benchmark successful. |
| Required | Camera | MOKOSE 4K USB UVC camera or equivalent | 1 | $154.50 | [Camera](../components-orin/Camera.md) | Acceptable if USB cable, exposure and outdoor image quality pass tests. |
| Required | Lens | Locked varifocal lens | 1 | €0-43.35 | [Camera lens](../components-orin/Camera%20lens.md) | Use varifocal for first pilots, then freeze focal length/focus. |
| Required | Storage | NVMe SSD, 250 GB or more | 1 | €23.88 | [M2 SSD](../components-orin/M2%20SSD.md) | Keep local buffering, enforce deletion policy. |
| Required | Outdoor enclosure | UV-resistant IP65/IP67 electrical box sized for compute, airflow and cable bends | 1 | €15-60 | Add exact part | Must replace acrylic dev case and loose fixture. |
| Required | Power supply | Outdoor-safe AC adapter, PoE splitter or sealed DC supply | 1 | €15-60 | Add exact part | Choose per pilot site. Stable power first, not solar promise. |
| Required | Cable glands | PG7/PG9/PG11 cable glands matched to cable diameters | 4-8 | €5-15 | Add exact part | Separate camera, power, network and optional service cables. |
| Required | Strain relief | Internal cable clamps, zip tie anchors, ferrules, terminal blocks | 1 set | €5-20 | Add exact part | Prevent cable pull from reaching boards/connectors. |
| Required | Camera bracket | Adjustable metal bracket or custom entrance mount | 1 | $9.59+ | [Mounts](../components-orin/Mounts.md) | Must hold angle after wind, rain and hive handling. |
| Required | Optical protection | Hood, tilted clear window or camera weather shield | 1 | €10-40 | [Plexiglass](../components-orin/Plexiglass.md) as test material | Use acrylic/polycarbonate only after glare/scratch/cleaning tests. |
| Required | Network | WiFi antennas, Ethernet or LTE router depending on site | 1 | €0-120 | [WiFi antennas](../components-orin/WiFi%20antennas.md) | Prefer Ethernet/PoE; WiFi pilot must record RSSI. |
| Required | Watchdog/service | Power-cycle plan, SSH access, logs, optional hardware watchdog | 1 | varies | Add exact part if hardware | Field MVP must recover after reboot/camera disconnect. |
| Recommended | Power meter | AC meter, PoE meter or USB-C/DC inline meter | 1 | €10-40 | Add exact part | Required to decide whether solar is realistic. |
| Recommended | Thermal aids | Heatsink/fan included with Jetson, vent strategy, thermal probe | 1 set | €5-30 | Add exact part | Outdoor enclosure can raise board temperature quickly. |
| Recommended | Service indicators | Small status LED, service button or local setup endpoint | 1 | €1-10 | Add exact part | Helps field debugging without permanent display. |
| Optional | Local display | 7 inch HDMI touchscreen | 1 | $47.99 | [Display](../components-orin/Display.md) | Use only during installation, not permanently outdoors. |
| Optional | Battery test pack | Battery and DC regulator sized for short test windows | 1 | €30-150 | Add exact part | For energy experiments, not default MVP promise. |
| Optional | LTE connectivity | LTE router or USB modem with outdoor antenna | 1 | €50-200 | Add exact part | Use for remote pilots only after strict data policy. |

## Better alternatives to evaluate during MVP

| Candidate | Why evaluate | MVP test condition | Risk |
| --- | --- | --- | --- |
| Raspberry Pi 5 + Hailo AI HAT+ 26 TOPS | Lower cost and likely lower power than Jetson. | Same clips, count logic and telemetry contract. | Model conversion and tracker CPU overhead. |
| RK3588 NPU board | Potential stronger media codec story plus integrated NPU. | Test AI + H.265 encode + upload together. | RKNN tooling and board support vary. |
| CSI/MIPI camera | More compact/production-like than USB. | Compare image quality, driver stability and cable limits. | FPC cables fragile outdoors. |
| IP camera with H.265 | Offloads video encoding and may simplify live view. | Confirm edge app can access frames for AI with acceptable latency. | Power, vendor lock-in and stream synchronization. |
| PoE power/network | One cable solves reliable power and data for fixed sites. | Pilot at apiary with Ethernet/outdoor bridge. | Less useful for remote apiaries. |

## Enclosure and mounting BOM details

| Subassembly | Required parts | Notes |
| --- | --- | --- |
| Electronics box | IP65/IP67 enclosure, gasket, mounting plate, standoffs, cable glands, strain relief | Leave space for airflow and cable bend radius. |
| Camera head | Camera, lens, bracket, sun/rain hood, clear window/shield, cleaning access | Avoid flat reflective windows facing sun. |
| Power entry | Outdoor-rated adapter/PoE splitter/DC cable, fuse/protection, switch if appropriate | Keep power cable separate where practical. |
| Network entry | Ethernet gland, external WiFi antenna bulkhead or LTE router mount | Do not trap antennas inside metal enclosures. |
| Service kit | Labels, QR/device ID, screwdriver access, spare gasket, cleaning cloth | Field service should be repeatable. |

## Video and storage policy for MVP

| Storage item | Default | Reason |
| --- | --- | --- |
| Telemetry | Upload all buckets, batch on failure | Primary product data is small. |
| Live video | Publish only while session is active | Avoids constant bandwidth and cloud cost. |
| Event clips | Store/upload only anomalies, manual recordings and QA samples | Keeps model-improvement path without endless storage. |
| Local retention | Delete oldest clips after age or disk threshold | Prevents full disk from killing device. |
| Overlay video | Off by default, on for debug | Useful for QA but not permanent evidence format. |

## Items that should not be in default Field MVP

| Item | Reason |
| --- | --- |
| Permanent HDMI touchscreen | Adds openings, power draw and breakage risk. |
| Acrylic Jetson Nano case | Not weatherproof and may not fit/cool Orin. |
| Continuous S3 video upload | Too expensive in bandwidth, edge CPU, cloud CPU and storage. |
| Solar as unmeasured default | Jetson-class all-day vision can require large panels/batteries. |
| Unlocked varifocal lens after installation | Makes count changes hard to interpret. |

## Exit criteria

- Exact enclosure, power, cable gland and mount parts are documented after first pilot order.
- Unit survives outdoor operation without water ingress in realistic pilot conditions.
- Camera remains aligned/focused after normal hive handling.
- Telemetry continues after network outages and reboots.
- Power/bandwidth measurements are enough to size production path.
