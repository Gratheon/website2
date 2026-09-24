# Research curation supplement: 2026-09-24

## Scope and concurrent-run boundary

Autonomous discovery window: 2026-06-26 through 2026-09-24, inclusive. Read and parsed all 158 starting top-level paper entries except `index.md`; inventoried 151 files under `pdfs/`. Built normalized title, DOI, arXiv ID, source URL and PDF-basename sets before discovery. No new recurring schedule was created.

A concurrent curator created four entries while this run was verifying sources, including the overlapping YOLO11/ByteTrack and multimodal weight-forecasting candidates. Those entries were not overwritten and are not claimed as additions by this run. This supplement owns only the two entries below and `pdfs/insects-17-00944.pdf`. Combined working-tree count after both runs: 164 paper notes and 154 PDF-directory files. Shared indexes were regenerated against the combined collection; ownership must be checked again before committing shared files.

## Searches and evidence

- OpenAlex: 26 date-bounded queries, 327 candidates not recognized by the existing script's deduplicator; the automated quality filter retained 12. These were reviewed manually rather than accepted automatically. No selected publication is future-dated relative to the run.
- Semantic Scholar: successful bulk search, 98 results. It surfaced the September homing-adaptation paper, which the initial OpenAlex automatic shortlist missed.
- Crossref: individual DOI lookups verified titles, authors, affiliations, venues, online dates and licenses. Sequential requests with a contact address succeeded after some parallel lookups returned HTTP 429. arXiv DOIs were checked against arXiv, not treated as nonexistent after Crossref returned 404.
- arXiv: submitted-date-bounded API query and direct lookup of 2608.23213; existing 2607.20386 excluded as a duplicate. The YOLO11/ByteTrack record was discovered by OpenAlex despite the vocabulary search missing it.
- Europe PMC: targeted recent monitoring search returned 25 records. Full-text XML for the wild-bee computer-vision review was inspected for relevance and license.
- Publisher/author sources: checked Reference Global full PDFs and landing pages, the MDPI-hosted PDF, arXiv metadata/PDF, and the author-linked BumbleBEEP GitHub repository and BEEP team page. Targeted Brave searches supplemented API results.
- All four shortlisted full PDFs (homing, YOLO11/ByteTrack, forecasting, survey) were downloaded to ignored review cache, passed `%PDF-` checks, and were parsed with `pdfinfo` and `pdftotext`. Paper identities and affiliations were checked in the texts, not inferred from filenames alone.

## Added by this run

Scores are topic match / novelty / practical relevance / source quality / open PDF or reproducibility, with maxima 4 / 2 / 2 / 1 / 1.

| Paper | Online publication | Score | Access decision |
| --- | --- | --- | --- |
| [Machine Vision-Based Quantification of Colony-Level Homing Adaptation in Apis mellifera Following Hive Entrance Displacement](https://doi.org/10.3390/insects17090944) | 2026-09-10 | 4+2+2+1+1 = 10 | CC BY 4.0 publisher PDF copied unchanged; attribution and license recorded. |
| [Precision Apiculture with Artificial Intelligence: A Survey of Methods, Tools, and Future Directions](https://doi.org/10.2478/plua-2026-0008) | 2026-08-29 | 4+1+2+1+1 = 9 | Verified open publisher PDF linked externally. CC BY-NC-ND 3.0 does not establish permission to mirror on a commercial product website. |

The homing study has nine colonies, six treated, and only one extended 14-day record. Its Homing Rate is not a general health score or persistent individual tracking. The survey is useful for citation discovery and field mapping, not as evidence that its listed tools have been independently benchmarked. Abstract fields are original curator summaries. No unverified public code or dataset release is claimed.

The survey's issue date is August 2026, online date 29 August, volume 55(350), pages 79-97, checked against Crossref. The homing paper is *Insects* 17(9), article 944, published 10 September.

## Verified but already added concurrently

- [Bee Detection and Tracking at Hive Entrance using YOLO11 and ByteTrack](https://arxiv.org/abs/2608.23213v1): score 9. Independent counting results are 43/47 incoming and 7/30 outgoing bees; high detection mAP is not evidence of reliable bidirectional counting. Non-exclusive arXiv distribution terms do not authorize a third-party public mirror.
- [Multimodal beehive weight forecasting using IoT telemetry and acoustic signal processing](https://doi.org/10.2478/jee-2026-0044): score 10. More than 3.4 million records from over 250 hives; lagged weight dominates the tested acoustic features. Verified online date 27 August. CC BY-NC-ND 4.0: use external publisher PDF.

## Candidates not added

- [BumbleBEEP: A Sensor System for Bumblebee Colony Monitoring](https://doi.org/10.1111/eea.70154): strong fit and CC BY metadata; author-linked [code, example data and construction files](https://github.com/b-nynke/BumbleBEEP) verified. Publisher PDF returned HTTP 403, and no paper PDF was found in the author repository. Hardware-part PDFs are not substitutes for the paper.
- [Computer Vision for Monitoring Wild Bees and Wasps: A Structured Literature Review](https://doi.org/10.1002/ece3.73794): relevant reusable monitoring methods and CC BY full-text XML. Publisher/Europe PMC PDF downloads were blocked; PMC's PDF endpoint returned HTML rather than a PDF. Not added under the valid-PDF requirement.
- [Determining blooming-phase dynamics through intra-day hive-weight analysis](https://doi.org/10.1016/j.atech.2026.102559): relevant and metadata validated; publisher PDF returned HTTP 403. No bypass attempted.
- [A Precision Beekeeping Ontology](https://doi.org/10.1177/15705838261461020): relevant, with a listed accepted manuscript at Edinburgh Napier; repository download returned HTTP 403. No verified PDF obtained.
- [An autonomous YOLOv9-edge-to-cloud intelligence system for proactive honeybee mortality mitigation](https://doi.org/10.1016/j.jip.2026.108691): useful monitoring application but subscription-only access in Europe PMC, no verified legal PDF.
- Generic bee-inspired UAV communication and flora-optimization candidates were rejected as not bee-monitoring work. The automated score alone did not justify adding them. Low-confidence venue/tool claims and purely biological papers were also excluded.

## Verification and operational lessons

- Checked canonical identifiers against the original inventory and reread the current directory before writing. An overlapping file appeared during the run; ingestion stopped rather than overwriting it, then narrowed to the remaining unclaimed survey entry.
- Metadata correction during review: survey pages are 79-97, not 77-95.
- `dev-code-reviewer-quick` could not start because its Docker health check reported `openrouter_usage_limit_reached`. Review proceeded locally using independent publisher metadata, PDF text and collection validation.
- Final validation passed: metadata completeness and canonical DOI/title uniqueness for both owned entries; unchanged SHA-256 for the 24-page local PDF (`6271783252597a828152e2a2938745d80149eebd11beaaa5218f4814b69ea74a`); successful `pdfinfo`/`pdftotext` parsing; all 3 discovery-scoring unit tests; site build under Node 24.18.0; rendered article pages, PDF links and copied build asset checked. Generated cache and unrelated `content/embeddings.json` are excluded from the commit.
- The concurrent curator committed its four entries first (`b695227f`), allowing this supplement and its regenerated index delta to be committed separately without staging the other curator's entries.
