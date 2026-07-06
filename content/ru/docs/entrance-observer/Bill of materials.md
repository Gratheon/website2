---
title: Bill of materials
sidebar_position: 6
hide_table_of_contents: false
---

Эта страница сохранена как совместимая точка входа для старых ссылок. BOM для Entrance Observer теперь организован по фазам разработки, чтобы каждый список материалов соответствовал конкретной цели сборки.

## Текущая структура BOM

| Фаза | Назначение | BOM |
| --- | --- | --- |
| Фаза 1 — лабораторная валидация | Стенд на Jetson Orin Nano для проверки камеры, модели, телеметрии и on-demand video. | [Phase 1 - Lab BOM](phase-1-lab-validation/bill-of-materials.md) |
| Фаза 2 — полевой MVP | Защищённое пилотное устройство для одного реального летка. | [Phase 2 - Field MVP BOM](phase-2-field-mvp/bill-of-materials.md) |
| Фаза 3 — production kit | Повторяемое, поддерживаемое production-устройство или семейство SKU. | [Phase 3 - Production BOM](phase-3-production-kit/bill-of-materials.md) |

## Почему BOM был разделён

Предыдущий единый BOM описывал текущий прототип на Jetson Orin Nano. Он был полезен для заказа лабораторных деталей, но смешивал три разных решения:

- что нужно разработчику на стенде;
- что нужно пчеловоду для первого outdoor pilot;
- что нужно Gratheon для повторяемого production kit.

У этих фаз разные требования к стоимости, питанию, корпусу, камере, сети, сервису и производству. Структура по фазам не даёт лабораторным удобствам, например touchscreen или acrylic case, превратиться в production requirement.

## Сводка текущего прототипа

Текущий лабораторный прототип всё ещё использует:

- NVIDIA Jetson Orin Nano Super Developer Kit;
- USB UVC 4K camera;
- ручной варифокальный CS/C objective;
- NVMe SSD для OS, logs и clip buffering;
- WiFi или Ethernet для разработки;
- временный camera mount и fixture materials.

Подробную оценку этих деталей и альтернатив см. в [Component analysis and alternatives](Component%20analysis%20and%20alternatives.md). Production compute choices описаны в [Future production hardware alternatives](Future%20production%20hardware%20alternatives.md).
