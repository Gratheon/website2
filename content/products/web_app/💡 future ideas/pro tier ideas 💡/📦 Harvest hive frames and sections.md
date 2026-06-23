## Why

To improve [Warehouse organization](../../../../about/problems/📦%20Warehouse%20organization.md), it would be more semantically correct for frames and hive sections to just disappear, but instead to get moved into “Warehouse” where frames would get harvested, cleaned etc.

This would give beekeeper an overview of how many frames got moved, how many frames got extracted, how much honey roughly can get or was harvested

## AC

- In [Hive view](https://www.notion.so/Hive-view-42d9850943a54d1aa4f2cc3c2c037685?pvs=21), in addition to “delete frame” and “delete box”, **add “harvest …” buttons**
- On click, this should do the same deletion it was doing before, but on backend frame should be also linked to a warehouse
- warehouse view should be in separate [Inventory management / warehouse view](📦%20Inventory%20management%20-%20warehouse%20view.md)

## Suggested solution

- add `in_warehouse` boolean flag for frames and boxes