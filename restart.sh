#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)}"
PUBLIC_DIR="${PUBLIC_DIR:-$APP_DIR/current}"
RELEASES_DIR="${RELEASES_DIR:-$APP_DIR/releases}"
SHARED_DIR="${SHARED_DIR:-$APP_DIR/shared}"
KEEP_RELEASES="${KEEP_RELEASES:-2}"
PUBLISH_ONLY=0
ACTIVATE_ONLY=0

while [ "$#" -gt 0 ]; do
    case "$1" in
        --publish-only)
            PUBLISH_ONLY=1
            ;;
        --activate-only)
            ACTIVATE_ONLY=1
            ;;
        *)
            echo "Unknown option: $1" >&2
            exit 2
            ;;
    esac
    shift
done

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

release_id() {
    local sha
    sha="$(git -C "$APP_DIR" rev-parse --short HEAD 2>/dev/null || true)"
    if [ -n "$sha" ]; then
        printf '%s-%s\n' "$(date -u +%Y%m%d%H%M%S)" "$sha"
    else
        printf '%s\n' "$(date -u +%Y%m%d%H%M%S)"
    fi
}

prepare_shared_files() {
    mkdir -p "$SHARED_DIR"

    if [ -f "$APP_DIR/config/maintenance.html" ]; then
        cp "$APP_DIR/config/maintenance.html" "$SHARED_DIR/maintenance.html"
    fi
}

atomic_publish_release() {
    local release_dir="$1"
    local next_link="$PUBLIC_DIR.next"

    if [ -e "$PUBLIC_DIR" ] && [ ! -L "$PUBLIC_DIR" ]; then
        echo "Refusing to replace non-symlink publish target: $PUBLIC_DIR" >&2
        echo "Move the existing directory aside once, then rerun deploy." >&2
        exit 1
    fi

    ln -sfn "$release_dir" "$next_link"

    if ! mv -Tf "$next_link" "$PUBLIC_DIR" 2>/dev/null; then
        rm -f "$PUBLIC_DIR"
        mv -f "$next_link" "$PUBLIC_DIR"
    fi
}

prune_old_releases() {
    local current_target
    current_target="$(readlink "$PUBLIC_DIR" 2>/dev/null || true)"

    find "$RELEASES_DIR" -mindepth 1 -maxdepth 1 -type d -print 2>/dev/null \
        | sort -r \
        | awk -v keep="$KEEP_RELEASES" 'NR > keep' \
        | while IFS= read -r old_release; do
            if [ "$old_release" = "$current_target" ]; then
                continue
            fi
            rm -rf "$old_release"
        done
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
    python3 scripts/generate-rest-api-docs.py
    "$engine" build

    if [ ! -f dist/index.html ]; then
        echo "Build finished without dist/index.html" >&2
        exit 1
    fi

    prepare_shared_files
    mkdir -p "$RELEASES_DIR"

    local release_dir
    release_dir="$RELEASES_DIR/$(release_id)"
    while [ -e "$release_dir" ]; do
        release_dir="$RELEASES_DIR/$(release_id)-$RANDOM"
    done
    mkdir -p "$release_dir"

    local current_target
    current_target="$(readlink "$PUBLIC_DIR" 2>/dev/null || true)"

    if command -v rsync >/dev/null 2>&1; then
        if [ -n "$current_target" ] && [ -d "$current_target" ]; then
            rsync -a --delete --link-dest="$current_target" dist/ "$release_dir/"
        else
            rsync -a --delete dist/ "$release_dir/"
        fi
    else
        cp -R dist/. "$release_dir/"
    fi

    chmod -R u+rwX,go+rX "$release_dir"
    chmod -R u+rwX,go+rX "$SHARED_DIR"
    chmod go+X "$RELEASES_DIR" "$(dirname "$PUBLIC_DIR")"

    {
        printf 'git_sha=%s\n' "$(git -C "$APP_DIR" rev-parse HEAD 2>/dev/null || true)"
        printf 'published_at=%s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
    } > "$release_dir/.release"

    rm -rf dist
    atomic_publish_release "$release_dir"
    prune_old_releases
}

run_publish_as_repo_owner() {
    local owner
    owner="$(repo_owner)"

    if [ "$(id -u)" -eq 0 ] && [ "$owner" != "root" ] && command -v runuser >/dev/null 2>&1; then
        runuser -u "$owner" -- env \
            APP_DIR="$APP_DIR" \
            PUBLIC_DIR="$PUBLIC_DIR" \
            RELEASES_DIR="$RELEASES_DIR" \
            SHARED_DIR="$SHARED_DIR" \
            KEEP_RELEASES="$KEEP_RELEASES" \
            BLOG_ENGINE="${BLOG_ENGINE:-}" \
            "$APP_DIR/restart.sh" --publish-only
    else
        publish_site
    fi
}

remove_legacy_search_container() {
    local docker_bin
    docker_bin="$(command -v docker || true)"
    if [ -z "$docker_bin" ]; then
        return
    fi

    { "$docker_bin" ps -aq --filter 'name=website-search' 2>/dev/null || true; } \
        | while IFS= read -r container_id; do
            [ -n "$container_id" ] || continue
            "$docker_bin" rm -f "$container_id" >/dev/null 2>&1 || true
        done
}

reload_nginx() {
    local nginx_bin
    nginx_bin="$(command -v nginx || true)"
    if [ -z "$nginx_bin" ] && [ -x /usr/sbin/nginx ]; then
        nginx_bin="/usr/sbin/nginx"
    fi
    if [ -z "$nginx_bin" ]; then
        return
    fi

    if [ "$(id -u)" -ne 0 ]; then
        if ! command -v sudo >/dev/null 2>&1 || ! sudo -n true >/dev/null 2>&1; then
            echo "Nginx reload requires root or passwordless sudo; skipped." >&2
            return
        fi

        sudo -n "$nginx_bin" -t

        if command -v systemctl >/dev/null 2>&1; then
            sudo -n "$(command -v systemctl)" reload nginx
        else
            sudo -n "$nginx_bin" -s reload
        fi
        return
    fi

    "$nginx_bin" -t

    if command -v systemctl >/dev/null 2>&1; then
        systemctl reload nginx
    else
        "$nginx_bin" -s reload
    fi
}

if [ "$PUBLISH_ONLY" -eq 1 ]; then
    publish_site
    exit 0
fi

if [ "$ACTIVATE_ONLY" -eq 1 ]; then
    remove_legacy_search_container
    reload_nginx
    exit 0
fi

run_publish_as_repo_owner
remove_legacy_search_container
reload_nginx
