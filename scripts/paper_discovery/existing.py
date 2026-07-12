"""Load existing research papers for duplicate detection."""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

from .constants import PAPERS_DIR
from .normalize import normalize_doi, normalize_title

FRONTMATTER_PATTERN = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.DOTALL)
ARXIV_ID_PATTERN = re.compile(r"(\d{4}\.\d{4,5}(?:v\d+)?)")


@dataclass(frozen=True)
class ExistingPaperIndex:
    titles: set[str]
    dois: set[str]
    arxiv_ids: set[str]


def load_existing_papers(papers_dir: Path = PAPERS_DIR) -> ExistingPaperIndex:
    titles: set[str] = set()
    dois: set[str] = set()
    arxiv_ids: set[str] = set()

    if not papers_dir.exists():
        return ExistingPaperIndex(titles=titles, dois=dois, arxiv_ids=arxiv_ids)

    for path in papers_dir.glob("*.md"):
        if path.name == "index.md":
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except OSError as exc:
            print(f"Warning: could not read {path.name}: {exc}")
            continue

        match = FRONTMATTER_PATTERN.match(content)
        if not match:
            continue

        yaml_content = match.group(1)
        title_match = re.search(r'title:\s*"?(.+?)"?\n', yaml_content)
        doi_match = re.search(r'doi:\s*"?(.+?)"?\n', yaml_content)
        pdf_match = re.search(r'pdf:\s*"?(.+?)"?\n', yaml_content)

        title = title_match.group(1) if title_match else ""
        doi = doi_match.group(1) if doi_match else ""
        pdf = pdf_match.group(1) if pdf_match else ""

        if title:
            titles.add(normalize_title(title))
        if doi:
            dois.add(normalize_doi(doi))

        arxiv_match = ARXIV_ID_PATTERN.search(f"{pdf} {doi} {content}")
        if arxiv_match:
            arxiv_ids.add(arxiv_match.group(1).lower())

    return ExistingPaperIndex(titles=titles, dois=dois, arxiv_ids=arxiv_ids)
