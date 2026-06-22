---
title: "🛰️ Osalesin Garage48 Cassini häkatonil"
---

Osalesime üleeuroopalisel satelliidiandmete töötlemisele keskendunud häkatonil, mida korraldas kohapeal Garage48.

Meie peamine eesmärk on
- võrgustik meeskonna kasvatamiseks
- tõsta teadlikkust turundusena
- arendada meie mesilate jaoks geoandmetega tootefunktsioone

https://taikai.network/cassinihackathons/hackathons/intdev-humaid

[Pitch PDF](/assets/blog/files/First%20Gratheon%20Garage48%20pitch%20to%20get%20a%20team.pdf)

<!-- truncate -->

## **Probleem**

Toiduga kindlustatus. FAO andmetel 2022. aastal oli maailmas 735,1 miljonit alatoidetud inimest

Põllumajanduskultuure tolmeldatakse ebaefektiivselt. See juhtub seetõttu, et mesitarud on praegu paigutatud juhuslikult, olenemata sellest, kuidas mesinik otsustab. Mesinikud ei tea, kuhu ja miks mesitarusid paigutada. Mesilased on **loodusliku tolmeldamise** võtmeks, mis suurendab **saaki**, aitab varustada toiduga ja vähendab metsade raadamise vajadust. ****Põllumehed võivad tahtmatult mesilasi pestitsiididega tappa.

**Lahendus**

Täiustame **keskkonnaülevaadet** **mesinike jaoks**.

Analüüsides tolmeldamise katvust satelliidilt, saab mesitarusid **tõhusamalt** positsioneerida.

Tänu meie rakendusele saavad põllumehed saada paremat saaki, mesinikud saavad rohkem mett ning terved mesilased ja mesilased saavad rohkem nektarit või õietolmu mitmekesisust.

Mitmekesine õietolm parandab nii mesilaste tervist kui ka mee maitset. Samuti ei pea mesilased ressursside pärast nii palju konkureerima. Taru eraldi paigutamine vähendab haiguste riski.

Üldiselt aitab [Gratheon](/) mesinikele jälgida ja automatiseerida, et nad saaksid olla tõhusamad ja nende kolooniad terved. Pakume rakendust ja integreerime riistvara, et arvutinägemine saaks mesinikku ohu korral hoiatada. Meie pikaajaline visioon on [autonoomne robot-mesipuu](/products/robotic_beehive/robotic_beehive/).

**Õietolmukaardi funktsiooni idee**

1. 5-kilomeetrise raadiusega (mesilase maksimaalne lennuulatus) oleva mesinduse satelliidipildi põhjal käivitage tehisintellekti ennustused, et tuvastada, millist tüüpi puid ja põllukultuure mesilas ja selle **ruutpinnal (m2)** kasvavad.
![](img/image1.png)

EOS-i andmeanalüütika eesmärk on põllukultuuride klassifitseerimine, pilt ja funktsioon

2. Arvestades tuvastatud tolmeldamisallikaid, soovitage mesinikul, kuidas mesilasi optimaalselt paigutada, et optimeerida maksimaalset nektarivoolu või õietolmu maksimaalset mitmekesisust. See on oluline ka seetõttu, et põllukultuurid võivad õitseda erinevatel aegadel. Koos üksikute mesitarude reaalajas tolmeldamistegevuse andmetega saab mesinik teha teadlikke otsuseid

![](img/image2.png)

