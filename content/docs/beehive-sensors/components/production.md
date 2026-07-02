---
title: Phase 3 - Production BOM
navTitle: Phase 3 - Production
order: 3
---

## Description

The production BOM is for a repeatable kit that Gratheon can sell, support, calibrate, and service. It should be based on field MVP evidence, not guessed upfront. The goal is supply-chain resilience, waterproof serviceability, consistent scale mechanics, and device health telemetry.

## Functionality covered

- Calibrated load-cell frame or repeatable calibration workflow.
- Secure device identity and web-app pairing.
- Battery, solar, and device-health telemetry.
- Waterproof connectors and strain relief for maintenance.
- Optional gateway connectivity for apiaries without WiFi.
- Optional research sensor variants after the base scale is reliable.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Purchase links | Notes |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | MCU module or carrier | ESP32-WROOM module, ESP32-C3 module, or pre-certified dev module | 1 | €3-12 | [ESP32 module at DigiKey](https://www.digikey.com/en/products/filter/rf-transceiver-modules-and-modems/872?s=N4IgTCBcDaIIwBYAMBmAlgOwM4F8g), [ESP32 modules at Mouser](https://www.mouser.com/c/semiconductors/wireless-rf-integrated-circuits/rf-modules/?m=Espressif%20Systems), [Existing ESP32 notes](ESP32.md) | Use pre-certified modules to reduce compliance risk. |
| Required | Custom PCB or carrier board | ESP32 carrier with HX711, power, connectors, and debug header | 1 | €5-25 | [JLCPCB](https://jlcpcb.com/), [PCBWay](https://www.pcbway.com/), [LCSC components](https://www.lcsc.com/) | Production should remove fragile jumper wiring. |
| Required | Scale frame | Aluminium or stainless calibrated hive-scale frame | 1 | €40-120 | [Existing aluminium profile](aluminium-profile.md), local metal workshop, [Alibaba platform-scale examples](#supplier-examples-to-compare) | Mechanical repeatability matters more than cheapest electronics. |
| Required | Load cell | 100-200 kg single-point or industrial platform-scale cell | 1 | €15-60 | [Amazon 200 kg load-cell search](https://www.amazon.de/s?k=200kg+load+cell), [AliExpress 200 kg single-point load-cell search](https://www.aliexpress.com/wholesale?SearchText=200kg+single+point+load+cell), [Alibaba supplier examples](#supplier-examples-to-compare) | Select after testing frame geometry. |
| Required | Weight ADC | HX711 or production-grade 24-bit ADC | 1 | €1-10 | [SparkFun HX711 breakout](https://www.sparkfun.com/products/13879), [Adafruit HX711 breakout](https://www.adafruit.com/product/5974), LCSC HX711 sourcing | HX711 is acceptable if field drift/noise is acceptable. |
| Required | Temperature probe | Waterproof DS18B20 with service connector | 1 | €3-12 | [Adafruit waterproof DS18B20](https://www.adafruit.com/product/381), [Existing DS18B20 notes](DS18B20.md), industrial M8/M12 probe suppliers | Add connector and strain relief for replacement. |
| Required | Humidity/ambient sensor | SHT31/BME280 in vented protected housing | 1 | €5-20 | [Adafruit SHT31-D breakout](https://www.adafruit.com/product/2857), [Adafruit BME280 breakout](https://www.adafruit.com/product/2652), distributor SHT31 modules | Use enclosure design that prevents condensation pooling. |
| Required | Power system | Protected battery pack, charger, fuse/protection, power switch | 1 | €15-45 | [Adafruit solar LiPo charger](https://www.adafruit.com/product/390), [Adafruit PowerBoost 1000](https://www.adafruit.com/product/2030), local battery-pack supplier | Production must document safe charging and replacement. |
| Required | Battery telemetry | MAX17048/LC709203 fuel gauge and optional solar voltage sensing | 1 | €3-12 | [Adafruit MAX17048 fuel gauge](https://www.adafruit.com/product/5580), [Adafruit LC709203F fuel gauge](https://www.adafruit.com/product/4712), [Adafruit INA219](https://www.adafruit.com/product/904) | Enables support workflows and proactive alerts. |
| Required | Enclosure | UV-resistant IP65/IP67 enclosure | 1 | €10-35 | [Hammond enclosure search at Mouser](https://www.mouser.com/c/enclosures/enclosures-boxes-cases/), [Amazon IP67 enclosure search](https://www.amazon.de/s?k=IP67+enclosure), local electrical supplier | Prefer consistent branded enclosures for production. |
| Required | Waterproof connectors | M8/M12 or rated cable glands/connectors | as needed | €8-35 | [M8 connector search at Mouser](https://www.mouser.com/c/connectors/circular-connectors/), [Amazon M8 waterproof connector search](https://www.amazon.de/s?k=M8+waterproof+connector), local electrical supplier | Makes probes and load cells replaceable. |
| Recommended | Solar panel | 5-6 V or 12 V panel sized from field energy data | 1 | €10-40 | [Adafruit 6 V solar panel](https://www.adafruit.com/product/1525), [Amazon 6 V solar panel search](https://www.amazon.de/s?k=6V+solar+panel), local solar supplier | Size after measuring sleep current and radio duty cycle. |
| Recommended | Gateway option | ESP32 LoRa, Raspberry Pi, or cellular gateway | 1 per apiary | €20-120 | [LilyGO LoRa32 examples](https://www.lilygo.cc/collections/lora), [Raspberry Pi](https://www.raspberrypi.com/products/), [Adafruit FONA/SIM module category](https://www.adafruit.com/category/281) | Prefer one gateway per apiary over cellular in every hive. |
| Optional | Tamper/vibration | IMU, tilt switch, or vibration module | 1 | €2-15 | [Adafruit LIS3DH accelerometer](https://www.adafruit.com/product/2809), [Existing tamper/vibration note](todo/Tampering%20-%20Vibration%20sensor.md), [AliExpress vibration sensor search](https://www.aliexpress.com/wholesale?SearchText=vibration+sensor+module) | Add only after weight and battery alerts are stable. |
| Optional research | Acoustic module | MEMS microphone or analog microphone module | 1 | €3-15 | [Adafruit I2S MEMS microphone](https://www.adafruit.com/product/3421), [Existing microphone note](todo/Microphone%20Amplifier%20Stable.md), [SparkFun microphone boards](https://www.sparkfun.com/categories/tags/microphone) | Requires placement and ML validation before product promise. |
| Optional research | CO₂/VOC/air-quality | ENS160, SCD40/SCD41, or other environmental module | 1 | €10-60 | [Adafruit SCD-40 CO2 sensor](https://www.adafruit.com/product/5187), [Existing air-quality notes](todo/Air%20Quality%20Sensor.md), [Existing ENS160 todo](todo/CO2%20sensor%20-%20ENS160.md) | High power and condensation risk, keep as research variant. |

## Supplier examples to compare

These are prototype/vendor research links, not final approved suppliers:

- [Alibaba industrial load-cell scale example](https://www.alibaba.com/product-detail/Weight-Pesage-Industrial-Balanzas-Load-Cell_1600454137483.html?spm=a2700.galleryofferlist.normal_offer.d_title.38c713a0EKDwRy&priceId=6e22a495b4744c7799663b3e1da26427)
- [Alibaba stainless waterproof scale example](https://www.alibaba.com/product-detail/Stainless-Steel-Waterproof-Weighing-Industrial-Scale_1600910558433.html?spm=a2700.details.popular_products.11.6a5948747Tm3az)
- [Pilot Scale bench-scale series](http://en.pilot-scale.com/product_category/Bench-scale-series.html)
- [Alibaba RS485 weighing scale example](https://www.alibaba.com/product-detail/30kg-RS485-Modbus-Weighing-Scale-with_1600883502607.html?spm=a2700.galleryofferlist.normal_offer.d_title.5ce913a08zi3Ba&priceId=9626025c8bc247a29781849a5eed6cb2)
- [Alibaba X-type stainless scale example](https://www.alibaba.com/product-detail/X-Type-Electronic-Digital-Scale-Stainless_1601348321471.html?spm=a2700.details.popular_products.3.600c6f35JXVI0w)

## Exit criteria

- Two or more identical units produce comparable weight trends after calibration.
- Device can be paired to a Gratheon hive without manual database edits.
- Support can see battery, RSSI, firmware version, last seen, and reset reason.
- Enclosure and connectors can survive realistic rain, UV, and service handling.
- Supply chain has at least two acceptable sources for each critical component.
