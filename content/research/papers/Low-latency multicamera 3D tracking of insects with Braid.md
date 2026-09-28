---
hideNav: true
layout: research
hideToc: true
title: Low-latency multicamera 3D tracking of insects with Braid
description: Open-source protocol for calibrated, marker-free 3D tracking of flying honey bees with synchronized cameras, online background subtraction, and Kalman filtering.
year: '2026'
authors:
- Michael J. M. Harrap
- Andrew D. Straw
orgs:
- 🇩🇪 University of Freiburg
- 🇩🇪 Bernstein Center Freiburg
topics:
- computer-vision
- behavior-recognition
- robotics
productAreas:
- gate-tracker
- robotics
paperType: preprint
doi: 10.64898/2026.08.21.745392
pdf: /assets/research/papers/pdfs/2026-braid-multicamera-insect-tracking.pdf
abstract: >-
  This protocol describes Braid, open-source software for live, marker-free 3D tracking of insects using multiple synchronized cameras. Per-camera background subtraction supplies two-dimensional detections, which are combined with camera calibration, Kalman filtering, and nearest-neighbor data association to estimate trajectories online. The authors demonstrate freely flying honey bees in a flight arena and describe installation, hardware configuration, calibration, operation, and validation. They report position estimates accurate to less than one millimeter within the tested 0.3-cubic-meter volume. Online processing avoids the need to retain all raw video and supports low-latency closed-loop experiments.
---

[PDF](/assets/research/papers/pdfs/2026-braid-multicamera-insect-tracking.pdf)

<object data="/assets/research/papers/pdfs/2026-braid-multicamera-insect-tracking.pdf" type="application/pdf" width="100%" height="800"><a href="/assets/research/papers/pdfs/2026-braid-multicamera-insect-tracking.pdf">Download PDF</a></object>

## External links

- [DOI and bioRxiv record](https://doi.org/10.64898/2026.08.21.745392)
- [Version 1 and abstract](https://www.biorxiv.org/content/10.64898/2026.08.21.745392v1)
- [Original PDF, version 1](https://www.biorxiv.org/content/10.64898/2026.08.21.745392v1.full.pdf)
- [Braid and Strand Camera source code](https://github.com/strawlab/strand-braid)

## Publication and access

Posted on bioRxiv on **26 August 2026**. This entry describes version 1, a **preprint that has not been certified by peer review**.

The PDF is licensed under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). The local PDF is an unmodified copy of the authors' bioRxiv deposit, attributed to Michael J. M. Harrap and Andrew D. Straw. The paper license does not replace the software repository's own licensing terms.

## Abstract

The frontmatter abstract is an editorial summary of the downloaded paper. Braid provides a practical protocol for reconstructing insect flight in three dimensions, rather than a new bee detector trained on annotated images. Its pipeline separates per-camera detection from calibrated multi-view reconstruction and trajectory estimation. The protocol includes hardware requirements, synchronization, camera calibration, validation, and troubleshooting, with freely flying honey bees as the worked example.

The reported submillimeter positional accuracy applies to the tested flight arena and camera geometry, not arbitrary outdoor scenes. Camera synchronization, calibration, background contrast, occlusion, and associating detections across views remain deployment constraints. This is not evidence of persistent individual identification in a crowded colony.

## Relevancy to Gratheon

- **Entrance Observer:** a reproducible reference for an experimental multi-camera extension that reconstructs approach and departure trajectories instead of only counting crossings in one image plane.
- **Robotic beehive experiments:** online trajectories could support controlled bee-robot interaction and feedback, where processing delay matters and recording all raw video is expensive.
- **Validation:** use calibrated volumes and known reference positions to test spatial error separately from detection and counting accuracy. Revalidate with hive-entrance lighting, background motion, and overlapping bees before treating the arena results as product performance.
