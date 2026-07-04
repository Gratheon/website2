---
title: ESP32 ↔ HX711 + load cell wiring diagram
order: 10
sidebar_position: 10
hide_table_of_contents: false
---

## Purpose

Detailed pin-by-pin wiring for the weight chain. Follow this page when you connect the HX711 board and load cell to the ESP32.

## HX711 power connections

| HX711 pin | ESP32 pin | Wire colour (typical) | Notes |
| --- | --- | --- | --- |
| VCC | 5V or 3.3V | Red | The HX711 board accepts 5 V and generates its own 3.3 V rail internally |
| GND | GND | Black | **Must share ground with ESP32** — different grounds cause ADC drift |

## HX711 digital connections (to ESP32)

These are the two GPIO lines the firmware talks to:

```mermaid
flowchart LR
    subgraph ESP["ESP32 DevKit"]
        GPIO16[GPIO 16<br/>DT — data out from HX711]
        GPIO17[GPIO 17<br/>SCK — clock to HX711]
    end

    subgraph HX711_BOARD["HX711 breakout board"]
        DT[DT pin]
        SCK[SCK pin]
    end

    ESP32 -- "GPIO 16 → DT" --> DT
    ESP32 -- "GPIO 17 → SCK" --> SCK
```

**Firmware config:** `HX711_DT_PIN = 16`, `HX711_SCK_PIN = 17`. These can be changed later but keeping them fixed makes the lab wiring consistent.

## Load cell bridge connections (to HX711)

The load cell is a Wheatstone bridge. The HX711 board labels each terminal clearly:

```mermaid
flowchart TB
    subgraph LOAD_CELL["Load cell wires"]
        E_PLUS[E+ — Excitation +]
        E_MINUS[E- — Excitation -]
        A_PLUS[A+ — Amplifier + / Signal +]
        A_MINUS[A- — Amplifier - / Signal -]
    end

    subgraph HX711_BOARD["HX711 breakout board pins"]
        TP[E+ pin]
        TN[E- pin]
        RP[A+ pin]
        RN[A- pin]
    end

    E_PLUS --- TP
    E_MINUS --- TN
    A_PLUS --- RP
    A_MINUS --- RN

    style LOAD_CELL fill:#e8f5e9,stroke:#2e7d32
    style HX711_BOARD fill:#fff3e0,stroke:#ef6c00
```

### Typical wire colours on a 4-wire load cell

| Bridge terminal | Common colour | HX711 label |
| --- | --- | --- |
| Excitation + (E+) | Red | TP or E+ |
| Excitation - (E-) | Black | TN or E- |
| Signal + (A+) | White | RP or A+ |
| Signal - (A-) | Green | RN or A- |

> **Tip:** If the readings go in the wrong direction, swap A+ and A-. The bridge polarity is the only thing that flips sign.

## Breadboard wiring tips for lab use

```mermaid
flowchart LR
    subgraph BREADBOARD["Breadboard layout"]
        ESP[(ESP32)]
        HX711[(HX711 board)]
        LC[Load cell<br/>screw terminal]
    end

    ESP -- "Dupont jumper wires" --> HX711
    HX711 -- "4-wire cable to screw block" --> LC

    style BREADBOARD fill:#fafafa,stroke:#9e9e9e,stroke-dasharray: 5 5
```

- Use short Dupont jumper wires between ESP32 and HX711 first.
- If readings jump, switch to screw-terminal blocks for both power and signal lines.
- Keep the load-cell cable away from USB power bricks or switching converters — the bridge signals are very small and noise-sensitive.
- Label each wire with masking tape: `E+`, `E-`, `A+`, `A-`, `DT`, `SCK`, `VCC`, `GND`.

## Common problems

| Symptom | Check |
| --- | --- |
| Readings jump randomly | Verify HX711 and ESP32 share the same ground |
| No readings at all | Check DT/SCK wiring; try swapping GPIO 16/17 in firmware config |
| Load cell reads negative | Swap A+ and A- wires on the load-cell terminal |
| Large offset after tare | Cable is moving or touching something — fix cable routing with a zip tie |
