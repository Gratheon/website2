# 📈 Count bees coming in and out - on the edge

### 🎯 Purpose
Real-time bee traffic monitoring system that counts individual bees entering and exiting the hive using computer vision on edge devices.

### 🎭 User Story
- As a beekeeper
- I want to automatically track bee activity at my hive entrance 
- So that I can monitor colony health, detect issues early, and understand foraging patterns without manual observation

### 🚀 Key Benefits
- **Automated monitoring**: No manual counting required, 24/7 tracking
- **Early problem detection**: Unusual traffic patterns can indicate swarming, robbing, or health issues
- **Data-driven insights**: Track bee loss rates, foraging efficiency, and seasonal patterns
- **Edge processing**: Real-time analysis without internet dependency

### 🔧 Technical Overview
Uses YOLO v8 object detection model (weights/best.pt) running on edge devices to detect and track individual bees crossing configurable entrance boundaries. Implements DeepSORT tracking with trajectory analysis to distinguish incoming vs outgoing movement across a detection line positioned at configurable height (default 50% of frame).

### 📋 Acceptance Criteria
- Device detects and tracks individual bees using YOLO v8 model
- Correctly classifies bee direction (in/out) based on trajectory crossing detection line
- Processes video in real-time with configurable frame rates
- Sends telemetry data every 30 seconds (configurable VIDEO_CHUNK_LENGTH_SEC)
- Calculates derived metrics: average speed, 95th percentile speed, stationary bee count
- Supports day/night operation with configurable hours (DAY_START_HOUR/DAY_END_HOUR)
- Functions reliably with USB cameras (V4L2 on Linux, AVFoundation on macOS)

### 🚫 Out of Scope
- Robbing behavior detection (separate feature)
- Bee species classification (wasps, hornets handled separately)
- Pollen detection on individual bees
- Queen bee identification from entrance video

### 🏗️ Implementation Approach
- **AI Model**: YOLO v8 (Ultralytics) with custom bee detection weights
- **Tracking**: DeepSORT algorithm with trajectory history (defaultdict storage)
- **Detection Line**: Configurable horizontal line at percentage of frame height
- **Hardware**: USB camera support via OpenCV (CAP_V4L2/CAP_AVFOUNDATION)
- **Processing**: Batch processing of frames with threading for async telemetry
- **Output**: AVC1/MP4V video encoding with overlay visualizations

### 📊 Success Metrics
- Real-time processing capability with configurable FPS
- Trajectory-based direction classification with crossing detection
- Telemetry transmission every 30 seconds to configured endpoint
- Local data persistence in daily-rotated JSONL files
- Camera auto-detection across multiple platforms (Linux/macOS)

### 🔗 Related Features
- [📊 Bee movement metric reporting](📊%20Bee%20movement%20metric%20reporting.md)
- [🛣️ Landing board heatmap generation](🛣️%20Landing%20board%20heatmap%20generation.md)
- [📈 Telemetry API](../../scales/features/📈%20Telemetry%20API.md)

### 📚 Resources & References
- [Entrance Observer Repository](https://github.com/Gratheon/entrance-observer/)
- [YOLO v8 Ultralytics Implementation](https://github.com/ultralytics/ultralytics)
- [OpenCV Camera Backends](https://docs.opencv.org/master/d4/d15/group__videoio__flags__base.html)

### 💬 Notes
Core feature using actual YOLO v8 implementation with DeepSORT tracking. Configurable detection line, day/night modes, and comprehensive metrics calculation including speed analysis and stationary bee detection.