Taru paigutuse optimeerimine, pilt ja funktsioon, autor [beehero.io](http://beehero.io)

Pange tähele, et see funktsioon on sihitud mesinikele, kes on võimeline **mesitarusid teisaldama** või linnaplaneerijaid, kes soovivad autonoomseid mesitarusid linnas optimaalselt paigutada. Staatiliste mesilate puhul pakuksime _ainult_, millist nektarit/mett võite oodata, et saaksite teada, millal konkreetset nektarit (nt tatar) koristatakse, ning ennustada mee kogust sõltuvalt taime nektari sekretsioonist.

**Tootekujunduse makett**

Alustasime sellest, kuidas tahame, et kasutaja huviliste andmete saamiseks kaardiga suhtleks

- põllukultuuride tüübid
- põllukultuuride vahekord tolmeldaval alal
- õitsemise aeg
- taimenektari tootmine (kg/ha)

## ELi kosmosetehnoloogiad

Kasutame väljade kohta baasteabe saamiseks Sentinel 2 L1C andmeid, RGB kihti

Seejärel käivitame väljade tuvastamiseks pildi segmenteerimise

Seejärel käivitame tuvastatud põldude klassifikatsiooni, et mõista, millise põllukultuuriga me tegeleme. Kuna me teame pildi aega, saame seda kasutada õitsemisaja sobitamiseks.

Seejärel arvutame välja ruudu pindala

Seejärel arvutame välja kõikide põllutüüpide suhte 5 km läheduses ja teatame sellest kasutajale (mesinikule)

Mesinik saab taru asukohta teisaldada, mille tulemusel arvutatakse protsendid ümber

Mesinik näeb ka seda, kui palju erinevate tarude mesilased ristuvad

# Meeskond

[Artjom Kurapov](https://www.linkedin.com/in/kurapov/) – tarkvarainsener

[Aleksei Boriss](https://www.linkedin.com/in/alekseiboris/) - bizdev / legal / ops

[Natalia Kinash](https://www.linkedin.com/in/nataliia-kinash/) – masinõppe insener, rakendusmatemaatika

[Reinis Indans](https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACcYIOABh-CstsU-a3j6keX8AEZKUSY5El8&keywords=Reinis%20Indans&origin=ENTITY_SEARCH_HOME_HISTORY&sid=uqZ) – GIS-i/täieliku virna insener

[Pealkirjata](https://www.notion.so/1f6cefe4cafd43ef8a2f6ba21e684554?pvs=21)

## Disaini makett

![](img/Screenshot%202023-11-04%20at%2008.58.03.png)

Mesilavaade ühe taru kaardiga

![](img/Screenshot%202023-11-04%20at%2009.24.44.png)
Õitsemisaja vaade

## Süsteemi disain

![](img/Screenshot%202023-11-04%20at%2009.15.25.png)

Hoolduskomponentide diagramm

Esialgne idee oli, et arvestades mesila koordinaate X,Y, esitame Copernicuse serveritele taotluse saada RGB nähtava spektri andmeid. Seejärel edastame tulemuse png-pildi koolitatud ML-mudelile, mis segmenteerib väljad ja klassifitseerib need. Seejärel soovisime salvestada järelduste tulemused DB-sse, et oleks vahemälu paigas juhuks, kui kasutaja külastab sama lehte.

**KASUTATUD masinõpet ja SATELLIIDIANDMEID**

Koolitasime arenduse käigus kahte eraldi mudelit.

Esmalt proovisime [kerge versioon](https://universe.roboflow.com/gratheon/crop-fields/model/2)-i, mis suutis väljad segmenteerida ilma tegeliku klassifikatsioonita. Me ei hakanud seda kasutama, kuna tahtsime tegelikke väljatüüpe ja seda koolitati juba olemasolevate andmekogumite põhjal, mis ei olnud Copernicusega seotud, kuigi see oleks kõige kiiremini integreeritav

Teine mudel oli keerulisem. Eksportisime Copernicus Open Data Hubist ilma pilvkatteta Eesti kaardi (13. juuniks 2023) multispektraalses .dim formaadis, mis sisaldab kõiki kihte (infred jne), seejärel töötlesime selle QGIS-is. Normaliseerisime eraldusvõime 20 m.

Mudeli väljaõppeks võtsime polügooniandmed Eesti registritest - PRIA (viljapõldude register) ja Maaamet (metsad ja hooned). Seejärel ühendasime need kihid, puhastasime klassid (algsest 300 klassist saime 25 klassi). Andmestiku ettevalmistamiseks valisime iga klassi jaoks koolituse (300) ja valideerimise (50) eksemplari. Kasutasime juhuslikku metsamudelit.

![](img/qgis.jpeg)

QGis liides

Selle tulemusena loob mudel pildi, kus iga piksli kohta on meil klassi ennustus. See võimaldab meil teha järeldusi riikides/piirkondades, kus pole saadaval digitaalseid põldude/kultuuride kaardistamise andmeid. See võimaldab meil ka hõlpsasti arvutada klassisuhteid, kasutades lihtsat pikslite arvu.

Järelduste tegemiseks kasutame sentinel-2-l2a ja protsessi API-t



Koolitatud fie![](img/estonia-fields.png)ld klassifikatsiooni visualiseerimine Tallinna lähedal, Eesti (üleval)

**Tulemusrakendus**

Meil on kasutusele võetud veebirakendus, mis on klientidele saadaval.

Esitame Copernicuse serverile taotluse saada sentinel-2-l2a pilt konkreetse asukoha kohta +-4 km (mesilaste lennuulatus) ja esitame klasside loendi, mille kohta saame järeldusi teha

Sellele juurdepääsuks peate tegema järgmist:

- registreeruge rakenduses - [https://app.gratheon.com/account/register](https://app.gratheon.com/account/register)
- looge uus mesila - [https://app.gratheon.com/apiaries/create](https://app.gratheon.com/apiaries/create)
- minge mesila vaatesse, lohistage markerit ja klõpsake valikul „Analüüsi põllukultuure” – [https://app.gratheon.com/apiaries/edit/2](https://app.gratheon.com/apiaries/edit/2)

**Lähtekood**

- ML-treeningu andmestik – [https://drive.google.com/drive/folders/1Gh4DXqaDFF1r3lsgxQlo2HREPjo6xlRK?usp=sharing](https://drive.google.com/drive/folders/1Gh4DXqaDFF1r3lsgxQlo2HREPjo6xlRK?usp=sharing)
- Taustaprogramm ja ML-kood – [https://github.com/Gratheon/satellite-pollination-map](https://github.com/Gratheon/satellite-pollination-map)
- Frontendi hiljutised häkatoniga seotud muudatused – [https://github.com/Gratheon/web-app/commits/main](https://github.com/Gratheon/web-app/commits/main)

**Piirangud ja tulevane töö**

- Võiksime ühendada mesinikud põllumeestega, et vältida pestitsiididega kokkupuudet mesilaste õitsemise ajal
- ML-mudel vajab täpsusega rohkem tööd. Kasutasime andmestiku jaoks fikseeritud kuupäeva, nii et selle asemel saime kasutada ajaloolisi andmeid täpsema õitsemisajaga mudelite koolitamiseks (nt iga 2 nädala tagant, aprill-juuni)
- Me ei jõudnud mudeli tootmisse juurutamiseni häkatoni aja jooksul.
- Me ei jõudnud õigete tolmeldamisaegade ja nektari voolukiiruse integreerimiseni klasside jaoks, mida kavatseme tuvastada


![](img/399275275_750135310479095_4769808596453906481_n.jpg)

![](img/garage48.jpg)![](img/400149287_750137250478901_8295912363465611030_n.jpg)![](img/400167050_750134100479216_293610792512181331_n.jpg)

![](img/400175763_750137117145581_2512030399661623454_n.jpg)


[https://garage48.org/events/6th-cassini-hackathon](https://garage48.org/events/6th-cassini-hackathon) [https://www.cassini.eu/hackathons/estonia?mtm_campaign=6CHLOEE](https://www.cassini.eu/hackathons/estonia?mtm_campaign=6CHLOEE)

Gratheoni projekt registreeritud: [https://taikai.network/cassinihackathons/hackathons/intdev-humaid/projects/cloewercb02zevm01kqo4xlr7/idea](https://taikai.network/cassinihackathons/hackathons/intdev-humaid/projects/cloewercb02zevm01kqo4xlr7/idea)

Kasutatavad API-d:

[https://dataspace.copernicus.eu/analyse/apis](https://dataspace.copernicus.eu/analyse/apis)

[https://www.cassini.eu/hackathons/tools](https://www.cassini.eu/hackathons/tools)


### **6. HINDAMISKRITEERIUMID**

Nii kohalikul kui ka Euroopa tasandil hinnatakse teie lahendusi kolme lihtsa kriteeriumi alusel.

1. **Asjakohasus (33%) –** Kas projekt käsitleb ühte häkatoni kolmest väljakutsest? Kas projektis kasutatakse Copernicuse, Galileo ja/või EGNOSe andmeid ja signaale?
2. **Uuenduslikkus (33%) –** Kui uuenduslik on idee võrreldes juba turul olevate toodete/teenustega? Kas on potentsiaali elujõuliseks äriprojektiks?
3. **Meeskonna kvaliteet (33%) –** Kas meeskonnaliikmete tehnilised, ärilised ja loomingulised teadmised vastavad projekti vajadustele?

# Mentorid

![https://media.voog.com/0000/0036/7580/photos/2020-11-30 13.54.09.jpg](https://media.voog.com/0000/0036/7580/photos/2020-11-30%2013.54.09.jpg)

**David Clark**

Asutaja Tallon OÜ | Ettevõtluspartner ettevõttes Tera VC I Entrepreneur & Angel Investor

![https://media.voog.com/0000/0036/7580/photos/e6a7977daab5-pilt3.jpeg](https://media.voog.com/0000/0036/7580/photos/e6a7977daab5-pilt3.jpeg)

**Indrek Kelder**

Mentor ettevõttes Cleantech ForEst

![https://media.voog.com/0000/0036/7580/photos/Ilya photo.jpeg](https://media.voog.com/0000/0036/7580/photos/Ilya%20photo.jpeg)

**Ilja Bolhovski**

Geosruumiline tootejuht

![https://media.voog.com/0000/0036/7580/photos/karin maasel.jpeg](https://media.voog.com/0000/0036/7580/photos/karin%20maasel.jpeg)

**Karin Maasel**

Andmesõbraliku ruumi tegevdirektor

![https://media.voog.com/0000/0036/7580/photos/Villem Nilbe.jpeg](https://media.voog.com/0000/0036/7580/photos/Villem%20Nilbe.jpeg)

**Villem Nilbe**

Tootedisainer ettevõttes eAgronom

![http://media.voog.com/0000/0036/7580/photos/calumcameron.jpeg](http://media.voog.com/0000/0036/7580/photos/calumcameron.jpeg)

**Calum Cameron**

DP Innovation Labsi ja Edasi Labsi tegevjuht

![https://media.voog.com/0000/0036/7580/photos/jana saastamoinen.jpg](https://media.voog.com/0000/0036/7580/photos/jana%20saastamoinen.jpg)

**Jana Saastamoinen**

Garage48 turundusjuht

![https://media.voog.com/0000/0036/7580/photos/romet tagobert pic copy.png](https://media.voog.com/0000/0036/7580/photos/romet%20tagobert%20pic%20copy.png)

**Romet Tagobert**

Twilio vanemtarkvarainsener

![https://media.voog.com/0000/0036/7580/photos/Fariha.jpg](https://media.voog.com/0000/0036/7580/photos/Fariha.jpg)

**Fariha Harun**

AlphaGIS-i andmeanalüütik/arendaja

![https://media.voog.com/0000/0036/7580/photos/Kristiina Lillestik.jpg](https://media.voog.com/0000/0036/7580/photos/Kristiina%20Lillestik.jpg)

**Kristiina Lillestik**

Regionaal- ja Põllumajandusministeeriumi välissuhete juht

![https://media.voog.com/0000/0036/7580/photos/Andres Luhamaa.jpg](https://media.voog.com/0000/0036/7580/photos/Andres%20Luhamaa.jpg)

**Andres Luhamaa**

KappaOne Sentinel-1 andmekihi teenuste tooteomanik

![https://media.voog.com/0000/0036/7580/photos/berk erdem bw.jpeg](https://media.voog.com/0000/0036/7580/photos/berk%20erdem%20bw.jpeg)

**Berk Erdem**

ESTDEV projektijuht

![https://media.voog.com/0000/0036/7580/photos/Marius.jpg](https://media.voog.com/0000/0036/7580/photos/Marius.jpg)

**Marius Taparavičius**

Leedu Punase Risti ühingu/Lietuvos Raudonojo Kryžiaus draugija jurist

[Esimene Gratheon Garage48 väljak, et saada team.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/a70c8f25-17ad-40cb-9721-af7dc661dc2f/Gratheon_Garage48___Cassini_pitch.pdf)

[Garage48 projekti lõplik leht](https://www.notion.so/Final-Garage48-project-page-395bddc3353f45a5bae301ca13ddde28?pvs=21)

[Vokaalkõrgus (autor Aleksei)](https://www.notion.so/Vocal-pitch-by-Aleksei-94ab6405c75942408ba896194ed31d59?pvs=21)

[Projekti leht veebis](https://www.notion.so/Share-of-beehive-inspection-public-URL-477d096f683542f4a182e53ff5f23780?pvs=21)


![](img/product-field-map.png)
Tootevälja kaart, autor **Ilja Bolkhovsky**
