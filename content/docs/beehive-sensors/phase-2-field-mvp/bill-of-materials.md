---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Description

The field MVP BOM is the first outdoor kit. It should be weatherproof, battery-powered, and useful for pilot beekeepers, but still built from common modules rather than a custom PCB.

## Functionality covered

- Measures hive weight with one 100-200 kg load cell or four 50 kg bar cells.
- Measures internal temperature with a waterproof DS18B20 probe.
- Measures ambient temperature and humidity in a vented protected location.
- Measures battery voltage or charge state for low-battery warnings.
- Reports every 10-15 minutes and batches data when WiFi is unavailable.
- Uses a weatherproof enclosure, cable glands, and field-safe wiring.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Purchase links | Notes |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | Microcontroller | ESP32 DevKit / ESP32-WROOM-32 board | 1 | €4-10 | [Existing AliExpress ESP32](../components/ESP32.md), [Espressif ESP32-DevKitC at DigiKey](https://www.digikey.com/en/products/detail/espressif-systems/ESP32-DEVKITC-32E/12091810), [ESP32-DevKitC at Mouser](https://www.mouser.com/ProductDetail/Espressif-Systems/ESP32-DevKitC-32E) | Same board as lab keeps support simple. |
| Required | Weight ADC | HX711 breakout | 1-4 | €1-16 | [SparkFun HX711 breakout](https://www.sparkfun.com/products/13879), [Adafruit HX711 breakout](https://www.adafruit.com/product/5974), [Existing HX711/bar-cell notes](../components/HX711-bar.md) | Use one HX711 per independent load-cell channel. |
| Required | Load cell option A | 100-200 kg single-point load cell | 1 | €12-35 | [Alibaba industrial load-cell examples](../phase-3-production-kit/bill-of-materials.md#supplier-examples-to-compare), [Amazon single-point load-cell search](https://www.amazon.de/s?k=200kg+single+point+load+cell), [AliExpress load-cell search](https://www.aliexpress.com/wholesale?SearchText=200kg+single+point+load+cell) | Best for simpler mechanics if the frame transfers load correctly. |
| Required | Load cell option B | 50 kg bar load cells | 4 | €8-25 total | [Existing 50 kg bar load cells](../components/HX711-bar.md), [Amazon HX711 4-load-cell kit search](https://www.amazon.de/s?k=HX711+4+load+cell+kit), [AliExpress 50 kg load-cell search](https://www.aliexpress.com/wholesale?SearchText=50kg+load+cell+HX711) | Easier to source, harder to make mechanically repeatable. |
| Required | Internal temperature | Waterproof DS18B20 probe | 1 | €2-10 | [Existing AliExpress DS18B20](../components/DS18B20.md), [Adafruit waterproof DS18B20](https://www.adafruit.com/product/381), [Amazon DS18B20 search](https://www.amazon.de/s?k=DS18B20+waterproof) | Place near brood-area edge or under cover without disturbing colony. |
| Required | Ambient humidity/temperature | SHT31, SHTC3, or BME280 module | 1 | €3-15 | [Adafruit SHT31-D breakout](https://www.adafruit.com/product/2857), [SparkFun Qwiic SHTC3](https://www.sparkfun.com/products/16467), [Adafruit BME280 breakout](https://www.adafruit.com/product/2652) | Prefer SHT31/SHTC3 over DHT-style sensors for field reliability. |
| Required | Weather enclosure | IP65 electrical junction box | 1 | €6-18 | [Amazon IP65 junction-box search](https://www.amazon.de/s?k=IP65+junction+box), [AliExpress waterproof junction-box search](https://www.aliexpress.com/wholesale?SearchText=IP65+junction+box), local electrical supplier | Cheaper and easier than custom aluminium for MVP. |
| Required | Cable glands | PG7/PG9 waterproof cable glands | 3-6 | €3-10 | [Amazon cable-gland search](https://www.amazon.de/s?k=PG7+cable+gland), [AliExpress cable-gland search](https://www.aliexpress.com/wholesale?SearchText=PG7+cable+gland), local electrical supplier | Required for probe, load-cell, solar, and battery cables. |
| Required | Battery power | Protected 18650 cells plus holder or USB power bank | 1 set | €8-25 | [Existing 18650 battery notes](../components/battery.md), [Existing 18650 shield](../components/battery-shield.md), [Amazon 18650 holder search](https://www.amazon.de/s?k=18650+battery+holder) | Use protected cells and conservative charging design. |
| Recommended | Battery telemetry | MAX17048, INA219, LC709203, or resistor divider | 1 | €1-10 | [Adafruit MAX17048 fuel gauge](https://www.adafruit.com/product/5580), [Adafruit LC709203F fuel gauge](https://www.adafruit.com/product/4712), [Adafruit INA219 current sensor](https://www.adafruit.com/product/904) | Needed for low-battery alerts and field support. |
| Recommended | Solar charging | 5-6 V solar panel plus Li-ion charger module | 1 | €8-25 | [Adafruit USB/DC/Solar LiPo charger](https://www.adafruit.com/product/390), [Amazon 6 V solar panel search](https://www.amazon.de/s?k=6V+solar+panel), [AliExpress CN3065 solar charger search](https://www.aliexpress.com/wholesale?SearchText=CN3065+solar+charger) | Use only after battery-only baseline is measured. |
| Recommended | Mechanical frame | Aluminium profile or stainless mounting parts | as needed | €20-80 | [Existing aluminium profile](../components/aluminium-profile.md), [Existing screws](../components/screws.md), local hardware store | MVP can use commodity profile before production frame design. |
| Recommended | Wire ferrules / Wago / screw-terminal blocks | Small field-wiring kit | 1 set | €3-12 | Local electrical supplier, Amazon wiring-terminal search | Makes cable replacement cleaner than soldered wire bundles. |
| Optional | Bench/service display | LCD1602 I2C display | 1 | €2-6 | [Existing LCD1602 notes](../components/display.md) | Use only for service/debug builds, not default field kit. |

## Connector and cable plan

| Cable | Minimum MVP approach | Better MVP approach | Production upgrade path |
| --- | --- | --- | --- |
| Load cell | Cable gland directly into enclosure | Gland plus internal screw-terminal strain relief | Shielded cable to M12 or rated circular connector. |
| DS18B20 | Probe cable through PG7 gland | 3-pin waterproof inline connector | M8 3-pin sensor connector. |
| Solar panel | Dedicated gland | 2-pin waterproof inline connector | Locking keyed connector with polarity marking. |
| Ambient sensor | Inside vented enclosure pocket | Remote small sensor pod | Replaceable pod with gasket and hydrophobic vent. |

## Installation consumables

- UV-resistant zip ties or stainless cable clips.
- Butyl tape or silicone gasket sheet only where the enclosure vendor allows it.
- Rubber feet or anti-slip pads between frame and hive stand.
- Stainless screws/bolts for wet outdoor use.
- Labels for device ID, hive ID, firmware version, and calibration date.

## Exit criteria

- Device survives rain-protected outdoor operation without water ingress.
- Weight trend is useful enough to detect daily gain/loss and sudden movement.
- Battery telemetry is visible or at least logged locally.
- The device can run for a realistic pilot interval with the selected report cadence.
- A beekeeper can install it without soldering inside the hive body.
