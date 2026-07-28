---
title: "🐝 Königinnenzellen-Erkennung"
---

## Problem

Wir haben eine sehr einfache Objekt-Erkennung für Königinnenzellen, die auf kleinen ~15 Bildern in einem Datensatz trainiert wurde. Sie läuft im Image-Splitter-Service und ruft [clarifai.com](http://clarifai.com/) auf, das das Modell hostet.

Das Problem ist, dass es im Bienenkampf verschiedene Arten von Königinnenzellen gibt. Wir müssen sie unterscheiden können.

## Empfohlene Schritte

Erstelle und trainiere entweder zwei verschiedene Modelle oder besser — ein Modell mit zwei Klassen.


![](img/queen-cup.png)
