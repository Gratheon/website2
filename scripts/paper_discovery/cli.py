"""CLI for research paper discovery and ingestion helpers."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from .arxiv import run_arxiv_search
from .constants import CACHE_DIR
from .ingest import ingest_from_manifest
from .openalex import default_from_date, run_openalex_search
from .pdf_receiver import serve_pdf_receiver
from .scoring import passes_quality_filter, score_candidate, should_reject_candidate


def score_candidates_file(
    input_path: Path,
    *,
    min_score: int,
    apply_filter: bool,
    output_path: Path,
) -> list[dict]:
    candidates = json.loads(input_path.read_text(encoding="utf-8"))
    scored: list[dict] = []

    for candidate in candidates:
        result = score_candidate(candidate)
        if result["total_score"] < min_score:
            continue
        if apply_filter:
            if should_reject_candidate(result):
                continue
            if not passes_quality_filter(result):
                continue
        scored.append(result)

    scored.sort(key=lambda item: (item["total_score"], item.get("date") or ""), reverse=True)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(scored, indent=2), encoding="utf-8")
    print(f"Scored {len(scored)} candidates (min_score={min_score}) -> {output_path}")
    return scored


def run_pipeline(*, from_date: str | None, year: int | None, min_score: int) -> None:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)

    openalex_path = run_openalex_search(from_date=from_date, year=year)
    arxiv_path = run_arxiv_search(year=year)
    scored_path = CACHE_DIR / "high_scoring_candidates.json"
    scored = score_candidates_file(
        openalex_path,
        min_score=min_score,
        apply_filter=True,
        output_path=scored_path,
    )

    print("\nTop OpenAlex candidates:")
    for item in scored[:10]:
        print(f"- [{item['total_score']}] {item['title']} ({item.get('date')})")
        print(f"  PDF: {item.get('pdf_url')}")

    arxiv_candidates = json.loads(arxiv_path.read_text(encoding="utf-8"))
    print(f"\narXiv candidates saved to {arxiv_path} ({len(arxiv_candidates)} items)")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Discover and ingest Gratheon research papers.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    openalex_parser = subparsers.add_parser("search-openalex", help="Search OpenAlex for new candidates")
    openalex_parser.add_argument("--from-date", help="ISO date lower bound, e.g. 2026-04-12")
    openalex_parser.add_argument("--year", type=int, help="Publication year filter")
    openalex_parser.add_argument("--output", default="candidates_openalex.json")

    arxiv_parser = subparsers.add_parser("search-arxiv", help="Search arXiv for new candidates")
    arxiv_parser.add_argument("--year", type=int, help="Publication year filter")
    arxiv_parser.add_argument("--output", default="candidates_arxiv.json")

    score_parser = subparsers.add_parser("score", help="Score OpenAlex candidates")
    score_parser.add_argument("--input", type=Path, default=CACHE_DIR / "candidates_openalex.json")
    score_parser.add_argument("--output", type=Path, default=CACHE_DIR / "high_scoring_candidates.json")
    score_parser.add_argument("--min-score", type=int, default=7)
    score_parser.add_argument(
        "--filter",
        action="store_true",
        help="Apply biology rejection keywords and require open PDF + tech terms",
    )

    run_parser = subparsers.add_parser("run", help="Run discovery pipeline (OpenAlex + arXiv + score)")
    run_parser.add_argument("--from-date", help="OpenAlex from-date; defaults to last 90 days")
    run_parser.add_argument("--year", type=int, help="Optional publication year filter for both sources")
    run_parser.add_argument("--min-score", type=int, default=7)

    ingest_parser = subparsers.add_parser("ingest", help="Ingest papers from a JSON manifest")
    ingest_parser.add_argument("manifest", type=Path, help="JSON list of paper objects")

    receiver_parser = subparsers.add_parser("pdf-receiver", help="Serve one-shot PDF upload endpoint")
    receiver_parser.add_argument("--port", type=int, default=9999)
    receiver_parser.add_argument("--forever", action="store_true")

    return parser


def run(argv: list[str] | None = None) -> None:
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command == "search-openalex":
        from_date = args.from_date
        if from_date is None and args.year is None:
            from_date = default_from_date()
        run_openalex_search(from_date=from_date, year=args.year, output_name=args.output)
        return

    if args.command == "search-arxiv":
        run_arxiv_search(year=args.year, output_name=args.output)
        return

    if args.command == "score":
        score_candidates_file(
            args.input,
            min_score=args.min_score,
            apply_filter=args.filter,
            output_path=args.output,
        )
        return

    if args.command == "run":
        run_pipeline(from_date=args.from_date, year=args.year, min_score=args.min_score)
        return

    if args.command == "ingest":
        ingested = ingest_from_manifest(args.manifest)
        print(f"Ingested {len(ingested)} papers from {args.manifest}")
        return

    if args.command == "pdf-receiver":
        serve_pdf_receiver(port=args.port, once=not args.forever)
        return

    parser.error(f"Unknown command: {args.command}")
