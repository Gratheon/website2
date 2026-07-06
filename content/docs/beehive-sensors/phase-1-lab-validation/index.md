---
title: Phase 1 - Lab validation
navTitle: Phase 1 - Lab
order: 1
sidebar_position: 1
hide_table_of_contents: false
---

Phase 1 is the bench prototype. It is intentionally simple: prove that the electronics, firmware, calibration workflow, and Gratheon telemetry ingestion work before spending effort on outdoor mechanics.

## Pages in this phase

- [Product description](product-description.md) - scope, wiring overview, calibration, and acceptance criteria.
- [Bill of materials](bill-of-materials.md) - parts to buy for the bench build.
- [Wiring diagrams](wiring-diagrams/overview.md) - detailed pin-by-pin wiring for every subsystem.

## Wiring diagram quick links

| Diagram | What it shows | When to read it |
| --- | --- | --- |
| [System overview](wiring-diagrams/overview.md) | Full system picture with all chains (power, weight, temperature, future expansion) | Start here — gives the big picture before wiring anything |
| [ESP32 ↔ HX711 + load cell](wiring-diagrams/esp32-to-hx711.md) | Pin-by-pin wiring for the weight chain, load-cell bridge colours, breadboard tips | When connecting the load cell and HX711 board |
| [ESP32 ↔ DS18B20](wiring-diagrams/esp32-to-ds18b20.md) | 1-Wire wiring with pull-up resistor, troubleshooting for common failures | When connecting the temperature probe |
| [Complete lab wiring](wiring-diagrams/full-system-wiring.md) | All GPIO pins in one table, breadboard row map, pre-power checklist | Final reference before first power-on |

## Phase outcome

A developer can connect ESP32, HX711, one load cell, and DS18B20 on a desk, flash firmware, calibrate with a known weight, and see accepted telemetry in Gratheon.
