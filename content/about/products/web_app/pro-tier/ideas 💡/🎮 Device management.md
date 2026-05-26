To ease connecting web-app to [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21), [Beehive IoT sensors](https://www.notion.so/Beehive-IoT-sensors-26aad244cdf64f4e8596d050f44f0bed?pvs=21), [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21) and other third-party ([[Beep.nl](http://Beep.nl) weight telemetry integration]([https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21](https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21))) we need a separate view for managing devices.

Currently devices are not registered, they just use an API token and its later not clear if token is used or not and by what device.

Another problem is that its not clear when was the last time device was online / interacted with us.

A third potential problem is that if we do manage to sell devices, we need to have some kind of analytics, debugging and versioning per-device so we need a database.

## Suggested solution

In the `web-app` repo:

- Add new menu `Devices` in the top
- Add devices list view
    - it should make graphql query to list devices
- Add new device button + new view for this (similar to new hive creation)
    - type ([Beehive IoT sensors](https://www.notion.so/Beehive-IoT-sensors-26aad244cdf64f4e8596d050f44f0bed?pvs=21), [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21), [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21))
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
    - `Connect to device` button for [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) and [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21)
        - for [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21), should trigger [Remote desktop](https://www.notion.so/Remote-desktop-4f5aa40074cf4b54b9b871e38b96a433?pvs=21) via VNC
        - for [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21) we should have dedicated views to control the device remotely
            - [Real-time frame scanning](https://www.notion.so/Real-time-frame-scanning-36c9c9fc593a433baaba8b85b7c5c426?pvs=21)
            - [Robotic frame reordering](https://www.notion.so/Robotic-frame-reordering-63ed095970914d4c8f21f790a0b9c81d?pvs=21)
            - [Full hive inspection](https://www.notion.so/Full-hive-inspection-7d0f89c8a9de4ab3a8eb9e516b7f7172?pvs=21)
            - [Robotic frame isolation & extraction](https://www.notion.so/Robotic-frame-isolation-extraction-954c2e88f272419ebe0c41102588f6eb?pvs=21)
            - [Robotic insertion of new frames](https://www.notion.so/Robotic-insertion-of-new-frames-05c253e37262494d9f4214ce8b02230b?pvs=21)
            - [Ventilation control](https://www.notion.so/Ventilation-control-023a9bf9e44548809132c57557c2e7f4?pvs=21)
            - [Moveable hive bottom with varroa counting](https://www.notion.so/Moveable-hive-bottom-with-varroa-counting-89d9a4406d304b33ba07061c7b159082?pvs=21)
    - `Device logs` table view
        - Ideally this should show something that our client apps will send
        - Read-only
- Remove device button should soft-delete a device
    - should revoke API token before deletion
- In account view → token list, show if api token is used by a device. Instead of deletion button, direct user to device view