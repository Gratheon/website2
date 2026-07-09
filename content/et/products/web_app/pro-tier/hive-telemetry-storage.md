---
title: 📈 Taru telemeetria salvestus
layout: products
---

Taru telemeetria salvestus kogub ja visualiseerib IoT-seadmetest tulevaid aegridade andmeid, näiteks temperatuuri, õhuniiskust, kaalu ja lennuava aktiivsust.

## Ülevaade

Professionaalsel mesinikul on vaja ajaloolisi andmeid, et teha paremaid otsuseid. Telemeetriasüsteem kogub riistvarasensorite mõõdikuid ja salvestab need analüüsiks.

See toetab:
- keskkonnatingimuste pidevat jälgimist;
- hooajaliste trendide analüüsi;
- anomaaliate varajast märkamist;
- andmepõhist otsustamist taru sekkumiste kohta.

## Toetatud mõõdikud

### Keskkonnaandmed
- **Temperatuur** — taru sisetemperatuur kraadides Celsiuse järgi.
- **Õhuniiskus** — niiskustase protsentides.
- **Kaal** — taru kogukaal meevoo jälgimiseks.

### Lennuava aktiivsus
- sisse ja välja lendavad mesilased;
- netovoog;
- keskmine kiirus;
- paigal olevad mesilased;
- kaadris tuvastatud mesilaste koguarv;
- mesilastevahelised interaktsioonid.

## Kuidas see töötab

1. **Ühenda riistvara**: paigalda taruandurid või [lennuava jälgija](../../entrance_observer/entrance_observer.md).
2. **Automaatne kogumine**: seadmed saadavad mõõdikuid API-võtmega.
3. **Vaata andmeid**: graafikud kuvatakse taru mõõdikute vahekaardil ja analüütikavaates.
4. **Sea hoiatused**: [hoiatused](../flexible-tier/alerts.md) käivituvad lävede või reeglite alusel.

## Kasutusjuhud

### Hooajaline võrdlus
Võrdle temperatuuri ja niiskust aastate lõikes, et planeerida kevadist arengut ja talvitumist.

### Meevoo jälgimine
Kaalu muutused aitavad näha korje algust, lõppu ja võimalikku saagikoristuse aega.

### Pere tervise jälgimine
Lennuava aktiivsus võib viidata emata perele, röövimisele või korje muutustele.

## Seotud funktsioonid
- [📊 Aegridade andmeanalüütika](timeseries-data-analytics.md)
- [⚖️ Perede võrdlev analüütika](colony-comparison-analytics.md)
- [🔔 Hoiatused](../flexible-tier/alerts.md)
- [Taruandurite seadistus](/et/docs/beehive-sensors/)
