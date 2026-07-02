---
title: 🌡️ Beehive IoT sensors
order: 3
sidebar_position: 4
hide_table_of_contents: true
---
<iframe width="100%" height="400" src="https://www.youtube.com/embed/Ags3rplPkQE" title="Getting started with iot sensors development" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Architecture

Эти docs относятся к продукту [beehive scales](../../products/scales/scales.md). Sensor readings сохраняются через [hive telemetry storage](../../products/web_app/pro-tier/hive-telemetry-storage.md) и визуализируются в [timeseries analytics](../../products/web_app/pro-tier/timeseries-data-analytics.md).

### Services
- [https://github.com/Gratheon/hardware-beehive-sensors](https://github.com/Gratheon/hardware-beehive-sensors) — sensors repo на client side
- [https://github.com/gratheon/telemetry-api](https://github.com/gratheon/telemetry-api) — server side

```mermaid
flowchart LR
	beehive-sensors[<a href="https://github.com/Gratheon/beehive-sensors">beehive-sensors</a>] -."send metrics every 1 min".-> telemetry-api

	telemetry-api --"update beehive entrance daily traffic counters"--> mysql[(<a href="https://github.com/Gratheon/mysql">mysql</a>)]
	
	telemetry-api --"store bee traffic timeseries" --> influx[(influx-db v2)]
	

	telemetry-api --"verify API tokens for REST calls"--> user-cycle[<a href="https://github.com/Gratheon/user-cycle">user-cycle</a>]
	web-app[<a href="https://github.com/Gratheon/web-app">web-app</a>] --"render telemetry charts"--> graphql-router[<a href="https://github.com/Gratheon/graphql-router">graphql-router</a>]
	graphql-router --"query metric history"--> telemetry-api

```




![](docs/beehive-sensors/img/352610409-b4ed305f-7ddd-44ff-b200-e0d139734349.jpg)
