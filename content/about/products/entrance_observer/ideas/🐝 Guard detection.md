# 🐝 Guard detection

### 🎯 Purpose
Automatically detect and count guard bees stationed at the hive entrance to monitor colony defense capabilities and security status.

### 🎭 User Story
- As a beekeeper concerned about hive security and defense
- I want to monitor how many guard bees are protecting my hive entrance
- So that I can assess colony defense strength and detect potential vulnerability to robbing or attacks

### 🚀 Key Benefits
- **Defense monitoring**: Track colony security and guard bee activity levels
- **Vulnerability detection**: Identify weak colonies with insufficient guards
- **Seasonal insights**: Understand how guard patterns change throughout the year
- **Attack prevention**: Early warning for periods of reduced hive defense

### 🔧 Technical Overview
Identifies relatively stationary bees positioned at strategic entrance locations using computer vision to detect bees that remain in defensive positions rather than actively entering/exiting. Analyzes bee positioning, movement patterns, and duration of stay to classify guard behavior.

### 📋 Acceptance Criteria
- Detects stationary bees remaining at entrance >30 seconds
- Distinguishes guard bees from resting or cleaning bees
- Counts active guards with >70% accuracy
- Sends guard count metrics to telemetry API every 10 minutes
- Displays guard count in hive dashboard view
- Tracks guard activity patterns over time

### 🚫 Out of Scope
- Pheromone analysis (visual detection only)
- Individual guard bee identification across sessions
- Inside-hive guard positioning
- Automatic alert generation (requires field testing validation)

### 🏗️ Implementation Approach
- **Behavior analysis**: Track bee position stability and movement patterns
- **Position mapping**: Identify common guard locations on landing board
- **Duration tracking**: Monitor how long bees remain in defensive positions
- **Pattern recognition**: Machine learning to distinguish guard vs. other behaviors
- **Integration**: Send metrics via existing telemetry API infrastructure

### 📊 Success Metrics
- Guard detection accuracy &gt;70% compared to manual observation
- Position stability classification accuracy &gt;80%
- Real-time processing with &lt;5 second update intervals
- Integration success with telemetry API and dashboard
- Seasonal pattern recognition capability

### 🔗 Related Features
- [📈 Count bees coming in and out - on the edge](../features/📈%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge.md)
- [📊 Bee movement metric reporting](../features/📊%20Bee%20movement%20metric%20reporting.md)
- [🔔 Alerts based on bee counter](🔔%20Alerts%20based%20on%20bee%20counter.md)

### 📚 Resources & References
- Research on bee guard behavior and defensive strategies
- Computer vision techniques for stationary object detection
- Beekeeping literature on colony defense patterns

### 💬 Notes
Guards defend against robbing bees, wasps, and hornet attacks using pheromone detection. Alert system for absent guards requires extensive field testing due to potential false positives. Valuable metric for assessing colony strength and vulnerability.
