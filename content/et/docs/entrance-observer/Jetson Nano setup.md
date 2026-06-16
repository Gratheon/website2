---
sidebar_position: 1
title: "Jetson Nano seadistamine"
---
## Paigaldamine

- Valmistage SD-kaart ette
    - Laadige alla SD-kaardi pilt - [https://developer.nvidia.com/jetson-nano-sd-card-image](__ETDOCS_URL_00008__)
    - Ühendage SD-kaart Maciga, kasutage kujutise SD-kaardile kirjutamiseks [https://www.balena.io/etcher](__ETDOCS_URL_00009__)
- Sisestage SD-kaart
- Käivitage seade
    - Ühendage wifi antennid
    - Ühendage kaamera kaablid
    - Kui kasutate ümbrist, ühendage toite-, lähtestamis- ja LED-kaablid õigetesse kontaktidesse
    - Seadke tihvt väljundsilindri lähedusse – see käsib seadmel kasutada 5 V toiteallikat
    - Kasutage HDMI-väljundit - Kuvaport ei tööta alglaadimisel vaikimisi
- Kui OS-i installimine on lõppenud, ei ole teil kohe WiFi-ühendust – peate taaskäivitama

## Globaalne värskendus

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


## Kuidas installida ML-tarkvara GPU kiirendusega


## Python

```
sudo apt install python3-pip
pip3 install --upgrade pip

# install python 3.10, because 3.11 did not work with pytorch for me
pyenv install 3.10.13

```

## Opencv koos cudaga

<iframe width="683" height="384" src="https://www.youtube.com/embed/P-EZr0zy53g" title="L-3 Install OpenCV 4.5 on NVIDIA Jetson Nano | Set Up a Camera for NVIDIA Jetson Nano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
## Installige cuDNN

[https://developer.nvidia.com/cudnn-downloads](__ETDOCS_URL_00010__)

Installige jtop, et näha GPU kasutust reaalajas

```bash
# update pip as root
sudo curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py
sudo python get-pip.py
sudo python -m pip install jetson-stats

# restart needed
jtop
nvidia-smi
```


## Installige Pytorch koos CUDAga

vaata [https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/](__ETDOCS_URL_00011__)

```bash
pip install --no-cache <https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/torch-2.2.0a0+81ea7a4.nv24.01-cp310-cp310-linux_aarch64.whl>
# pip install torchvision
```

Vaadake [https://github.com/dusty-nv/jetson-containers/tree/master/packages/l4t/l4t-pytorch](__ETDOCS_URL_00012__)