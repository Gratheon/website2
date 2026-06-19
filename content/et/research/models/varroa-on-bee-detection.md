---
title: Varroa tuvastus mesilasel
order: 4
---

Gratheoni sisemine mudel ja mikroteenus **varroalestade tuvastamiseks otse mesilastel** tarupiltides.

Repositorium: https://github.com/Gratheon/models-varroa-on-bee

See on integreeritud meie töövoogu (`web-app -> graphql-router -> image-splitter -> models-varroa-on-bee`) ja tagastab HTTP kaudu bounding box'id.

Peamised omadused:

- Eraldi `varroa_on_bee` tuvastused (mitte ainult tarupõhja lestad)
- Lihtne API (`POST /` koos `multipart/form-data` pilti üleslaadiva päringuga)
- Health endpoint töökindluse jälgimiseks (`GET /health`)

Valideerimismõõdikud (`varroa_model5`, `best.pt`):

- Precision: `0.926`
- Recall: `0.823`
- mAP50: `0.871`
- mAP50-95: `0.485`
- Varroa klassi precision/recall: `0.858` / `0.651`
- Andmestiku allikas: Roboflow Universe `varroa-j8231/varroa8k` v1  
  https://universe.roboflow.com/varroa-j8231/varroa8k/dataset/1

![Varroa tuvastuse näide mesilasel](/assets/img/research/img/varroa-detection-example-preview.webp)
