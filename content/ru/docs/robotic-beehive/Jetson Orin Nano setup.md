По сравнению с Jetson Nano он также имеет

- Твердотельный накопитель M2, который в 10 раз быстрее по скорости записи, что имеет решающее значение для управления видео.

## **Jetson Orin Nano Несущая плата комплекта разработчика**

|**Камера**|2 22-контактных разъема камеры MIPI CSI-2|
|---|---|
|**M.2 Key M**|x4 PCIe Gen3, 2280|
|**M.2 Key M**|x2 PCIe Gen3, 2242|
|**M.2 Key E**|PCIe (x1), USB 2.0, UART, I2S и I2C|
|**USB**|Тип A: 4 порта USB 3.2 Gen 2, тип C: 1 порт для отладки и режима устройства|
|**Сеть**|1 разъем GbE|
|**Дисплей**|DisplayPort 1.2 (+MST)|
|**Слот microSD**|Карты UHS-1 до режима SDR104|
|**Другие**|40-контактный разъем расширения (UART, SPI, I2S, I2C, GPIO), 12-контактный разъем для кнопок, 4-контактный разъем для вентилятора, разъем питания постоянного тока |
|**Размеры**|100 x 79 x 30 мм (высота включает ножки, несущую плату, модуль и систему охлаждения)|
|МОЩНОСТЬ|4АМП 19В|

## Установка

- Убедитесь, что на хост-компьютере установлена ​​Ubuntu v22. Более высокие версии не будут работать с SDK.
- Установите менеджер Nvidia SDK.
- Под микросхемой ЦП Jetson подключите контакты `FC REC` и `GND`, чтобы запустить устройство в режиме сброса.
- Подключите порт USB-C Jetson к порту USB3 вашего хост-компьютера. Отдавайте предпочтение быстрым кабелям, так как кабель USB-2 будет очень медленным.
- Запустите Jetson
- Запустите менеджер NVidia SDK, который должен обнаружить устройство.
- Установите почти все флажки
- После завершения половины установки SDK спросит о `IP` .
    - Теперь вам нужно войти в jetson (поэтому подключите дисплей, мышь, клавиатуру)
    - Подключите кабель Ethernet к Jetson или подключитесь через Wi-Fi. Запустите `ifconfig` и получите его IP.
    - Убедитесь, что хост-компьютер и Jetson находятся в одной сети.
    - В диспетчере SDK введите IP-адрес Jetson, чтобы он мог установить оставшееся программное обеспечение.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/qCAoPcMiR4k" title="Ultimate Jetson Orin Nano  Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="100%" height="400" src="https://www.youtube.com/embed/q4fGac-nrTI" title="Jetson Orin Nano Tutorial: SSD Install, Boot, and JetPack Setup - Full Guide!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="100%" height="400" src="https://www.youtube.com/embed/1RitDv6PLIQ" title="NVIDIA Jetson Orin Nano Dev Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Производительность

| **Модель** | Шутер от первого лица |
| --------------------- | --- |
| PeopleNet (Версия 2.5) | 118 |
| Распознавание действий 2D | 366 |
| Распознавание действий 3D | 26 |
| ЛНР Сеть | 993 |
| Сеть видеорегистраторов | 405 |
| Сеть BodyPose | 137 |
<iframe width="100%" height="400" src="https://www.youtube.com/embed/X9jt8qb_igo" title="My First Jetson Nano Object Detection Inference Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Docker проблемы с двигателем

Используйте это, чтобы исправить запуск

```bash
sudo update-alternatives —config iptables
```