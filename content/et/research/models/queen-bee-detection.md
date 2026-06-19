---
title: Mesilasema tuvastus
layout: research
order: 2
---

Gratheoni sisemine objektidetektor, mis leiab **mesilasemasid töömesilaste, leskede, õietolmu kandvate mesilaste ning raami/tausta sisu seast**.

Repositorium: https://github.com/Gratheon/models-queen-bee-detector

See toetab kahte kasutusviisi:

- brauseripõhine inferents [Live Queen Finderi](/et/about/products/web_app/free-tier/live-queen-finder/) jaoks ONNX-i ja `onnxruntime-web` abil
- HTTP inferentsiteenus serveripoolsete katsete ja integratsioonide jaoks

Baastreeningu seadistus:

- Mudel: `yolov8n.pt`
- Pildi suurus: `512`
- Epohhid: `60`
- Andmestik: ühendatud mesilasema andmestikud, kus mesilasema märgendid normaliseeriti klassiks `queen` ja ilma mesilasemata pildid jäeti negatiivsete/taustanäidetena alles

Testmõõdikud (`weights/best.pt`):

- Precision: `0.9727`
- Recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Precision on kõrge, kuid recall jätab endiselt ruumi märkamata mesilasemadele, seega tuleks välitingimustes tuvastusi visuaalselt kinnitada.

![Live Queen Finderi tuvastuse näide](/assets/img/blog/img/live-queen-finder-detection-preview.webp)
