#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/www/website}"
LIVE_APP_DIR="$APP_DIR"
REMOTE="${REMOTE:-origin}"
BRANCH="${BRANCH:-main}"
TARGET_REF="$REMOTE/$BRANCH"
WORKTREE_DIR=""

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

cleanup_worktree() {
    if [ -n "$WORKTREE_DIR" ]; then
        git_as_repo_owner worktree remove --force "$WORKTREE_DIR" >/dev/null 2>&1 || rm -rf "$WORKTREE_DIR"
    fi
}
trap cleanup_worktree EXIT

git_as_repo_owner fetch "$REMOTE" "$BRANCH"

WORKTREE_DIR="$(mktemp -d -t website-release.XXXXXX)"
rm -rf "$WORKTREE_DIR"
git_as_repo_owner worktree add --detach "$WORKTREE_DIR" "$TARGET_REF"

APP_DIR="$WORKTREE_DIR" \
PUBLIC_DIR="$LIVE_APP_DIR/current" \
RELEASES_DIR="$LIVE_APP_DIR/releases" \
SHARED_DIR="$LIVE_APP_DIR/shared" \
BLOG_ENGINE="${BLOG_ENGINE:-}" \
    "$WORKTREE_DIR/restart.sh" --publish-only

git_as_repo_owner reset --hard "$TARGET_REF"

cd "$LIVE_APP_DIR"
./restart.sh --activate-only
