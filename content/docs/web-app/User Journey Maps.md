---
title: User Journey Maps
---

# User Journey & Application Flow

These diagrams map out the typical user journeys and page connectivity in the web application. Because the application encompasses multiple domains, the flows are split into thematic areas.

## Core Beekeeping Flow (Apiaries & Hives)
This maps the main user journey of navigating their apiary list, drilling down into individual apiaries, hives, and ultimately to box and frame-level details.

```mermaid
graph TD
    Dashboard["Dashboard / Apiaries (/)"]
    
    %% Apiary Flows
    Dashboard --> ApiaryCreate["Create Apiary<br/>/apiaries/create"]
    Dashboard --> ApiaryView["Apiary View<br/>/apiaries/:id"]
    Dashboard --> ApiaryEdit["Edit Apiary<br/>/apiaries/edit/:id"]
    
    %% Hive Flows
    ApiaryView --> HiveCreate["Add Hive<br/>/apiaries/:id/hives/add"]
    ApiaryView --> HiveView["Hive Dashboard<br/>/apiaries/:apiaryId/hives/:hiveId"]
    
    HiveView --> HiveEdit["Edit Hive<br/>../edit"]
    HiveView --> HiveInspections["Inspections<br/>../inspections/"]
    HiveView --> HiveTreatments["Treatments<br/>../treatments/"]
    HiveView --> HiveMetrics["Metrics<br/>../metrics/"]
    
    %% Deep Hive Inspection
    HiveInspections --> InspectionView["View Inspection<br/>../inspections/:inspectionId"]
    InspectionView -.-> InspectionShare["Shared Inspection<br/>../share/:shareToken"]
    
    HiveView --> BoxView["Box View<br/>../box/:boxId"]
    BoxView --> FrameView["Frame View<br/>../frame/:frameId"]
    FrameView --> FrameSide["Frame Side<br/>../:frameSideId"]
    FrameSide --> CanvasEdit["Canvas Edit<br/>../canvas-edit"]
```

## Inventory & Warehouse
Navigation mapping for managing assets like queens and box systems.

```mermaid
graph TD
    Warehouse["Warehouse Home<br/>/warehouse"]
    
    Warehouse --> Queens["Queens<br/>/warehouse/queens"]
    Queens --> CreateQueen["Create Queen<br/>/warehouse/queens/create"]
    Queens --> DetectQueen["Detect Queen<br/>/warehouse/queens/detect"]
    
    Warehouse --> BoxSystems["Box Systems<br/>/warehouse/box-systems"]
    BoxSystems --> CreateBoxSystem["Create System<br/>/warehouse/box-systems/create"]
    BoxSystems --> ViewBoxSystem["View System<br/>/warehouse/box-systems/:id"]
    
    Warehouse --> ModuleType["Other Modules<br/>/warehouse/:moduleType"]
```

## IoT Devices & Alerting
Flows related to hardware device management and alerting configurations.

```mermaid
graph TD
    Devices["Devices List<br/>/devices"]
    Devices --> AddDevice["Add Device<br/>/devices/add"]
    Devices --> ViewDevice["Device Details<br/>/devices/:id"]
    ViewDevice --> EditDevice["Edit Device<br/>/devices/:id/edit"]
    
    AlertConfig["Alert Config<br/>/alert-config"]
    AlertConfig --> AlertChannels["Alert Channels<br/>/alert-config/channels"]
    AlertConfig --> AlertRules["Alert Rules<br/>/alert-config/rules"]
```

## Settings & Onboarding
User authentication, basic account management, and auxiliary features.

```mermaid
graph TD
    %% Auth
    Auth["Authenticate (Login)<br/>/account/authenticate"]
    Register["Register<br/>/account/register"]
    ForgotPwd["Forgot Password<br/>/account/forgot-password"]
    ResetPwd["Reset Password<br/>/account/reset-password"]
    
    ForgotPwd --> ResetPwd
    Auth --> Dashboard["Dashboard"]
    Register --> Dashboard
    
    %% Account
    Account["Account Settings<br/>/account"]
    Account --> Billing["Billing<br/>/account/billing"]
    Account --> Tokens["API Tokens<br/>/account/tokens"]
    
    %% Tools
    Tools{"Auxiliary Tools"}
    Tools --> Calendar["Calendar<br/>/calendar"]
    Tools --> AIAdvisor["AI Advisor<br/>/ai-advisor"]
    Tools --> Insights["Insights<br/>/insights"]
```
