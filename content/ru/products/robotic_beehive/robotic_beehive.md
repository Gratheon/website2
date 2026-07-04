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

Детальные идеи пока остаются на английском и переиспользуют канонические страницы:

- [🍭 Automatic sugar syrup feeder](/products/robotic_beehive/ideas/automatic-sugar-syrup-feeder/)
- [🎙️ 6-channel audio monitoring](/products/robotic_beehive/ideas/6-channel-audio-monitoring/)
- [🎮 Client-side app with UI in manual override mode](/products/robotic_beehive/ideas/client-side-app-with-ui-in-manual-override-mode/)
- [🐝 Bee nursing video analysis](/products/robotic_beehive/ideas/bee-nursing-video-analysis/)
- [🐝 Bee specialization classification](/products/robotic_beehive/ideas/bee-specialization-classification/)
- [🔌 Energy autonomy](/products/robotic_beehive/ideas/energy-autonomy/)
- [🔥 Hive heating](/products/robotic_beehive/ideas/hive-heating/)
- [🚁 Ventilation control](/products/robotic_beehive/ideas/ventilation-control/)
- [🛑 Close mechanized hive entrance in case of hornet attack](/products/robotic_beehive/ideas/close-mechanized-hive-entrance-in-case-of-hornet-attack/)
- [🤖 Talk to bee colony with AI](/products/robotic_beehive/ideas/talk-to-bee-colony-with-ai/)
- [🦀 Hive bottom scanning](/products/robotic_beehive/ideas/hive-bottom-scanning/)
- [🦾 Robotic frame reordering](/products/robotic_beehive/ideas/robotic-frame-reordering/)
- [🧪 Automatic acid treatment against varroa](/products/robotic_beehive/ideas/automatic-acid-treatment-against-varroa/)

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