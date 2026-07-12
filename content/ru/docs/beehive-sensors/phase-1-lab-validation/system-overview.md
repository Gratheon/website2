---
title: Обзор системы
order: 0
sidebar_position: 0
hide_table_of_contents: false
---

## Назначение

Эта страница дает высокоуровневый обзор системы для лабораторной проверки Этапа 1. Она разделена на диаграмму принципа работы ПО и схему подключения оборудования. Это стартовая точка, когда вы впервые открываете документацию проекта.

## Принцип работы ПО

Программная архитектура описывает логический поток данных от датчиков к бекенду.

```mermaid
flowchart TB
    subgraph SENSORS["Датчики"]
        LC[Load Cell (Вес)]
        TEMP[DS18B20 (Температура)]
    end

    subgraph MCU["Микроконтроллер (Прошивка)"]
        READ[Чтение данных датчиков]
        WIFI_CONN[Подключение к WiFi]
        SEND[Отправка телеметрии]
    end

    subgraph BACKEND["Облако"]
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

## Схема подключения оборудования

Эта диаграмма показывает физические соединения между компонентами. Нажмите на подкомпоненты для просмотра детальных страниц по подключению.

```mermaid
flowchart TB
    subgraph POWER["Питание"]
        USB[USB laptop или charger] --> ESP32_PWR[ESP32 5V / 3.3V rail]
    end

    subgraph MCU["Microcontroller - ESP32 DevKit"]
        ESP32[(ESP32-WROOM-32<br/>DevKit V1)]
    end

    subgraph WEIGHT["Weight chain"]
        HX711[(HX711 ADC board)]
        LC[Test load cell<br/>50 kg bar type]
    end
    click HX711 "./wiring-diagrams/esp32-to-hx711.md" "Смотреть детали подключения HX711"
    click LC "./wiring-diagrams/esp32-to-hx711.md" "Смотреть детали подключения HX711"

    subgraph TEMP["Temperature chain"]
        DS18B20[DS18B20 waterproof probe]
        PULLUP[4.7 kOhm pull-up]
    end
    click DS18B20 "./wiring-diagrams/esp32-to-ds18b20.md" "Смотреть детали подключения DS18B20"

    subgraph FUTURE["Future expansion (reserved)"]
        I2C[Future humidity sensor<br/>GPIO 21 / GPIO 22]
        ADC[Future battery voltage ADC<br/>GPIO 34 / GPIO 35]
    end

    subgraph COMM["Communication"]
        SERIAL[USB Serial - debug console]
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
