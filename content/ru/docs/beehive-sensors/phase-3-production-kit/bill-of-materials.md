---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Описание

Production BOM предназначен для repeatable kit, который Gratheon может продавать, поддерживать, калибровать и обслуживать. Он должен опираться на evidence из field MVP, а не на догадки upfront. Цель - supply-chain resilience, waterproof serviceability, consistent scale mechanics и device health telemetry.

## Покрываемая функциональность

- Calibrated load-cell frame или repeatable calibration workflow.
- Secure device identity и web-app pairing.
- Battery, solar and device-health telemetry.
- Waterproof connectors и strain relief для maintenance.
- Optional gateway connectivity для пасек без WiFi.
- Optional research sensor variants после того, как base scale станет reliable.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Purchase links | Notes |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | MCU module or carrier | ESP32-WROOM module, ESP32-C3 module, or pre-certified dev module | 1 | €3-12 | [ESP32 module at DigiKey](https://www.digikey.com/en/products/filter/rf-transceiver-modules-and-modems/872?s=N4IgTCBcDaIIwBYAMBmAlgOwM4F8g), [ESP32 modules at Mouser](https://www.mouser.com/c/semiconductors/wireless-rf-integrated-circuits/rf-modules/?m=Espressif%20Systems), [Existing ESP32 notes](../components/ESP32.md) | Используйте pre-certified modules, чтобы снизить compliance risk. |
| Required | Custom PCB or carrier board | ESP32 carrier with HX711, power, connectors, and debug header | 1 | €5-25 | [JLCPCB](https://jlcpcb.com/), [PCBWay](https://www.pcbway.com/), [LCSC components](https://www.lcsc.com/) | Production должен убрать fragile jumper wiring. |
| Required | Scale frame | Aluminium or stainless calibrated hive-scale frame | 1 | €40-120 | [Existing aluminium profile](../components/aluminium-profile.md), local metal workshop, [Alibaba platform-scale examples](#supplier-examples-to-compare) | Mechanical repeatability важнее самой дешёвой electronics. |
| Required | Load cell | 100-200 kg single-point or industrial platform-scale cell | 1 | €15-60 | [Amazon 200 kg load-cell search](https://www.amazon.de/s?k=200kg+load+cell), [AliExpress 200 kg single-point load-cell search](https://www.aliexpress.com/wholesale?SearchText=200kg+single+point+load+cell), [Alibaba supplier examples](#supplier-examples-to-compare) | Выбирать после тестирования frame geometry. |
| Required | Weight ADC | HX711 or production-grade 24-bit ADC | 1 | €1-10 | [SparkFun HX711 breakout](https://www.sparkfun.com/products/13879), [Adafruit HX711 breakout](https://www.adafruit.com/product/5974), LCSC HX711 sourcing | HX711 acceptable, если field drift/noise приемлемы. |
| Required | Temperature probe | Waterproof DS18B20 with service connector | 1 | €3-12 | [Adafruit waterproof DS18B20](https://www.adafruit.com/product/381), [Existing DS18B20 notes](../components/DS18B20.md), industrial M8/M12 probe suppliers | Добавить connector и strain relief для replacement. |
| Required | Humidity/ambient sensor | SHT31/BME280 in vented protected housing or replaceable pod | 1 | €5-20 | [Adafruit SHT31-D breakout](https://www.adafruit.com/product/2857), [Adafruit BME280 breakout](https://www.adafruit.com/product/2652), distributor SHT31 modules | Нужен enclosure design, который предотвращает condensation pooling. |
| Required | Power system | Protected battery pack, charger, fuse/protection, power switch | 1 | €15-45 | [Adafruit solar LiPo charger](https://www.adafruit.com/product/390), [Adafruit PowerBoost 1000](https://www.adafruit.com/product/2030), local battery-pack supplier | Production должен документировать safe charging and replacement. |
| Required | Battery telemetry | MAX17048/LC709203 fuel gauge and optional solar voltage sensing | 1 | €3-12 | [Adafruit MAX17048 fuel gauge](https://www.adafruit.com/product/5580), [Adafruit LC709203F fuel gauge](https://www.adafruit.com/product/4712), [Adafruit INA219](https://www.adafruit.com/product/904) | Enables support workflows and proactive alerts. |
| Required | Enclosure | UV-resistant IP65/IP67 enclosure | 1 | €10-35 | [Hammond enclosure search at Mouser](https://www.mouser.com/c/enclosures/enclosures-boxes-cases/), [Amazon IP67 enclosure search](https://www.amazon.de/s?k=IP67+enclosure), local electrical supplier | Для production лучше consistent branded enclosures. |
| Required | Waterproof connectors | M8/M12, sealed circular connectors, or rated cable glands | as needed | €8-35 | [M8 connector search at Mouser](https://www.mouser.com/c/connectors/circular-connectors/), [Amazon M8 waterproof connector search](https://www.amazon.de/s?k=M8+waterproof+connector), local electrical supplier | Делает probes, load cells и solar panels replaceable. |
| Required | Strain relief and cable labels | Internal cable clamps, glands, ferrules, labels | 1 set | €3-12 | Local electrical supplier, Amazon ferrule kit search | Prevents cable pull from reaching PCB or solder joints. |
| Recommended | Solar panel | 5-6 V or 12 V panel sized from field energy data | 1 | €10-40 | [Adafruit 6 V solar panel](https://www.adafruit.com/product/1525), [Amazon 6 V solar panel search](https://www.amazon.de/s?k=6V+solar+panel), local solar supplier | Подбирать после измерения sleep current и radio duty cycle. |
| Recommended | Gateway option | ESP32 LoRa, Raspberry Pi, or cellular gateway | 1 per apiary | €20-120 | [LilyGO LoRa32 examples](https://www.lilygo.cc/collections/lora), [Raspberry Pi](https://www.raspberrypi.com/products/), [Adafruit FONA/SIM module category](https://www.adafruit.com/category/281) | Предпочитать one gateway per apiary вместо cellular в каждом улье. |
| Recommended | Factory test fixture | Known weights, frame jig, pogo-pin flasher, seal inspection checklist | 1 set | varies | Local workshop, electronics lab suppliers | Нужно для repeatable production QA. |
| Optional | Tamper/vibration | IMU, tilt switch, or vibration module | 1 | €2-15 | [Adafruit LIS3DH accelerometer](https://www.adafruit.com/product/2809), [Existing tamper/vibration note](../components/todo/Tampering%20-%20Vibration%20sensor.md), [AliExpress vibration sensor search](https://www.aliexpress.com/wholesale?SearchText=vibration+sensor+module) | Добавлять только после стабильных weight and battery alerts. |
| Optional research | Acoustic module | MEMS microphone or analog microphone module | 1 | €3-15 | [Adafruit I2S MEMS microphone](https://www.adafruit.com/product/3421), [Existing microphone note](../components/todo/Microphone%20Amplifier%20Stable.md), [SparkFun microphone boards](https://www.sparkfun.com/categories/tags/microphone) | Требует placement и ML validation до product promise. |
| Optional research | CO2/VOC/air-quality | ENS160, SCD40/SCD41, or other environmental module | 1 | €10-60 | [Adafruit SCD-40 CO2 sensor](https://www.adafruit.com/product/5187), [Existing air-quality notes](../components/todo/Air%20Quality%20Sensor.md), [Existing ENS160 todo](../components/todo/CO2%20sensor%20-%20ENS160.md) | High power и condensation risk, оставить как research variant. |

## Connectorized subsystem BOM

| Subassembly | Included parts | Buy/build note |
| --- | --- | --- |
| Load-cell harness | Shielded 4-wire or 6-wire cable, M12 connector or sealed gland, internal terminal | Keep analog cable short. Add shield/drain only if grounding plan is defined. |
| Temperature probe harness | Waterproof DS18B20, 3-pin connector, strain relief | Standardize pinout: 1 = 3.3 V, 2 = data, 3 = GND. |
| Ambient pod | SHT31/BME280 board, vented cap, short I2C cable, gasket | Treat as replaceable consumable if field drift appears. |
| Power harness | Battery connector, fuse/protection, switch, solar connector | Use keyed connectors to prevent reversed polarity. |
| Service harness | Internal UART/JTAG header or pogo pads | Avoid external USB openings on production enclosure. |
| Gateway kit | LoRa/ESP-NOW node firmware, apiary gateway enclosure, gateway power | Keep gateway as a separate SKU or add-on. |

## Supplier examples to compare

Это prototype/vendor research links, а не final approved suppliers:

- [Alibaba industrial load-cell scale example](https://www.alibaba.com/product-detail/Weight-Pesage-Industrial-Balanzas-Load-Cell_1600454137483.html?spm=a2700.galleryofferlist.normal_offer.d_title.38c713a0EKDwRy&priceId=6e22a495b4744c7799663b3e1da26427)
- [Alibaba stainless waterproof scale example](https://www.alibaba.com/product-detail/Stainless-Steel-Waterproof-Weighing-Industrial-Scale_1600910558433.html?spm=a2700.details.popular_products.11.6a5948747Tm3az)
- [Pilot Scale bench-scale series](http://en.pilot-scale.com/product_category/Bench-scale-series.html)
- [Alibaba RS485 weighing scale example](https://www.alibaba.com/product-detail/30kg-RS485-Modbus-Weighing-Scale-with_1600883502607.html?spm=a2700.galleryofferlist.normal_offer.d_title.5ce913a08zi3Ba&priceId=9626025c8bc247a29781849a5eed6cb2)
- [Alibaba X-type stainless scale example](https://www.alibaba.com/product-detail/X-Type-Electronic-Digital-Scale-Stainless_1601348321471.html?spm=a2700.details.popular_products.3.600c6f35JXVI0w)

## Selection rules before ordering production parts

- Каждая critical part должна иметь минимум двух acceptable suppliers или approved substitute.
- Connector pinouts должны быть documented до заказа harnesses.
- Enclosure, connector and cable diameter нужно проверять вместе, а не по отдельности.
- Load-cell capacity должен учитывать hive weight, honey peak, beekeeper handling and overload margin.
- Battery chemistry и charger должны быть documented для safe shipping and service.
- Frame and electronics revision должны записываться в telemetry metadata.

## Критерии выхода

- Две или более identical units дают сопоставимые weight trends после calibration.
- Device можно привязать к Gratheon hive без ручных database edits.
- Support видит battery, RSSI, firmware version, last seen и reset reason.
- Enclosure and connectors выдерживают realistic rain, UV и service handling.
- Supply chain имеет минимум два acceptable sources для каждого critical component.
