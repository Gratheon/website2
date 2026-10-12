---
hideNav: true
layout: research
hideToc: true
title: Acoustic Honeybee Queen-State Detection Under Unseen Conditions
description: Hive- and apiary-independent evaluation of acoustic queenlessness detection, showing the generalization gap between new hives and new apiaries.
year: '2026'
authors:
- Mahsa Abdollahi
- Nico Coallier
- Maxime Fraser Franco
- Tiago H. Falk
orgs:
- INRS-EMT, Université du Québec, Montréal, Canada
- Nectar Technologies, Montréal, Canada
topics:
- audio-acoustics
- colony-health
- precision-beekeeping
productAreas:
- colony-health
- monitoring-platform
paperType: preprint
doi: 10.48550/arXiv.2609.37845
pdf: /assets/research/papers/pdfs/2026-acoustic-queen-state-unseen-conditions.pdf
abstract: This preprint benchmarks acoustic representations for detecting queen absence using 5,129 recordings from 3,285 hives across 47 apiaries, collected between October 2024 and August 2026. Task-specific convolutional networks using modulation spectrograms are compared with conventional acoustic features and pretrained audio transformers. The 2D modulation-spectrogram model obtains AUROC 0.81 and queenless-class AUPRC 0.37 on unseen hives, but only AUROC 0.63 and AUPRC 0.26 on unseen apiaries. The evaluation demonstrates both the promise of non-invasive acoustic screening and the substantial difficulty of transferring models across apiaries.
---

## Publication and access

- arXiv, version 1, posted 29 September 2026 (eess.AS). **Preprint; not peer reviewed.**
- [DOI](https://doi.org/10.48550/arXiv.2609.37845) · [Version-specific source](https://arxiv.org/abs/2609.37845v1) · [Original PDF](https://arxiv.org/pdf/2609.37845v1)
- Affiliations above are taken from the PDF, rather than inferred from author-name matching.
- License: [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), as stated on the arXiv record. The local PDF is an unmodified copy, attributed to the four authors above.

The abstract above is an editorial summary, not a verbatim author abstract.

## Relevancy to Gratheon

This is an actionable benchmark for acoustic colony-health alerts. Splitting recordings by hive is not enough: a separate apiary-held-out test exposes a much larger generalization gap. Evaluation should include precision-recall metrics for the uncommon queenless class, rather than presenting AUROC as detection accuracy.

For the 2D modulation model, queenless precision/recall changes from 0.30/0.67 on unseen hives to 0.42/0.27 on unseen apiaries at the reported operating points. These results support screening followed by beekeeper confirmation, not an autonomous diagnosis. The paper compares representations on a large operational dataset, but no public dataset or implementation release was verified in this run.
