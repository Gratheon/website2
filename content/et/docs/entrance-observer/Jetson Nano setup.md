---
sidebar_position: 1
---


## Installation

- Prepare SD card
    - Download SD card image - [https://developer.nvidia.com/jetson-nano-sd-card-image](https://developer.nvidia.com/jetson-nano-sd-card-image)
    - Connect SD card to Mac, Use [https://www.balena.io/etcher](https://www.balena.io/etcher) to burn image onto SD card
- Insert SD card
- Run device
    - Connect wifi antennas
    - Connect camera cables
    - Connect Power, Reset and LED cables in correct pins if you use a case
    - Set pin near the output barrel - this tells device to use 5V power supply
    - Use HDMI output - Display port does not work by default on boot
- After OS installation is complete, you won’t have wifi right away - you need a restart

## Global update

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


## How to install ML software with GPU acceleration


## Python

```
sudo apt install python3-pip
pip3 install --upgrade pip

# install python 3.10, because 3.11 did not work with pytorch for me
pyenv install 3.10.13

```

## Opencv with cuda

<iframe width="683" height="384" src="https://www.youtube.com/embed/P-EZr0zy53g" title="L-3 Install OpenCV 4.5 on NVIDIA Jetson Nano | Set Up a Camera for NVIDIA Jetson Nano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
## Install cuDNN

[https://developer.nvidia.com/cudnn-downloads](https://developer.nvidia.com/cudnn-downloads)

Install jtop to see GPU usage in realtime

```bash
# update pip as root
sudo curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py
sudo python get-pip.py
sudo python -m pip install jetson-stats

# restart needed
jtop
nvidia-smi
```


## Install Pytorch with CUDA

see [https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/](https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/)

```bash
pip install --no-cache <https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/torch-2.2.0a0+81ea7a4.nv24.01-cp310-cp310-linux_aarch64.whl>
# pip install torchvision
```

See [https://github.com/dusty-nv/jetson-containers/tree/master/packages/l4t/l4t-pytorch](https://github.com/dusty-nv/jetson-containers/tree/master/packages/l4t/l4t-pytorch)