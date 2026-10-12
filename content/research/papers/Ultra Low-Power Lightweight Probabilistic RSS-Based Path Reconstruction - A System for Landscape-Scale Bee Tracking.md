---
hideNav: true
layout: research
hideToc: true
title: 'Ultra Low-Power, Lightweight, Probabilistic RSS-Based Path Reconstruction: A System for Landscape-Scale Bee Tracking'
description: A 38 mg archival receiver and probabilistic RSS inference reconstruct bumblebee flight paths using rotating transmitters instead of GNSS.
year: '2026'
authors:
- Christopher J. Noroozi
- Joseph L. Woodgate
- Michael Mangan
- Michael T. Smith
orgs:
- University of Sheffield, UK
topics:
- iot-sensors
- pollination-monitoring
- edge-ai-energy
productAreas:
- edge-device
- monitoring-platform
paperType: preprint
doi: 10.48550/arXiv.2608.27152
abstract: This preprint presents an ultra-lightweight archival radio receiver and a probabilistic method for reconstructing movement paths from received signal strength. Rotating high-gain transmitters with a reported range of 300 m provide sparse measurements; angle-of-arrival inference and a Gaussian-process path model reconstruct movement with uncertainty estimates. The 38 mg receiver, including its power source, supports reported positional error of approximately 15 m below 180 microwatts, improving to approximately 10 m below 600 microwatts with more measurements. Ground-truthed localization experiments and Bombus terrestris nest-return flights demonstrate the approach.
---

## Publication and access

- arXiv, version 1, posted 27 August 2026. **Preprint; not peer reviewed.**
- [DOI](https://doi.org/10.48550/arXiv.2608.27152) · [Version-specific source](https://arxiv.org/abs/2608.27152v1) · [Open original PDF](https://arxiv.org/pdf/2608.27152v1)
- The PDF lists the University of Sheffield affiliation; Joseph L. Woodgate is described as formerly with its School of Computer Science.
- Access: the source PDF was downloaded and parsed successfully for verification. arXiv lists its [non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/), not a general redistribution license. **No PDF is mirrored here.**

The abstract above is an editorial summary, not a verbatim author abstract.

## Relevancy to Gratheon

This work is a concrete reference for the mass, energy and infrastructure trade-offs of landscape-scale pollinator tracking. Sparse RSS measurements and probabilistic path reconstruction offer a different design point from video, RFID passage logging or GNSS. Explicit uncertainty is useful when interpreting which foraging areas an insect may have visited.

The tag is an archival receiver, not a demonstrated live cloud tracker. Reported localization errors come from the paper's evaluation conditions and do not establish ground-truth accuracy for free-flying bees. The demonstration uses Bombus terrestris; payload tolerance and behavior effects must be re-evaluated before attempting honeybee deployment. Transmitter range is not positional accuracy, and the system requires deployed rotating transmitters.
