## Why

To have [Alerts](../../flexible-tier/alerts.md) we need to automatically and continuously analyze measured data of IoT sensors. Based on such timeseries data, we need to alert user in case of anomalies.

## Related work

See [Analytics with grafana](https://www.notion.so/Analytics-with-grafana-044239bdf92544a0a1ed95258d812e04?pvs=21) and [**Setup influx DB under telemetry-api**](https://www.notion.so/Setup-influx-DB-under-telemetry-api-77bc00eb46df4a759dc119650253aff7?pvs=21)

## AC

- Integrate Prophet model [https://facebook.github.io/prophet/docs/quick_start.html#python-api](https://facebook.github.io/prophet/docs/quick_start.html#python-api)
- Store detected anomalies
- Show them to the user