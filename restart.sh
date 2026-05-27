#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)}"
PUBLISH_ONLY=0

if [ "${1:-}" = "--publish-only" ]; then
    PUBLISH_ONLY=1
fi

find_blog_engine() {
    if [ -n "${BLOG_ENGINE:-}" ]; then
        printf '%s\n' "$BLOG_ENGINE"
        return
    fi

    for candidate in \
        "$APP_DIR/../blog-engine-md/bin/blog-engine" \
        "$APP_DIR/../blog-engine-md/blog-engine" \
        "/www/blog-engine-md/bin/blog-engine" \
        "/www/blog-engine-md/blog-engine"
    do
        if [ -x "$candidate" ]; then
            printf '%s\n' "$candidate"
            return
        fi
    done

    printf '%s\n' "$APP_DIR/../blog-engine-md/bin/blog-engine"
}

repo_owner() {
    if stat -c '%U' "$APP_DIR" >/dev/null 2>&1; then
        stat -c '%U' "$APP_DIR"
    else
        stat -f '%Su' "$APP_DIR"
    fi
}

publish_site() {
    cd "$APP_DIR"

    local engine
    engine="$(find_blog_engine)"
    if [ ! -x "$engine" ]; then
        echo "Blog engine is not executable: $engine" >&2
        echo "Set BLOG_ENGINE=/path/to/blog-engine or build ../blog-engine-md/bin/blog-engine." >&2
        exit 1
    fi

    rm -rf dist
    "$engine" build

    if [ ! -f dist/index.html ]; then
        echo "Build finished without dist/index.html" >&2
        exit 1
    fi

    mkdir -p build
    if command -v rsync >/dev/null 2>&1; then
        rsync -a --delete dist/ build/
        rm -rf dist
    else
        rm -rf build
        mv dist build
    fi
}

run_publish_as_repo_owner() {
    local owner
    owner="$(repo_owner)"

    if [ "$(id -u)" -eq 0 ] && [ "$owner" != "root" ] && command -v runuser >/dev/null 2>&1; then
        RESTART_AS_REPO_USER=1 runuser -u "$owner" -- "$APP_DIR/restart.sh" --publish-only
    else
        publish_site
    fi
}

restart_search() {
    cd "$APP_DIR"

    if [ ! -f docker-compose.yml ]; then
        return
    fi

    if command -v docker-compose >/dev/null 2>&1; then
        docker-compose up -d --force-recreate --remove-orphans website-search
    elif docker compose version >/dev/null 2>&1; then
        docker compose up -d --force-recreate --remove-orphans website-search
    else
        echo "Docker Compose is not installed; skipped website-search restart." >&2
    fi
}

reload_nginx() {
    if [ "$(id -u)" -ne 0 ] || ! command -v nginx >/dev/null 2>&1; then
        return
    fi

    nginx -t

    if command -v systemctl >/dev/null 2>&1; then
        systemctl reload nginx
    else
        nginx -s reload
    fi
}

if [ "$PUBLISH_ONLY" -eq 1 ]; then
    publish_site
    exit 0
fi

run_publish_as_repo_owner
restart_search
reload_nginx
