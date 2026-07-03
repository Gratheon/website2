---
title: Bill of materials
sidebar_position: 6
hide_table_of_contents: false
---

This page is kept as a compatibility entry point for older links. The Entrance Observer BOM is now organized by development phase so each bill of materials matches a concrete build goal.

## Current BOM structure

| Phase | Purpose | BOM |
| --- | --- | --- |
| Phase 1 - Lab validation | Jetson Orin Nano bench setup for camera, model, telemetry, and on-demand video validation. | [Phase 1 - Lab BOM](phase-1-lab-validation/bill-of-materials.md) |
| Phase 2 - Field MVP | Weather-protected pilot unit for one real hive entrance. | [Phase 2 - Field MVP BOM](phase-2-field-mvp/bill-of-materials.md) |
| Phase 3 - Production kit | Repeatable, supportable production device or SKU family. | [Phase 3 - Production BOM](phase-3-production-kit/bill-of-materials.md) |

## Why the BOM was split

The previous single BOM described the current Jetson Orin Nano prototype. That was useful for ordering lab parts, but it mixed three different decisions:

- what a developer needs on a bench;
- what a beekeeper needs for a first outdoor pilot;
- what Gratheon needs for a repeatable production kit.

Those phases have different cost, power, enclosure, camera, networking, service, and manufacturing requirements. The phase-first structure prevents a lab convenience part, for example a touchscreen or acrylic case, from being treated as a production requirement.

## Current prototype summary

The current lab prototype still uses:

- NVIDIA Jetson Orin Nano Super Developer Kit;
- USB UVC 4K camera;
- manual varifocal CS/C lens;
- NVMe SSD for OS, logs, and clip buffering;
- WiFi or Ethernet for development;
- temporary camera mount and fixture materials.

For the detailed assessment of those parts and better alternatives, see [Component analysis and alternatives](Component%20analysis%20and%20alternatives.md). For production compute choices, see [Future production hardware alternatives](Future%20production%20hardware%20alternatives.md).