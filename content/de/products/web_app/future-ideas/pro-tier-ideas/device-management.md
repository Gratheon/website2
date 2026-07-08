---
title: 🎮 Geräteverwaltung
navTitle: Geräteverwaltung
layout: products
status: idea
---

## Zweck
Die Geräteverwaltung soll Hardware wie Entrance Observer, Bienenstockwaagen, Sensoren, Roboterplattformen und Drittanbietergeräte übersichtlich mit Beuten und API-Tokens verbinden.

## Problem
Aktuell können Geräte Daten über Tokens senden, aber später ist oft unklar:
- welches Gerät welchen Token nutzt,
- wann das Gerät zuletzt online war,
- welche Firmware oder Version installiert ist,
- welcher Beute oder welchem Bienenstand das Gerät zugeordnet ist,
- ob ein Fehler am Gerät, am Netzwerk oder am Backend liegt.

## Vorgeschlagene Lösung
In der Web-App entsteht ein eigener Bereich „Geräte“ mit:
- Geräteliste,
- „Neues Gerät“-Flow,
- Gerätetypen wie Kamera, Waage, Sensor oder Roboter,
- Zuordnung zu Bienenstand, Beute oder Zarge,
- API-Token- und Berechtigungsverwaltung,
- letztem Kontaktzeitpunkt,
- Status, Firmwareversion und Debug-Informationen.

## Anwendungsfälle

### Entrance Observer verbinden
Kamera einem Flugloch zuordnen, Streamstatus prüfen und Metriken der richtigen Beute zuweisen.

### Bienenstockwaage betreiben
Gewichtssensor registrieren, Batterie- und Verbindungsstatus prüfen und Messwerte mit der Telemetrie verknüpfen.

### Support und Wartung
Bei verkaufter Hardware Geräteversion, letzte Datenübertragung und Fehlermeldungen nachvollziehen.

### Drittanbieter integrieren
Externe Quellen wie Waagen oder Home-Assistant-Integrationen über eine einheitliche Geräteliste sichtbar machen.

## Verwandte Funktionen
- [Telemetriespeicherung](/de/products/web_app/pro-tier/hive-telemetry-storage/)
- [Zeitreihenanalyse](/de/products/web_app/pro-tier/timeseries-data-analytics/)
- [Entrance Observer](/de/products/entrance_observer/)
- [Bienenstockwaagen](/de/products/scales/)
