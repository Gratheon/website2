---
hideNav: true
layout: research
hideToc: true
title: "An AI-Based Digital Scanner for Varroa destructor Detection in Beekeeping"
description: "AI-based digital portable scanner (BeeVS) coupled with a neural network to detect and count Varroa destructor mites on sticky boards with R² ≥ 0.998 repeatability."
year: "2025"
orgs:
  - 🇮🇹 Council for Agricultural Research and Economics (CREA) – Research Centre for Engineering and Agro-Food Processing, Monterotondo
  - 🇮🇹 Council for Agricultural Research and Economics (CREA) – Research Centre for Agriculture and Environment, Bologna
  - 🇷🇸 University of Novi Sad
topics:
  - varroa-health
  - computer-vision
productAreas:
  - hive-scanner
  - colony-health
paperType: journal
---

[PDF](pdfs/An AI-Based Digital Scanner for Varroa destructor Detection in Beekeeping.pdf)

<object data={require('./pdfs/An AI-Based Digital Scanner for Varroa destructor Detection in Beekeeping.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.3390/insects16010075
- [Full text (MDPI Insects)](https://www.mdpi.com/2075-4450/16/1/75)

## Abstract

Beekeeping is a crucial agricultural practice that significantly enhances environmental health and food production through effective pollination by honey bees. However, honey bees face numerous threats, including exotic parasites, large-scale transportation, and common agricultural practices that may increase the risk of parasite and pathogen transmission. A major threat is the *Varroa destructor* mite, which feeds on honey bee fat bodies and transmits viruses, leading to significant colony losses. Detecting the parasite and defining the intervention thresholds for effective treatment is a difficult and time-consuming task; different detection methods exist, but they are mainly based on human eye observations, resulting in low accuracy. This study introduces a digital portable scanner coupled with an AI algorithm (BeeVS) used to detect *Varroa* mites. The device works through image analysis of a sticky sheet previously placed under the beehive for some days, intercepting the *Varroa* mites that naturally fall. In this study, the scanner was tested for 17 weeks, receiving sheets from 5 beehives every week, and checking the accuracy, reliability, and speed of the method compared to conventional human visual inspection. The results highlighted the high repeatability of the measurements (R² ≥ 0.998) and the high accuracy of the BeeVS device; when at least 10 mites per sheet were present, the device showed a cumulative percentage error below 1%, compared to approximately 20% for human visual observation. Given its repeatability and reliability, the device can be considered a valid tool for beekeepers and scientists, offering the opportunity to monitor many beehives in a short time, unlike visual counting, which is done on a sample basis.

## Relevancy to Gratheon

The BeeVS portable scanner validated in this paper directly maps to Gratheon's hive-scanner product concept: a dedicated device that images sticky boards and uses an AI algorithm to count mites automatically, replacing time-consuming and error-prone human visual inspection. The R² ≥ 0.998 repeatability and <1% error rate at ≥10 mites per sheet set a concrete accuracy benchmark for Gratheon's own scanner iteration. The sticky-board workflow is compatible with any hive type and requires no hive disturbance, aligning with Gratheon's non-invasive monitoring philosophy. The study's 17-week, 5-hive longitudinal validation protocol also provides a reusable field-testing template for Gratheon's own hardware trials.
