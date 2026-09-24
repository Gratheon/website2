---
hideNav: true
layout: research
hideToc: true
title: Machine Vision-Based Quantification of Colony-Level Homing Adaptation in Apis mellifera Following Hive Entrance
  Displacement
description: YOLO11m and OC-SORT quantify how nine honey bee colonies adapt to a displaced hive entrance using trajectory
  endpoints.
year: '2026'
authors:
- Run Li
- Yuntao Lu
- Cunchao Li
- Jie Zhang
- Wei Wu
- Shengping Liu
orgs:
- 🇨🇳 Agricultural Information Institute, Chinese Academy of Agricultural Sciences
- 🇨🇳 Key Laboratory of Agricultural Blockchain Application, Ministry of Agriculture and Rural Affairs
topics:
- computer-vision
- bee-traffic
- behavior-recognition
productAreas:
- gate-tracker
paperType: journal
venue: Insects
publicationDate: '2026-09-10'
doi: 10.3390/insects17090944
source: https://www.mdpi.com/2075-4450/17/9/944
original: https://www.mdpi.com/2075-4450/17/9/944
pdf: /assets/research/papers/pdfs/insects-17-00944.pdf
pdfSource: https://mdpi-res.com/d_attachment/insects/insects-17-00944/article_deploy/insects-17-00944.pdf
license: CC BY 4.0
licenseUrl: https://creativecommons.org/licenses/by/4.0/
abstract: The authors combine YOLO11m detection, OC-SORT tracking and a Homing Rate metric to monitor nine honey
  bee colonies after horizontal entrance displacement. Homing Rate measures whether tracked trajectories end at
  the currently valid entrance. Six treated colonies initially showed reduced entrance-targeting accuracy, followed
  by rapid and then slower recovery over four days. A 14-day record from one colony also showed a temporary decline
  before recovery, rather than a strictly monotonic response. The system provides a non-invasive way to quantify
  colony-level reorientation from entrance video.
---

## Relevancy to Gratheon

For Gratheon's Entrance Observer, this is a concrete example of deriving a behavioral indicator from trajectories rather than reporting detection counts alone. A configurable entrance region and trajectory-endpoint classification could support monitoring after hive movement or entrance changes. The paper also supplies a YOLO11m/OC-SORT comparison point for evaluating our detector and tracker choices.

## Evidence and limitations

Homing Rate is an entrance-targeting measure, not a validated general colony-health score. The experiment covers nine colonies, including six treated colonies; only one colony has the extended 14-day record. Tracking does not preserve individual identity across video segments, so colony-level recovery cannot be equated with learning by particular bees.

## Reproducibility and provenance

The paper reports 1,003 annotated images containing 22,529 bounding boxes. Its data-availability statement points to the article and supplementary materials, with additional data available from the corresponding authors on reasonable request. A public code repository or complete openly downloadable training dataset was not verified.

The abstract field is a curator-written summary, not a verbatim quotation.

## Sources and access

- [Original publication](https://www.mdpi.com/2075-4450/17/9/944)
- [DOI](https://doi.org/10.3390/insects17090944)
- [Original full-text PDF](https://mdpi-res.com/d_attachment/insects/insects-17-00944/article_deploy/insects-17-00944.pdf)
- [License](https://creativecommons.org/licenses/by/4.0/)
- Access and metadata verified: 24 September 2026.

The publisher PDF explicitly carries CC BY attribution terms, confirmed by Crossref as CC BY 4.0. An unchanged copy is stored locally with author attribution, DOI and a license link. The PDF was checked with pdfinfo and pdftotext.
