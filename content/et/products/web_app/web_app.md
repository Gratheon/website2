---
sidebar_position: 2
title: 📱 Veebirakendus
navTitle: Veebirakendus
layout: products
---

Gratheoni veebirakendus aitab mesinikel hallata [mesila andmeid](/products/web_app/free-tier/apiary-management/), suhelda paigaldatud modulaarsete taruseadmetega, analüüsida kärje- ja põhjalaua pilte, salvestada [aegridade telemeetriat](/products/web_app/pro-tier/hive-telemetry-storage/), luua [teavitusi](/products/web_app/flexible-tier/alerts/), teha prognoose ning pakkuda tehisaru soovitusi probleemide lahendamiseks.

`status`: [TRL 6](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

## Põhivaldkonna olemid

| Olem | Kirjeldus | Peamised omadused |
|------|-----------|-------------------|
| **Mesila** | Koos paiknevate tarude kogum kindlas asukohas. Suurust piirab ümbritsev maa, mida mesilased saavad tolmeldada. | Asukoht (lat/lng), nimi, aktiivne olek |
| **Taru** | Füüsiline mitme vertikaalse sektsiooniga mesitaru. Seda saab jagada, ühendada või märkida hävinuks. | Nimi, värv, olek, korpused, pere, jagamise/ühendamise ajalugu, hukkumise jälgimine |
| **Pere (koloonia/ema)** | Mesilasema juhitud mesilaste superorganism. | Rass (Apis mellifera variatsioon), lisamise aasta, vanus (arvutatakse automaatselt), ravid |
| **Korpus (tarusektsioon)** | Õõnes puidust sektsioon, mis mahutab raamid. Tüübid: pesa, magasin, lennuava, ventilatsioon, emalahutusvõre, horisontaalne söötja, põhjalaud. | Tüüp, asukoht, värv, raamid |
| **Raam** | Vahapõhjaga puidust raam sektsioonis. Tüübid: kärjepõhi, tühi kärg, tühi koht, vahesein, söötja. | Tüüp, asukoht, vasak/parem külg |
| **Raami külg** | Raami üks külg, kuhu saab tehisaru analüüsiks fotosid üles laadida. | Pildifailide viited, tuvastatud ressursid |
| **Inspekteerimine** | Mesinikupoolse sekkumise ajal tehtud hetkepilt kogu taru seisust. Salvestab konkreetse aja tarukompositsiooni JSON-andmetena. | Taru ID, andmed (JSON), ajatempel |
| **Ravi** | Varroavastased keemilised sekkumised, mida jälgitakse pere/korpuse/taru lõikes raviajaloo jaoks. | Tüüp, ajatempel, sihtmärk (taru/korpus/pere) |
| **Fail** | Üleslaaditud pildid, näiteks raamifotod ja põhjalaua varroafotod. Töödeldakse tehisaru tuvastustorustikus. | Räsi, mõõtmed, kasutaja ID, failitüüp, tuvastustööd |
| **Tuvastatud ressursid** | Raamifotodel tehisaru abil tuvastatud rakkutüübid: kaanetatud haue, munad, mesi, vaglad, nektar, õietolm, muu. | Klass, koordinaadid (x,y), raadius, tõenäosus |
| **Tuvastatud mesilased/emad** | Raamidel tehisaru abil tuvastatud mesilaste ja mesilasemade asukohad. | Piirdekastid, usaldusskoorid |
| **Tuvastatud varroa** | Põhjalaua fotodel tehisaru abil tuvastatud varroalestad. | Arv, asukohad (peagi) |
| **Mõõdikud (telemeetria)** | IoT-seadmetest saabuvad aegridade andmed. | Temperatuur (°C), õhuniiskus (%), kaal (kg), ajatempel |
| **Lennuava liikumine** | Lennuava videokaamerate põhjal tehtud mesilaste liikluse analüüs. | Sisse/välja liikuvad mesilased, netovoog, kiirusstatistika, paigal mesilased, interaktsioonid |
| **Hoiatus** | Mõõdikulävede ja reeglite põhjal loodud hoiatused. | Tekst, mõõdiku tüüp/väärtus, taru ID, kohaletoimetamise olek, ajatempel |
| **Hoiatusreegel** | Kasutaja määratud tingimused, mis käivitavad hoiatusi. | Mõõdiku tüüp, tingimus, lävi, kestus, lubatud olek, ulatus (taru/mesila) |
| **Hoiatuskanal** | Hoiatuste kohaletoimetamise viisid. | Tüüp (email/telefon/Telegram), kontaktinfo, ajavahemik, lubatud olek |

![](/about/img/web-app.png)

## Peamised kasutusjuhud
Kasutusjuht on funktsioonide rühm, mis koos loob kliendile suurema väärtuse.

### Fotode üleslaadimine, et saada ülevaade mesilasperest
- Loo taru.
- Ava kindel sektsioon ja lisa raamid.
- Ava konkreetne raam ning vajuta "laadi raami foto üles", kasutades pilti mesilaste ja kärjerakkudega. Vaata ka ingliskeelseid lehti [raami külje haldus](/products/web_app/free-tier/frame-side-management/) ja [inspekteerimiste haldus](/products/web_app/hobbyist-tier/inspection-management/).
- Oota, kuni taustsüsteem pildi töötleb.
- Saa tehisaru abil statistikat mesilaste arvu ja rakkude jaotuse kohta.
- Võrdle tarusid, et näha, millised pered on pärisandmete põhjal tugevamad.

### Mesilaspere arengu jälgimine ajas
- Lisa taruinspektsiooni järel raamifotosid.
- Vajuta "Loo inspekteerimine", et salvestada taru seis hetkevaatena.
- Kontrolli, et uus inspekteerimine lisati inspekteerimiste vahekaardile.
- Võrdle, kuidas ressursside jaotus igas inspekteerimises aja jooksul muutub.

### IoT-andurite telemeetria saatmine
- Loo konto seadetes API võti.
- Lülita IoT-andurseade sisse ja järgi [taruandurite dokumentatsiooni](/docs/beehive-sensors/) WiFi-ühenduse ning andmete saatmise seadistamiseks.
- Ava sihttaru, seejärel mõõdikute vahekaart, ja vaata kaalu/temperatuuri graafikuid.
- Ava analüütika vahekaart, et näha andmeid ajapiirangutega ning võrrelda neid näiteks ilmaga.

### Lennuava video voogedastus
- Seadista [lennuava jälgija](../entrance_observer/entrance_observer.md) kaamera videot voogedastama.
- Kontrolli, et videovoog oleks nähtav.

### Varroa seire põhjalaua kaudu
- Lisa tarule põhjalaua sektsioon.
- Laadi üles foto valgest väljatõmmatavast plaadist, millel on varroalestad.
- Pildid versioonitakse inspekteerimistega ajalooliseks jälgimiseks.
- [Varroa-lestade loendamine taru põhjalaualt](starter-tier/hive-bottom-varroa-count.md) aitab hinnata lestade hulka ja teha raviotsuseid.

## Tähtsamad funktsioonid selles lokaliseeritud osas
- [👑 Reaalajas mesilasema leidja](free-tier/live-queen-finder.md)
- [🦀 Varroa-lestade loendamine taru põhjalaualt](starter-tier/hive-bottom-varroa-count.md)

## Rohkem ingliskeelset infot
Need lingid jäävad teadlikult ingliskeelseks, kuni vastavad alamlehed on samuti lokaliseeritud:
- [Mesila haldus](/products/web_app/free-tier/apiary-management/)
- [Taru telemeetria salvestus](/products/web_app/pro-tier/hive-telemetry-storage/)
- [Teavitused](/products/web_app/flexible-tier/alerts/)
- [Aegridade andmeanalüüs](/products/web_app/pro-tier/timeseries-data-analytics/)
- [Taruandurite dokumentatsioon](/docs/beehive-sensors/)
