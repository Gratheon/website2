---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Описание

Production BOM — это decision framework, а не финальный order list. Точное устройство нужно выбирать после того, как Phase 2 даст measured count accuracy, FPS/W, bandwidth, thermal and maintenance data.

Production BOM priorities differ from lab BOM:

- repeatable installation;
- safe power design;
- weatherproof serviceability;
- supply-chain resilience;
- remote diagnostics;
- manufacturable assembly and QA.

## Production BOM by subsystem

| Tier | Subsystem | Recommended component class | Qty | Rough cost | Better alternatives | Production notes |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | Compute | Raspberry Pi 5 + Hailo AI HAT+ 26 TOPS, Jetson Orin production module/carrier or RK3588 board | 1 | €120-350 | Smart camera module for future integrated SKU | Select by measured count accuracy per watt, not advertised TOPS. |
| Required | Camera sensor | Locked USB/CSI camera module with known sensor and driver support | 1 | €25-180 | Industrial board camera, IP camera with H.265, global shutter if needed | Freeze camera model/exposure profile after field tests. |
| Required | Lens | Fixed-focus or locked-focus lens matched to entrance geometry | 1 | €5-60 | Fixed board lens, M12 lens, CS lens with lock screw | Avoid customer-adjustable optics unless workflow needs it. |
| Required | Camera head housing | Weather-protected camera pod, hood, bracket, gasket, optical window | 1 | €20-100 | Integrated IP camera housing | Must be cleanable and repeatable. |
| Required | Main enclosure | UV-resistant IP65/IP67 enclosure or custom housing | 1 | €15-80 | Separate camera head + electronics box | Needs cable bend radius, thermal path and service access. |
| Required | Storage | Industrial microSD/eMMC/NVMe sized for logs and selected clips | 1 | €10-80 | No large storage for telemetry-only SKU | Use retention policy, not infinite storage. |
| Required | Power regulation | DC/DC regulators, fuse/protection, reverse-polarity protection, switch | 1 set | €10-60 | PoE board, solar charger, protected battery pack | Power design must match SKU. |
| Required | Connectors | M8/M12, sealed circular connectors or rated cable glands | as needed | €10-60 | Custom harness with overmolded connectors | Document pinouts before harness ordering. |
| Required | Network | Ethernet/PoE, WiFi, LTE gateway or local gateway link | 1 | €0-150 | LoRa/ESP-NOW telemetry gateway for non-video modes | Choose per SKU. |
| Required | Watchdog and service | Hardware watchdog, status LED/button, debug header/pogo pads | 1 set | €2-20 | Managed power switch/remote relay | Must recover without SSH where possible. |
| Required | Labels and identity | Device ID label, QR code, serial number, hardware revision label | 1 set | €1-5 | Laser marking or durable labels | Required for pairing and support. |
| Recommended | Thermal solution | Heatsink, heat spreader, fan only if necessary, thermal pad to enclosure | 1 set | €5-40 | Passive metal enclosure | Avoid fans in wet/dusty units unless service plan exists. |
| Recommended | Power telemetry | Fuel gauge, input voltage sense, battery temp for battery SKU | 1 set | €3-20 | INA219/INA226, MAX17048/LC709203 | Required for solar/battery SKU support. |
| Recommended | Factory test fixture | Camera target, labelled clip replay, network test, power measurement, seal checklist | 1 set | varies | Automated jig with QR scan/cloud registration | Production cannot rely on manual developer inspection. |
| Optional | LTE modem/router | LTE-M/NB-IoT for telemetry or LTE router for video | 1 | €30-180 | One shared apiary gateway | Cellular in every unit increases cost/power/data plans. |
| Optional | Solar kit | Panel, battery, charger, mount, cable, fuse, weather connector | 1 | €40-250 | Larger shared power/gateway installation | Only after measured Wh/day and winter target. |
| Optional | Illumination | IR or visible LED module with driver/diffuser | 1 | €5-50 | No night vision by default | Adds power and may disturb bees; validate before promise. |
| Optional | Environmental sensors | Temperature/humidity inside enclosure, ambient light | 1 set | €2-20 | Use existing beehive sensor node data instead | Useful diagnostics but not core entrance count value. |

## Compute candidate BOM notes

