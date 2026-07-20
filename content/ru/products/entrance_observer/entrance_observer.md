---
sidebar_position: 4
title: 👁️‍🗨️ Входной наблюдатель пчёл
layout: products
---

`статус: альфа`, [TRL 5](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

💡 Входной наблюдатель — это набор камер и аппаратных устройств, которые анализируют вход в улей. Он записывает видеопоток, выполняет анализ с помощью ИИ и отправляет метрики и видео в наше [веб-приложение](../web_app/index.md) для предварительного просмотра и оповещений.

![](img/Screenshot%202025-10-22%20at%2020.43.55.png)

Проверьте и установите наш [открытый исходный код **entrance-observer**](https://github.com/Gratheon/entrance-observer/)

Для деталей реализации см. [документацию инженера Входного наблюдателя пчёл](../../docs/entrance-observer/entrance-observer.md). Метрики, которые он производит, хранятся через [хранилище телеметрии улья](../web_app/pro-tier/hive-telemetry-storage.md) и могут питать [оповещения](../web_app/flexible-tier/alerts.md).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/hNval4v44ao" title="Наблюдатель входа в улей" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Фокус на проблеме

Входной наблюдатель анализирует вход в улей с помощью камер и искусственного интеллекта. Он записывает видеопоток, выполняет анализ поведения пчёл и отправляет метрики в веб-приложение для визуализации и оповещений пчеловоду.

Система помогает:
- Отслеживать активность пчёл на входе в улей
- Выявлять аномалии в поведении колонии
- Своевременно получать уведомления о проблемах
- Анализировать эффективность сбора нектара и пыльцы

Это позволяет пчеловодам дистанционно мониторить состояние своих пчелиных семей без частых вмешательств.
