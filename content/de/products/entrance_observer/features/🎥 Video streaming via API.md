# 🎥 Video-Streaming über API

### 🎯 Zweck
Ermöglicht es Hardware-Geräten, Video von Bienenstockeingängen in die Cloud aufzunehmen und zu streamen für eine entfernte Überwachung und KI-Analyse.

### 🎭 Benutzerstory
- Als Imker mit eigener Hardware oder begrenzten Rechenressourcen
- möchte ich Video von meinem Bienenstockeingang in die Cloud streamen können
- damit ich Cloud-basierte KI-Analyse und remote Überwachung nutzen kann, ohne leistungsstarke Vor-Ort-Bearbeitung zu erfordern

### 🚀 Hauptvorteile
- **Hardware-Flexibilität**: Funktioniert mit Raspberry Pi, benutzerdefinierten PCs oder Jetson-Nano-Geräten
- **Cloud-Bearbeitung**: Lagert KI-Analyse an Cloud-Infrastruktur für Geräte ohne GPU aus
- **Fernzugriff**: Live und historische Video-Streams von überall ansehen
- **Einfache Integration**: Einfache API-Token-Authentifizierung und Einrichtung

### 🔧 Technischer Überblick
Video-Aufnahme-System (src/uploader.py) nimmt verarbeitete Video-Chunks mit Erkennungsüberlagerungen auf und lädt sie über GraphQL-Mutationen auf video.gratheon.com hoch. Verwendet multipart/form-data-Kodierung sowohl für Videodateien als auch für Erkennungsmetadaten, unterstützt Stapelausladungen mit Bearer-Token-Authentifizierung.

### 📋 Akzeptanzkriterien
- Unterstützt USB-Kamera-Videoaufnahme mit OpenCV (CAP_V4L2/CAP_AVFOUNDATION)
- Kodiert Video mit AVC1/MP4V-Codecs für Kompatibilität
- Lädt Video-Chunks mit Erkennungsüberlagerungen über GraphQL API hoch
- Beinhaltet Erkennungsmetadaten-Datei neben Video-Ausladung
- Verwendet Bearer-Token-Authentifizierung (API_TOKEN Umgebungsvariable)
- Unterstützt konfigurierbare Video-Chunk-Länge (VIDEO_CHUNK_LENGTH_SEC)
- Behandelt Netzwerkunterbrechungen mit threaded asynchrone Uploads

### 🚫 Nicht im Umfang
- Echtzeit-Live Streaming (Batch-Ausladung verarbeiteter Chunks)
- Audio-Streaming (nur Video)
- Echtzeit-Zweiwege-Kommunikation
- Speicher-Management über Standard-Retentionsrichtlinien hinaus

### 🏗️ Implementierungsansatz
- **Video-Kodierung**: OpenCV VideoWriter mit AVC1/MP4V-Codecs
- **Upload-Protokoll**: GraphQL-Mutation über HTTPS POST mit multipart/form-data
- **Authentifizierung**: Bearer-Token im Authorization Header
- **Threading**: Asynchrone Upload-Bearbeitung zur Vermeidung von Video-Capture-Blockaden
- **Integration**: Verlinkt an SECTION_ID (Box-ID) und Zeitstempel-Metadaten
- **Fehlerbehandlung**: Anständiger Fallback, wenn API-Anmeldeinformationen nicht konfiguriert sind

### 📊 Erfolgskriterien
- Videokodierung mit korrekter Codec-Kompatibilität (AVC1 primär, MP4V Fallback)
- Erfolgreiche GraphQL-Mutation-Ausladungen auf video.gratheon.com Endpunkt
- Threaded asynchrone Verarbeitung ohne Blockieren der Hauptvideo-Pipeline
- Richtige multipart-Kodierung mit Erkennungsmetadaten-Dateien
- Bearer-Token-Authentifizierung und Box-ID-Assoziation

### 🔗 Verwandte Funktionen
- [🎮 Client-side app with UI](🎮%20Client-side%20app%20with%20UI.md)
- [📈 Count bees coming in and out - on the edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📈 Telemetry API](../../scales/features/📈%20Telemetry%20API.md)

### 📚 Ressourcen & Referenzen
- [Video-Aufnahme-Implementierung](https://github.com/Gratheon/entrance-observer/blob/main/src/uploader.py)
- [GraphQL-Mutationsendpunkt](https://video.gratheon.com/graphql)
- [OpenCV VideoWriter Dokumentation](https://docs.opencv.org/master/dd/d9e/classcv_1_1VideoWriter.html)

### 💬 Hinweise
Eigentliche Implementierung unter Verwendung von GraphQL-Mutationen für die Video-Ausladung mit Erkennungsmetadaten. Ermöglicht eine Cloud-basierte Verarbeitung für Geräte ohne ausreichende lokale Rechenressourcen.
