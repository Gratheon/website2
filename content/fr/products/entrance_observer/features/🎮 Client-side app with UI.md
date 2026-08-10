# 🎮 Application cliente avec interface web

### 🎯 Objectif
Fournit une interface web locale pour les apiculteurs afin de surveiller les métriques de l'observateur d'entrée et les flux vidéo lorsque la connectivité internet est indisponible.

### 🎭 Histoire utilisateur
- En tant qu'apiculteur travaillant dans des endroits isolés
- Je souhaite accéder aux données de surveillance en direct et aux flux vidéo localement sur mon appareil
- Afin de pouvoir surveiller mes ruches même sans connexion internet et avoir un accès immédiat aux informations critiques

### 🚀 Principaux avantages
- **Accessibilité hors ligne** : Fonctionne sans connexion internet via le réseau local
- **Surveillance en temps réel** : Visualisation des métriques d'entrée en direct et des flux vidéo
- **Interface familière** : Interface web accessible depuis tout appareil avec un navigateur
- **Accès d'urgence** : Critique pour le dépannage et la gestion des appareils dans les conditions de terrain

### 🔧 Aperçu technique
Serveur web Flask (`src/main.py`) servant une interface HTML responsive avec streaming vidéo MJPEG en temps réel. Fournit des contrôles caméra, un ajustement de la ligne de détection et un affichage en direct du nombre d'abeilles détectées. Utilise le multithreading pour la capture d'images et le streaming de type WebSocket sur HTTP avec un format de réponse multipartie.

### 📋 Critères d'acceptation
- Serveur Flask sert une interface HTML responsive
- Streaming vidéo MJPEG en temps réel depuis les flux de détection
- Contrôles caméra accessibles via l'interface web locale
- Ajustement de la ligne de détection par l'utilisateur
- Affichage du nombre d'abeilles détectées en temps réel
- Fonctionne sans connexion internet via réseau local (LAN)
- Supporte les appareils mobiles et les ordinateurs avec navigateur

### 🚫 Hors périmètre
- Streaming vidéo distant (géré par le système cloud)
- Stockage vidéo à long terme
- Analyses avancées de vidéos
- Intégration avec des systèmes tiers en temps réel

### 🏗️ Approche d'implémentation
- **Serveur web** : Flask servant une interface HTML/CSS/JS responsive
- **Streaming vidéo** : MJPEG sur HTTP avec format multipartie
- **Contrôles caméra** : Interface pour ajuster la ligne de détection et les paramètres
- **Affichage des métriques** : Compteur d'abeilles en temps réel dans l'interface

### 📊 Métriques de succès
- Temps de réponse de l'interface inférieur à 200ms sur réseau local
- Latence vidéo inférieure à 500ms pour le streaming MJPEG
- Support simultané de plusieurs clients sur le réseau local
- Reprise automatique en cas de perte de connexion locale

### 🔗 Fonctionnalités associées
- [🎥 Streaming vidéo via API](🎥%20Video%20streaming%20via%20API.md)
- [📈 Compter les abeilles entrantes et sortantes - en edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)

### 📚 Ressources et références
- [Documentation Flask](https://flask.palletsprojects.com/)
- [Spécification MJPEG streaming](https://en.wikipedia.org/wiki/Motion_JPEG)

### 💬 Notes
L'application cliente locale est essentielle pour les apiculteurs travaillant dans des zones rurales sans couverture internet. Elle permet un accès d'urgence et un dépannage rapide de l'équipement sur place.
