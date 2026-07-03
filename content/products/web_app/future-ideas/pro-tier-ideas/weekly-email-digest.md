---
title: "📬 Weekly email digest"
---

## Why

Professional beekeepers do not always have time to open the web app every day. A weekly email digest should summarize how their bees are doing and highlight colonies that need attention.

This belongs to the Pro tier because it depends on cross-hive analytics, telemetry history, inspection history, and automated insight generation.

## Goal

Send one scheduled email per week with a concise apiary health summary, so the beekeeper can quickly decide where to inspect, feed, harvest, treat, or investigate further.

## User story

As a professional beekeeper, I want to receive a weekly email digest about my apiaries and hives, so I can understand colony changes without manually checking every dashboard.

## Digest content

The email should include:

- Overall apiary health summary for the previous 7 days
- Hives that changed significantly in weight, temperature, humidity, or entrance activity
- Colonies with new or unresolved alerts
- Hives with missing telemetry or offline devices
- Inspection reminders for colonies not checked recently
- Varroa treatment or follow-up reminders when relevant
- Best performing and worst performing hives by selected metrics
- Links back to the relevant hive, apiary, analytics, and alert pages

## Personalization

Allow the beekeeper to configure:

- Delivery day and time
- Email recipient list
- Apiaries included in the digest
- Digest detail level: compact or detailed
- Whether to include charts as images
- Whether to include AI-generated recommendations

## Example email structure

1. Subject: `Weekly apiary digest: 3 hives need attention`
2. Short summary: `Most colonies look stable. Hive Blue-12 lost 4.8 kg, Hive Green-3 has low entrance activity, and 2 sensors stopped reporting.`
3. Attention list ordered by urgency
4. Apiary-level statistics
5. Hive-by-hive changes
6. Suggested actions for the coming week
7. Links to open the web app

## Acceptance criteria

- Pro users can enable or disable weekly email digest from notification settings
- Email is sent once per configured week and respects user timezone
- Digest only includes data the user has permission to access
- Digest generation handles users with many apiaries and many hives
- Email links open the correct hive, apiary, alert, or analytics view
- Failed email delivery is logged and visible to support tooling
- Users can unsubscribe from digest emails without disabling critical alerts

## Related features

- [📈 Hive telemetry storage](../../pro-tier/hive-telemetry-storage.md)
- [📊 Timeseries data analytics](../../pro-tier/timeseries-data-analytics.md)
- [⚖️ Colony comparison analytics](../../pro-tier/colony-comparison-analytics.md)
- [🔔 Alerts](../../flexible-tier/alerts.md)
- [🔔 Timeseries Anomaly detection](timeseries-anomaly-detection.md)
