# 📊 Berichterstattung über Bienenbewegungs-Metriken

### 🎯 Zweck
Sammelt, verarbeitet und überträgt umfassende Bienenbewegungs-Analysen aus der Eingangsmessung, um Imkern verwertbare Erkenntnisse zu liefern.

### 🎭 Benutzerstory
- Als Imker, der Eingangsüberwachungssysteme nutzt
- möchte ich detaillierte Berichte über Bienentransportmuster und -trends erhalten
- damit ich fundierte Entscheidungen über die Stockverwaltung treffen und potenzielle Probleme frühzeitig erkennen kann

### 🚀 Hauptvorteile
- **Umfassende Analytik**: Detaillierte Bewegungsmuster, Spitzen-Aktivitätszeiten und saisonale Trends
- **Frühwarnsystem**: Anomalieerkennung für ungewöhnliche Aktivitätssituationen
- **Historische Verfolgung**: Langzeitdaten zum Verständnis der Vol development
- **Integrationsbereit**: Standardisierte Metriken für Dashboard- und Alarmsysteme

### 🔧 Technischer Überblick
Das Metrik-Berechnungssystem (src/metrics.py) verarbeitet Track-History-Daten, um abgeleitete Analysen zu generieren, einschließlich Durchschnittsgeschwindigkeit, 95%-Perzentil-Geschwindigkeit und Erkennung stationärer Bienen. Daten werden lokal in täglich rotierenden JSONL-Dateien gespeichert und über Telemetrie-API mit konfigurierbaren Endpunkten und Authentifizierung übertragen.

### 📋 Akzeptanzkriterien
- Berechnet abgeleitete Metriken: avg_speed_px_per_frame, p95_speed_px_per_frame, stationary_bees_count
- Verarbeitet Track-History unter Verwendung von NumPy für Geschwindigkeitsberechnungen und Distanzanalyse
- Speichert Telemetriedaten lokal in täglich rotierenden JSONL-Dateien (metrics_YYYY-MM-DD.jsonl)
- Überträgt Daten an konfigurierbare TELEMETRY_BASE_URL mit API-Token-Authentifizierung
- Enthält Kernmetriken: bees_in, bees_out, detected_bees, bee_interactions, net_flow
- Unterstützt konfigurierbaren Schwellenwert für Stationarität (Standard: 10px Bewegung)
- Thread-sichere Telemetrieübertragung mit asynchroner Verarbeitung

### 🚫 Nicht im Umfang
- Langzeit-Datenspeicherung (wird von Cloud-Infrastruktur behandelt)
- Echtzeit-Videostreaming

### 🏗️ Implementierungsansatz
- **Metrik-Berechnung**: NumPy-basierte Metrikberechnung mit angemessener Rundung auf 2 Dezimalstellen
- **Lokale Datenspeicherung**: Tägliche Datei-Rotation
- **HTTP-Telemetrieübertragung**: Erfolgsmeldungen mit ordnungsgemäßer Fehlerbehandlung
- **Track-History-Serialisierung**: Konvertierung ganzzahliger Koordinaten
- **Thread-sichere asynchrone Verarbeitung**: Nicht blockierende Video-Pipeline

### 📊 Erfolgskriterien
- NumPy-basierte Metrikberechnung mit korrekter Rundung auf 2 Dezimalstellen
- Lokale Datenspeicherung mit täglicher Datei-Rotation
- HTTP-Telemetrieübertragungserfolg mit ordnungsgemäßer Fehlerbehandlung
- Track-History-Serialisierung mit Integer-Koordinatenkonvertierung
- Thread-sichere asynchrone Verarbeitung ohne Blockieren der Video-Pipeline

### 🔗 Verwandte Funktionen
- [🎮 Clientseitige App mit UI](🎮%20Client-side%20app%20with%20UI.md)
- [📈 Bienen rein und raus zählen - am Edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [🎥 Video-Streaming via API](🎥%20Video%20streaming%20via%20API.md)

### 📚 Ressourcen & Referenzen
- Implementierungsdetails der Metrikberechnung (src/metrics.py)
- Telemetrie-API-Dokumentation von Gratheon
- NumPy-Dokumentation für numerische Berechnungen

### 💬 Hinweise
Dieses Feature ist ein Kernstück der Entrance Observer-Funktionalität und liefert entscheidende Daten für die Bienenüberwachung. Die Metriken werden regelmäßig an die Cloud gesendet und sind im Dashboard sowie in Alarmen verfügbar.
