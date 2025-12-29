# 🎮 Client-side app with UI

### 🎯 Purpose
Provides local web-based interface for beekeepers to monitor entrance observer metrics and video streams when internet connectivity is unavailable.

### 🎭 User Story
- As a beekeeper working in remote locations
- I want to access live monitoring data and video streams locally on my device
- So that I can monitor my hives even without internet connectivity and have immediate access to critical information

### 🚀 Key Benefits
- **Offline accessibility**: Works without internet connection via local network
- **Real-time monitoring**: View live entrance metrics and video streams
- **Familiar interface**: Web-based UI accessible from any device with a browser
- **Emergency access**: Critical for troubleshooting and device management in field conditions

### 🔧 Technical Overview
Flask web server (src/main.py) serving responsive HTML interface with real-time MJPEG video streaming. Provides camera controls, detection line adjustment, and live bee count display. Uses threading for frame capture and WebSocket-style streaming over HTTP with multipart response format.

### 📋 Acceptance Criteria
- Flask server accessible on local network (default port configuration)
- Live MJPEG video stream with detection overlays and bee tracking visualization
- Real-time bee count display with historical data (3600 entry deque buffer)
- Camera property controls: brightness, contrast, saturation, gain, exposure, white balance
- Detection line adjustment via web interface (DETECTION_LINE coefficient)
- Responsive CSS design using system fonts and modern styling
- Automatic frame refresh without page reload using streaming response

### 🚫 Out of Scope
- Remote internet access (handled by main web application)
- Historical data storage (local cache only)
- Multi-device synchronization
- Advanced analytics and reporting

### 🏗️ Implementation Approach
- **Backend**: Flask web server with threading for concurrent frame processing
- **Frontend**: HTML with embedded CSS using system fonts (-apple-system, BlinkMacSystemFont)
- **Video Streaming**: MJPEG over HTTP with multipart/x-mixed-replace content type
- **Real-time Data**: Thread-safe frame_lock for concurrent access to video frames
- **Camera Interface**: OpenCV camera controls with configurable properties dictionary
- **Detection Overlay**: Real-time visualization of YOLO detections and tracking paths

### 📊 Success Metrics
- Flask server startup and accessibility within device boot sequence
- MJPEG stream latency optimized for real-time viewing
- Thread-safe frame access with proper locking mechanisms
- Camera property adjustment responsiveness via web controls
- Historical bee count display with 10-hour data retention (3600 entries)

### 🔗 Related Features
- [📈 Count bees coming in and out - on the edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [🎥 Video streaming via API](🎥%20Video%20streaming%20via%20API.md)
- [🎮 Device management - Remote desktop](../ideas/🎮%20Device%20management%20-%20Remote%20desktop.md)

### 📚 Resources & References
- [Flask MJPEG streaming implementation](https://github.com/Gratheon/entrance-observer/blob/main/src/main.py)
- [OpenCV camera property control](https://docs.opencv.org/master/d4/d15/group__videoio__flags__base.html)

### 💬 Notes
Actual Flask implementation with MJPEG streaming, camera controls, and real-time detection visualization. Essential for field operations where internet connectivity is unreliable.
