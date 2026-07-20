---
title: Проекты хакеров
navTitle: Проекты хакеров
layout: research
order: 4
hideToc: true
heroImage: https://hackster.imgix.net/uploads/attachments/1549817/_WGXxJxi9se.blob?auto=compress%2Cformat&w=900&h=675&fit=min
---

Эта страница отслеживает внешние проекты хакеров, студентов и open-source сообщества вокруг цифрового пчеловодства, IoT-мониторинга ульев, камер, счётчиков пчёл и экспериментальной автоматизации ульев.

Цель — не ранжировать эти проекты. Цель — вести практическую базу исследований: как называется каждый проект, кто опубликовал его (если видно), что делает его уникальным, и какие идеи могут быть полезны для исследований продуктов Gratheon.

Примечания:

- ⭐️ отмечает проекты, которые выглядят особенно релевантными для наблюдения за входом в улей, телеметрии улья или воспроизводимого оборудования.
- Информация об авторах берётся из видимого владельца GitHub, кредитов Hackster или названия команды проекта. Когда реальный человек не виден, указывается публичный профиль или название команды.
- Некоторые проекты Hackster — это студенческие прототипы. Они всё ещё полезны, потому что многие включают схемы, исходный код, спецификации компонентов и полевые заметки.

## Наблюдение за входом в улей, подсчёт пчёл и компьютерное зрение

