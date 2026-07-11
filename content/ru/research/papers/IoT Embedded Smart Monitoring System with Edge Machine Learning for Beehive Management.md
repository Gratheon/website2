---
hideNav: true
layout: research
hideToc: true
title: "Встраиваемая IoT-система умного мониторинга с edge machine learning для управления ульями"
description: "Открытая статья 2024 года о proof-of-concept системе мониторинга улья с IoT-датчиками, признаками звука улья, edge inference и низкопотребляющим микроконтроллером."
year: "2024"
authors:
- Mihai Doinea
- Ioana Trandafir
- Cristian-Valeriu Toma
- Marius Popa
- Alin Zamfiroiu
orgs:
- 🇷🇴 Bucharest University of Economic Studies
- 🇷🇴 National Institute for Research & Development in Informatics
topics:
- iot-sensors
- edge-ai-energy
- audio-acoustics
productAreas:
- monitoring-platform
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/iot-embedded-smart-monitoring-system-edge-machine-learning-beehive-management.pdf"
doi: 10.15837/ijccc.2024.4.6632
---

[PDF](/assets/research/papers/pdfs/iot-embedded-smart-monitoring-system-edge-machine-learning-beehive-management.pdf)

<object data="/assets/research/papers/pdfs/iot-embedded-smart-monitoring-system-edge-machine-learning-beehive-management.pdf" type="application/pdf" width="100%" height="800"></object>

## Внешние ссылки

- DOI: https://doi.org/10.15837/ijccc.2024.4.6632
- [PDF издателя](https://univagora.ro/jour/index.php/ijccc/article/download/6632/2103)

## Аннотация

Автоматизированная система поддержки пчеловода нужна для поддержания и улучшения состояния пчелиных семей, особенно когда пасеки удалены и регулярные проверки дороги. В статье представлен proof-of-concept умной системы мониторинга улья на базе IoT, машинного обучения и edge computing.

IoT-датчики собирают данные, система извлекает признаки из звуков улья, а TinyML-модель выполняет инференс на маломощном микроконтроллере. Такой подход переносит часть анализа с облака на устройство, повышает автономность, снижает зависимость от постоянной связи и помогает принимать решения по управлению ульем на основе локальных сигналов.

## Значимость для Gratheon

Статья напрямую связана с дорожной картой edge-устройств Gratheon: удалённые пасеки требуют низкого энергопотребления, локальной обработки звука и устойчивой работы без постоянного облачного соединения. TinyML-подход помогает определить, какие сигналы здоровья семьи стоит анализировать на устройстве, а какие можно отправлять в веб-приложение.

Работа также даёт практичный шаблон упаковки сенсорного узла: сбор данных, извлечение признаков, локальный инференс и передача результата пчеловоду. Это полезно для проектирования аппаратных требований, бюджета питания и интерфейсов предупреждений в Gratheon.
