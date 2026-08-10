# 📊 Rapports de métriques de déplacement des abeilles

### 🎯 Objectif
Collecte, traite et transmet des analyses complètes du mouvement des abeilles depuis la surveillance de l'entrée pour fournir des informations exploitables aux apiculteurs.

### 🎭 Histoire utilisateur
- En tant qu'apiculteur utilisant des systèmes de surveillance d'entrée
- Je souhaite recevoir des rapports détaillés sur les motifs et tendances de déplacement des abeilles
- Afin de prendre des décisions éclairées sur la gestion des ruches et détecter potentiellement les problèmes tôt

### 🚀 Principaux avantages
- **Analyses complètes** : Motifs de déplacement détaillés, heures de pointe d'activité et tendances saisonnières
- **Système d'alerte précoce** : Détection d'anomalies pour des motifs d'activité inhabituels
- **Suivi historique** : Données à long terme pour comprendre le développement de la colonie
- **Prêt à l'intégration** : Métriques standardisées pour les tableaux de bord et systèmes d'alerte

### 🔧 Aperçu technique
Le système de calcul des métriques (`src/metrics.py`) traite les données d'historique de trajectoires pour générer des analyses dérivées incluant la vitesse moyenne, la vitesse au 95e percentile et la détection d'abeilles stationnaires. Les données sont sauvegardées localement dans des fichiers JSONL rotatifs quotidiens et transmises via l'API de télémétrie avec des points de terminaison et une authentification configurables.

### 📋 Critères d'acceptation
- Calcule les métriques dérivées : avg_speed_px_per_frame, p95_speed_px_per_frame, stationary_bees_count
- Traite l'historique de trajectoires en utilisant NumPy pour les calculs de vitesse et l'analyse de distance
- Sauvegarde les données de télémétrie localement dans des fichiers JSONL rotatifs quotidiens (metrics_YYYY-MM-DD.jsonl)
- Transmet les données au TELEMETRY_BASE_URL configurable avec authentification par token API
- Inclut les métriques principales : bees_in, bees_out, detected_bees, bee_interactions, net_flow
- Prend en charge un seuil de stationnarité configurables (défaut : 10px de mouvement)
- Transmission télémétrique thread-safe avec traitement asynchrone

### 🚫 Hors périmètre
- Stockage de données à long terme (géré par l'infrastructure cloud)
- Analyses prédictives avancées (analyse statistique de base uniquement)
- Analyse comparative inter-ruches
- Analyse de corrélation météorologique (gérée par des systèmes séparés)

### 🏗️ Approche d'implémentation
- **Moteur de métriques** : Calculs basés sur NumPy pour l'analyse de vitesse et de distance
- **Stockage de données** : Fichiers JSONL locaux avec rotation quotidienne dans le répertoire /app/telemetry
- **Intégration API** : Requêtes HTTP POST vers le point de terminaison de télémétrie avec authentification bearer token
- **Analyse des trajectoires** : Calculs de distance euclidienne entre paires de coordonnées consécutives
- **Multithreading** : Transmission télémétrique asynchrone pour éviter de bloquer le pipeline principal

### 📊 Métriques de succès
- Calcul de métriques basé sur NumPy avec arrondi approprié à 2 décimales
- Persistance des données locales avec rotation de fichier quotidienne
- Succès de transmission télémétrique HTTP avec gestion d'erreurs adéquate
- Sérialisation de l'historique des trajectoires avec conversion de coordonnées entières
- Traitement asynchrone thread-safe sans bloquer le pipeline vidéo

### 🔗 Fonctionnalités associées
- [📈 Compter les abeilles entrantes et sortantes - en edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📈 API de télémétrie](../../scales/features/📈%20Telemetry%20API.md)
- [🛣️ Génération de cartes thermiques du plancher d'envol](🛣️%20Landing%20board%20heatmap%20generation.md)

### 📚 Ressources et références
- [Implémentation du calcul des métriques](https://github.com/Gratheon/entrance-observer/blob/main/src/metrics.py)
- [Système de télémétrie](https://github.com/Gratheon/entrance-observer/blob/main/src/telemetry.py)
- [Calculs de distance NumPy](https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html)

### 💬 Notes
Implémentation actuelle utilisant NumPy pour les calculs mathématiques, persistance JSONL rotative quotidienne et transmission télémétrique HTTP asynchrone. Composant central pour transformer les données de suivi brutes en métriques exploitables.
