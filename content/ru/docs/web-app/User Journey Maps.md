---
title: Карты пользовательских путей
---

# Пользовательские пути и навигация в приложении

Эти диаграммы описывают типичные пользовательские сценарии и связи между страницами веб-приложения. Поскольку приложение охватывает несколько доменов, потоки разделены по тематическим областям.

## Основной пчеловодческий поток (пасеки и ульи)
Основной путь пользователя: список пасек, переход к отдельной пасеке, ульям и далее к корпусам и рамкам.

```mermaid
graph TD
    Dashboard["Панель / Пасеки (/)"]
    
    %% Apiary Flows
    Dashboard --> ApiaryCreate["Создать пасеку<br/>/apiaries/create"]
    Dashboard --> ApiaryView["Просмотр пасеки<br/>/apiaries/:id"]
    Dashboard --> ApiaryEdit["Редактировать пасеку<br/>/apiaries/edit/:id"]
    
    %% Hive Flows
    ApiaryView --> HiveCreate["Добавить улей<br/>/apiaries/:id/hives/add"]
    ApiaryView --> HiveView["Панель улья<br/>/apiaries/:apiaryId/hives/:hiveId"]
    
    HiveView --> HiveEdit["Редактировать улей<br/>../edit"]
    HiveView --> HiveInspections["Осмотры<br/>../inspections/"]
    HiveView --> HiveTreatments["Обработки<br/>../treatments/"]
    HiveView --> HiveMetrics["Метрики<br/>../metrics/"]
    
    %% Deep Hive Inspection
    HiveInspections --> InspectionView["Просмотр осмотра<br/>../inspections/:inspectionId"]
    InspectionView -.-> InspectionShare["Общий осмотр<br/>../share/:shareToken"]
    
    HiveView --> BoxView["Просмотр корпуса<br/>../box/:boxId"]
    BoxView --> FrameView["Просмотр рамки<br/>../frame/:frameId"]
    FrameView --> FrameSide["Сторона рамки<br/>../:frameSideId"]
    FrameSide --> CanvasEdit["Редактирование на холсте<br/>../canvas-edit"]
```

## Склад и инвентарь
Навигация для управления активами: матки, корпусные системы и другие модули.

```mermaid
graph TD
    Warehouse["Главная склада<br/>/warehouse"]
    
    Warehouse --> Queens["Матки<br/>/warehouse/queens"]
    Queens --> CreateQueen["Создать матку<br/>/warehouse/queens/create"]
    Queens --> DetectQueen["Распознать матку<br/>/warehouse/queens/detect"]
    
    Warehouse --> BoxSystems["Корпусные системы<br/>/warehouse/box-systems"]
    BoxSystems --> CreateBoxSystem["Создать систему<br/>/warehouse/box-systems/create"]
    BoxSystems --> ViewBoxSystem["Просмотр системы<br/>/warehouse/box-systems/:id"]
    
    Warehouse --> ModuleType["Другие модули<br/>/warehouse/:moduleType"]
```

## IoT-устройства и оповещения
Потоки, связанные с управлением оборудованием и настройкой оповещений.

```mermaid
graph TD
    Devices["Список устройств<br/>/devices"]
    Devices --> AddDevice["Добавить устройство<br/>/devices/add"]
    Devices --> ViewDevice["Детали устройства<br/>/devices/:id"]
    ViewDevice --> EditDevice["Редактировать устройство<br/>/devices/:id/edit"]
    
    AlertConfig["Настройка оповещений<br/>/alert-config"]
    AlertConfig --> AlertChannels["Каналы оповещений<br/>/alert-config/channels"]
    AlertConfig --> AlertRules["Правила оповещений<br/>/alert-config/rules"]
```

## Настройки и онбординг
Аутентификация, управление аккаунтом и вспомогательные функции.

```mermaid
graph TD
    %% Auth
    Auth["Вход<br/>/account/authenticate"]
    Register["Регистрация<br/>/account/register"]
    ForgotPwd["Забыли пароль<br/>/account/forgot-password"]
    ResetPwd["Сброс пароля<br/>/account/reset-password"]
    
    ForgotPwd --> ResetPwd
    Auth --> Dashboard["Панель"]
    Register --> Dashboard
    
    %% Account
    Account["Настройки аккаунта<br/>/account"]
    Account --> Billing["Оплата<br/>/account/billing"]
    Account --> Tokens["API-токены<br/>/account/tokens"]
    
    %% Tools
    Tools{"Вспомогательные инструменты"}
    Tools --> Calendar["Календарь<br/>/calendar"]
    Tools --> AIAdvisor["ИИ-советник<br/>/ai-advisor"]
    Tools --> Insights["Аналитика<br/>/insights"]
```
