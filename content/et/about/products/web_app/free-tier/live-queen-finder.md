---
status: complete
title: 👑 Reaalajas mesilasema leidja
---

## Eesmärk
Reaalajas mesilasema leidja aitab mesinikel leida mesilasema taruinspektsiooni ajal mobiiltelefoni kaamera abil.

Ava Gratheoni rakendus, suuna kaamera raamile ning detektor joonistab kasti võimalike mesilasemade ümber, samal ajal kui sa taru kontrollid.

## Kasutajalugu
- Mesinikuna, kes kontrollib taru,
- tahan saada reaalajas kaameraabi ema otsimisel,
- et leida ta kiiremini ja kulutada iga raami juures vähem aega otsimisele.

## Peamised eelised
- **Välitingimustes kasutatav**: töötab Gratheoni rakenduses mobiiltelefonis, kui kaamerale on ligipääs.
- **Üleslaadimist pole vaja**: kaadris olevad pildid töödeldakse lokaalselt brauseris.
- **Tasuta pakett**: funktsioon on saadaval tasuta paketis, sest inferents toimub kasutaja seadmes.
- **Kiirem inspekteerimine**: aitab tähelepanu suunata võimalikele mesilasema tuvastustele isegi siis, kui ema liigub üle raami.

## Kuidas kasutada
1. Ava telefonis [app.gratheon.com](https://app.gratheon.com/).
2. Mine menüüsse **Mesilasemad** → **Reaalajas detektor**.
3. Luba brauseril kasutada kaamerat.
4. Liigu kärjel rahulikult ja jälgi tuvastuskasti.

Otselink: [app.gratheon.com/warehouse/queens/detect](https://app.gratheon.com/warehouse/queens/detect)

## Tehniline ülevaade
Reaalajas mesilasema leidja kasutab YOLOv8 nano mesilasema detektori mudelit, mis on eksporditud ONNX-vormingusse ja töötab brauseris ONNX Runtime Web abil. Inferents ei kasuta Gratheoni serveripoolseid pilditöötluskrediite.

Praegused testmõõdikud:
- täpsus: `0.9727`
- saagis: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Mudeli repositoorium: [github.com/Gratheon/models-queen-bee-detector](https://github.com/Gratheon/models-queen-bee-detector)

## Piirangud
- Vajab kaasaegset brauserit ja kaamera ligipääsu.
- Kiirus sõltub telefonist, brauserist ja valgustingimustest.
- Süsteem võib mesilasemasid vahele jätta või anda valepositiivseid tulemusi, eriti häguse, halvasti fokusseeritud või osaliselt varjatud pildi korral.
- Enne otsuste tegemist kinnita tulemust alati visuaalselt.

## Seotud funktsioonid
Need lingid jäävad praegu ingliskeelseteks:
- [Mesilasemade haldus](/about/products/web_app/hobbyist-tier/queen-management/)
- [Mesilasema tuvastamine](/about/products/web_app/hobbyist-tier/queen-detection/)

---
**Viimati uuendatud**: 8. juuni 2026
