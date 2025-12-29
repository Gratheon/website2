---
sidebar_position: 2
---
# Join Colonies - Technical Documentation

### 🎯 Overview
Join Colonies feature enables merging two bee colonies by moving boxes from source hive to target hive, with queen management options, automatic box type filtering, and complete historical tracking. Real-time event broadcasting ensures UI consistency across sessions.

### 🏗️ Architecture

#### Components
- **JoinColonyModal**: React component (260 lines) with two-panel hive comparison
- **joinHives**: GraphQL mutation with validation and atomic operations
- **event-stream-filter**: Real-time event broadcasting for UI updates

#### Services
- **swarm-api**: Core merge logic, box movement, status updates
- **web-app**: Frontend UI with interactive merge type toggle
- **Redis**: pub/sub for real-time event broadcasting
- **event-stream-filter**: WebSocket connections for live updates

#### Data Flow
```mermaid
graph LR
    A[Web App] -->|joinHives mutation| B[GraphQL Router]
    B --> C[swarm-api]
    C -->|BEGIN TRANSACTION| D[MySQL]
    C -->|Filter boxes| D
    C -->|Move boxes to target| D
    C -->|Update hive status| D
    C -->|Record merge metadata| D
    D -->|COMMIT| C
    C --> E[Redis pub/sub]
    E --> F[event-stream-filter]
    F -->|WebSocket| G[Connected Clients]
    C --> B
    B --> A
```

### 📋 Technical Specifications

#### Database Schema
```sql
ALTER TABLE hives
  ADD COLUMN merged_into_hive_id INT UNSIGNED NULL,
  ADD COLUMN merge_date DATETIME NULL,
  ADD COLUMN merge_type ENUM('both_queens', 'source_queen_kept', 'target_queen_kept') NULL,
  ADD INDEX idx_merged_into_hive_id (merged_into_hive_id);
```

#### GraphQL API

**Mutation**
```graphql
mutation JoinHives($sourceHiveId: ID!, $targetHiveId: ID!, $mergeType: MergeType!) {
  joinHives(
    sourceHiveId: $sourceHiveId
    targetHiveId: $targetHiveId
    mergeType: $mergeType
  ) {
    id
    name
    status
    mergedIntoHiveId
    mergeDate
    mergeType
    mergedFromHives {
      id
      name
      mergeDate
      mergeType
    }
  }
}

enum MergeType {
  both_queens
  source_queen_kept
  target_queen_kept
}
```

**Query**
```graphql
query GetHive($hiveId: ID!) {
  hive(id: $hiveId) {
    id
    name
    status
    mergedIntoHive {
      id
      name
    }
    mergedFromHives {
      id
      name
      mergeDate
      mergeType
    }
  }
}
```

#### Redis Events
```
hive:join:{targetHiveId}
hive:merged:{sourceHiveId}
```

### 🔧 Implementation Details

#### Frontend
- **Framework**: React with TypeScript
- **State Management**: useState for modal state, target selection, merge type
- **UI Components**:
  - Two-panel layout (source left, target right)
  - Toggle button for merge type (cycles through 3 options)
  - Real-time validation and error handling
- **Event Handling**: WebSocket subscription for live updates

#### Backend (Go)
**Box Filtering Logic**
```go
func filterMovableBoxes(boxes []Box) []Box {
    var movableBoxes []Box
    for _, box := range boxes {
        if box.Type != "BOTTOM" && box.Type != "GATE" {
            movableBoxes = append(movableBoxes, box)
        }
    }
    return movableBoxes
}
```

**Merge Process**
1. Validate source and target hives exist
2. Validate same apiary
3. Validate source not already merged
4. Get all boxes from source hive
5. Filter boxes (exclude BOTTOM and GATE)
6. Get max position in target hive
7. Begin transaction
8. Move boxes: `UPDATE boxes SET hive_id = ?, position = ? WHERE id IN (?)`
9. Update source hive: `UPDATE hives SET status = 'merged', merged_into_hive_id = ?, merge_date = NOW(), merge_type = ? WHERE id = ?`
10. Commit transaction
11. Publish Redis events
12. Return updated target hive

#### Performance
- Database transaction ensures atomicity (all or nothing)
- Box filtering done in memory (fast operation)
- Position recalculation batched in single UPDATE
- Redis pub/sub non-blocking for mutation response
- WebSocket events delivered asynchronously

### ⚙️ Configuration
No special configuration required. Uses existing:
- MySQL connection pool
- Redis connection for pub/sub
- WebSocket server in event-stream-filter
