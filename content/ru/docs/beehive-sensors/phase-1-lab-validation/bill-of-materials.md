---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Описание

Лабораторный BOM предназначен для настольного прототипа. Он проверяет sensor chain, firmware, контракт Telemetry API и calibration workflow до начала работ над weatherproofing или механической рамой.

## Покрываемая функциональность

- ESP32 читает один тензодатчик через HX711.
- ESP32 читает один водонепроницаемый температурный зонд DS18B20.
- Прошивка отправляет телеметрию в `/iot/v1/metrics` каждые 30-60 секунд.
- Устройство питается через USB.
- Настройка и отладка идут через serial logs.

## Bill of materials

| Tier | Component | Example part | Qty | Rough cost | Purchase links | Notes |
| --- | --- | --- | ---: | ---: | --- | --- |
| Required | Microcontroller | ESP32 DevKit / ESP32-WROOM-32 board | 1 | €4-10 | [Existing AliExpress ESP32](../components/ESP32.md), [Espressif ESP32-DevKitC at DigiKey](https://www.digikey.com/en/products/detail/espressif-systems/ESP32-DEVKITC-32E/12091810), [ESP32-DevKitC at Mouser](https://www.mouser.com/ProductDetail/Espressif-Systems/ESP32-DevKitC-32E) | Используйте распространённую USB-powered dev board для самого простого onboarding. |
| Required | Weight ADC | HX711 load-cell amplifier breakout | 1 | €1-8 | [SparkFun HX711 breakout](https://www.sparkfun.com/products/13879), [Adafruit HX711 breakout](https://www.adafruit.com/product/5974), [Generic HX711 on AliExpress](../components/HX711-bar.md) | SparkFun/Adafruit удобнее для docs; AliExpress дешевле. |
| Required | Test load cell | 1 kg to 50 kg bar load cell | 1 | €3-10 | [Existing 50 kg bar load-cell listing](../components/HX711-bar.md), [SparkFun load cell category](https://www.sparkfun.com/categories/tags/load-cell), [Amazon load-cell kits](https://www.amazon.de/s?k=HX711+load+cell+kit) | В лаборатории можно использовать small cell до появления полной hive scale frame. |
| Required | Waterproof temperature sensor | DS18B20 probe | 1 | €2-10 | [Existing AliExpress DS18B20](../components/DS18B20.md), [Adafruit waterproof DS18B20](https://www.adafruit.com/product/381), [Amazon DS18B20 search](https://www.amazon.de/s?k=DS18B20+waterproof) | Используйте waterproof version даже в лаборатории, чтобы field wiring был похожим. |
| Required | Prototyping wiring | Jumper wires, breadboard, screw terminals | 1 set | €3-8 | [Adafruit jumper wires](https://www.adafruit.com/product/153), [Amazon jumper-wire search](https://www.amazon.de/s?k=dupont+jumper+wires), local electronics shop | Screw terminals уменьшают intermittent sensor wiring. |
| Required | USB power/data | USB cable and laptop/USB charger | 1 | €0-5 | Local electronics shop, existing cable | В лаборатории питание должно быть простым. |
| Optional | Pull-up resistor kit | 4.7 kOhm resistor for DS18B20 data line | 1 | <€1 | [Amazon resistor kit search](https://www.amazon.de/s?k=resistor+kit), local electronics shop | Нужен для надёжной 1-Wire связи, если не встроен в probe board. |
| Optional | Bench display | LCD1602 I2C display | 1 | €2-6 | [Existing LCD1602 listing](../components/display.md), [Amazon LCD1602 I2C search](https://www.amazon.de/s?k=LCD1602+I2C) | Только для debug; не включать в outdoor MVP по умолчанию. |

## Connection accessories

Эти мелочи стоит купить заранее, потому что они уменьшают ложную отладку:

- 2-pin и 3-pin screw-terminal blocks для DS18B20 и power.
- 4-pin screw-terminal block для load-cell wires.
- Heat-shrink labels или masking-tape flags для `E+`, `E-`, `A+`, `A-`, `DATA`, `3V3` и `GND`.
- Известный calibration weight. Гантель или контейнер с водой подходят, если их массу один раз измерить на надёжных весах.

## Критерии выхода

- Показания веса достаточно стабильны, чтобы видеть известные test weights.
- Temperature readings видны в serial logs.
- Telemetry payload принят `telemetry-api`.
- Gratheon UI показывает отправленную историю.
- Calibration factor можно сохранить и повторно использовать после restart.
