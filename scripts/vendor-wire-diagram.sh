#!/usr/bin/env bash
set -euo pipefail

# WHY: blog-engine concatenates ordinary content JS. Copy the ESM library next to
# its hashed chunks under content/triangle/wire-diagram/ so 3D lazy-loads work.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
for candidate in \
  "${WIRE_DIAGRAM_SRC:-}" \
  "$HOME/git/wire-diagram" \
  "$ROOT/../wire-diagram"
do
  if [ -n "$candidate" ] && [ -f "$candidate/package.json" ]; then
    SRC="$candidate"
    break
  fi
done

if [ -z "${SRC:-}" ]; then
  echo "wire-diagram source not found. Set WIRE_DIAGRAM_SRC." >&2
  exit 1
fi

DEST="$ROOT/content/triangle/wire-diagram"
CSS_DEST="$ROOT/content/assets/css/wire-diagram.css"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$NVM_DIR/nvm.sh"
  nvm use 24 >/dev/null
fi

(cd "$SRC" && npm run build)

mkdir -p "$DEST"
find "$DEST" -maxdepth 1 -name '*.js' -delete
cp "$SRC"/dist/wire-diagram.js \
  "$SRC"/dist/view3d-*.js \
  "$SRC"/dist/OrbitControls-*.js \
  "$SRC"/dist/GLTFLoader-*.js \
  "$SRC"/dist/three.module-*.js \
  "$DEST/"

{
  echo "/* Vendored from wire-diagram. Refresh with scripts/vendor-wire-diagram.sh */"
  cat "$SRC/dist/wire-diagram.css"
} > "$CSS_DEST"

echo "Vendored wire-diagram JS into $DEST"
echo "Vendored widget CSS into $CSS_DEST"
