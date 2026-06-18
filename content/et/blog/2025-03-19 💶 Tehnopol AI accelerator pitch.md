---
title: "💶 Tehnopol AI kiirendi helikõrgus"
---

Paneme Gratheoni Tehnopoli AI Accelerator programmile järgmise struktuuriga:

1. 1min liftiväljakuks + meeskonna tutvustus
2. 1min äriplaani jaoks
3. 1 min 6-kuulise plaani jaoks, milles kirjeldatakse üksikasjalikult, mida me AI Accelerator programmi jooksul saavutada soovime (kuude kaupa)

<!-- truncate -->

## AI kiirendi plaan

Meie peamine eesmärk on muuta Gratheon **tootmis- ja GTM-i valmisolekuks** (tagades esimesed maksvad kliendid!), keskendudes sihipärasele tootearendusele.

Oleme jaganud oma 6-kuulise plaani kolmeks peamiseks tootevaldkonnaks, eraldades igaühele 2 kuud:

### IoT-andurite seade (1.–2. kuud)

- Rakendage konfigureeritav hoiatus kõrvalekallete (nt äkiline kaalulangus) korral
  - Lisage SMS-i hoiatuskanal Twilio integratsiooni kaudu
- Integreerige [Prohvet AI mudel](https://facebook.github.io/prophet/), et ennustada taru tulevast kaalu järgmistel põhjustel:
  - Ajaloolised kaaluandmed
  - Ilmaandmed
  - Sissepääsu vaatleja mesilane loeb
  - Võimalik tulevane rakendus: mesilasperede demograafia prognoosimine

> **Miks**: see tehisintellektil põhinev lähenemine eristab meid mesindusturul olemasolevatest asjade interneti lahendustest ja lisab mesinikele olulist lisaväärtust.

### Veebirakendus (3.–4. kuud)

- Täiustage kuninganna tuvastamist kaadrifotodelt
  - Praegune piirang: Clarifai koolitatud mudel väikese andmestiku ja ebaoptimaalse täpsusega
- AI mudeli stabiilsusprobleemide lahendamine (ressursipiirangud)
  - Hinnake Clarifai pilvemajutust
  - Testige mudeleid meie enda infrastruktuuril
  - Optimeerige protsessori kasutamise jaoks
- Parandage kuninganna ümberlülitamise funktsioon
- Parandage põhistatistika kuvamist ja andmete visualiseerimist

> **Miks**? Need täiustused suurendavad väärtuspakkumist klientidele, kes haldavad mesilasi kaadrifotode kaudu, pakkudes sisukat statistikat ja teadmisi, mis aitavad kaasa esmase klientide hankimisele.

### Sissepääsu vaatleja (5.–6. kuud)

- Ehitage toimiv torujuhe mesilaste loendamiseks serval (NVIDIA Orin)
  - Viide: [2. probleem](https://github.com/Gratheon/entrance-observer/issues/2)
  - Viide: [6. probleem](https://github.com/Gratheon/entrance-observer/issues/6)
- Arendada telemeetria API integratsiooni veebirakendusega
- Rakendage veebiliideses reaalajas loenduse kuvamist
- Kinnitage reaalajas järelduste tegemise võimalused
  - Viide: [Probleem nr 8](https://github.com/Gratheon/entrance-observer/issues/8)

> **Miks**: see loob minimaalse arendustööga uue tootepakkumise (sisenekaamera + GPU), luues samal ajal aluse tulevastele iteratsioonidele kulu- ja energiasäästlikumatel seadmetel (ESP32 kaamera, Raspberry Pi).

## AI Acceleratori ootused

- Täpsustage toote väärtuspakkumist ja sõnumivahetust
- Ärimudeli täiustamine (hinnastrateegia, GTM-lähenemine, üksuse ökonoomika)
- Tehnilised juhised tehisintellekti rakendamiseks (eespool kirjeldatud väljakutsetega tegelemine)
- Intellektuaalomandi tugi (logokujundus, kaubamärgi registreerimine)
- Ettevalmistus investori hoolsuskontrolliks
- Kogukonna kaasamise ja võrgustike loomise võimalused

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT7HBKNz0BXgGUv5ahSThEXHV4XWQu_LVJG-rlAbT62E8Y0PWQbjSVX-CiI1zL-HgLeHQMdwS0_vBNZ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>