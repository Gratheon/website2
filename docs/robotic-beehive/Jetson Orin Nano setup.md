
Compared to Jetson Nano it also has

- M2 SSD which is 10x faster on write speeds, crucial in video management

## **Jetson Orin Nano Developer Kit Carrier Board**

|**Camera**|2x MIPI CSI-2 22-pin Camera Connectors|
|---|---|
|**M.2 Key M**|x4 PCIe Gen3, 2280|
|**M.2 Key M**|x2 PCIe Gen3, 2242|
|**M.2 Key E**|PCIe (x1), USB 2.0, UART, I2S, and I2C|
|**USB**|Type A: 4x USB 3.2 Gen2, Type C: 1x for Debug and Device Mode|
|**Networking**|1x GbE Connector|
|**Display**|DisplayPort 1.2 (+MST)|
|**microSD slot**|UHS-1 cards up to SDR104 mode|
|**Others**|40-pin Expansion Header (UART, SPI, I2S, I2C, GPIO), 12-pin button header, 4-pin fan header, DC power jack|
|**Dimensions**|100 mm x 79 mm x 30 mm(Height includes feet, carrier board, module, and thermal solution)|
|POWER|4AMP 19V|

## Installation

- Make sure to have host machine Ubuntu v22. Higher versions will not work with SDK
- Install Nvidia SDK manager
- Under Jetson CPU chip, connect `FC REC` and `GND` pins to run device in reset mode
- Connect USB-C port of the jetson with USB3 port of your host machine. Prefer fast cables, as USB-2 cable will be very slow
- Run Jetson
- Run NVidia SDK manager, that should detect the device
- Check almost all checkboxes
- After half of the installation is complete, SDK will ask about `IP` .
    - You now need to login into jetson (so connect display, mouse, keyboard)
    - Attach ethernet cable to jetson or connect via wifi. Run `ifconfig` and get its IP.
    - Make sure host machine and jetson are in the same network
    - In SDK manager, enter jetson IP so that it can install remaining software

<iframe width="100%" height="400" src="https://www.youtube.com/embed/qCAoPcMiR4k" title="Ultimate Jetson Orin Nano  Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="100%" height="400" src="https://www.youtube.com/embed/q4fGac-nrTI" title="Jetson Orin Nano Tutorial: SSD Install, Boot, and JetPack Setup - Full Guide!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="100%" height="400" src="https://www.youtube.com/embed/1RitDv6PLIQ" title="NVIDIA Jetson Orin Nano Dev Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Performance

| **Model**             | FPS |
| --------------------- | --- |
| PeopleNet (V2.5)      | 118 |
| Action Recognition 2D | 366 |
| Action Recognition 3D | 26  |
| LPR Net               | 993 |
| Dashcam Net           | 405 |
| BodyPose Net          | 137 |
<iframe width="100%" height="400" src="https://www.youtube.com/embed/X9jt8qb_igo" title="My First Jetson Nano Object Detection Inference Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Docker engine issues

Use this to fix startup

```bash
sudo update-alternatives —config iptables
```