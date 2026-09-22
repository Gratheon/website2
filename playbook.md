# Playbook

- In non-interactive shells, `nvm` may not be sourced even when Node is available. Verify `node --version` first; source `$NVM_DIR/nvm.sh` only when version switching is required.
- For multi-file text replacements, validate and apply each independent replacement atomically. A missing later match must not leave the preceding replacements in an ambiguous partially updated state.
- If a configured subagent is unavailable, record the unavailable agent ID and continue with local review/build checks rather than repeatedly retrying the same delegation.
- HTML pages and Markdown pages are parsed differently by blog-engine-md. Keep complex inline `<style>` and module scripts in an `.html` source page; embedding them in Markdown can corrupt CSS during rendering.
- During a multi-step migration, do not delete temporary recovery inputs until the final build passes. When a tracked source was overwritten, recover it directly from `git show HEAD:<path>`.
- Refreshing `wire-diagram` must copy every `dist/*.js` chunk, not only `wire-diagram.js` and the 3D helpers. The ESM entry now re-exports from a hashed `index-*.js`; without that sibling, YAML `number`/`gpio` fields will not parse or render.
- When asserting that UI copy was removed, strip `<script>` tags from Chrome `--dump-dom` output first. Leftover strings in JS comments otherwise look like a failed removal.
