---
title: 🧪 Research references
order: 4
sidebar_position: 4
hide_table_of_contents: false
---

## 🐝 Why this research matters

Beehive IoT sensors move from a low-cost pilot to a supportable product in phases. Research references are kept on this page so product pages stay focused on build decisions while still linking each decision back to Gratheon's broader [Research](/research/) library.

## ⚖️ Phase 2 - Field MVP evidence

The [Phase 2 - Field MVP](phase-2-field-mvp/) keeps **weight, internal temperature, ambient humidity, battery health, and connectivity health** first because these signals have the best balance of beekeeper value, low-cost hardware, and field reliability. More complex modalities such as sound, CO2, air quality, and tamper detection stay in the future research backlog until the base scale works outdoors.

- 📈 [Advances in Beehive Monitoring Systems: Low-Cost Integrating Sensor Technology for Improved Apiculture Management](../../research/papers/Advances%20in%20Beehive%20Monitoring%20Systems%20Low-Cost%20Integrating%20Sensor%20Technology%20for%20Improved%20Apiculture%20Management.md) validates low-cost temperature, humidity, hive weight, and sound monitoring as practical beehive-monitoring modalities.
- 🔋 [Analysis of Energy Consumption in a Precision Beekeeping System](../../research/papers/Analysis%20of%20Energy%20Consumption%20in%20a%20Precision%20Beekeeping%20System.md) explains why field devices must be built around sleep cycles, radio duty cycle, and reduced edge processing.

## 🧭 Phase 2 design implications

| Research signal | Field MVP decision | Why it matters |
| --- | --- | --- |
| ⚖️ Hive weight is a core practical modality. | Keep the load cell and HX711 path as the main product value. | Weight trend can show honey flow, food shortage, movement, storms, and handling events. |
| 🌡️ Temperature and humidity are common low-cost modalities. | Include DS18B20 internal temperature and SHT31/SHTC3/BME280 ambient humidity. | Climate readings explain colony stress and environmental context around weight changes. |
| 🔋 Energy use dominates outdoor reliability. | Use 10-15 minute reporting, deep sleep, batching, and battery telemetry. | A useful pilot must survive cloudy days and weak connectivity without constant service visits. |
| 📡 Connectivity is a support metric, not just plumbing. | Track RSSI, firmware version, reset reason, and last-seen behavior. | Missing data is easier to debug when the device reports its own health. |
| 🎙️ Sound and richer environmental sensors are promising but optional. | Defer acoustic, CO2, air-quality, and tamper sensors to later experiments. | The MVP stays affordable, buildable, and easier to install before adding heavier sensors. |

## 🏭 Phase 3 - Production evidence

The [Phase 3 - Production kit](phase-3-production-kit/) keeps the proven Phase 2 telemetry path, then adds repeatable mechanics, replaceable connectors, diagnostics, and gateway options. Research supports this by showing both the long-term value of multimodal sensing and the practicality of local hive-node networks.

- 🧬 [A Smart Sensor-Based Measurement System for Advanced Bee Hive Monitoring](../../research/papers/A%20Smart%20Sensor-Based%20Measurement%20System%20for%20Advanced%20Bee%20Hive%20Monitoring.md) validates the long-term multimodal direction with weight, sound, temperature, humidity, and CO2.
- 📡 [Bee colony remote monitoring based on IoT using ESP-NOW protocol](../../research/papers/Bee%20colony%20remote%20monitoring%20based%20on%20IoT%20using%20ESP-NOW%20protocol.md) supports a production gateway architecture for apiaries without WiFi.

## 🧰 Phase 3 design implications

| Research signal | Production decision | Why it matters |
| --- | --- | --- |
| 🧬 Multimodal sensing improves event detection. | Keep connectors, power budget, and enclosure space ready for future sound or environmental modules. | Production hardware should not block later research-backed upgrades. |
| ⚖️ Weight remains a primary practical signal. | Use calibrated mechanics, overload stops, corner-load tests, and repeatable assembly. | Comparable units are required before Gratheon can sell or support hive-scale data. |
| 📡 Remote apiaries may not have WiFi. | Support optional ESP-NOW or LoRa-style hive nodes with a gateway upload path. | Many hives can share one internet connection, reducing cost and power complexity. |
| 🔋 Field devices must conserve energy. | Keep sleep-first firmware and gateway batching as production requirements. | Service visits are expensive, so reliability depends on power-aware design. |
| 🛠️ Outdoor systems need serviceable parts. | Use waterproof connectors, labeled harnesses, and replaceable sensor pods. | Beekeepers and support staff can replace damaged parts without rebuilding the device. |

## 🔗 Related Gratheon research pages

- 📚 [Research overview](/research/) - main entry point for Gratheon's research library.
- 🧾 [Research papers](../../research/papers/) - indexed paper collection.
- 🌐 [IoT sensors topic](../../research/papers/topics/iot-sensors.md) - papers grouped around IoT sensor systems.
- 🧠 [Reviews and surveys topic](../../research/papers/topics/reviews-surveys.md) - broader survey papers that inform product direction.

## ✅ How to use these references

Use these references when changing Phase 2 or Phase 3 [product descriptions](phase-2-field-mvp/product-description.md), [bill of materials](phase-2-field-mvp/bill-of-materials.md), firmware cadence, power budget, connector strategy, or future sensor backlog. The rule is simple: research can expand the roadmap, but each phase should only include sensors and hardware complexity that improve reliability or beekeeper decisions at that stage.
