---
hideNav: true
layout: research
hideToc: true
title: 'Label-free acoustic monitoring of honeybee swarming: An unsupervised online learning approach'
description: A simulation-evaluated acoustic swarm-warning method combining circadian baselines, Mahalanobis anomaly scores, and Bayesian online change-point detection.
year: '2026'
authors:
- Abdelmadjid Guessoum Graba
- Djoher Dalila Graba
orgs:
- 🇩🇿 Djillali Liabes University
topics:
- audio-acoustics
- bee-behaviour
- edge-ai-energy
productAreas:
- monitoring-platform
paperType: journal
doi: 10.11591/ijece.v16i5.pp2483-2493
pdf: /assets/research/papers/pdfs/2026-label-free-acoustic-swarming.pdf
abstract: >-
  This paper proposes label-free acoustic monitoring for early warning of honeybee swarming. Recursive least squares estimates a colony-specific circadian baseline, Mahalanobis distance measures deviations, and Bayesian online change-point detection accumulates evidence of a regime change. A threshold is calibrated from warmup data rather than labeled swarming recordings. In controlled simulations, the method reports 3.5 times higher precision than the strongest label-free baseline, anticipation exceeding 25 minutes, and a false alarm rate at the nominal 5 percent target. All quantitative evaluations use simulated data; robustness across real colonies, seasons, bee races, and microphone placements remains unverified.
---

## Publication and access

- International Journal of Electrical and Computer Engineering (IJECE), volume 16, issue 5, pages 2483-2493.
- **Date distinction:** the publisher and Crossref assign the issue date 1 October 2026. The complete article and PDF were already publicly accessible when checked on 24 September 2026; OpenAlex indexes a publication date of 18 September 2026. The issue date is not presented here as a past date.
- [DOI](https://doi.org/10.11591/ijece.v16i5.pp2483-2493)
- [Publisher page](https://ijece.iaescore.com/index.php/IJECE/article/view/42328)
- [Original open PDF](https://ijece.iaescore.com/index.php/IJECE/article/download/42328/18874)
- License: [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/), stated on the publisher page and in the PDF. The local PDF is an unmodified copy, attributed to Abdelmadjid Guessoum Graba and Djoher Dalila Graba and retained under that license.

The abstract above is an editorial summary of the paper.

## Relevancy to Gratheon

A per-hive circadian baseline is a useful design idea for acoustic alerts: normal daily variation should not automatically become a swarm alarm. Recursive estimators and online change-point detection also warrant consideration where edge memory and power are limited and labeled swarm events are scarce.

This is a method to test, not a field-validated early-warning capability. The synthetic evaluation does not cover real seasonal drift, microphone artifacts, interrupted pre-swarming behavior, or acoustic differences among bee races. Gratheon should require prospective recordings with independently verified swarm events and a measured false-alert burden before using the reported lead time in product claims.
