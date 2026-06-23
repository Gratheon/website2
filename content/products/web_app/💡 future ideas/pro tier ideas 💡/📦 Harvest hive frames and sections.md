## Why

To improve [Warehouse organization](https://www.notion.so/Warehouse-organization-1009de39cbca804a9615dc67e76d26e2?pvs=21), it would be more semantically correct for frames and hive sections to just disappear, but instead to get moved into “Warehouse” where frames would get harvested, cleaned etc.

This would give beekeeper an overview of how many frames got moved, how many frames got extracted, how much honey roughly can get or was harvested

## AC

- In [Hive view](https://www.notion.so/Hive-view-42d9850943a54d1aa4f2cc3c2c037685?pvs=21), in addition to “delete frame” and “delete box”, **add “harvest …” buttons**
- On click, this should do the same deletion it was doing before, but on backend frame should be also linked to a warehouse
- warehouse view should be in separate [Inventory management / warehouse view](https://www.notion.so/Inventory-management-warehouse-view-b99b937fe1444f84b4d3c70f1ffdc828?pvs=21)

## Suggested solution

- add `in_warehouse` boolean flag for frames and boxes