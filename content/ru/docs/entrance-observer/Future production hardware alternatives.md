---
title: Будущие production hardware alternatives
navTitle: Future hardware
sidebar_position: 8
hide_table_of_contents: false
---

Эта страница сравнивает будущие hardware paths для production Entrance Observer, который должен сохранить ту же user-facing functionality, что и текущий Jetson Orin prototype:

- capture hive entrance video;
- detect and track bees locally;
- send direction-aware bee traffic telemetry to Gratheon;
- upload selected clips for playback, audits and model improvement;
- operate reliably in an outdoor apiary with weak network connectivity;
- reduce energy enough for solar-powered autonomous deployments.

## Recommendation summary

Use **Jetson Orin Nano** as reference development platform until model quality and tracking behavior are stable, but **do not** assume it is the best production device. Production decision must be based on four axes:

1. **AI efficiency for our model** — FPS per watt and count accuracy for custom bee detector/tracker.
2. **Video compression** — preferably hardware H.265/HEVC for selected diagnostic clips.
3. **Energy profile** — average Wh/day with night sleep, event-triggered upload and cellular modem duty cycling.
4. **Connectivity mode** — WiFi for urban/apiary-with-internet mode, LTE/GSM or LoRa telemetry for field deployments.

Likely production path:

1. **Now — reference platform:** Jetson Orin Nano Super Developer Kit for model iteration and debugging.
2. **Next — cost-down AI prototype:** Raspberry Pi 5 + AI HAT+ 26 TOPS with same `entrance-observer` API contract.
3. **Next — bandwidth/solar prototype:** evaluate platform with hardware H.265 encode, or external camera/encoder module, because Jetson Orin Nano does not include NVENC.
4. **Later — two product SKUs:** urban WiFi/video SKU and field solar telemetry-first SKU.

## Current model and workload

Current `entrance-observer` repo gives concrete workload to benchmark instead of comparing theoretical TOPS only.

| Workload item | Current state | Production implication |
| --- | --- | --- |
| Detector | Current checkpoint is YOLOv8n-derived custom bee detector trained as one class (`bee`) from `weights/best.pt`; README calls it YOLO 11 custom bee weights. Metadata: `imgsz=640`, 129 layers, 3,011,043 parameters, 8.2 GFLOPs, about 6 MB `.pt`. | Small detector and good candidate for TensorRT/HailoRT conversion. Benchmark exact model. |
| Tracker | Ultralytics `model.track(..., persist=True)` with track history. | Benchmark must include detection + tracking + counting, not detector-only FPS. |
| Count logic | Line/rectangle crossing, producing `bees_in`, `bees_out`, `detected_bees`, `net_flow`, speed metrics, interactions and track history. | Telemetry payload is tiny; full video optional. |
| Capture defaults | Runtime defaults 640x480@30 FPS; README also mentions 1280x720@15 FPS over USB2 on Jetson Orin Nano. | Use 720p/15 FPS and 640x480/30 FPS benchmark points. |
| Upload video defaults | Detection upload video defaults to 320x240, chunk length defaults 20s in code, README examples 30-60s. | Upload clips should be downscaled/capped in FPS. |
| Bandwidth optimization already present | Skips video upload when no bees were incoming/outgoing. Night sleep defaults 22:00-06:00 / day 06:00-22:00. | Field mode should extend: upload telemetry always, video only sampled/events/manual. |

## AI efficiency benchmark plan

| Metric | How to measure | Why it matters | Production target |
| --- | --- | --- | --- |
| Detector + tracker FPS | Same representative video set through `entrance-observer`, including `model.track`, overlays off, telemetry on. | Generic TOPS excludes tracker overhead. | Sustained FPS above minimum: start 15 FPS at 720p or 30 FPS at 640x480. |
| FPS/W | Measure wall power with USB-C/PoE inline meter while processing fixed clips. | Solar sizing depends on real power. | Prefer at least 2x better FPS/W than Jetson reference before switching. |
| Joules per 20s chunk | Power meter Wh delta for one chunk. | Maps to energy per observation window. | Optimize chunk scheduling and sleep. |
| Count accuracy per watt | Compare `bees_in/out` to labelled clips and divide by average watts. | Fast but inaccurate low-power system is not useful. | Select lowest Wh/day device meeting accuracy tolerance. |
| CPU headroom | Track CPU while camera, AI, telemetry, video encode and upload run together. | Software encode can starve tracking/upload. | Keep headroom for watchdog, retry queue, modem and local UI. |
| Thermal stability | Run 4-8h in enclosure-like temperature. | Solar field units will be sealed/hot. | No throttling that changes count accuracy. |

## Expected AI efficiency by platform

