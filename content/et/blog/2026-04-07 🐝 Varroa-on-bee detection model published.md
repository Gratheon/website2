---
title: "🐝 Avaldati Varroa-on-bee tuvastusmudel"
date: 2026-04-07T00:00:00.000Z
---

Avaldasime just oma uue **varroa-on-bee tuvastusmudeli**: spetsiaalse arvutinägemise mudeli, mis tuvastab varroalestad otse mesilaste kehal.

Repository: https://github.com/Gratheon/models-varroa-on-bee

![Varroa-on-bee detection example](../research/img/varroa-detection-example.jpg)

<!-- truncate -->

Erinevalt kogu raamipildi tasemel lestade tuvastamisest töötab see mudel pärast seda, kui mesilased on Gratheoni web-app'i töövoos juba tuvastatud ja välja lõigatud. See keskendub iga mesilase kehale ning aitab loendada üksikutele mesilastele kinnitunud varroalesti, selle asemel et otsida neid korraga kogu raamipildilt.

See on meie **kolmas majasisene mudel, mis on kasutusele võetud mikroteenusena**. Teisi Gratheoni mudeleid saab vaadata ka meie [research models lehel](/research/models/).

## Viimased valideerimistulemused

Valideerimine käivitati `varroa_model5` mudeli `best.pt` jaoks:

- Precision: `0.926`
- Recall: `0.823`
- mAP50: `0.871`
- mAP50-95: `0.485`
- Varroa klassi precision: `0.858`
- Varroa klassi recall: `0.651`
- Varroa klassi mAP50: `0.747`

## Treeningandmed

Mudel treeniti Roboflow Universe andmestikul [`varroa-j8231/varroa8k` v1](https://universe.roboflow.com/varroa-j8231/varroa8k/dataset/1), mille litsents on **CC BY 4.0**.

Treeningu ja valideerimise detailid:

- 10 epohhi 0.966 tunniga
- 1,736 pilti / 2,807 objekti
- YOLO11n
- Valideeritud Apple M3 Pro arvutil MPS-i abil

## Teenuse integreerimine

Mudeliteenus toetab lihtsat HTTP-põhist inference'i pildi üleslaadimise kaudu:

```http
POST /
Content-Type: multipart/form-data
```

See on integreeritud Gratheoni töövoogu ja web-app kasutab seda varroalestade loendamiseks juba tuvastatud mesilastel. Nii püsib mudel keskendunud bioloogiliselt olulisele alale ning seda on lihtsam kombineerida meie teiste mesilaste seire mudelitega.
