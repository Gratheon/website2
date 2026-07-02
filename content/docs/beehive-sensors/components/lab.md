---
title: Phase 1 - Lab BOM
navTitle: Phase 1 - Lab
order: 1
---

## Description

The lab BOM is for a bench prototype. It proves the sensor chain, firmware, telemetry API contract, and calibration workflow before any weatherproofing or mechanical frame work starts.

## Functionality covered

- ESP32 reads one load cell through HX711.
- ESP32 reads one waterproof DS18B20 temperature probe.
- Firmware sends telemetry to `/iot/v1/metrics` every 30-60 seconds.
- Device is powered over USB.
- Setup and debugging happen over serial logs.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Purchase links | Notes |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | Microcontroller | ESP32 DevKit / ESP32-WROOM-32 board | 1 | €4-10 | [Existing AliExpress ESP32](ESP32.md), [Espressif ESP32-DevKitC at DigiKey](https://www.digikey.com/en/products/detail/espressif-systems/ESP32-DEVKITC-32E/12091810), [ESP32-DevKitC at Mouser](https://www.mouser.com/ProductDetail/Espressif-Systems/ESP32-DevKitC-32E) | Use a common USB-powered dev board for simplest onboarding. |
| Required | Weight ADC | HX711 load-cell amplifier breakout | 1 | €1-8 | [SparkFun HX711 breakout](https://www.sparkfun.com/products/13879), [Adafruit HX711 breakout](https://www.adafruit.com/product/5974), [Generic HX711 on AliExpress](HX711-bar.md) | SparkFun/Adafruit are easier for docs; AliExpress is cheaper. |
| Required | Test load cell | 1 kg to 50 kg bar load cell | 1 | €3-10 | [Existing 50 kg bar load-cell listing](HX711-bar.md), [SparkFun load cell category](https://www.sparkfun.com/categories/tags/load-cell), [Amazon load-cell kits](https://www.amazon.de/s?k=HX711+load+cell+kit) | Lab can use a small cell before the full hive scale frame exists. |
| Required | Waterproof temperature sensor | DS18B20 probe | 1 | €2-10 | [Existing AliExpress DS18B20](DS18B20.md), [Adafruit waterproof DS18B20](https://www.adafruit.com/product/381), [Amazon DS18B20 search](https://www.amazon.de/s?k=DS18B20+waterproof) | Use waterproof version even in lab so field wiring is similar. |
| Required | Prototyping wiring | Jumper wires, breadboard, screw terminals | 1 set | €3-8 | [Adafruit jumper wires](https://www.adafruit.com/product/153), [Amazon jumper-wire search](https://www.amazon.de/s?k=dupont+jumper+wires), local electronics shop | Screw terminals reduce intermittent sensor wiring. |
| Required | USB power/data | USB cable and laptop/USB charger | 1 | €0-5 | Local electronics shop, existing cable | Keep power simple in lab. |
| Optional | Pull-up resistor kit | 4.7 kΩ resistor for DS18B20 data line | 1 | <€1 | [Amazon resistor kit search](https://www.amazon.de/s?k=resistor+kit), local electronics shop | Needed for reliable 1-Wire communication if not built into probe board. |
| Optional | Bench display | LCD1602 I2C display | 1 | €2-6 | [Existing LCD1602 listing](display.md), [Amazon LCD1602 I2C search](https://www.amazon.de/s?k=LCD1602+I2C) | Debug only; do not include in outdoor MVP by default. |

## Exit criteria

- Weight reading is stable enough to detect known test weights.
- Temperature readings are visible in serial logs.
- A telemetry payload is accepted by `telemetry-api`.
- Gratheon UI can show the submitted history.
- Calibration factor can be stored and reused after restart.