| Platform | AI runtime for our detector | Expected efficiency | Main risk | Decision |
| --- | --- | --- | --- | --- |
| Jetson Orin Nano Super | TensorRT/CUDA via Ultralytics export path | High AI headroom, moderate-to-high system power | Great AI but weak video encoding because Orin Nano lacks NVENC. | Keep as reference and premium dev platform. |
| Raspberry Pi 5 + AI HAT+ 26 TOPS | ONNX/TFLite to HailoRT | Likely best cost/power candidate if conversion succeeds | Hailo compiler/operator support and tracker CPU overhead. | Build next prototype. |
| Raspberry Pi 5 + AI HAT+ 13 TOPS | HailoRT | Lower power/cost, less headroom | May be too tight for robust tracking. | Test only after 26 TOPS works. |
| RK3588 NPU board | RKNN | Potential low cost and decent power | Tooling/operator support and maintainability. | Third priority after Hailo. |
| Coral TPU | TFLite Edge TPU | Very low power for supported models | YOLO-style model may need major simplification. | Only for simplified telemetry-only model. |
| MCU/NPU smart camera | Vendor-specific | Could be best long-term solar option | Integration cost and model lock-in. | Research after dataset/model stabilizes. |

## Video encoding and bandwidth

Product should not stream continuous video. It should upload telemetry continuously and upload short clips only for debugging, user review, model improvement or anomalies.

Important hardware finding: **Jetson Orin Nano does not have NVIDIA NVENC engine**. NVIDIA documents software encode for Orin Nano. This means Jetson Orin Nano is excellent for AI, but not automatically excellent for low-power H.265/H.264 compression.

| Mode | Video behavior | Codec target | Network assumption | Product use |
| --- | --- | --- | --- | --- |
| Urban WiFi mode | Upload selected detection clips; allow higher sampling. | H.265 preferred, H.264 acceptable. | WiFi/Ethernet available. | User playback, model QA, installation debugging. |
| Field LTE/GSM mode | Upload telemetry always; only low-res sampled/anomaly clips. | H.265 strongly preferred if hardware encode exists. | Metered mobile data. | Remote apiary monitoring without high data bills. |
| LoRa telemetry mode | No video upload by default; movement buckets and health only. | None, video stored locally if storage exists. | LoRaWAN/private LoRa or constrained link. | Solar autonomous telemetry-only deployment. |
| Service visit mode | Store full-quality clips locally for later download. | Any local efficient format. | Technician has local WiFi/USB. | Retraining and diagnostics without cellular data. |

## Encoding comparison

| Platform | Hardware H.265 encode suitability | Impact on Entrance Observer |
| --- | --- | --- |
| Jetson Orin Nano | Poor for hardware encode: no NVENC. H.264 software encode documented; H.265 software adds CPU/power load. | Use for AI reference; avoid solar video-heavy deployments or pair with external encoder/camera. |
| Jetson Orin NX / AGX Orin | Better candidate because higher Orin families include NVENC-class support. | More expensive, but better for premium video SKU. |
| Raspberry Pi 5 + Hailo | AI accelerator separate from video pipeline. H.265 path must be verified for exact OS/camera. | Good cost-down AI candidate; video encode benchmark separately. |
| RK3588 board | Often attractive for hardware codecs and integrated NPU. | Worth testing if Hailo conversion fails or H.265 central. |
| IP camera module with onboard H.265 | Camera handles encode; edge device handles AI from frames/secondary stream. | Strong for bandwidth but can complicate frame access, latency, power and enclosure. |

## Bandwidth policy

| Policy | Urban WiFi default | Field solar default |
| --- | --- | --- |
| Telemetry | Upload every chunk or every 1-5 minutes. | Upload summaries or batch every 5-15 minutes. |
| Clip resolution | 640x480 or 720p for selected clips. | 320x240 or 480p only when needed. |
| Clip FPS | 10-15 FPS enough for review. | 2-10 FPS depending on event severity. |
| Clip trigger | Movement present, user debug, random QA sampling. | Anomaly, large traffic change, manual request, low-rate sampling. |
| Local retention | 1-7 days depending on storage. | 7-30 days if storage allows, delete oldest first. |
| Upload retry | Immediate when connected. | Batch/backoff to protect modem energy/data. |

## Energy and solar autonomy

Solar autonomy should be designed around **average Wh/day**, not peak watts. Current app already sleeps at night and skips empty video uploads; production should deepen this into explicit power modes.

| Mode | Camera | AI | Network | Video upload | Purpose |
| --- | --- | --- | --- | --- | --- |
| Active observation | On | On | WiFi/LTE on or periodic | Selected clips | Daytime bee traffic monitoring. |
| Telemetry-only active | On or low FPS | On at reduced FPS | Periodic | Off | Field mode when energy/data budget low. |
| Idle/day low traffic | Low FPS or periodic sampling | Burst only | Off except heartbeat | Off | Save power during low traffic. |
| Night sleep | Off | Off | Off except optional heartbeat | Off | Bees are not visible; app supports night sleep. |
| Maintenance | On | On | Local WiFi AP / SSH | Optional | Installation and service visit. |

## Solar sizing checklist

| Design input | Why it matters | Initial target to validate |
| --- | --- | --- |
| Average active watts | Dominates panel and battery size. | Measure per platform with camera + AI + telemetry. |
| Active hours/day | Bee activity is daytime, not 24h. | Start with 16h active, 8h sleep; tune by season/location. |
| Sleep watts | Solar autonomy fails if standby high. | Target sub-watt sleep for field SKU if hardware supports it. |
| Modem burst watts | LTE can spike during attach/upload. | Size supercapacitor/battery and batch uploads. |
| Worst-case sunless days | Determines battery. | 2-3 days hobby/urban, 5+ days remote paid field units. |
| Winter solar insolation | Estonia/northern climates harsh. | Field SKU may need telemetry-only winter mode. |

