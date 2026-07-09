---
title: 🔔 Aegridade anomaaliate tuvastamine
layout: products
---

## Miks

[Hoiatuste](../../flexible-tier/alerts.md) jaoks tuleb IoT-anduritest mõõdetud andmeid automaatselt ja pidevalt analüüsida. Kui aegridades ilmneb ebatavaline muster, peaks kasutaja saama hoiatuse.

## Seotud töö

See idee tugineb veebirakenduse telemeetria analüütikale ja telemeetria API andmebaasile.

## Vastuvõtukriteeriumid

- integreerida prognoosi- või anomaaliamudel, näiteks Prophet või sarnane lahendus;
- salvestada tuvastatud anomaaliad;
- näidata anomaaliaid kasutajale graafikutel ja hoiatustes;
- lubada kasutajal reegleid ja tundlikkust kohandada.

## Näited

- taru kaal langeb järsku väljaspool tavapärast mustrit;
- temperatuur muutub liiga kiiresti;
- lennuava aktiivsus langeb tugeva korje ajal ootamatult;
- seade saadab ebatavalist või katkendlikku andmevoogu.
