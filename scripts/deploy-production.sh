#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/www/website}"
LIVE_APP_DIR="$APP_DIR"
SHARED_DIR="${SHARED_DIR:-$LIVE_APP_DIR/shared}"
REMOTE="${REMOTE:-origin}"
BRANCH="${BRANCH:-main}"
TARGET_REF="$REMOTE/$BRANCH"

repo_owner() {
    if stat -c '%U' "$APP_DIR" >/dev/null 2>&1; then
        stat -c '%U' "$APP_DIR"
    else
        stat -f '%Su' "$APP_DIR"
    fi
}

git_as_repo_owner() {
    local owner
    owner="$(repo_owner)"

    if [ "$(id -u)" -eq 0 ] && [ "$owner" != "root" ] && command -v runuser >/dev/null 2>&1; then
        runuser -u "$owner" -- git -C "$APP_DIR" "$@"
    else
        git -C "$APP_DIR" "$@"
    fi
}

prepare_build_cache() {
    mkdir -p "$SHARED_DIR/cache"

    # WHY: image variants must survive clean builds, but the website repo itself
    # should stay cheap to update. Keep the engine cache in shared storage and
    # expose it as the repo-local .cache path expected by blog-engine.
    if [ -e "$LIVE_APP_DIR/.cache" ] && [ ! -L "$LIVE_APP_DIR/.cache" ]; then
        if [ -d "$LIVE_APP_DIR/.cache/images" ] && [ ! -e "$SHARED_DIR/cache/images" ]; then
            mv "$LIVE_APP_DIR/.cache/images" "$SHARED_DIR/cache/images"
        fi
        rm -rf "$LIVE_APP_DIR/.cache"
    fi

    ln -sfn "$SHARED_DIR/cache" "$LIVE_APP_DIR/.cache"
}

git_as_repo_owner fetch "$REMOTE" "$BRANCH"

# WHY: creating a detached temp worktree checks out all ~2.3k tracked files on
# every deploy, including large research PDFs/media. Updating the persistent
# deployment checkout only touches files changed since the previous release,
# while the public site remains served from the immutable current/ symlink.
git_as_repo_owner reset --hard "$TARGET_REF"
git_as_repo_owner clean -fd \
    -e .cache \
    -e current \
    -e current.next \
    -e releases \
    -e shared

prepare_build_cache

APP_DIR="$LIVE_APP_DIR" \
PUBLIC_DIR="$LIVE_APP_DIR/current" \
RELEASES_DIR="$LIVE_APP_DIR/releases" \
SHARED_DIR="$SHARED_DIR" \
KEEP_RELEASES="${KEEP_RELEASES:-2}" \
BLOG_ENGINE="${BLOG_ENGINE:-}" \
    "$LIVE_APP_DIR/restart.sh" --publish-only

if [ ! -L "$LIVE_APP_DIR/current" ] || [ ! -f "$LIVE_APP_DIR/current/index.html" ]; then
    echo "Published release is not active at $LIVE_APP_DIR/current/index.html" >&2
    ls -la "$LIVE_APP_DIR" >&2 || true
    ls -la "$LIVE_APP_DIR/current" >&2 || true
    exit 1
fi

cd "$LIVE_APP_DIR"
./restart.sh --activate-only