## Connectivity variants

Likely need two product modes because bandwidth and power differ.

### Urban WiFi/video SKU

| Component | Recommendation | Why |
| --- | --- | --- |
| Network | WiFi 5/6 or Ethernet; optional local AP setup mode. | Cheap, high bandwidth, easier debugging. |
| Uploads | Telemetry + selected video clips. | User playback and model QA. |
| Compute | Jetson Orin Nano for dev/premium, Pi 5 + Hailo for production cost-down. | AI quality first, then cost. |
| Storage | 128-256 GB NVMe or high-endurance SD/eMMC. | Local clip retention and retry queue. |
| Power | Mains/USB-C/PoE preferred. | Video uploads/local UI less constrained. |

### Field solar telemetry SKU

| Component | Recommendation | Why |
| --- | --- | --- |
| Network | LTE-M/NB-IoT/4G for telemetry and rare clips; LoRa/LoRaWAN for telemetry-only. | Remote apiaries often lack WiFi. |
| Uploads | Telemetry always, clips rarely. | Saves data and power. |
| Compute | Pi + Hailo, RK3588 or integrated vision processor if benchmarks pass. | Needs lower Wh/day than Jetson-class all-day video. |
| Storage | Local ring buffer for clips and retry queue. | Handles offline periods and service downloads. |
| Power | Solar/battery sized from measured Wh/day. | Avoid untested solar promises. |

## Recommended production architecture boundary

Keep software boundaries stable so hardware can change:

| Boundary | Production requirement |
| --- | --- |
| Camera to edge app | Abstract capture source so USB UVC, CSI, IP camera and Pi camera can be swapped. |
| Model runtime | Abstract inference backend for TensorRT, HailoRT, ONNX Runtime, RKNN or vendor runtime. |
| Metrics upload | Keep same `telemetry-api` schema for bee movement buckets. |
| Video upload | Keep `gate-video-stream` upload/playback optional and event-triggered. |
| Device management | Keep device ID, hive ID, health telemetry, logs, update state, energy state and network state independent from vendor. |
| Connectivity profile | Support WiFi/video and field telemetry profiles with same app contract. |

## Evaluation plan

1. **Freeze benchmark input** — representative Jetson clips: sunny/cloudy/rain/low-light, high/low traffic, clean/dirty cover, challenging shadows and candidate product optical window.
2. **Define acceptance metrics** — bee movement count error, direction accuracy, sustained FPS, FPS/W, Wh/day, video bytes/event, offline operation and serviceability.
3. **Port model/runtime** — export `weights/best.pt` to ONNX, benchmark TensorRT on Jetson, convert/benchmark HailoRT for Pi AI HAT+ 26 TOPS, then test video encode separately.
4. **Compare total assembled cost** — include compute, camera/lens, encoder, storage, power, network/modem, solar, enclosure, assembly/flashing and expected support burden.

## Decision matrix for production

| If benchmark result is... | Choose... | Reason |
| --- | --- | --- |
| Hailo 26 TOPS matches Jetson count accuracy/FPS and video encode acceptable | Raspberry Pi 5 + AI HAT+ 26 TOPS | Best near-term cost-efficient path. |
| Hailo matches AI but video encode weak | Pi/Hailo + lower video policy or external/on-camera H.265 | Keep low AI cost while solving bandwidth separately. |
| Jetson much more accurate or easier to maintain | Jetson Orin for early production | Ship reliability first, continue cost-down in parallel. |
| Video upload becomes central requirement | Jetson Orin NX/AGX or media-focused platform with hardware H.265 | Orin Nano lacks NVENC. |
| Field solar budget cannot support SBC-class compute | Telemetry-first SKU with aggressive duty cycling or integrated vision processor | Product may need two hardware classes. |
| Simple model sufficient after field validation | Evaluate RK3588/Coral/integrated smart camera | Cost-down only after model proven small. |

## Open questions

- Minimum acceptable FPS/resolution for reliable bee direction tracking?
- Does field mode require video playback, or is telemetry enough?
- Acceptable monthly data budget for LTE deployments?
- How many sunless days should solar SKU survive in target countries?
- One entrance only, or multiple cameras/entrances per device?
- Is night/low-light observation required, and what illumination is acceptable near bees?
- Should production kit be DIY, pre-assembled Gratheon hardware, or both?

## Sources checked

- Current `entrance-observer` README/source: custom YOLO bee detector, tracking/counting metrics, 640x480 defaults, 320x240 upload defaults, night sleep, skip empty uploads.
- NVIDIA Jetson Orin Nano Super Developer Kit page: $249 class device and 67 TOPS marketing specification.
- NVIDIA Jetson Linux documentation: Jetson Orin Nano has no NVENC and uses software encode guidance.
- Raspberry Pi AI HAT+/Hailo docs, RK3588/Radxa docs, Google Coral docs and LTE modem/enclosure references.
