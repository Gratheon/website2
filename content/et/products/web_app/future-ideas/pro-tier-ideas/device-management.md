---
title: 🎮 Seadmete haldus
layout: products
---

Seadmete haldus lihtsustab veebirakenduse ühendamist [lennuava jälgija](../../../entrance_observer/entrance_observer.md), [taruandurite](/et/docs/beehive-sensors/), [robotmesitaru](../../../robotic_beehive/robotic_beehive.md) ja kolmanda osapoole seadmetega.

## Probleem

Praegu kasutavad seadmed sageli ainult API-võtit. Hiljem ei pruugi olla selge:
- milline seade millist võtit kasutab;
- millal seade viimati võrgus oli;
- milline tarkvara- või riistvaraversioon seadmel töötab;
- kuidas seadet kaugelt diagnoosida või hallata.

## Soovitatud lahendus

Veebirakenduses võiks olla eraldi **Seadmed** vaade:

- seadmete nimekiri;
- uue seadme lisamise vaade;
- seadme tüüp: taruandur, lennuava jälgija, robotmesitaru või muu;
- mudeli number ja tarkvaraversioon;
- seos taru ja vajadusel korpusega;
- eraldi API-võti konkreetsele seadmele;
- `lastUsed` aeg viimase ühenduse kohta;
- olek: online, ootel või offline.

## Seadme detailvaade

Detailvaates peaks saama:
- API-võtme tühistada;
- seadet ümber nimetada;
- siduda seadme teise taruga;
- vaadata seadme logisid;
- avada kaugühenduse, kui seadme tüüp seda toetab.

## Eelised

- parem turvalisus, sest iga seade saab eraldi võtme;
- lihtsam vigade otsimine;
- selgem ülevaade, mis tarudes on aktiivsed seadmed;
- tootmisseadmete puhul võimalik versioonide ja toe haldus.
