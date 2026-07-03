---
title: Component analysis and alternatives
sidebar_position: 7
hide_table_of_contents: false
---

This page records the deeper component analysis behind the phase split. The current hardware is useful, but it should not be mistaken for the final production design.

## Summary recommendation

| Product phase | Recommended hardware posture | Why |
| --- | --- | --- |
| Phase 1 - Lab validation | Keep Jetson Orin Nano + USB UVC camera. | Fastest model iteration and easiest Linux video debugging. |
| Phase 2 - Field MVP | Use Jetson for first real-hive pilot unless a measured Pi + Hailo prototype is ready. Harden enclosure, power, mounting, and network first. | Field failures will come from weather, power, cable, camera placement, and support gaps before compute cost matters. |
| Phase 3 - Production kit | Select from Jetson production SOM/carrier, Raspberry Pi 5 + Hailo, RK3588, or smart camera based on measured count accuracy per watt. | Production must optimize accuracy, energy, bandwidth, serviceability, and BOM cost together. |

## Compute platform analysis

| Platform | Strengths | Weaknesses | Best use | Recommendation |
| --- | --- | --- | --- | --- |
| NVIDIA Jetson Orin Nano Super Developer Kit | Strong CUDA/TensorRT ecosystem, high AI headroom, easy PyTorch/Ultralytics path, good Docker workflow. | Higher power/cost, developer-kit form factor, thermal care required, not the best low-power video-encoding choice. | Lab reference, model development, powered pilot, premium/dev SKU. | Keep now. Do not assume it is the production default. |
| Raspberry Pi 5 + Hailo AI HAT+ 26 TOPS | Lower cost, likely lower power, strong camera ecosystem, good community, dedicated AI accelerator. | Requires model conversion and HailoRT pipeline work; tracker may still consume Pi CPU; thermal needs testing. | First cost-down production candidate. | Build a side-by-side benchmark after the Jetson baseline is stable. |
| Raspberry Pi 5 + Hailo AI HAT+ 13 TOPS | Cheaper than 26 TOPS and may be enough for a tiny model. | Less headroom for tracking, future model changes, and overlays. | Later cost-down variant. | Test only after 26 TOPS path works. |
| RK3588 NPU board | Attractive integrated NPU and media-codec potential. | RKNN tooling, board quality, long-term OS support, and camera support vary. | Media-heavy alternative if Hailo conversion is poor or H.265 matters most. | Third priority, but worth one controlled benchmark. |
| Coral TPU | Very low power for supported TFLite models. | Current YOLO-style bee detector may require major simplification. | Telemetry-only or tiny-model experiments. | Defer until there is a simplified model. |
| Smart/IP camera with onboard AI or encoder | Integrated sensor, enclosure, and H.265 can simplify video product. | Vendor lock-in, limited model control, API uncertainty, possible frame access latency. | Long-term integrated field SKU research. | Research after dataset, FOV, and count logic are stable. |

## Compute decision metrics

| Metric | Why it matters | Production target direction |
| --- | --- | --- |
| Count accuracy per watt | Combines user value with energy cost. | Choose the lowest-energy platform that meets count-quality tolerance. |
| Full-pipeline FPS | Detector-only FPS ignores tracking, counting, upload, and watchdog overhead. | 15 FPS at 720p or 30 FPS at 640x480 is a reasonable first target. |
| FPS/W | Converts benchmark results into solar and thermal requirements. | Prefer at least 2x improvement before switching away from Jetson reference. |
| Video encode load | Live and clips must not starve AI. | Hardware H.264/H.265 or camera-side encode is preferred for video SKU. |
| Thermal stability | Enclosures get hot. | No throttling that changes count behavior during 4-8 hour soak. |
| Maintainability | Field support matters as much as speed. | Stable OS, drivers, logs, remote update, and watchdog support. |

## Camera and optics analysis

| Current or candidate | Strengths | Risks | Better direction |
| --- | --- | --- | --- |
| MOKOSE 4K USB UVC camera | Easy Linux debugging, many resolutions, no CSI driver work, quick replacement. | Bulky USB cable, uncertain long-term supply, rolling shutter/exposure behavior unknown, not a sealed camera head. | Keep for lab and first pilot only if outdoor image tests pass. |
| Manual varifocal CS/C lens | Helps discover field of view, distance, and entrance coverage. | Installer can change focus/zoom; settings may drift; too much focal length can miss the landing board. | Use it for discovery, then freeze a fixed focal length or lock the lens mechanically. |
| CSI/MIPI board camera | Compact, lower cabling bulk, production-like integration. | FPC cable length and mechanical robustness are harder outdoors; driver support must be verified. | Evaluate after FOV is known and enclosure concept exists. |
| IP camera with H.265 | Camera can handle video compression and outdoor housing may be mature. | Edge AI needs frame access; latency and vendor APIs can complicate counting and live sessions. | Good candidate for video-heavy SKU if frame access is reliable. |
| Global-shutter camera | Reduces fast-motion distortion. | Higher cost and sometimes lower low-light quality. | Test only if rolling shutter causes count errors in labelled clips. |

