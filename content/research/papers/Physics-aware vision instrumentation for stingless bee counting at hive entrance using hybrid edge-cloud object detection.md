---
hideNav: true
layout: research
hideToc: true
title: Physics-aware vision instrumentation for stingless bee counting at hive entrance using hybrid edge-cloud object detection
description: Raspberry Pi 4, global-shutter imaging, YOLO11, and OC-SORT are combined with a physics-aware analysis of high-speed bee motion to improve directional hive-entrance counting.
year: '2026'
authors:
- Mohd Amri Md Yunus
- Lari Andres Sanjaya
- Celestine Hiu Shun Yi
- Shafishuhaza Sahlan
- Saharudin Saharudin
- Sudrajat Harris
- Hendri Maja Saputra
orgs:
- 🇲🇾 Universiti Teknologi Malaysia
- 🇮🇩 Universitas Negeri Jakarta
- 🇮🇩 Institut Teknologi Indonesia
- 🇮🇩 Politeknik Negeri Bandung
- 🇮🇩 National Research and Innovation Agency
topics:
- computer-vision
- bee-behaviour
- edge-ai-energy
productAreas:
- gate-tracker
- edge-device
paperType: conference
pdf: "/assets/research/papers/pdfs/epjconf-2026-02010.pdf"
doi: 10.1051/epjconf/202637702010
abstract: 'Stingless bee entrance monitoring requires a non-invasive tool to measure colony traffic without disrupting foraging. This paper presents a hybrid edge-cloud object detection and physics-aware vision framework using a Raspberry Pi 4 edge node, Sony IMX296 global-shutter camera, YOLO11 detection, and OC-SORT tracking. The analysis shows how frame rate, bee velocity, field-of-view scale, detector recall, and tracker association tolerance jointly affect counting reliability. Validation on 14 one-minute Geniotrigona thoracica entrance videos achieved 85.0% IN accuracy, 66.7% OUT accuracy, and 76.3% total counting accuracy against manual counts.'
---

## Relevancy to Gratheon

Although evaluated on stingless bees, the instrumentation and tracking constraints transfer directly to Gratheon's honey-bee gate tracker. The paper quantifies a failure mode that entrance counters often overlook: at 15 FPS, fast ingress can move a bee beyond the tracker's association distance between frames, fragmenting tracks and biasing directional counts. Its global-shutter camera choice, edge-cloud split, and explicit relationship between velocity, frame rate, field of view, and OC-SORT tolerance provide concrete guidance for camera selection, edge inference budgets, and field validation of bee traffic analytics.
