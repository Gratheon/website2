---
title: System overview
order: 0
sidebar_position: 0
hide_table_of_contents: false
---

## Purpose

This page provides the high-level system overview for the Phase 1 lab validation. It is split into a software principle diagram and a hardware wiring diagram. It is meant to be your starting point when you first open the project docs.

## Software general principle

The software architecture describes the logical flow of data from sensors to the backend.

```mermaid
flowchart TB
    subgraph SENSORS["Sensors"]
        LC[Load Cell (Weight)]
        TEMP[DS18B20 (Temperature)]
    end

    subgraph MCU["Microcontroller Firmware"]
        READ[Read Sensor Data]
        WIFI_CONN[Connect to WiFi]
        SEND[Send Telemetry]
    end

    subgraph BACKEND["Cloud"]
        TELEM[telemetry-api /iot/v1/metrics]
    end

    LC --> READ
    TEMP --> READ
    READ --> WIFI_CONN
    WIFI_CONN --> SEND
    SEND -- "HTTPS POST" --> TELEM
    
    style SENSORS fill:#e8f5e9,stroke:#2e7d32
    style MCU fill:#fff3e0,stroke:#ef6c00
    style BACKEND fill:#ede7f6,stroke:#4527a0
```

## Hardware wiring

This diagram shows the physical connections between the components. Click on the sub-components to view detailed wiring pages.

```mermaid
flowchart TB
    subgraph POWER["Power"]
        USB[USB laptop or charger] --> ESP32_PWR[ESP32 5V / 3.3V rail]
    end

    subgraph MCU["Microcontroller — ESP32 DevKit"]
        ESP32[(ESP32-WROOM-32<br/>DevKit V1)]
    end

    subgraph WEIGHT["Weight chain"]
        HX711[(HX711 ADC board)]
        LC[Test load cell<br/>50 kg bar type]
    end
    click HX711 "./wiring-diagrams/esp32-to-hx711.md" "See detailed HX711 wiring"
    click LC "./wiring-diagrams/esp32-to-hx711.md" "See detailed HX711 wiring"

    subgraph TEMP["Temperature chain"]
        DS18B20[DS18B20 waterproof probe]
        PULLUP[4.7 kOhm pull-up]
    end
    click DS18B20 "./wiring-diagrams/esp32-to-ds18b20.md" "See detailed DS18B20 wiring"

    subgraph FUTURE["Future expansion (reserved)"]
        I2C[Future humidity sensor<br/>GPIO 21 / GPIO 22]
        ADC[Future battery voltage ADC<br/>GPIO 34 / GPIO 35]
    end

    subgraph COMM["Communication"]
        SERIAL[USB Serial — debug console]
    end

    USB --> ESP32
    ESP32 -- "GPIO 17 SCK<br/>GPIO 16 DT" --> HX711
    HX711 -- "E+/E-/A+/A-" --> LC
    ESP32 -- "GPIO 4 (1-Wire)<br/>+ 4.7 kOhm pull-up to 3.3V" --> PULLUP
    PULLUP --> DS18B20
    ESP32 -- "USB serial console" --> SERIAL

    style POWER fill:#e1f5fe,stroke:#0277bd
    style MCU fill:#fff3e0,stroke:#ef6c00
    style WEIGHT fill:#e8f5e9,stroke:#2e7d32
    style TEMP fill:#fce4ec,stroke:#c2185b
    style FUTURE fill:#f3e5f5,stroke:#7b1fa2
    style COMM fill:#ede7f6,stroke:#4527a0
```
