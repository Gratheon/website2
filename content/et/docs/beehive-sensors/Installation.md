---
sidebar_position: 1
title: "Paigaldamine"
---
### Arduino IDE seadistamine püsivara üleslaadimiseks
- laadige alla [Arduino IDE](https://www.arduino.cc/en/software)
- seadke eelistuste all see URL lisaallikaks [https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json](__ETDOCS_URL_00001__)
- ESP32 laastud on erineva maitsega. Kui teil on sama komponent, mida on kirjeldatud materjalilehel – [ESP32](components/ESP32.md), siis ühendage see USB kaudu oma masinaga
- Valige seadmete loendist `ESP32-WROOM-DA Module`
![](docs/beehive-sensors/img/Screenshot%202024-11-11%20at%2001.33.06.png)

- Muutke Arduino IDE üleslaadimiskiirus kindlasti 115 200 boodi jaotises Tööriistad, et teie seade saaks selle üleslaadimisel andmeid vastu võtta

![](docs/beehive-sensors/img/Screenshot%202024-07-22%20at%2003.42.43.png)

- Installige teek [DallasTemperature@3.9.0](https://github.com/milesburton/Arduino-Temperature-Control-Library) Arduino IDE-sse (DallasTemperature@3.9.0)
- Installige [HX711](https://github.com/RobTillaart/HX711) teek (autor RobTillaart) Arduino IDE-sse 

### Püsivara üleslaadimine
- Vaadake meie kliendi püsivara `git clone git@github.com:Gratheon/beehive-sensors.git`
- Laadige kood seadmesse üles, kasutades nuppu `->`. Peaksite nägema midagi sellist:
  ![](docs/beehive-sensors/img/Screenshot%202024-11-11%20at%2001.37.37.png)
- Klõpsake kiibil oleval lähtestamisnupul (`FN`)

### Sisselülitatud ESP32 konfigureerimine
- Ühendage ESP32 WIFI-pääsupunktiga `gratheon`, kasutage parooli `gratheon`
- Avage brauser ja liikuge WiFi-pääsupunkti vaikelüüsi juurde – [http://192.168.4.1](__ETDOCS_URL_00008__)
- Sisestage konfiguratsioon:
	- WiFi mandaadid (SSID, parool) anduri jaoks Interneti-ühenduse loomiseks
	- Taru ID – web-app jälgitava taru tuvastamiseks. Võite võtta selle URL-ist, näiteks `https://app.gratheon.com/apiaries/7/hives/54` the here ID is the last digits `54`
	- API Token – kasutajale (teile) kuuluva päringu tuvastamiseks. Saate luua märgi konto seadete kaudu aadressil [https://app.gratheon.com/account](__ETDOCS_URL_00009__)
- Klõpsake nuppu `Save`. Teie ESP32 taaskäivitub ja loob ühenduse teie WIFI-võrguga ning hakkab andmeid saatma telemeetriateenusele API


![](docs/beehive-sensors/img/iot-server.png)