---
title: "📢 Live Queen Finder"
---

Anname Gratheoni rakenduses välja **Live Queen Finderi**.

Avage taru kontrollimise ajal telefonis rakendus, käivitage kaamera ja Gratheon otsib kuningannat reaalajas. Kui kuninganna liigub kaadrist läbi, joonistab rakendus tema ümber tuvastuskasti, et saaksite teda kiiremini märgata.

![](img/live-queen-finder-mobile.jpg)

<!-- truncate -->

Kuninganna leidmine on üks neid töid, mis võib vaikselt palju ülevaatusaega ära süüa. Skaneerite raami, nihutate mesilased kõrvale, kontrollite uuesti ja proovite mitte kaotada jälgi, kuhu te juba vaatasite.

Live Queen Finder on mõeldud selleks hetkeks abiks. See ei asenda teie otsustusvõimet, kuid annab teile põllul töötades teise silmapaari.

![](img/live-queen-finder-app.png)

## Kuidas seda kasutada

1. Avage oma mobiiltelefonis [Gratheoni rakendus](https://app.gratheon.com/).
2. Avage **Queens** ja valige **Reaalajas detektor**.
3. Luba kaamerale juurdepääs.
4. Suunake kaamera raamile ja liikuge ühtlaselt üle kammi.

Saate selle avada ka otse siit:

[app.gratheon.com/warehouse/queens/detect](https://app.gratheon.com/warehouse/queens/detect)

Funktsioon on nüüd tasuta saadaval.

![](img/live-queen-finder-detection.png)

## Avatud lähtekoodiga kuninganna tuvastamise mudel

Samuti hangime detektori taga olevale ettevõttesiseselt koolitatud mudelile avatud allika:

[github.com/Gratheon/models-queen-bee-detector](https://github.com/Gratheon/models-queen-bee-detector)

Praegune lähtetase kasutab YOLOv8 nanomudelit, mis on eksporditud ONNX-i brauseri järelduste tegemiseks ONNX Runtime Webiga. Testi jagamise kohta teatab mudel järgmist:

- täpsus: `0.9727`
- tagasi kutsuda: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Mudelit õpetati tuvastama mesilasemasid töötajate, droonide, õietolmumesilaste ja raami/tausta sisu hulgast. Brauseri detektor töötleb kaamera kaadreid kohapeal; jõudlus sõltub telefonist, valgustusest, kaamera fookusest ja sellest, kui selgelt kuninganna on nähtav.

Kui proovite seda mesilas, tahaksime kuulda, kus see töötab hästi ja kus ebaõnnestub. See tagasiside aitab meil täiustada mudelit tõeliste kontrollide jaoks, mitte ainult puhaste demopiltide jaoks.
