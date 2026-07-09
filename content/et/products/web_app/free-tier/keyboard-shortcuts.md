---
layout: products
status: complete
title: 🖮 Klaviatuuri otseteed
---

### 🎯 Eesmärk
Gratheoni veebirakendus toetab klaviatuuriga navigeerimist ja toiminguid, et mesinik saaks liikuda mesilate, tarude, raamide, seadmete, lao, dialoogide ja joonistustööriistade vahel ilma ainult hiirele või puuteekraanile toetumata.

Klaviatuuritugi on ka ligipääsetavuse osa: see aitab kasutajaid, kes kasutavad klaviatuuri, lülitiseadmeid, ekraanilugejaid või muid abivahendeid.

### 🎭 Kasutajalugu
- Mesiniku jaoks, kes haldab kirjeid sülearvuti, tahvliklaviatuuri või abitehnoloogiaga,
- soovin, et põhilised vaated reageeriksid leitavatele klaviatuurikäskudele,
- et andmeid vaadata, kirjete vahel liikuda ja tavatoiminguid kiiremini kinnitada.

### 🚀 Peamised eelised
- **Otseteede avastamine**: `Shift + ?` avab praeguse vaate otseteede abi ja lülitab nähtavad vihjed sisse.
- **Üldnavigatsioon**: numbriklahvid avavad peamised rakenduse jaotised ning `Ctrl + M` lülitab vasakmenüü sisse-välja.
- **Kiirem taru ülevaatus**: nooleklahvid liiguvad mesila nimekirjade, tarukaartide, korpuste ja raamide vahel.
- **Ligipääsetavad juhtelemendid**: fokusseeritavad read, nupud, sorteeritavad päised ja dialoogid töötavad klaviatuuriga.
- **Ohutumad kustutamised**: Delete ja Backspace avavad kinnituse, mitte ei kustuta kohe.
- **Ühtne dialoogikäitumine**: Enter kinnitab toetatud dialoogid, Escape sulgeb tühistatavad aknad ja paneelid.
- **Tekstisisestuse kaitse**: rakenduse otseteed ei käivitu, kui kasutaja kirjutab vormiväljale.

### ⌨️ Näited otseteedest

| Ala | Otsetee | Käitumine |
| --- | --- | --- |
| Kõik vaated | `Shift + ?` | Avab otseteede abi ja näitab vihjeid. |
| Kõik vaated | `Ctrl + M` | Lülitab vasakmenüü sisse-välja. |
| Kõik vaated | `1`–`9`, `0` | Avab rakenduse peamised jaotised, näiteks mesilad, emad, ladu, seadmed, konto ja arveldus. |
| Mesila nimekiri | Nooleklahvid | Liigub tarude vahel tabelis või kaardivaates. |
| Taru detailvaade | `H` | Tagasi tarude nimekirja. |
| Taru detailvaade | `E` | Avab taru põhiinfo muutmise. |
| Taru struktuur | Nooleklahvid | Liigub korpuste ja raamide vahel. |
| Taru struktuur | Backspace / Delete | Avab korpuse või raami eemaldamise kinnituse. |
| Raami joonistus | `F`, `C`, `X` | Vahetab vabajoonistuse, rakupintsli ja kustutaja vahel. |
| Raami joonistus | `Ctrl + Z` / `⌘ + Z` | Võtab viimase joone tagasi. |
| Dialoogid | Enter / Escape | Kinnitab või tühistab toetatud dialoogid. |

### 🔧 Tehniline ülevaade
Otseteed on rakendatud kontekstiteadlike `keydown`-käsitlejatega. Globaalsed menüüotseteed elavad ühises menüükomponendis, samas kui nimekirjade, detailvaadete, lao, seadmete, dialoogide ja joonistamise otseteed on seotud vastavate vaadetega.

Käsitlejad ignoreerivad sisestusvälju (`input`, `textarea`, `select` ja muudetav sisu), et kirjutamine ei käivitaks rakenduse käske.

### 🚫 Praegused piirangud
- Otseteede kaardistus ei ole kasutaja poolt kohandatav.
- Täielikku käsupaletti veel ei ole.
- Kõigil rakenduse lehtedel ei ole veel täielikku klaviatuuritoe komplekti.

### 🔗 Seotud funktsioonid
- [📦 Mesila haldus](apiary-management.md)
- [📦 Tarude haldus](hive-management.md)
- [🖼️ Raami külje haldus](frame-side-management.md)

---
**Viimati uuendatud**: 24. juuni 2026
