---
title: Bill of materials
---

This BOM is split by product maturity. The goal is to keep the first public build cheap and easy to source, then add field reliability and research sensors in later kits.

## Recommended MVP BOM

| Tier | Component | Recommended part | Qty | Rough cost | Why |
| --- | --- | --- | ---: | ---: | --- |
| Required | Microcontroller | [ESP32 DevKit / ESP32-WROOM](ESP32.md) | 1 | €4–10 | Cheapest supported WiFi MCU for Arduino-based DIY onboarding. |
| Required | Weight ADC | HX711 breakout | 1 | €1–4 | Common low-cost ADC for load cells. |
| Required | Load cell | 100–200 kg single-point load cell **or** 4× 50 kg bar load cells | 1 / 4 | €8–35 | Tracks honey flow, food reserves, sudden hive movement. |
| Required | Internal temperature | [DS18B20 waterproof probe](DS18B20.md) | 1 | €2–5 | Robust and cheap first internal hive temperature sensor. |
| Recommended | Humidity/ambient temperature | SHT31/SHTC3/BME280 module | 1 | €3–10 | Better first humidity option than DHT-style modules for field docs. |
| Recommended | Enclosure | IP65 electrical junction box + cable glands | 1 | €6–18 | Easier and cheaper than custom aluminium for DIY entry. |
| Recommended | Battery | 18650 holder + protected 18650 cells or USB power bank | 1 | €8–25 | Lets users start without custom PCB power design. |
| Optional | Solar charging | 5–6 V solar panel + CN3065/TP4056-class charger module | 1 | €8–25 | Needed for multi-month field tests. |
| Optional | Battery telemetry | INA219, MAX17048, LC709203, or resistor divider | 1 | €1–9 | Enables low-battery alerts and field reliability. |
| Optional | Mechanical frame | Aluminium profile or stainless mount | as needed | €20–80 | Needed for repeatable field weighing; can become a paid kit. |

## Cost targets

| Build | Expected cost | Scope |
| --- | ---: | --- |
| Lab demo | €20–35 | ESP32 + HX711 + load cell + DS18B20, powered over USB. |
| Outdoor DIY MVP | €45–90 | Adds enclosure, battery, humidity sensor, weatherproof wiring. |
| Field-ready scale frame | €90–180 | Adds stronger mechanical frame, solar, better connectors, calibration weights. |

## Existing prototype components

<!-- QueryToSerialize: table WITHOUT ID "[" + default(title, file.name) + "]" + default( "("+  replace(replace(file.path, "gratheon.com", ""), " ", "%20") + ")", "") as title,  price,  shipping-price, items  FROM "docs/beehive-sensors/components"   WHERE file.name != "index" -->
<!-- SerializedQuery: table WITHOUT ID "[" + default(title, file.name) + "]" + default( "("+  replace(replace(file.path, "gratheon.com", ""), " ", "%20") + ")", "") as title,  price,  shipping-price, items  FROM "docs/beehive-sensors/components"   WHERE file.name != "index" -->

