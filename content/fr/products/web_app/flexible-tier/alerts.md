---
title: 🔔 Alertes
navTitle: Alertes
layout: products
---

Gratheon doit prévenir les apiculteurs dans différentes situations : seuils de télémétrie, suspicion d’essaimage, reine manquante, anomalies de température, attaques de frelons ou intégrations externes. Cette page décrit la configuration des alertes, les canaux de notification et les types pris en charge dans le niveau Flexible, notamment SMS et webhooks.

## Vue d’ensemble

Le niveau Flexible fournit un système unifié de gestion des alertes avec plusieurs canaux de livraison et des types d’alertes avancés. Les alertes peuvent être configurées par rucher, ruche ou appareil, puis envoyées par e-mail, SMS, notification mobile, Telegram ou webhook.

## Canaux

- E-mail
- SMS, par exemple via Twilio ou un fournisseur équivalent
- Notifications push ou application mobile
- Bot Telegram
- Intégration webhooks

## Configurer les canaux d’alerte

- L’utilisateur ouvre la page de paramètres.
- Dans `Alerts` :
  - il choisit les canaux préférés, par exemple `Alert me via: [email]` ;
  - les canaux disponibles peuvent inclure mobile push, e-mail, SMS, Telegram et webhooks.

## Types d’alertes

L’utilisateur peut activer ou désactiver les types d’alertes qui l’intéressent. Exemples :

- risque d’essaimage lié aux cellules royales ou à l’analyse de cadres ;
- attaque de frelons ;
- reine absente ou ponte insuffisante ;
- couvain de mâles ou proportion anormale de mâles ;
- température trop basse ou trop élevée dans la ruche ;
- essaimage détecté ;
- anomalies personnalisées depuis l’analyse de séries temporelles.

## Notifications SMS

- Les SMS sont envoyés par un fournisseur spécialisé.
- Ils sont destinés aux messages courts et prioritaires, par exemple reine manquante ou température critique.
- Les clients du niveau Flexible peuvent activer ou désactiver les SMS et configurer les numéros au niveau du compte.

## Webhooks

- Les webhooks permettent de connecter les alertes à des systèmes externes d’automatisation ou de supervision.
- Le niveau Flexible prend en charge des points de terminaison webhook configurables par règle d’alerte.

## Exemple : recevoir une alerte

1. L’utilisateur téléverse toutes les photos de cadres et lance l’analyse.
2. Une règle détecte une reine potentiellement absente.
3. Une alerte est créée et stockée.
4. L’alerte apparaît dans l’application et est envoyée selon les canaux configurés, par exemple e-mail, SMS ou webhook.

## Notes techniques

- Architecture suggérée : un service `alerts` dédié qui stocke les alertes et expose une API GraphQL/REST.
- Les alertes sont créées par les services qui détectent les conditions métier : analyse de cadres, télémétrie, vision d’entrée, etc.
- Le service d’alertes prend en charge la livraison via e-mail, SMS, push et webhooks.

## Fonctions liées

- [📈 Stockage de télémétrie de ruche](/fr/products/web_app/pro-tier/hive-telemetry-storage/)
- [📊 Analyse de séries temporelles](/fr/products/web_app/pro-tier/timeseries-data-analytics/)
- [🦀 Comptage du varroa sur plateau de fond](/fr/products/web_app/starter-tier/hive-bottom-varroa-count/)
