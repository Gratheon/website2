---
title: 👁️‍🗨️ Входной наблюдатель
sidebar_position: 5
hide_table_of_contents: true
---
Основной клиентской службой является [beehive-entrance-video-processor](https://github.com/Gratheon/beehive-entrance-video-processor), ее необходимо запустить на периферийном устройстве для захвата и отправки данных на web-app. Нашим главным приоритетом является вывод на периферийном устройстве, но мы также хотим иметь гибридный вывод с поддержкой облака.

Обзор уровня продукта см. в [Entrance Observer](../../about/products/entrance_observer/entrance_observer.md). Собранные метрики подключаются к [хранилищу телеметрии Hive](../../about/products/web_app/pro-tier/hive_telemetry_storage.md) и [аналитике временных рядов](../../about/products/web_app/pro-tier/timeseries_data_analytics.md).
### Обработка, воспроизведение и аналитика видео

```mermaid
flowchart LR
	web-app("<a href='https://github.com/Gratheon/web-app'>web-app</a>\n:8080") --"fetch video streams"--> graphql-router("<a href='https://github.com/Gratheon/graphql-router'>graphql-router</a>") --"list video stream URLs"--> gate-video-stream -- "get data for playback" --> mysql

	web-app --"record & upload \n 10s webcam video"--> gate-video-stream("<a href='https://github.com/Gratheon/gate-video-stream'>gate-video-stream</a>\n:8900") --"inference video"--> models-gate-tracker("<a href='https://github.com/Gratheon/models-gate-tracker'>models-gate-tracker</a>")

	gate-video-stream --"store video re-training with 1 month TTL"--> aws-s3
	gate-video-stream --"store results long-term" --> mysql

	entrance-observer("<a href='https://github.com/Gratheon/entrance-observer'>entrance-observer</a>") --"record & upload 10s video chunks\nsend edge-computed telemetry"--> gate-video-stream

	entrance-observer -."send detected bees \n timeseries counts".-> telemetry-api("<a href='https://github.com/Gratheon/telemetry-api'>telemetry-api</a>")

	web-app --"include analytics page"--> grafana("<a href='https://github.com/Gratheon/grafana'>grafana</a>\n:9000") --"read bee traffic over time"--> influxdb("influxdb:5300")
```





Защитная крышка камеры
![](docs/entrance-observer/img/Screenshot%202025-09-13%20at%2012.30.27.png)

## Выбор архитектуры обработки

Мы можем подойти к обработке видео с разных ракурсов:

| **Где** | **Плюсы** | **Минусы** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Устройство Edge без GPU <br />raspberry-pi <br /> <br />ex.  <br />[🇨🇿 BeeLogger](https://www.notion.so/BeeLogger-ad269086bf8449faa0aae6754f879181?pvs=21), [BeePi](https://www.notion.so/BeePi-2e3023f492864fa98b2790743c3ba6e4?pvs=21) | - дешево ~ 95 евро за доску | - ограничено простыми числовыми моделями <br />- может быть ненадежным |
| Edge-устройство с GPU <br />(jetson nano) <br /> <br />ex.  <br />[🇩🇪Apic.ai](https://www.notion.so/Apic-ai-7859a940fd644a3fa35008fd3a2f1909?pvs=21), [🇦🇺Beemate](https://www.notion.so/Beemate-7f54f62332334254b42e3e584dfae537?pvs=21), [🔬BeeAlarmed. Магистерская диссертация](https://www.notion.so/BeeAlarmed-Masters-thesis-d9c40374718b480ab08a3872f441a2d8?pvs=21) | - эффективный <br />- низкая зависимость от сети <br />- может работать в автономном режиме с собственным GPU | ~ стоимость 230 евро за одну плату |
| Гибрид: <br />- локальная рабочая станция с GPU <br />- Устройства потокового видео | - общая стоимость ниже | - более высокая первоначальная стоимость устройства <br />- необходимость выделенного места для рабочей станции |
| Только облако, напр.  [LabelBee](https://www.notion.so/LabelBee-482ad7f33192487caae38697b21b7f5d?pvs=21) |                                                                                                                                                                                                                                                                                     | - требуется высокая пропускная способность сети <br />- необходимо оптимизировать переменную пропускную способность сети <br />- дорого <br />- стоимость потоковой передачи и обработки видео <br />- стоимость хранения видео |
| Специализированные [устройства на печатной плате](https://jlcpcb.com/) | - энергоэффективность <br />- низкая себестоимость | - обычно мало оперативной памяти, GPU <br />- высокая стоимость разработки |
| На мобильном телефоне | - цена контролируется клиентом <br />- имеет встроенную сеть <br />- имеет камеру <br />- имеет экран <br />- имеет аккумулятор и управление питанием <br />- нет блокировки от производителя <br />- проще всего начать работу <br />- легко настроить пчеловоду <br />- автоматическое перераспределение приложений | - большое разнообразие телефонов, непостоянный опыт <br />- для обработки на телефоне, проблемы с GPU, необходимо использовать специальный мобильный TensorFlow <br />- слишком высокий уровень (в браузере), сложно обрабатывать исключения и может потребоваться вмешательство пользователя |