# 📊 Bee movement metric reporting

### 🎯 Purpose
Collects, processes and transmits comprehensive bee movement analytics from entrance monitoring to provide actionable insights for beekeepers.

### 🎭 User Story
- As a beekeeper using entrance monitoring systems
- I want to receive detailed reports about bee movement patterns and trends
- So that I can make informed decisions about hive management and detect potential issues early

### 🚀 Key Benefits
- **Comprehensive analytics**: Detailed movement patterns, peak activity times, and seasonal trends
- **Early warning system**: Anomaly detection for unusual activity patterns
- **Historical tracking**: Long-term data for understanding colony development
- **Integration ready**: Standardized metrics for dashboard and alert systems

### 🔧 Technical Overview
Metrics calculation system (src/metrics.py) processes track history data to generate derived analytics including average speed, 95th percentile speed, and stationary bee detection. Data is saved locally in daily-rotated JSONL files and transmitted via telemetry API with configurable endpoints and authentication.

### 📋 Acceptance Criteria
- Calculates derived metrics: avg_speed_px_per_frame, p95_speed_px_per_frame, stationary_bees_count
- Processes track history using NumPy for speed calculations and distance analysis
- Saves telemetry data locally in daily-rotated JSONL files (metrics_YYYY-MM-DD.jsonl)
- Transmits data to configurable TELEMETRY_BASE_URL with API token authentication
- Includes core metrics: bees_in, bees_out, detected_bees, bee_interactions, net_flow
- Supports configurable stationary threshold (default 10px movement)
- Thread-safe telemetry transmission with async processing

### 🚫 Out of Scope
- Long-term data storage (handled by cloud infrastructure)
- Advanced predictive analytics (basic statistical analysis only)
- Cross-hive comparative analysis
- Weather correlation analysis (handled by separate systems)

### 🏗️ Implementation Approach
- **Metrics Engine**: NumPy-based calculations for speed and distance analysis
- **Data Storage**: Local JSONL files with daily rotation in /app/telemetry directory
- **API Integration**: HTTP POST requests to telemetry endpoint with bearer token auth
- **Track Analysis**: Euclidean distance calculations between consecutive coordinate pairs
- **Threading**: Async telemetry transmission to prevent blocking main processing

### 📊 Success Metrics
- NumPy-based metric calculation with proper rounding to 2 decimal places
- Local data persistence with daily file rotation
- HTTP telemetry transmission success with proper error handling
- Track history serialization with integer coordinate conversion
- Thread-safe async processing without blocking video pipeline

### 🔗 Related Features
- [📈 Count bees coming in and out - on the edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📈 Telemetry API](../../scales/features/📈%20Telemetry%20API.md)
- [🛣️ Landing board heatmap generation](🛣️%20Landing%20board%20heatmap%20generation.md)

### 📚 Resources & References
- [Metrics calculation implementation](https://github.com/Gratheon/entrance-observer/blob/main/src/metrics.py)
- [Telemetry system](https://github.com/Gratheon/entrance-observer/blob/main/src/telemetry.py)
- [NumPy distance calculations](https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html)

### 💬 Notes
Actual implementation using NumPy for mathematical calculations, daily-rotated JSONL persistence, and async HTTP telemetry transmission. Core component for transforming raw tracking data into actionable metrics.
