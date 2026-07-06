---
title: Hacker projects
navTitle: Hacker projects
layout: research
order: 4
hideToc: true
---

This page tracks external hacker, student, and open-source projects around digital beekeeping, IoT hive monitoring, cameras, bee counters, and experimental hive automation.

The goal is not to rank these projects. It is to keep a practical research database: what each project is called, who published it when that is visible, what makes it different, and which ideas may be useful for Gratheon product research.

Notes:

- ⭐️ marks projects that look especially relevant for entrance observation, hive telemetry, or reproducible hardware.
- Author information is taken from the visible GitHub owner, Hackster credits, or project team name. When a real person is not visible, the public profile or team name is listed.
- Some Hackster projects are student prototypes. They are still useful because many include schematics, source code, bills of materials, and field notes.

## Entrance observer, bee counting, and computer vision

| Project | Author(s) | Source | Distinct features and research value |
|---|---|---|---|
| ⭐️ Bee Health Monitor | boortel / Bee Health Monitor research contributors | [GitHub](https://github.com/boortel/Bee-Health-Monitor/) | Research-oriented open-source monitoring device built from common modules, Raspberry Pi 4, 3D printed parts, plexiglass, camera, microphone, CO2, light, pressure, humidity, and temperature sensors. The entrance unit forces bees through 8 mm tunnels and was used to collect the Bee Dataset BUT-2 with image, sound, and sensor data. |
| ⭐️ BuzzTech: Machine Learning at the Edge | MJRoBot (Marcelo Rovai), José Alberto Ferreira Filho; project context also mentions José Anderson Reis | [Hackster](https://www.hackster.io/518000/buzztech-machine-learning-at-the-edge-07c951), [GitHub](https://github.com/Mjrovai/Bee-Counting/) | YOLOv8-based real-time bee counting at a hive entrance on Raspberry Pi Zero 2 W with a camera module. Stands out because it documents edge deployment, NCNN export, SQLite logging, scheduled capture, environmental data additions, and latency considerations on constrained hardware. |
| ⭐️ Counting bees with the LABRADOR board | MJRoBot (Marcelo Rovai), José Alberto Ferreira Filho | [Hackster](https://www.hackster.io/mjrobot/counting-bees-with-the-labrador-board-3c2e1f), [GitHub](https://github.com/Mjrovai/Bee-Counting/) | Companion experiment to BuzzTech that ports the bee-counting workflow to the Brazilian Caninos Loucos Labrador single-board computer. Interesting for comparing edge AI performance across Raspberry Pi Zero 2 W and alternative IoT Linux boards, with YOLOv8/TFLite deployment notes. |
| ⭐️ Mixtile Edge 2 Kit - AI based bee detection and tracking | Saudin Dizdarevic | [Hackster](https://www.hackster.io/sdizdarevic/mixtile-edge-2-kit-ai-based-bee-detection-and-tracking-2fe215), [GitHub](https://github.com/sdizdarevic/beedetectionyolov5/) | YOLOv5 bee detection and tracking on the Mixtile Edge 2 Kit. The project is distinctive because the custom dataset separates four classes: bee, drone, pollenbee, and queen. The GitHub repo includes a trained `best.pt` workflow and sample original/result videos. |
| ⭐️ Hive Vision | Janja Klavžer, birkdavid, DAVID STARIC, Luka Mali | [Hackster](https://www.hackster.io/507447/hive-vision-024457) | Focuses on marked queen bee detection rather than entrance traffic. Uses Arduino Nano 33 BLE Sense, OV7675 camera, Edge Impulse, Arduino firmware, Bluetooth indicators, and an Android app. Useful reference for queen-location UX and on-device ML constraints. |
| BeePi | VKEDCO / PYPL repository maintainers | [GitHub](https://github.com/VKEDCO/PYPL/tree/master/beepi/py) | A small Python-oriented BeePi folder inside the VKEDCO PYPL repository. The visible files are utility scripts for note/frequency transformation and filtering, making it more relevant to acoustic signal experiments than to a full hive monitor build. |

## Physical bee counters and entrance hardware

| Project | Author(s) | Source | Distinct features and research value |
|---|---|---|---|
| ⭐️ 2019 Easy Bee Counter V.1 | hydronics2 | [GitHub](https://github.com/hydronics2/2019-easy-bee-counter), [Instructables](https://www.instructables.com/Easy-Bee-Counter/), [Nordic DevZone article](https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/smart-hives-beehavior-monitoring) | Through-hole, beginner-friendly optical counter PCB for hive entrances. Uses 24 gates, 48 reflective IR sensors, 6 shift registers, and Feather/ItsyBitsy compatible microcontrollers. The README explains direction sensing, low-power IR LED pulsing, PCB ordering, and why black PCBs help absorb IR. |
| Easy Bee Counter data notes | hydronics2 | [Data analysis notes](https://github.com/hydronics2/2019-easy-bee-counter/tree/master/Data) | Useful as a design reference for why entrance counts matter and how raw gate events can become beekeeper-friendly signals. More hardware-counter oriented than camera-based systems. |

## IoT scales and weight monitors

| Project | Author(s) | Source | Distinct features and research value |
|---|---|---|---|
| ⭐️ Bee hive weight monitoring with ESP8266 or ESP32 | vitzaoral | [GitHub](https://github.com/vitzaoral/beehive_weight) | Compact open-source scale using ESP8266 or ESP32, HX711, load cells, and Blynk 2.0. Stands out because it includes swarm-related push notifications when measured weight drops by more than 1 kg between measurements. |
| BeeScale (SMS Version) | Dr Panos | [Hackster](https://www.hackster.io/drpanosv/beescale-sms-version-56695a) | Weight, exterior temperature, humidity, and battery readings are sent by SMS at configurable intervals. Interesting for offline or low-connectivity apiaries because configuration commands such as phone number, RTC time, and tare are also handled by SMS. |

## Full hive telemetry and connected-hive prototypes

| Project | Author(s) | Source | Distinct features and research value |
|---|---|---|---|
| Bee-Happy - Connected beehive | Amel yalaoui, Mélissa Hettal, Naysel, Bdeiwi181818 | [Hackster](https://www.hackster.io/443790/bee-happy-connected-beehive-6ac8ec) | Solar-assisted connected hive using Arduino Nano 33 BLE Sense, DS18B20, DHT22, HX711, Sigfox, Ubidots, KiCad, and custom fabrication. Monitors frame temperatures, outside temperature, hive humidity, light, and weight. |
| Bee-Hive Project: Smart Hive monitoring | The NATO Team: Ndeye FAYE, Thérèse Sène, Orden BAKPETE, Alexandre GELLIS | [Hackster](https://www.hackster.io/the-nato-team/bee-hive-project-smart-hive-monitoring-b5b39e) | Arduino MKR WAN 1310 and LoRaWAN telemetry project for temperature, humidity, and weight, with The Things Stack, Ubidots, Beep Monitor, custom PCB, solar cell, and low-power timer. Good example of end-to-end documentation from sensor tests to installation. |
| Bee Smart | Yining BAO, Mohamed-Ali, Karim El Kharroubi, Qingyue CHEN, wenhan zheng | [Hackster](https://www.hackster.io/383901/bee-smart-project-of-embedded-system-7142bc) | Autonomous solar-powered Sigfox/Ubidots prototype from Polytech Sorbonne. Tracks internal and external temperature/humidity, weight, wind direction/speed, battery, and intended bee voice frequency. Useful because it includes STM32L432KC, Mbed/C++ code, KiCad work, and project constraints. |
| Beestial | N'KOUKA Nathan, Rémi Antonucci, Jacky Chen, Amit Patel | [Hackster](https://www.hackster.io/503257/beestial-embedded-system-project-8763d1) | LoRaWAN connected hive prototype with Arduino Nano 33 BLE Sense, LoRa-E5, Ubidots, The Things Stack, Beep Monitor, HX711, temperature/humidity, microphone, brightness, and battery sensing. Distinctive as a fairly complete student build with PCB, enclosure, video, and LoRaWAN setup notes. |
| Connected bee hive project - remote hive monitoring | Team Bee Efficient: Caroline Alonso, Thomas Korpal, LaisA, Michaël Baudeur | [Hackster](https://www.hackster.io/bee-efficient/connected-bee-hive-project-remote-hive-monitoring-e7cd34) | Advanced remote monitoring build intended to reduce hive interventions. Includes a large component list, waterproof enclosure, solar/battery power, LoRa-E5, Ubidots, The Things Stack, Beep, microphone/audio path, temperature, humidity, weight, battery sensing, KiCad, and FreeCAD. |
| BeeHave - Bee monitor | Vodhel, VouauxHugo, MathieuSemenzato, CestClaireTaWu | [Hackster](https://www.hackster.io/498657/beehave-bee-monitor-51769a) | Student LoRaWAN monitor for frequency, temperature, humidity, light, and weight. Notable for a dedicated microphone amplifier PCB, Arduino FFT use, solar charging attempt, and honest field-test notes about soldering and deployment failures. |
| Connected-Bee-Hive with an Arduino MKRWAN | Team Bee-Yonce: Maguette SOW, Khadim Kane, Ousseynou, Sapidda, Rejinthan | [Hackster](https://www.hackster.io/bee-yonce/connected-bee-hive-with-an-arduino-mkrwan-36d6ca) | Arduino MKR WAN 1310 LoRaWAN device for remote hive data, with DHT22, DS18B20, HX711, solar cell, battery, INA219, Ubidots, The Things Stack, Beep Monitor, PCB work, and outdoor enclosure work. Good reference for dashboards and alerting around LoRaWAN telemetry. |
| Internet of Bees | gusgonnet, Jacob | [Hackster](https://www.hackster.io/gusgonnet/internet-of-bees-120ca7), [GitHub](https://github.com/gusgonnet/beehiveMonitor) | Cellular or Wi-Fi hive monitor using Particle Boron/Argon, ADXL343/ADT7410, DS18B20, Ubidots, and Telegram. Distinctive features include knock-over/movement alerts, battery-aware sleep cycles, configurable firmware, and notification routing by email, SMS, or Telegram. |
| IoT for Bees (& Beekeepers a Bit Too) | Vilém Kužel | [Hackster](https://www.hackster.io/vilemkuzel/iot-for-bees-beekeepers-a-bit-too-e2595d) | NXP Rapid IoT and Sigfox concept for temperature monitoring plus theft detection. Interesting because it treats anti-theft as a first-class hive-monitoring feature and uses Sigfox callbacks to trigger SMS/e-mail alerts and custom server visualization. |
| BeeInformed: Environmental Analyzer for Beekeeping | Felipe Neves | [Hackster](https://www.hackster.io/uLipe/beeinformed-environmental-analyzer-for-beekeeping-420b4b) | Advanced environmental analyzer using Bosch XDK and Qualcomm DragonBoard 410c. Measures temperature, humidity, atmospheric pressure, luminosity, audio for aggressiveness estimation, and GPS location. Stands out for its gateway/cloud architecture and traceability/product-quality framing. |

## Specialized hive automation and health experiments

| Project | Author(s) | Source | Distinct features and research value |
|---|---|---|---|
| iTRUBEC - IoT for Bees | Vilém Kužel, with thanks to Milan Pečinka | [Hackster](https://www.hackster.io/vilemkuzel/itrubec-iot-for-bees-a622a8) | Arduino-controlled hive heating experiment for Varroa destructor treatment. Uses DS18B20, DHT22, relay, BLE, SD card, RTC, Wemos D1, and a 12 V heating pad. Different from most monitors because it is an active intervention system, targeting 44-49°C mite-lethal temperatures that should remain safe for bees. |
| LittleBee: Acoustic Sensor For Measuring Bee Hissing Level | The BeeInformedTeam | [Hackster](https://www.hackster.io/the-beeinformedteam/littlebee-acoustic-sensor-for-measuring-bee-hissing-level-960f6a) | Acoustic-behavior project focused on bee hissing level rather than generic temperature/weight telemetry. Relevant for future sound-based stress, disturbance, or behavior classification research. |
| Hive IA control of Honey Bee for person with disability | Davide Cogliati | [Hackster](https://www.hackster.io/davide-cogliati/hive-ia-control-of-honey-bee-for-person-with-disability-0ab4dc) | Accessibility-oriented hive control concept. Worth tracking separately because its design motivation is beekeeper interaction and assistive control rather than only colony telemetry. |

## Additional leads to revisit

These projects were in the original list and remain useful leads. They need deeper review before being promoted into the detailed sections above.

| Project | Visible author/profile | Source | Why it may be relevant |
|---|---|---|---|
| Don't Worry Bee Happy | lichuancotton | [Hackster](https://www.hackster.io/lichuancotton/don-t-worry-bee-happy-710916) | Beehive-related prototype with a strong project title around beekeeper reassurance and monitoring. |
| The Busy Bee | 444823 | [Hackster](https://www.hackster.io/444823/the-busy-bee-a8b5b7) | Potential hive activity or monitoring prototype. |
| iTRUBEC Minimonitor v1.0 - IoT for Bees | Vilém Kužel | [Hackster](https://www.hackster.io/vilemkuzel/itrubec-minimonitor-v1-0-iot-for-bees-a7d4b8) | Likely a smaller companion monitor in the iTRUBEC family, useful for comparing minimal telemetry against the heating project. |
| Open Ruche: A Connected Beehive for Smart Bee Monitoring | oumertamine3 | [Hackster](https://www.hackster.io/oumertamine3/open-ruche-a-connected-beehive-for-smart-bee-monitoring-ef24ac) | Connected-hive concept with French-language/open-hive framing. |
| L'abeille vie | L'abeille vie | [Hackster](https://www.hackster.io/l-abeille-vie/l-abeille-vie-ed1e73) | French project title suggests a bee-life or hive monitoring prototype. |
| B-NAHL Hive Monitor | B-NAHL | [Hackster](https://www.hackster.io/b-nahl/b-nahl-hive-monitor-d17fba) | Hive monitor lead, likely useful for telemetry comparison. |
| SmartBees | smartbees | [Hackster](https://www.hackster.io/smartbees/smartbees-e5f807) | Connected-beehive or smart-apiary lead. |
| Beehive Monitor using an Arduino 33 BLE Sense | 442967 | [Hackster](https://www.hackster.io/442967/beehive-monitor-using-an-arduino-33-ble-sense-19ee10) | Arduino 33 BLE Sense based monitoring, useful for comparing against Hive Vision and other Nano 33 BLE Sense projects. |
| Beehive Monitoring and Tracking | sgoutteb | [Hackster](https://www.hackster.io/sgoutteb/beehive-monitoring-and-tracking-c1339e) | Monitoring plus tracking angle, potentially relevant for theft or hive logistics. |
| Beenfo | 517832 | [Hackster](https://www.hackster.io/517832/beenfo-849f65) | Shortlisted as a compact monitoring/information project. |
| Honey Guys - Monitoring of a bee hive | walidsrb4 | [Hackster](https://www.hackster.io/walidsrb4/honey-guys-monitoring-of-a-bee-hive-476c12) | Hive monitoring lead from the original list, useful for comparing sensor choices and project presentation. |
| Beekeeping with Arduino | pvalyk | [Hackster](https://www.hackster.io/pvalyk/beekeeping-with-arduino-4216bb) | Arduino-based beekeeping reference, likely simpler and reproducible. |
| BeeO Terminal | batcopter | [Hackster](https://www.hackster.io/batcopter/beeo-terminal-a05c57) | Terminal/device interface angle may be useful for beekeeper UX ideas. |
| HiveSupportSystem | Zacch | [Hackster](https://www.hackster.io/Zacch/hivesupportsystem-4b2475) | Support-system framing may include broader management features beyond sensor reads. |
| OpenRuche - BeeBrave | BeeBrave | [Hackster](https://www.hackster.io/beebrave/openruche-beebrave-320aa8) | OpenRuche family project, worth comparing with other open connected hive initiatives. |
| Open Ruche | zams | [Hackster](https://www.hackster.io/zams/open-ruche-3a25f5) | Another OpenRuche implementation lead. |
| Hive Monitoring System | Noah Maupu | [Hackster](https://www.hackster.io/noahmaupu/hive-monitoring-system-05767d) | Generic hive monitoring system, potentially useful for baseline architecture. |
| B-Hive | dect | [Hackster](https://www.hackster.io/dect/b-hive-a14efa) | Shortlisted beehive project with concise title, needs content review. |
| Projet OpenRucheG2 | rucheg2 | [Hackster](https://www.hackster.io/rucheg2/projet-openrucheg2-c1c77d) | Second-generation OpenRuche lead. |
| beemos | Hackuarium | [GitHub](https://github.com/Hackuarium/beemos) | Open-source repository from Hackuarium, likely relevant to community science hive monitoring. |
| IoT beehive monitoring system | DanNduati | [GitHub](https://github.com/DanNduati/IoT-beehive-monitoring-system) | GitHub project lead for a general IoT beehive monitoring system. |
