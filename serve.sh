#!/bin/sh
set -e

cd /app

echo "Starting docusaurus in development mode..."
exec npx docusaurus start --host 0.0.0.0 --port 8081 --no-open --no-minify

