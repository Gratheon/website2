## Problem

[🗃️ Poor hive ventilation](../../../about/problems/🗃️%20Poor%20hive%20ventilation.md)

## Suggested solution

- Create a microservice (with AGPL license) that would run on the edge device
    - use one of the standard languages - [Tech stack, conventions, environments](../../../docs/web-app/Tech%20stack,%20conventions,%20environments.md)
- Have a monitoring device inside of the hive that will send telemetry data to [Telemetry API](../features/📈%20Telemetry%20API.md) (need to sync how that API looks like)
- send data with min interval - 10 min. Could be more frequent, but not too much, as it affects the storage.
- Tie this data to [Ventilation control](../../robotic_beehive/ideas/🚁%20Ventilation%20control.md) feature.