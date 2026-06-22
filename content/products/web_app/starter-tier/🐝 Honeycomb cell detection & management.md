---
status: complete
title: 🐝 Honeycomb cell detection & management
layout: products
---

### 🎯 Purpose
Automatically detect honeycomb cell content on uploaded frame photos and convert it into usable hive insights (brood/resources balance) for inspection and decision-making.

### 📹 Demo

<iframe width="100%" height="400" src="https://www.youtube.com/embed/T0OBHIUyxHA" title="Honeycomb cell detection and management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎭 User Story
- As a beekeeper
- I want the app to analyze frame photos and classify comb cells
- So that I can quickly understand brood pattern and food stores without manual cell counting
- And compare this across inspections over time

### 🔬 What the Web-App Actually Does
Based on the current app architecture and services:
- Frame photo upload triggers background AI jobs (including `detect_cells`)
- Cell detections are stored per frame side and linked with inspection context
- The app keeps both raw detections and summary percentages
- Detection summary includes key resource/brood categories used in UI and analytics:
  - brood
  - capped brood
  - drone brood
  - eggs
  - pollen
  - nectar
  - honey
  - empty/other classes (model-dependent)

### 🚀 Key Benefits
- **Fast frame interpretation**: Replace manual visual estimation with automatic detection
- **Consistent structure**: Every frame side gets comparable resource/brood metrics
- **Inspection continuity**: Results stay tied to inspection snapshots for historical comparison
- **Action support**: Helps with decisions like feeding, split planning, or closer follow-up

### 🧭 Typical Workflow
1. Upload frame photos from hive/frame view
2. Wait for AI processing to complete
3. Open frame side and review detections/percentages
4. Create inspection snapshots to preserve state over time
5. Compare older vs current inspection resource patterns

### 🔗 Related Features
- [🖼️ Frame Side Management](../free-tier/🖼️%20Frame%20side%20management.md)
- [🔎 Inspection management](🔎%20Inspection%20management.md)
- [🐝 Count bees](../hobbyist-tier/🐝%20Count%20bees.md)
