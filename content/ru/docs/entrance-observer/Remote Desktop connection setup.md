---
sidebar_position: 2
title: Настройка подключения к удаленному рабочему столу 🖥️
---

### Удаленный рабочий стол с помощью VNC

```bash
sudo apt-get install vino
```

Если вы попытаетесь предоставить общий доступ к своему рабочему столу с Jetson Nano, процесс завершится неудачей; запуск _Desktop Sharing_ завершается с ошибкой. В этом рецепте показано, как решить проблему и подключиться удаленно через VNCViewer. Тем не менее, мы по-прежнему предпочитаем подключаться через RDP (XRDP), который мы считаем более быстрым и удобным.

Чтобы устранить проблему, выполните следующие действия:

– Сначала мы отредактируем схему `org.gnome.Vino`, так как в ней отсутствует параметр `enabled`. Откройте схему:

```bash
sudo nano /usr/share/glib-2.0/schemas/org.gnome.Vino.gschema.xml

```

Добавьте недостающий ключ (подойдет любое место):

```xml
<key name='enabled' type='b'>
   <summary>Enable remote access to the desktop</summary>
   <description>
   If true, allows remote access to the desktop via the RFB
   protocol. Users on remote machines may then connect to the
   desktop using a VNC viewer.
   </description>
   <default>false</default>
</key>

```

- Скомпилируйте новую конфигурацию схемы Gnome:

```bash
sudo glib-compile-schemas /usr/share/glib-2.0/schemas

```

– Обновите настройки _Общего доступа к рабочему столу_. Теперь ваше приложение должно работать. Запустите его со своего рабочего стола Jetson Nano.
    – Включите **Разрешить другим пользователям просматривать ваш рабочий стол**.
    - Включите подраздел **Разрешить другим пользователям управлять вашим рабочим столом**.
    – Отключите эту функцию **Вы должны подтверждать каждый доступ к этому компьютеру**.
    - Установите пароль в разделе **Требовать от пользователя ввод этого пароля**.
    – Закройте настройки _Общего доступа к рабочему столу_. Вы закончили здесь
- Настройте сервер VNC на автозапуск.
    – Откройте панель _Настройки запускаемого приложения_ .
    – Добавьте запись VNC (Vino): добавьте имя («Vino»), описание (любой текст, который имеет для вас смысл) и команду: `/usr/lib/vino/vino-server`. Закройте приложение
— Отключите шифрование для сервера VNC: к сожалению, на момент написания статьи нам приходится жить без него. В терминале введите следующее:

```bash
gsettings set org.gnome.Vino require-encryption false
gsettings set org.gnome.Vino prompt-enabled false

```

- перезагрузка
- после перезагрузки вы можете использовать любой **VNCViewer** со своего ноутбука для подключения к общему экрану. Излишне говорить, что скорость такая, какая она есть, и если можете, используйте предыдущий рецепт XRDP.

**Примечание**: поскольку мы наносим ущерб настройке безопасности для удаленных подключений через VNC, мы должны помнить об этом и включать функцию VNC (весь этот раздел) только в случае необходимости.

- Запустите настройку сети, чтобы получить IP-адрес машины Jetson, посмотрите wlan0 или eth0 в зависимости от того, использует ли она Wi-Fi или Ethernet.

```
ifconfig
export DISPLAY=:1 && /usr/lib/vino/vino-server
```

## Добавляем автозапуск

```bash
sudo nano /etc/systemd/system/vnc.service
[Unit]
Description=Start vino
After = network.target

[Service]
ExecStart=/usr/lib/vino/vino-server
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
nano ~/.config/autostart/systemctl.desktop

[Desktop Entry]
Type=Application
Exec=systemctl --user start vnc-server
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
Name[en_US]=vino Server
Name=vino Server
Comment[en_US]=Auto-start the VNC service on boot and login back in
Comment=Auto-start the VNC service on boot
```

## Установите разрешение по умолчанию не 640x480

`sudo nano /etc/X11/xorg.conf`

Добавить:

```
Section "Screen"
	Identifier "Default Screen"
	Monitor "Configured Monitor"
	Device "Tegra0"
	SubSection "Display"
	Depth 24
	Virtual 1280 800 # Modify the resolution by editing these values
	EndSubSection
EndSection
```

перезапуск

### На хост-машине

- скачайте и запустите RealVNC [https://www.realvnc.com/en/connect/download/viewer/macos/](https://www.realvnc.com/en/connect/download/viewer/macos/)
    - Альтернативно вы можете использовать TigetVNC [https://tigervnc.org/](https://tigervnc.org/)
- Подключитесь к vnc://ip-of-jetson, используя последний шаг выше.
- Настройте качество изображения на самые низкие настройки, чтобы улучшить скорость отклика.

## (Необязательно) Удаленный рабочий стол с помощью xrdp

Это полезно для хост-машин, на которых работает Windows.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/7-WMvmWVxJQ" title="L-2 Jetson Nano Headless | Use Jetson Nano Remotely" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Подключение из браузера

- оформить заказ [https://github.com/novnc/noVNC](https://github.com/novnc/noVNC) локально
- бежать
```
./utils/novnc_proxy --vnc 192.168.1.223:5900 --listen [localhost:6081](<http://localhost:6081>)
```
где `192.168.1.223` — IP-адрес Jetson
    
- открыть ссылку браузера, которую он предлагает

![](docs/img/Screenshot%202024-06-20%20at%2019.13.32.png)