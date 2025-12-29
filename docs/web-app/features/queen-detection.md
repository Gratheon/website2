---
sidebar_position: 6
---
# Queen Detection - Technical Documentation

### 🎯 Overview
AI-powered queen bee detection system using machine learning models to identify queen bees in uploaded frame photos. Currently uses Clarifai API for detection with plans to develop internal model for improved accuracy. Part of automated frame analysis pipeline triggered on photo upload.

### 🏗️ Architecture

#### Components
- **DetectionOverlay**: Canvas component rendering detected queens as bounding boxes
- **QueenIndicator**: UI component showing queen presence status
- **FrameAnalysisPanel**: Side panel displaying detection counts and confidence

#### Services
- **image-splitter**: Orchestrates detection pipeline, stores results
- **Clarifai API**: External ML service for queen detection (current implementation)
- **models-bee-detector**: Internal model service (supports queens but low accuracy ~60%)
- **swarm-api**: Stores queen presence metadata linked to frames

### 📋 Technical Specifications

#### Detection Pipeline
```
1. Frame photo uploaded → image-splitter
2. Create detection job (type: detect_queens)
3. Job processor invokes detection:
   a. Primary: Clarifai API call
   b. Fallback: models-bee-detector (if enabled)
4. Parse detection response (boxes + confidence)
5. Store detections in MySQL
6. Publish Redis event
7. Update queen presence in swarm-api
```

#### GraphQL API
```graphql
type QueenDetection {
  id: ID!
  frameSideId: ID!
  bbox: BoundingBox!
  confidence: Float!
  verifiedByUser: Boolean
  createdAt: DateTime!
}

type BoundingBox {
  x: Int!
  y: Int!
  width: Int!
  height: Int!
}

type FrameSide {
  id: ID!
  url: String!
  queenDetections: [QueenDetection!]
  hasQueen: Boolean
}

query frameSide($id: ID!) {
  frameSide(id: $id) {
    id
    queenDetections {
      id
      bbox {
        x
        y
        width
        height
      }
      confidence
    }
  }
}

mutation verifyQueenDetection($detectionId: ID!, $verified: Boolean!) {
  verifyQueenDetection(detectionId: $detectionId, verified: $verified) {
    id
    verifiedByUser
  }
}
```


### 🔧 Implementation Details

#### Frontend
- **Framework**: React with TypeScript
- **Rendering**: HTML5 Canvas for detection overlay
- **Visualization**: Yellow bounding box with confidence score label
- **Interaction**: Click to verify/reject detection
- **State**: Apollo cache for detection data

#### Backend (image-splitter)
- **Language**: TypeScript/Node.js
- **Detection Service**: Clarifai gRPC client
- **Fallback**: Internal models-bee-detector REST API
- **Job Processing**: Async queue with retry logic
- **Storage**: Detection results stored as JSON bbox data

#### Clarifai Integration
```typescript
async function detectQueens(imageUrl: string): Promise<Detection[]> {
  const stub = ClarifaiStub.grpc();
  
  const metadata = new grpc.Metadata();
  metadata.set("authorization", `Key ${CLARIFAI_API_KEY}`);

  const request = {
    userAppId: {
      userId: CLARIFAI_USER_ID,
      appId: CLARIFAI_APP_ID
    },
    inputs: [{
      data: {
        image: { url: imageUrl }
      }
    }]
  };

  const response = await stub.PostModelOutputs(request, metadata);
  
  return response.outputs[0].data.regions.map(region => ({
    bbox: {
      x: region.regionInfo.boundingBox.leftCol * imageWidth,
      y: region.regionInfo.boundingBox.topRow * imageHeight,
      width: region.regionInfo.boundingBox.width * imageWidth,
      height: region.regionInfo.boundingBox.height * imageHeight
    },
    confidence: region.value,
    type: 'queen'
  }));
}
```

#### Internal Model (models-bee-detector)
- **Framework**: YOLOv5 (Ultralytics)
- **Weights**: Matt Nudi's honey bee detection model
- **Dataset**: Roboflow universe dataset
- **Accuracy**: ~60% for queens (low precision)
- **Classes**: worker, drone, queen, varroa
- **Issues**: High false positive rate for queens

### ⚙️ Configuration

