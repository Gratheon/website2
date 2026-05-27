#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/www/website}"
REMOTE="${REMOTE:-origin}"
BRANCH="${BRANCH:-main}"

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

git_as_repo_owner fetch "$REMOTE" "$BRANCH"
git_as_repo_owner reset --hard "$REMOTE/$BRANCH"

cd "$APP_DIR"
./restart.sh
