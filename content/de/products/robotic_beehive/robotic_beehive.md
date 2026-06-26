---
title: 🧿 Robotischer Bienenstock
layout: products
sidebar_position: 5
---

Wir entwickeln eine robotische Plattform für die Durchsicht vertikaler Bienenstöcke. Sie soll:
- mehrere Beutenabschnitte anheben können, um schneller an das Brutnest zu gelangen
- mit eingebauten Kameras Fotos von Rähmchen aufnehmen; das manuelle Herausheben der Rähmchen ist dabei weiterhin vorgesehen
- Durchsichtsergebnisse in die [Web-App](/de/products/web_app/) hochladen
- auf Rädern transportierbar sein, sodass sie an verschiedenen Beuten eingesetzt werden kann

Die Hardware-Richtung wird in der englischen [Engineering-Dokumentation zum robotischen Bienenstock](/docs/robotic-beehive/) verfolgt. Der Durchsichtsablauf hängt von den englischen Web-App-Funktionen [Frame side management](/products/web_app/free-tier/frame-side-management/) und [Inspection management](/products/web_app/hobbyist-tier/inspection-management/) ab.

`status`: [TRL 2](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

<div style={{width:300}}>
![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2011.25.06.png)
</div>

## Überblick

![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2021.42.01.png)

### Problemfokus
Von allen imkerlichen Problemen unterstützt dieses Produkt besonders bei:
- Beobachtbarkeit des Bienenvolks
- Eingriffsintensiven Durchsichten
- Körperlicher Arbeit
- Varroa- und anderen Befällen
- Alkoholwaschungen, bei denen Bienen getötet werden
- Völkern ohne Königin
- Völkern mit drohnenbrütiger Königin
- Unansehnlichen oder unpraktischen Beuten
- Dem schwierigen Einstieg in die Imkerei

### Zielkunden
Eine robotische Durchsichtsplattform wird mehr als 2000 EUR kosten. Ihr Hauptwert liegt in der Digitalisierung und Organisation des Bienenstandszustands. Besonders passend wirkt sie für:
- Semi-professionelle Imker
- Stadtimker
- Corporate-Hive-Sponsorship-Programme

![](/about/img/president.png)

Präsident Alar Karis bei der Honigernte an den Beuten des Schlosses Kadriorg. ([Foto: Office of the President](https://news.err.ee/1609070024/gallery-president-alar-karis-harvesting-honey-in-front-of-kadriorg-palace#lg=1&slide=1)) Ein Beispiel für eine mögliche ergänzende Markenwirkung.

## Funktionen und Ideen
- Automatischer Zuckerwasser-Fütterer
- 6-Kanal-Audioüberwachung
- Client-App mit Benutzeroberfläche für manuellen Override
- Verbindung des Roboters mit der Web-App-UX
- Videoanalyse der Bienenpflege
- Klassifizierung der Bienenspezialisierung
- Audio-Schnittstelle, um mit Bienen zu kommunizieren
- Energieautonomie
- Beutenheizung und Lüftungssteuerung
- Mechanisches Schließen oder Verkleinern des Fluglochs bei Räuberei, Hornissenangriff oder starkem Wind
- Bodenscanning, bewegliche Bodeneinlage und Varroa-Zählung
- Robotische Rähmchen-Umsortierung, Einfügung, Isolation und Entnahme
- Automatische Säurebehandlung gegen Varroa

## Nicht-funktionale Anforderungen
Die Entnahme soll erfolgen, ohne die Bienen unnötig zu stören, sie Witterung auszusetzen oder Menschen in der Nähe zu gefährden.

- Anpassbar an Rähmchen- und Beutengrößen der Kunden (Langstroth, Farrar, National usw.)
- Darf den menschlichen Bediener nicht verletzen
- Darf keine Bienen quetschen, unterkühlen oder durch Ritzen Räuberei und Angriffe begünstigen
- Soll Rähmchen lösen können, wenn Bienen sie mit Wachs verklebt haben
- Darf nicht durch Überhitzung, Sonne oder elektrische Verkabelung Feuer fangen
- Muss volle Honigrähmchen bewegen können (etwa 4 kg)
- Reparierbar und modular aufgebaut, idealerweise hot-swappable
- Offline-first: Daten sollen auch ohne Internet oder Cloud-Konto verfügbar sein
- Manuelle Vor-Ort-Kontrolle und sicherer Fallback bei Stromausfall

## Prototyp
Der Prototyp besteht aus Aktuatoren zum Ein- und Ausfahren von Rähmchen, GPU und Kameras. Er befindet sich in einer sehr frühen Phase, da wir uns zuerst auf die [Web-App](/de/products/web_app/) und den [Entrance Observer](/de/products/entrance_observer/) konzentrieren.
