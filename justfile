start:
    "${BLOG_ENGINE:-../blog-engine-md/bin/blog-engine}" serve

serve:
    "${BLOG_ENGINE:-../blog-engine-md/bin/blog-engine}" serve

research-indexes:
    python3 scripts/generate-research-indexes.py

build:
    rm -rf dist
    "${BLOG_ENGINE:-../blog-engine-md/bin/blog-engine}" build

# Publish generated output to releases/ and atomically update current.
publish:
    ./restart.sh --publish-only

# Sync legal documents from website (source of truth) to all repositories
sync-licenses:
    #!/usr/bin/env bash
    set -e
    echo "🔄 Syncing licenses from website to repositories..."
    echo ""

    SOURCE_DIR="content/about/company/legal"
    REPOS=(
        "../web-app"
        "../entrance-observer"
        "../graphql-router"
        "../alerts"
        "../user-cycle"
        "../telemetry-api"
        "../swarm-api"
        "../gate-video-stream"
        "../image-splitter"
        "../event-stream-filter"
        "../weather"
    )

    for repo in "${REPOS[@]}"; do
        if [ -d "$repo" ]; then
            echo "📦 Syncing to: $repo"
            cp "$SOURCE_DIR/LICENSE-COMMERCIAL.md" "$repo/LICENSE-COMMERCIAL.md" 2>/dev/null || echo "   ⚠️  Could not copy LICENSE-COMMERCIAL.md"
            cp "$SOURCE_DIR/CONTRIBUTING.md" "$repo/CONTRIBUTING.md" 2>/dev/null || echo "   ⚠️  Could not copy CONTRIBUTING.md"
            echo "   ✅ Done"
        else
            echo "   ⏭️  Skipped (not found): $repo"
        fi
    done

    echo ""
    echo "✅ License sync complete!"
    echo "📍 Source of truth: website/$SOURCE_DIR/"
