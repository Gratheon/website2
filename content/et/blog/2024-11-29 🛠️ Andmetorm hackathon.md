---
title: "🛠️ Andmetormi häkaton"
---

Meil on hea meel osaleda **"Data Storm" häkatonil**, mis keskendub Eestist pärit avatud valitsuse andmete kasutamisele, eriti sellistes valdkondades nagu keskkond, ilm, hüdroloogia ja hoiatused. Meie projekt käsitleb probleeme, mis on seotud **tormituulega, mis varisevad kokku mesitarud**, ja pakub lahenduse **ilmateadete** kujul.

### Meie fookusvaldkonnad

- 🗃️ Tormituulega mesitarusid kokku varisemas
- 📡 Ilmateated

## Meeskonna liikmed

- Artjom Kurapov
- [Alonso Solis](https://www.linkedin.com/in/alonso-solis-a5b88020a/)
- Adrian Ala
- [Roop Runjan Khan](https://www.linkedin.com/in/roop-ranjan-khan-234a9014b/)

![](img/20241130_174232.jpg)

![](img/20241130_155912.jpg)

Osalejate ja mentorite kollektiivne foto Tiit Tamme / Garage 48:
![](img/1732994146453.jpg)

## Esimesed slaidid

<object data={require('./img/andmetorm.pdf').default} type="application/pdf" width="100%" height="400"></object>


<!--truncate-->

![](img/20241129_153633.jpg)

## Sündmuse teave

https://garage48.org/events/andmetorm
https://www.linkedin.com/events/7257354689556430849/comments/

## Peamised osalejad

- Moderaatorid - Liis Paemurru
- Peamine kasusaaja (API pakkuja): **Keskkonnaagentuur**
  - Taimar Ala (direktor)
  - Svetlana Pudova
  - Aivo Lanno
  - Sofia Paes
- Korraldajad: Garaaž 48
  - Merit Vislapu
  - Mari Hanikat
- Meie mentorid ja teadmised
  - API valik
    - Miina Krabbi
    - Meila Kivisild
  - Disain:
    - [Jaanus Jagomägi](https://www.linkedin.com/in/jagomagi/overlay/about-this-profile/)
    - [Andreas Roosson](https://www.linkedin.com/in/andreas-roosson-72057756/)

## Kohtunikud

- Jaanus Jagomägi
- Marko Tiirik
- Anne-Liisi Mändmets
- Sofia Paes
- Aivo Lanno

## Andmeallikad

- https://keskkonnaportaal.ee/et/avaandmed/kliimaandmestik

## Keskkonnaagentuuri väljakutsed ja tagasiside

### Probleemid seadmega [Üksikasjalik ilmaennustuse API](https://avaandmed.keskkonnaportaal.ee/dhs/Active/documentList.aspx?ViewId=3b1f9939-7395-4710-968e-ed27eb8316fd)

- **Granulaarsus**: antud X/Y-koordinaatide (mesilas) jaoks asjakohaste failide leidmiseks pole lihtsat viisi.
- **Binaarvorming**: andmed on kodeeritud versioonis [WMO BUFR](https://library.wmo.int/records/item/35625-manual-on-codes-volume-i-2-international-codes) v4, mille dekodeerimiseks on vaja keerulisi teeke. - Võimalikud lahendused on järgmised: - [NOAA EMC BUFR](https://github.com/NOAA-EMC/NCEPLIBS-bufr) - [TrollBUFR](https://trollbufr.readthedocs.io/index.html) (Python)
  ![](img/Screenshot%202024-11-30%20at%2002.59.08.png)
- **Faili suurus**: mõned failid (nt NEMO mudeliarhiivid) on 1 GB või suuremad.
- **UI/UX**: üksikute failide allalaadimiseks tuleb klõpsata väikestel ikoonidel, mida saab täiustada selgemate nuppude või linkidega.
  ![](img/Screenshot%202024-11-30%20at%2017.00.33.png)
- Lühiajalised andmed: lähima meteostatsiooni kohta üksikasjalike andmete saamiseks peaksime tegema palju tööd, roomates saidil, laadima alla kõik failid, sõeludes neid näiteks WinSpeedi ekstraktimiseks. Ja andmete ajakohasena hoidmiseks peaksime seda tegema ikka ja jälle tsüklina, mis lisaks keskkonnaagentuuri serveritele liiga palju koormust

- (Vana) [API prognoos](https://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng) for Estonia töötab, kuid sellel on ka probleeme

  - granulaarsus on liiga lai – see on jagatud päevaks ja ööks, mitte tunni kaupa
  - selle prognoosid on ainult 4 päeva
  - see on seotud võtmepiirkondadega, mitte koordinaatidega
  - piirkondadele prognoositakse ainult 1 päev ette, ülejäänud loetakse kõigi piirkondade jaoks samaks
  - sellel ei ole alati tuulekiiruse omadust, kuigi tekstikirjelduses on see omadus

- Kliimaandmete aegridade API näitab varasemaid andmeid, kuid mitte tulevikuprognoosi.
https://keskkonnaandmed.envir.ee/f_kliima_tund?aasta=eq.2024&kuu=eq.11&paev=lt.30 näib olevat parim meteojaama varasemate andmete hankimiseks
  - Siiski saame seda siiski kasutada mesitarusid mõjutava ilmastiku korreleerimiseks. Kuid meie fookus häkatonil on mesiniku ärevaks tegemisel vältida mesitaru kokkuvarisemist tormide tõttu.

### Ettepanekud

- Rakendage koordinaatidel põhinevate filtreerimisvõimalustega ilmaennustuse REST API-sid.
- Lubage kergeid reaalajas andmevooge veebipistikupesade või veebihaagide kaudu.

## Edenemise värskendused

### reedel

- Töötas välja ad-hoc funktsiooni prototüübi.
- Alonso lõi **Reacti rakenduse** prototüübi:
  - [Reaalajas demo](https://bee-app-zeta.vercel.app/)
  - [GitHubi hoidla](https://github.com/alonsosolisg/bee-app)
- Registreeriti uus sisemine graphql API `weatherEstonia` päringutüüp ja kasutasime https://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng XML-andmeid, mis teisendati JSON-iks.
  - Pidime leidma sulgemismeteostatsiooni laiuse/pikkuse koordinaatidega, mis oli keeruline
    ![](img/Screenshot%202024-11-30%20at%2003.25.22.png)
    ![](img/Screenshot%202024-11-30%20at%2003.23.05.png)
![](img/Screenshot%202024-11-30%20at%2017.30.58.png)![](img/Screenshot%202024-11-30%20at%2003.50.42.png)

## Laupäevased edusammud

- Pidime API käsitlemise ümber kirjutama, kuna andmete pesastamine oli
`day -> data` `data -> time` asemel, mida vajasime kasutajaliidese diagrammide jaoks andmete joonistamiseks

  https://github.com/Gratheon/weather/blob/main/app/resolvers.js#L19

- Otsustasime näidata nii reaktsioonirakenduse prototüüpi, millel on täielik nägemus sellest, mida kavatseme teha, kui ka mainida, et meil on tootmiseks valmis teenus, mis kasutab tõelist API-d

![](img/Screenshot%202024-11-30%20at%2011.27.14.png)

- hiljem leidsime teise API https://ilmmicroservice.envir.ee/api_doc/#api-Forecasts-GetV1ForecastsModelforecastbylocation, mida sai kasutada ilmaandmete jaoks. Kuigi edasine arutelu mentoritega näitas, et see on mõnevõrra privaatne API, mis võib muutuda, ja XML-i kasutamine on praegu parim
- Harjutasime esitluse stsenaariumit ja otsustasime näidata nii react-rakenduse prototüüpi, et näidata, mis on visioon, kui ka näidata, et integreerisime tõelise API olemasolevasse Gratheoni veebirakendusse ja ilmastikuteenusesse.
- Kaalusime turunduse ja müügiga seotud küsimusi (nagu sihime poolprofessionaalseid mesinikke)
- Värskendasime kasutajaliidese prototüüpi, et ohualasid paremini esile tuua
- Esitluse jaoks konfigureerisime twilio API saatma SMS-i kõigile mentoritele/kohtunikele, et meie demo tõhusalt jagada

## Hoiatuskasutusjuhtum

- Gratheoni veebirakendus jälgib mesinike mesilasi ja ohtlikku ilma, mis võib mesilasi mõjutada
- Kui mesilale läheneb torm või kuumalaine, genereerib veebirakendus hoiatuse
- Kui kasutaja on sisestanud telefoni kasutajaprofiili ja lubanud meil temaga telefoni teel ühendust võtta, saadame SMS-i
- Kasutaja (mesinik) saab telefonile SMS-teate koos URL-iga asjakohase mesilasse
- Kasutaja avab mesilavaate, näeb, et on hoiatuse üksikasjad kõrge temperatuuri (tulemas kuumalaine) või tugeva tuule kohta, millal seda täpselt oodata on ja kui ohtlik see on
- Kasutaja loeb nõu, mida ta peab tegema, näiteks tormi korral – piira taru sissepääsu, seo taru nööriga kokku

![](img/Screenshot%202024-11-30%20at%2014.15.00.png)

## Andmete korrelatsiooni kasutusjuhtum

Idee on mitte ainult ilmaandmete kogumine, kui kasutaja vaate avab, või mitte ainult ette ennustada, vaid koguda ka varasemat ilmateavet konkreetse mesila asukoha kohta.

Seda on vaja selleks, et mesinik või AI mudel saaks korreleerida mesilasi mõjutavaid ilmastikumõjusid. Näiteks kui 2 nädalat sadas igapäevast vihma, võivad mesilased olla maandatud ja kaotada ressursse (õietolm, nektar), mis on näha ka taru kaalu graafikul.

## Tulemus

Võistlesime veel 15 meeskonnaga ja me ei võitnud. Meeskonnad esitlesid erinevaid lahendusi, võitjad pakkusid välja ESG-ga ja üldise andmeanalüüsiga lahendusi, mis kohtunike arvates kõige paremini vastavad hinnangukriteeriumitele ja mida Keskkonnaagentuur vajas.

Tegime praktilist tööd SMS-hoiatuskanalite, ilmateate API-de ja atraktiivsema kasutajaliidese kallal graafikute jaoks, mis ei lähe raisku. Jagasime tooteteadlikkust ja lõime võrgustikke.

