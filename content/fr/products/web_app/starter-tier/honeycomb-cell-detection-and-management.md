---
status: complete
title: 🐝 Détection et gestion des cellules de rayon
navTitle: Cellules de rayon
layout: products
---

### 🎯 Objectif

Détecter automatiquement le contenu des cellules de rayon sur les photos de cadres et transformer ces résultats en informations utiles sur la ruche : équilibre couvain/réserves, état du cadre et décisions à prendre après inspection.

### 📹 Démo

<iframe width="100%" height="400" src="https://www.youtube.com/embed/T0OBHIUyxHA" title="Honeycomb cell detection and management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎭 Histoire utilisateur

- En tant qu’apiculteur,
- je veux que l’application analyse les photos de cadres et classe les cellules,
- afin de comprendre rapidement le motif de couvain et les réserves sans compter manuellement les cellules,
- et de comparer cette information entre inspections.

### 🔬 Ce que fait réellement l’application

Selon l’architecture actuelle de Gratheon :

- le téléversement d’une photo de cadre lance des tâches IA en arrière-plan, dont `detect_cells` ;
- les détections de cellules sont enregistrées par côté de cadre et liées au contexte d’inspection ;
- l’application conserve à la fois les détections brutes et des pourcentages récapitulatifs ;
- les catégories principales utilisées dans l’interface et l’analyse peuvent inclure :
  - couvain ;
  - couvain operculé ;
  - couvain de mâles ;
  - œufs ;
  - pollen ;
  - nectar ;
  - miel ;
  - cellules vides ou autres classes selon le modèle.

### 🚀 Bénéfices clés

- **Interprétation rapide des cadres** : remplacer l’estimation visuelle manuelle par une détection cohérente.
- **Structure comparable** : chaque côté de cadre reçoit des métriques couvain/réserves exploitables.
- **Continuité des inspections** : les résultats restent liés aux instantanés d’inspection pour l’historique.
- **Aide à la décision** : soutenir les décisions de nourrissement, division, remplacement de reine ou suivi rapproché.

### 🧭 Flux typique

1. Téléverser les photos de cadres depuis la vue ruche/cadre.
2. Attendre la fin du traitement IA.
3. Ouvrir le côté de cadre et examiner les détections et pourcentages.
4. Créer des instantanés d’inspection pour préserver l’état dans le temps.
5. Comparer les inspections anciennes et récentes pour suivre les ressources et le couvain.

### 🔗 Fonctions liées

- [🖼️ Gestion des côtés de cadre](/fr/products/web_app/free-tier/frame-side-management/)
- [🔎 Gestion des inspections](/fr/products/web_app/hobbyist-tier/inspection-management/)
- [🐝 Comptage des abeilles](/products/web_app/hobbyist-tier/count-bees/)
