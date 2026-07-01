---
sidebar_position: 4
title: 👁️‍🗨️ Entrance Observer
layout: products
---

`status: alpha`, [TRL 5](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

💡 Entrance Observer est un ensemble de caméras et d’appareils matériels qui analyse l’entrée de la ruche. Il enregistre un flux vidéo, exécute une analyse IA, puis envoie les métriques et vidéos à notre [application web](/fr/products/web_app/) pour la prévisualisation et les alertes.

![](/products/entrance_observer/img/Screenshot%202025-10-22%20at%2020.43.55.png)

Consultez et installez notre [code open source **entrance-observer**](https://github.com/Gratheon/entrance-observer/).

Pour les détails d’implémentation, voir la [documentation d’ingénierie d’Entrance Observer](/docs/entrance-observer/). Les métriques produites sont stockées via le [stockage de télémétrie de ruche](/products/web_app/pro-tier/hive-telemetry-storage/) et peuvent alimenter les [alertes](/products/web_app/flexible-tier/alerts/).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/hNval4v44ao" title="Beehive Entrance Observer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Problèmes ciblés
Parmi les problèmes apicoles, ce produit aide particulièrement à détecter ou suivre :
- les attaques de frelons ;
- le pillage ;
- les infestations, dont le varroa ;
- l’essaimage ;
- les maladies ;
- les colonies sans reine ;
- l’empoisonnement par pesticides.

## Fonctionnalités
- Streaming vidéo via API
- Détection de l’essaimage
- Application cliente avec interface utilisateur
- Comptage des abeilles entrantes et sortantes directement sur l’appareil
- Rapport de métriques de mouvement des abeilles
- Génération de cartes de chaleur sur la planche d’envol

## Travaux prévus
- Détection de l’infestation varroa à partir de la vidéo
- Détection des attaques de frelons
- Détection et comptage des mâles

## Idées
- Détecter les abeilles portant du pollen pour les statistiques de butinage
- Détecter les vols d’orientation
- Détecter les abeilles gardiennes
- Détecter le vol de fécondation de la reine depuis la vidéo d’entrée
- Déclencher des alertes à partir du compteur d’abeilles
- Détecter l’exposition aux pesticides
- Générer la pose des abeilles

## Public cible
- Apiculteurs amateurs et passionnés de technologie
- Programmes de parrainage de ruches d’entreprise

### Historique des versions
![](/about/img/436202645_10161734083722973_395574856169740131_n.jpg)
Prototype v4 en test terrain. La caméra dispose d’un boîtier de protection. Le cône de protection de la planche d’envol manque encore, car il nécessite un éclairage artificiel.

![](/about/img/gatehousev3.jpg)
Prototype v3. Ajout d’un cône de protection. L’idée est maintenant de séparer le bloc CPU/GPU et de le placer dans le toit de la ruche, d’avoir moins d’appareils à l’entrée, d’intégrer la caméra au cône et d’éloigner l’antenne Wi-Fi ainsi que l’alimentation des abeilles.

![](/about/img/1000004899.jpg)
Prototype v1. Caméra au centre sur monopode, Jetson Orin Nano au centre, câblage et antennes orientés vers le bas.
