---
hideNav: true
layout: research
hideToc: true
title: DeepBees – Building and Scaling Convolutional Neuronal Nets For Fast and Large-scale Visual Monitoring of Bee Hives
description: 'End-to-end system by apic.ai for scalable beehive monitoring: off-grid edge hardware at the hive gate, on-device bee tracking, cloud transfer, and a multi-task DeepBees CNN for entity-based health inference.'
year: '2019'
authors:
- Julian Marstaller
- Frederic Tausch
- Simon Stock
orgs:
- "\U0001F1E9\U0001F1EA Karlsruhe Institute of Technology"
- "\U0001F1E9\U0001F1EA apic.ai"
topics:
- computer-vision
- datasets-benchmarks
productAreas:
- gate-tracker
- hive-scanner
paperType: conference
pdf: "/assets/research/papers/pdfs/Marstaller_DeepBees_-_Building_and_Scaling_Convolutional_Neuronal_Nets_For_Fast_ICCVW_2019_paper.pdf"
abstract: 'The decline of bee populations is a global trend and a severe threat to the ecosystem and to pollinator-dependent industries. Factor analysis and preventive measures are based on snapshot information; information about the health state of a hive is infrequently acquired and remains labor-intensive and costly. In this paper, the authors describe a system that enables near-time, scalable, and cost-efficient monitoring of beehives using computer vision and deep learning. The pipeline consists of four major components: (1) off-grid hardware at the hive gate capturing in/out streams of bees; (2) on-edge inference for bee localization and tracking of single entities; (3) a cloud infrastructure for device and data management with near-time sampling; and (4) a cloud-hosted deep convolutional multi-net (DeepBees) inferring entity-based health insights from individual bee images. DeepBees uses a shared encoder with task-specific decoders for genus identification, pollen classification, pose estimation, and unsupervised representation learning. The overall system was deployed by apic.ai and monitored 49 beehives in Karlsruhe, Germany.'
featured: true
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/nHGj_u0P9F0" title="Machine Learning for Saving Bees 🐝" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/n3bvFw8p4Yk" title="Effects of a sublethal neonicotinoid dosage observed with traditional methods and apic.ai technology" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="100%" height="400" src="https://www.youtube.com/embed/2TLYuRGN2oI" title="Apic.ai - Digitalgipfel 2019" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Relevancy to Gratheon

DeepBees represents the commercial state of the art that Gratheon benchmarks against. The four-stage pipeline (edge capture → on-device detection → cloud transfer → cloud inference) is the same architecture Gratheon uses for its Entrance Observer product. The multi-task MobileNetV2-based DeepBees CNN — simultaneously covering pollen classification, genus identification, and pose estimation — demonstrates that a single lightweight backbone can cover all the individual-bee signals Gratheon wants to expose in its web app. The apic.ai deployment scale (49 hives, continuous data) also sets the operational target for Gratheon's precision-beekeeping platform.
