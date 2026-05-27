#!/usr/bin/env bash
set -euo pipefail

url="${1:-https://gratheon.com/}"
output="$(mktemp)"
headers="$(mktemp)"
trap 'rm -f "$output" "$headers"' EXIT

if ! curl --fail --location --show-error --silent --dump-header "$headers" --retry 3 --retry-delay 5 --max-time 30 "$url" > "$output"; then
  echo "Verification request failed: $url" >&2
  sed -n '1,20p' "$headers" >&2 || true
  sed -n '1,20p' "$output" >&2 || true
  exit 1
fi
test -s "$output"

case "$url" in
  *.css|*.js|*.mjs|*.json|*.xml|*.png|*.jpg|*.jpeg|*.webp|*.svg|*.ico|*.woff|*.woff2|*.ttf)
    if grep -Eqi '<!doctype html|<html' "$output"; then
      echo "Asset URL returned HTML instead of an asset: $url" >&2
      exit 1
    fi
    ;;
  *)
    if grep -Eqi 'Your Docusaurus site did not load properly|__docusaurus-base-url-issue-banner|Docusaurus v[0-9]' "$output"; then
      echo "Docusaurus fallback output detected at $url" >&2
      exit 1
    fi

    if ! grep -Eqi "<link[^>]+rel=[\"']?stylesheet" "$output"; then
      echo "No stylesheet link found at $url" >&2
      exit 1
    fi

    if ! grep -Eqi "<script[^>]+src=[\"']" "$output"; then
      echo "No JavaScript bundle link found at $url" >&2
      exit 1
    fi
    ;;
esac

printf 'Verified %s (%s bytes)\n' "$url" "$(wc -c < "$output" | tr -d ' ')"
