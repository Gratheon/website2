---
title: "4 teljega portaal"
---

See on ajurünnaku ideede loend, kuidas raame fotode tegemiseks liigutada, et kontrolle automatiseerida:

![](docs/robotic-beehive/img/Screenshot%202023-11-15%20at%2022.04.35.png)

## Riistvaralahendus

Kopeerime Júlia Torras Amati lahendust biomeditsiinitehnika kraadide valdkonnas

![](docs/robotic-beehive/img/Screenshot%202023-11-17%20at%2000.16.26.png)

![](docs/robotic-beehive/img/Screenshot%202023-11-17%20at%2000.01.03.png)

![](docs/robotic-beehive/img/Screenshot%202023-11-17%20at%2000.20.08.png)

![](docs/robotic-beehive/img/Screenshot%202023-11-16%20at%2023.55.38.png)


- Suurus
    - Mesipuu kasti välismõõt - k 285 mm, l 450 mm ja p 506 mm.
    - Eesti raami suurus - 448
    - x 279 mm
    - Seega vajame lineaarset täiturmehhanismi **käiguga vähemalt 500 mm**
- Külgmine positsioneerimine
- Kuidas avada/sulgeda raame, et taru õhukindlalt suletuna hoida?
- Kuidas tagada, et mehhanism ei roostetaks ega saastu orgaanilise prügiga?
- Milline liikumismehhanism on meie jaoks parem, planetaarne vs lineaarne?

## Sammmootori draiver

Sammmootorite draiverid on elektroonilised seadmed, mida kasutatakse samm-mootorite juhtimiseks ja juhtimiseks. Need toimivad liidesena juhtimissüsteemi (antud juhul kontrolleri) ja samm-mootori vahel, pakkudes vajalikke signaale ja võimsust selle liikumise täpseks juhtimiseks.

Süsteemi jaoks sobiva draiveri valimisel tuleb seda teha vastavalt voolule, mis tuleb astmemootorile nõuetekohaseks toimimiseks edastada. Nagu on näha tabelist 7, on läbi vaadatud XYZ mootoriga positsioneerimissüsteemidesse kaasatud samm-mootorid Nema23 ja Nema24 ning need konkreetsed mudelid vajavad vastavalt 2 ja 2,8 A [66]. Lisaks võimaldab samm-mootori draiver juhtida samm-mootori terve pöörde sooritamiseks vajalike impulsside arvu, see tähendab, et see võimaldab peenhäälestada mootori liikumise täpsust. Mida suurem on pöörde sooritamiseks vajalike impulsside arv, seda suurem on täpsus. See tähendab minimaalset millimeetrite arvu, mida positsioneerimissüsteem saab trajektoori sooritamisel liikuda.

## Kontroller
<iframe width="100%" height="400" src="https://www.youtube.com/embed/idVcItHfGS4" title="TB6600 Stepper Motor Driver with Arduino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Asjakohane teave
(lk 38)

- [Torras_Amat_Júlia_TFG.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/a8d93a70-2cb3-4900-8bda-b7cb55cd982d/Torras_Amat_Julia_TFG.pdf)
- [TFG-I-1682.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/7ed8d376-7b61-40a2-b0fa-97e4940552f0/TFG-I-1682.pdf)
- [**Yahboomi 6-teljeline robotvars**](https://www.notion.so/Yahboom-6-Axis-Robot-Arm-1236c7765b2e4524a88fee8281b1bc33?pvs=21)

[PDF](/assets/img/docs/robotic-beehive/img/TFG-I-1682.pdf)

<object data="/assets/img/docs/robotic-beehive/img/TFG-I-1682.pdf" type="application/pdf" width="100%" height="800"></object>

[PDF](/assets/img/docs/robotic-beehive/img/Torras_Amat_J%C3%BAlia_TFG.pdf)

<object data="/assets/img/docs/robotic-beehive/img/Torras_Amat_J%C3%BAlia_TFG.pdf" type="application/pdf" width="100%" height="800"></object>



![](docs/robotic-beehive/img/Raspberry-Pi-Pinout-Random-Nerd-Tutorials.webp)

![](docs/robotic-beehive/img/Screenshot%202023-12-29%20at%2016.59.55.png)

![](docs/robotic-beehive/img/FE0B4TLKF6TQ13E.webp)