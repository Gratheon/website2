---
title: "Jetson Orin Nano seadistamine"
---

Võrreldes terminiga Jetson Nano on ka sellel

- M2 SSD, mis on kirjutuskiirusel 10 korda kiirem, videohalduses ülioluline

## **Jetson Orin Nano Developer Kit Carrier Board**

|**Kaamera**|2x MIPI CSI-2 22-pin kaamerapistikud|
|---|---|
|**M.2 võti M**|x4 PCIe Gen3, 2280|
|**M.2 võti M**|x2 PCIe Gen3, 2242|
|**M.2 võti E**|PCIe (x1), USB 2.0, UART, I2S ja I2C|
|**USB**|Tüüp A: 4x USB 3.2 Gen2, tüüp C: 1x silumis- ja seadmerežiimi jaoks|
|**Võrgundus**|1x GbE pistik|
|**Ekraan**|DisplayPort 1.2 (+MST)|
|**microSD pesa**|UHS-1 kaardid kuni SDR104 režiimiga|
|**Muud**|40-kontaktiline laienduspäis (UART, SPI, I2S, I2C, GPIO), 12-kontaktiline nupu päis, 4-kontaktiline ventilaatori päis, alalisvoolu pistikupesa|
|**Mõõdud**|100 mm x 79 mm x 30 mm (kõrgus sisaldab jalgu, kandeplaati, moodulit ja termilist lahendust)|
|TOIDE|4AMP 19V|

## Paigaldamine

- Veenduge, et teil oleks hostmasin Ubuntu v22. Kõrgemad versioonid SDK-ga ei tööta
- Installige Nvidia SDK haldur
- Seadme lähtestamisrežiimis käitamiseks ühendage Jetson CPU kiibi all `FC REC` ja `GND` viik
- Ühendage jetsoni USB-C port hostmasina USB3 pordiga. Eelista kiireid kaableid, kuna USB-2 kaabel on väga aeglane
- Jookse Jetson
- Käivitage NVidia SDK haldur, mis peaks seadme tuvastama
- Märkige peaaegu kõik märkeruudud
- Kui pool installist on lõpule viidud, küsib SDK `IP` kohta.
    - Nüüd peate jetsonisse sisse logima (nii et ühendage ekraan, hiir, klaviatuur)
    - Ühendage Etherneti kaabel Jetsoniga või ühendage WiFi kaudu. Käivitage `ifconfig` ja hankige selle IP.
    - Veenduge, et hostmasin ja jetson oleksid samas võrgus
    - SDK-haldurisse sisestage jetson IP, et see saaks installida ülejäänud tarkvara

<iframe width="100%" height="400" src="https://www.youtube.com/embed/qCAoPcMiR4k" title="Ultimate Jetson Orin Nano  Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="100%" height="400" src="https://www.youtube.com/embed/q4fGac-nrTI" title="Jetson Orin Nano Tutorial: SSD Install, Boot, and JetPack Setup - Full Guide!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<iframe width="100%" height="400" src="https://www.youtube.com/embed/1RitDv6PLIQ" title="NVIDIA Jetson Orin Nano Dev Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Jõudlus

| **Model** | FPS |
| ---------------------- | --- |
| PeopleNet (V2.5) | 118 |
| Tegevuse tuvastamine 2D | 366 |
| Tegevuse tuvastamine 3D | 26 |
| LPR Net | 993 |
| Dashcam Net | 405 |
| BodyPose Net | 137 |
<iframe width="100%" height="400" src="https://www.youtube.com/embed/X9jt8qb_igo" title="My First Jetson Nano Object Detection Inference Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Docker mootoriprobleemid

Kasutage seda käivitamise parandamiseks

```bash
sudo update-alternatives —config iptables
```