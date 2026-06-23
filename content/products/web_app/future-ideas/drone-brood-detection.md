---
title: "🐝 Drone brood detection"
---

## Why

So when queen is too old and runs out of sperm, she can start laying drone eggs instead of workers and thus colony can collapse

Another issue is that when colony becomes powerful and we do not do [Create colony split](../hobbyist-tier/split-bee-colony.md), it starts producing drones for mating and [Swarming](../../../about/problems/biological/🧶%20Swarming.md). Drones eat lots of honey, so beekeepers should be aware of their [Analytics - demography and simulation](pro-tier-ideas/analytics-demography-and-simulation.md).

## Suggested solution

- in addition to detecting frame cells with existing models [Honeycomb cell detection & management](../starter-tier/honeycomb-cell-detection-and-management.md), we need to also detect drone cells and add this to frame statistics
    - Create a new ML model or improve existing one to detect drone brood
    - Update image-splitter to store this new statistics
    - Update web-app to display these metrics in hive frames and in frame side view
- warn beekeeper if his drone cell ratio is too high - [Alerts](../flexible-tier/alerts.md)


![](../../../../about/img/GNy4HtBWoAABRt6.jpg)