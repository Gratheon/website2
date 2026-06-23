To ease connecting web-app to [Entrance Observer](../../../entrance_observer/entrance_observer.md), [Beehive IoT sensors](../../../../docs/beehive-sensors/beehive-sensors.md), [Robotic Beehive](../../../robotic_beehive/robotic_beehive.md) and other third-party ([[Beep.nl](http://Beep.nl) weight telemetry integration]([https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21](https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21))) we need a separate view for managing devices.

Currently devices are not registered, they just use an API token and its later not clear if token is used or not and by what device.

Another problem is that its not clear when was the last time device was online / interacted with us.

A third potential problem is that if we do manage to sell devices, we need to have some kind of analytics, debugging and versioning per-device so we need a database.

## Suggested solution

In the `web-app` repo:

- Add new menu `Devices` in the top
- Add devices list view
    - it should make graphql query to list devices
- Add new device button + new view for this (similar to new hive creation)
    - type ([Beehive IoT sensors](../../../../docs/beehive-sensors/beehive-sensors.md), [Entrance Observer](../../../entrance_observer/entrance_observer.md), [Robotic Beehive](../../../robotic_beehive/robotic_beehive.md))
    - model number (string) - should help us to understand what software is running there and what set of features it has if we do bulk production
    - select to hive (send `hiveId` to backend)
        - select section (optional, send `boxId` to backend)
    - generate new API token in user-cycle for this device
        - need to change user-cycle to have `deviceId` column, pass it to user-cycle to be stored too
    - lastUsed - datetime
        - should be updated on every API call if its > 1 min
    - status
        - if lastUsed < 1 min, mark device as green, online
        - if lastUsed > 5 min, mark device as yellow, pending
        - if lastUsed > 1h, mark device as red, offline
- Edit device view
    - revoke API token for this device
    - `Connect to device` button for [Entrance Observer](../../../entrance_observer/entrance_observer.md) and [Robotic Beehive](../../../robotic_beehive/robotic_beehive.md)
        - for [Entrance Observer](../../../entrance_observer/entrance_observer.md), should trigger [Remote desktop](../../../entrance_observer/ideas/🎮%20Device%20management%20-%20Remote%20desktop.md) via VNC
        - for [Robotic Beehive](../../../robotic_beehive/robotic_beehive.md) we should have dedicated views to control the device remotely
            - [Real-time frame scanning](../../../robotic_beehive/todo/📸%20Real-time%20frame%20scanning.md)
            - [Robotic frame reordering](../../../robotic_beehive/ideas/🦾%20Robotic%20frame%20reordering.md)
            - [Full hive inspection](../../../robotic_beehive/todo/📸%20Full%20hive%20inspection.md)
            - [Robotic frame isolation & extraction](../../../robotic_beehive/ideas/🦾Robotic%20frame%20isolation%20%26%20extraction.md)
            - [Robotic insertion of new frames](../../../robotic_beehive/ideas/🦾%20Robotic%20insertion%20of%20new%20frames.md)
            - [Ventilation control](../../../robotic_beehive/ideas/🚁%20Ventilation%20control.md)
            - [Moveable hive bottom with varroa counting](../../../robotic_beehive/ideas/🦾%20Moveable%20hive%20bottom%20with%20varroa%20counting.md)
    - `Device logs` table view
        - Ideally this should show something that our client apps will send
        - Read-only
- Remove device button should soft-delete a device
    - should revoke API token before deletion
- In account view → token list, show if api token is used by a device. Instead of deletion button, direct user to device view