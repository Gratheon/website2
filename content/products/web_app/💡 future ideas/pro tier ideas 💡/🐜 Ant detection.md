Colony can fully leave the hive in case of **(argentine)** ant infestation, so this is an important task

<iframe width="433" height="244" src="https://www.youtube.com/embed/bHL_-70gLFY" title="What To Do About Ants In And On Your Beehive?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/yuaPan9XsO8" title="Ant War with Bees | Bees VS Green ants | Crazy green ants eat my bees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/LGYLT64wzGY" title="Ants Raiding or Moving into a Honey Bee Hive how to STOP/KILL Ants without chemicals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Typical ants rarely go inside of the hive, only if its abandoned or bee colony is weak.

(More research on ant-bee behaviour is needed)

## AC

- collect [Datasets](../../../../research/Datasets.md) for ants, maybe use iNaturalist? May need different ant types
- create (or use existing?) a model that can detect ants based on
    - a photo. This assumes ants are crawling on the beehive frames inside a hive, likely feeding on honey leftovers. This assumes either photo was taken manually, or, more likely - it came from [Robotic Beehive](../../../robotic_beehive/robotic_beehive.md) as part of [Full hive inspection](../../../robotic_beehive/todo/📸%20Full%20hive%20inspection.md)
    - a video. This assumes we run [Entrance Observer](../../../entrance_observer/entrance_observer.md) at the entrance and ants pass through it
- publish a github repo with a model
- ideally, model should expose HTTP interface for image and/or video upload
    - you can use [https://github.com/Gratheon/models-bee-detector/blob/master/server.py](https://github.com/Gratheon/models-bee-detector/blob/master/server.py) as example

## Bonus

- integrate model with image-splitter model that does frame analysis [https://github.com/Gratheon/image-splitter](https://github.com/Gratheon/image-splitter)
- Once we have ants detected in beehive frames, we should alert user that hey, colony is too weak or is infested → [Alerts](../../flexible-tier/alerts.md)