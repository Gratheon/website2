---
title: Bill of materials
order: 2
sidebar_position: 2
hide_table_of_contents: false
---

## Description

This is the parts list for the Phase 3 production kit described in the [product description](product-description.md) and shown in the [3D model](/docs/beehive-sensors/#model). Costs are rough per-unit estimates in EUR at about 100 units, before assembly labour, VAT and shipping. Replace them with quotes before pricing the product.

| Subassembly | Estimate |
| --- | ---: |
| Scale mechanics: wood case, load cell, Observer mounting inserts, sensor port, internal harness | €82–142 |
| Electronics pod (2–4 cells) | €32–58 |
| Hive climate probe and packaging | €13–22 |
| **Total** | **≈ €127–222** |
| Spare battery cartridge | + €10–20 |

The scale has no landing board and no solar panel. With an [Entrance Observer](/docs/entrance-observer/) the Observer provides both, and powers the scale over one M12 lead (the lead ships with the Observer).

## Scale mechanics

| Part | Specification | Qty | Unit cost | Source | Notes |
| --- | --- | ---: | ---: | --- | --- |
| Load cell + brackets | AP62AFB single-point, 200 kg (350 kg option), with two aluminium weighing brackets | 1 | €30–45 | [Alibaba AP62AFB](https://www.alibaba.com/product-detail/AP62AFB-200kg-350kg-Liquid-Automatic-Quantitative_1601491747233.html) | Currently used. Verify dimensions, deflection and cable on delivery. |
| Deck | 18 mm film-faced birch plywood (anti-slip mesh face), 560 × 510 mm, CNC-cut, sealed edges, M8 threaded inserts; 40 × 20 mm thermo-pine skirt | 1 | €15–25 | Local joinery shop; plywood from Riga Wood / Metsä dealers | Film face keeps rain out of the weighed deck. |
| Base | 12 mm exterior plywood floor, 22 mm thermo-pine board walls 60 mm high, drain holes, bay cut, M10 inserts for feet and stops | 1 | €12–20 | Local joinery shop | Not weighed, so moisture does not matter. |
| Hive locators | 3D-printed ASA corner blocks, 20 mm high | 3 | €0.3–0.5 | In-house FDM printer | Screwed to the deck. |
| Sensor port | 3D-printed ASA corner block with a sealed 4-pin probe socket, flat 4-core service-loop lead through the deck to the harness | 1 | €3–5 | Printer + connector house | Replaces the fourth locator. |
| Probe groove | 3D-printed clip-in channel along the front strip of the deck | 1 | €0.3 | In-house FDM printer | |
| Overload stops | M10 × 90 stainless hex bolt, lock nut, spacer tube | 4 | €0.8 | Fastener wholesaler | Set with a feeler gauge at assembly. |
| Levelling feet | M10 × 40 stud, 40 mm rubber pad | 4 | €1.2–2 | [Amazon levelling feet search](https://www.amazon.de/s?k=M10+levelling+feet) | Removed for the Robotic Beehive. |
| Side bumpers | EPDM pad 40 × 14 × 4 mm, adhesive | 4 | €0.25 | Local rubber supplier | |
| Bracket fasteners | M8 stainless bolts, washers, thread lock | 1 set | €3–5 | Fastener wholesaler | Torque per cell datasheet. |
| Pod bay sleeve | 3D-printed ASA sleeve with guides and dock holder, fitted into the wall cut | 1 | €2–4 | In-house FDM printer | |
| Dock connector | Keyed, gasketed 12-pin board-to-board pair (e.g. Molex Micro-Fit sealed, or custom) | 1 pair | €3–5 | Mouser, DigiKey | Mates as the pod slides in. |
| Observer mounting points | M6 brass threaded inserts in the front wall | 2 | €0.3 | Fastener wholesaler | The Entrance Observer risers bolt here. |
| Accessory connector | M12 8-pin A-coded panel socket, IP67, facing down, with dust cap | 1 | €5–8 | [Mouser M12 connectors](https://www.mouser.com/c/connectors/circular-connectors/) | Entrance Observer and Robotic Beehive plug in here. |
| Internal harness | Shielded 4-core (load cell), 8-core (accessory connector), 4-core (SHT40), crimped to the dock | 1 set | €4–6 | Harness shop | Stays inside the base. |
| Ambient sensor pocket | SHT40 on a small PCB behind louvres in the left base wall | 1 | €2.5–4 | LCSC | |
| Transport lock | Captive quarter-turn M8 cam bolt, printed ASA knob, red mark on the skirt | 1 | €1–2 | Fastener wholesaler + printer | On the service side next to the pod. |

## Electronics pod

| Part | Specification | Qty | Unit cost | Source | Notes |
| --- | --- | ---: | ---: | --- | --- |
| MCU module | ESP32-S3-MINI-1-N8 | 1 | €2.8–3.5 | [LCSC](https://www.lcsc.com/), [Mouser](https://www.mouser.com/c/?q=ESP32-S3-MINI-1) | Pre-certified radio. |
| Weight ADC | HX711 (SOP-16) | 1 | €0.4 | LCSC | NAU7802 as the alternative. |
| Charger | TI BQ24074 | 1 | €1.8–2.5 | LCSC, [DigiKey](https://www.digikey.com/) | TS pin wired to the pack NTC. |
| Input selector | TI LM66200 dual ideal diode | 1 | €0.8 | LCSC, DigiKey | Accessory VIN + USB-C VBUS. |
| Display | 0.96″ OLED 128 × 64, SSD1306, I2C | 1 | €2–3 | LCSC, AliExpress | Behind a polycarbonate window. |
| Button | IP67 sealed tactile switch, 12 mm | 1 | €1–2 | Mouser (e.g. C&K, E-Switch) | |
| USB-C | 16-pin USB-C receptacle + silicone flap | 1 | €0.8 | LCSC | 5.1 kΩ CC resistors. |
| Fuel gauge | Analog Devices MAX17048 | 1 | €1.2–1.6 | LCSC, DigiKey | |
| 3.3 V buck | TI TPS62840 | 1 | €0.9 | LCSC, DigiKey | |
| Sensor load switch | TI TPS22917 | 1 | €0.3 | LCSC | |
| Tilt sensor | ST LIS2DH12 accelerometer | 1 | €0.5 | LCSC | Replaces a bubble level; tipped-hive alert. |
| Passives | — | 1 set | €1.5 | LCSC | |
| Carrier PCB + assembly | 4-layer, 72 × 62 mm, SX1262 footprint | 1 | €4–7 | [JLCPCB](https://jlcpcb.com/), [PCBWay](https://www.pcbway.com/) | Price per board at 100 units. |
| LoRa module (option) | SX1262 module, 868 MHz | 0–1 | €4–7 | LCSC, Ebyte | Fitted for the gateway SKU and the Robotic Beehive. |
| Enclosure | ASA tub, lid and face, 150 × 38 × 76 mm, silicone gasket, quarter-turn latch | 1 | €5–10 | 3D printed (pilot), injection moulded (≈ €5–9k tool) | Honey yellow. |
| Pressure vent | ePTFE membrane vent | 1 | €1.5 | [Mouser vents](https://www.mouser.com/c/?q=membrane%20vent) | |
| Battery cartridge | Keyed sled for 4 × 18650, 1S contacts, 10 kΩ NTC, grip | 1 | €3–5 | 3D printed / moulded + Keystone contacts | Slides out of the pod face. |
| 18650 cells | 2500 mAh Li-ion, low-temperature rated (e.g. Samsung 25R, Molicel P28A) | 2–4 | €2.5–4 | Authorised battery distributor | Buy matched cells from one lot. |


## Hive climate probe and packaging

| Part | Specification | Qty | Unit cost | Source | Notes |
| --- | --- | ---: | ---: | --- | --- |
| Hive climate probe | Sensirion SHT45 in a 6 mm stainless tube with a vented ePTFE tip, 1 m semi-rigid flat 4-core lead with an insertion mark, sealed 4-pin plug | 1 | €8–14 | Probe manufacturer; [Sensirion SHT45](https://sensirion.com/products/catalog/SHT45) | Goes in through the entrance. |
| Labels, manual, box | Serial and calibration label, quick-start card, flat box 600 × 550 × 160 mm | 1 set | €5–8 | Local print shop | |

## Robotic Beehive variant

Remove the feet. Add a LoRa module and a robot harness with an M12 8-pin plug: 5 V from the robot's fused logic rail, UART and WAKE to the Jetson. The pod stays in the scale's side bay.

## Factory equipment

| Item | Purpose |
| --- | --- |
| Calibration weights, 20 kg and 100 kg (M1 class) | 3-point calibration and the corner-load test. |
| USB-C test station | Flash firmware and run the board self-test through the pod's USB-C port. |
| M12 test plug | Accessory-connector loop-back test (VIN, 1-Wire, UART, WAKE). |
| Feeler gauge set | Set the overload stops. |
| Pod leak tester (vacuum decay) or dunk tank | IP67 check before shipping. |

## Selection rules before ordering

- Each critical part needs at least two acceptable suppliers or an approved substitute.
- Measure the delivered AP62AFB before releasing deck and base drawings.
- Check enclosure, connector and cable diameters together, not separately.
- Load-cell capacity must cover the hive at peak honey, a leaning beekeeper and an overload margin.
- Document battery chemistry and cell source for safe shipping (UN38.3) and service.
- Record the PCB and frame revision in telemetry metadata.

## Supplier examples to compare

These are research links, not approved suppliers:

- [Alibaba AP62AFB single-point cell with brackets](https://www.alibaba.com/product-detail/AP62AFB-200kg-350kg-Liquid-Automatic-Quantitative_1601491747233.html) (current choice)
- [Alibaba industrial load-cell scale example](https://www.alibaba.com/product-detail/Weight-Pesage-Industrial-Balanzas-Load-Cell_1600454137483.html)
- [Alibaba stainless waterproof scale example](https://www.alibaba.com/product-detail/Stainless-Steel-Waterproof-Weighing-Industrial-Scale_1600910558433.html)
- [Pilot Scale bench-scale series](http://en.pilot-scale.com/product_category/Bench-scale-series.html)
- [Alibaba X-type stainless scale example](https://www.alibaba.com/product-detail/X-Type-Electronic-Digital-Scale-Stainless_1601348321471.html)
