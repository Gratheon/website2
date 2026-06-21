---
title: 👁️‍🗨️ Sissepääsu vaatleja
sidebar_position: 5
hide_table_of_contents: true
---
Peamine klienditeenindus on [betaru-sissepääs-videoprotsessor](https://github.com/Gratheon/beehive-entrance-video-processor), see peab töötama ääreseadmes, et jäädvustada ja saata andmeid aadressile web-app. Meie peamine prioriteet on järelduste tegemine ääreseadmel, kuid tahame ka pilve toega hübriidjäreldusi.

Tootetaseme ülevaate saamiseks vaadake jaotist [Entrance Observer](../../products/entrance_observer/entrance_observer.md). Jäädvustatud mõõdikud loovad ühenduse [taru telemeetriasalvestusega](/products/web_app/pro-tier/hive-telemetry-storage/) ja [aegridade analüüsiga](/products/web_app/pro-tier/timeseries-data-analytics/).
### Videotöötlus, taasesitus ja analüüs

```mermaid
flowchart LR
	web-app("<a href='https://github.com/Gratheon/web-app'>web-app</a>\n:8080") --"fetch video streams"--> graphql-router("<a href='https://github.com/Gratheon/graphql-router'>graphql-router</a>") --"list video stream URLs"--> gate-video-stream -- "get data for playback" --> mysql

	web-app --"record & upload \n 10s webcam video"--> gate-video-stream("<a href='https://github.com/Gratheon/gate-video-stream'>gate-video-stream</a>\n:8900") --"inference video"--> models-gate-tracker("<a href='https://github.com/Gratheon/models-gate-tracker'>models-gate-tracker</a>")

	gate-video-stream --"store video re-training with 1 month TTL"--> aws-s3
	gate-video-stream --"store results long-term" --> mysql

	entrance-observer("<a href='https://github.com/Gratheon/entrance-observer'>entrance-observer</a>") --"record & upload 10s video chunks\nsend edge-computed telemetry"--> gate-video-stream

	entrance-observer -."send detected bees \n timeseries counts".-> telemetry-api("<a href='https://github.com/Gratheon/telemetry-api'>telemetry-api</a>")

	web-app --"include analytics page"--> grafana("<a href='https://github.com/Gratheon/grafana'>grafana</a>\n:9000") --"read bee traffic over time"--> influxdb("influxdb:5300")
```





Kaamera kaitsekate
![](docs/entrance-observer/img/Screenshot%202025-09-13%20at%2012.30.27.png)

## Töötlemisarhitektuuri valimine

Video töötlemisele saame läheneda erinevate nurkade alt:| **Kus** | **Pussid** | **Miinused** |
| ------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- --------------------------------------------------------------------- --------------------------------------------------------------------- --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------------------------ |
| Edge seade ilma GPU <br />raspberry-pi <br /> <br />ex.  <br />[🇨🇿 BeeLogger](https://www.notion.so/BeeLogger-ad269086bf8449faa0aae6754f879181?pvs=21), [BeePi](https://www.notion.so/BeePi-2e3023f492864fa98b2790743c3ba6e4?pvs=21) | - soodne ~ 95 EUR tahvel | - piiratud lihtsate arvmudelitega <br />- ei pruugi olla usaldusväärne |
| Edge-seade GPU <br />(jetson nano) <br /> <br />ex.  <br />[🇩🇪Apic.ai](https://www.notion.so/Apic-ai-7859a940fd644a3fa35008fd3a2f1909?pvs=21), [🇦🇺Beemate](https://www.notion.so/Beemate-7f54f62332334254b42e3e584dfae537?pvs=21), [🔬BeeAlarmed. Magistritöö](https://www.notion.so/BeeAlarmed-Masters-thesis-d9c40374718b480ab08a3872f441a2d8?pvs=21) | - tõhus <br />- madal võrgusõltuvus <br />- võib töötada võrguühenduseta oma GPU | ~ ainuüksi tahvlile kulus 230 EUR |
| Hübriid: <br />- kohapealne (kohalik) GPU tööjaam <br />- Video voogedastusseadmed | - madalamad kulud kokku | - seadme suurem alghind <br />- vajadus spetsiaalse tööjaama asukoha järele |
| Ainult pilv, nt.  [LabelBee](https://www.notion.so/LabelBee-482ad7f33192487caae38697b21b7f5d?pvs=21) |                                                                                                                                                                                                                                                                                     | - vajavad suurt võrgu ribalaiust <br />- tuleb optimeerida muutuva võrgu ribalaiuse jaoks <br />- kallis <br />- video voogesituse ja töötlemise hind <br />- video salvestuskulu |
| Spetsiaalsed [PCB-seadmed](https://jlcpcb.com/) | - energiatõhusus <br />- madal tootmiskulu | - tavaliselt vähe RAM-i, GPU <br />- suured arenduskulud |
| Mobiiltelefonis | - kliendi kontrollitav hind <br />- on sisseehitatud võrguühendus <br />- kaamera <br />- ekraan on <br />- aku- ja toitehaldus ____0 müüja puudub - TAG__0 ETDO2_5 <br />- kõige lihtsam alustada <br />- mesinikul on lihtne seadistada <br />- automaatsed rakenduste ümberpaigutused | - suur valik telefone, ebaühtlane kogemus <br />- telefonis töötlemiseks, probleemid GPU-ga, vajadus kasutada kohandatud mobiili tensorvoogu <br />- liiga kõrge tase (brauseris), kasutaja sekkumine võib olla keeruline |