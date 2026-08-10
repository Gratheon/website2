# 📈 Compter les abeilles entrantes et sortantes - en edge

### 🎯 Objectif
Système de surveillance du trafic d'abeilles en temps réel qui compte les abeilles individuelles entrant et sortant de la ruche en utilisant la vision par ordinateur sur des appareils edge.

### 🎭 Histoire utilisateur
- En tant qu'apiculteur
- Je souhaite suivre automatiquement l'activité des abeilles à l'entrée de ma ruche
- Afin de surveiller la santé de la colonie, détecter tôt les problèmes et comprendre les motifs de butinage sans observation manuelle

### 🚀 Principaux avantages
- **Surveillance automatisée** : Pas de comptage manuel requis, suivi 24/7
- **Détection précoce des problèmes** : Des motifs de trafic inhabituels peuvent indiquer un essaimage, un pillage ou des problèmes de santé
- **Informations basées sur les données** : Suivi des taux de perte d'abeilles, de l'efficacité de butinage et des motifs saisonniers
- **Traitement edge** : Analyse en temps réel sans dépendance internet

### 🔧 Aperçu technique
Utilise un modèle de détection d'objets YOLO v8 (weights/best.pt) s'exécutant sur des appareils edge pour détecter et suivre les abeilles individuelles traversant des limites d'entrée configurables. Implémente le suivi DeepSORT avec analyse de trajectoire pour distinguer le mouvement entrant vs sortant à travers une ligne de détection positionnée à une hauteur configurable (défaut 50% du frame).

### 📋 Critères d'acceptation
- Détection des abeilles individuelles via YOLO v8
- Suivi DeepSORT avec analyse de trajectoire
- Distinction claire entre mouvement entrant et sortant
- Ligne de détection positionnable à hauteur configurable (défaut 50%)
- Compteurs en temps réel affichés dans l'interface
- Fonctionne sans connexion internet

### 🚫 Hors périmètre
- Analyse vidéo approfondie post-enregistrement
- Identification individuelle des abeilles
- Suivi multi-ruches simultané
- Intégration météorologique avancée

### 🏗️ Approche d'implémentation
- **Détection** : Modèle YOLO v8 pré-entraîné pour la détection d'abeilles
- **Suivi** : DeepSORT avec ré-identification des abeilles individuelles
- **Analyse de trajectoire** : Classification entrant vs sortant basée sur la direction du mouvement
- **Calcul** : Compteurs en temps réel mis à jour toutes les X secondes

### 📊 Métriques de succès
- Précision de détection >90% pour les abeilles individuelles
- Latence de tracking <100ms par image
- Fonctionnement continu 24/7 sans intervention humaine
- Support multi-lignes de détection configurables

### 🔗 Fonctionnalités associées
- [📊 Rapports de métriques de déplacement des abeilles](📊%20Bee%20movement%20metric%20reporting.md)
- [🛣️ Génération de cartes thermiques du plancher d'envol](🛣️%20Landing%20board%20heatmap%20generation.md)

### 📚 Ressources et références
- [Documentation YOLO v8](https://docs.ultralytics.com/)
- [DeepSORT tracking paper](https://arxiv.org/abs/1703.07402)

### 💬 Notes
Le traitement en edge est crucial pour les apiculteurs sans accès internet stable. Les données brutes de comptage peuvent être synchronisées ultérieurement quand la connexion devient disponible.
