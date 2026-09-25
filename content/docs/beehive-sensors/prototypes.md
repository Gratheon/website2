---
title: Earlier prototypes
order: 6
sidebar_position: 6
hide_table_of_contents: false
---

The production kit on the [overview page](/docs/beehive-sensors/) grew out of two prototype phases. Their pages are kept for builders and for the design history, but they are no longer the product description.

| Phase | What it proved | Hardware | Cost | Pages |
| --- | --- | --- | ---: | --- |
| Phase 1 - Lab | Firmware, wiring, calibration and telemetry ingestion on a desk | ESP32 DevKit, HX711 breakout, one load cell, DS18B20, USB power | €20-35 | [Overview](phase-1-lab-validation/), [product description](phase-1-lab-validation/product-description.md), [system overview](phase-1-lab-validation/system-overview.md), [BOM](phase-1-lab-validation/bill-of-materials.md), [bench wiring](/docs/beehive-sensors/lab-wiring/) |
| Phase 2 - Field MVP | An outdoor DIY scale that a pilot beekeeper can install | DevKit + modules in an IP65 box, scale frame, 18650 battery shield, optional solar | €45-90 | [Overview](phase-2-field-mvp/), [product description](phase-2-field-mvp/product-description.md), [BOM](phase-2-field-mvp/bill-of-materials.md) |
| Phase 3 - Production | A repeatable, supportable, sellable kit that also fits the Robotic Beehive | Carrier PCB with ESP32-S3, AP62AFB single-point cell, plywood and thermo-pine case, 3D-printed parts, IP67 pod | ≈ €150-250 | [Overview](/docs/beehive-sensors/), [product description](product-description.md), [BOM](bill-of-materials.md), [3D model](3d-model.md) |

## What carried over

- **Firmware path:** ESP32 + HX711 + DS18B20 + HTTPS to `telemetry-api`, from Phase 1 unchanged. Production adds a pin map per hardware revision, BLE setup and device-health fields.
- **Sensor scope:** weight, internal temperature, ambient humidity and battery first. Sound, CO2 and tamper sensing stay research options ([research references](research-references.md)).
- **Cadence:** 30-60 s on the bench, 10-minute readings with batched uploads in the field.

## What changed for production

| Prototype choice | Production choice | Reason |
| --- | --- | --- |
| DevKit on jumpers or a breadboard | Carrier PCB with a pre-certified ESP32-S3 module | No loose wires; factory flashing over pogo pads; lower sleep current. |
| 4 × 50 kg bar cells or a generic frame | One AP62AFB single-point cell with brackets | One calibration, one cable, reads correctly when the hive is off-centre. |
| IP65 junction box with glands | IP67 pod with M8 field connectors | Probe, cell and panel can be replaced without opening the enclosure. |
| Battery shield and LCD | 1S 18650 holder, BQ24074, fuel gauge, status LED and magnet switch | Months on batteries; no buttons or display that can leak or drain power. |
| Stand-alone only | Same scale and pod in the Robotic Beehive | One design for both products. |
