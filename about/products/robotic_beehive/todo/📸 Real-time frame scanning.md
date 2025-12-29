---
status: idea
---


## Precondition

- User has configured a hive to be connected to a robotic hive device

## Suggested solution

- User opens a hive and a specific frame
- Clicks `Scan frame` button
    - A command is stored in backend in mysql table
    - A command gets sent to message broker (MQTT/redis)
- A robotic hive device that has subscribed to MQTT receives the command and orders a controller (arduino) to do sequence of movements
    - open hive
    - move to frame X position
    - move forward to grab frame
    - grip on the frame
    - move out
- Device takes a 2 photos and uploads them
    - move in
    - grip off the frame
    - move out
    - close hive
