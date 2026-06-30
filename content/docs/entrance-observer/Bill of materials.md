---
title: Bill of materials
sidebar_position: 6
hide_table_of_contents: false
---

This bill of materials describes the **current Jetson Orin Nano prototype** for Entrance Observer. Prices are from the component notes in this folder and are approximate retail prices, not production quotes.

## Prototype BOM

| Priority | Component | Example part | Qty | Approx. unit price | Approx. line total | Notes |
| --- | --- | --- | ---: | ---: | ---: | --- |
| Required | Edge AI computer | [NVIDIA Jetson Orin Nano Super Developer Kit](components-orin/Orin%20Nano.md) | 1 | $249.00 | $249.00 | Main compute device for capture, inference, local buffering, and uploads. NVIDIA lists this class at 67 TOPS after the Super software update. |
| Required | Camera | [MOKOSE 4K USB UVC camera](components-orin/Camera.md) | 1 | $154.50 | $154.50 | USB3 UVC camera, 4K@30 fps capable. Used because it is easy to test on Linux with GStreamer/OpenCV. |
| Required | Lens | [5-50 mm CS/C mount CCTV lens](components-orin/Camera%20lens.md) | 1 | €43.35 | €43.35 | Manual varifocal lens for tuning field of view to the hive entrance. Confirm mount compatibility with the chosen camera before ordering. |
| Required | Storage | [SanDisk 250 GB M.2 NVMe SSD](components-orin/M2%20SSD.md) | 1 | €23.88 | €23.88 | Stores OS, Docker images, logs, and temporary video clips. NVMe is recommended over relying on small built-in storage. |
| Required | Network | [Waveshare AC8265 WiFi/Bluetooth module and antennas](components-orin/WiFi%20antennas.md) | 1 | €22.92 | €22.92 | Useful when Ethernet is unavailable. Prefer Ethernet for fixed installations when possible. |
| Required | Camera mount | [Adjustable 1/4 inch camera wall mount](components-orin/Mounts.md) | 1 | $9.59 | $9.59 | Allows alignment of entrance area and tracking regions. |
| Required | Weather cover frame | [2020 aluminum extrusion pack](components-orin/2020%20Aluminum%20Extrusion.md) | 1 | €40.62 | €40.62 | Structural parts for a prototype protective frame. One pack is more than needed for one unit. |
| Required | Clear cover | [Plexiglass/acrylic sheets](components-orin/Plexiglass.md) | 1 | €8.32 | €8.32 | Protects camera/electronics from rain and debris. Test for glare and condensation. |
| Optional | Local display | [7 inch HDMI touchscreen](components-orin/Display.md) | 1 | $47.99 | $47.99 | Helpful for bench setup, not required for field deployment after SSH/remote logging is working. |
| Optional | Acrylic case | [Acrylic clear case](components-orin/Case.md) | 1 | €11.36 | €11.36 | Existing note appears to target Jetson Nano 2 GB, so treat as prototype-only unless physical fit is confirmed for Orin. |

## Estimated prototype cost

Because the current component notes mix USD and EUR, keep totals as rough planning numbers:

- Required USD items: **$413.09** (`$249.00 + $154.50 + $9.59`).
- Required EUR items: **€139.09** (`€43.35 + €23.88 + €22.92 + €40.62 + €8.32`).
- Optional bench/debug items: **$47.99 + €11.36**.

At a rough 1:1 USD/EUR planning rate, the current prototype is about **€550-600 before shipping, taxes, power supply, cables, enclosure finishing, and assembly time**.

## Items still missing from the documented BOM

Add exact part links once chosen:

- Jetson Orin Nano power supply, recommended 5 V / 4 A USB-C.
- Outdoor-rated electronics enclosure or sealed mounting box.
- Cable glands, strain relief, gaskets, and desiccant for condensation control.
- USB3 camera cable length actually used in the hive installation.
- Ethernet cable or outdoor WiFi access point if the apiary has weak signal.
- Mounting screws, brackets, and hive-specific adapter plate.
- Optional IR or visible illumination if night or low-light observations become part of the product.

## Production cost notes

The current BOM is optimized for prototype speed, not final unit cost. For production, the biggest cost-reduction levers are:

1. Replace the Jetson developer kit with either a production SOM/carrier or a cheaper Pi/Hailo class device if model performance allows it.
2. Replace the generic USB camera/lens pair with a fixed-focus camera module once the field of view is known.
3. Integrate power, network, enclosure, and mounting hardware into a repeatable assembly.
4. Reduce or eliminate optional display/local UI hardware.

See [Future production hardware alternatives](Future%20production%20hardware%20alternatives.md) for the recommended next hardware paths.
