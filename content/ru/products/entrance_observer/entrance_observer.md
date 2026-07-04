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

Пока страницы функций остаются на английском, но структура синхронизирована с основной английской версией:

- [🎥 Video streaming via API](/products/entrance_observer/features/video-streaming-via-api/)
- [🐝 Detect swarming](/products/entrance_observer/ideas/detect-swarming/)
- [🎮 Client-side app with UI](/products/entrance_observer/features/client-side-app-with-ui/)
- [📈 Count bees coming in and out - on the edge](/products/entrance_observer/features/count-bees-coming-in-and-out-on-the-edge/)
- [📊 Bee movement metric reporting](/products/entrance_observer/features/bee-movement-metric-reporting/)
- [🛣️ Landing board heatmap generation](/products/entrance_observer/features/landing-board-heatmap-generation/)

## TODO

- [🦀 Varroa mite infestation detection from video](/products/entrance_observer/todo/varroa-mite-infestation-detection-from-video/)
- [🚁 Hornet attack detection](/products/entrance_observer/todo/hornet-attack-detection/)
- [Drone bee detection and counting](/products/entrance_observer/todo/drone-bee-detection-and-counting/)

## Идеи

- [🌻 Detect bees with pollen for foraging statistics](/products/entrance_observer/ideas/detect-bees-with-pollen-for-foraging-statistics/)
- [🐝 Detect orientation flights](/products/entrance_observer/ideas/detect-orientation-flights/)
- [🐝 Guard detection](/products/entrance_observer/ideas/guard-detection/)
- [👑 Detect queen mating from entrance video](/products/entrance_observer/ideas/detect-queen-mating-from-entrance-video/)
- [🔔 Alerts based on bee counter](/products/entrance_observer/ideas/alerts-based-on-bee-counter/)
- [🤢 Detect pesticide exposure](/products/entrance_observer/ideas/detect-pesticide-exposure/)
- [🩻 Bee pose generation](/products/entrance_observer/ideas/bee-pose-generation/)

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