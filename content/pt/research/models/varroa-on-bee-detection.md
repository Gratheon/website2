---
title: Detecção de varroa sobre abelhas
layout: research
order: 4
---

Modelo e microsserviço interno da Gratheon para detectar **ácaros varroa diretamente sobre abelhas** em imagens de colmeia.

Repositório: https://github.com/Gratheon/models-varroa-on-bee

Ele está integrado ao nosso pipeline (`web-app -> graphql-router -> image-splitter -> models-varroa-on-bee`) e retorna bounding boxes por HTTP.

Destaques:

- Detecções dedicadas de `varroa_on_bee` (não apenas ácaros no fundo da colmeia)
- API simples (`POST /` com upload de imagem via `multipart/form-data`)
- Endpoint de saúde para operações (`GET /health`)

Métricas de validação (`varroa_model5`, `best.pt`):

- Precisão: `0.926`
- Recall: `0.823`
- mAP50: `0.871`
- mAP50-95: `0.485`
- Precisão/recall da classe Varroa: `0.858` / `0.651`
- Fonte do conjunto de dados: Roboflow Universe `varroa-j8231/varroa8k` v1  
  https://universe.roboflow.com/varroa-j8231/varroa8k/dataset/1

![Exemplo de detecção de varroa sobre abelhas](/assets/img/research/img/varroa-detection-example-preview.webp)
