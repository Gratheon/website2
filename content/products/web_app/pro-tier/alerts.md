---
title: 🔔  Alerts
layout: products
---

We want to notify beekeeper in various cases/features. For that we need a generic way to create and list alerts. We want to store alerts in DB and display them in UI.

## User story - configuring alert channels

- User goes to settings page
- Under `Alerts`
    - sets an alert channel from the select `Alert me via: [email]`
        - Mobile phone notification (in case its a mobile-app)
        - Email
        - SMS (Twilio?)
        - Telegram bot
            - [https://telegraf.js.org/#md:introduction](https://telegraf.js.org/#md:introduction)
        - [Webhooks integration](../future-ideas/pro-tier-ideas/webhooks-integration.md)
- Under alert types, he can choose (as checkbox) which alert types he wants to receive (the list should be quite long)
    - swarming risk - [Frame side queen cup detection](../hobbyist-tier/queen-cup-detection.md)
    - hornet attacks - [Hornet attack detection](../../entrance_observer/todo/🚁%20Hornet%20attack%20detection.md)
    - queen is missing - [Queen detection](../hobbyist-tier/queen-detection.md)
    - queen is failing to lay eggs - [Frame analysis - spotty brood pattern detection](../future-ideas/pro-tier-ideas/frame-analysis-spotty-brood-pattern-detection.md)
    - drone cell ratio is too high - [Drone brood detection](../future-ideas/drone-brood-detection.md)
    - low/high temperature in the hive
    - swarming has happened
    - custom anomaly - should be tied to [Analytics with grafana](https://www.notion.so/Analytics-with-grafana-044239bdf92544a0a1ed95258d812e04?pvs=21)

## User story - receiving a queen missing alert

- User uploads all of the hive frames
- All frames are processed
- No queen is detected
    - Alert is generated
        
    - alert is shown in the header
        ![](../../../about/img/Screenshot%202024-06-20%20at%2014.40.44.png)
        
    - On click, alert popup appears
        
- Depending on alert channels, it is delivered to the user
    - For email, user receives an email that `hive X has a missing queen`
    - [ ] Good wording, links, imagery, design is needed - ask [Designer (UX / UI / Industrial)](https://www.notion.so/Designer-UX-UI-Industrial-454c89d18d7e4eeb822c54d9966bc169?pvs=21)
- Once user has acted upon this alert, user `approves an alert` effectively hiding/deleting it

## Suggested technical solution

Create new `alerts` microservice

- add new DB that it will use
- add graphql API that it will expose
    - add `createAlert` mutation
    - add `alerts` query
- service acts as a proxy. Actual alert generation should be owned by other services that contain the business logic