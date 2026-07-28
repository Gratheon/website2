# 👭 Erkennung von Bienen-Interaktionen

### 🎯 Zweck
Erkennt und analysiert soziales Verhalten zwischen Bienen am Bienenstockeingang, einschließlich Fütterungsinteraktionen und Kommunikationsverhalten.

### 🎭 Benutzerstory
- Als Imker mit Interesse an der sozialen Dynamik des Volkes
- möchte ich automatisch erkennen können, wenn Bienen sich am Eingang miteinander interagieren
- damit ich soziales Verhalten, Fütterungsmuster und mögliche Stressindikatoren in meinem Volk verstehen kann

### 🚀 Hauptvorteile
- **Verhaltens-Einblicke**: Verständnis der sozialen Dynamik des Volkes und Gesundheitsindikatoren
- **Fütterungsmuster-Analyse**: Erkennung von Trophallaxis (Nahrungsaustausch) zwischen Bienen
- **Stresserkennung**: Abnormale Interaktionsmuster können auf Volkstress oder Krankheit hinweisen
- **Forschungswert**: Wertvolle Daten zum Verständnis des sozialen Verhaltens von Bienen

### 🔧 Technischer Überblick
Verwendet Computer Vision, um zu erkennen, wenn mehrere Bienen in enger Nähe sind und spezifische Verhaltensmuster wie Antennenkontakt, Fütterungspositionen oder Putzverhalten zeigen. Analysiert Bienenpose und Annäherungsverhältnisse über die Zeit.

### 📋 Akzeptanzkriterien
- Erkennt Bienen innerhalb der Interaktionsdistanz (<2 Körperlängen)
- Identifiziert Fütterungs-/Trophallaxis-Verhalten mit >70% Genauigkeit
- Verfolgt Interaktionsdauer und -häufigkeit
- Unterscheidet zwischen verschiedenen Interaktionstypen (Füttern, Putzen, Kämpfen)
- Speichert Interaktionsdaten mit Zeitstempeln und Bienen-IDs

### 🚫 Nicht im Umfang
- Individuelle Bienenidentifikation über Sitzungen hinweg
- Detaillierte Pose-Schätzung (wird durch separate Bienen-Pose-Funktionen abgedeckt)
- Audio-basierte Interaktionserkennung
- Analyse sozialen Verhaltens im Inneren des Stocks

### 🏗️ Implementierungsansatz
- **Erkennung**: Multi-Object-Tracking zur Identifizierung von Bienenpaaren/-gruppen
- **Annäherungsanalyse**: Distanzberechnung zwischen Bienen-Zentroiden
- **Verhaltensklassifizierung**: ML-Modell, das auf Interaktionsmustern trainiert wurde
- **Daten-Ausgabe**: Strukturierte Interaktionsereignisse werden über Telemetrie-API gesendet

### 📊 Erfolgskriterien
- Erkennungsgenauigkeit der Interaktion >70% im Vergleich zur manuellen Annotation
- False-Positive-Rate <20%
- Verarbeitungsfähigkeit für 5+ gleichzeitige Bieneninteraktionen
- Echtzeitanalyse bei 15+ FPS
- Verhaltensmustererkennung für 3+ Interaktionstypen

### 🔗 Verwandte Funktionen
- [📈 Bienen rein und raus zählen - am Edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [🩻 Bienen-Pose-Erzeugung](../ideas/🩻%20Bee%20pose%20generation.md)
- [📊 Bienenbewegungs-Metriken-Berichterstattung](📊%20Bee%20movement%20metric%20reporting.md)

### 📚 Ressourcen & Referenzen
- LabelBee-Plattform-Funktionen zur Interaktionsanalyse
- Forschung über Bienentrophallaxis und soziales Verhalten
- Computer-Vision-Ansätze für Tierverhaltensanalyse

### 💬 Hinweise
Diese Funktion liefert wertvolle Forschungsdaten und kann als früher Indikator für Volkgesundheitsprobleme durch Veränderungen des Sozialverhaltens dienen.
