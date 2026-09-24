---
hideNav: true
layout: research
hideToc: true
title: Annotation Versioning and Cross-Collection Generalization in Varroa Mite Counting
description: A reproducible audit of Varroa image annotations, overlapping train-validation scenes, and failure to generalize a YOLO11n counter to a second collection.
year: '2026'
authors:
- Mehmet Aksoy
topics:
- computer-vision
- varroa-health
- datasets-benchmarks
productAreas:
- colony-health
paperType: preprint
doi: 10.5281/zenodo.22923459
pdf: /assets/research/papers/pdfs/2026-varroa-counting-annotation-audit.pdf
abstract: >-
  This preprint audits the reliability of image-based Varroa mite counting rather than proposing a new detector architecture. On 64 photographs, two annotation representations contain 807 CSV boxes and 849 XML boxes; all 42 extra XML boxes occur in the validation partition. Holding predictions fixed changes AP50 from 0.8981 to 0.9130 and mean absolute count error from 4.64 to 3.36 solely through the choice of reference annotations. Geometric and visual checks find shared scene regions in three training-validation image pairs. On a second collection with 180 crops and 8,572 annotations, the unchanged YOLO11n detector produces no detections at the prespecified confidence threshold of 0.25. The study supplies a reproducibility archive and cautions that the findings concern the evaluated checkpoint and dataset releases, not established field performance.
---

## Publication and access

- Published on Zenodo on 23 September 2026 as a preprint, version 1.0.0. **Not peer reviewed.**
- [Version-specific DOI and source record](https://doi.org/10.5281/zenodo.22923459)
- [Original PDF](https://zenodo.org/records/22923459/files/varroa-counting-audit.pdf)
- [Reproducibility archive](https://zenodo.org/records/22923459/files/varroa-counting-audit-reproducibility-v1.0.0.zip)
- [Author ORCID](https://orcid.org/0009-0007-0250-8384). No institutional affiliation is supplied in the source.
- License: [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). The local PDF is an unmodified copy of the author's deposit, attributed to Mehmet Aksoy.

The abstract above is an editorial summary of the paper.

## Relevancy to Gratheon

This is a directly actionable evaluation reference for Gratheon's Varroa image models. Dataset versions should be pinned together with annotation format, counting region, source photograph, and acquisition group. Splitting crops by filename alone is not sufficient if different files include the same board region.

The cross-collection failure is especially important: high validation AP does not establish that a mite counter will transfer to another camera, board, lighting setup, or annotation protocol. Gratheon can use the audit as a checklist for leakage checks, frozen-model transfer tests, count-error reporting, and positive-control images. The small source collection and unreviewed status mean these results should inform test design, not be treated as a general verdict on YOLO11 or all Varroa datasets.
