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
| Scale mechanics | €90–135 |
| Electronics pod (2–4 cells) | €37–66 |
| Field harnesses and accessories | €13–20 |
| **Total, without solar** | **≈ €140–220** |
| Solar option (1 W panel + lead) | + €8–12 |

## Scale mechanics

| Part | Specification | Qty | Unit cost | Source | Notes |
| --- | --- | ---: | ---: | --- | --- |
| Load cell + brackets | AP62AFB single-point, 200 kg (350 kg option), with two aluminium weighing brackets | 1 | €30–45 | [Alibaba AP62AFB](https://www.alibaba.com/product-detail/AP62AFB-200kg-350kg-Liquid-Automatic-Quantitative_1601491747233.html) | Currently used. Verify dimensions, deflection and cable on delivery. |
| Deck | 3 mm 5052 aluminium, 540 × 490 mm, 45 mm skirt, laser cut, bent, clear anodised | 1 | €22–35 | Local sheet-metal shop, [JLCCNC](https://jlccnc.com/), [Xometry](https://www.xometry.eu/) | Anti-slip ribs pressed, bubble-level hole in the front skirt. |
| Base pan | 2.5 mm 5052 aluminium, 524 × 474 × 60 mm, powder coated, 4 drain holes | 1 | €18–28 | Same as the deck | Dock rails riveted to the back wall. |
| Hive locators | 40 × 40 × 3 mm aluminium angle, 25 mm high | 4 | €0.5–1 | Cut from extrusion | Riveted to the deck. |
| Overload stops | M10 × 90 stainless hex bolt, lock nut, spacer tube | 4 | €0.8 | Fastener wholesaler | Set with a feeler gauge at assembly. |
| Levelling feet | M10 × 40 stud, 40 mm rubber pad | 4 | €1.2–2 | [Amazon levelling feet search](https://www.amazon.de/s?k=M10+levelling+feet) | Removed for the Robotic Beehive. |
| Side bumpers | EPDM pad 40 × 14 × 4 mm, adhesive | 4 | €0.25 | Local rubber supplier | |
| Bracket fasteners | M8 stainless bolts, washers, thread lock | 1 set | €3–5 | Fastener wholesaler | Torque per cell datasheet. |
| Cable gland | M12 × 1.5 IP68, 3–6.5 mm | 1 | €1 | [Mouser cable glands](https://www.mouser.com/c/connectors/cable-glands/) | Load-cell lead exit. |
| Bubble level | 18 mm round vial | 1 | €1 | AliExpress, Amazon | Pressed into the skirt. |
| Pod dock | Aluminium rails + spring latch + M4 locking screw | 1 set | €3 | Sheet-metal shop | |

## Electronics pod

| Part | Specification | Qty | Unit cost | Source | Notes |
| --- | --- | ---: | ---: | --- | --- |
| MCU module | ESP32-S3-MINI-1-N8 | 1 | €2.8–3.5 | [LCSC](https://www.lcsc.com/), [Mouser](https://www.mouser.com/c/?q=ESP32-S3-MINI-1) | Pre-certified radio. |
| Weight ADC | HX711 (SOP-16) | 1 | €0.4 | LCSC | NAU7802 as the alternative. |
| Charger | TI BQ24074 | 1 | €1.8–2.5 | LCSC, [DigiKey](https://www.digikey.com/) | TS pin wired to the pack NTC. |
| Fuel gauge | Analog Devices MAX17048 | 1 | €1.2–1.6 | LCSC, DigiKey | |
| 3.3 V buck | TI TPS62840 | 1 | €0.9 | LCSC, DigiKey | |
| Sensor load switch | TI TPS22917 | 1 | €0.3 | LCSC | |
| Passives, reed switch, LED, light pipe | — | 1 set | €2 | LCSC | |
| Carrier PCB + assembly | 4-layer, 68 × 82 mm, pogo pads, SX1262 footprint | 1 | €4–7 | [JLCPCB](https://jlcpcb.com/), [PCBWay](https://www.pcbway.com/) | Price per board at 100 units. |
| LoRa module (option) | SX1262 module, 868 MHz | 0–1 | €4–7 | LCSC, Ebyte | Fitted for the gateway SKU and the Robotic Beehive. |
| Enclosure | ASA tub + lid, 150 × 38 × 90 mm, silicone gasket | 1 | €4–9 | 3D printed (pilot), injection moulded (≈ €4–8k tool) | Honey yellow. |
| Pressure vent | ePTFE membrane vent | 1 | €1.5 | [Mouser vents](https://www.mouser.com/c/?q=membrane%20vent) | |
| Battery holder | 4-slot 18650 holder, 1S, with 10 kΩ NTC | 1 | €1.5 | LCSC, Keystone | Keyed. |
| 18650 cells | 2500 mAh Li-ion, low-temperature rated (e.g. Samsung 25R, Molicel P28A) | 2–4 | €2.5–4 | Authorised battery distributor | Buy matched cells from one lot. |
| M8 panel sockets | A-coded, IP67: 1 × 4-pin, 2 × 3-pin | 3 | €3–5 | [Mouser M8 connectors](https://www.mouser.com/c/connectors/circular-connectors/) | Load cell, probe, solar. |
| Ambient sensor | Sensirion SHT40 on a flex tail + printed radiation shield | 1 | €2.5–4 | LCSC, [Adafruit SHT40](https://www.adafruit.com/product/4885) | |

## Field harnesses and accessories

| Part | Specification | Qty | Unit cost | Source | Notes |
| --- | --- | ---: | ---: | --- | --- |
| Load-cell harness | Shielded 4-core PUR, 0.8 m, overmoulded M8 4-pin plug | 1 | €4–6 | Connector house | Labelled by M8 pin, not by wire colour. |
| Hive probe | Stainless DS18B20, 1.5 m 2.5 mm flat cable, M8 3-pin plug | 1 | €5–8 | Probe manufacturer, [Adafruit waterproof DS18B20](https://www.adafruit.com/product/381) for pilots | Flat cable passes the box seam. |
| Setup magnet | Neodymium disc on a lanyard | 1 | €0.3 | | Wakes the pod into BLE setup. |
| Labels, manual, box | Serial and calibration label, quick-start card | 1 set | €4–6 | Local print shop | |
| Solar panel (option) | 1 W 6 V, 200 × 130 mm, lid clip, M8 3-pin lead | 0–1 | €8–12 | [Adafruit 6 V panels](https://www.adafruit.com/category/67), local solar supplier | Not used in the Robotic Beehive. |

## Robotic Beehive variant

Remove the feet, the pod dock latch and the solar panel. Add a LoRa module, a plinth bracket for the pod, a 5 V lead with an M8 3-pin plug from the robot's fused logic rail, and a UART cable to the Jetson header. See [Robotic Beehive integration](product-description.md#robotic-beehive-integration).

## Factory equipment

| Item | Purpose |
| --- | --- |
| Calibration weights, 20 kg and 100 kg (M1 class) | 3-point calibration and the corner-load test. |
| Pogo-pin flashing jig | Flash firmware and run the board self-test over USB. |
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
