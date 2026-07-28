# 📈 Bienen rein und raus zählen - am Edge

### 🎯 Zweck
Echtzeit-Bienentransfer-Monitoring-System, das einzelne Bienen beim Ein- und Ausfliegen des Stocks mit Computer Vision an Edge-Geräten zählt.

### 🎭 Benutzerstory
- Als Imker
- möchte ich automatisch die Bienentätigkeit am Stockeingang verfolgen
- damit ich die Volksgesundheit überwachen, Probleme frühzeitig erkennen und Flugmuster verstehen kann, ohne manuelle Beobachtung

### 🚀 Hauptvorteile
- **Automatisierte Überwachung**: Kein manuelles Zählen erforderlich, 24/7-Verfolgung
- **Frühe Problemerkennung**: Ungewöhnliche Traffic-Muster können auf Schwarmen, Räubern oder Gesundheitsprobleme hinweisen
- **Datengetriebene Erkenntnisse**: Verfolge Bienenverlustraten, Flug-Effizienz und saisonale Muster
- **Edge-Verarbeitung**: Echtzeitanalyse ohne Internetabhängigkeit

### 🔧 Technischer Überblick
Verwendet YOLO v8 Objekterkennungsmodell (weights/best.pt), das auf Edge-Geräten läuft, um einzelne Bienen zu erkennen und zu verfolgen, die konfigurierbare Eingangsgrenzen überqueren. Implementiert DeepSORT-Tracking mit Trajektorienanalyse zur Unterscheidung von ein-/ausgehender Bewegung über einer Erkennungslinie an konfigurierbarer Höhe (standardmäßig 50% des Frames).

### 📋 Akzeptanzkriterien
- Gerät erkennt und verfolgt einzelne Bienen mithilfe des YOLO v8 Modells
- Klassifiziert Bienentrajektorien korrekt als rein/raus basierend auf Kreuzungserkennung der Erkennungslinie
- Verarbeitet Video in Echtzeit mit konfigurierbaren Bildraten
- Sendet Telemetrie-Daten alle 30 Sekunden (konfigurierbar VIDEO_CHUNK_LENGTH_SEC)
- Berechnet abgeleitete Metriken: Durchschnittsgeschwindigkeit, 95%-Perzentil-Geschwindigkeit, Anzahl stationärer Bienen
- Unterstützt Tag/Nacht-Betrieb mit konfigurierbaren Stunden (DAY_START_HOUR/DAY_END_HOUR)
- Funktioniert zuverlässig mit USB-Kameras (V4L2 unter Linux, AVFoundation unter macOS)

### 🚫 Nicht im Umfang
- Erkennung von Räuberverhalten (separate Funktion)
- Bienenart-Klassifizierung (Wespen, Hornissen separat behandelt)
- Pollenerkennung an einzelnen Bienen
- Königinnenerkennung aus Eingangsvideo

### 🏗️ Implementierungsansatz
- **KI-Modell**: YOLO v8 (Ultralytics) mit benutzerdefinierten Bienenerkennungs-Gewichten
- **Tracking**: DeepSORT-Algorithmus mit Trajektorienhistorie (defaultdict-Speicherung)
- **Erkennungslinie**: Konfigurierbare horizontale Linie in Prozent der Frame-Höhe
- **Hardware**: USB-Kamera-Unterstützung über OpenCV (CAP_V4L2/CAP_AVFOUNDATION)
- **Verarbeitung**: Batch-Verarbeitung von Frames mit Threading für asynchrone Telemetrie
- **Ausgabe**: AVC1/MP4V Video-Encoding mit Overlay-Visualisierungen

### 📊 Erfolgskriterien
- Echtzeit-Verarbeitungsfähigkeit mit konfigurierbarer FPS
- Trajektorie-basierte Richtungsklassifizierung mit Kreuzungserkennung
- Telemetrieübertragung alle 30 Sekunden zum konfigurierten Endpunkt
- Lokale Datenspeicherung in täglich rotierenden JSONL-Dateien
- Kamera-Autoerkennung über mehrere Plattformen (Linux/macOS)

### 🔗 Verwandte Funktionen
- [🎮 Client-side app with UI](🎮%20Client-side%20app%20with%20UI.md)
- [📊 Bee movement metric reporting](📊%20Bee%20movement%20metric%20reporting.md)
- [👭 Bee interaction detection](👭%20Bee%20interaction%20detection.md)

### 📚 Ressourcen & Referenzen
- YOLO v8 Dokumentation (https://docs.ultralytics.com/)
- DeepSORT Tracking Algorithmus
- OpenCV USB-Kamera-Dokumentation

### 💬 Hinweise
Dieses Feature ist das Herzstück der Entrance Observer-Funktionalität. Es ermöglicht Imkern, den Bienentransport in Echtzeit zu überwachen und frühzeitig Warnsignale für potenzielle Probleme im Volk zu erkennen. Die Edge-Verarbeitung sorgt dafür, dass keine Internetverbindung erforderlich ist.
