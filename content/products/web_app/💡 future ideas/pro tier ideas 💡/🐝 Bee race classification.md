## Problem

Beekeepers don't always know what kind of bees they have.

## Acceptance criteria

Given an image (url or binary stream/file) and bounding boxes of detected bees, return what races of bees we are dealing with and its probability distribution.

## Suggested high-level steps

1. get a list of possible bee races
2. gather images of these [hopefully over time gratheon has enough user contributions]
3. train a classifier model
4. make proof of concept service that will run inference and output a result