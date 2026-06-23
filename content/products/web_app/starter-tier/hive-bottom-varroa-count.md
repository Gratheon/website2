---
status: in-progress
title: 🦀 Hive bottom board varroa counting
layout: products
---

Varroa mites are parasitic pests that weaken honey bee colonies by feeding on their hemolymph. Regular monitoring of varroa populations is essential for colony health. Traditional counting methods involve placing a white sticky board at the hive bottom and manually counting fallen mites - a time-consuming and error-prone process.


<iframe width="100%" height="400" src="https://www.youtube.com/embed/1ghYZX55LP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 🎯 Purpose
Track varroa mite infestation levels by uploading and analyzing images of your hive bottom board. The app automatically counts varroa mites using AI, eliminating manual counting and providing accurate historical trends.

### 🎭 User Story
- As a beekeeper
- I want to upload photos of my hive bottom board sticky sheet
- So that I can automatically count varroa mites and monitor infestation levels over time
- And take timely treatment action when thresholds are exceeded

### 🚀 Key Benefits
- **Eliminates Manual Counting**: AI automatically detects and counts varroa mites in your images
- **Accurate & Consistent**: Computer vision provides more consistent counts than human inspection
- **Historical Tracking**: Images versioned with inspections show varroa trends over weeks/months
- **Treatment Planning**: Objective data helps decide when treatment is needed (typically over 3 mites per day indicates treatment threshold)
- **Time Saving**: Upload photo, get results in seconds - no more squinting at sticky boards

### 📋 How to Use

#### 1. Adding a Bottom Board to Your Hive

1. Navigate to your hive structure view in the app
2. Click the dropdown menu with box options
3. Select **"Add bottom"** 
4. The bottom board section appears in your hive structure

#### 2. Uploading Bottom Board Images

1. Select the bottom board in your hive structure
2. Click **"Upload bottom board image"**
3. Choose a photo from your device
4. The image uploads and AI automatically counts varroa mites
5. Results appear within seconds showing detected mites

**Photo Tips:**
- Use white sticky board or corrugated plastic sheet
- Ensure good lighting without glare or shadows
- Include the entire bottom board in frame
- Keep camera parallel to board (avoid angle shots)
- Take photos at similar times (e.g., after 24h exposure)
- Remove debris if possible for more accurate counts

#### 3. Interpreting Results

The app highlights detected varroa mites on your image and provides:
- **Total count**: Number of mites detected
- **Confidence scores**: Detection accuracy for each mite
- **Historical comparison**: Trend line showing how counts change over time

**Treatment Thresholds:**
- **Under 3 mites/day**: Healthy levels, continue monitoring
- **3-10 mites/day**: Consider treatment, monitor closely
- **Over 10 mites/day**: Treatment recommended

#### 4. Historical Tracking

Images are versioned with inspections:
- Create new inspection to snapshot current state
- Compare counts across weeks and months
- See if treatments reduced mite levels
- Track seasonal varroa population cycles

### 🔍 Feature Status

**Currently Available:**
- ✅ Add bottom board to hive structure
- ✅ Upload images from phone or camera
- ✅ Image storage and versioning with inspections
- ✅ View uploaded images in hive view

**In Development:**
- 🚧 Automated varroa mite counting with AI
- 🚧 Visual highlighting of detected mites on images
- 🚧 Historical trend charts and graphs
- 🚧 Treatment threshold alerts
- 🚧 Treatment effectiveness tracking

### 🚫 What This Feature Doesn't Do

- Physical bottom board hardware (software only)
- Live varroa monitoring (upload required)
- Automatic treatment application
- Replace professional veterinary diagnosis

### 🔗 Related Features

- [🔎 Inspection Management](../hobbyist-tier/inspection-management.md) - Version images with inspections
- Varroa Treatment Tracking (planned)
- Colony Health Dashboard (planned)

### 📚 Learn More

- [Varroa Bottom Detection - Technical Documentation](../../../docs/web-app/features/varroa-bottom-detection.md)

**For Beekeepers:**
- [Honey Bee Health Coalition - Varroa Guide](https://honeybeehealthcoalition.org/varroa/)
- [Understanding Varroa Mite Thresholds](https://honeybeehealthcoalition.org/varroa/)
