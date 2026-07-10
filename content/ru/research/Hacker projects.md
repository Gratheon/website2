---
title: Хакерские проекты
navTitle: Хакерские проекты
layout: research
order: 4
hideToc: true
heroImage: https://hackster.imgix.net/uploads/attachments/1549817/_WGXxJxi9se.blob?auto=compress%2Cformat&w=900&h=675&fit=min
---

На этой странице собраны внешние хакерские, студенческие и open-source проекты в области цифрового пчеловодства, IoT-мониторинга ульев, камер, счётчиков пчёл и экспериментальной автоматизации ульев.

Цель - не ранжировать эти проекты, а поддерживать практичную исследовательскую базу: как называется каждый проект, кто его опубликовал (если это видно), чем он отличается и какие идеи могут быть полезны для продуктовых исследований Gratheon.

Примечания:

- ⭐️ отмечает проекты, которые выглядят особенно релевантными для наблюдения за летком, телеметрии улья или воспроизводимого железа.
- Информация об авторах взята из видимого владельца GitHub, указанных на Hackster кредитов или названия команды. Если реальное имя не видно, указан публичный профиль или название команды.
- Некоторые проекты на Hackster - студенческие прототипы. Они всё равно полезны, потому что часто включают схемы, исходный код, спецификации компонентов и полевые заметки.

## Наблюдение за летком, подсчёт пчёл и компьютерное зрение

