Idea is to have hive heated from the bottom to combat varroa. For winter time this may also help in case of harsh degrees

## Suggested solution

- Create a microservice (with AGPL license) that would run on the edge device
    - use one of the standard languages - [Tech stack, conventions, environments](https://www.notion.so/Tech-stack-conventions-environments-8fdfa92805414c099f3e286cc2cc477f?pvs=21)
- Measure temperature in close-to-realtime
    - Send data to [Telemetry API](https://www.notion.so/Telemetry-API-5d60632841534620ba56d1bb296af98b?pvs=21) at least every 10 min
    - Store data in-memory
- Heating controll (probably same microservice, just different thread)
    - poll temperature
    - If temperature is too high - turn heating off
    - If its too low - turn heating on
- Min/max temperature configuration
    - Allow user to set min/max heating temperature
    - Allow user to turn off heater entirely
- Decide if [Ventilation control](https://www.notion.so/Ventilation-control-023a9bf9e44548809132c57557c2e7f4?pvs=21) feature would be a separate service or part of the same
    - keep hive internals at constant 32-35.5 C in case of too-warm