# Playbook

- In non-interactive shells, `nvm` may not be sourced even when Node is available. Verify `node --version` first; source `$NVM_DIR/nvm.sh` only when version switching is required.
- For multi-file text replacements, validate and apply each independent replacement atomically. A missing later match must not leave the preceding replacements in an ambiguous partially updated state.
