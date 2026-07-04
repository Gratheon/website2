---
sidebar_position: 3
title: 🌡️ Весы для ульев
layout: products
---

🌡️ Весы для ульев — это умные IoT-весы с дополнительными сенсорами и коммуникационными модулями. Они периодически измеряют состояние улья и отправляют данные в [веб-приложение](../web_app/index.md). Агрегированные данные помогают пчеловодам наблюдать за семьями в поле с минимальными затратами.

Аппаратная часть описана в [документации датчиков улья](/ru/docs/beehive-sensors/), а приложение сохраняет показания в [хранилище телеметрии улья](../web_app/pro-tier/hive-telemetry-storage.md) и сравнивает их через [аналитику временных рядов](../web_app/pro-tier/timeseries-data-analytics.md).

`status`: [TRL 4](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/) (прототип)

![](/products/scales/img/Screenshot%202025-10-22%20at%2021.48.15.png)

## Обзор

### Фокус проблем

Из всех проблем пчеловодства этот продукт помогает с такими:

- [🧶 Роение](/about/problems/biological/swarming/)
- [🍽️ Голодание семьи](/about/problems/biological/bee-colony-starvation/)
- [💢 Воровство](/about/problems/biological/robbing-state/)
- [🐻 Медведи разрушают ульи и семьи](/about/problems/bears-destroying-hives-colonies/)
- [🗃️ Штормовой ветер опрокидывает ульи](/about/problems/storm-wind-collapsing-beehives/)
- [🌲 Удалённые локации](/about/problems/systemic/distant-locations/)

## Целевая аудитория

- [🧑‍🚀 Хобби-пчеловоды](/about/company/clients/hobby-beekeepers/)
- [👨🏻‍🚒 Промышленные пчеловоды](/about/company/clients/industrial-beekeepers/)
- [👩🏼‍🏫 Городские пчеловоды](/about/company/clients/urban-beekeepers/)

## Что измеряют весы

- вес улья для понимания медосбора, подкормки и потерь;
- температуру и влажность для оценки условий внутри улья;
- дополнительные показатели окружающей среды в будущих версиях;
- события резкого изменения веса, например снятие корпусов, воровство или падение улья.

## Как данные используются

1. Устройство измеряет состояние улья с заданным интервалом.
2. Показания отправляются в Gratheon через API.
3. Веб-приложение сохраняет временные ряды и показывает графики.
4. Уведомления могут предупредить о выходе показателей за безопасные пороги.

## Прототип

![](/about/img/20240726_000022.webp)
![](/products/scales/img/20250119_131627.webp)

![](/products/scales/img/0.jpg)

## Связанные страницы

- [📱 Веб-приложение](../web_app/index.md)
- [📈 Хранение телеметрии улья](../web_app/pro-tier/hive-telemetry-storage.md)
- [📊 Аналитика временных рядов](../web_app/pro-tier/timeseries-data-analytics.md)
- [Документация датчиков улья](/ru/docs/beehive-sensors/)