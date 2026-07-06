---
title: 🧿 Ruche robotisée
layout: products
sidebar_position: 5
---

Nous développons une plateforme robotisée pour l’inspection de ruches verticales. Elle doit :
- pouvoir soulever plusieurs sections de ruche afin d’atteindre plus rapidement le nid à couvain ;
- prendre des photos des cadres avec des caméras intégrées, même si le retrait manuel des cadres reste nécessaire ;
- téléverser les résultats d’inspection vers l’[application web](/fr/products/web_app/) ;
- être transportable sur roues pour inspecter différentes ruches.

L’orientation matérielle est suivie dans la [documentation d’ingénierie de la ruche robotisée](/docs/robotic-beehive/). Le flux d’inspection dépend de la [gestion des côtés de cadre](/fr/products/web_app/free-tier/frame-side-management/) et de la [gestion des inspections](/fr/products/web_app/hobbyist-tier/inspection-management/) dans l’application web.

`status`: [TRL 2](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/)

<div style={{width:300}}>
![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2011.25.06.png)
</div>

## Vue d’ensemble

![](/products/robotic_beehive/img/Screenshot%202025-02-25%20at%2021.42.01.png)

### Problèmes ciblés
Parmi les problèmes apicoles, ce produit aide particulièrement à traiter :
- l’observabilité de la colonie ;
- les inspections intrusives ;
- le travail physique lourd ;
- les infestations, dont le varroa ;
- les lavages à l’alcool qui tuent des abeilles ;
- les colonies sans reine ;
- les colonies avec reine bourdonneuse ;
- les ruches peu pratiques ou peu esthétiques ;
- la difficulté de devenir nouvel apiculteur.

### Clients cibles
Une plateforme d’inspection robotisée coûtera plus de 2000 EUR. Sa valeur principale réside dans la numérisation et l’organisation de l’état du rucher. Elle semble particulièrement pertinente pour :
- les apiculteurs semi-professionnels ;
- les apiculteurs urbains ;
- les programmes de parrainage de ruches d’entreprise.

![](/about/img/president.png)

Le président Alar Karis récoltant le miel des ruches du palais de Kadriorg. ([Photo : Office of the President](https://news.err.ee/1609070024/gallery-president-alar-karis-harvesting-honey-in-front-of-kadriorg-palace#lg=1&slide=1)) Un exemple de valeur de marque complémentaire potentielle.

## Fonctionnalités et idées
- Nourrisseur automatique au sirop de sucre
- Surveillance audio 6 canaux
- Application cliente avec interface pour mode manuel
- Connexion du robot à l’UX de l’application web
- Analyse vidéo du nourrissage des abeilles
- Classification de la spécialisation des abeilles
- Interface audio pour communiquer avec les abeilles
- Autonomie énergétique
- Chauffage de ruche et contrôle de la ventilation
- Fermeture ou réduction mécanique de l’entrée en cas de pillage, attaque de frelons ou vent fort
- Scan du fond de ruche, fond mobile et comptage varroa
- Réorganisation, insertion, isolation et extraction robotisées des cadres
- Traitement acide automatique contre le varroa

## Exigences non fonctionnelles
L’extraction doit se faire sans déranger inutilement les abeilles, sans les exposer aux intempéries et sans mettre en danger les personnes autour.

- S’adapter aux tailles de cadres et de ruches choisies par les clients (Langstroth, Farrar, National, etc.)
- Ne pas blesser l’opérateur humain
- Ne pas écraser les abeilles, provoquer d’hypothermie ou créer des fentes favorisant pillage et attaques
- Pouvoir extraire un cadre collé par la propolis ou la cire
- Ne pas prendre feu à cause de la surchauffe, du soleil ou du câblage électrique
- Déplacer un cadre plein de miel (environ 4 kg)
- Être réparable, modulaire et idéalement échangeable à chaud
- Fonctionner offline-first : fournir des données même sans Internet ni compte cloud
- Offrir un contrôle manuel sur site et un mode sûr en cas de perte d’alimentation

## Prototype
Le prototype comprend des actionneurs pour déplacer les cadres, un GPU et des caméras. Il est à un stade très précoce, car nous nous concentrons d’abord sur l’[application web](/fr/products/web_app/) et [Entrance Observer](/fr/products/entrance_observer/).
