---
hideNav: true
layout: research
hideToc: true
title: 'COMB: Common Open Modular robotic platform for Bees'
description: Compact, open-source, modular mechatronic platform for in-hive experiments within standard DNM observation-hive frames, with XY positioning, interchangeable payload modules, and embedded control architecture.
year: '2026'
authors:
- Pranav Kedia
- Marie Messerich
- Tim Landgraf
orgs:
- "\U0001F1E9\U0001F1EA University of Konstanz"
- "\U0001F1E9\U0001F1EA Freie Universität Berlin"
topics:
- robotics
- bee-behaviour
productAreas:
- robotics
paperType: preprint
pdf: "/assets/research/papers/pdfs/2604.04980v1.pdf"
abstract: 'Experimental access to real honeybee colonies requires robotic systems capable of operating within limited spatial constraints, tolerating hive-specific fouling and environmental conditions, and supporting both sensing and localized actuation without frequent hardware redesign. This paper introduces COMB, a compact, open-source, modular mechatronic platform designed for in-hive experiments within standard Deutsch-Normalmaß (DNM) observation-hive frames. The platform integrates an XY positioning system, a Movable Access Window (MAW) for sealed tool access through the hive boundary, interchangeable payload modules, and an embedded control architecture that enables repeatable trajectory execution and signal generation. The platform''s capabilities are demonstrated through three representative modules: a biomimetic dance-and-signaling payload, a close-range comb scanner, and an electromagnetic wing actuator for localized oscillatory stimulation. COMB is positioned as a reusable experimental robotics platform for controlled in-hive sensing and actuation, and as a compact, generalized successor to earlier task-specific honeybee robotic systems.'
---

## Relevancy to Gratheon

COMB's modular platform concept directly informs Gratheon's robotics product area. The XY-stage-plus-payload-module architecture is the hardware abstraction layer that Gratheon's hive-scanning robot could adopt: a single motion platform that swaps between a camera module for visual brood census, an acoustic sensor module for queenlessness detection, and future actuation payloads. The Movable Access Window design also solves the key engineering challenge of inserting sensors through the hive wall without disrupting bee traffic — a problem Gratheon faces with any embedded hive sensor. Being open-source, the COMB hardware and software design files could directly accelerate Gratheon's hardware prototyping cycle.
