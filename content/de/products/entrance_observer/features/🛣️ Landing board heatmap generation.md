# 🛣️ Landebrett-Wärmebild-Generierung

### 🎯 Zweck
Erstellt tägliche visuelle Wärmebilder, die Bienentransportmuster und Aktivitätszonen auf dem Landebrett zeigen, um den Stockeingang zu optimieren und den Verkehrsfluss zu verstehen.

![](img/heatmap-09-06%201.png)
![](img/heatmap-09-10.png)

### 🎭 Benutzerstory
- Als Imker mit Interesse an der Optimierung der Stockeingangs-Effizienz
- möchte ich den Entrance Observer-Bereich in den Stockdetails öffnen und von der Live-Ansicht oder Aufzeichnungen zu Wärmebildern wechseln können
- damit ich standardmäßig das neueste Tag vergleichen kann und zu vorherigen Tagen übergehen kann, wenn ich Verkehrsengpässe untersuche

### 🚀 Hauptvorteile
- **Verkehrsoptimierung**: Identifizierung überlasteter Bereiche und möglicher Verbesserungen
- **Eingangskonstruktions-Einblicke**: Datengetriebener Ansatz zur Landebrett-Modifikation
- **Langzeitverhaltensanalyse**: Verständnis saisonaler und täglicher Muster
- **Forschungswert**: Visuelle Daten zum Studium des Bienentransportverhaltens

### 🔧 Technischer Überblick
Die Wärmebild-Berechnung wird von `gate-video-stream` verwaltet, nicht vom Edge `entrance-observer` Gerät.

Der `entrance-observer` erkennt immer noch Bienen und führt eine lokale tägliche JSONL-Verfolgungshistorie für Debugging-Zwecke aus. Nach jeder Analyse-Sendung sendet er auch die verfolgten Koordinaten an `gate-video-stream` mit der Box-ID, dem Zeitstempel, den Frame-Dimensionen und `trackHistory`. `gate-video-stream` aggregiert diese Trajektorien zu einem pro-Benutzer-, pro-Box-, pro-Tag hohen Auflösungssparse-Pixel-Wärme-Gitter, rendert ein tägliches PNG-Wärmebild in der ursprünglichen Frame-Auflösung, speichert es im gleichen Object-Storage-Bucket-Muster wie Videoaufzeichnungen und stellt es der Web-App über GraphQL zur Verfügung.

### 📋 Akzeptanzkriterien
- `entrance-observer` lädt Trajektorie-Payloads zum Video-Stream-Service hoch, nachdem die Verfolgungsanalyse abgeschlossen ist
- `gate-video-stream` berechnet und speichert ein kumulatives Wärmebild pro Eingang und Tag
- Gespeicherte Wärmebilder sind über URLs adressierbar, ähnlich wie gespeicherte Video-Assets
- Web-App Stockdetails > Entrance Observer hat drei Tabs: Live-Ansicht, Aufzeichnungen und Wärmebilder
- Der Wärmebild-Tab zeigt standardmäßig das neueste verfügbare Tag
- Vorheriger Tag, nächster Tag und Neueste-Steuerungen ermöglichen dem Benutzer die Navigation durch historische Wärmebilder
- Fehlende Tage zeigen einen leeren Zustand anstelle eines fehlgeschlagenen Views

### 🚫 Nicht im Umfang
- 3D-Visualisierung oder Tiefenanalyse
- Wetterkorrelation mit Verkehrsmustern
- Automatisierte Landebrett-Konstruktions-Empfehlungen
- Ersetzung roher Videoaufzeichnungen durch Wärmebilder

### 🏗️ Implementierungsansatz
- **Dateneingabe**: Edge-generierte Track-History-Koordinatenarrays pro Track-ID
- **Transport**: Authentifizierte REST-Ausladung vom `entrance-observer` zum `gate-video-stream`
- **Verarbeitung**: Serverseitige Pixel-für-Pixel-Tagesakkumulation mit logarithmischer visueller Skalierung, die feine Details wie Eckverweildauer und Kantentransport bewahrt
- **Visualisierung**: Hochauflösendes PNG-Wärmebild generiert von `gate-video-stream`
- **Speicherung**: Object Storage unter dem Benutzer- und Eingangskamera-Namensraum, plus eine MySQL-Indexzeile für die Tagesnavigation
- **Web-App**: `entranceHeatmaps` GraphQL-Anfrage ermöglicht den Stockdetails-Wärmebild-Tab

### 📊 Erfolgskriterien
- Genauer Koordinaten-Prozess innerhalb der Frame-Grenzen (0 <= x < width, 0 <= y < height)
- Tägliche Wärmebilder aus hochgeladenen Trajektorie-Batches generiert
