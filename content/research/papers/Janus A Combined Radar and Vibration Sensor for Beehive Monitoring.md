---
hideNav: true
layout: research
hideToc: true
title: "Janus: A Combined Radar and Vibration Sensor for Beehive Monitoring"
description: "2021 IEEE Sensors Letters paper describing an external hive sensor that combines 24 GHz Doppler radar for bee flight activity with piezoelectric vibration sensing for swarming and robbing event monitoring."
year: "2021"
authors:
- Herbert M. Aumann
- Margery K. Aumann
- Nuri W. Emanetoglu
orgs:
- 🇺🇸 University of Maine
topics:
- iot-sensors
- audio-acoustics
- bee-behaviour
productAreas:
- monitoring-platform
- gate-tracker
paperType: journal
pdf: "/assets/research/papers/pdfs/janus-combined-radar-vibration-sensor-beehive-monitoring.pdf"
doi: 10.1109/LSENS.2021.3056870
---

[PDF](pdfs/janus-combined-radar-vibration-sensor-beehive-monitoring.pdf)

<object data={require('./pdfs/janus-combined-radar-vibration-sensor-beehive-monitoring.pdf').default} type="application/pdf" width="100%" height="800"></object>

## External links

- DOI: https://doi.org/10.1109/LSENS.2021.3056870
- [Publisher PDF](https://ieeexplore.ieee.org/ielx7/7782634/9360217/09346064.pdf)

## Abstract

Janus is a two-faced beehive monitoring sensor mounted externally near the hive entrance. Its outward-looking side is a 24 GHz continuous-wave Doppler radar for monitoring bee flying activity, while its inward-looking side is a piezoelectric transducer that captures incidental vibrations transmitted by bee activity through the hive structure. The paper reports that root-mean-square powers in concurrent radar and vibration measurements are highly correlated during honeybee swarming and robbing events. Principal component analysis using radar, vibration, and environmental measurements is applied to reduce false alarms.

## Relevancy to Gratheon

This paper is relevant to Gratheon's non-camera monitoring options because it combines entrance-adjacent traffic sensing with structural vibration sensing in one externally mounted device. Radar could address situations where optical cameras struggle with lighting, rain, or privacy constraints, while vibration offers another signal for swarm or robbing events. The sensor-fusion and false-alarm-reduction approach is directly applicable to Gratheon's alert pipeline, where noisy individual modalities need to be combined before notifying beekeepers.
