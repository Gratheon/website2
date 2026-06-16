---
sidebar_position: 1
---


## Установка

- Подготовьте SD-карту
    - Загрузите образ SD-карты - [https://developer.nvidia.com/jetson-nano-sd-card-image](https://developer.nvidia.com/jetson-nano-sd-card-image)
    - Подключите SD-карту к Mac. Используйте [https://www.balena.io/etcher](https://www.balena.io/etcher), чтобы записать изображение на SD-карту.
- Вставьте SD-карту
- Запустить устройство
    - Подключите антенны Wi-Fi
    - Подключите кабели камеры
    - Подключите кабели питания, сброса и светодиода к правильным контактам, если вы используете чехол.
    - Установите контакт рядом с выходным цилиндром — это указывает устройству использовать источник питания 5 В.
    - Использовать выход HDMI. Порт дисплея по умолчанию не работает при загрузке.
- После завершения установки OS сразу не будет Wi-Fi - нужна перезагрузка

## Глобальное обновление

```jsx
sudo apt-get -y update
sudo apt-get upgrade

# Uninstall LibreOffice to save space
sudo apt remove --purge libreoffice* -y
sudo apt-get clean -y
sudo apt autoremove -y
sudo apt-get update

# Install curl
sudo apt install curl

# Docker upgrade, use own username
sudo usermod -aG docker gratheon
sudo apt-get --only-upgrade install docker.io

# Add docker-compose
export DOCKER_COMPOSE_VERSION=1.27.4
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"

# to not display terminal errors when playing annoying sounds
sudo apt install libcanberra-gtk-module libcanberra-gtk3-module -y

# video cam utils
sudo apt-get install v4l-utils
```


<iframe width="100%" height="400" src="https://www.youtube.com/embed/GQ3drRllX3I" title="Jetson Nano B01 - Dual RPi Cameras + how to get faster frame rates" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Как установить программное обеспечение ML с ускорением GPU


## Питон

```
sudo apt install python3-pip
pip3 install --upgrade pip

# install python 3.10, because 3.11 did not work with pytorch for me
pyenv install 3.10.13

```

## Opencv с cuda

<iframe width="683" height="384" src="https://www.youtube.com/embed/P-EZr0zy53g" title="L-3 Install OpenCV 4.5 on NVIDIA Jetson Nano | Set Up a Camera for NVIDIA Jetson Nano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
## Установите cuDNN

[https://developer.nvidia.com/cudnn-downloads](https://developer.nvidia.com/cudnn-downloads)

Установите jtop, чтобы видеть использование GPU в реальном времени.

```bash
# update pip as root
sudo curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py
sudo python get-pip.py
sudo python -m pip install jetson-stats

# restart needed
jtop
nvidia-smi
```


## Установите Pytorch с помощью CUDA

см. [https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/](https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/)

```bash
pip install --no-cache <https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/torch-2.2.0a0+81ea7a4.nv24.01-cp310-cp310-linux_aarch64.whl>
# pip install torchvision
```

См. [https://github.com/dusty-nv/jetson-containers/tree/master/packages/l4t/l4t-pytorch](https://github.com/dusty-nv/jetson-containers/tree/master/packages/l4t/l4t-pytorch)