## Camera-head production requirements

| Requirement | Why it matters | Practical implementation |
| --- | --- | --- |
| Fixed geometry | Count lines and regions depend on a stable view. | Bracket with alignment marks and documented distance/angle. |
| Locked optics | Focus drift looks like model regression. | Fixed-focus lens or lock screw/thread-lock after setup. |
| Lighting control | Bee entrance lighting changes quickly. | Hood, constrained exposure, sample clips at dawn/noon/cloud/rain. |
| Clean window | Glare, scratches, water drops, and condensation reduce detection quality. | Tilted AR-coated window, hood, drainage path, service cleaning access. |
| Replaceable head | Cameras fail or cables get damaged. | Sealed connector or replaceable camera-head subassembly. |

## Video encoding and bandwidth analysis

The product should not stream continuous video. It should upload movement telemetry continuously and publish high-quality video only when someone watches or when selected clips are needed.

| Mode | Recommended behavior | Reason |
| --- | --- | --- |
| Telemetry default | Upload movement and health metrics. | Small, durable, useful for charts and alerts. |
| On-demand live | Publish media through `gate-video-stream` only while a session is active. | Avoids constant bandwidth and keeps device private behind outbound connections. |
| Event clip | Upload anomaly/manual/QA samples. | Supports user review and model improvement without endless storage. |
| Service visit | Allow local high-quality clip download. | Avoids cellular data costs for dataset collection. |
| Continuous recording | Lab only. | Too expensive and noisy as a field default. |

## Storage analysis

| Storage option | Use | Risk | Recommendation |
| --- | --- | --- | --- |
| Consumer NVMe SSD | Lab and early field buffering. | Consumer storage may dislike heat, power loss, or vibration. | Good for Phase 1-2. Add retention limits and disk health telemetry. |
| Industrial microSD/eMMC | Low-cost production logs and small clips. | Lower capacity and write endurance if clip policy is too heavy. | Use only with strict retention and write-rate limits. |
| Industrial NVMe/eMMC | Video-heavy production SKU. | Higher cost. | Use when local video retention is part of the paid SKU. |
| Cloud-only video | No local storage beyond queue. | Fails during network outages. | Avoid for field units; keep local queue/buffer. |

## Network analysis

| Option | Strengths | Weaknesses | Best fit |
| --- | --- | --- | --- |
| Ethernet/PoE | Reliable data and power in one cable. | Requires infrastructure near hive. | First customer-grade powered installations. |
| WiFi | Cheap and easy for hobby apiaries near buildings. | Weak signal, enclosure RF issues, retries needed. | Field MVP and urban SKU. |
| LTE router/modem | Works in remote apiaries. | Data plan, high current bursts, antenna placement, recurring cost. | Remote paid SKU or shared apiary gateway. |
| Local gateway | One backhaul for multiple hives. | More system complexity. | Apiaries with many devices. |
| LoRa telemetry | Very low power and long range. | Not suitable for live video. | Telemetry-only bee-count summaries if no video is required. |

## Power analysis

| Power design | Strengths | Risks | Recommendation |
| --- | --- | --- | --- |
| Bench USB-C/DC | Fast development. | Not field-safe by itself. | Phase 1 only. |
| Outdoor mains to low-voltage DC | Stable pilot power. | Must avoid unsafe mains inside hobby enclosure. | Good Phase 2 pilot path. |
| PoE | Solves power and data together. | Needs Ethernet infrastructure. | Best powered production path where available. |
| Battery-only | Good for short energy experiments. | Runtime may be short for all-day vision. | Use to measure Wh/day, not as a default product claim. |
| Solar + battery | Attractive for remote apiaries. | Can become large and expensive with Jetson-class active power. | Production SKU only after measured duty-cycle and low-power mode design. |

## Enclosure and mechanical analysis

| Current item | Assessment | Production alternative |
| --- | --- | --- |
| 2020 aluminium extrusion | Great for lab fixtures and adjustable mounts. | Custom or repeatable bracket with corrosion-resistant fasteners. |
| Acrylic/plexiglass sheets | Useful for glare and condensation experiments. | UV-stable, cleanable, tilted optical window or camera hood. |
| Acrylic Jetson case | Not weatherproof and may not fit/cool Orin correctly. | IP-rated electronics box with thermal and cable-entry design. |
| Adjustable 1/4 camera mount | Good for discovery and first alignment tests. | Locked bracket with alignment marks and service instructions. |
| Loose USB and HDMI cables | Fine on desk. | Sealed cable entries, strain relief, no permanent display cable. |

## Final selection rule

A production component is acceptable only if it passes all four checks:

1. **Data quality** - count accuracy and confidence are good enough on labelled entrance clips.
2. **Energy and thermal** - the platform can run the target duty cycle without overheating or oversizing power.
3. **Serviceability** - support can diagnose camera, model, network, disk, and power state remotely.
4. **Manufacturability** - the part has stable supply, documented assembly, replaceable harnesses, and repeatable QA tests.