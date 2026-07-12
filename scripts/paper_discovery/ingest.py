"""Download PDFs and write research paper markdown pages."""

from __future__ import annotations

import json
import urllib.request
from pathlib import Path
from typing import Any

from .constants import PDF_DIR, PAPERS_DIR

DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
    )
}


def download_pdf(url: str, dest_path: Path, headers: dict[str, str] | None = None) -> bool:
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    request = urllib.request.Request(url, headers=headers or DEFAULT_HEADERS)
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            content = response.read()
    except Exception as exc:
        print(f"Failed to download {url}: {exc}")
        return False

    if not content.startswith(b"%PDF-"):
        print(f"Downloaded content is not a PDF for {url}")
        return False

    dest_path.write_bytes(content)
    print(f"Saved PDF to {dest_path} ({len(content)} bytes)")
    return True


def write_paper_markdown(paper: dict[str, Any], papers_dir: Path = PAPERS_DIR) -> Path:
    title = paper["title"]
    md_filename = f"{title.replace('/', '_')}.md"
    md_path = papers_dir / md_filename

    authors_yaml = "\n".join(f"- {author}" for author in paper.get("authors", []))
    orgs_yaml = "\n".join(f'- "{org}"' for org in paper.get("orgs", []))
    topics_yaml = "\n".join(f"- {topic}" for topic in paper.get("topics", []))
    product_areas_yaml = "\n".join(f"- {area}" for area in paper.get("productAreas", []))

    pdf_filename = paper["filename"]
    doi = paper.get("doi")
    doi_line = f"doi: {doi}" if doi else ""

    md_content = f"""---
hideNav: true
layout: research
hideToc: true
title: {title}
description: {paper.get("description", "")}
year: '{paper.get("year", "")}'
authors:
{authors_yaml}
orgs:
{orgs_yaml}
topics:
{topics_yaml}
productAreas:
{product_areas_yaml}
paperType: {paper.get("paperType", "journal")}
pdf: "/assets/research/papers/pdfs/{pdf_filename}"
{doi_line}
abstract: '{paper.get("abstract", "").replace("'", "''")}'
---

## Relevancy to Gratheon

{paper.get("relevancy", "Add a short explanation of why this paper matters for Gratheon.")}
"""

    md_path.write_text(md_content, encoding="utf-8")
    print(f"Wrote metadata to {md_path}")
    return md_path


def ingest_paper(paper: dict[str, Any], papers_dir: Path = PAPERS_DIR, pdf_dir: Path = PDF_DIR) -> bool:
    pdf_path = pdf_dir / paper["filename"]
    if not download_pdf(paper["url"], pdf_path):
        return False
    write_paper_markdown(paper, papers_dir=papers_dir)
    return True


def ingest_from_manifest(manifest_path: Path) -> list[dict[str, Any]]:
    papers = json.loads(manifest_path.read_text(encoding="utf-8"))
    ingested: list[dict[str, Any]] = []
    for paper in papers:
        if ingest_paper(paper):
            ingested.append(paper)
    return ingested
