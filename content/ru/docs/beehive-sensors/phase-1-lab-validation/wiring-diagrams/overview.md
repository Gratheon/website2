---
title: Обзорная схема подключения системы
order: 0
sidebar_position: 0
hide_table_of_contents: false
---

## Назначение

Эта страница показывает всю лабораторную систему Этапа 1 как единую wiring picture. Она должна быть стартовой точкой, когда вы впервые открываете project docs - остальные страницы возвращаются сюда.

## Полная схема подключения

```mermaid
flowchart TB
    subgraph POWER["Power"]
        USB[USB laptop или charger] --> ESP32_PWR[ESP32 5V / 3.3V rail]
    end

    subgraph MCU["Microcontroller - ESP32 DevKit"]
        ESP32[(ESP32-WROOM-32<br/>DevKit V1)]
    end

    subgraph WEIGHT["Weight chain"]
        HX711[(HX711 ADC board)]
        LC[Test load cell<br/>50 kg bar type]
    end

    subgraph TEMP["Temperature chain"]
        DS18B20[DS18B20 waterproof probe]
        PULLUP[4.7 kOhm pull-up]
    end

    subgraph FUTURE["Future expansion (reserved)"]
        I2C[Future humidity sensor<br/>GPIO 21 / GPIO 22]
        ADC[Future battery voltage ADC<br/>GPIO 34 / GPIO 35]
    end

    subgraph COMM["Communication"]
        WIFI[Wifi - WiFi to internet]
        TELEM[telemetry-api /iot/v1/metrics]
        SERIAL[USB Serial - debug console]
    end

    USB --> ESP32
    ESP32 -- "GPIO 17 SCK<br/>GPIO 16 DT" --> HX711
    HX711 -- "E+/E-/A+/A-" --> LC
    ESP32 -- "GPIO 4 (1-Wire)<br/>+ 4.7 kOhm pull-up to 3.3V" --> PULLUP
    PULLUP --> DS18B20
    ESP32 -- "HTTPS over WiFi" --> TELEM
    ESP32 -- "USB serial console" --> SERIAL

    style POWER fill:#e1f5fe,stroke:#0277bd
    style MCU fill:#fff3e0,stroke:#ef6c00
    style WEIGHT fill:#e8f5e9,stroke:#2e7d32
    style TEMP fill:#fce4ec,stroke:#c2185b
    style FUTURE fill:#f3e5f5,stroke:#7b1fa2
    style COMM fill:#ede7f6,stroke:#4527a0
```
