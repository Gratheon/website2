# Gratheon Platform — Development Roadmap

Kanban board: headings are columns, tasks use `[ ]` (open) or `[x]` (done).

## Priority Legend

| Emoji | Meaning | Column |
|-------|---------|--------|
| Critical | Blocks platform viability or security | **Critical** |
| High | Accelerates velocity, significant ROI | **To Do** |
| Quality | Technical debt, compounds over time | **Backlog** |
| Nice-to-have | Polish and optimization | **Icebox** |

## Effort / Impact Matrix

| Category | Low effort (1-2d) | Medium effort (3-7d) | High effort (8-15d+) |
|----------|------------------|---------------------|----------------------|
| **High impact** | Quick wins — do immediately | Core bets — plan next sprint | Strategic investments — phase roadmap |
| **Low impact** | Low-priority polish | Backlog items | Nice-to-have / research |

---

## Critical

- [ ] [infra] Add root-level `.gitignore` — prevent ~30MB candidate JSON bloat and secret leaks; clean up tracked artifacts (1d, high impact)
- [ ] [infra] Create root `docker-compose.yml` for full stack orchestration — 15+ services, `gratheon-dev` network, `--profile` subsets: `core`, `ml`, `edge`, `infra` (2d)
- [ ] [edge-ai] Add tests for entrance-observer (edge AI inference) — unit + integration for video pipeline; mock GPU in CI; Jetson benchmarks (5-7d)

---

## To Do

### Platform Infrastructure

- [ ] [infra] Implement cross-service integration testing — `integration-tests/` with Docker Compose; hive → weather → telemetry joins (10-15 scenarios) (5-7d)
- [ ] [infra] Add root-level CI/CD workflow with matrix builds — parallel builds, schema compatibility checks, deploy only changed services (3-4d)
- [ ] [infra] Add Dockerfiles for clickstack, blog-engine-md, rate-limiter — multi-stage alpine (Go), Node 24 slim (TS) (1d)
- [ ] [infra] Audit rate-limiter and add observability — health endpoint, structured logging, edge-case tests, document rules (3-4d)
- [ ] [infra] Implement data backup strategy for all databases — MySQL, ClickHouse, Redis, InfluxDB; S3 lifecycle; test restore; document RPO/RTO (3-4d)
- [ ] [infra] Implement structured data export (CSV/JSON) for apiary/hive data — GraphQL `exportApiary` in swarm-api; UI export button (5-7d)
- [ ] [infra] Add rate-limiter CI/CD pipeline — security-critical service with no tests or review workflow (1-2d)
- [ ] [infra] Clean root-level JSON artifacts from git history — `candidates_*.json`, `filtered_candidates.json` (~30MB) (0.5d)

### web-app (Frontend)

- [ ] [web-app] Enable Playwright E2E tests with local backend — uncomment `webServer`; login, create hive, dashboard, photo upload; CI on PRs (3-4d)
- [ ] [web-app] Implement AI Advisor feature (currently a stub) — wire frame photo → image-splitter → varroa/queen detection → UI overlays; treatment recommendations (10-15d)
- [ ] [web-app] Connect detection models to web-app UI — unified inference gateway; GraphQL `FrameAnalysis`, `VarroaCount`; detection overlays (7-10d)

### Backend Services

- [ ] [backend] Wire telemetry-api CO2 and bee traffic sensors — InfluxDB schemas, GraphQL resolvers, real-time dashboard charts (5-7d)
- [ ] [backend] Standardize OpenAPI docs across all Node.js services — Swagger UI at `/docs` per service (3-4d)

### Edge AI / Hardware

- [ ] [edge-ai] Build unified inference pipeline orchestrator — shared `inference-pipeline` service; TFLite + ONNX; gRPC API (7-10d)
- [ ] [edge-ai] Add telemetry streaming from entrance-observer to cloud — detection events → event-stream-filter via Redis PubSub; live bee traffic counter (5-7d)

### Data & Analytics

- [ ] [data] Add ClickHouse materialized views for time-series aggregations — hourly/daily temperature, weight trends; GraphQL `timeSeriesAggregated` (3-4d)
- [ ] [data] Build user-facing analytics dashboard (replaces Grafana iframe) — custom Preact charts; PNG/PDF export (8-10d)

### Security & Compliance

