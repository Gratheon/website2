---
title: "🔎 Durchsichtsverwaltung"
navTitle: Durchsichtsverwaltung
layout: products
status: complete
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/5tYttNWfQPA" title="Beehive inspections feature" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Durchsicht erstellen

- Der Nutzer hat als Imker eine manuelle Durchsicht durchgeführt und Fotos aufgenommen.
- Er hat eine Beute mit Zargen angelegt und Rähmchenfotos hochgeladen.
- Nach einiger Zeit, z. B. zwei Wochen, führt er eine weitere Durchsicht durch und möchte den alten Zustand speichern.
- Der Nutzer klickt auf `Create Inspection`.
  - Alle Beutendaten werden als zeitliche Momentaufnahme gespeichert.
  - Als Zeitpunkt der Durchsicht wird das älteste **Erstellungsdatum der Rähmchenfotos** verwendet, nicht der aktuelle Zeitpunkt.
  - Dadurch kann auch eine zwei Wochen alte Durchsicht korrekt nachträglich angelegt werden.
- Rähmchenfotos werden zusammen mit erkannten Objekten **entkoppelt bzw. geleert**.
- Zellstatistiken der Rähmchen werden zurückgesetzt, damit neue Analysen sauber starten können. Siehe [Wabenzellen-Erkennung und -Verwaltung](../starter-tier/honeycomb-cell-detection-and-management/).
- Die Rähmchen sind wieder leer und der Nutzer kann neue Fotos hochladen.
- Die Meldung `Inspection created` wird angezeigt.
- Ein Link zur Durchsichts-Zeitleiste wird neben dem Menü mit der Anzahl der Durchsichten angezeigt.

## Durchsichten auflisten

- Der Nutzer öffnet die Durchsichtsliste einer Beute, z. B. `https://app.gratheon.com/apiaries/7/hives/118/inspections`.
- Er sieht eine Liste der Durchsichten mit Datum.
- Er kann eine Durchsicht anklicken, um Details zu sehen.

## Durchsichtsansicht

- Der Nutzer sieht Rähmchen, Zellstatistiken und Rähmchenfotos.
- Die Ansicht dient als historischer Nachweis dafür, wie die Beute zu einem bestimmten Zeitpunkt aussah.
- Frühere Durchsichten können mit späteren Zuständen verglichen werden, um Entwicklung, Futterlage, Brutbild und Eingriffe besser zu bewerten.
