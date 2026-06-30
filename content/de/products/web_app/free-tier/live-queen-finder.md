---
status: complete
title: 👑 Live-Königinnenfinder
navTitle: Live-Königinnenfinder
layout: products
---

### 🎯 Zweck

Der Live-Königinnenfinder hilft Imkern, Königinnen während der Durchsicht mit der Kamera eines Mobiltelefons schneller zu entdecken.

Öffnen Sie die Gratheon-App, richten Sie die Kamera auf eine Wabe, und der Detektor markiert königinnenähnliche Treffer während der Kontrolle mit einem Rahmen.

![](/blog/img/live-queen-finder-mobile.jpg)

### 🎭 Nutzergeschichte

- Als Imker bei einer Durchsicht
- möchte ich Live-Kameraunterstützung bei der Suche nach der Königin,
- damit ich sie schneller finde und weniger Zeit pro Rähmchen suche.

### 🚀 Wichtigste Vorteile

- **Feldeinsatzbereit**: Funktioniert in der Gratheon-App auf einem Mobiltelefon mit Kamerazugriff.
- **Kein Upload-Schritt**: Kamerabilder werden lokal im Browser verarbeitet.
- **Im Free-Tarif enthalten**: Die Inferenz läuft auf dem Gerät des Nutzers und verbraucht keine serverseitigen Bildverarbeitungsguthaben.
- **Schnellere Durchsichten**: Hilft, die Aufmerksamkeit auf königinnenähnliche Treffer zu richten, während sich die Königin über die Wabe bewegt.

### 🎓 Verwendung

1. Öffnen Sie [app.gratheon.com](https://app.gratheon.com/) auf Ihrem Telefon.
2. Gehen Sie zu **Queens** → **Live detector**.
3. Erlauben Sie den Kamerazugriff, wenn der Browser danach fragt.
4. Bewegen Sie die Kamera ruhig über die Wabe und achten Sie auf den Erkennungsrahmen.

Direktlink: [app.gratheon.com/warehouse/queens/detect](https://app.gratheon.com/warehouse/queens/detect)

![](/blog/img/live-queen-finder-detection.png)

### 🔧 Technischer Überblick

Der Live-Königinnenfinder nutzt einen YOLOv8-Nano-Detektor für Königinnen, der nach ONNX exportiert wurde und im Browser mit ONNX Runtime Web läuft. Für diese Inferenz werden keine serverseitigen Gratheon-Bildverarbeitungsguthaben verwendet.

Das aktuelle Basismodell erreicht im Testsatz folgende Kennzahlen:

- Precision: `0.9727`
- Recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Modell-Repository: [github.com/Gratheon/models-queen-bee-detector](https://github.com/Gratheon/models-queen-bee-detector)

### ⚠️ Aktuelle Einschränkungen

- Erfordert einen modernen Browser und Kamerazugriff.
- Geschwindigkeit hängt von Telefon, Browser und Lichtbedingungen ab.
- Königinnen können übersehen werden; es kann auch Fehlalarme geben, besonders bei Unschärfe, schlechtem Fokus, dicht besetzten Waben oder teilweise verdeckten Königinnen.
- Bestätigen Sie die Erkennung immer visuell, bevor Sie Entscheidungen zur Königin treffen.

### 🔗 Verwandte Funktionen

- [Königinnenverwaltung](../hobbyist-tier/queen-management/)
- [Königinnenerkennung](../hobbyist-tier/queen-detection/)

---
**Zuletzt aktualisiert**: 8. Juni 2026
