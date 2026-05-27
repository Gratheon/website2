#!/usr/bin/env bash
set -euo pipefail

url="${1:-https://gratheon.com/}"
output="$(mktemp)"
trap 'rm -f "$output"' EXIT

curl --fail --location --retry 3 --retry-delay 5 --max-time 30 "$url" > "$output"
test -s "$output"

printf 'Verified %s (%s bytes)\n' "$url" "$(wc -c < "$output" | tr -d ' ')"
