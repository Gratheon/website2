start:
    ../blog-engine-md/blog-engine serve

serve:
    ../blog-engine-md/blog-engine serve

build:
    rm -rf dist
    ../blog-engine-md/blog-engine build

# Publish generated output to the directory expected by the current nginx config.
publish:
    rm -rf build dist
    ../blog-engine-md/blog-engine build
    mv dist build

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
