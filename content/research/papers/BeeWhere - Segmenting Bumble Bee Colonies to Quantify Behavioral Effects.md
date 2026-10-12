---
hideNav: true
layout: research
hideToc: true
title: 'BeeWhere: Segmenting Bumble Bee Colonies to Quantify Behavioral Effects'
description: AI-assisted annotation, YOLO instance segmentation and ArUco-assisted tracking for measuring bumblebee colony behavior, with public models and annotations.
year: '2026'
authors:
- Roberta Hunt
- August Easton-Calabria
- James Crall
orgs:
- University of Copenhagen, Denmark
- Lund University, Sweden
- University of Wisconsin-Madison, USA
topics:
- computer-vision
- behavior-recognition
- datasets-benchmarks
productAreas:
- hive-scanner
- monitoring-platform
paperType: preprint
doi: 10.48550/arXiv.2610.03051
pdf: /assets/research/papers/pdfs/2026-beewhere-bumblebee-colony-segmentation.pdf
abstract: BeeWhere combines AI-assisted annotation, YOLO instance segmentation and ArUco tag detections to measure behavior in crowded Bombus impatiens microcolonies. The authors annotate 483 frames with 8,443 bee instances, along with pollen balls, nest structures and chamber boundaries. Body contours support measurements of spatial occupancy, neighbor distances and proximity to nest features. Segmentation complements tag-based tracking when tags are obscured and detects untagged individuals; an exploratory pesticide-exposure experiment illustrates the behavioral analysis workflow. Source code, trained models and annotations are publicly linked.
---

## Publication and access

- arXiv, version 1, posted 2 October 2026 (cs.CV). **Preprint; not peer reviewed.**
- [DOI](https://doi.org/10.48550/arXiv.2610.03051) · [Version-specific source](https://arxiv.org/abs/2610.03051v1) · [Original PDF](https://arxiv.org/pdf/2610.03051v1)
- Roberta Hunt and August Easton-Calabria are marked as equal contributors in the PDF.
- License: [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/), confirmed on the arXiv record. The local PDF is an unmodified copy attributed to the authors above.

The abstract above is an editorial summary, not a verbatim author abstract.

## Code and data

- [Bumblebox annotation workflow](https://github.com/robertahunt/bumblebox_annotator)
- [BeeWhere models and annotations](https://doi.org/10.5281/zenodo.21870158), CC BY 4.0 according to the Zenodo record. Check individual software licensing before reuse; public repository access alone is not a software license.

## Relevancy to Gratheon

The annotation workflow and combination of body masks with readable tags are reusable methods for dense-colony video analysis. Unlike a tag-only detector, segmentation can represent body extent and detect bees whose identity is temporarily unavailable. The released annotations and models make the approach suitable for reproducible comparisons.

The experiments concern bumblebees in laboratory microcolonies, not honeybees at a field hive entrance. More detections do not imply reliable long-term identity: the paper reports identity switches and false identifications. Transfer to Apis mellifera, comb imagery or outdoor cameras needs independent validation. Section 3.1 describes video-level splits but also same-video frame spacing for segmentation; inspect the released split definitions before treating all results as video-disjoint. The pesticide analysis is exploratory, not a validated colony-health diagnostic.
