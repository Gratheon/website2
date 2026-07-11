---
title: 🧿 Роботизированный улей
layout: products
sidebar_position: 5
---

Мы разрабатываем роботизированную платформу для осмотра вертикального улья. Она должна:

- поднимать несколько секций улья, чтобы быстрее добраться до гнезда;
- фотографировать рамки встроенными камерами; при этом ручной подъём рамок пока остаётся необходимым;
- загружать результат осмотра в [веб-приложение](../web_app/index.md);
- перемещаться на колёсах, чтобы использовать одну платформу для разных ульев.

Аппаратное направление описано в [инженерной документации роботизированного улья](/ru/docs/robotic-beehive/). Рабочий процесс осмотра опирается на [управление стороной рамки](../web_app/free-tier/frame-side-management.md) и [управление осмотрами](../web_app/hobbyist-tier/inspection-management.md) в веб-приложении.

`status`: [TRL 2](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

<div style={{width:300}}>
![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2011.25.06.png)
</div>

## Обзор

![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2021.42.01.png)

### Фокус проблем

Из всех проблем пчеловодства этот продукт помогает с такими:

- [👁️ наблюдаемость состояния семьи](/about/problems/core/observability-of-bee-colony/);
- [💀 инвазивные осмотры](/about/problems/intrusive-inspections/);
- [💪🏻 физический труд](/about/problems/core/physical-labor/);
- [🦀 заражения](/about/problems/biological/infestations/);
- [💀 гибель пчёл при alcohol wash](/about/problems/alcohol-washing-killing-bees/);
- [💀 семья без матки](/about/problems/colony-without-a-queen/);
- [💀 трутовочная матка](/about/problems/biological/colony-with-drone-laying-queen/);
- [🗃️ неудобные/некрасивые ульи](/about/problems/ugly-beehives/);
- [🎒 сложный вход в пчеловодство](/about/problems/challenging-to-become-a-new-beekeeper/).

### Целевые клиенты

Роботизированная платформа осмотра будет стоить больше 2000 EUR. Её главная ценность — цифровизация и организация состояния пасеки. Она может быть слишком громоздкой для [промышленных пчеловодов](/about/company/clients/industrial-beekeepers/) или [фермеров](/about/company/clients/farmers/) и слишком сложной для [новых потенциальных пчеловодов](/about/company/clients/potential-new-beekeepers/). Но она выглядит перспективной для:

- [👨🏻‍🚀 полупрофессиональных пчеловодов](/about/company/clients/semi-professional-beekeepers/);
- [👩🏼‍🏫 городских пчеловодов](/about/company/clients/urban-beekeepers/);
- [👩🏻 программ корпоративного спонсорства ульев](/about/company/clients/tech-scale-up-companies/).

![](/about/img/president.png)

Президент Алар Карис собирает мёд из ульев у Кадриоргского дворца ([фото: Office of the President](https://news.err.ee/1609070024/gallery-president-alar-karis-harvesting-honey-in-front-of-kadriorg-palace#lg=1&slide=1)). Это пример потенциального complementary brand.

## Возможности и идеи

Часть идей уже локализована на русском и переиспользует общие изображения, документы и исследовательские материалы:

- [🎮 Клиентское приложение с UI в режиме ручного управления](ideas/🎮%20Client-side%20app%20with%20UI%20in%20manual%20override%20mode.md)
- [🔌 Энергетическая автономность](ideas/🔌%20Energy%20autonomy.md)
- [🔥 Подогрев улья](ideas/🔥%20Hive%20heating.md)
- [🚁 Управление вентиляцией](ideas/🚁%20Ventilation%20control.md)
- [🤖 Общение с пчелиной семьёй через ИИ](ideas/🤖%20Talk%20to%20bee%20colony%20with%20AI.md)
- [📸 Сканирование рамки в реальном времени](todo/📸%20Real-time%20frame%20scanning.md)
- [📸 Полный осмотр улья](todo/📸%20Full%20hive%20inspection.md)

Остальные идеи пока доступны в английской версии и будут локализованы постепенно.

## Нефункциональные требования

Извлечение рамок должно происходить без лишнего беспокойства пчёл, без воздействия погоды и без риска для людей рядом.

- адаптация к размеру рамки и секции улья клиента: Langstroth, Farrar, National и т.д.;
- безопасность оператора;
- отсутствие травм и гибели пчёл из-за механизмов, охлаждения или щелей;
- способность извлечь рамку, приклеенную воском;
- пожаробезопасность: воск легко воспламеняется;
- перемещение рамки, полной мёда, до 4 кг;
- ремонтопригодность: модульность и hot-swap;
- offline-first режим без обязательного интернета или облачного аккаунта;
- ручное управление на месте;
- безопасный режим при потере питания.

## Прототип

Прототип состоит из актуаторов для движения рамки внутрь/наружу, GPU и камер. Это очень ранняя стадия: сейчас основной фокус — [веб-приложение](../web_app/index.md) и [Entrance Observer](../entrance_observer/entrance_observer.md).