# 🎮 Clientseitige App mit Benutzeroberfläche

### 🎯 Zweck
Bietet eine lokale webbasierte Oberfläche für Imker, um Eingangsbeobachter-Metriken und Video-Streams zu überwachen, wenn keine Internetverbindung verfügbar ist.

### 🎭 Benutzerstory
- Als Imker, der an abgelegenen Standorten arbeitet
- möchte ich Live-Überwachungsdaten und Video-Streams lokal auf meinem Gerät nutzen können
- damit ich meine Bienenstöcke auch ohne Internetverbindung überwachen kann und sofortigen Zugriff auf kritische Informationen habe

### 🚀 Hauptvorteile
- **Offline-Zugriff**: Funktioniert ohne Internet über lokales Netzwerk
- **Echtzeit-Überwachung**: Anzeige von Live-Eingangsmetriken und Video-Streams
- **Bekannte Oberfläche**: Web-basierte UI, zugänglich von jedem Gerät mit Browser
- **Notfallzugang**: Kritisch für Fehlerbehebung und Geräteverwaltung unter Feldbedingungen

### 🔧 Technischer Überblick
Flask Webserver (src/main.py) bereitgestellt responsive HTML-Oberfläche mit Echtzeit-MJPEG Video-Streaming. Bietet Kamerasteuerungen, Erkennungslinien-Anpassung und Live-Bienenanzahl-Anzeige. Verwendet Threading für Frame-Aufnahme und WebSocket-ähnliches Streaming über HTTP mit Multipart-Response-Format.

### 📋 Akzeptanzkriterien
- Flask-Server im lokalen Netzwerk erreichbar (Standard-Port-Konfiguration)
- Live-MJPEG Video-Stream mit Erkennungsüberlagerungen und Bienenverfolgungsvisualisierung
- Echtzeit-Bienenanzahl-Anzeige mit historischen Daten (3600 Einträge Deque-Puffer)
- Kameraeigenschaftssteuerungen: Helligkeit, Kontrast, Sättigung, Verstärkung, Belichtung, Weißabgleich
- Erkennungslinien-Anpassung über Weboberfläche (DETECTION_LINE Koeffizient)
- Responsive CSS-Design mit System-Schriften und modernem Styling
- Automatische Frame-Aktualisierung ohne Seitenneuladen über Streaming-Response

### 🚫 Nicht im Umfang
- Ferninternetzugang (wird von der Hauptwebanwendung behandelt)
- Historische Datenspeicherung (nur lokaler Cache)
- Multi-Geräte-Synchronisation
- Erweiterte Analytik und Berichterstattung

### 🏗️ Implementierungsansatz
- **Backend**: Flask Webserver mit Threading für gleichzeitige Frame-Verarbeitung
- **Frontend**: HTML mit eingebettetem CSS unter Verwendung von System-Schriften (-apple-system, BlinkMacSystemFont)
- **Video-Streaming**: MJPEG über HTTP mit multipart/x-mixed-replace Content-Typ
- **Echtzeitdaten**: Thread-sicherer frame_lock für gleichzeitigen Zugriff auf Video-Frames
- **Kamera-Schnittstelle**: OpenCV-Kamerasteuerungen mit konfigurierbaren Eigenschaftswörterbüchern
- **Erkennungsüberlagerung**: Echtzeit-Visualisierung von YOLO-Erkennungen und Verfolgungspfaden

### 📊 Erfolgskriterien
- Flask-Server-Start und Erreichbarkeit innerhalb der Geräte-Bootsequenz
- MJPEG-Stream-Latenz optimiert für Echtzeitbetrachtung
- Thread-sicherer Frame-Zugriff mit ordnungsgemäßen Sperrmechanismen
- Kameraeigenschaften-Anpassung Reaktionsfähigkeit über Websteuerungen
- Historische Bienenanzahl-Anzeige mit 10-Stunden-Datenretention (3600 Einträge)

### 🔗 Verwandte Funktionen
- [📈 Bienen rein und raus zählen - am Edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [🎥 Video-Streaming via API](🎥%20Video%20streaming%20via%20API.md)
- [📊 Bienenbewegungs-Metriken-Berichterstattung](📊%20Bee%20movement%20metric%20reporting.md)

### 📚 Ressourcen & Referenzen
- Flask-Dokumentation (https://flask.palletsprojects.com/)
- OpenCV MJPEG-Streaming-Tutorials
- Web-Socket-Kommunikationsprotokolle

### 💬 Hinweise
Diese Funktion ist besonders nützlich für Imker in abgelegenen Gebieten mit schlechter Internetverbindung. Sie ermöglicht eine sofortige Diagnose und Überwachung direkt vor Ort, ohne auf Cloud-Ressourcen angewiesen zu sein.
