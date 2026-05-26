---
title: 📊 Timeseries data analytics
---

Multi-hive analytics dashboard for comparing colony metrics over time, identifying trends, correlations, and anomalies across your apiary.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/aBsKVInYCno" title="Features - Telemetry API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Overview

The timeseries analytics feature provides telemetry data visualization in two ways:

1. **Individual hive view** - Single hive metrics accessible from hive details page under the "Metrics" tab
2. **Multi-hive analytics** - Comparative dashboard at `/time` for analyzing multiple hives simultaneously

By overlaying data from different colonies, beekeepers can quickly identify patterns, compare performance, and spot outliers.

This feature helps:
- Compare colony development across your apiary
- Identify correlations between metrics (weight drops and swarming)
- Spot underperforming hives early
- Analyze impact of weather on bee behavior
- Export data for external analysis and reporting

## Available charts

### Colony population
Track bee population estimates from inspection data with optional ideal growth curve overlay for comparison against expected colony development patterns.

### Hive weight
Compare daily average weight across hives to monitor honey flow, detect nectar dearth periods, and identify optimal harvest timing.

### Internal temperature
Monitor temperature patterns inside each hive. Stable brood nest temperatures (34-35°C) indicate healthy colonies with active brood rearing.

### Entrance traffic
Analyze bee entrance activity including:
- **Bees in/out** - Directional traffic flow
- **Net flow** - Difference between incoming and outgoing bees
- **Average speed** - Movement velocity at entrance
- **95th percentile speed** - Fast-moving bee detection
- **Stationary bees** - Bees lingering at entrance (guarding behavior)
- **Detected bees** - Total count in camera frame
- **Bee interactions** - Encounters between bees (trophallaxis, aggression)

### Weather correlation
Overlay environmental data to understand external factors:
- Temperature and wind speed
- Rainfall and cloud cover
- Solar radiation
- Pollen availability
- Air pollution levels

## How it works

### Individual hive view

1. **Navigate to hive details**
   - Open any hive from apiary view
   - Click the "Metrics" tab in the hive navigation

2. **View single hive data**
   - Weight chart (last 7 days)
   - Temperature chart (last 7 days)
   - Entrance movement chart (last 7 days)
   - Charts automatically synchronized for easy correlation

### Multi-hive analytics dashboard

1. **Select apiary**
   - Choose which apiary to analyze
   - Filters hives to the selected location

2. **Choose hives**
   - Select one or more hives to compare
   - Multi-select allows side-by-side comparison
   - URL parameters support direct links to specific hives

3. **Set time range**
   - Default: 90 days
   - Options: 7, 30, 90, 180, 365 days
   - Longer ranges use daily aggregation for performance

4. **Enable charts**
   - Toggle individual charts on/off
   - Customizes view to focus on relevant metrics
   - Settings persist in browser localStorage

5. **Synchronized scrolling**
   - All charts sync time axis when zooming or panning
   - Makes it easy to correlate events across metrics
   - Click-drag to zoom, double-click to reset

6. **Export data**
   - Click table icon (📋) on any chart
   - View raw data in table format
   - Export as CSV for external analysis

## Features

### Two viewing modes
- **Individual hive**: Quick access to recent metrics (7 days) from hive details page
- **Multi-hive dashboard**: Comprehensive analytics at `/time` for cross-hive comparison

### Cross-hive comparison
Overlay multiple hives on the same chart with color-coded lines. Quickly identify which colonies are gaining weight faster, maintaining stable temperatures, or showing unusual entrance activity patterns.

### Correlation analysis
Look for relationships between metrics:
- Weight drops preceding swarms
- Temperature extremes affecting bee activity
- Weather impact on foraging behavior
- Population growth matching weight gain

### Alert threshold visualization
Visual indicators show configured alert thresholds on charts. When metrics exceed safe ranges, threshold lines help assess severity.

### Inspection markers
Inspection events appear as vertical markers on charts, linking manual observations with sensor data patterns.

### Data export
Export any chart's data as CSV for:
- Excel analysis
- Statistical modeling
- Custom visualizations
- Record keeping and reporting

### URL deep linking
Share specific views with query parameters:
- `?hiveId=123` - Auto-select a hive
- `?apiaryId=456` - Set apiary context
- `?chartType=weight&scrollTo=weight` - Highlight specific chart

## Use cases

### Seasonal planning
Compare weight gain patterns across years to:
- Predict optimal harvest windows
- Identify best performing locations
- Plan feeding schedules based on historical dearth periods

### Queen performance evaluation
Overlay population growth curves to:
- Compare queens from different breeders
- Identify superior genetics for breeding
- Determine optimal replacement timing

### Swarm prediction
Monitor for swarm indicators:
- Sudden weight drops (5-10kg)
- Increased entrance traffic
- Temperature fluctuations
- Population peaks followed by declines

### Environmental impact analysis
Correlate bee behavior with weather:
- Foraging activity vs temperature
- Rain impact on entrance traffic
- Wind speed affecting flight patterns
- Pollen availability and colony growth

### Treatment efficacy tracking
Compare colonies before and after interventions:
- Weight recovery post-feeding
- Temperature stabilization after ventilation fixes
- Activity normalization after treatment

## Technical details

**Data sources:**
- Telemetry data from telemetry-api (temperature, weight, entrance metrics)
- Inspection records from local Dexie database
- Weather data from external APIs
- Population estimates from inspection JSON data

**Performance:**
- Charts use lightweight-charts library for smooth rendering
- Data queries optimized with GraphQL fragments
- Long time ranges use daily aggregation (over 30 days)
- Client-side caching via Apollo Client
- Settings persist in browser localStorage

**Limitations:**
- Maximum 7 days for temperature (high-resolution data)
- Entrance metrics require entrance-observer hardware
- Weather data requires apiary GPS coordinates
- Population estimates require manual inspection data

## Related features

- [📈 Hive telemetry storage](./hive_telemetry_storage) - Data collection and storage
- [⚖️ Colony comparison analytics](./colony_comparison_analytics) - Statistical analysis tools
- [🔔 Alerts](/about/products/web_app/flexible-tier/alerts) - Threshold-based notifications

## Resources

- [Technical documentation](/docs/web-app/features/timeseries-analytics)
- [Web-app on GitHub](https://github.com/Gratheon/web-app)
- [Telemetry API](/docs/API/GraphQL)

