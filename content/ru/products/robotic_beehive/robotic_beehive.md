---
title: 🧿 Роботизированный улей
layout: products
sidebar_position: 5
---

Мы разрабатываем роботизированную платформу для осмотра вертикального улья. Она должна:

- поднимать несколько секций улья, чтобы быстрее добраться до гнезда;
- фотографировать рамки встроенными камерами, пока ручной подъём рамок всё ещё остаётся частью процесса;
- загружать результат осмотра в [веб-приложение](../web_app/index.md);
- перемещаться на колёсах, чтобы одну платформу можно было использовать для разных ульев.

Аппаратное направление описано в [инженерной документации роботизированного улья](../../docs/robotic-beehive/robotic-beehive.md). Рабочий процесс осмотра опирается на [управление стороной рамки](../web_app/free-tier/frame-side-management.md) и [управление осмотрами](../web_app/hobbyist-tier/inspection-management.md) в веб-приложении.

`status`: [TRL 2](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

<div style={{width:300}}>
![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2011.25.06.png)
</div>

## Обзор

![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2021.42.01.png)

### Фокус проблем

Из всех проблем пчеловодства этот продукт помогает с такими:

- [👁️ наблюдаемость состояния семьи](../../about/problems/core/👁️%20Observability%20of%20bee%20colony.md);
- [💀 инвазивные осмотры](../../about/problems/💀%20Intrusive%20inspections.md);
- [💪🏻 физический труд](../../about/problems/core/💪🏻%20Physical%20labor.md);
- [🦀 заражения](../../about/problems/biological/🦀%20Infestations.md);
- [💀 гибель пчёл при alcohol wash](../../about/problems/💀%20Alcohol%20washing%20killing%20bees.md);
- [💀 семья без матки](../../about/problems/💀%20Colony%20without%20a%20queen.md);
- [💀 трутовочная матка](../../about/problems/biological/💀%20Colony%20with%20drone-laying%20queen.md);
- [🗃️ неудобные ульи](../../about/problems/🗃️%20Ugly%20beehives.md);
- [🎒 сложный вход в пчеловодство](../../about/problems/🎒%20Challenging%20to%20become%20a%20new%20beekeeper.md).

### Целевые клиенты

Роботизированная платформа осмотра будет стоить больше 2000 EUR. Её главная ценность - цифровизация и организация состояния пасеки. Она может быть слишком громоздкой для [промышленных пчеловодов](../../about/company/clients/👨🏻‍🚒%20Industrial%20beekeepers.md) или [фермеров](../../about/company/clients/🧑🏻‍🌾%20Farmers.md) и слишком сложной для [новых потенциальных пчеловодов](../../about/company/clients/👨🏻%20Potential%20new%20beekeepers.md). Но она выглядит перспективной для:

- [👨🏻‍🚀 полупрофессиональных пчеловодов](../../about/company/clients/👨🏻‍🚀%20Semi-professional%20beekeepers.md);
- [👩🏼‍🏫 городских пчеловодов](../../about/company/clients/👩🏼‍🏫%20Urban%20beekeepers.md);
- [👩🏻 программ корпоративного спонсорства ульев](../../about/company/clients/👩🏻%20Tech%20scale-up%20companies.md).

![](/about/img/president.png)

Президент Алар Карис собирает мёд из ульев у Кадриоргского дворца ([фото: Office of the President](https://news.err.ee/1609070024/gallery-president-alar-karis-harvesting-honey-in-front-of-kadriorg-palace#lg=1&slide=1)). Это пример того, как ульи могут работать как заметный брендовый объект в городской среде.

## Возможности

Часть идей уже локализована на русском и использует общие изображения, документы и исследовательские материалы:

- [🍭 Автоматическая кормушка сахарным сиропом](ideas/🍭%20Automatic%20sugar%20syrup%20feeder.md)
- [🎙️ 6-канальный аудиомониторинг](ideas/🎙️%206-channel%20audio%20monitoring.md)
- [🎮 Клиентское приложение с UI в режиме ручного управления](ideas/🎮%20Client-side%20app%20with%20UI%20in%20manual%20override%20mode.md)
- [🎮 Подключение робота к UX веб-приложения](ideas/🎮%20Connecting%20robot%20to%20web-app%20UX.md)
- [🐝 Видеоанализ ухода за пчёлами](ideas/🐝%20Bee%20nursing%20video%20analysis.md)
- [🐝 Классификация специализации пчёл](ideas/🐝%20Bee%20specialization%20classification.md)
- [🔊 Аудиоинтерфейс для взаимодействия с пчёлами](ideas/🔊%20Audio-interface%20to%20talk%20to%20bees.md)
- [🔌 Энергетическая автономность](ideas/🔌%20Energy%20autonomy.md)
- [🔥 Подогрев улья](ideas/🔥%20Hive%20heating.md)
- [🚁 Управление вентиляцией](ideas/🚁%20Ventilation%20control.md)
- [🛑 Закрытие механизированного летка при пчелином воровстве](ideas/🛑%20Close%20mechanised%20hive%20entrance%20in%20case%20of%20robbing%20behaviour.md)
- [🛑 Закрытие механизированного летка при атаке шершней](ideas/🛑%20Close%20mechanized%20hive%20entrance%20in%20case%20of%20hornet%20attack.md)
- [🛑 Механическое уменьшение летка при сильном ветре](ideas/🛑%20Mechanically%20reduce%20hive%20entrance%20in%20case%20of%20high%20wind.md)
- [🤖 Общение с пчелиной семьёй через ИИ](ideas/🤖%20Talk%20to%20bee%20colony%20with%20AI.md)
- [🦀 Сканирование дна улья](ideas/🦀%20Hive%20bottom%20scanning.md)
- [🦾 Подвижное дно улья с подсчётом varroa](ideas/🦾%20Moveable%20hive%20bottom%20with%20varroa%20counting.md)
- [🦾 Роботизированная перестановка рамок](ideas/🦾%20Robotic%20frame%20reordering.md)
- [🦾 Роботизированная вставка новых рамок](ideas/🦾%20Robotic%20insertion%20of%20new%20frames.md)
- [🦾 Роботизированная изоляция и извлечение рамок](ideas/🦾Robotic%20frame%20isolation%20%26%20extraction.md)
- [🧪 Автоматическая кислотная обработка против varroa](ideas/🧪%20Automatic%20acid%20treatment%20against%20varroa.md)

## Нефункциональные требования

Извлечение рамок должно происходить без лишнего беспокойства пчёл, без воздействия погоды и без риска для людей рядом.

- адаптация к размеру рамки и секции улья клиента: Langstroth, Farrar, National и другие;
- безопасность оператора;
- отсутствие травм и гибели пчёл из-за механизмов, охлаждения или щелей;
- способность извлечь рамку, приклеенную воском;
- пожаробезопасность, потому что воск легко воспламеняется;
- перемещение рамки, полной мёда, весом до 4 кг;
- ремонтопригодность, модульность и hot-swap;
- offline-first режим без обязательного интернета или облачного аккаунта;
- ручное управление на месте;
- безопасный режим при потере питания.

## Прототип

Прототип состоит из актуаторов для движения рамки внутрь и наружу, GPU и камер. Это очень ранняя стадия: сейчас основной фокус - [веб-приложение](../web_app/index.md) и [Entrance Observer](../entrance_observer/entrance_observer.md).