| Candidate | BOM impact | Add-on parts | Production concern |
| --- | --- | --- | --- |
| Jetson Orin Nano module/carrier | Highest compute cost and power, best ML ecosystem. | Carrier board, cooling, NVMe, WiFi/Ethernet, power supply. | Use for dev/premium powered SKU unless energy data justifies it. |
| Raspberry Pi 5 + Hailo AI HAT+ | Lower cost and likely better power for small detector. | Hailo HAT, camera adapter, cooling, storage, power supply. | Must prove model conversion, tracker CPU and thermal stability. |
| RK3588 board | Potentially good media codec + NPU integration. | Board-specific camera/network/storage accessories. | Vendor support and software maintenance risks. |
| IP/smart camera + small controller | Shifts video encode into camera. | Camera SDK, controller, power, gateway/control integration. | Need frame/metadata access for counting and Gratheon control. |

## Camera and optics BOM notes

| Item | Minimum production requirement | Better alternative |
| --- | --- | --- |
| Sensor | Known model, stable Linux driver, documented exposure controls. | Industrial board camera with long-term availability. |
| Shutter | Rolling shutter acceptable only if count tests pass. | Global shutter if fast bee motion creates systematic errors. |
| Lens | Fixed/locked focus, known focal length and FOV. | M12 lens family for different entrances. |
| Window | Clear, UV-stable, cleanable, tilted/hooded. | AR-coated acrylic/polycarbonate or glass with hydrophobic coating. |
| Bracket | Repeatable angle/distance, corrosion-resistant fasteners. | Custom entrance adapter with alignment marks. |
| Service | Replaceable camera head/cable. | Pre-assembled sealed camera-head module. |

## Power SKU BOM notes

| SKU | Power parts | Network parts | Video policy | Notes |
| --- | --- | --- | --- | --- |
| PoE powered | PoE splitter/PD board, regulator, protection | Ethernet gland/cable | Live and selected clips allowed | Best first customer-grade install if infrastructure exists. |
| Mains powered | Outdoor adapter, low-voltage DC cable, fuse/switch | WiFi/Ethernet | Live and selected clips allowed | Keep mains outside hobby enclosure. |
| Solar telemetry-first | Battery, charger, panel, fuel gauge, low-power regulator | LTE gateway or WiFi when available | Telemetry default, rare low-res clips | Requires aggressive sleep and measured Wh/day. |
| Research/dev | Bench supply or large battery | Lab WiFi/Ethernet | Flexible recording | Not customer default. |

## Connectorized subsystem BOM

| Interface | Pins | Suggested production connector | Signals | Service reason |
| --- | ---: | --- | --- | --- |
| Camera head | Depends on camera | Sealed USB-C/USB-A bulkhead, MIPI internal harness or Ethernet gland | Video/data/power | Replace camera without rebuilding enclosure. |
| Power input | 2-4 | Keyed waterproof connector or gland | DC +, DC -, optional sense | Prevent reversed polarity and water ingress. |
| Ethernet/PoE | 8 | Outdoor RJ45 gland or pigtail | Ethernet + PoE | Reliable powered installation. |
| Antenna | 1 | SMA bulkhead or internal antenna location | WiFi/LTE | Do not hide RF behind metal enclosure. |
| Service/debug | 4-10 | Internal JST, pogo pads or protected header | UART, USB, reset, boot, JTAG where needed | Factory flashing and recovery. |
| Optional sensors | 3-4 | M8/M12 or sealed gland | 3.3 V/5 V, GND, I2C/1-Wire | Future enclosure/environment sensors. |

## Supplier and sourcing rules

- Each critical component needs at least two approved sources or documented substitute.
- Camera, lens and enclosure changes require sample-clip regression test.
- Compute board changes require full model, thermal, power and video-session benchmark reruns.
- Connector, gland and cable diameter must be selected together.
- Battery chemistry and charger must be documented for safe shipping, charging and replacement.
- Labels must survive outdoor UV, rain and beekeeper handling.

## Production acceptance checklist

| Test | Purpose |
| --- | --- |
| Labelled video regression | Confirms count accuracy after hardware/model changes. |
| Live-session lifecycle | Confirms start, active, keepalive, timeout, stop and failure recovery. |
| Network outage and retry | Confirms telemetry and clips are queued safely. |
| Disk-full simulation | Confirms retention policy protects device. |
| Thermal soak | Confirms enclosure does not throttle or crash. |
| Rain/condensation test | Confirms optical path/electronics remain usable. |
| Cable pull and service test | Confirms connectors/strain relief survive handling. |
| Power brownout test | Confirms clean restart and useful reset telemetry. |
| Pairing test | Confirms web-app setup without manual DB edits. |

## Exit criteria

- Production BOM tied to chosen SKU, not generic wish list.
- Cost, power and bandwidth documented for selected quality profiles.
- Final parts include compute, camera, lens, enclosure, power, network, connectors, labels, packaging and QA fixture.
- Support engineer can identify hardware revision, firmware/model version, camera profile, power state, network state and last error from Gratheon.
