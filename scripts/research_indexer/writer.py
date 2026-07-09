"""Update generated blocks inside research index markdown files."""

from __future__ import annotations

from pathlib import Path

from .constants import END_MARKER, LEGACY_END_MARKER, LEGACY_START_MARKER, START_MARKER

def write_or_update(path: Path, generated_body: str, shell_factory) -> None:
    existing = path.read_text(encoding="utf-8") if path.exists() else shell_factory()
    updated = replace_generated_block(existing, generated_body)
    if updated != existing:
        path.write_text(updated, encoding="utf-8")


def replace_generated_block(text: str, generated_body: str) -> str:
    generated_block = f"{START_MARKER}\n{generated_body.rstrip()}\n{END_MARKER}"

    if START_MARKER in text and END_MARKER in text:
        start_index = text.index(START_MARKER)
        end_index = text.index(END_MARKER, start_index) + len(END_MARKER)
        replaced = text[:start_index] + generated_block + text[end_index:]
        return ensure_trailing_newline(replaced)

    if LEGACY_START_MARKER in text and LEGACY_END_MARKER in text:
        start_index = text.index(LEGACY_START_MARKER)
        end_index = text.index(LEGACY_END_MARKER) + len(LEGACY_END_MARKER)
        migrated = text[:start_index].rstrip() + "\n\n" + generated_block + text[end_index:]
        return ensure_trailing_newline(migrated)

    separator = "\n\n" if text.rstrip() else ""
    return ensure_trailing_newline(text.rstrip() + separator + generated_block)


def ensure_trailing_newline(text: str) -> str:
    return text.rstrip() + "\n"
