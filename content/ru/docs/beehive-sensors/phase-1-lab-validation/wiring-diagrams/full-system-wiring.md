---
title: Полная лабораторная проводка с pin allocation
order: 30
sidebar_position: 30
hide_table_of_contents: false
---

## Назначение

Эта страница собирает все соединения в одном месте с точными GPIO pin numbers, wire colours и breadboard layout notes. Используйте её как финальный reference перед первым включением системы.

## Полная таблица pin allocation

| Function | ESP32 pin | Wire colour | Connected to | Notes |
| --- | --- | --- | --- | --- |
| HX711 SCK (clock) | GPIO 17 | Blue | HX711 SCK pin | Firmware clock output |
| HX711 DT (data) | GPIO 16 | Orange | HX711 DT pin | Firmware data input |
| DS18B20 Data | GPIO 4 | Brown/Yellow | DS18B20 DQ + 4.7 kOhm pull-up to 3.3V | Mandatory pull-up resistor |
| DS18B20 VCC | 3.3V rail | Red | DS18B20 VDD pin | Do not use 5V |
| HX711 VCC | 5V or 3.3V | Red | HX711 VCC pin | Board accepts both |
| System GND | Any GND pin | Black | All GND pins (HX711, DS18B20, ESP32) | **Must be common ground** |
| I2C SDA (reserved) | GPIO 21 | Purple | Future humidity sensor | Do not connect anything yet |
| I2C SCL (reserved) | GPIO 22 | Grey | Future humidity sensor | Do not connect anything yet |
| Battery ADC (reserved) | GPIO 34 or 35 | White | Future voltage divider | Input-only pins, do not use for output |

## Полная wiring diagram со всеми соединениями

```mermaid
flowchart TB
    subgraph POWER["Power distribution"]
        USB[USB power<br/>5V / 2A]
        ESP_PWR[ESP32 5V pin]
        HX711_VCC[HX711 VCC]
        DS18B20_VCC[DS18B20 VCC]
    end

    subgraph MCU["ESP32 DevKit"]
        ESP32[(ESP32-WROOM-32)]
        GPIO16[GPIO 16<br/>HX711 DT]
        GPIO17[GPIO 17<br/>HX711 SCK]
        GPIO4[GPIO 4<br/>DS18B20 Data]
        GND_ESP[GND]
    end

    subgraph WEIGHT["Weight chain"]
        HX711[(HX711 ADC)]
        LC[Test load cell]
    end

    subgraph TEMP["Temperature chain"]
        R_PULLUP[4.7 kOhm<br/>pull-up resistor]
        DS18B20[DS18B20 probe]
    end

    subgraph FUTURE["Reserved for future"]
        I2C_SDA[GPIO 21 - I2C SDA<br/>(reserved)]
        I2C_SCL[GPIO 22 - I2C SCL<br/>(reserved)]
        ADC_PIN[GPIO 34/35 - ADC<br/>(reserved)]
    end

    USB --> ESP_PWR
    ESP_PWR --> HX711_VCC
    ESP_PWR --> DS18B20_VCC

    GPIO16 --- HX711
    GPIO17 --- HX711
    HX711 --- LC

    GPIO4 --- R_PULLUP
    R_PULLUP --- DS18B20

    style POWER fill:#e1f5fe,stroke:#0277bd
    style MCU fill:#fff3e0,stroke:#ef6c00
    style WEIGHT fill:#e8f5e9,stroke:#2e7d32
    style TEMP fill:#fce4ec,stroke:#c2185b
    style FUTURE fill:#f3e5f5,stroke:#7b1fa2
```

## Breadboard layout guide

```mermaid
flowchart LR
    subgraph LEFT["Left side - Power"]
        USB_RAIL[5V rail]
        GND_RAIL[GND rail]
        VCC_3V3[3.3V rail]
    end

    subgraph CENTER["Center - ESP32 + HX711"]
        ESP32_BOARD[(ESP32 DevKit)]
        HX711_BOARD[(HX711 board)]
    end

    subgraph RIGHT["Right side - Sensors"]
        LC[Load cell<br/>screw terminal]
        DS18B20_PROBE[DS18B20 probe]
        PULLUP_RES[4.7 kOhm resistor]
    end

    LEFT --- CENTER --- RIGHT

    style LEFT fill:#e1f5fe,stroke:#0277bd
    style CENTER fill:#fff3e0,stroke:#ef6c00
    style RIGHT fill:#e8f5e9,stroke:#2e7d32
```

### Рекомендуемые breadboard row assignments

| Row | Component / Connection | Notes |
| --- | --- | --- |
| Top rail (red) | 5V from ESP32 USB | Powers HX711 VCC and ESP32 5V pin |
| Bottom rail (blue) | GND common bus | All GND connections meet here |
| Row 10-11 | ESP32 DevKit mounted | Leave space around the board for wiring access |
| Row 20-21 | HX711 board mounted | Close to ESP32 for short signal wires |
| Row 30 | 4.7 kOhm resistor between row 30 and row 35 | One end to VCC rail, other to DS18B20 data |
| Row 35-36 | DS18B20 probe connector | Brown wire to GPIO 4 via row 35 |

## Pre-power checklist

Перед первым включением проверьте каждое соединение по этому списку:

- [ ] ESP32 USB cable подключен к laptop или charger
- [ ] HX711 VCC подключён к 5V или 3.3V rail
- [ ] HX711 GND имеет общую землю с ESP32
- [ ] HX711 DT (GPIO 16) и SCK (GPIO 17) wires находятся в правильных rows
- [ ] Load cell E+/E-/A+/A- wires совпадают с HX711 pin labels
- [ ] DS18B20 VCC подключён к 3.3V, **не к 5V**
- [ ] DS18B20 GND имеет общую землю с ESP32
- [ ] **4.7 kOhm pull-up resistor соединяет 3.3V rail с GPIO 4 / data line**
- [ ] Нет jumper wires, которые касаются друг друга или short adjacent pins
- [ ] Reserved pins (GPIO 21, 22, 34/35) ни к чему не подключены

## Первое включение

1. Подключите USB cable к laptop.
2. Откройте serial monitor на 115200 baud.
3. Нажмите reset button на ESP32, если serial output не стартовал автоматически.
4. Проверьте, что firmware печатает: `HX711 found`, `DS18B20 found` и initial readings.
5. Если что-то не работает, смотрите troubleshooting sections на отдельных wiring pages.
