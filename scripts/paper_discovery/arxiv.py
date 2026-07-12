"""arXiv search for new preprint candidates."""

from __future__ import annotations

import json
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Any

from .constants import ARXIV_QUERIES, CACHE_DIR
from .existing import ExistingPaperIndex, load_existing_papers

ATOM_NS = "{http://www.w3.org/2005/Atom}"


def search_arxiv(*, year: int | None = None, existing: ExistingPaperIndex | None = None) -> list[dict[str, Any]]:
    existing = existing or load_existing_papers()
    results: list[dict[str, Any]] = []
    seen_ids: set[str] = set()
    year_filter = str(year) if year is not None else None

    for query in ARXIV_QUERIES:
        encoded = urllib.parse.quote(query)
        url = (
            "http://export.arxiv.org/api/query?"
            f"search_query=all:{encoded}&start=0&max_results=50&sortBy=submittedDate&sortOrder=descending"
        )
        print(f"Querying arXiv for: {query}")

        try:
            request = urllib.request.Request(url)
            with urllib.request.urlopen(request, timeout=20) as response:
                root = ET.fromstring(response.read())
        except Exception as exc:
            print(f"Error querying arXiv for {query}: {exc}")
            continue

        for entry in root.findall(f"{ATOM_NS}entry"):
            id_url = entry.find(f"{ATOM_NS}id").text
            arxiv_id = id_url.split("/abs/")[-1].split("v")[0]
            if arxiv_id in seen_ids or arxiv_id.lower() in existing.arxiv_ids:
                continue
            seen_ids.add(arxiv_id)

            title = entry.find(f"{ATOM_NS}title").text.strip().replace("\n", " ")
            summary = entry.find(f"{ATOM_NS}summary").text.strip().replace("\n", " ")
            published = entry.find(f"{ATOM_NS}published").text
            published_year = published.split("-")[0]

            if year_filter and published_year != year_filter:
                continue

            authors = [
                author.find(f"{ATOM_NS}name").text
                for author in entry.findall(f"{ATOM_NS}author")
            ]

            pdf_url = ""
            for link in entry.findall(f"{ATOM_NS}link"):
                if link.attrib.get("title") == "pdf":
                    pdf_url = link.attrib.get("href", "")
                elif link.attrib.get("type") == "application/pdf":
                    pdf_url = link.attrib.get("href", "")
            if not pdf_url:
                pdf_url = f"https://arxiv.org/pdf/{arxiv_id}.pdf"

            results.append(
                {
                    "title": title,
                    "arxiv_id": arxiv_id,
                    "summary": summary,
                    "published": published,
                    "year": published_year,
                    "authors": authors,
                    "pdf_url": pdf_url,
                }
            )

    return results


def save_candidates(candidates: list[dict[str, Any]], output_path: Path) -> Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(candidates, indent=2), encoding="utf-8")
    return output_path


def run_arxiv_search(*, year: int | None = None, output_name: str = "candidates_arxiv.json") -> Path:
    candidates = search_arxiv(year=year)
    output_path = CACHE_DIR / output_name
    save_candidates(candidates, output_path)
    print(f"Found {len(candidates)} new arXiv candidates -> {output_path}")
    return output_path
