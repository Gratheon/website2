---
title: "🐝 Varroa-on-bee detection model published"
date: 2026-04-07T00:00:00.000Z
---

We just published our new **varroa-on-bee detection model**: a specialized computer vision model for detecting varroa mites directly on bee bodies.

Repository: https://github.com/Gratheon/models-varroa-on-bee

![Varroa-on-bee detection example](../research/img/varroa-detection-example.jpg)

<!-- truncate -->

Unlike frame-level mite detection, this model works after bees have already been detected and cropped by the Gratheon web-app pipeline. It focuses on each bee body and helps count varroa mites attached to individual bees instead of searching the entire frame image at once.

This is our **third in-house model shipped as a microservice**. You can also explore the other Gratheon models on our [research models page](../research/Models.md).

## Latest validation results

Validation was run for `best.pt` from `varroa_model5`:

- Precision: `0.926`
- Recall: `0.823`
- mAP50: `0.871`
- mAP50-95: `0.485`
- Varroa class precision: `0.858`
- Varroa class recall: `0.651`
- Varroa class mAP50: `0.747`

## Training data

The model was trained using the Roboflow Universe dataset [`varroa-j8231/varroa8k` v1](https://universe.roboflow.com/varroa-j8231/varroa8k/dataset/1), licensed under **CC BY 4.0**.

Training and validation details:

- 10 epochs in 0.966 hours
- 1,736 images / 2,807 instances
- YOLO11n
- Validated on Apple M3 Pro using MPS

## Service integration

The model service supports simple HTTP inference through image upload:

```http
POST /
Content-Type: multipart/form-data
```

It is integrated into the Gratheon pipeline and is used by the web-app to count varroa mites on previously detected bees. This keeps the model focused on the biologically relevant target area and makes it easier to compose with our other bee monitoring models.
