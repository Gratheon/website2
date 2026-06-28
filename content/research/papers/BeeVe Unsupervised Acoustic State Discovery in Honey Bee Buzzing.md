---
hideNav: true
layout: research
hideToc: true
title: 'BeeVe: Unsupervised Acoustic State Discovery in Honey Bee Buzzing'
description: Discovering structure in biological signals without supervision is a fundamental problem in computational intelligence, yet existing bioacoustic methods assume vocal production models or predefined semantic units, leaving.
year: '2026'
authors:
- Hamze Hammami
- Nidhal Abdulaziz
orgs:
- "\U0001F1FA\U0001F1F3 arXiv author-supplied preprint by Hamze Hammami and Nidhal Abdulaziz"
topics:
- audio-acoustics
- bee-behaviour
productAreas:
- colony-health
- monitoring-platform
paperType: preprint
pdf: "/assets/research/papers/pdfs/2605.07903v1.pdf"
doi: 10.48550/arXiv.2605.07903
abstract: 'Discovering structure in biological signals without supervision is a fundamental problem in computational intelligence, yet existing bioacoustic methods assume vocal production models or predefined semantic units, leaving non-vocal species poorly served. Honey bees are a compelling instance of this gap: their collective buzzing arises from mechanical muscle vibrations rather than any communicative vocal apparatus, and while evidence suggests these vibrations reflect colony physiological state, no existing vocal framework applies. This work introduces BeeVe, an unsupervised framework for acoustic state discovery in collective honey bee buzzing. BeeVe uses the self-supervised Patchout Spectrogram Transformer (PaSST) as a frozen feature extractor to produce general acoustic embeddings, then trains a Vector-Quantized Variational Autoencoder (VQ-VAE) entirely without labels on those embeddings, learning a finite discrete codebook of acoustic tokens directly from unlabelled hive audio. All learning applied to bee audio is unsupervised: no labels, pretext tasks, or contrastive objectives are used at any.'
---

## Relevancy to Gratheon

This paper is relevant to Gratheon because it informs entrance and behavior analytics in the Gratheon web app, colony-health diagnostics and Varroa/queen-state alerting, sensor hardware, telemetry pipelines, and monitoring dashboards, audio-acoustic monitoring models for remote hive status detection. Its methods and findings can be translated into product requirements for reliable field deployments: what should be sensed, how signals should be interpreted, and which uncertainty or validation limits need to be surfaced to beekeepers. For Gratheon, the work is most useful as an evidence-backed design reference for connecting local hive observations with actionable recommendations in the web app while keeping hardware practical for remote apiaries.
