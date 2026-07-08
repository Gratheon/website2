---
sidebar_position: 4
title: 👁️‍🗨️ Entrance Observer
layout: products
---

`status: alpha`, [TRL 5](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

💡 Entrance Observer ist ein System aus Kameras und Hardwaregeräten, das das Flugloch eines Bienenstocks analysiert. Es zeichnet Videostreams auf, führt KI-Analysen aus und sendet Metriken sowie Videos zur Vorschau und für Warnungen an unsere [Web-App](/de/products/web_app/).

![](/products/entrance_observer/img/Screenshot%202025-10-22%20at%2020.43.55.png)

Installieren und prüfen Sie unseren [Open-Source-Code für **entrance-observer**](https://github.com/Gratheon/entrance-observer/).

Implementierungsdetails stehen in der englischen [Entrance-Observer-Dokumentation](/docs/entrance-observer/). Die erzeugten Metriken werden über [Telemetriespeicherung](/de/products/web_app/pro-tier/hive-telemetry-storage/) gespeichert und können [Warnungen](/de/products/web_app/flexible-tier/alerts/) auslösen.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/hNval4v44ao" title="Beehive Entrance Observer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Problemfokus
Von allen imkerlichen Problemen unterstützt dieses Produkt besonders bei:
- Hornissenangriffen
- Räuberei
- Varroa- und anderen Befällen
- Schwärmen
- Krankheiten
- Völkern ohne Königin
- Pestizidvergiftung

## Funktionen
- Videostreaming über API
- Schwarm-Erkennung
- Client-App mit Benutzeroberfläche
- Zählen ein- und ausfliegender Bienen direkt am Gerät
- Meldung von Bienenbewegungsmetriken
- Erstellung von Heatmaps am Anflugbrett

## Geplante Arbeiten
- Varroa-Befallserkennung aus Video
- Hornissenangriffserkennung
- Drohnen-Erkennung und -Zählung

## Ideen
- Bienen mit Pollen für Trachtstatistiken erkennen
- Orientierungsflüge erkennen
- Wächterbienen erkennen
- Begattungsflug der Königin aus Fluglochvideo erkennen
- Warnungen auf Basis des Bienenzählers
- Pestizidbelastung erkennen
- Bee-Pose-Generierung

## Zielgruppen
- Hobbyimker und Technikbegeisterte
- Corporate-Hive-Sponsorship-Programme

### Versionsverlauf
![](/about/img/436202645_10161734083722973_395574856169740131_n.jpg)
Prototyp v4 im Feldtest. Die Kamera hat ein Schutzgehäuse. Der Schutzkegel am Anflugbrett fehlt noch, da dafür künstliche Beleuchtung benötigt wird.

![](/about/img/gatehousev3.jpg)
Prototyp v3. Ein Schutzkegel wurde ergänzt. Die Idee ist nun, CPU/GPU-Block getrennt im Beutendach zu platzieren, weniger Geräte am Flugloch zu haben, die Kamera in den Kegel zu integrieren und WLAN-Antenne sowie Stromversorgung weiter von den Bienen zu entfernen.

![](/about/img/1000004899.jpg)
Prototyp v1. Kamera mittig auf einem Einbeinstativ, Jetson Orin Nano in der Mitte, Verkabelung und Antennen nach unten ausgerichtet.
