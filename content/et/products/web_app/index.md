---
sidebar_position: 2
title: 📱 Veebirakendus
navTitle: Veebirakendus
layout: products
---

Gratheoni veebirakendus aitab mesinikel hallata [mesila andmeid](free-tier/apiary-management.md), suhelda paigaldatud modulaarsete taruseadmetega, analüüsida kärje- ja põhjalaua pilte, salvestada [aegridade telemeetriat](pro-tier/hive-telemetry-storage.md), luua [hoiatusi](flexible-tier/alerts.md), teha prognoose ning pakkuda tehisaru soovitusi probleemide lahendamiseks.

`status`: [TRL 6](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

## Põhivaldkonna olemid

| Olem | Kirjeldus | Peamised omadused |
|------|-----------|-------------------|
| **Mesila** | Ühes asukohas paiknev tarude kogum. Suurust piirab ümbritsev maa, mida mesilased saavad tolmeldada. | Asukoht (lat/lng), nimi, aktiivne olek |
| **Taru** | Füüsiline mitme vertikaalse sektsiooniga mesitaru. Seda saab jagada, ühendada või märkida hävinuks. | Nimi, värv, olek, korpused, pere, jagamise/ühendamise ajalugu |
| **Pere (koloonia/ema)** | Mesilasema juhitud mesilaste superorganism. | Rass, lisamise aasta, vanus, raviajalooga seotud andmed |
| **Korpus (tarusektsioon)** | Õõnes sektsioon, mis mahutab raamid: pesa, magasin, lennuava, ventilatsioon, emalahutusvõre, söötja või põhjalaud. | Tüüp, asukoht, värv, raamid |
| **Raam** | Vahapõhja või kärjega raam tarusektsioonis. | Tüüp, asukoht, vasak/parem külg |
| **Raami külg** | Raami üks külg, kuhu saab tehisaru analüüsiks fotosid üles laadida. | Pildifailid, tuvastatud ressursid |
| **Ülevaatus** | Mesinikupoolse sekkumise ajal tehtud hetkepilt kogu taru seisust. | Taru ID, JSON-andmed, ajatempel |
| **Ravi** | Varroa- ja muude ravimeetmete logi pere, korpuse või taru lõikes. | Tüüp, aeg, sihtmärk |
| **Fail** | Üleslaaditud pildid, näiteks raamifotod ja põhjalaua varroafotod. | Räsi, mõõtmed, kasutaja ID, tuvastustööd |
| **Tuvastatud ressursid** | Raamifotodel tehisaru abil tuvastatud rakkutüübid: kaanetatud haue, munad, mesi, vaglad, nektar, õietolm ja muu. | Klass, koordinaadid, raadius, tõenäosus |
| **Tuvastatud mesilased/emad** | Raamidel tuvastatud töömesilaste ja mesilasemade asukohad. | Piirdekastid, usaldusskoorid |
| **Tuvastatud varroa** | Põhjalaua fotodel tuvastatud varroalestad. | Arv ja asukohad |
| **Mõõdikud (telemeetria)** | IoT-seadmetest saabuvad aegridade andmed. | Temperatuur, õhuniiskus, kaal, ajatempel |
| **Lennuava liikumine** | Lennuava videokaamerate põhjal tehtud liiklusanalüüs. | Sisse/välja liikuvad mesilased, netovoog, kiirus, interaktsioonid |
| **Hoiatus** | Mõõdikulävede ja reeglite põhjal loodud teavitus. | Tekst, mõõdiku tüüp/väärtus, taru ID, kohaletoimetamise olek |
| **Hoiatusreegel** | Kasutaja määratud tingimused hoiatuste käivitamiseks. | Mõõdik, tingimus, lävi, kestus, ulatus |
| **Hoiatuskanal** | Hoiatuste kohaletoimetamise viis. | E-post, telefon, Telegram, webhook |

![](../../../about/img/web-app.png)

## Peamised kasutusjuhud

Kasutusjuht on funktsioonide rühm, mis koos loob mesinikule suurema väärtuse.

### Fotode üleslaadimine pere ülevaate saamiseks
- Loo [mesila](free-tier/apiary-management.md) ja [taru](free-tier/hive-management.md).
- Ava kindel sektsioon ja lisa raamid.
- Ava konkreetne raam ning vajuta „laadi raami foto üles“, kasutades pilti mesilaste ja kärjerakkudega. Vaata [raami külje haldust](free-tier/frame-side-management.md) ja [ülevaatuste haldust](hobbyist-tier/inspection-management.md).
- Oota, kuni taustsüsteem pildi töötleb.
- Saa tehisaru abil statistikat mesilaste arvu ja rakkude jaotuse kohta.
- Võrdle tarusid, et näha, millised pered on pärisandmete põhjal tugevamad.

### Mesilaspere arengu jälgimine ajas
- Lisa pärast taru ülevaatust raamifotosid.
- Vajuta „Loo ülevaatus“, et salvestada taru seis hetkepildina.
- Kontrolli, et uus ülevaatus lisati ülevaatuste vahekaardile.
- Võrdle, kuidas ressursside jaotus igas ülevaatuses aja jooksul muutub.

### IoT-andurite telemeetria saatmine
- Loo konto seadetes API võti.
- Lülita IoT-andurseade sisse ja järgi [taruandurite dokumentatsiooni](/et/docs/beehive-sensors/) WiFi-ühenduse ning andmete saatmise seadistamiseks.
- Ava sihttaru, seejärel mõõdikute vahekaart, ja vaata kaalu/temperatuuri graafikuid.
- Ava analüütika vahekaart, et näha andmeid ajapiirangutega ning võrrelda neid näiteks ilmaga.

### Lennuava video voogedastus
- Seadista [lennuava jälgija](../entrance_observer/entrance_observer.md) kaamera videot voogedastama.
- Kontrolli, et videovoog oleks nähtav.

### Varroa seire põhjalaua kaudu
- Lisa tarule põhjalaua sektsioon.
- Laadi üles foto valgest väljatõmmatavast plaadist, millel on varroalestad.
- Pildid seotakse ülevaatustega ajalooliseks jälgimiseks.
- [Varroa-lestade loendamine taru põhjalaualt](starter-tier/hive-bottom-varroa-count.md) aitab hinnata lestade hulka ja teha raviotsuseid.

## Lokaliseeritud funktsioonid

- [📦 Mesila haldus](free-tier/apiary-management.md)
- [📦 Tarude haldus](free-tier/hive-management.md)
- [🖼️ Raami külje haldus](free-tier/frame-side-management.md)
- [🖮 Klaviatuuri otseteed](free-tier/keyboard-shortcuts.md)
- [👑 Reaalajas mesilasema leidja](free-tier/live-queen-finder.md)
- [🔎 Ülevaatuste haldus](hobbyist-tier/inspection-management.md)
- [🦀 Varroa-lestade loendamine taru põhjalaualt](starter-tier/hive-bottom-varroa-count.md)
- [🐝 Kärjerakkude tuvastamine ja haldus](starter-tier/honeycomb-cell-detection-and-management.md)
- [📈 Taru telemeetria salvestus](pro-tier/hive-telemetry-storage.md)
- [📊 Aegridade andmeanalüütika](pro-tier/timeseries-data-analytics.md)
- [🔔 Hoiatused](flexible-tier/alerts.md)
