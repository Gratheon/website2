
<iframe width="100%" height="400" src="https://www.youtube.com/embed/aBsKVInYCno" title="Features - Telemetry API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Why this is needed

We want our devices as well as customer’s own hack-projects to be able to stream data to us so that

1. beekeepers can track their apiaries in web-app telemetry dashboards
2. beekeepers can correlate data to get insights
3. we can generate [Alerts](../../web_app/flexible-tier/alerts.md)

![](../../../about/img/Screenshot%202024-05-25%20at%2020.03.49.png)

[Evaluation of the honey bee colonies weight gain during the intensive foraging period](../../../research/papers/Evaluation%20of%20the%20honey%20bee%20colonies%20weight%20gain%20during%20theintensive%20foraging%20period.md)

## Low volume metrics that [Entrance Observer](../../entrance_observer/entrance_observer.md) can send to [Web-app](../../web_app/index.md)

- temperature (min interval - 10 min)
- humidity (min interval - 10 min) - see [Humidity monitoring](../ideas/💧%20Internal%20humidity%20monitoring.md)
- weight (min interval - 10 min) → [[Beep.nl](http://Beep.nl) weight telemetry integration]([https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21](https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21))
- bee counts at the hive entrance (min interval - 10 sec)
    - how many worker **bees** have gone in and out
        - how many of them had varroa mite
        - how many of them had pollen
    - how many guard bees are detected
    - how many drone bees are detected
    - how many queen bees are detected → [Detect queen mating from entrance video](../../entrance_observer/ideas/👑%20Detect%20queen%20mating%20from%20entrance%20video.md)
- hornet count (min interval 10 sec) → [Hornet attack detection](../../entrance_observer/todo/🚁%20Hornet%20attack%20detection.md)
- audio noise average volume (min interval - 1 sec)
    - this should not be confused with actual audio stream that would be sent with [6-channel audio monitoring](../../robotic_beehive/ideas/🎙️%206-channel%20audio%20monitoring.md) as part of [Robotic Beehive](../../robotic_beehive/robotic_beehive.md), because [Entrance Observer](../../entrance_observer/entrance_observer.md) has limited amount of USB ports so we can’t have mics there

## AC

- provide a flexible graphQL API in telemetry-api to store timeseries metrics
- store this data in telemetry-api time-series storage. MySQL is the current fallback when a dedicated time-series database is not justified.
- render time-series graphs directly in the web app by querying telemetry-api through `graphql-router`