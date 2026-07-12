"""OpenAlex search for new research candidates."""

from __future__ import annotations

import json
import time
import urllib.parse
import urllib.request
from datetime import date, timedelta
from pathlib import Path
from typing import Any

from .constants import CACHE_DIR, OPENALEX_QUERIES, OPENALEX_USER_AGENT
from .existing import ExistingPaperIndex, load_existing_papers
from .normalize import normalize_doi, normalize_title


def default_from_date(days: int = 90) -> str:
    return (date.today() - timedelta(days=days)).isoformat()


def search_openalex(
    *,
    from_date: str | None = None,
    year: int | None = None,
    queries: list[str] | None = None,
    existing: ExistingPaperIndex | None = None,
) -> list[dict[str, Any]]:
    existing = existing or load_existing_papers()
    queries = queries or OPENALEX_QUERIES
    candidates: dict[str, dict[str, Any]] = {}

    for query in queries:
        encoded = urllib.parse.quote(query)
        if from_date:
            filter_expr = f"from_publication_date:{from_date},title_and_abstract.search:{encoded}"
            label = f"{query} on/after {from_date}"
        elif year:
            filter_expr = f"publication_year:{year},title_and_abstract.search:{encoded}"
            label = f"{query} in {year}"
        else:
            filter_expr = f"title_and_abstract.search:{encoded}"
            label = query

        url = f"https://api.openalex.org/works?filter={filter_expr}&per-page=50"
        print(f"Querying OpenAlex for: {label}")

        try:
            request = urllib.request.Request(url, headers={"User-Agent": OPENALEX_USER_AGENT})
            with urllib.request.urlopen(request, timeout=15) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except Exception as exc:
            print(f"Error querying OpenAlex for {query}: {exc}")
            continue

        for item in payload.get("results", []):
            title = item.get("title")
            if not title:
                continue

            norm_title = normalize_title(title)
            if norm_title in existing.titles:
                continue

            doi = normalize_doi(item.get("doi"))
            if doi and doi in existing.dois:
                continue

            key = doi or norm_title
            candidates.setdefault(key, item)

        time.sleep(0.5)

    return list(candidates.values())


def save_candidates(candidates: list[dict[str, Any]], output_path: Path) -> Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(candidates, indent=2), encoding="utf-8")
    return output_path


def run_openalex_search(
    *,
    from_date: str | None = None,
    year: int | None = None,
    output_name: str = "candidates_openalex.json",
) -> Path:
    if from_date is None and year is None:
        from_date = default_from_date()

    candidates = search_openalex(from_date=from_date, year=year)
    output_path = CACHE_DIR / output_name
    save_candidates(candidates, output_path)
    print(f"Found {len(candidates)} new OpenAlex candidates -> {output_path}")
    return output_path
