#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-https://video.gratheon.com}"
API_TOKEN="${API_TOKEN:-replace-with-your-token}"

# Generate an HLS playlist for a hive entrance video stream
curl \
  -X \
  GET \
  "$BASE_URL/hls/{uid}/{boxId}/{streamId}/playlist.m3u8"
