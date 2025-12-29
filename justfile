start:
    pnpm run start

build:
    pnpm run build

# Sync legal documents from website (source of truth) to all repositories
sync-licenses:
    #!/usr/bin/env bash
    set -e
    echo "🔄 Syncing licenses from website to repositories..."
    echo ""

    SOURCE_DIR="about/company/legal"
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

