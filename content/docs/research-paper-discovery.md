---
title: Research paper discovery and update
order: 90
sidebar_position: 90
hide_table_of_contents: false
---

This document describes how Gratheon discovers, evaluates, and publishes new research papers on [gratheon.com/research](https://gratheon.com/research/). It is written for humans and for recurring AI jobs that maintain the research library.

## Goals

- Find new papers about precision beekeeping, hive monitoring, bee computer vision, Varroa detection, and related IoT topics.
- Avoid duplicates against papers already stored in `content/research/papers/`.
- Score and filter candidates before any PDF download or markdown page is created.
- Keep generated candidate data out of git.

## Repository layout

| Path | Purpose |
| --- | --- |
| `scripts/discover-research-papers.py` | CLI entry point |
| `scripts/paper_discovery/` | Discovery, scoring, ingest helpers |
| `scripts/generate-research-indexes.py` | Regenerates topic/year/product-area index pages |
| `content/research/papers/*.md` | Canonical paper pages (frontmatter + relevancy note) |
| `content/research/papers/pdfs/` | Stored PDF assets |
| `.cache/paper_discovery/` | Generated candidate JSON (gitignored) |

## Prerequisites

- Python 3.10+ (stdlib only; no extra pip packages)
- Network access to OpenAlex and arXiv
- For site rebuild after ingestion: `nvm use 24` then run the normal gratheon.com build/deploy flow

Do not commit secrets, API keys, or local machine paths. OpenAlex only needs a polite `User-Agent` (`mailto:research@gratheon.com`), already configured in code.

## Recurring discovery workflow

Run from the gratheon.com repository root:

```bash
python3 scripts/discover-research-papers.py run
```

This executes:

1. **OpenAlex search** - queries precision-beekeeping-related terms, deduplicates against existing papers, writes `.cache/paper_discovery/candidates_openalex.json`.
2. **arXiv search** - fetches recent bee-related preprints, skips known arXiv IDs, writes `.cache/paper_discovery/candidates_arxiv.json`.
3. **Scoring** - ranks OpenAlex candidates, applies biology/noise filters, writes `.cache/paper_discovery/high_scoring_candidates.json`.

### Useful CLI variants

```bash
# Last 90 days (default) on OpenAlex only
python3 scripts/discover-research-papers.py search-openalex

# Fixed publication year
python3 scripts/discover-research-papers.py search-openalex --year 2026
python3 scripts/discover-research-papers.py search-arxiv --year 2026

# Re-score an existing candidate file
python3 scripts/discover-research-papers.py score --filter --min-score 7
```

## Scoring rubric (OpenAlex)

Each candidate gets up to 10 points:

| Component | Max | What it measures |
| --- | ---: | --- |
| Topic match | 4 | Direct precision-beekeeping / monitoring relevance |
| Novelty | 2 | Assumed new because dedup already ran |
| Practical relevance | 2 | Datasets, detection, forecasting, counting |
| Source quality | 1 | Journal or proceedings article |
| Open PDF | 1 | Open-access PDF URL available |

Default ingest threshold: **total_score >= 7** with `--filter` enabled.

### Automatic rejection rules

The filter is intentionally stricter than the raw score because OpenAlex often returns papers that reuse bee vocabulary outside hive monitoring. A candidate must still have an open PDF and concrete technical terms, but the scorer now separates **field monitoring technology** from generic words such as `dataset`, `detection`, `sensor`, or `monitoring`.

Reject candidates when title/abstract indicates:

- **Bee vocabulary used only as a computing metaphor** - for example waggle-dance transformers for SDN intrusion detection, Honeybee Algorithm medical imaging, generic WSN routing, or unrelated robot navigation. Bee robotics and bio-hybrid systems are kept when they observe or interact with real honey bees.
- **Sniffer-bee security or defense** - explosives, landmines, illicit-substance detection, or similar security uses of conditioned bees.
- **Molecular/transcriptomic bee biology without monitoring technology** - transcriptome, ceRNA, hemolymph proteome, virome, molecular, mass-spectrometry, or bioinformatics papers are rejected unless they also include practical hive/bee monitoring hardware or data collection relevant to Gratheon.
- **Non-monitoring ecology and biomonitoring** - environmental pollution studies using bees/products, plant-pollinator ecology, foraging-only productivity, locomotor-only lab biology, and unrelated ant/fungus ecology are rejected unless they include hive sensors, cameras, acoustics, telemetry, or similar field monitoring technology.
- Existing off-topic biology keywords such as pesticides-only, phylogeny, stingless bees, apitherapy, venom, semen/sperm, gut microbiota, and essential-oil treatments.

Preserve candidates with direct product relevance: hive sensors, electronic/remote monitoring, computer vision, acoustics, Varroa detection, annotated datasets, hive entrance tracking, queen/hall-effect sensing, and bee robotics.

In the July 2026 cached OpenAlex scoring pass, these guardrails reduced filtered high-scoring candidates from 18 to 8. They removed 12 false positives from the previous output while keeping all known accepted monitoring papers represented in the test fixtures.

## Human or AI review step

Before ingesting anything:

1. Read `high_scoring_candidates.json` and `candidates_arxiv.json`.
2. Confirm the paper is new, on-topic, and useful for Gratheon product areas.
3. Download and skim the PDF when possible.
4. Prepare metadata: title, year, authors, orgs (with country flags if known), topics, productAreas, paperType, abstract, relevancy paragraph.

Topic slugs must match existing index pages under `content/research/papers/topics/`. Product area slugs must match `content/research/papers/product-areas/`.

## Ingesting an approved paper

### Option A - JSON manifest (recommended for automation)

Create a manifest such as `.cache/paper_discovery/approved.json`:

```json
[
  {
    "title": "Example Paper Title",
    "filename": "2026-example-paper.pdf",
    "url": "https://example.org/paper.pdf",
    "doi": "10.1234/example",
    "year": "2026",
    "authors": ["Author One"],
    "orgs": ["University"],
    "topics": ["iot-sensors", "colony-health"],
    "productAreas": ["monitoring-platform"],
    "paperType": "journal",
    "description": "One-line summary for the card view.",
    "abstract": "Short abstract text.",
    "relevancy": "Why this matters for Gratheon."
  }
]
```

Run:

```bash
python3 scripts/discover-research-papers.py ingest .cache/paper_discovery/approved.json
```

This downloads the PDF into `content/research/papers/pdfs/` and creates the markdown page beside other papers.

### Option B - Browser PDF helper

When a publisher blocks scripted downloads:

```bash
python3 scripts/discover-research-papers.py pdf-receiver --port 9999
```

POST a base64-encoded PDF to `http://localhost:9999/<filename>.pdf`, then create the markdown file manually or via manifest ingest without the `url` download step.

## Post-ingestion site update

After adding or editing paper markdown:

```bash
nvm use 24
python3 scripts/generate-research-indexes.py
# then run the normal site build/deploy pipeline
```

Verify:

- Paper appears on `/research/papers/`
- PDF link works under `/assets/research/papers/pdfs/`
- Topic, year, and product-area index pages include the new entry

## What not to commit

- `.cache/paper_discovery/*.json` (candidate outputs)
- Downloaded PDFs are committed only after human/AI approval
- No `.env`, credentials, or one-off local manifests with private notes

## Maintenance notes for AI jobs

- Prefer `run` weekly or after major conference deadlines.
- If OpenAlex rate-limits, rerun later; the script already sleeps between queries.
- When a paper already exists under a slightly different title, check DOI and arXiv ID before creating a duplicate page.
- Keep relevancy sections practical: mention Gratheon sensors, edge devices, CV pipeline, or robotics only when justified by the paper.
- If scoring produces zero results, widen `--from-date` or inspect raw `candidates_openalex.json` before lowering `min_score`.

## Related pages

- [Other research sources](/research/papers/other-research-sources/) - manual search portals
- [Research papers index](/research/papers/) - published library