- [ ] [security] Add API key rotation workflow — GraphQL `rotateApiKey`, 30d deprecation window, expiry webhook (2d)
- [ ] [security] Audit and fix all hardcoded secrets / env var references — migrate to Vault; pre-commit secret scanning (3-4d)
- [ ] [security] Add dependency vulnerability scanning to all CI/CD pipelines — Trivy `HIGH,CRITICAL` in every workflow (2d)
- [ ] [security] Implement rate-limit bypass detection and abuse reporting — `POST /report-abuse`, anomaly scoring, auto-throttle (2d)

### Documentation & Developer Experience

- [ ] [docs] Add monorepo contributing guide — root `CONTRIBUTING.md`, onboarding, architecture links (2d)
- [ ] [docs] Centralize architecture documentation — root `ARCHITECTURE.md` with mermaid; auto-generate service map (5-7d)
- [ ] [dx] Create unified local development setup script — `make dev-up` / `just dev`; migrations, seed data; prerequisites (3-4d)

### Gratheon.com & Blog

- [ ] [blog] Add CI/CD pipeline for blog-engine-md — lint, test, deploy to S3/CloudFront (2d)
- [ ] [blog] Standardize `.env.example` across all services — commented defaults; `make print-config` (1d)
- [ ] [blog] Add blog-engine-md content publishing workflow — draft/published, scheduled publish, preview endpoint (2d)

### ML / Research

- [ ] [ml] Automate arXiv paper ingestion pipeline — daily cron: search → filter → score → store; notify on high scores (2d)
- [ ] [ml] Add monitoring and alerting for arXiv ingestion pipeline — health checks, persistent DB instead of JSON files (3-4d)

### ClickHouse (clickstack)

- [ ] [clickstack] Add Dockerfile and docker-compose profile for clickstack — wire telemetry-api → clickstack pipeline (2d)
- [ ] [clickstack] Implement ClickHouse query performance monitoring — `metric_log`, `trace_log`, query timeout middleware (3-4d)

### Image Splitter

- [ ] [image-splitter] Complete image-splitter phase 4-5 — key-frame extraction, motion detection; batch queue with priority scheduling (7-10d)
- [ ] [image-splitter] Add image-splitter processing pipeline tests — edge cases: overlapping frames, damaged images, non-standard hives (3-4d)

### Service-Specific

- [ ] [alerts] Add integration tests for alerts service — threshold → Telegram/email/SMS within SLA; mock external channels (3-4d)
- [ ] [gate-video-stream] Add gate-video-stream video analytics pipeline — RTSP/RTMP → entrance-observer model → ClickHouse events (5-7d)

### API Governance

- [ ] [api] Define GraphQL schema versioning and deprecation policy — `@deprecated` with 90d sunset; CI `gqlgen validate --strict` (3-4d)

### Disaster Recovery

- [ ] [ops] Create and test disaster recovery runbook — RPO/RTO per DB, failover sequence, quarterly DR drills (5-7d)

### CI/CD Gaps

- [ ] [ci] Add CI/CD to swarm-api — go vet, golangci-lint, tests, schema validation (2d)
- [ ] [ci] Add CI/CD to telemetry-api — lint, coverage threshold, InfluxDB validation, load testing (2d)
- [ ] [ci] Add CI/CD to rate-limiter — ESLint, strict TS, unit + integration tests (1d)
- [ ] [ci] Add CI/CD to graphql-router — gqlgen validate, federation composition, breaking change detection (2d)

### Observability

- [ ] [observability] Wire AppSignal across all services — swarm-api, graphql-router, telemetry-api; central error/latency dashboard (5-7d)

### SSL/TLS

- [ ] [ops] Automate Let's Encrypt certificate renewal for gratheon.com — certbot cron, nginx reload, expiry alerts <30d (1d)

---

## Backlog

### Platform & Infrastructure

- [ ] [infra] Document runbooks for each service (SRE-style) — start/stop, URLs, failure patterns, log locations (5-7d)
- [ ] [infra] Create k6/locust load test scripts — `load-test-hive-telemetry.ts`, `load-test-inspection-upload.ts`; CI at 10k/50k/100k RPS (3-4d)

### web-app