| title                                                                                                                                                                                                      | price | shipping-price | items |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | -------------- | ----- |
| [Temperature sensor - DS18B20](docs/beehive-sensors/components/DS18B20.md)                                                                                                                                 | \-    | \-             | \-    |
| [Microcontroller - ESP32](docs/beehive-sensors/components/ESP32.md)                                                                                                                                        | 3.14  | \-             | \-    |
| [Weight sensor HX711 (bar-type)](docs/beehive-sensors/components/HX711-bar.md)                                                                                                                             | 4     | \-             | 4     |
| [Aluminium profile 20x20x500mm](docs/beehive-sensors/components/aluminium-profile.md)                                                                                                                      | 24.61 | \-             | 2     |
| [Battery (18650 type, Li-ion) shield](docs/beehive-sensors/components/battery-shield.md)                                                                                                                   | 5.53  | \-             | \-    |
| [Battery (18650 type, Li-ion)](docs/beehive-sensors/components/battery.md)                                                                                                                                 | 9.42  | 8.33           | 4     |
| [Aluminium Enclosure](docs/beehive-sensors/components/case.md)                                                                                                                                             | 19.11 | 18.87          | \-    |
| [Display - LCD1602](docs/beehive-sensors/components/display.md)                                                                                                                                            | 2.64  | \-             | \-    |
| [Screws M4 x 25mm](docs/beehive-sensors/components/screws.md)                                                                                                                                              | 10.76 | \-             | \-    |
| [Air Quality Sensor](docs/beehive-sensors/components/todo/Air%20Quality%20Sensor.md)                                                                                                                       | \-    | \-             | \-    |
| [Barometric pressure sensor](docs/beehive-sensors/components/todo/Barometric%20pressure%20sensor.md)                                                                                                       | \-    | \-             | \-    |
| [Barometric sensor - BMP180](docs/beehive-sensors/components/todo/Barometric%20sensor%20-%20BMP180.md)                                                                                                     | \-    | \-             | \-    |
| [CO2 sensor - ENS160](docs/beehive-sensors/components/todo/CO2%20sensor%20-%20ENS160.md)                                                                                                                   | \-    | \-             | \-    |
| [Carbon Dioxide CO2 Temperature Humidity VOCs Air Quality Sensor Module](docs/beehive-sensors/components/todo/Carbon%20Dioxide%20CO2%20Temperature%20Humidity%20VOCs%20Air%20Quality%20Sensor%20Module.md) | \-    | \-             | \-    |
| [Weight sensor HX711 (flat-type)](docs/beehive-sensors/components/todo/HX711-flat.md)                                                                                                                      | \-    | \-             | \-    |
| [Microphone Amplifier Stable](docs/beehive-sensors/components/todo/Microphone%20Amplifier%20Stable.md)                                                                                                     | \-    | \-             | \-    |
| [PM2 dust sensor](docs/beehive-sensors/components/todo/PM2%20dust%20sensor.md)                                                                                                                             | \-    | \-             | \-    |
| [Tampering - Vibration sensor](docs/beehive-sensors/components/todo/Tampering%20-%20Vibration%20sensor.md)                                                                                                 | \-    | \-             | \-    |
| [Temperature - Humidity sensor alternative](docs/beehive-sensors/components/todo/Temperature%20-%20Humidity%20sensor%20alternative.md)                                                                     | \-    | \-             | \-    |
<!-- SerializedQuery END -->

## Phase-2 sensors

Keep these in research/prototype docs until the base scale works reliably in the field:

- Microphone/acoustic module for queenlessness, swarming, and stress experiments.
- CO₂/VOC/PM sensors for controlled research deployments, not the first outdoor DIY kit.
- IMU/vibration/tamper sensor for theft/storm alerts.
- LoRa or cellular connectivity modules for remote apiaries.
- LCD/display only for bench debugging; avoid it in outdoor battery kits.

## Possible vendors

Prefer parts that can be purchased from several sources so the guide does not depend on one marketplace listing:

- EU maker shops and electronics distributors for ESP32 boards, SHT31/BME280, DS18B20, cable glands, IP65 boxes.
- AliExpress/Amazon/eBay for low-cost HX711, load cells, solar panels, battery holders.
- Local hardware stores for aluminium/stainless mechanical parts.
- PCBWay/JLCPCB/LCSC only after the DIY wiring has stabilized enough for a custom PCB.

Prototype scale vendors to compare later:

+ 146 USD https://www.alibaba.com/product-detail/Weight-Pesage-Industrial-Balanzas-Load-Cell_1600454137483.html?spm=a2700.galleryofferlist.normal_offer.d_title.38c713a0EKDwRy&priceId=6e22a495b4744c7799663b3e1da26427
+ 100 usd https://www.alibaba.com/product-detail/Stainless-Steel-Waterproof-Weighing-Industrial-Scale_1600910558433.html?spm=a2700.details.popular_products.11.6a5948747Tm3az
+ http://en.pilot-scale.com/product_category/Bench-scale-series.html
+ https://www.alibaba.com/product-detail/30kg-RS485-Modbus-Weighing-Scale-with_1600883502607.html?spm=a2700.galleryofferlist.normal_offer.d_title.5ce913a08zi3Ba&priceId=9626025c8bc247a29781849a5eed6cb2
+ https://www.alibaba.com/product-detail/X-Type-Electronic-Digital-Scale-Stainless_1601348321471.html?spm=a2700.details.popular_products.3.600c6f35JXVI0w
