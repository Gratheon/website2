---
status: in-progress
title: 🦀 Hive bottom board varroa counting
---

Varroa destructor on parasiitne lest, mis nõrgestab meemesilasperesid. Regulaarne varroa taseme jälgimine on koloonia tervise jaoks hädavajalik. Traditsiooniline lugemine tähendab valge kleepplaadi paigutamist taru põhja ja mahalangenud lestade käsitsi kokku lugemist — see on aeganõudev ja eksimisaldis.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/1ghYZX55LP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Eesmärk
Jälgida varroa-nakkuse taset, laadides üles ja analüüsides taru põhjalaua pilte. Rakendus loendab lestad automaatselt AI abil, asendades käsitsi lugemise ja luues ajaloolise trendi.

## Kasutajalugu
- Mesiniku jaoks,
- kes soovib laadida üles pilte taru põhjalauast,
- et varroa-lestasid automaatselt lugeda ja nakkustaset ajas jälgida,
- ning võtta raviotsused vastu õigel ajal, kui läved ületatakse.

## Peamised eelised
- **Käsitsi lugemist ei ole vaja**: AI leiab ja loendab varroa-lestad automaatselt.
- **Täpsus ja järjepidevus**: arvutinägemine annab stabiilsemaid tulemusi kui käsitsi hindamine.
- **Ajalooline jälgimine**: inspekteerimistega seotud pildid näitavad varroa trendi nädalate ja kuude lõikes.
- **Ravi planeerimine**: objektiivsed andmed aitavad otsustada, millal ravi on vajalik.
- **Ajasääst**: lae foto üles ja saa tulemus sekunditega.

## Kuidas kasutada
### 1. Lisa põhjalaud tarule
1. Ava rakenduses oma taru struktuurivaade.
2. Klõpsa sektsioonide valikumenüül.
3. Vali **"Add bottom"**.
4. Põhjalaua sektsioon ilmub taru struktuuri.

### 2. Laadi üles põhjalaua pildid
1. Vali taru struktuurist põhjalaud.
2. Klõpsa **"Upload bottom board image"**.
3. Vali pilt oma seadmest.
4. Pilt laaditakse üles ja AI alustab analüüsi.
5. Mõne sekundi pärast kuvatakse tulemus.

**Pildistamise soovitused:**
- kasuta valget kleepplaati või lainelist plastplaati;
- taga hea valgustus ilma peegelduse ja varjudeta;
- kogu põhjalaud peaks jääma kaadrisse;
- hoia kaamera plaadiga paralleelselt;
- tee pilte sarnasel ajahetkel (näiteks pärast 24h perioodi);
- võimaluse korral eemalda suurem praht.

### 3. Tulemuste tõlgendamine
Rakendus tõstab pildil esile tuvastatud varroa-lestad ja kuvab:
- **koguarvu**,
- **usaldusväärsuse skoorid**,
- **ajaloolise võrdluse** trendijoone kujul.

**Raviläved:**
- **alla 3 lesta päevas**: hea tase, jätka jälgimist;
- **3–10 lesta päevas**: kaalu ravi ja jälgi hoolikalt;
- **üle 10 lesta päevas**: ravi on soovitatav.

### 4. Ajalooline jälgimine
Pildid versioonitakse koos inspekteerimistega:
- loo uus inspekteerimine, et salvestada hetkeolukord;
- võrdle tulemusi nädalate ja kuude lõikes;
- jälgi, kas ravi vähendas lestade hulka;
- vaata hooajalist dünaamikat.

## Funktsiooni staatus
**Praegu olemas:**
- ✅ põhjalaua lisamine taru struktuuri;
- ✅ piltide üleslaadimine telefonist või kaamerast;
- ✅ piltide salvestamine ja versioonimine koos inspekteerimistega;
- ✅ üleslaetud piltide vaatamine taru vaates.

**Arenduses:**
- 🚧 automaatne varroa-lestade loendamine AI abil;
- 🚧 tuvastatud lestade visuaalne esiletõstmine pildil;
- 🚧 ajaloolised trendigraafikud;
- 🚧 hoiatused ravilävede põhjal;
- 🚧 ravi tulemuslikkuse jälgimine.

## Mida see funktsioon ei tee
- ei ole füüsiline põhjalaua riistvara;
- ei tee reaalajas varroa seiret ilma üleslaadimiseta;
- ei rakenda ravi automaatselt;
- ei asenda professionaalset veterinaardiagnoosi.

## Seotud funktsioonid
- [Inspection Management (EN)](/about/products/web_app/starter-tier/inspection-management/)
- Varroa Treatment Tracking (planned)
- Colony Health Dashboard (planned)

## Lisainfo
- [Varroa Bottom Detection - Technical Documentation](/docs/web-app/features/varroa-bottom-detection/)
- [Honey Bee Health Coalition - Varroa Guide](https://honeybeehealthcoalition.org/varroa/)
- [Understanding Varroa Mite Thresholds](https://honeybeehealthcoalition.org/varroa/)