| Проект | Автор(ы) | Источник | Особенности и исследовательская ценность |
|---|---|---|---|
| Hive Vision | Янжа Клавжер, бirkdavid, DAVID STARIC, Лука Мали | [Hackster](https://www.hackster.io/507447/hive-vision-024457) | Фокусируется на обнаружении отмеченной матки rather than входного трафика. Использует Arduino Nano 33 BLE Sense, камеру OV7675, Edge Impulse, прошивку Arduino, Bluetooth-индикаторы и Android-приложение. Полезная ссылка для UX поиска матки и ограничений ML на устройстве. |
| Hive Guard Bee Density Analyzer | Шейха Хассан | [GitHub](https://github.com/SheikhaHassan/Beekeepers) | Веб-приложение Streamlit для загруженных видео ульев: пчеловод отмечает входную зону и зоны плотности стражей, затем получает загружаемый журнал активности Excel с отметками времени для входящих, исходящих и пчёл с пыльцой. Похоже на Gratheon, потому что преобразует видеозаписи входа в структурированные записи активности пчёл rather than только показывает обнаружения. |
| Bee-Nest-Computer-Vision | iurimb | [GitHub](https://github.com/iurimb/Bee-Nest-Computer-Vision) | Proof-of-concept конвейер компьютерного зрения для анализа гнёзд пчёл с использованием YOLOv8, ByteTrack, Supervision, пользовательского набора данных и подсчёта пчёл по линиям в/из. Подтверждено как релевантное, потому что явно решает проблемы маленьких быстрых пчёл, отслеживания и направления входных подсчётов с воспроизводимыми скриптами и видео результатов. |
| BeePi | VKEDCO / хранители репозитория PYPL | [GitHub](https://github.com/VKEDCO/PYPL/tree/master/beepi/py) | Маленькая папка BeePi, ориентированная на Python, внутри репозитория VKEDCO PYPL. Видимые файлы — это скрипты утилит для трансформации замет/частот и фильтрации, что делает его более релевантным к экспериментам со акустическими сигналами rather than полная сборка мониторинга улья. |

## Физические счётчики пчёл и оборудование входа

| Проект | Автор(ы) | Источник | Особенности и исследовательская ценность |
|---|---|---|---|
| 2019 Easy Bee Counter V.1 | hydronics2 | [GitHub](https://github.com/hydronics2/2019-easy-bee-counter), [Instructables](https://www.instructables.com/Easy-Bee-Counter/), [Статья Nordic DevZone](https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/smart-hives-beehavior-monitoring) | Оптический счётчик PCB для входов ульев с through-hole, дружелюбный к новичкам. Использует 24 шлюза, 48 отражательных ИК-датчиков, 6 регистров сдвига и микроконтроллеры Feather/ItsyBitsy совместимые. README объясняет определение направления, импульсную подачу питания на ИК-светодиоды низкого энергопотребления, заказ PCB и почему чёрные PCB помогают поглощать ИК. |
| Заметки о данных Easy Bee Counter | hydronics2 | [Заметки об анализе данных](https://github.com/hydronics2/2019-easy-bee-counter/tree/master/Data) | Полезно как ссылка на дизайн для понимания, почему входные подсчёты важны и как сырые события шлюза могут стать сигналами дружественными к пчеловоду. Больше ориентирован на аппаратный счётчик rather than системы на основе камер. |
| Connected Beehive - Vision-Based Hive Monitor Using the ESP32-CAM | Команда ConnectedBee: Шубхам Каддам, Рутуджа Каваре, Акшай Салве, Адити Пхансопкар | [Hackster](https://www.hackster.io/connectedbees/project-details-8f45c1) | Монитор улья на основе зрения, построенный на ESP32-CAM с фокусом на анализе поведения входа. Хорошая ссылка для сравнения выборов конвейера зрения против подходов Hive Guard и Bee-Nest-Computer-Vision к подсчёту на основе камер низкой стоимости. |
| Connected-Bee-Hive - LoRaWAN-Based Beehive Monitoring | Команда ConnectedBee: Шубхам Каддам, Рутуджа Каваре, Акшай Салве, Адити Пхансопкар | [Hackster](https://www.hackster.io/connectedbees/project-details-8f45c1) | Компаньон LoRaWAN версии проекта connected beehive. Использует ESP32 с DHT22, weighing cell и солнечной/батарейной энергией для удалённой телеметрии в Ubidots/The Things Stack. Релевантен как альтернативный стек датчиков по сравнению с полными установками зрения. |
| Beestial | N'KOUKA Натан, Реми Антонуччи, Джекки Чен, Амит Патель | [Hackster](https://www.hackster.io/503257/beestial-embedded-system-project-8763d1) | Прототип подключённого улья с LoRaWAN с Arduino Nano 33 BLE Sense, LoRa-E5, Ubidots, The Things Stack, Beep Monitor, HX711, температура/влажность, микрофон, яркость и датчики батареи. Отличительная черта как достаточно полная студенческая сборка с PCB, корпусом, видео и заметками по настройке LoRaWAN. |
| Connected bee hive project - remote hive monitoring | Команда Bee Efficient: Каролина Альонсо, Томас Корпал, Лайса, Михаэль Бадейр | [Hackster](https://www.hackster.io/bee-efficient/connected-bee-hive-project-remote-hive-monitoring-e7cd34) | Продвинутая сборка удалённого мониторинга предназначенная для уменьшения вмешательств в улей. Включает большой список компонентов, водонепроницаемый корпус, солнечную/батарейную энергию, LoRa-E5, Ubidots, The Things Stack, Beep, микрофон/аудиопуть, температуру, влажность, вес, датчик батареи, KiCad и FreeCAD. |
| BeeHave - Bee monitor | Водхел, ВовоauxHugo, Матьё Семецадо, СестКлерТаВу | [Hackster](https://www.hackster.io/498657/beehave-bee-monitor-51769a) | Студенческий монитор LoRaWAN для частоты, температуры, влажности, света и веса. Заметный для выделенного усилителя микрофона PCB, использования Arduino FFT, попытки солнечной зарядки и честных полевых заметок о паяльных работах и отказах развёртывания. |
| Connected-Bee-Hive with an Arduino MKRWAN | Команда Bee-Yonce: Магуетта СОУ, Хадим Кане, Уссейну, Сапидда, Реджинтан | [Hackster](https://www.hackster.io/bee-yonce/connected-bee-hive-with-an-arduino-mkrwan-36d6ca) | Устройство Arduino MKR WAN 1310 LoRaWAN для удалённых данных улья, с DHT22, DS18B20, HX711, солнечной ячейкой, батареей, INA219, Ubidots, The Things Stack, Beep Monitor, работой PCB и наружной работой корпуса. Хорошая ссылка для дашбордов и оповещений вокруг телеметрии LoRaWAN. |
| Internet of Bees | gusgonnet, Джейкоб | [Hackster](https://www.hackster.io/gusgonnet/internet-of-bees-120ca7), [GitHub](https://github.com/gusgonnet/beehiveMonitor) | Мобильный или Wi-Fi монитор улья с использованием Particle Boron/Argon, ADXL343/ADT7410, DS18B20, Ubidots и Telegram. Отличительные особенности включают оповещения о перевороте/движении, циклы сна с учётом батареи, конфигурируемую прошивку и маршрутизацию уведомлений по email, SMS или Telegram. |
| IoT for Bees (& Beekeepers a Bit Too) | Вилем Кужел | [Hackster](https://www.hackster.io/vilemkuzel/iot-for-bees-beekeepers-a-bit-too-e2595d) | NXP Rapid IoT и концепция Sigfox для мониторинга температуры плюс обнаружение краж. Интересно, потому что он treats anti-theft как функцию первого класса в мониторинге ульев и использует callbacks Sigfox для запуска SMS/e-mail оповещений и пользовательской визуализации сервера. |
| BeeInformed: Environmental Analyzer for Beekeeping | Фелипе Невеш | [Hackster](https://www.hackster.io/uLipe/beeinformed-environmental-analyzer-for- beekeeping-420b4b) | Продвинутый экологический анализатор с использованием Bosch XDK и Qualcomm DragonBoard 410c. Измеряет температуру, влажность, атмосферное давление, освещённость, аудио для оценки агрессии и GPS местоположение. Выделяется своей шлюзовой/облачной архитектурой и framing трассировки/качества продукта. |

## Специализированная автоматизация ульев и эксперименты со здоровьем

| Проект | Автор(ы) | Источник | Особенности и исследовательская ценность |
|---|---|---|---|
| iTRUBEC - IoT for Bees | Вилем Кужел, с благодарностью Милану Печинке | [Hackster](https://www.hackster.io/vilemkuzel/itrubec-iot-for-bees-a622a8) | Эксперимент по нагреву ульев под управлением Arduino для лечения Varroa destructor. Использует DS18B20, DHT22, реле, BLE, SD карту, RTC, Wemos D1 и нагревательную подушку 12 В. Отличается от большинства мониторов, потому что это активная система вмешательства, нацеленная на температуры 44-49°C смертельные для клещей, которые должны оставаться безопасными для пчёл. |
| LittleBee: Acoustic Sensor For Measuring Bee Hissing Level | Команда The BeeInformedTeam | [Hackster](https://www.hackster.io/the-beeinformedteam/littlebee-acoustic-sensor-for-measuring-bee-hissing-level-960f6a) | Акустико-поведенческий проект, сфокусированный на уровне шипения пчёл rather than generic telemetry температуры/веса. Релевантен для будущих исследований классификации стресса, беспокойства или поведения на основе звука. |