| Проект | Автор(ы) | Источник | Отличительные особенности и исследовательская ценность |
|---|---|---|---|
| Hive Vision | Janja Klavžer, birkdavid, DAVID STARIC, Luka Mali | [Hackster](https://www.hackster.io/507447/hive-vision-024457) | Фокус на детекции маркированной матки, а не на трафике на летке. Использует Arduino Nano 33 BLE Sense, камеру OV7675, Edge Impulse, прошивку Arduino, Bluetooth-индикаторы и Android-приложение. Полезная ссылка для UX локализации матки и ограничений on-device ML. |
| Hive Guard Bee Density Analyzer | SheikhaHassan | [GitHub](https://github.com/SheikhaHassan/Beekeepers) | Streamlit веб-приложение для загруженных видео улья: пчеловод отмечает зоны летка и плотности сторожей, затем получает Excel-журнал активности с метками времени для входящих, выходящих и пыльносущих пчёл. Похоже на Gratheon, потому что превращает видео летка в структурированные записи активности пчёл, а не только показывает детекции. |
| Bee-Nest-Computer-Vision | iurimb | [GitHub](https://github.com/iurimb/Bee-Nest-Computer-Vision) | Proof-of-concept CV-пайплайн для анализа гнезда пчёл на YOLOv8, ByteTrack, Supervision, кастомном датасете и подсчёте пчёл через line-zone при входе и выходе. Подтверждённая релевантность: явно решает задачи мелких быстрых пчёл, трекинга и направленного подсчёта на летке с воспроизводимыми скриптами и видео результатов. |
| BeePi | VKEDCO / maintainers репозитория PYPL | [GitHub](https://github.com/VKEDCO/PYPL/tree/master/beepi/py) | Небольшая Python-папка BeePi внутри репозитория VKEDCO PYPL. Видимые файлы - утилитарные скрипты для преобразования нот/частот и фильтрации, поэтому проект ближе к акустическим экспериментам, чем к полноценному монитору улья. |

## Физические счётчики пчёл и железо для летка

| Проект | Автор(ы) | Источник | Отличительные особенности и исследовательская ценность |
|---|---|---|---|
| 2019 Easy Bee Counter V.1 | hydronics2 | [GitHub](https://github.com/hydronics2/2019-easy-bee-counter), [Instructables](https://www.instructables.com/Easy-Bee-Counter/), [статья Nordic DevZone](https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/smart-hives-beehavior-monitoring) | Through-hole, дружелюбная к новичкам оптическая PCB-схема счётчика для летка. 24 ворот, 48 отражательных ИК-сенсоров, 6 сдвиговых регистров и микроконтроллеры Feather/ItsyBitsy. README объясняет определение направления, импульсную подсветку ИК-светодиодов, заказ PCB и почему чёрные платы лучше поглощают ИК. |
| Easy Bee Counter data notes | hydronics2 | [Заметки по анализу данных](https://github.com/hydronics2/2019-easy-bee-counter/tree/master/Data) | Полезная ссылка на то, почему важны подсчёты на летке и как сырые события ворот превращаются в понятные пчеловоду сигналы. Больше ориентирован на аппаратный счётчик, чем на камерные системы. |
| Connected Beehive - Vision-Based Hive Monitor Using the ESP32-CAM | Команда ConnectedBee: Shubham Kadam, Rutuja Kaware, Akshay Salve, Aditi Phansopkar | [Hackster](https://www.hackster.io/connectedbees/project-details-8f45c1) | Визуальный монитор улья на ESP32-CAM с фокусом на анализ поведения на летке. Хорошая ссылка для сравнения выбора vision-пайплайна с Hive Guard и Bee-Nest-Computer-Vision в недорогих камерных системах подсчёта. |
| Connected-Bee-Hive - LoRaWAN-Based Beehive Monitoring | Команда ConnectedBee: Shubham Kadam, Rutuja Kaware, Akshay Salve, Aditi Phansopkar | [Hackster](https://www.hackster.io/connectedbees/project-details-8f45c1) | LoRaWAN-версия connected beehive. ESP32 с DHT22, тензодатчиком и солнечным/аккумуляторным питанием для удалённой телеметрии в Ubidots/The Things Stack. Релевантна как альтернативный сенсорный стек по сравнению с полноценными vision-установками. |
| Beestial | N'KOUKA Nathan, Rémi Antonucci, Jacky Chen, Amit Patel | [Hackster](https://www.hackster.io/503257/beestial-embedded-system-project-8763d1) | LoRaWAN-прототип подключённого улья с Arduino Nano 33 BLE Sense, LoRa-E5, Ubidots, The Things Stack, Beep Monitor, HX711, температурой/влажностью, микрофоном, яркостью и мониторингом батареи. Отличается как довольно полный студенческий билд с PCB, корпусом, видео и заметками по настройке LoRaWAN. |
| Connected bee hive project - remote hive monitoring | Команда Bee Efficient: Caroline Alonso, Thomas Korpal, LaisA, Michaël Baudeur | [Hackster](https://www.hackster.io/bee-efficient/connected-bee-hive-project-remote-hive-monitoring-e7cd34) | Продвинутый удалённый мониторинг, призванный сократить вмешательства в улей. Большой список компонентов, водонепроницаемый корпус, солнечное/аккумуляторное питание, LoRa-E5, Ubidots, The Things Stack, Beep, микрофон/аудиотракт, температура, влажность, вес, мониторинг батареи, KiCad и FreeCAD. |
| BeeHave - Bee monitor | Vodhel, VouauxHugo, MathieuSemenzato, CestClaireTaWu | [Hackster](https://www.hackster.io/498657/beehave-bee-monitor-51769a) | Студенческий LoRaWAN-монитор частоты, температуры, влажности, света и веса. Примечателен выделенной PCB усилителя микрофона, использованием Arduino FFT, попыткой солнечной зарядки и честными полевыми заметками о проблемах пайки и развёртывания. |
| Connected-Bee-Hive with an Arduino MKRWAN | Команда Bee-Yonce: Maguette SOW, Khadim Kane, Ousseynou, Sapidda, Rejinthan | [Hackster](https://www.hackster.io/bee-yonce/connected-bee-hive-with-an-arduino-mkrwan-36d6ca) | Arduino MKR WAN 1310 LoRaWAN-устройство для удалённых данных улья с DHT22, DS18B20, HX711, солнечной панелью, батареей, INA219, Ubidots, The Things Stack, Beep Monitor, работой с PCB и уличным корпусом. Хорошая ссылка для дашбордов и алертов вокруг LoRaWAN-телеметрии. |
| Internet of Bees | gusgonnet, Jacob | [Hackster](https://www.hackster.io/gusgonnet/internet-of-bees-120ca7), [GitHub](https://github.com/gusgonnet/beehiveMonitor) | Сотовый или Wi-Fi монитор улья на Particle Boron/Argon, ADXL343/ADT7410, DS18B20, Ubidots и Telegram. Отличительные функции: алерты при опрокидывании/перемещении, циклы сна с учётом батареи, настраиваемая прошивка и маршрутизация уведомлений по email, SMS или Telegram. |
| IoT for Bees (& Beekeepers a Bit Too) | Vilém Kužel | [Hackster](https://www.hackster.io/vilemkuzel/iot-for-bees-beekeepers-a-bit-too-e2595d) | Концепт на NXP Rapid IoT и Sigfox для мониторинга температуры плюс детекции кражи. Интересен тем, что антикража рассматривается как полноценная функция мониторинга улья, а Sigfox-колбэки запускают SMS/email-алерты и визуализацию на кастомном сервере. |
| BeeInformed: Environmental Analyzer for Beekeeping | Felipe Neves | [Hackster](https://www.hackster.io/uLipe/beeinformed-environmental-analyzer-for-beekeeping-420b4b) | Продвинутый экологический анализатор на Bosch XDK и Qualcomm DragonBoard 410c. Измеряет температуру, влажность, атмосферное давление, освещённость, аудио для оценки агрессивности и GPS-локацию. Выделяется gateway/cloud-архитектурой и фокусом на прослеживаемости и качестве продукта. |

## Специализированная автоматизация улья и эксперименты со здоровьем

| Проект | Автор(ы) | Источник | Отличительные особенности и исследовательская ценность |
|---|---|---|---|
| iTRUBEC - IoT for Bees | Vilém Kužel, с благодарностью Milan Pečinka | [Hackster](https://www.hackster.io/vilemkuzel/itrubec-iot-for-bees-a622a8) | Эксперимент с подогревом улья на Arduino для борьбы с Varroa destructor. DS18B20, DHT22, реле, BLE, SD-карта, RTC, Wemos D1 и 12 В нагревательная панель. Отличается от большинства мониторов тем, что это активная система вмешательства с целевыми 44–49°C, смертельными для клеща, но безопасными для пчёл. |
| LittleBee: Acoustic Sensor For Measuring Bee Hissing Level | The BeeInformedTeam | [Hackster](https://www.hackster.io/the-beeinformedteam/littlebee-acoustic-sensor-for-measuring-bee-hissing-level-960f6a) | Акустический проект, сфокусированный на уровне шипения пчёл, а не на общей температуре/весе. Релевантен для будущих исследований классификации стресса, возмущений или поведения по звуку. |
| Hive IA control of Honey Bee for person with disability | Davide Cogliati | [Hackster](https://www.hackster.io/davide-cogliati/hive-ia-control-of-honey-bee-for-person-with-disability-0ab4dc) | Концепт управления ульем с учётом доступности. Стоит отслеживать отдельно, потому что мотивация дизайна - взаимодействие пчеловода и ассистивное управление, а не только телеметрия колонии. |

## Дополнительные направления для дальнейшего изучения

Эти проекты были в исходном списке и остаются полезными направлениями. Их нужно изучить глубже, прежде чем переносить в подробные разделы выше.

| Проект | Видимый автор/профиль | Источник | Почему может быть релевантен |
|---|---|---|---|
| Hive Guard Bee Density Analyzer | SheikhaHassan | [GitHub](https://github.com/SheikhaHassan/Beekeepers) | Streamlit веб-приложение для загруженных видео улья: пчеловод отмечает зоны летка и плотности сторожей, затем получает Excel-журнал активности с метками времени для входящих, выходящих и пыльносущих пчёл. |
| Bee-Nest-Computer-Vision | iurimb | [GitHub](https://github.com/iurimb/Bee-Nest-Computer-Vision) | Proof-of-concept CV-пайплайн с YOLOv8, ByteTrack, Supervision, кастомным датасетом и подсчётом пчёл через line-zone. |
| Don't Worry Bee Happy | lichuancotton | [Hackster](https://www.hackster.io/lichuancotton/don-t-worry-bee-happy-710916) | Прототип, связанный с улей, с сильным названием вокруг уверенности пчеловода и мониторинга. |
| The Busy Bee | 444823 | [Hackster](https://www.hackster.io/444823/the-busy-bee-a8b5b7) | Потенциальный прототип мониторинга активности улья. |
| iTRUBEC Minimonitor v1.0 - IoT for Bees | Vilém Kužel | [Hackster](https://www.hackster.io/vilemkuzel/itrubec-minimonitor-v1-0-iot-for-bees-a7d4b8) | Вероятно, компактный companion-монитор в семействе iTRUBEC для сравнения минимальной телеметрии с проектом подогрева. |
| Open Ruche: A Connected Beehive for Smart Bee Monitoring | oumertamine3 | [Hackster](https://www.hackster.io/oumertamine3/open-ruche-a-connected-beehive-for-smart-bee-monitoring-ef24ac) | Концепт подключённого улья с франкоязычным/open-hive позиционированием. |
| L'abeille vie | L'abeille vie | [Hackster](https://www.hackster.io/l-abeille-vie/l-abeille-vie-ed1e73) | Французское название проекта предполагает прототип мониторинга жизни пчёл/улья. |
| B-NAHL Hive Monitor | B-NAHL | [Hackster](https://www.hackster.io/b-nahl/b-nahl-hive-monitor-d17fba) | Направление монитора улья, потенциально полезное для сравнения телеметрии. |
| SmartBees | smartbees | [Hackster](https://www.hackster.io/smartbees/smartbees-e5f807) | Направление connected-beehive или smart-apiary. |
| Beehive Monitor using an Arduino 33 BLE Sense | 442967 | [Hackster](https://www.hackster.io/442967/beehive-monitor-using-an-arduino-33-ble-sense-19ee10) | Мониторинг на Arduino 33 BLE Sense, полезен для сравнения с Hive Vision и другими проектами на Nano 33 BLE Sense. |
| Beehive Monitoring and Tracking | sgoutteb | [Hackster](https://www.hackster.io/sgoutteb/beehive-monitoring-and-tracking-c1339e) | Мониторинг плюс трекинг, потенциально релевантен для кражи или логистики ульев. |
| Beenfo | 517832 | [Hackster](https://www.hackster.io/517832/beenfo-849f65) | Компактный проект мониторинга/информирования. |
| Honey Guys - Monitoring of a bee hive | walidsrb4 | [Hackster](https://www.hackster.io/walidsrb4/honey-guys-monitoring-of-a-bee-hive-476c12) | Направление мониторинга улья из исходного списка, полезно для сравнения выбора сенсоров и подачи проекта. |
| Beekeeping with Arduino | pvalyk | [Hackster](https://www.hackster.io/pvalyk/beekeeping-with-arduino-4216bb) | Arduino-ориентированная пчеловодческая ссылка, вероятно проще и воспроизводимее. |
| BeeO Terminal | batcopter | [Hackster](https://www.hackster.io/batcopter/beeo-terminal-a05c57) | Угол терминала/устройства может быть полезен для UX-идей пчеловода. |
| HiveSupportSystem | Zacch | [Hackster](https://www.hackster.io/Zacch/hivesupportsystem-4b2475) | Позиционирование support-system может включать функции управления шире, чем только чтение сенсоров. |
| OpenRuche - BeeBrave | BeeBrave | [Hackster](https://www.hackster.io/beebrave/openruche-beebrave-320aa8) | Проект семейства OpenRuche, стоит сравнить с другими open connected hive инициативами. |
| Open Ruche | zams | [Hackster](https://www.hackster.io/zams/open-ruche-3a25f5) | Ещё одна реализация OpenRuche. |
| Hive Monitoring System | Noah Maupu | [Hackster](https://www.hackster.io/noahmaupu/hive-monitoring-system-05767d) | Базовая система мониторинга улья, потенциально полезная для сравнения архитектуры. |
| B-Hive | dect | [Hackster](https://www.hackster.io/dect/b-hive-a14efa) | Короткий beehive-проект, требует просмотра содержимого. |
| Projet OpenRucheG2 | rucheg2 | [Hackster](https://www.hackster.io/rucheg2/projet-openrucheg2-c1c77d) | Направление OpenRuche второго поколения. |
| beemos | Hackuarium | [GitHub](https://github.com/Hackuarium/beemos) | Open-source репозиторий от Hackuarium, вероятно релевантен community science мониторингу ульев. |
| IoT beehive monitoring system | DanNduati | [GitHub](https://github.com/DanNduati/IoT-beehive-monitoring-system) | GitHub-направление общей IoT-системы мониторинга улья. |
