---
title: Phase 1 - Lab validation
navTitle: Phase 1 - Lab
order: 1
sidebar_position: 1
hide_table_of_contents: false
---

Phase 1 is the bench and indoor-window prototype. It is intentionally built around developer speed rather than outdoor reliability. The purpose is to prove that the camera, edge model, counting logic, telemetry upload, and on-demand video control plane work before the design is hardened for an apiary.

## Pages in this phase

- [Product description](product-description.md) - scope, architecture, setup rules, and exit criteria.
- [Bill of materials](bill-of-materials.md) - parts to buy or reuse for the lab build.

## Phase outcome

A developer can run `entrance-observer` on Jetson Orin Nano, capture repeatable entrance-like video, detect and track bees or labelled test objects, upload movement telemetry to Gratheon, and start an on-demand live view through the target cloud boundary without committing to production hardware.