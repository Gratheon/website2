---
sidebar_position: 1
---

### Настройка Arduino IDE для загрузки firmware
- Скачайте [Arduino IDE](https://www.arduino.cc/en/software)
- В preferences добавьте этот URL как extra source: [https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json](https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json)
- ESP32 chips бывают в разных вариантах. Если у вас такой же компонент, как описано в bill of materials — [ESP32](components/ESP32.md), подключите его к компьютеру через USB.
- Выберите `ESP32-WROOM-DA Module` в списке devices.
![](docs/beehive-sensors/img/Screenshot%202024-11-11%20at%2001.33.06.png)

- Убедитесь, что upload speed в Arduino IDE в меню Tools установлен на 115200 baud, чтобы устройство могло принимать данные при загрузке.

![](docs/beehive-sensors/img/Screenshot%202024-07-22%20at%2003.42.43.png)

- Установите библиотеку [DallasTemperature@3.9.0](https://github.com/milesburton/Arduino-Temperature-Control-Library) в Arduino IDE.
- Установите библиотеку [HX711](https://github.com/RobTillaart/HX711) (by RobTillaart) в Arduino IDE.

### Загрузка firmware
- Склонируйте наш client firmware: `git clone git@github.com:Gratheon/beehive-sensors.git`
- Загрузите код на device кнопкой `->`. Вы должны увидеть примерно следующее:
  ![](docs/beehive-sensors/img/Screenshot%202024-11-11%20at%2001.37.37.png)
- Нажмите кнопку reset (`FN`) на chip.

### Настройка включённого ESP32
- Подключитесь к WiFi access point ESP32 `gratheon`, пароль `gratheon`.
- Откройте browser и перейдите на default gateway WiFi access point: [http://192.168.4.1](http://192.168.4.1)
- Введите configuration:
	- WiFi credentials (SSID, password), чтобы sensor подключился к internet.
	- Hive ID — идентификатор улья, который мониторится в web-app. Его можно взять из URL: например, в `https://app.gratheon.com/apiaries/7/hives/54` Hive ID — последние цифры `54`.
	- API Token — чтобы идентифицировать request, принадлежащий user (вам). Token можно сгенерировать в account settings: [https://app.gratheon.com/account](https://app.gratheon.com/account)
- Нажмите кнопку `Save`. ESP32 перезапустится, подключится к вашей WiFi network и начнёт отправлять данные в telemetry API service.


![](docs/beehive-sensors/img/iot-server.png)
