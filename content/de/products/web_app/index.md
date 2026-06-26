---
sidebar_position: 2
title: 📱 Web-App
navTitle: Web-App
layout: products
---

Die Gratheon Web-App hilft Imkern dabei, [Bienenstandsdaten](/products/web_app/free-tier/apiary-management/) zu verwalten, mit modularen Geräten am Bienenstock zu kommunizieren, Rähmchen- und Bodeneinlagenfotos zu analysieren, [Zeitreihen-Telemetrie](/products/web_app/pro-tier/hive-telemetry-storage/) zu speichern, [Warnungen](/products/web_app/flexible-tier/alerts/) zu erzeugen und KI-Vorschläge für Entscheidungen zu nutzen.

`status`: [TRL 6](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

## Zentrale Domänenobjekte

| Objekt | Beschreibung | Wichtige Eigenschaften |
|--------|--------------|------------------------|
| **Bienenstand** | Gruppe von Bienenstöcken an einem bestimmten Ort. | Standort, Name, aktiver Status |
| **Bienenstock** | Physische Beutenstruktur mit vertikalen Abschnitten. Kann geteilt, zusammengeführt oder aufgegeben werden. | Name, Farbe, Status, Zargen, Volk, Verlauf |
| **Volk (Kolonie/Königin)** | Bienen-Superorganismus, geführt von einer eierlegenden Königin. | Rasse, Einbringungsjahr, Alter, Behandlungen |
| **Zarge (Beutenabschnitt)** | Hölzerner Abschnitt, der Rähmchen enthält. | Typ, Position, Farbe, Rähmchen |
| **Rähmchen** | Holzrahmen mit Wachs innerhalb einer Zarge. | Typ, Position, linke und rechte Seite |
| **Rähmchenseite** | Eine Seite eines Rähmchens, auf der Fotos für KI-Analyse hochgeladen werden können. | Bilder und erkannte Ressourcen |
| **Durchsicht** | Momentaufnahme des gesamten Beutenzustands bei einem imkerlichen Eingriff. | Beuten-ID, Daten, Zeitpunkt |
| **Behandlung** | Eingriffe gegen Varroa, erfasst pro Volk, Zarge oder Beute. | Typ, Datum, Ziel |
| **Metriken (Telemetrie)** | Zeitreihendaten von IoT-Geräten. | Temperatur, Luftfeuchtigkeit, Gewicht, Zeitpunkt |
| **Fluglochbewegung** | Analyse des Bienenverkehrs aus Fluglochkameras. | Ein-/Ausflüge, Nettofluss, Geschwindigkeit |
| **Warnung** | Hinweis, der durch Schwellwerte und Regeln ausgelöst wird. | Text, Metrik, Beute, Zustellung, Datum |

## Hauptanwendungsfälle

### Fotos hochladen, um einen Überblick über das Volk zu erhalten
- Eine Beute anlegen.
- Eine Zarge öffnen, Rähmchen hinzufügen und ein Foto eines Rähmchens mit Bienen und Wabenzellen hochladen.
- Warten, bis das Backend das Bild verarbeitet hat.
- KI-gestützte Statistiken über Bienenzahl und Zellverteilung erhalten.
- Völker anhand realer Daten vergleichen.

### Volksentwicklung über die Zeit verfolgen
- Jede Durchsicht als zeitliche Momentaufnahme des Beutenzustands speichern.
- Prüfen, wie sich die Ressourcenverteilung zwischen Durchsichten verändert.
- Den Verlauf nutzen, um über Füttern, Behandeln, Teilen oder Abwarten zu entscheiden.

### Telemetrie von IoT-Sensoren senden
- In den Kontoeinstellungen ein API-Token erzeugen.
- Das Sensorgerät mit WLAN verbinden, wie in der [Sensor-Dokumentation](/docs/beehive-sensors/) beschrieben.
- Den Metriken-Tab der Beute öffnen und Gewichts- sowie Temperaturdiagramme prüfen.
- Sensordaten mit Wetter, Durchsichten und Warnungen korrelieren.

### Fluglochvideo streamen
- Eine [Entrance-Observer](/de/products/entrance_observer/)-Kamera einrichten.
- Prüfen, ob der Videostream sichtbar ist.
- Metriken und Warnungen nutzen, um Aktivität, Räuberei, Schwärmen oder andere Ereignisse einzuordnen.

### Varroa über die Bodeneinlage überwachen
- Eine Bodeneinlage zur Beute hinzufügen.
- Ein Foto der weißen Einschubplatte mit Varroamilben hochladen.
- Bilder werden zusammen mit Durchsichten versioniert, damit ein historischer Verlauf entsteht.
- Die englische Funktion [Hive bottom board varroa counting](/products/web_app/starter-tier/hive-bottom-varroa-count/) unterstützt die Bewertung des Befalls und Behandlungsentscheidungen.

## Weiterführende englische Funktionsseiten
Diese Unterseiten bleiben vorerst auf Englisch, bis sie einzeln lokalisiert werden:
- [Apiary management](/products/web_app/free-tier/apiary-management/)
- [Inspection management](/products/web_app/hobbyist-tier/inspection-management/)
- [Hive telemetry storage](/products/web_app/pro-tier/hive-telemetry-storage/)
- [Alerts](/products/web_app/flexible-tier/alerts/)
- [Timeseries data analytics](/products/web_app/pro-tier/timeseries-data-analytics/)
