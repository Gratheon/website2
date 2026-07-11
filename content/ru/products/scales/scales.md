---
sidebar_position: 3
title: 🌡️ Весы для ульев
layout: products
---

🌡️ Весы для ульев - это умные IoT-весы с дополнительными сенсорами и коммуникационными модулями. Они периодически измеряют состояние улья и отправляют данные в [веб-приложение](../web_app/index.md). Агрегированные данные помогают пчеловодам наблюдать за семьями в поле с минимальными затратами.

Аппаратная часть описана в [документации датчиков улья](../../docs/beehive-sensors/beehive-sensors.md), а приложение сохраняет показания в [хранилище телеметрии улья](../web_app/pro-tier/hive-telemetry-storage.md) и сравнивает их через [аналитику временных рядов](../web_app/pro-tier/timeseries-data-analytics.md).

`status`: [TRL 4](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/) (прототип)

![](/products/scales/img/Screenshot%202025-10-22%20at%2021.48.15.png)

## Обзор

### Фокус проблем

Из всех проблем пчеловодства этот продукт помогает с такими:

- [🧶 роение](../../about/problems/biological/🧶%20Swarming.md)
- [🍽️ голодание семьи](../../about/problems/biological/🍽️%20Bee%20colony%20starvation.md)
- [💢 пчелиное воровство](../../about/problems/biological/💢%20Robbing%20state.md)
- [🐻 медведи разрушают ульи и семьи](../../about/problems/🐻%20Bears%20destroying%20hives%20%26%20colonies.md)
- [🗃️ штормовой ветер опрокидывает ульи](../../about/problems/🗃️%20Storm%20wind%20collapsing%20beehives.md)
- [🌲 удалённые локации](../../about/problems/systemic/🌲%20Distant%20locations.md)

## Целевая аудитория

- [🧑‍🚀 хобби-пчеловоды](../../about/company/clients/🧑‍🚀%20Hobby%20beekeepers.md)
- [👨🏻‍🚒 промышленные пчеловоды](../../about/company/clients/👨🏻‍🚒%20Industrial%20beekeepers.md)
- [👩🏼‍🏫 городские пчеловоды](../../about/company/clients/👩🏼‍🏫%20Urban%20beekeepers.md)

## Что измеряют весы

- вес улья для понимания медосбора, подкормки и потерь;
- температуру и влажность для оценки условий внутри улья;
- дополнительные показатели окружающей среды в будущих версиях;
- события резкого изменения веса, например снятие корпусов, воровство или падение улья.

## Как данные используются

1. Устройство измеряет состояние улья с заданным интервалом.
2. Показания отправляются в Gratheon через API.
3. Веб-приложение сохраняет временные ряды и показывает графики.
4. Уведомления предупреждают о выходе показателей за безопасные пороги.

## Прототип

![](/about/img/20240726_000022.webp)
![](/products/scales/img/20250119_131627.webp)

![](/products/scales/img/0.jpg)

## Связанные страницы

- [📱 Веб-приложение](../web_app/index.md)
- [📈 Хранение телеметрии улья](../web_app/pro-tier/hive-telemetry-storage.md)
- [📊 Аналитика временных рядов](../web_app/pro-tier/timeseries-data-analytics.md)
- [🌡️ Мониторинг внутренней температуры](todo/🌡️%20Internal%20Temperature%20monitoring.md)
- [💧 Мониторинг внутренней влажности](ideas/💧%20Internal%20humidity%20monitoring.md)
- [🌪️ Измерение скорости ветра](ideas/🌪️%20Wind%20speed%20measurement%20-%20Anemometer.md)
- [Документация датчиков улья](../../docs/beehive-sensors/beehive-sensors.md)
