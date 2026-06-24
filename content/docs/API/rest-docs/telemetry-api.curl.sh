#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-https://telemetry.gratheon.com}"
API_TOKEN="${API_TOKEN:-replace-with-your-token}"

# Check service health
curl \
  -X \
  GET \
  "$BASE_URL/health"

# Submit IoT sensor metrics
curl \
  -X \
  POST \
  "$BASE_URL/iot/v1/metrics" \
  -H \
  "Authorization: Bearer $API_TOKEN" \
  -H \
  "Content-Type: application/json" \
  --data \
  '{
  "hiveId": "hive-123",
  "timestamp": 1717238400,
  "dedupeKey": "device-7:1717238400",
  "fields": {
    "temperatureCelsius": 25.5,
    "humidityPercent": 65,
    "weightKg": 45.2
  }
}'

# Submit entrance movement metrics
curl \
  -X \
  POST \
  "$BASE_URL/entrance/v1/movement" \
  -H \
  "Authorization: Bearer $API_TOKEN" \
  -H \
  "Content-Type: application/json" \
  --data \
  '{
  "hiveId": "hive-123",
  "boxId": "box-entrance-1",
  "beesOut": 42,
  "beesIn": 39,
  "netFlow": -3,
  "avgSpeed": 7.4,
  "p95Speed": 14.1,
  "stationaryBees": 5,
  "detectedBees": 81,
  "beeInteractions": 12,
  "timestamp": 1717238400
}'
