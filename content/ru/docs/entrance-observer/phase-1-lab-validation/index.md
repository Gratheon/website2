---
title: Фаза 1 — лабораторная валидация
navTitle: Фаза 1 — лаборатория
order: 1
sidebar_position: 1
hide_table_of_contents: false
---

Фаза 1 — это стендовый и indoor-window прототип. Он намеренно оптимизирован для скорости разработки, а не для outdoor reliability. Цель — доказать, что камера, edge-модель, логика подсчёта, загрузка телеметрии и on-demand video control plane работают до того, как дизайн будет укрепляться для пасеки.

## Страницы этой фазы

- [Описание продукта](product-description.md) — scope, architecture, setup rules и exit criteria.
- [Bill of materials](bill-of-materials.md) — детали, которые нужно купить или переиспользовать для лабораторной сборки.

## Результат фазы

Разработчик может запустить `entrance-observer` на Jetson Orin Nano, захватывать повторяемое видео, похожее на леток, обнаруживать и трекать пчёл или размеченные тестовые объекты, отправлять movement telemetry в Gratheon и запускать on-demand live view через целевую cloud boundary без привязки к production hardware.
