---
title: 🧪 Research references
order: 4
sidebar_position: 4
hide_table_of_contents: false
---

## 🐝 Why this research matters

The Field MVP keeps **weight, internal temperature, ambient humidity, battery health, and connectivity health** first because these signals have the best balance of beekeeper value, low-cost hardware, and field reliability. More complex modalities such as sound, CO2, air quality, and tamper detection stay in the future research backlog until the base scale works outdoors.

This page connects the [Phase 2 - Field MVP](phase-2-field-mvp/) design to Gratheon's broader [Research](/research/) library.

## ⚖️ Sensor modality evidence

- 📈 [Advances in Beehive Monitoring Systems: Low-Cost Integrating Sensor Technology for Improved Apiculture Management](../../research/papers/Advances%20in%20Beehive%20Monitoring%20Systems%20Low-Cost%20Integrating%20Sensor%20Technology%20for%20Improved%20Apiculture%20Management.md) validates low-cost temperature, humidity, hive weight, and sound monitoring as practical beehive-monitoring modalities.
- 🔋 [Analysis of Energy Consumption in a Precision Beekeeping System](../../research/papers/Analysis%20of%20Energy%20Consumption%20in%20a%20Precision%20Beekeeping%20System.md) explains why field devices must be built around sleep cycles, radio duty cycle, and reduced edge processing.

## 🧭 Design implications for Field MVP

| Research signal | Field MVP decision | Why it matters |
| --- | --- | --- |
| ⚖️ Hive weight is a core practical modality. | Keep the load cell and HX711 path as the main product value. | Weight trend can show honey flow, food shortage, movement, storms, and handling events. |
| 🌡️ Temperature and humidity are common low-cost modalities. | Include DS18B20 internal temperature and SHT31/SHTC3/BME280 ambient humidity. | Climate readings explain colony stress and environmental context around weight changes. |
| 🔋 Energy use dominates outdoor reliability. | Use 10-15 minute reporting, deep sleep, batching, and battery telemetry. | A useful pilot must survive cloudy days and weak connectivity without constant service visits. |
| 📡 Connectivity is a support metric, not just plumbing. | Track RSSI, firmware version, reset reason, and last-seen behavior. | Missing data is easier to debug when the device reports its own health. |
| 🎙️ Sound and richer environmental sensors are promising but optional. | Defer acoustic, CO2, air-quality, and tamper sensors to later experiments. | The MVP stays affordable, buildable, and easier to install before adding heavier sensors. |

## 🔗 Related Gratheon research pages

- 📚 [Research overview](/research/) - main entry point for Gratheon's research library.
- 🧾 [Research papers](../../research/papers/) - indexed paper collection.
- 🌐 [IoT sensors topic](../../research/papers/topics/iot-sensors.md) - papers grouped around IoT sensor systems.
- 🧠 [Reviews and surveys topic](../../research/papers/topics/reviews-surveys.md) - broader survey papers that inform product direction.

## ✅ How to use these references

Use these references when changing the [Product description](phase-2-field-mvp/product-description.md), [Bill of materials](phase-2-field-mvp/bill-of-materials.md), firmware cadence, power budget, or future sensor backlog. The rule is simple: research can expand the roadmap, but the Field MVP should only include sensors that improve pilot reliability or beekeeper decisions today.
