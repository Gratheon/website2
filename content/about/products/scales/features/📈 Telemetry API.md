
<iframe width="100%" height="400" src="https://www.youtube.com/embed/aBsKVInYCno" title="Features - Telemetry API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Why this is needed

We want our devices as well as customer’s own hack-projects to be able to stream data to us so that

1. beekeepers can track their apiaries in [Analytics with grafana](https://www.notion.so/Analytics-with-grafana-044239bdf92544a0a1ed95258d812e04?pvs=21) dashboards
2. beekeepers can correlate data to get insights
3. we can generate [Alerts](https://www.notion.so/Alerts-8b65dea8fc164a7f91b0a76fa0948189?pvs=21)

![](../../../img/Screenshot%202024-05-25%20at%2020.03.49.png)

[Evaluation of the honey bee colonies weight gain during the intensive foraging period](https://www.notion.so/Evaluation-of-the-honey-bee-colonies-weight-gain-during-the-intensive-foraging-period-7aa3ad64bf914a0896038255f150f392?pvs=21)

## Low volume metrics that [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) can send to [Web-app](https://www.notion.so/Web-app-2937ed264e1d434a8664caa4bc40978e?pvs=21)

- temperature (min interval - 10 min)
- humidity (min interval - 10 min) - see [Humidity monitoring](https://www.notion.so/Humidity-monitoring-1daa7dc3356048b8a807e7b099bc70f4?pvs=21)
- weight (min interval - 10 min) → [[Beep.nl](http://Beep.nl) weight telemetry integration]([https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21](https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21))
- bee counts at the hive entrance (min interval - 10 sec)
    - how many worker **bees** have gone in and out
        - how many of them had varroa mite
        - how many of them had pollen
    - how many guard bees are detected
    - how many drone bees are detected
    - how many queen bees are detected → [Detect queen mating from entrance video](https://www.notion.so/Detect-queen-mating-from-entrance-video-d5dc2215eabf4d8986a90e041c992cf4?pvs=21)
- hornet count (min interval 10 sec) → [Hornet attack detection](https://www.notion.so/Hornet-attack-detection-8dde7e03f80547fa9156ac1c16cf52af?pvs=21)
- audio noise average volume (min interval - 1 sec)
    - this should not be confused with actual audio stream that would be sent with [6-channel audio monitoring](https://www.notion.so/6-channel-audio-monitoring-e2d22a771ce645ba86777f2aeb56e848?pvs=21) as part of [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21), because [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) has limited amount of USB ports so we can’t have mics there

## AC

- provide a flexible graphQL API in telemetry-api to store timeseries metrics
- store this data into timeseries DB, ex. InfluxDB. Alternatively maybe look at [prometheus](https://grafana.com/docs/grafana-cloud/send-data/metrics/metrics-prometheus/?pg=metrics&plcmt=hero-btn-2). If too hard, fallback to MySQL.
- play with [Analytics with grafana](https://www.notion.so/Analytics-with-grafana-044239bdf92544a0a1ed95258d812e04?pvs=21) to be able to display graphs