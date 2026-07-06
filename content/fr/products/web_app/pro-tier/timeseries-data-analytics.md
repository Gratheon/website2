---
title: 📊 Analyse de données en séries temporelles
navTitle: Analyse temporelle
layout: products
---

Tableau de bord d’analyse multi-ruches pour comparer les métriques de colonies dans le temps, identifier les tendances, trouver des corrélations et détecter les anomalies dans tout le rucher.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/aBsKVInYCno" title="Features - Telemetry API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Vue d’ensemble

L’analyse de séries temporelles affiche les données de télémétrie de deux façons :

1. **Vue ruche individuelle** : métriques d’une ruche accessibles depuis les détails de la ruche, dans l’onglet « Mesures ».
2. **Tableau de bord multi-ruches** : vue comparative pour analyser plusieurs ruches simultanément.

En superposant les données de différentes colonies, l’apiculteur peut détecter des motifs, comparer les performances et repérer les ruches atypiques.

Cette fonction aide à :

- comparer le développement des colonies dans un rucher ;
- identifier des corrélations entre mesures, par exemple baisse de poids et essaimage ;
- repérer tôt les ruches sous-performantes ;
- analyser l’effet de la météo sur le comportement des abeilles ;
- exporter les données pour des rapports ou analyses externes.

## Graphiques disponibles

### Population de colonie

Suivre les estimations de population issues des inspections, avec possibilité de comparer à une courbe idéale de croissance.

### Poids de ruche

Comparer le poids moyen journalier entre ruches pour suivre la miellée, les périodes de disette, la consommation des réserves et le bon moment de récolte.

### Température interne

Surveiller les motifs de température dans chaque ruche. Des températures stables autour de 34–35 °C dans la zone de couvain indiquent généralement une colonie saine avec couvain actif.

### Trafic à l’entrée

Analyser l’activité à l’entrée :

- **abeilles entrantes/sortantes** : flux directionnel ;
- **flux net** : différence entre entrées et sorties ;
- **vitesse moyenne** : vitesse de déplacement à l’entrée ;
- **95e percentile de vitesse** : détection d’abeilles ou d’événements rapides ;
- **abeilles stationnaires** : comportements possibles de garde ou de blocage ;
- **abeilles détectées** : nombre total dans l’image ;
- **interactions** : contacts entre abeilles, comme trophallaxie ou agressivité.

### Corrélation météo

Superposer les variables externes pour comprendre les facteurs environnementaux :

- température et vent ;
- pluie et couverture nuageuse ;
- rayonnement solaire ;
- disponibilité du pollen ;
- pollution de l’air.

## Fonctionnement

### Vue ruche individuelle

1. **Ouvrir les détails d’une ruche** : sélectionner une ruche depuis le rucher.
2. **Consulter les mesures** : ouvrir l’onglet « Mesures ».
3. **Analyser les données récentes** : revoir poids, température et mouvement à l’entrée.
4. **Corréler les événements** : comparer les variations avec inspections, traitements ou nourrissement.

### Tableau de bord multi-ruches

1. **Sélectionner le rucher** : filtrer les ruches par emplacement.
2. **Choisir les ruches** : sélectionner une ou plusieurs ruches à comparer.
3. **Définir la plage temporelle** : utiliser 7, 30, 90, 180 ou 365 jours selon le besoin.
4. **Activer les graphiques** : afficher uniquement les métriques pertinentes.
5. **Navigation synchronisée** : le zoom et le déplacement gardent le même axe temporel sur les graphiques.
6. **Exporter les données** : télécharger un CSV pour analyse externe ou rapport.

## Fonctions

### Deux modes de vue

- **Ruche individuelle** : accès rapide depuis la page de détails.
- **Tableau multi-ruches** : comparaison complète pour les ruchers avec plusieurs colonies.

### Comparaison entre ruches

Superposer plusieurs ruches sur un même graphique avec des lignes colorées pour repérer rapidement les colonies qui prennent du poids, perdent de l’activité ou maintiennent une température inhabituelle.

### Analyse de corrélation

Chercher des relations comme :

- chute brusque de poids avant un essaim ;
- températures extrêmes qui réduisent l’activité ;
- météo qui influence le butinage ;
- croissance de population accompagnée d’un gain de poids.

### Seuils d’alerte

Les graphiques peuvent afficher les seuils configurés afin d’évaluer la gravité lorsqu’une mesure sort de sa plage attendue.

### Marqueurs d’inspection

Les inspections apparaissent comme repères temporels pour relier les observations manuelles aux motifs des capteurs.

### Export de données

Exporter les données pour :

- analyse dans un tableur ;
- modélisation statistique ;
- visualisations personnalisées ;
- rapports de saison ou de client.

## Cas d’usage

### Planification saisonnière

Comparer les motifs de poids entre saisons pour prévoir la récolte, les disettes et les besoins de nourrissement.

### Évaluation des reines

Comparer la croissance de population pour identifier les colonies fortes, les lignées intéressantes ou le bon moment de remplacement de reine.

### Prédiction de l’essaimage

Chercher des signaux comme des chutes de poids, une activité intense à l’entrée, des fluctuations de température ou des pics de population.

### Impact environnemental

Corréler l’activité avec température, pluie, vent, rayonnement solaire ou disponibilité florale.

### Suivi des traitements

Comparer les métriques avant et après une intervention pour évaluer récupération, stabilité et efficacité.

## Détails techniques

**Sources de données :**

- télémétrie depuis telemetry-api ;
- registres d’inspection de l’application ;
- données météo externes ;
- estimations de population issues des inspections et de l’analyse d’images.

**Performance :**

- les longues plages temporelles utilisent une agrégation journalière ;
- le cache client réduit les requêtes répétées ;
- les préférences de graphiques peuvent être conservées localement ;
- les requêtes sont optimisées pour limiter le nombre de points chargés.

**Limites :**

- les métriques d’entrée nécessitent du matériel Entrance Observer ;
- la météo nécessite une position GPS du rucher ;
- les estimations de population dépendent d’inspections ou de photos suffisantes ;
- les plages en haute résolution peuvent être limitées par les performances et la conservation des données.

## Fonctions liées

- [📈 Stockage de télémétrie](/fr/products/web_app/pro-tier/hive-telemetry-storage/) : collecte et stockage des données.
- [⚖️ Comparaison de colonies](/products/web_app/pro-tier/colony-comparison-analytics/) : outils d’analyse statistique.
- [🔔 Alertes](/fr/products/web_app/flexible-tier/alerts/) : notifications par seuils et anomalies.

## Ressources

- [Documentation technique](/docs/web-app/features/timeseries-analytics/)
- [Web-app sur GitHub](https://github.com/Gratheon/web-app)
- [Telemetry API](/docs/API/GraphQL/)
