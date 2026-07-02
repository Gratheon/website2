---
title: Phase 1 - Lab validation
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Goal

The lab phase is a table-top electronics build. It should be cheap, easy to rewire, and easy to debug over USB serial. It does not need outdoor power, enclosure sealing, solar charging, or a final mechanical scale frame.

Use this phase to validate:

- ESP32 firmware build and flashing flow.
- HX711 and load-cell readings.
- DS18B20 internal temperature readings.
- Local calibration and tare logic.
- JSON upload to `/iot/v1/metrics`.
- Gratheon chart visibility and missing-data behavior.

## Functionality

- Reads one load cell through HX711.
- Reads one waterproof DS18B20 probe.
- Sends telemetry every 30-60 seconds for demos and debugging.
- Runs from USB power.
- Uses serial logs for setup and troubleshooting.
- Stores only minimal configuration: endpoint URL, API token, `hiveId`, and calibration factor.

## Bill of materials

The detailed purchase list is in [Phase 1 - Lab BOM](../components/lab.md). The core parts are ESP32, HX711, one low-cost load cell, DS18B20, jumper wires, breadboard or screw terminals, and USB power.

## Telemetry API contract

For lab validation, devices should use the REST endpoint already exposed by telemetry-api:

```http
POST https://telemetry.gratheon.com/iot/v1/metrics
Authorization: Bearer <api-token>
Content-Type: application/json
```

```json
{
  "hiveId": "54",
  "timestamp": 1717238400,
  "dedupeKey": "esp32-54:1717238400",
  "fields": {
    "temperatureCelsius": 34.2,
    "humidityPercent": 61.5,
    "weightKg": 47.8
  }
}
```

The same contract should be reused in later phases so the firmware does not diverge from the current ingestion path.

## Firmware changes to prioritize

- Support phase profiles: `lab`, `field-mvp`, and `production`.
- Report every **30-60 seconds** in lab mode.
- Add first-run setup fields for `deviceId`, `hiveId`, API token, endpoint URL, send interval, and calibration factor.
- Add a calibration flow: tare empty scale, place known weight, calculate factor, store in non-volatile memory.
- Send JSON to `/iot/v1/metrics` with `timestamp` and `dedupeKey`.
