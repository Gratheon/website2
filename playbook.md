# Playbook

- In non-interactive shells, `nvm` may not be sourced even when Node is available. Verify `node --version` first; source `$NVM_DIR/nvm.sh` only when version switching is required.
- For multi-file text replacements, validate and apply each independent replacement atomically. A missing later match must not leave the preceding replacements in an ambiguous partially updated state.
- If a configured subagent is unavailable, record the unavailable agent ID and continue with local review/build checks rather than repeatedly retrying the same delegation.
- HTML pages and Markdown pages are parsed differently by blog-engine-md. Keep complex inline `<style>` and module scripts in an `.html` source page; embedding them in Markdown can corrupt CSS during rendering.
- During a multi-step migration, do not delete temporary recovery inputs until the final build passes. When a tracked source was overwritten, recover it directly from `git show HEAD:<path>`.
- Refreshing `wire-diagram` must copy every `dist/*.js` chunk, not only `wire-diagram.js` and the 3D helpers. The ESM entry now re-exports from a hashed `index-*.js`; without that sibling, YAML `number`/`gpio` fields will not parse or render.
- When asserting that UI copy was removed, strip `<script>` tags from Chrome `--dump-dom` output first. Leftover strings in JS comments otherwise look like a failed removal.
- `current` can be a broken symlink. Repo-wide ripgrep then aborts; search `content/` or another real directory instead of the repo root.
- `/docs/` is auto-listed unless `content/docs/index.html` exists. For a designed hub, ship an HTML index with `hideToc` and no `showChildren`, and keep internal runbooks out of `content/docs/`.
- Entrance Observer lab wiring must use builtin `kind: jetson-orin-nano`, not a host `kind: jetson`. Leave POWER/USB3/ETH/DP without `pin.position` so 3D wires land on the library ports. Unqualified `jetson.GND` is header pin 6, not the barrel; official Orin Nano kit power is the 19 V DC barrel, USB-C is data/recovery only, and video is DisplayPort.
- Lab product wiring is electrical interconnect only. Do not put 2020 extrusion, camera mount, or other mechanical joints on the schematic, table, or BOM map; those stay on the Phase 1 Lab BOM.
- To assert Jetson 3D pin alignment in Node, import the vendored `view3d-*.js` chunk first. Builtin resolvers register on that lazy import; `localPinPosition` from the ESM entry alone falls back to schematic edge slots.
- Entrance Observer lab wiring belongs on the product HTML page (`entrance-observer.html` at `/docs/entrance-observer/#wiring-diagram`), same pattern as Beehive sensors. Keep the old phase-1 wiring URL as a `redirectUrl` stub.
- `blog-engine serve` can rebuild in a loop if `content/embeddings.json` is rewritten while watched. Stop the server after verification and do not commit that file.
- Legacy case-sensitive URLs (for example `/research/Datasets/`) need a separate `redirectUrl` stub with an explicit `slug: Datasets`. blog-engine lowercases generated slugs, so the main page stays at `/research/datasets/`. On case-insensitive macOS builds, `datasets/` and `Datasets/` collide in `dist/`; verify redirect stubs on Linux production or by URL path case, not only by local `dist` layout.
- A curl during a live rebuild can 404 a localized `/ru/` page that already exists in the finished `dist`. Recheck after the rebuild completes.
