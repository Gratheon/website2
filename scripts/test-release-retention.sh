#!/usr/bin/env bash
set -euo pipefail

if [ "${1:-}" = "build" ]; then
    mkdir -p "$APP_DIR/dist/assets"
    printf '<!doctype html><title>%s</title>\n' "${FAKE_CONTENT:-test}" > "$APP_DIR/dist/index.html"
    printf 'unchanged asset\n' > "$APP_DIR/dist/assets/site.txt"
    if [ "${FAKE_BUILD_FAIL:-0}" -eq 1 ]; then
        exit 1
    fi
    exit 0
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TEST_DIR="$(mktemp -d -t website-retention.XXXXXX)"
trap 'rm -rf -- "$TEST_DIR"' EXIT

cp "$SOURCE_DIR/restart.sh" "$TEST_DIR/restart.sh"

publish() {
    APP_DIR="$TEST_DIR" \
    PUBLIC_DIR="$TEST_DIR/current" \
    RELEASES_DIR="$TEST_DIR/releases" \
    SHARED_DIR="$TEST_DIR/shared" \
    KEEP_RELEASES=1 \
    BLOG_ENGINE="$SCRIPT_DIR/test-release-retention.sh" \
        "$TEST_DIR/restart.sh" --publish-only
}

FAKE_CONTENT=first publish
first_release="$(readlink -f "$TEST_DIR/current")"
test -f "$first_release/index.html"

FAKE_CONTENT=second publish
second_release="$(readlink -f "$TEST_DIR/current")"
test "$second_release" != "$first_release"
test ! -e "$first_release"
test "$(find "$TEST_DIR/releases" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')" -eq 1
test ! -e "$TEST_DIR/dist"

if FAKE_BUILD_FAIL=1 publish; then
    echo "Expected the simulated build to fail" >&2
    exit 1
fi

test "$(readlink -f "$TEST_DIR/current")" = "$second_release"
test -f "$second_release/index.html"
test "$(find "$TEST_DIR/releases" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')" -eq 1
test ! -e "$TEST_DIR/dist"

echo "Release retention test passed"
