---
sidebar_position: 4
title: 👁️‍🗨️ Наблюдатель за входом
layout: products
---

`status: alpha`, [TRL 5](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

💡 Наблюдатель за входом — это набор камер и аппаратных устройств, которые анализируют вход улья. Он записывает видеопоток, запускает анализ ИИ, который отправляет метрики и видео в наше [веб-приложение](../web_app/index.md) для предпросмотра и оповещений.

![](img/Screenshot%202025-10-22%20at%2020.43.55.png)

Проверьте и установите наш [открытый исходный код **entrance-observer**](https://github.com/Gratheon/entrance-observer/)

Для деталей реализации см. [документацию инженера Entrance Observer](../../docs/entrance-observer/entrance-observer.md). Метрики, которые он производит, хранятся через [хранение телеметрии улья](../web_app/pro-tier/hive-telemetry-storage.md) и могут питать [оповещения](../web_app/flexible-tier/alerts.md).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/hNval4v44ao" title="Наблюдатель за входом улья" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Фокус на проблеме

Из всех проблем пчеловодства этот продукт помогает с этими:
- [💢 Атаки шершней](../../about/problems/biological/💢%20Hornet%20attacks.md)
- [💢 Грабёж](../../about/problems/biological/💢%20Robbing%20state.md)
- [🦀 Заражения](../../about/problems/biological/🦀%20Infestations.md)
- [🧶 Роение](../../about/problems/biological/🧶%20Swarming.md)
- [🦀 Болезни](../../about/problems/biological/🦀%20Diseases.md)
- [💀 Семья без матки](../../about/problems/💀%20Colony%20without%20a%20queen.md)
- [🤢 Пестицидное отравление](../../about/problems/systemic/🤢%20Pesticide%20poisoning.md)

## Возможности
- [🎥 Вещание видео через API](features/🎥%20Video%20streaming%20via%20API.md)
- [🐝 Обнаружение роения](ideas/🐝%20Detect%20swarming.md)
- [🎮 Клиентское приложение с UI](features/🎮%20Client-side%20app%20with%20UI.md)
- [📈 Подсчёт пчёл входящих и выходящих - на edge](features/📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📊 Отчётность метрик движения пчёл](features/📊%20Bee%20movement%20metric%20reporting.md)
- [🛣️ Генерация тепловой карты посадочной доски](features/🛣️%20Landing%20board%20heatmap%20generation.md)

## TODO
- [🦀 Обнаружение заражения клещами варроа из видео](todo/🦀%20Varroa%20mite%20infestation%20detection%20from%20video.md)
- [🚁 Обнаружение атаки шершней](todo/🚁%20Hornet%20attack%20detection.md)
- [Обнаружение и подсчёт трутней](todo/Drone%20bee%20detection%20and%20counting.md)

## Идеи
- [🌻 Обнаружение пчёл с пыльцой для статистики сбора](ideas/🌻%20Detect%20bees%20with%20pollen%20for%20foraging%20statistics.md)
- [🐝 Обнаружение ориентировочных перелётов](ideas/🐝%20Detect%20orientation%20flights.md)
- [🐝 Обнаружение роения](ideas/🐝%20Detect%20swarming.md)
- [🐝 Обнаружение пчёл-стражей](ideas/🐝%20Guard%20detection.md)
- [👑 Обнаружение спаривания матки по видео входа](ideas/👑%20Detect%20queen%20mating%20from%20entrance%20video.md)
- [🔔 Оповещения на основе счётчика пчёл](ideas/🔔%20Alerts%20based%20on%20bee%20counter.md)
- [🤢 Обнаружение воздействия пестицидов](ideas/🤢%20Detect%20pesticide%20exposure.md)
- [🩻 Генерация позы пчёл](ideas/🩻%20Bee%20pose%20generation.md)

## Целевая аудитория

- [🧑‍🚀 Пчеловоды-любители и технические энтузиасты](../../about/company/clients/🧑‍🚀%20Hobby%20beekeepers.md)
- [👩🏻 Корпоративная программа спонсорства ульев](../../about/company/clients/👩🏻%20Tech%20scale-up%20companies.md)

### История версий
![](../../about/img/436202645_10161734083722973_395574856169740131_n.jpg)
Прототип v4 на полевых испытаниях. Камера имеет защитный корпус. Отсутствует защитный конус посадочной доски, так как требуется искусственное освещение

![](../../about/img/gatehousev3.jpg)
Прототип v3. Добавлен защитный конус, теперь идея в том, чтобы блок CPU/GPU был разделён и перемещён в крышу улья для меньшего количества устройств на входе, камера интегрирована с конусом, антенны WiFi и блоки питания дальше от пчёл.

![](../../about/img/1000004899.jpg)
Прототип v1. Камера в центре на моноподе, jetson orin nano в центре с проводкой и антеннами, направленными вниз
