---
status: in-progress
title: 🦀 Varroa-Zählung auf der Bodeneinlage
navTitle: Varroa-Zählung
layout: products
---

Varroamilben sind Parasiten, die Honigbienenvölker schwächen. Regelmäßige Kontrolle der Varroabelastung ist entscheidend für die Volksgesundheit. Klassische Zählungen erfolgen über eine weiße Bodeneinlage oder Windel und manuelles Auszählen gefallener Milben – das ist zeitaufwendig und fehleranfällig.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/1ghYZX55LP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎯 Zweck
Erfassen Sie Varroabelastung, indem Sie Fotos der Bodeneinlage hochladen und analysieren lassen. Die App soll Varroamilben mit KI automatisch zählen, manuelles Auszählen ersetzen und historische Trends liefern.

### 🎭 Nutzergeschichte
- Als Imker
- möchte ich Fotos meiner Bodeneinlage hochladen,
- damit ich Varroamilben automatisch zählen und die Belastung über die Zeit verfolgen kann,
- und rechtzeitig behandeln kann, wenn Grenzwerte überschritten werden.

### 🚀 Wichtigste Vorteile
- **Kein manuelles Auszählen**: KI erkennt und zählt Varroamilben auf Fotos.
- **Konsistentere Ergebnisse**: Computer Vision kann gleichmäßiger zählen als manuelle Sichtprüfung.
- **Historischer Verlauf**: Mit Durchsichten versionierte Bilder zeigen Varroatrends über Wochen und Monate.
- **Behandlungsplanung**: Objektive Daten helfen zu entscheiden, wann eine Behandlung nötig ist.
- **Zeitersparnis**: Foto hochladen, Ergebnis erhalten – statt lange auf die Windel zu schauen.

### 📋 Verwendung

#### 1. Bodeneinlage zur Beute hinzufügen

1. Öffnen Sie die Strukturansicht Ihrer Beute in der App.
2. Klicken Sie auf das Dropdown-Menü mit Zargenoptionen.
3. Wählen Sie **„Add bottom“**.
4. Der Bodenabschnitt erscheint in der Beutenstruktur.

#### 2. Bilder der Bodeneinlage hochladen

1. Wählen Sie den Bodenabschnitt in der Beutenstruktur.
2. Klicken Sie auf **„Upload bottom board image“**.
3. Wählen Sie ein Foto von Ihrem Gerät aus.
4. Das Bild wird hochgeladen; die KI-Zählung wird nach Verfügbarkeit automatisch ausgeführt.
5. Ergebnisse zeigen erkannte Milben und die geschätzte Anzahl.

**Fototipps:**
- Verwenden Sie eine weiße Bodeneinlage oder helle Kunststoffplatte.
- Sorgen Sie für gutes Licht ohne starke Reflexe oder Schatten.
- Fotografieren Sie die gesamte Bodeneinlage.
- Halten Sie die Kamera möglichst parallel zur Fläche.
- Fotografieren Sie zu vergleichbaren Zeiten, z. B. nach 24 Stunden Einlagezeit.
- Entfernen Sie groben Schmutz, wenn möglich, um die Zählung zu verbessern.

#### 3. Ergebnisse interpretieren

Die App hebt erkannte Varroamilben im Bild hervor und zeigt:
- **Gesamtzahl**: Anzahl erkannter Milben.
- **Konfidenzwerte**: Sicherheit einzelner Erkennungen.
- **Historischer Vergleich**: Trend, wie sich die Zählung über die Zeit verändert.

**Orientierende Behandlungsschwellen:**
- **Unter 3 Milben/Tag**: Niedrige Belastung, weiter beobachten.
- **3–10 Milben/Tag**: Behandlung erwägen und engmaschig kontrollieren.
- **Über 10 Milben/Tag**: Behandlung empfohlen.

#### 4. Historische Nachverfolgung

Bilder werden mit Durchsichten versioniert:
- Erstellen Sie eine neue Durchsicht, um den aktuellen Zustand zu speichern.
- Vergleichen Sie Zählungen über Wochen und Monate.
- Prüfen Sie, ob Behandlungen die Milbenbelastung reduziert haben.
- Verfolgen Sie saisonale Varroazyklen.

### 🔍 Funktionsstatus

**Aktuell verfügbar:**
- ✅ Bodenabschnitt zur Beute hinzufügen
- ✅ Bilder vom Telefon oder der Kamera hochladen
- ✅ Bildspeicherung und Versionierung mit Durchsichten
- ✅ Hochgeladene Bilder in der Beutenansicht anzeigen

**In Entwicklung:**
- 🚧 Automatische Varroa-Zählung mit KI
- 🚧 Visuelle Markierung erkannter Milben auf Bildern
- 🚧 Historische Trenddiagramme
- 🚧 Warnungen bei Behandlungsschwellen
- 🚧 Nachverfolgung der Behandlungswirksamkeit

### 🚫 Was diese Funktion nicht leistet

- Physische Bodeneinlagen-Hardware bereitstellen
- Permanente Live-Überwachung der Varroabelastung
- Automatische Behandlung auslösen
- Eine professionelle veterinärmedizinische Diagnose ersetzen

### 🔗 Verwandte Funktionen

- [🔎 Durchsichtsverwaltung](../hobbyist-tier/inspection-management/) – Bilder mit Durchsichten versionieren
- Varroa-Behandlungsjournal (geplant)
- Volksgesundheits-Dashboard (geplant)

### 📚 Mehr erfahren

- [Technische Dokumentation zur Varroa-Bodenerkennung](/docs/web-app/features/varroa-bottom-detection/)
- [Honey Bee Health Coalition – Varroa Guide](https://honeybeehealthcoalition.org/varroa/)
