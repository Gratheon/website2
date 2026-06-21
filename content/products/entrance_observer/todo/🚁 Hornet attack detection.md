## Background

Hornets, especially asian hornets, are a menace to the bee colony. Without human intervention, colony can die.

## Goal

We want to build hornet detector AI model watching the hive entrance and alert the beekeeper in such cases.

## Suggested steps

- take an existing dataset and/or model, like one present in

[https://universe.roboflow.com/search?q=hornet](https://universe.roboflow.com/search?q=hornet)

- alternatively, collect dataset yourself
- train a model

## Integration

- We want to run inference on 10 sec mp4 chunks of videos
- We also want to be able to detect hornets in real-time over webcam, for example as part of yolo v8 with cv2

## Alerts

- We need to report detections to [Alerts](https://www.notion.so/Alerts-8b65dea8fc164a7f91b0a76fa0948189?pvs=21)
- We also want to affect [Close mechanised hive entrance in case of hornet attack](https://www.notion.so/Close-mechanised-hive-entrance-in-case-of-hornet-attack-c666e28eefdd45d780c9540746ef9903?pvs=21)

## Relevant links

Here is an example from japanese university:

[https://satoh.cs.uec.ac.jp/ja/research/bee/images/bee/hornet.mp4](https://satoh.cs.uec.ac.jp/ja/research/bee/images/bee/hornet.mp4)

[https://www.nature.com/articles/s42003-024-05979-z](https://www.nature.com/articles/s42003-024-05979-z)