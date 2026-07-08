---
title: 🔔 Zeitreihen-Anomalieerkennung
navTitle: Anomalieerkennung
layout: products
status: idea
---

## Warum
Für sinnvolle [Warnungen](/de/products/web_app/flexible-tier/alerts/) müssen Messdaten von IoT-Sensoren automatisch und kontinuierlich analysiert werden. Die Anomalieerkennung soll ungewöhnliche Muster erkennen und Nutzer benachrichtigen, bevor ein Problem offensichtlich wird.

## Beispiele für Anomalien
- Plötzlicher Gewichtsverlust durch Schwarm, Diebstahl oder Sturm.
- Ungewöhnliche Temperaturabfälle im Brutnest.
- Ausbleibende Fluglochaktivität trotz gutem Wetter.
- Stark erhöhte Aktivität, die auf Räuberei hinweisen kann.
- Sensorwerte, die auf Gerätefehler oder leere Batterie hindeuten.

## Vorgeschlagene Lösung
- Zeitreihenmodelle oder statistische Verfahren auf Telemetriedaten anwenden.
- Erwartete Werte je Beute, Jahreszeit und Standort lernen.
- Abweichungen speichern und mit Ursache, Messwert und Zeitraum anzeigen.
- Relevante Abweichungen in Warnungen überführen.
- Nutzerfeedback erfassen, ob eine Anomalie hilfreich oder Fehlalarm war.

## Akzeptanzkriterien
- Anomalien werden pro Beute und Metrik gespeichert.
- Nutzer sehen Zeitpunkt, Schweregrad und betroffene Messreihe.
- Warnungen lassen sich konfigurieren und stummschalten.
- Modelle berücksichtigen Saisonalität und normale Tagesmuster.

## Verwandte Funktionen
- [Zeitreihenanalyse](/de/products/web_app/pro-tier/timeseries-data-analytics/)
- [Telemetriespeicherung](/de/products/web_app/pro-tier/hive-telemetry-storage/)
- [Warnungen](/de/products/web_app/flexible-tier/alerts/)