#### Environment Variables
```bash
CLARIFAI_API_KEY=xxx
CLARIFAI_USER_ID=clarifai
CLARIFAI_APP_ID=main

MODELS_BEE_DETECTOR_URL=http://models-bee-detector:8700
MODELS_BEE_DETECTOR_ENABLED=false

QUEEN_DETECTION_CONFIDENCE_THRESHOLD=0.6
```

### 🧪 Testing

#### Unit Tests
- Location: `/test/detection/queens.test.ts`
- Coverage: Detection parsing, bbox calculation, confidence filtering
- Mocks: Clarifai API responses

#### Integration Tests
- Location: `/test/integration/queen-detection-flow.test.ts`
- Tests:
  - Full detection pipeline (upload → detect → store → query)
  - Clarifai API integration
  - Fallback to internal model
  - User verification workflow

#### Manual Testing
Test images available in:
- `/test/fixtures/queens/` - Known queen images
- Sample images from dataset with verified queens

### 📊 Performance Considerations

#### Metrics
- Clarifai API latency: 2-5 seconds per image
- Detection confidence threshold: 0.6 (configurable)
- False positive rate: ~30% (Clarifai), ~50% (internal model)
- True positive rate: ~70% (Clarifai), ~60% (internal model)

#### Bottlenecks
- Clarifai API rate limit: 10 requests/second
- External API dependency (network latency)
- Large images require longer processing
- Cost: $0.0012 per Clarifai prediction

#### Optimization Plans
- Train internal model with higher accuracy
- Implement model ensemble (multiple models voting)
- Cache results for identical images
- Batch processing for multiple frames

### 🚫 Technical Limitations

#### Current Constraints
- **Accuracy**: 60-70% detection rate (not production-ready for critical decisions)
- **False Positives**: High rate requires manual verification
- **Marked Queens**: Cannot detect marked queens differently (paint spots confuse model)
- **Image Quality**: Poor lighting or focus significantly reduces accuracy
- **Clarifai Dependency**: External API dependency for best results
- **Cost**: Per-detection cost for Clarifai API
- **No Tracking**: Cannot track same queen across multiple photos

#### Known Issues
- Model confuses large worker bees with queens
- Marked queens (with paint dots) often missed
- Multiple false positives per image common
- No confidence calibration (scores not well-calibrated)
- Dataset bias: Trained mostly on light-colored queens

### 🔗 Related Documentation
- [Queen Management](./queen-management.md)
- [Frame Photo Upload](./frame-photo-upload.md)
- [models-bee-detector](https://github.com/Gratheon/models-bee-detector)
- [Clarifai Documentation](https://docs.clarifai.com/)

### 📚 Development Resources

#### GitHub Repositories
- [image-splitter](https://github.com/Gratheon/image-splitter) - Detection orchestration
- [models-bee-detector](https://github.com/Gratheon/models-bee-detector) - Internal model
- [web-app](https://github.com/Gratheon/web-app) - Detection visualization

#### Key Files
- Detection job: `/src/jobs/detect-queens.ts`
- Clarifai client: `/src/integrations/clarifai.ts`
- Frontend overlay: `/src/page/hive/frameSide/DetectionOverlay.tsx`

#### Model Training Resources
- Dataset: [Roboflow Honey Bee Detection](https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb)
- YOLOv5 weights: Matt Nudi's model
- Future: Custom dataset with more queen examples needed

### 💬 Technical Notes

- Current accuracy (~60-70%) not reliable for automated alerts without user verification
- Clarifai used because internal model training incomplete
- Future plan: Train internal model with larger queen-specific dataset
- Consider ensemble approach: multiple models voting for higher confidence
- User verification feedback could be used to retrain model
- Marked queens (painted) need separate detection class
- Queen detection more valuable when combined with queen management timeline
- False positives less critical than false negatives (missing queen is worse)

#### Improvement Roadmap
1. Collect larger queen-specific dataset (1000+ labeled queens)
2. Train internal YOLOv8 model with transfer learning
3. Implement model ensemble (Clarifai + internal + voting)
4. Add user feedback loop for model improvement
5. Detect marked vs unmarked queens separately
6. Implement confidence calibration
7. Add queen tracking across multiple photos

---
**Last Updated**: December 5, 2025

