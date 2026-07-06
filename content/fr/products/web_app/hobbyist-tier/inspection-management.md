---
title: "🔎 Gestion des inspections"
navTitle: Inspections
layout: products
status: complete
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/5tYttNWfQPA" title="Beehive inspections feature" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Idée future liée : [mode inspection](/products/web_app/future-ideas/hobbyist-tier-ideas/inspection-mode/) pour un assistant terrain avec notes vocales et capture guidée des photos de cadres.

## Créer une inspection

- L’apiculteur réalise une inspection manuelle de la ruche et prend des photos.
- Une ruche existe déjà dans l’application avec ses sections, cadres et photos téléversées.
- Après un délai, par exemple deux semaines, l’apiculteur fait une nouvelle inspection et doit conserver l’ancien état.
- Il clique sur `Créer une inspection`.
  - Toutes les données de la ruche sont sauvegardées comme un instantané daté.
  - La date de l’inspection est prise depuis la date de création de la plus ancienne photo de cadre, pas forcément depuis l’heure actuelle.
  - Cela permet d’enregistrer correctement une inspection faite plusieurs jours ou semaines auparavant.
- Les photos de cadres actives sont dissociées ou nettoyées avec les objets détectés.
- Les statistiques de cellules sont remises à zéro pour permettre un nouveau téléversement de photos.
- Les cadres redeviennent vides et l’utilisateur peut ajouter les images de la nouvelle visite.
- Le message `Inspection créée` est affiché.
- Un lien vers la chronologie des inspections apparaît près du menu avec le nombre d’inspections conservées.

## Lister les inspections

- L’utilisateur ouvre la liste des inspections d’une ruche, par exemple depuis une route de l’application comme `/apiaries/7/hives/118/inspections`.
- Il voit les inspections enregistrées avec leurs dates.
- Il peut cliquer sur une inspection pour consulter les détails.

## Vue d’inspection

Dans la vue d’inspection, l’utilisateur peut examiner :

- la structure de cadres sauvegardée à ce moment ;
- les photos associées à l’inspection ;
- les statistiques de cellules et ressources détectées ;
- les comparaisons avec des inspections précédentes ou suivantes lorsque les données sont suffisantes.

## Valeur pour l’apiculteur

- Conserver une preuve visuelle de chaque visite importante.
- Éviter d’écraser les photos anciennes avant la prochaine inspection.
- Étudier l’évolution du couvain, des réserves et de la population.
- Relier les observations manuelles à la télémétrie, aux traitements, au nourrissement et aux alertes.

## Fonctions liées

- [🖼️ Gestion des côtés de cadre](/fr/products/web_app/free-tier/frame-side-management/)
- [🐝 Détection et gestion des cellules de rayon](/fr/products/web_app/starter-tier/honeycomb-cell-detection-and-management/)
