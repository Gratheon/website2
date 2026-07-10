---
sidebar_position: 4
title: 👁️‍🗨️ Entrance Observer
layout: products
---

`status: alpha`, [TRL 5](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

💡 Entrance Observer — это набор камер и аппаратных устройств для анализа летка улья. Он записывает видеопоток, запускает ИИ-анализ и отправляет метрики и видео в [веб-приложение](../web_app/index.md) для просмотра и уведомлений.

![](/products/entrance_observer/img/Screenshot%202025-10-22%20at%2020.43.55.png)

Исходный код доступен в open source: [github.com/Gratheon/entrance-observer](https://github.com/Gratheon/entrance-observer/)

Подробности реализации описаны в [инженерной документации Entrance Observer](/ru/docs/entrance-observer/). Метрики сохраняются через [хранилище телеметрии улья](../web_app/pro-tier/hive-telemetry-storage.md) и могут запускать [уведомления](../web_app/flexible-tier/alerts.md).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/hNval4v44ao" title="Beehive Entrance Observer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Фокус проблем

Из всех проблем пчеловодства этот продукт помогает с такими:

- [💢 атаки шершней](/about/problems/biological/hornet-attacks/);
- [💢 воровство](/about/problems/biological/robbing-state/);
- [🦀 заражения](/about/problems/biological/infestations/);
- [🧶 роение](/about/problems/biological/swarming/);
- [🦀 болезни](/about/problems/biological/diseases/);
- [💀 семья без матки](/about/problems/colony-without-a-queen/);
- [🤢 отравление пестицидами](/about/problems/systemic/pesticide-poisoning/).

## Возможности

- [🎥 Видеопоток через API](features/🎥%20Video%20streaming%20via%20API.md)
- [🐝 Обнаружение роения](ideas/🐝%20Detect%20swarming.md)
- [🎮 Клиентское приложение с UI](features/🎮%20Client-side%20app%20with%20UI.md)
- [📈 Подсчёт пчёл на входе и выходе - на edge](features/📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📊 Отчётность метрик движения пчёл](features/📊%20Bee%20movement%20metric%20reporting.md)
- [🛣️ Генерация тепловой карты летка](features/🛣️%20Landing%20board%20heatmap%20generation.md)

## TODO

- [🦀 Детекция заражения клещом варроа по видео](todo/🦀%20Varroa%20mite%20infestation%20detection%20from%20video.md)
- [🚁 Детекция атаки шершня](todo/🚁%20Hornet%20attack%20detection.md)
- [Drone bee detection and counting](/products/entrance_observer/todo/drone-bee-detection-and-counting/)

## Идеи

- [🌻 Детекция пчёл с пыльцой для статистики вылета](ideas/🌻%20Detect%20bees%20with%20pollen%20for%20foraging%20statistics.md)
- [🐝 Детекция ориентировочных вылетов](ideas/🐝%20Detect%20orientation%20flights.md)
- [🐝 Детекция сторожевых пчёл](ideas/🐝%20Guard%20detection.md)
- [👑 Detect queen mating from entrance video](/products/entrance_observer/ideas/detect-queen-mating-from-entrance-video/)
- [🔔 Оповещения на основе счётчика пчёл](ideas/🔔%20Alerts%20based%20on%20bee%20counter.md)
- [🤢 Детекция воздействия пестицидов](ideas/🤢%20Detect%20pesticide%20exposure.md)
- [🩻 Генерация позы пчелы](ideas/🩻%20Bee%20pose%20generation.md)
- [🐝 Поза пчелы - морфометрическая модель](ideas/🐝%20Bee%20pose%20-%20morphometric%20model.md)
- [🎮 Управление устройством - удалённый рабочий стол](ideas/🎮%20Device%20management%20-%20Remote%20desktop.md)

## Целевая аудитория

- [🧑‍🚀 Хобби-пчеловоды и технические энтузиасты](/about/company/clients/hobby-beekeepers/)
- [👩🏻 Corporate Hive Sponsorship Program](/about/company/clients/tech-scale-up-companies/)

## История версий

![](/about/img/436202645_10161734083722973_395574856169740131_n.jpg)

Прототип v4 на полевых испытаниях. Камера получила защитный корпус; защитного конуса посадочной доски пока нет, потому что требуется искусственное освещение.

![](/about/img/gatehousev3.jpg)

Прототип v3. Добавлен защитный конус. Идея — вынести CPU/GPU-блок в крышу улья, уменьшить количество устройств у летка, интегрировать камеру с конусом и отвести Wi-Fi-антенны и питание дальше от пчёл.

![](/about/img/1000004899.jpg)

Прототип v1. Камера в центре на моноподе, Jetson Orin Nano в центре, проводка и антенны направлены вниз.