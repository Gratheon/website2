---
title: Wykrywanie Varroa na pszczołach
layout: research
order: 4
---

Wewnętrzny model i mikrousługa do wykrywania **roztoczy Varroa bezpośrednio na pszczołach** na obrazach z ula.

Repozytorium: https://github.com/Gratheon/models-varroa-on-bee

Jest zintegrowany z naszym pipeline'em (`web-app -> graphql-router -> image-splitter -> models-varroa-on-bee`) i zwraca ramki ograniczające przez HTTP.

Najważniejsze cechy:

- dedykowane detekcje `varroa_on_bee` (nie tylko roztoczy na dennicy ula)
- proste API (`POST /` z przesyłaniem obrazu jako `multipart/form-data`)
- endpoint zdrowia dla operacji (`GET /health`)

Metryki walidacyjne (`varroa_model5`, `best.pt`):

- Precision: `0.926`
- Recall: `0.823`
- mAP50: `0.871`
- mAP50-95: `0.485`
- Precision/recall klasy Varroa: `0.858` / `0.651`
- Źródło zbioru danych: Roboflow Universe `varroa-j8231/varroa8k` v1  
  https://universe.roboflow.com/varroa-j8231/varroa8k/dataset/1

![Przykład wykrywania Varroa na pszczole](../img/varroa-detection-example.jpg)
