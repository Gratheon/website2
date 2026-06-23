Idea is to have hive heated from the bottom to combat varroa. For winter time this may also help in case of harsh degrees

## Suggested solution

- Create a microservice (with AGPL license) that would run on the edge device
    - use one of the standard languages - [Tech stack, conventions, environments](../../../docs/web-app/Tech%20stack,%20conventions,%20environments.md)
- Measure temperature in close-to-realtime
    - Send data to [Telemetry API](../../scales/features/📈%20Telemetry%20API.md) at least every 10 min
    - Store data in-memory
- Heating controll (probably same microservice, just different thread)
    - poll temperature
    - If temperature is too high - turn heating off
    - If its too low - turn heating on
- Min/max temperature configuration
    - Allow user to set min/max heating temperature
    - Allow user to turn off heater entirely
- Decide if [Ventilation control](🚁%20Ventilation%20control.md) feature would be a separate service or part of the same
    - keep hive internals at constant 32-35.5 C in case of too-warm