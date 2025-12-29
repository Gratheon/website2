#!/bin/bash
cd /www/website/

docker-compose down website-search
docker-compose up -d website-search
