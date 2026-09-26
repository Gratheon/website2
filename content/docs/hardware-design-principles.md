---
title: 🛠️ Hardware design principles
order: 6
sidebar_position: 7
hide_table_of_contents: false
description: Shared rules for Gratheon hardware (beehive scale, Entrance Observer, Robotic Beehive) on materials, manufacturing, shipping, installation, repair and bee welfare.
---

These rules apply to every Gratheon hardware product: the [beehive scale](/docs/beehive-sensors/), the [Entrance Observer](/docs/entrance-observer/) and the [Robotic Beehive](/docs/robotic-beehive/). When a design breaks one of them, its design document says which rule, and why.

## 1. Materials: wood first, aluminium where it must be strong, plastic only where nothing else works

| Material | Use it for | Rules |
| --- | --- | --- |
| **Wood** | Anything that can be wood: stands, decks, landing boards, cladding, gables, trim | Thermally modified pine or exterior birch plywood. No chemical preservatives, which harm bees; oil or water-based paint only. Local, renewable, and familiar to beekeepers and joinery shops. |
| **Aluminium** | Frames and parts that carry loads, need precision or conduct heat: wall frames, brackets, rails, extrusions, heatsinks, clips | 5052 or 6060/6063 alloys, powder-coated or anodised. It does not rust and is recycled at full value. Prefer flat sheet (laser-cut, folded) and standard extrusions to machined parts. |
| **Stainless steel** | Fasteners, pins, shafts, lead screws, springs | A2 outdoors, A4 near the coast. Nylon washers where it touches aluminium. No plain or zinc-plated steel anywhere outdoors. |
| **Plastic** | Only where wood and aluminium cannot do the job: sealed electronics housings, optical parts (windows, diffusers), wet sliding parts, camera backgrounds, small complex parts | Mono-material and marked (HDPE, ASA, PC) so it can be recycled. Prefer recycled grades. No PVC, no glued multi-material parts, no aluminium composite panel. 3D printing is for pilot batches; moulds only when volumes justify them. |
| **Rubber** | Seals, pads, flashing | EPDM. No silicone sealant as a structural joint. |

Aim for the fewest different materials and the fewest parts. Every part should be separable into its materials with a screwdriver at the end of its life.

## 2. Manufacturing: 2D processes, standard stock, any workshop

- Prefer processes any workshop can run: laser cutting, CNC routing, press-brake folding, sawing, drilling. Avoid parts that need a mould, a weld or a 5-axis machine.
- Use standard stock: sheet, boards, standard extrusion profiles cut to length, standard fasteners.
- Design sheet parts so that one folded part replaces an assembly (for example the Entrance Observer wall frame: one sheet, no joints).
- Keep the number of part variants low: the same fastener sizes throughout a product, and one tool (Torx T20) for everything a beekeeper touches.
- Parts are made close to where they are sold. Only electronics come from far away.

## 3. Shipping: flat, small, light

- Ship flat: sheet parts, boards and roofs pack flat; only the electronics pod has volume.
- The box fits a standard parcel service. Paper-based packaging, no foam.
- Nothing in the box needs special handling except the batteries. LiFePO4 is preferred: it is safer to ship and tolerates heat.

## 4. Installation: one tool, a paper template, never in the bees' way

- A beekeeper installs it alone in under 15 minutes, with a Torx T20 driver and the paper drill template in the box.
- Never block beekeeping. Nothing enters the bee space. Screws go into the bottom board, the stand or a scale where possible; if a hive body must take screws, they are few, stainless, reachable in seconds with the same driver, and sheltered from rain, so a body can always be lifted off with one tool.
- Weather-tight by design: no cable in the sun, rain or camera view; every cable enters from below with a drip loop. Water that runs down the hive wall is led onto a roof or away, never behind a part or into the entrance (EPDM flashing where a part meets the hive).
- Removable in seconds for winter, inspection or repair: parts hang on hooks and are held by captive screws, and land in the same place every time.

## 5. Maintenance and repair: every part replaceable

- Every part can be removed with standard fasteners: no glue between different materials, no rivets you cannot drill out, no snap-fits that break when opened.
- Electronics are modules that slide out (compute sleds, pods, camera modules, drive units) and can be swapped in the field or upgraded without replacing the housing.
- Spare parts, CAD and firmware are open source and documented. The 3D models in the repositories are the source of truth for dimensions.
- Wear parts (inserts, seals, pads, batteries) are cheap and designed to be changed by the owner.

## 6. Long life and low footprint

- Designed for ten or more years outdoors; the electronics can be upgraded inside the same housing.
- Low energy: an always-on microcontroller supervises and wakes the power-hungry parts only when they are needed. Solar where it covers the real energy budget, measured rather than promised.
- Nothing is disposable: no single-use batteries, no consumables that must be bought from Gratheon.

## 7. Bees first

- No moving machinery in the bee space; anything that moves near bees moves slowly, has a soft edge and a current limit, and stops when a bee is in the way.
- Everything fails safe for the colony: gates and doors fail open, a lost power supply never traps bees or drops a load.
- No chemicals, no vibration the bees can feel, no light at night.
- Colours and patterns near the entrance help bees find their own hive (blue, yellow, white; bees see red as black).

## How each product applies them

| Principle | Beehive scale | Entrance Observer | Robotic Beehive |
| --- | --- | --- | --- |
| Wood first | Birch plywood deck, thermo-pine base and skirt | Thermo-pine landing board and front gable | Thermo-pine cladding, charred-wood skirt, wood-fibre insulation |
| Aluminium where strong | Cast aluminium load-cell brackets, rails | One folded 5052 sheet wall frame, standard beam extrusion, one pod extrusion, upright covers | Aluminium extrusion skeleton and beams |
| Plastic only where needed | ASA pod shell, bay sleeve, small printed parts | HDPE porch and camera background insert, opal PC roof (diffuser), ASA brick decks and pod end caps | PC viewing window, ASA antenna fin, printed brackets |
| Stainless fasteners | Yes | Yes (A2, Torx T20) | Yes, with nylon washers on aluminium |
| Never block beekeeping | Hive sits on the deck; nothing attached to the hive | Frame screwed to the bottom board, plus two top screws under the roof into the first body: lift off the head and undo two screws to lift it | Robot lifts the boxes itself; hand beekeeping when the forks fold away |
| Water led away | Skirt labyrinth, drain holes | Roof flashing and wall seal, cables from below | Double roof with flashing, drip edges |
| Swappable electronics | Pod slides out | Compute sled, camera module and gate drive swap | Crown bay modules |
| Fails safe | Transport lock warns | Gate fails open on power loss | Self-locking lead screws, interlocked door |

Known deviations, to fix before production:

- **Beehive scale:** most small parts are 3D-printed ASA for the pilot batch; the hive locators and louvres could be wood or folded aluminium.
- **Robotic Beehive:** the stainless box cleats and frame pins are extra metal in every box; worth testing hardwood cleats.
- **Entrance Observer:** the porch is HDPE because it is part of the camera background and has a gate sliding through it; a thermo-pine porch with an HDPE top is worth testing.
