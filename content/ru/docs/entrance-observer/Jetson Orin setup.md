
```
sudo apt-get update && sudo apt-get install -y nvidia-l4t-gstreamer
```

## Установить Docker

```
sudo apt install docker-ce=5:27.5.1-1~ubuntu.22.04~jammy \
docker-ce-cli=5:27.5.1-1~ubuntu.22.04~jammy
```


## Настройка DNS
Иногда локальное расширение Wi-Fi DNS ненадежно
```
nmcli connection modify "MyWiFi" ipv4.dns "8.8.8.8 1.1.1.1"
sudo nano /etc/resolv.conf
# Add:
nameserver 8.8.8.8
nameserver 1.1.1.1
```


## Отладка
```
gst-inspect-1.0
jtop
```