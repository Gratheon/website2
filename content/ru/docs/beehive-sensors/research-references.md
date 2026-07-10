---
title: 🧪 Research references
order: 4
sidebar_position: 4
hide_table_of_contents: false
---

## 🐝 Почему это исследование важно

IoT-датчики для улья движутся от low-cost pilot к поддерживаемому продукту по этапам. Research references собраны на этой странице, чтобы product pages оставались сфокусированными на build decisions, но каждое решение всё равно было связано с более широкой библиотекой [Research](../../research/) Gratheon.

## ⚖️ Evidence для Этапа 2 - Field MVP

[Этап 2 - Field MVP](phase-2-field-mvp/) оставляет **weight, internal temperature, ambient humidity, battery health и connectivity health** первыми, потому что эти сигналы дают лучший баланс beekeeper value, low-cost hardware и field reliability. Более сложные modalities, такие как sound, CO2, air quality и tamper detection, остаются в future research backlog, пока base scale не заработает на улице.

- 📈 [Advances in Beehive Monitoring Systems: Low-Cost Integrating Sensor Technology for Improved Apiculture Management](../../research/papers/Advances%20in%20Beehive%20Monitoring%20Systems%20Low-Cost%20Integrating%20Sensor%20Technology%20for%20Improved%20Apiculture%20Management.md) подтверждает, что low-cost temperature, humidity, hive weight и sound monitoring являются practical beehive-monitoring modalities.
- 🔋 [Analysis of Energy Consumption in a Precision Beekeeping System](../../research/papers/Analysis%20of%20Energy%20Consumption%20in%20a%20Precision%20Beekeeping%20System.md) объясняет, почему field devices нужно строить вокруг sleep cycles, radio duty cycle и reduced edge processing.

## 🧭 Design implications для Этапа 2

| Research signal | Field MVP decision | Why it matters |
| --- | --- | --- |
| ⚖️ Hive weight is a core practical modality. | Оставить load cell и HX711 path как главную product value. | Weight trend может показать honey flow, food shortage, movement, storms и handling events. |
| 🌡️ Temperature and humidity are common low-cost modalities. | Включить DS18B20 internal temperature и SHT31/SHTC3/BME280 ambient humidity. | Climate readings объясняют colony stress и environmental context вокруг weight changes. |
| 🔋 Energy use dominates outdoor reliability. | Использовать 10-15 minute reporting, deep sleep, batching и battery telemetry. | Полезный pilot должен переживать cloudy days и weak connectivity без постоянных service visits. |
| 📡 Connectivity is a support metric, not just plumbing. | Track RSSI, firmware version, reset reason and last-seen behavior. | Missing data проще отлаживать, когда device сообщает собственное health. |
| 🎙️ Sound and richer environmental sensors are promising but optional. | Отложить acoustic, CO2, air-quality и tamper sensors на later experiments. | MVP остаётся доступным, собираемым и проще устанавливается до добавления heavier sensors. |

## 🏭 Evidence для Этапа 3 - Production

[Этап 3 - Production kit](phase-3-production-kit/) сохраняет проверенный Phase 2 telemetry path, затем добавляет repeatable mechanics, replaceable connectors, diagnostics и gateway options. Research поддерживает это, показывая долгосрочную ценность multimodal sensing и практичность local hive-node networks.

- 🧬 [A Smart Sensor-Based Measurement System for Advanced Bee Hive Monitoring](/research/papers/A%20Smart%20Sensor-Based%20Measurement%20System%20for%20Advanced%20Bee%20Hive%20Monitoring/) подтверждает долгосрочное multimodal-направление с weight, sound, temperature, humidity and CO2.
- 📡 [Bee colony remote monitoring based on IoT using ESP-NOW protocol](../../research/papers/Bee%20colony%20remote%20monitoring%20based%20on%20IoT%20using%20ESP-NOW%20protocol.md) поддерживает production gateway architecture для пасек без WiFi.

## 🧰 Design implications для Этапа 3

| Research signal | Production decision | Why it matters |
| --- | --- | --- |
| 🧬 Multimodal sensing improves event detection. | Держать connectors, power budget и enclosure space готовыми для future sound или environmental modules. | Production hardware не должен блокировать будущие research-backed upgrades. |
| ⚖️ Weight remains a primary practical signal. | Использовать calibrated mechanics, overload stops, corner-load tests и repeatable assembly. | Comparable units нужны до того, как Gratheon сможет продавать или поддерживать hive-scale data. |
| 📡 Remote apiaries may not have WiFi. | Поддержать optional ESP-NOW или LoRa-style hive nodes с gateway upload path. | Многие ульи могут делить одно internet connection, снижая cost и power complexity. |
| 🔋 Field devices must conserve energy. | Сохранить sleep-first firmware и gateway batching как production requirements. | Service visits дорогие, поэтому reliability зависит от power-aware design. |
| 🛠️ Outdoor systems need serviceable parts. | Использовать waterproof connectors, labeled harnesses и replaceable sensor pods. | Пчеловоды и support staff смогут менять повреждённые детали без пересборки device. |

## 🔗 Связанные research-страницы Gratheon

- 📚 [Research overview](../../research/) - основная точка входа в research library Gratheon.
- 🧾 [Research papers](../../research/papers/) - indexed paper collection.
- 🌐 [IoT sensors topic](/research/papers/topics/iot-sensors/) - papers, сгруппированные вокруг IoT sensor systems.
- 🧠 [Reviews and surveys topic](/research/papers/topics/reviews-surveys/) - broader survey papers, которые влияют на product direction.

## ✅ Как использовать эти references

Используйте эти references при изменении [product descriptions](phase-2-field-mvp/product-description.md), [bill of materials](phase-2-field-mvp/bill-of-materials.md), firmware cadence, power budget, connector strategy или future sensor backlog для Этапа 2 и Этапа 3. Правило простое: research может расширять roadmap, но каждый этап должен включать только те sensors and hardware complexity, которые улучшают reliability или beekeeper decisions именно на этом этапе.
