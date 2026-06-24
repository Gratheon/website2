---
order: 2
sidebar_position: 2
hide_table_of_contents: true
title: 🗂️ REST APIs
showChildren: true
---
Üldiseks kasutamiseks soovitame kasutada meie [GraphQL](../GraphQL.md).
Ääreseadmete jaoks pakume mikroteenusepõhiseid versioonipõhiseid REST API-sid.

REST API dokumentatsioon on hostitud mikroteenustes endis, nii et dokumentatsioon püsib seotud teenuste OpenAPI lepingutega. OpenAPI URL-i saab importida Postmani, Brunosse või Insomniasse client collectionite genereerimiseks; Swagger UI-s saab kopeerida ka cURL näiteid.

- [Telemetry API](telemetry-api.md) — sensor telemetry ja entrance movement metrics.
- [Gate Video Stream](gate-video-stream.md) — HLS playback REST endpoints entrance video streamidele.
