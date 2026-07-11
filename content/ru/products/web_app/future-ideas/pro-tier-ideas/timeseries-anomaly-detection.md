---
title: "🔔 Обнаружение аномалий во временных рядах"
---

## Зачем

Чтобы иметь [уведомления](../../flexible-tier/alerts.md), нужно автоматически и непрерывно анализировать измерения IoT-датчиков. На основе таких временных рядов система должна предупреждать пользователя об аномалиях.

## Связанная работа

См. аналитику телеметрии в web-app и задачу [**Setup influx DB under telemetry-api**](https://www.notion.so/Setup-influx-DB-under-telemetry-api-77bc00eb46df4a759dc119650253aff7?pvs=21).

## Критерии приёмки

- Интегрировать модель Prophet: [https://facebook.github.io/prophet/docs/quick_start.html#python-api](https://facebook.github.io/prophet/docs/quick_start.html#python-api).
- Сохранять обнаруженные аномалии.
- Показывать их пользователю.
