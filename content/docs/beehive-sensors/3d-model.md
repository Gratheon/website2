---
title: 3D model
order: 3
sidebar_position: 3
hide_table_of_contents: false
---

The beehive scale is modelled in code, like the [Robotic Beehive](/products/robotic_beehive/). One parametric three.js file describes the case, the load cell, the electronics pod and the cables. The interactive viewer on the [overview page](/docs/beehive-sensors/#model) and the downloadable [beehive-scale.glb](/assets/models/beehive-scale.glb) are both generated from it.

![Beehive scale, exploded: deck, AP62AFB load cell and brackets, base pan and the electronics pod](docs/beehive-sensors/img/beehive-scale-exploded.png)

## What is modelled

| Assembly | Parts |
| --- | --- |
| Scale | Deck with skirt, hive locators and bubble level; upper and lower AP62AFB weighing brackets; single-point load cell; base pan with drain holes, overload stops, side bumpers and cable gland; levelling feet |
| Electronics pod | ASA tub and lid with gasket, 4-slot 18650 holder with 2–4 cells, carrier PCB with ESP32-S3 module, HX711, charger, fuel gauge, LoRa footprint and pogo pads; M8 sockets, vent, SHT40 radiation shield, status light |
| Field parts | Load-cell harness, DS18B20 probe on the brood-box top bars, optional solar panel on the lid |
| Context | A 2-box Estonian hive (ghost, solid or hidden), or the Robotic Beehive plinth with posts, rings and deck cross members |

Every part carries a short note (what it is, why it is there, how it is serviced), which the viewer shows on hover and the GLB stores as glTF extras. The GLB also contains an `explode` animation clip.

## Stand-alone and Robotic Beehive

The model uses the same axes and hive dimensions as `robotic-beehive/model/hive-model.js`: X across the frames, Y up, Z towards the entrance. The *Stands on → Robot* switch removes the feet and bolts the scale to the plinth cross members of the robot on the shared 400 × 300 mm hole pattern. The pod moves onto a plinth bracket.

![Beehive scale in the Robotic Beehive plinth](docs/beehive-sensors/img/beehive-scale-robotic-beehive.png)

## Build it

The source is in [Gratheon/beehive-sensors/model](https://github.com/Gratheon/beehive-sensors/tree/main/model).

```bash
cd model
npm install          # first time only
npm run build        # beehive-scale.glb + index.html (opens from disk, works offline)
npm run preview      # renders docs/preview*.png with headless Chrome
npm run website      # also updates the viewer on gratheon.com (../../gratheon.com)
```

| File | Role |
| --- | --- |
| `scale-model.js` | Parametric geometry, part notes, energy budget |
| `viewer.js`, `viewer.html`, `viewer.css` | Interactive viewer, scoped to `.beehive-scale` so it can be embedded |
| `export-glb.mjs` | Writes `beehive-scale.glb` with the exploded-view clip |
| `build-viewer.mjs` | Writes `index.html`; with `--website` it copies the bundle, CSS and GLB into gratheon.com and refreshes the `beehive-scale` embed blocks |
| `render-preview.mjs` | Product images for the README and the website |

## Parameters to confirm

The AP62AFB cell and bracket sizes come from the supplier listing (bracket ≈ 341.8 × 254.2 mm). Measure the delivered part and update `cell` and `bracket` in `DEFAULTS` before the deck and base drawings are released. The scale height, overload-stop gap and deck skirt overlap all follow from these values.

## Earlier model

The first enclosure concept was drawn in [TinkerCad](https://www.tinkercad.com/things/0fLglDYhs1M-beehive-sensors?sharecode=9HqP0yo5o4vDmhDXGG1Fs9HmlpRR_1MPQ-h9BjkWdXk).
