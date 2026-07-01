---
sidebar_position: 2
title: 📱 Application web
navTitle: Application web
layout: products
---

L’application web Gratheon aide les apiculteurs à gérer les [données de rucher](/products/web_app/free-tier/apiary-management/), communiquer avec des appareils modulaires installés sur les ruches, analyser les photos de cadres et de plateaux de fond, stocker la [télémétrie en séries temporelles](/products/web_app/pro-tier/hive-telemetry-storage/), générer des [alertes](/products/web_app/flexible-tier/alerts/), prévoir l’évolution des colonies et recevoir des suggestions d’IA pour résoudre les problèmes.

`status`: [TRL 6](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

## Entités principales du domaine

| Entité | Description | Propriétés clés |
|--------|-------------|-----------------|
| **Rucher** | Ensemble de ruches situées au même endroit. | Position, nom, statut actif |
| **Ruche** | Structure physique avec sections verticales. Elle peut être divisée, fusionnée ou marquée comme effondrée. | Nom, couleur, statut, hausses, colonie, historique |
| **Famille (colonie/reine)** | Superorganisme d’abeilles dirigé par une reine pondeuse. | Race, année d’introduction, âge, traitements |
| **Hausse / corps** | Section en bois qui contient des cadres. | Type, position, couleur, cadres |
| **Cadre** | Cadre en bois avec cire ou rayon dans une section. | Type, position, côtés gauche et droit |
| **Côté de cadre** | Surface d’un cadre où des photos peuvent être téléversées pour analyse IA. | Images, ressources détectées |
| **Inspection** | Instantané de l’état complet de la ruche lors d’une intervention. | ID de ruche, données, horodatage |
| **Traitement** | Intervention anti-varroa suivie par colonie, section ou ruche. | Type, date, cible |
| **Mesures (télémétrie)** | Données de capteurs IoT en séries temporelles. | Température, humidité, poids, horodatage |
| **Mouvement à l’entrée** | Analyse du trafic d’abeilles à partir de caméras d’entrée. | Entrées/sorties, flux net, vitesse |
| **Alerte** | Avertissement déclenché par des seuils et des règles. | Texte, mesure, ruche, livraison, date |

## Principaux cas d’usage

### Téléverser des photos pour obtenir une vue d’ensemble de la colonie
- Créer une ruche.
- Ouvrir une section, ajouter des cadres et téléverser une photo de cadre avec abeilles et cellules.
- Attendre le traitement par le backend.
- Recevoir des statistiques assistées par IA sur le nombre d’abeilles et la distribution des cellules.
- Comparer les colonies avec des données réelles.

### Suivre le développement de la colonie dans le temps
- Enregistrer chaque inspection comme instantané daté de l’état de la ruche.
- Observer comment la distribution des ressources évolue entre inspections.
- Utiliser l’historique pour décider de nourrir, traiter, diviser ou attendre.

### Envoyer la télémétrie des capteurs IoT
- Générer un jeton API dans les paramètres du compte.
- Connecter le capteur au Wi-Fi en suivant la [documentation des capteurs de ruche](/docs/beehive-sensors/).
- Ouvrir l’onglet Mesures de la ruche et consulter les graphiques de poids et de température.
- Corréler les capteurs avec la météo, les inspections et les alertes.

### Diffuser la vidéo de l’entrée de ruche
- Installer une caméra [Entrance Observer](/fr/products/entrance_observer/).
- Vérifier que le flux vidéo est visible.
- Utiliser les métriques et les alertes pour interpréter l’activité, le pillage, l’essaimage ou d’autres événements.

### Surveiller le varroa avec le plateau de fond
- Ajouter une section de plateau de fond à la ruche.
- Téléverser une photo du tiroir blanc montrant les varroas.
- Les images sont versionnées avec les inspections pour conserver un historique.
- Le [comptage du varroa sur plateau de fond](/products/web_app/starter-tier/hive-bottom-varroa-count/) aide à évaluer l’infestation et les décisions de traitement.

## Pages fonctionnelles localisées

Les pages détaillées de fonctionnalités restent pour l’instant sur les routes anglaises canoniques jusqu’à leur traduction complète. Cela évite de créer des pages françaises partielles tout en gardant les liens utiles vers la documentation existante.
