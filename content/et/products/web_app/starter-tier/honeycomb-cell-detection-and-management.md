---
status: complete
title: 🐝 Kärjerakkude tuvastamine ja haldus
layout: products
---

### 🎯 Eesmärk
Tuvasta üleslaaditud raamifotodel automaatselt kärjerakkude sisu ja muuda see kasutatavaks taruülevaateks: haudme, mee, nektari, õietolmu ja tühjade rakkude jaotus aitab teha otsuseid.

### 📹 Demo

<iframe width="100%" height="400" src="https://www.youtube.com/embed/T0OBHIUyxHA" title="Honeycomb cell detection and management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎭 Kasutajalugu
- Mesiniku jaoks,
- soovin, et rakendus analüüsiks raamifotosid ja klassifitseeriks kärjerakke,
- et mõista kiiresti haudmemustrit ja toiduvarusid ilma käsitsi loendamiseta,
- ning võrrelda sama taru ülevaatusi ajas.

### 🔬 Mida veebirakendus teeb
- Raamifoto üleslaadimine käivitab taustal tehisaru töö, sh `detect_cells`.
- Tuvastused salvestatakse raami külje ja ülevaatuse konteksti külge.
- Rakendus hoiab nii toortuvastusi kui ka kokkuvõtvaid protsente.
- Kokkuvõttes kasutatakse peamisi kategooriaid: haue, kaanetatud haue, lesehaue, munad, õietolm, nektar, mesi ja tühjad/muud rakud.

### 🚀 Peamised eelised
- **Kiire tõlgendus**: käsitsi hindamine asendub automaatse tuvastusega.
- **Järjepidev struktuur**: iga raami külg saab võrreldavad näitajad.
- **Ajalooline võrdlus**: tulemused on seotud ülevaatuste hetkepiltidega.
- **Otsuste tugi**: aitab otsustada söötmise, jagamise või lisakontrolli vajaduse üle.

### 🧭 Tüüpiline töövoog
1. Laadi taru/raami vaatest raamifotod üles.
2. Oota, kuni tehisaru töötlemine lõpeb.
3. Ava raami külg ja vaata tuvastusi ning protsente.
4. Loo ülevaatuse hetkepilt, et seis ajas säiliks.
5. Võrdle vanemaid ja uusi ülevaatusi.

### 🔗 Seotud funktsioonid
- [🖼️ Raami külje haldus](../free-tier/frame-side-management.md)
- [🔎 Ülevaatuste haldus](../hobbyist-tier/inspection-management.md)
