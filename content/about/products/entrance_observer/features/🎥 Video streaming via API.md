# 🎥 Video streaming via API

### 🎯 Purpose
Enables hardware devices to capture and stream video from beehive entrances to the cloud for remote monitoring and AI analysis.

### 🎭 User Story
- As a beekeeper with custom hardware or limited compute resources
- I want to stream video from my beehive entrance to the cloud
- So that I can leverage cloud-based AI analysis and remote monitoring without requiring powerful on-device processing

### 🚀 Key Benefits
- **Hardware flexibility**: Works with Raspberry Pi, custom PCs, or Jetson Nano devices
- **Cloud processing**: Offloads AI analysis to cloud infrastructure for devices without GPU
- **Remote access**: View live and historical video streams from anywhere
- **Easy integration**: Simple API token authentication and setup

### 🔧 Technical Overview
Video upload system (src/uploader.py) captures processed video chunks with detection overlays and uploads them to video.gratheon.com via GraphQL mutations. Uses multipart/form-data encoding with both video files and detection metadata, supporting batch uploads with bearer token authentication.

### 📋 Acceptance Criteria
- Supports USB camera video capture with OpenCV (CAP_V4L2/CAP_AVFOUNDATION)
- Encodes video with AVC1/MP4V codecs for compatibility
- Uploads video chunks with detection overlays via GraphQL API
- Includes detection metadata file alongside video upload
- Uses bearer token authentication (API_TOKEN environment variable)
- Supports configurable video chunk length (VIDEO_CHUNK_LENGTH_SEC)
- Handles network interruptions with threaded async uploads

### 🚫 Out of Scope
- Real-time live streaming (batch upload of processed chunks)
- Audio streaming (video only)
- Real-time two-way communication
- Storage management beyond standard retention policies

### 🏗️ Implementation Approach
- **Video Encoding**: OpenCV VideoWriter with AVC1/MP4V codecs
- **Upload Protocol**: GraphQL mutation via HTTPS POST with multipart/form-data
- **Authentication**: Bearer token in Authorization header
- **Threading**: Async upload processing to prevent blocking video capture
- **Integration**: Links to SECTION_ID (box ID) and timestamp metadata
- **Error Handling**: Graceful fallback when API credentials not configured

### 📊 Success Metrics
- Video encoding with proper codec compatibility (AVC1 primary, MP4V fallback)
- Successful GraphQL mutation uploads to video.gratheon.com endpoint
- Threaded async processing without blocking main video pipeline
- Proper multipart encoding with detection metadata files
- Bearer token authentication and box ID association

### 🔗 Related Features
- [🎮 Client-side app with UI](🎮%20Client-side%20app%20with%20UI.md)
- [📈 Count bees coming in and out - on the edge](📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📈 Telemetry API](../../scales/features/📈%20Telemetry%20API.md)

### 📚 Resources & References
- [Video upload implementation](https://github.com/Gratheon/entrance-observer/blob/main/src/uploader.py)
- [GraphQL mutation endpoint](https://video.gratheon.com/graphql)
- [OpenCV VideoWriter documentation](https://docs.opencv.org/master/dd/d9e/classcv_1_1VideoWriter.html)

### 💬 Notes
Actual implementation using GraphQL mutations for video upload with detection metadata. Enables cloud-based processing for devices without sufficient local compute resources.
