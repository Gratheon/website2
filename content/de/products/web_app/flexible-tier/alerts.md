---
title: 🔔 Warnungen
navTitle: Warnungen
layout: products
---

Gratheon soll Imker in verschiedenen Situationen rechtzeitig benachrichtigen. Diese Seite beschreibt Warnungskonfiguration, Zustellkanäle und unterstützte Warnungstypen im Flexible-Tarif, einschließlich SMS-Benachrichtigungen und Webhooks.

## Überblick

Der Flexible-Tarif bietet ein einheitliches Warnungssystem mit mehreren Zustellkanälen und erweiterten Warnungstypen. Warnungen können pro Bienenstand, Beute oder Gerät konfiguriert und per E-Mail, SMS, Push/Mobile, Telegram oder Webhook zugestellt werden.

## Kanäle

- E-Mail
- SMS (z. B. über Twilio oder einen ähnlichen Anbieter)
- Push- bzw. Mobile-App-Benachrichtigungen
- Telegram-Bot
- Webhook-Integration

## Warnungskanäle konfigurieren

- Der Nutzer öffnet die Einstellungsseite.
- Unter `Alerts`:
  - wählt er bevorzugte Kanäle aus, z. B. `Alert me via: [email]`,
  - verfügbare Kanäle sind Mobile Push, E-Mail, SMS, Telegram und Webhooks.

## Warnungstypen

Nutzer können Warnungstypen aktivieren oder deaktivieren. Beispiele:

- Schwarmrisiko, z. B. aus Weiselzellen- oder Rähmchenanalyse,
- Hornissenangriff,
- fehlende Königin oder ausbleibende Eiablage,
- Drohnenbrut oder auffälliger Drohnenanteil,
- zu niedrige oder zu hohe Temperatur in der Beute,
- erkannter Schwarm,
- benutzerdefinierte Anomaliewarnungen aus Zeitreihenanalysen.

## SMS-Benachrichtigungen

- SMS werden über einen SMS-Anbieter versendet.
- SMS sind für hochpriorisierte, kurze Meldungen gedacht, z. B. fehlende Königin oder kritische Temperatur.
- Kunden im Flexible-Tarif können SMS als Kanal aktivieren oder deaktivieren und Telefonnummern pro Konto konfigurieren.

## Webhooks

- Webhooks verbinden Warnungen mit externen Automatisierungs- oder Monitoringsystemen.
- Der Flexible-Tarif unterstützt konfigurierbare Webhook-Endpunkte pro Warnungsregel.

## Beispiel: Warnung erhalten

1. Der Nutzer lädt alle Rähmchenfotos hoch und startet die Analyse.
2. Eine Regel erkennt eine möglicherweise fehlende Königin.
3. Eine Warnung wird erstellt und gespeichert.
4. Die Warnung erscheint in der App und wird über die konfigurierten Kanäle zugestellt, z. B. E-Mail, SMS oder Webhook.

## Technische Hinweise

- Vorgeschlagene Architektur: ein eigener Alerts-Service, der Warnungen speichert und eine GraphQL-/REST-API bereitstellt.
- Warnungen werden von Diensten erzeugt, die Zustände erkennen, z. B. Rähmchenanalyse oder Telemetrieanalyse.
- Der Alerts-Service übernimmt Zustellung über E-Mail, SMS, Push und Webhooks.
