---
title: 🔔 Alerts
---

We want to notify beekeepers in various cases/features. This page describes alert configuration, channels and types supported in the Flexible tier, including SMS notifications and webhooks.

## Overview

Flexible tier provides a unified alert management system that supports multiple delivery channels and advanced alert types. Alerts can be configured per apiary, hive, or device and delivered via email, SMS, push/mobile, Telegram, and webhooks.

## Channels

- Email
- SMS (Twilio or similar)
- Push / Mobile app notifications
- Telegram bot
- Webhooks integration

## Configuring alert channels

- User goes to settings page
- Under `Alerts`:
  - choose preferred channels from the select `Alert me via: [email]`
  - available channels: Mobile push, Email, SMS, Telegram, Webhooks

## Alert types

Users can enable/disable alert types they are interested in. Example alert types:

- Swarming risk (tied to queen cup / frame analysis)
- Hornet attack detection
- Queen missing or failing to lay eggs
- Drone brood / abnormal drone ratio
- Low/high temperature in the hive
- Swarming detected
- Custom anomaly alerts (from timeseries analytics)

## SMS notifications

- SMS alerts are delivered using an SMS provider (for example Twilio)
- SMS alerts are intended for high-priority, short messages (e.g. queen missing, emergency temperature)
- Flexible tier customers can enable/disable SMS as an alert channel and configure phone numbers per account

## Webhooks

- Webhooks allow integrating alerts with external automation or monitoring systems
- Flexible tier supports configurable webhook endpoints per alert rule

## Receiving an alert (example)

1. User uploads all frames and runs analysis
2. A rule detects a missing queen
3. An alert is generated and stored
4. Alert appears in-app and is delivered according to the user's configured channels (email, SMS, webhook, etc.)

## Technical notes

- Suggested architecture: a dedicated alerts service that stores alerts and exposes a GraphQL/REST API
- Alerts are created by services that detect conditions (frame analysis, telemetry analytics) and forwarded to the alerts service
- Alerts service handles delivery (email, SMS, push, webhooks)


