## Problem

Hives without good ventilation tend to get high humidity, mold and colony collapse

At hot 🔅weather, bees tend to do ventilating themselves and waste some bee worker resources

## Suggested solution

- Related to [Hive heating](🔥%20Hive%20heating.md) feature, we could keep hive internals at constant 32-35.5 C
- Add a fan on the bottom of the hive that would increase air flow when its too hot 🔅
- We probably should NOT run a fan if its too cold, otherwise bees can get chilled brood
- Get data from [Humidity monitoring](../../scales/ideas/💧%20Internal%20humidity%20monitoring.md)
    - Basically if relative humidity is > 90%, turn on the fan
    - Allow user to set min humidity level at which point fan should turn on
    - Allow user to set fan speed