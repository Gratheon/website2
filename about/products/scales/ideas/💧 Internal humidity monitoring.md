## Problem

[🗃️ Poor hive ventilation](../../../problems/🗃️%20Poor%20hive%20ventilation.md)

## Suggested solution

- Create a microservice (with AGPL license) that would run on the edge device
    - use one of the standard languages - [Tech stack, conventions, environments](https://www.notion.so/Tech-stack-conventions-environments-8fdfa92805414c099f3e286cc2cc477f?pvs=21)
- Have a monitoring device inside of the hive that will send telemetry data to [Telemetry API](https://www.notion.so/Telemetry-API-5d60632841534620ba56d1bb296af98b?pvs=21) (need to sync how that API looks like)
- send data with min interval - 10 min. Could be more frequent, but not too much, as it affects the storage.
- Tie this data to [Ventilation control](https://www.notion.so/Ventilation-control-023a9bf9e44548809132c57557c2e7f4?pvs=21) feature.