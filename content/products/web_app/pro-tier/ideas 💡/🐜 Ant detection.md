Colony can fully leave the hive in case of **(argentine)** ant infestation, so this is an important task

<iframe width="433" height="244" src="https://www.youtube.com/embed/bHL_-70gLFY" title="What To Do About Ants In And On Your Beehive?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/yuaPan9XsO8" title="Ant War with Bees | Bees VS Green ants | Crazy green ants eat my bees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/LGYLT64wzGY" title="Ants Raiding or Moving into a Honey Bee Hive how to STOP/KILL Ants without chemicals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Typical ants rarely go inside of the hive, only if its abandoned or bee colony is weak.

(More research on ant-bee behaviour is needed)

## AC

- collect [Datasets](https://www.notion.so/Datasets-d3ca2719238d4c6b80226c58ea38fb50?pvs=21) for ants, maybe use iNaturalist? May need different ant types
- create (or use existing?) a model that can detect ants based on
    - a photo. This assumes ants are crawling on the beehive frames inside a hive, likely feeding on honey leftovers. This assumes either photo was taken manually, or, more likely - it came from [R**obotic Beehive**](https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21) as part of [Full hive inspection](https://www.notion.so/Full-hive-inspection-7d0f89c8a9de4ab3a8eb9e516b7f7172?pvs=21)
    - a video. This assumes we run [Entrance Observer](https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21) at the entrance and ants pass through it
- publish a github repo with a model
- ideally, model should expose HTTP interface for image and/or video upload
    - you can use [https://github.com/Gratheon/models-bee-detector/blob/master/server.py](https://github.com/Gratheon/models-bee-detector/blob/master/server.py) as example

## Bonus

- integrate model with image-splitter model that does frame analysis [https://github.com/Gratheon/image-splitter](https://github.com/Gratheon/image-splitter)
- Once we have ants detected in beehive frames, we should alert user that hey, colony is too weak or is infested → [Alerts](https://www.notion.so/Alerts-8b65dea8fc164a7f91b0a76fa0948189?pvs=21)