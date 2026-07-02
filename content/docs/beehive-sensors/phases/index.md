---
title: Product phases
order: 1
sidebar_position: 1
hide_table_of_contents: false
---

## Roadmap

Beehive IoT sensors are organized into three implementation phases. Each phase has its own scope, acceptance criteria, bill of materials, and next upgrade path.

| Phase | Scope | Primary output | BOM |
| --- | --- | --- | --- |
| [Phase 1 - Lab validation](lab.md) | Bench electronics and firmware/API proof | Reliable local readings and telemetry upload | [Lab BOM](../components/lab.md) |
| [Phase 2 - Field MVP](mvp.md) | First weatherproof outdoor hive scale | Pilot device with weight, climate, battery, and connectivity health | [Field MVP BOM](../components/mvp.md) |
| [Phase 3 - Production kit](production.md) | Repeatable sellable hardware | Calibrated kit, supportable enclosure, pairing, diagnostics, and gateway variants | [Production BOM](../components/production.md) |

## Sensor scope by phase

| Capability | Lab | Field MVP | Production |
| --- | --- | --- | --- |
| Weight | One test load cell | Single-point 100-200 kg cell or 4 x 50 kg bars | Calibrated frame with repeatable load path |
| Internal temperature | DS18B20 | Waterproof DS18B20 probe | Waterproof probe with service connector |
| Ambient humidity/temperature | Optional | SHT31/SHTC3/BME280 | SHT31/BME280 in vented protected enclosure |
| Battery telemetry | Optional resistor divider | Required voltage or fuel gauge | Required fuel gauge plus solar status |
| Display | Optional bench debug only | Not included | Not included by default |
| Acoustic sensor | Not included | Not included | Optional research variant |
| CO₂/VOC/PM sensors | Not included | Not included | Optional research variant |
| Tamper/vibration | Not included | Optional after battery reporting | Optional supported add-on |
| Connectivity | WiFi over USB-powered ESP32 | WiFi first | WiFi, LoRa gateway, or cellular gateway variant |

## Connectivity decision rule

Use **WiFi first, LoRa gateway second, cellular last**.

- WiFi keeps the lab and field MVP cheap, easy to debug, and compatible with the current prototype.
- LoRa or ESP-NOW gateway topology is better for apiaries where multiple hives are close to each other but WiFi is unavailable.
- Cellular should remain a later production option because it increases cost, power complexity, subscription support, and enclosure requirements.

## Product-page framing

The public product page should present the project as a guided DIY path:

1. **Hero message**: “Build a €45-90 DIY hive scale that streams weight, temperature, and humidity into Gratheon.”
2. **What you can detect**: honey flow, food shortage, sudden theft/storm movement, overheating, humidity risk, missing data.
3. **Three phases**: lab validation, field MVP, production kit.
4. **Compatibility badge**: “Works with Gratheon telemetry storage and timeseries analytics.”
5. **Install journey**: buy parts -> flash firmware -> calibrate scale -> pair hive -> view dashboard -> configure alerts.
6. **Roadmap**: LoRa gateway, cellular kit, acoustic sensor, tamper detection, and prebuilt enclosures.
7. **Call to action**: join pilot, request pre-flashed kit, or contribute firmware/BOM improvements.
