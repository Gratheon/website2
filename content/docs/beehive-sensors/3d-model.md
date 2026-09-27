---
title: 3D model
order: 3
sidebar_position: 3
hide_table_of_contents: false
---

The beehive scale is modelled in code, like the [Robotic Beehive](/products/robotic_beehive/). One parametric three.js file describes the case, the load cell, the electronics pod and the cables. The interactive viewer on the [overview page](/docs/beehive-sensors/#model) and the downloadable [beehive-scale.glb](/assets/models/beehive-scale.glb) are both generated from it.

![Beehive scale under a hive: pod flush in the side, climate probe from the sensor port into the entrance](docs/beehive-sensors/img/beehive-scale-installed.png)

![Beehive scale, exploded: deck, load cell and brackets, base, pod with battery cartridge](docs/beehive-sensors/img/beehive-scale-exploded.png)

## What is modelled

| Assembly | Parts |
| --- | --- |
| Scale | Film-faced plywood deck with thermo-pine skirt, printed hive locators and transport lock; upper and lower AP62AFB weighing brackets; single-point load cell; plywood and thermo-pine base with drain holes, overload stops, side bumpers, printed pod-bay sleeve, sensor louvres, Observer mounting inserts, the recessed M12 accessory connector and the internal harness; levelling feet |
| Electronics pod | ASA shell and lid, face with OLED window, button, USB-C flap and vent; slide-out battery cartridge with 2–4 cells; carrier PCB with ESP32-S3 module, HX711, charger, LoRa footprint; dock connector |
| Hive climate probe | Sensor port in the front-right hive locator, probe groove along the deck, SHT45 probe in through the entrance, and the service loop from the port down inside the skirt to the base |
| Entrance Observer | Simplified from [its own model](https://github.com/Gratheon/entrance-observer/tree/main/3d-model): wall frame on risers bolted to the scale base, porch, landing board, gable roof and camera pod, and the M12 lead to the scale |
| Context | A 2-box Estonian hive (ghost, solid or hidden), or the Robotic Beehive plinth with posts, rings and deck cross members |

Every part carries a short note (what it is, why it is there, how it is serviced), which the viewer shows on hover and the GLB stores as glTF extras. The GLB also contains an `explode` animation clip.

## Stand-alone, with the Entrance Observer and in the Robotic Beehive

The model uses the same axes and hive dimensions as `robotic-beehive/model/hive-model.js`: X across the frames, Y up, Z towards the entrance. *With Entrance Observer* bolts the Observer to the front of the base, with the same numbers the Observer model uses for the scale (deck 560 × 510 mm, stack 112 mm, feet 25 mm), so the two models agree. The *Stands on → Robot* switch removes the feet, bolts the scale to the robot's plinth cross members on the shared 400 × 300 mm hole pattern, and plugs the robot harness into the accessory connector. The pod stays in its bay.

![Entrance Observer bolted to the front of the scale base, one M12 lead to the scale](docs/beehive-sensors/img/beehive-scale-observer.png)

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
