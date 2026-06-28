---
hideNav: true
layout: research
hideToc: true
title: Deep Edge IoT for Acoustic Detection of Queenless Beehives
description: IoT system that records beehive acoustics, converts audio to mel-spectrograms, and deploys a lightweight ML model on an Arduino Zero edge device for real-time queenless state detection.
year: '2025'
authors:
- Christos Sad
- Dimitrios Kampelopoulos
- Ioannis Sofianidis
- Dimitrios Kanelis
- Spyridon Nikolaidis
- Chrysoula Tananaki
- Kostas Siozios
orgs:
- "\U0001F1EC\U0001F1F7 Aristotle University of Thessaloniki"
topics:
- audio-acoustics
- edge-ai-energy
- iot-sensors
productAreas:
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/electronics-14-02959-v2.pdf"
doi: 10.3390/electronics14152959
abstract: Honey bees play a vital role in ecosystem stability, and the need to monitor colony health has driven the development of IoT-based systems in beekeeping, with recent studies exploring both empirical and machine learning approaches to detect and analyze key hive conditions. In this study, the authors present an IoT-based system that leverages sensors to record and analyze the acoustic signals produced within a beehive. The captured audio data is transmitted to the cloud, where it is converted into mel-spectrogram representations for analysis. Multiple data pre-processing strategies and machine learning (ML) models are explored, assessing their effectiveness in classifying queenless states. To evaluate model generalization, transfer learning (TL) techniques are applied across datasets collected from different hives. Additionally, the feature extraction process and pre-trained ML model are deployed on a deep edge IoT device (Arduino Zero). Both memory consumption and execution time are examined. The results indicate that the selected feature extraction method and ML model are sufficiently lightweight to operate within the device's memory constraints, and the execution time confirms the feasibility of real-time queenless state detection in edge-based applications.
featured: true
---

## Relevancy to Gratheon

This paper validates the edge-deployment path for acoustic queenless detection that Gratheon's colony-health monitoring targets. The mel-spectrogram + lightweight classifier approach running on an Arduino Zero demonstrates that queen-presence classification can be achieved without cloud connectivity, matching Gratheon's offline-capable edge hardware requirement. Transfer learning across different hive datasets is particularly important for Gratheon's product, which must generalize across customers' diverse hives without per-hive model retraining. The Arduino Zero memory and execution-time results also provide a hardware performance floor for assessing whether Gratheon's Raspberry Pi sensor node is appropriately sized for acoustic inference.
