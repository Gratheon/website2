
<iframe width="100%" height="400" src="https://www.youtube.com/embed/aBsKVInYCno" title="Features - Telemetry API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Зачем это нужно

Мы хотим, чтобы наши устройства и собственные проекты клиентов могли передавать нам данные, чтобы:

1. пчеловоды отслеживали пасеки в телеметрических дашбордах веб-приложения
2. пчеловоды сопоставляли данные для получения инсайтов
3. мы могли генерировать [уведомления](../../web_app/flexible-tier/alerts.md)

![](/about/img/Screenshot%202024-05-25%20at%2020.03.49.png)

[Оценка прироста веса пчелиных семей в интенсивный медосборный период](/research/papers/Evaluation%20of%20the%20honey%20bee%20colonies%20weight%20gain%20during%20theintensive%20foraging%20period.md)

## Метрики низкого объёма, которые [Entrance Observer](../../entrance_observer/entrance_observer.md) может отправлять в [веб-приложение](../../web_app/index.md)

- температура (мин. интервал - 10 мин)
- влажность (мин. интервал - 10 мин) - см. [Мониторинг влажности](../ideas/💧%20Internal%20humidity%20monitoring.md)
- вес (мин. интервал - 10 мин) → [[Beep.nl](http://Beep.nl) интеграция телеметрии веса]([https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21](https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21))
- счётчики пчёл у входа в улей (мин. интервал - 10 сек)
    - сколько рабочих **пчёл** вошло и вышло
        - сколько из них с клещом varroa
        - сколько с пыльцой
    - сколько сторожевых пчёл обнаружено
    - сколько трутней обнаружено
    - сколько маток обнаружено → [Распознавание случки матки по видео летка](../../entrance_observer/ideas/👑%20Detect%20queen%20mating%20from%20entrance%20video.md)
- счётчик ос (мин. интервал 10 сек) → [Обнаружение атаки ос](../../entrance_observer/todo/🚁%20Hornet%20attack%20detection.md)
- средний уровень аудиошума (мин. интервал - 1 сек)
    - не путать с полноценным аудиопотоком из [6-канального аудиомониторинга](../../robotic_beehive/ideas/🎙️%206-channel%20audio%20monitoring.md) в рамках [роботизированного улья](../../robotic_beehive/robotic_beehive.md), так как у [Entrance Observer](../../entrance_observer/entrance_observer.md) ограничено число USB-портов и микрофоны там недоступны

## Критерии приёмки

- гибкий GraphQL API в telemetry-api для хранения метрик временных рядов
- хранение данных в time-series хранилище telemetry-api. MySQL - текущий fallback, когда отдельная time-series БД не оправдана
- отрисовка графиков временных рядов в веб-приложении через запросы к telemetry-api через `graphql-router`
