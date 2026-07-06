---
title: Настройка Jetson Orin
sidebar_position: 7
hide_table_of_contents: false
---

Эта страница описывает текущий путь запуска [`entrance-observer`](https://github.com/Gratheon/entrance-observer) на NVIDIA Jetson Orin Nano Super Developer Kit.

## Hardware checklist

- Jetson Orin Nano Super Developer Kit.
- USB-C блок питания 5 V / 4 A.
- Установленный NVMe SSD для OS, Docker images, logs и video buffering.
- USB UVC-камера и объектив, подключённые по USB3.
- WiFi-модуль или Ethernet.
- Опциональный display/keyboard для первого boot. После первичной настройки предпочтительнее SSH.

## Base OS

1. Запишите актуальный NVIDIA JetPack image, поддерживаемый Orin Nano Super Developer Kit.
2. Загрузите Jetson и завершите создание первого пользователя.
3. Примените системные обновления:

```bash
sudo apt-get update
sudo apt-get -y upgrade
```

4. Проверьте статус Jetson:

```bash
sudo apt-get install -y python3-pip
sudo pip3 install -U jetson-stats
sudo reboot

jtop
```

## Установка camera/media tools

Установите GStreamer support и базовые debug tools:

```bash
sudo apt-get update
sudo apt-get install -y \
  nvidia-l4t-gstreamer \
  gstreamer1.0-tools \
  v4l-utils \
  ffmpeg
```

Проверьте, что камера видна системе:

```bash
v4l2-ctl --list-devices
v4l2-ctl --list-formats-ext -d /dev/video0
gst-inspect-1.0
```

Быстрый camera smoke test:

```bash
ffmpeg -f v4l2 -list_formats all -i /dev/video0
```

## Установка Docker

Установите Docker из Ubuntu package feed, соответствующего текущему JetPack/Ubuntu release. Для Ubuntu 22.04 Jammy в прототипе использовалось:

```bash
sudo apt install -y \
  docker-ce=5:27.5.1-1~ubuntu.22.04~jammy \
  docker-ce-cli=5:27.5.1-1~ubuntu.22.04~jammy
```

Разрешите текущему пользователю запускать containers без `sudo`:

```bash
sudo usermod -aG docker "$USER"
newgrp docker
docker version
```

Если точная версия Docker больше недоступна в apt, установите последнюю версию, совместимую с JetPack Ubuntu release, и запишите её в deployment notes.

## Настройка network DNS

Некоторые локальные WiFi extenders дают ненадёжный DNS. Укажите явные DNS servers для активного подключения, если package installs или API calls иногда падают:

```bash
nmcli connection show
nmcli connection modify "MyWiFi" ipv4.dns "8.8.8.8 1.1.1.1"
sudo systemctl restart NetworkManager
```

Только для временной отладки:

```bash
cat /etc/resolv.conf
```

Не редактируйте `/etc/resolv.conf` вручную как постоянное решение: NetworkManager/systemd может перезаписать файл.

## Настройка entrance-observer

Edge app нужны значения для конкретного окружения. Не храните secrets в git; передавайте их через локальный `.env`, Docker secrets или deployment manager.

Минимальная конфигурация для каждого установленного устройства:

| Setting | Purpose |
| --- | --- |
| Device ID | Стабильная идентичность Jetson/observer unit. |
| Hive ID | Целевой улей в Gratheon web-app. |
| API token | Токен для запросов к `telemetry-api` и video upload. |
| Telemetry endpoint | Обычно `https://telemetry.gratheon.com/iot/v1/metrics`. |
| Video endpoint | Обычно `https://video.gratheon.com`, см. [Gate Video Stream](../API/rest/gate-video-stream.md). |
| Camera device | Linux device path, например `/dev/video0`. |
| Tracking regions | Линия/зоны летка для классификации направления движения пчёл. |
| Upload policy | Загружать все клипы, только sampled clips или clips around detection anomalies. |

## Runtime verification

После deployment `entrance-observer` проверьте:

1. Камера читает кадры с ожидаемым resolution и FPS.
2. GPU inference работает без CPU-only fallback, если он не включён намеренно.
3. Movement telemetry доходит до [Telemetry API](../API/rest/telemetry-api.md).
4. Опциональные клипы появляются через [Gate Video Stream](../API/rest/gate-video-stream.md).
5. Web-app может показать latest device status, traffic charts и video playback links через [GraphQL](../API/GraphQL.md).

## Debugging commands

```bash
# Jetson resource monitor
jtop

# Kernel/device messages
dmesg --follow

# USB camera status
lsusb
v4l2-ctl --all -d /dev/video0

# Docker service logs
docker ps
docker logs --tail=200 -f entrance-observer

# Network/API smoke checks
curl -I https://telemetry.gratheon.com/docs/
curl -I https://video.gratheon.com/docs/
```

## Field hardening notes

- Используйте local buffering и retry logic: интернет на пасеке может быть нестабильным.
- Размещайте камеру так, чтобы прямое солнце, капли дождя и отражения от plexiglass не доминировали в зоне летка.
- Записывайте exact camera focus, zoom, resolution и tracking-region settings для каждого улья.
- До герметизации корпуса оставьте доступ к remote SSH и logs.
- Добавьте watchdog/restart policy для container, чтобы observer восстанавливался после пропадания питания.
