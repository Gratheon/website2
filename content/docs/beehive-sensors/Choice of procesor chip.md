---
title: Choice of processor chip
hide_table_of_contents: true
---

The first Gratheon beehive sensor kit should optimize for DIY availability, simple firmware support, and enough power for HTTPS telemetry. That makes **ESP32-WROOM DevKit** the default MVP choice.

## Recommendation

| Chip / board | Networking | Strength | Weakness | Gratheon use |
| --- | --- | --- | --- | --- |
| **ESP32-WROOM DevKit** | WiFi, BLE | Very common, cheap, Arduino-supported, enough RAM/CPU for TLS + HX711 + sensors + deep sleep. | Dev boards are not the lowest-power option; quality varies by clone. | **Default DIY MVP**. |
| ESP32-C3 | WiFi, BLE | Lower cost/power, RISC-V, modern Espressif support. | Fewer pins/peripherals; less headroom for future audio/ML. | Second supported board after MVP firmware stabilizes. |
| ESP32-S3 | WiFi, BLE | More RAM/CPU and USB; better for future audio/TinyML experiments. | More expensive than needed for a scale. | Acoustic/edge-ML prototypes, not base scale. |
| ESP8266 | WiFi | Cheap and proven for simple telemetry. | Older, less RAM, weaker TLS/support path. | Only for community ports, not official first kit. |
| STM32 / GD32 + radio | Depends on module | Stable embedded platform, good for custom low-power PCB. | Adds radio/module complexity and toolchain support burden. | Defer until custom PCB. |
| RP2040 + radio | Depends on module | Great tooling and IO. | No native WiFi on plain RP2040; higher integration burden. | Not recommended for MVP. |
| nRF52 | BLE | Excellent low-power BLE. | Needs gateway; not ideal for direct internet telemetry. | Useful for future sensor nodes, not first WiFi kit. |
| Arduino Mega / ATmega | None | Familiar educational board. | Needs extra networking, too bulky/power-hungry. | Avoid for product. |

## Connectivity decision rule

1. **WiFi first** for the public DIY kit: simplest onboarding and cheapest support.
2. **ESP-NOW or LoRa gateway second** for apiaries where multiple hives are near each other but there is no WiFi at every hive.
3. **LTE-M/NB-IoT cellular last** for paid remote-field kits because modems, antennas, SIM provisioning, and power management raise complexity and cost.

## Firmware implications

- Keep a single firmware codebase with board-specific pin maps.
- Default outdoor reporting interval should be 10–15 minutes; 1 minute is useful for demos but wastes battery.
- Use deep sleep between readings and power-gate the HX711/sensors where possible.
- Store WiFi, endpoint, `hiveId`, API token, send interval, and calibration factor in non-volatile memory.
- Send JSON to `POST /iot/v1/metrics` with `timestamp` and `dedupeKey` so retries are safe.

## Potential sources

- [https://www.lcsc.com/](https://www.lcsc.com/)
- [https://8020.net/shop](https://8020.net/shop)
- [https://www.v-slot.pl/](https://www.v-slot.pl/)
- [https://www.pcbway.com/](https://www.pcbway.com/)
- [https://www.dfrobot.com/](https://www.dfrobot.com/)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/boF4cX338k4" title="#345 ESP32 vs STM32: Which one is better (Bluepill)?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