- [ ] [web-app] Add PWA offline support verification tests — offline→online sync, push on reconnect, installability, SW updates (2-3d)
- [ ] [web-app] Performance: audit and reduce initial bundle size — route-based lazy loading for inspectionList, warehouse, grafana, aiAdvisor (2-3d)
- [ ] [web-app] Add frontend bundle size budgeting — Vite analyzer; total JS < 150KB gzipped, per-route < 50KB (1-2d)

### Backend

- [ ] [backend] Add rate limiting to all GraphQL endpoints — wire rate-limiter middleware; per-endpoint limits; monitoring (3-4d)
- [ ] [backend] Fix swarm-api `config.go` SafeWriteConfig() call — error handling, env validation, integration test (1d)

### Edge AI

- [ ] [edge-ai] Optimize entrance-observer bandwidth usage — adaptive bitrate, send only changed frames (2-3d)

### Data & Analytics

- [ ] [data] Add data retention policies across all stores — InfluxDB 90d/1y; ClickHouse monthly partitions, 2y cleanup (2-3d)
- [ ] [data] Add materialized views for pre-computed beekeeper analytics (clickstack) — daily/hourly stats per apiary (3-5d)

### Security

- [ ] [security] Implement GDPR data deletion endpoint — cascading soft-delete across user-cycle and swarm-api; audit log (3-4d)
- [ ] [security] Implement secret rotation automation — Vault/AWS Secrets Manager; SIGHUP reload (5-7d)

### Documentation

- [ ] [docs] Add API changelog for all GraphQL endpoints — semver tags on schema commits; `CHANGELOG.md` per service (2d)

### Gratheon.com

- [ ] [blog] Optimize gratheon.com build performance — parallel rendering, CDN Cache-Control headers (2-3d)

### ML / Research

- [ ] [ml] Build paper recommendation engine for beekeepers — collaborative filtering from candidates JSON data (7-10d)
- [ ] [ml] Implement data pipeline retry and dead-letter queue — Redis backoff, manual review endpoint (5-7d)

### Image Splitter

- [ ] [image-splitter] Add CI/CD and test coverage to image-splitter — sample video → split → verify dimensions (2-3d)

### API Governance

- [ ] [api] Implement API response caching strategy — Redis-backed GraphQL resolvers; ~70% DB load reduction on dashboards (2-3d)
- [ ] [api] Add API versioning strategy for REST endpoints — `/api/v1/` convention, deprecation timeline (3-4d)

### Disaster Recovery & Deploy

- [ ] [ops] Implement blue-green deployment capability — health-check gates, rollback; stateless services first (7-10d)

### Database Migrations

- [ ] [db] Implement database migration tooling for MySQL — golang-migrate; initial schemas for user-cycle, swarm-api (3-4d)
- [ ] [db] Implement ClickHouse schema management — SQL migrations with rollback; version tracking (3-4d)
- [ ] [db] Implement InfluxDB measurement versioning — document schemas; startup validation (2d)

### i18n

- [ ] [i18n] Add translation QA pipeline for gratheon.com — detect missing translations across 24 locales (3-4d)
- [ ] [i18n] Implement i18n string extraction and management — i18next/gettext; CI untranslated string check (4-5d)

### Observability

- [ ] [observability] Add distributed tracing with Jaeger or OpenTelemetry — SDK in Go/TS services (7-10d)

### Developer Experience

- [ ] [dx] Add pre-commit hooks for monorepo — large files, lint per language (golangci-lint, eslint) (2d)

### Service Catalog

- [ ] [infra] Create service registry and API catalog — `services.json` or web page; auto-discover from Docker Compose (4-5d)

---

## Icebox

- [ ] [web-app] Polish API Advisor feature — better loading states, error handling, tutorial tooltips (1d)

---

## Done

<!-- Move completed tasks here and mark with [x] -->

---

## Notes

- **Technology stack**: Go (swarm-api, graphql-router, telemetry-api), TypeScript/Node.js (web-app, gate-video-stream, rate-limiter), Python (entrance-observer, ML scripts)
- **Databases**: MySQL (primary), Redis (pub/sub + caching), InfluxDB (telemetry), ClickHouse (analytics)
- **Edge hardware**: Jetson Orin/Nano running entrance-observer for real-time bee counting
- **ML models**: Queen detection (mAP=0.92), Varroa mite counter, PlantNet species identifier — isolated in separate repos
- **Deployment**: Docker Compose per service; no unified orchestration yet
- **Node version**: use `nvm use 24` for majority of projects
