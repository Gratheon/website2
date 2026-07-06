---
status: in-progress
title: 🦀 Comptage du varroa sur plateau de fond
navTitle: Varroa plateau de fond
layout: products
---

Les varroas sont des parasites qui affaiblissent les colonies d’abeilles en se nourrissant de leur hémolymphe. Le suivi régulier des populations de varroas est essentiel pour la santé des colonies. Les méthodes traditionnelles utilisent un plateau blanc ou collant placé au fond de la ruche, puis un comptage manuel des acariens tombés : une tâche longue et sujette aux erreurs.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/1ghYZX55LP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎯 Objectif

Suivre le niveau d’infestation varroa en téléversant et analysant des images du plateau de fond. L’application compte les varroas avec l’aide de l’IA, réduit le comptage manuel et fournit des tendances historiques.

### 🎭 Histoire utilisateur

- En tant qu’apiculteur,
- je veux téléverser des photos du plateau ou de la feuille collante de fond,
- afin de compter automatiquement les varroas et suivre l’infestation dans le temps,
- puis traiter au bon moment lorsque les seuils sont dépassés.

### 🚀 Bénéfices clés

- **Moins de comptage manuel** : l’IA détecte et compte les varroas sur l’image.
- **Résultats cohérents** : la vision par ordinateur peut fournir une base plus régulière qu’un comptage visuel rapide.
- **Historique** : les images versionnées avec les inspections montrent l’évolution sur plusieurs semaines ou mois.
- **Planification des traitements** : des données objectives aident à décider quand traiter.
- **Gain de temps** : téléverser une photo et obtenir un résultat sans examiner longuement tout le plateau.

### 📋 Utilisation

#### 1. Ajouter un plateau de fond à la ruche

1. Ouvrir la vue de structure de la ruche dans l’application.
2. Cliquer sur le menu d’ajout de section.
3. Sélectionner **« Ajouter un fond »**.
4. La section de plateau de fond apparaît dans la structure.

#### 2. Téléverser des images du plateau

1. Sélectionner le plateau de fond dans la structure de ruche.
2. Cliquer sur **« Téléverser une image du plateau de fond »**.
3. Choisir une photo depuis l’appareil.
4. L’image est envoyée et l’IA compte les varroas lorsqu’elle est disponible.
5. Les résultats s’affichent avec les acariens détectés.

**Conseils photo :**

- utiliser une surface blanche, collante ou en plastique ondulé ;
- éviter les reflets et les ombres fortes ;
- inclure tout le plateau dans le cadre ;
- garder l’appareil parallèle au plateau ;
- prendre les photos après des durées comparables, par exemple après 24 h ;
- retirer les gros débris lorsque c’est possible.

#### 3. Interpréter les résultats

L’application peut afficher les varroas détectés sur l’image et fournir :

- **comptage total** : nombre d’acariens détectés ;
- **scores de confiance** : fiabilité de chaque détection ;
- **comparaison historique** : tendance des comptages dans le temps.

**Seuils de traitement indicatifs :**

- **moins de 3 varroas/jour** : niveau généralement faible, continuer la surveillance ;
- **3–10 varroas/jour** : envisager un traitement et surveiller de près ;
- **plus de 10 varroas/jour** : traitement recommandé selon le contexte local.

#### 4. Suivi historique

Les images sont versionnées avec les inspections :

- créer une inspection pour figer l’état actuel ;
- comparer les comptages entre semaines ou mois ;
- vérifier si les traitements réduisent la population ;
- suivre les cycles saisonniers du varroa.

### 🔍 Statut de la fonction

**Disponible actuellement :**

- ✅ ajout d’un plateau de fond dans la structure de ruche ;
- ✅ téléversement d’images depuis téléphone ou appareil photo ;
- ✅ stockage et versionnement avec les inspections ;
- ✅ consultation des images téléversées dans la vue ruche.

**En développement :**

- 🚧 comptage automatique des varroas par IA ;
- 🚧 mise en évidence visuelle des acariens détectés ;
- 🚧 graphiques et tendances historiques ;
- 🚧 alertes de seuil de traitement ;
- 🚧 suivi de l’efficacité des traitements.

### 🚫 Ce que cette fonction ne fait pas

- Fournir un matériel physique de plateau de fond.
- Surveiller le varroa en direct sans téléversement d’image.
- Appliquer automatiquement un traitement.
- Remplacer un diagnostic vétérinaire ou les recommandations locales.

### 🔗 Fonctions liées

- [🔎 Gestion des inspections](/fr/products/web_app/hobbyist-tier/inspection-management/) : versionner les images avec les inspections.
- Journal de traitements varroa : prévu.
- Tableau de bord santé de colonie : prévu.

### 📚 En savoir plus

- [Documentation technique sur la détection varroa](/docs/web-app/features/varroa-bottom-detection/)
- [Honey Bee Health Coalition — guide varroa](https://honeybeehealthcoalition.org/varroa/)
