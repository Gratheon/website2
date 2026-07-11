# Gratheon Platform — Development Roadmap

## Priority Legend

| Emoji | Meaning | When to work on it |
|-------|---------|-------------------|
| ❤️ | Critical — blocks platform viability or security | Do now |
| 💛 | High — accelerates velocity, significant ROI | Next sprint |
| 💚 | Quality — technical debt, compounds over time | Backlog rotation |
| 💙 | Nice-to-have — polish and optimization | When nothing else pulls you |

## Effort / Impact Matrix

Use this matrix to decide **what to work on next** when multiple tasks compete:

| Category | Low effort (1-2d) | Medium effort (3-7d) | High effort (8-15d+) |
|----------|------------------|---------------------|----------------------|
| **High impact** | Quick wins — do immediately | Core bets — plan next sprint | Strategic investments — phase roadmap |
| **Low impact** | Low-priority polish | Backlog items | Nice-to-have / research |

---

## Platform Infrastructure (Monorepo)

### ❤️ Add root-level `.gitignore` — Quick Win
**Effort**: 1 day · **Impact**: High
- Prevents git history bloat from ~30MB candidate JSON files in root
- Removes accidental secret leaks (.env, configs)
- Clean up existing tracked files and add to .gitignore

### ❤️ Create root docker-compose.yml for full stack orchestration — Quick Win
**Effort**: 2 days · **Impact**: High
- Single file to bring up entire platform locally (15+ services)
- Define `gratheon-dev` network, map shared ports centrally
- Support `--profile` flag: `core`, `ml`, `edge`, `infra` subsets

### 💛 Implement cross-service integration testing — Core Bet
**Effort**: 5-7 days · **Impact**: High
- GraphQL federation spans 16+ microservices; schema changes can silently break others
- Create `integration-tests/` with Docker Compose profiles
- Write tests for critical paths: hive → weather → telemetry joins (10-15 scenarios)
- Use test containers or mock services where real DBs aren't available

### 💛 Add root-level CI/CD workflow with matrix builds — Core Bet
**Effort**: 3-4 days · **Impact**: High
- Coordinated pipeline across all services: shared caching, dependency validation
- Parallel matrix builds + schema compatibility checks on PRs
- Deploy triggers only when relevant services changed

### 💛 Add Dockerfiles for clickstack, blog-engine-md, rate-limiter — Quick Win
**Effort**: 1 day · **Impact**: Medium
- These three services lack Dockerfiles → breaks container parity
- Multi-stage alpine builds (Go), Node 24 slim (TS)
- Adds docker-compose.dev.yml / prod.yml for each

### 💛 Audit rate-limiter and add observability — Core Bet
**Effort**: 3-4 days · **Impact**: High
- Rate-limiter protects all API traffic but has no metrics, logging, or test coverage
- Add health endpoint, structured logging of denied requests, edge-case tests
- Document current rules (per-user, per-API-key, per-endpoint)

### 💛 Implement data backup strategy for all databases — Core Bet
**Effort**: 3-4 days · **Impact**: High
- Platform: MySQL, ClickHouse, Redis, InfluxDB — zero automated backups visible
- Cron/sidecar dumps + S3 with lifecycle policies (7d daily, 30d weekly)
- Test restore procedures; document RPO/RTO per service

### 💛 Implement structured data export (CSV/JSON) for apiary/hive data — Core Bet
**Effort**: 5-7 days · **Impact**: High
- Beekeepers need to back up / share hive data outside the app (GDPR portability)
- Add GraphQL `exportApiary(apiaryId, format)` resolver in swarm-api
- UI button in Hive View → "Export Data" dropdown

### 💛 Document runbooks for each service (SRE-style) — Core Bet
**Effort**: 5-7 days · **Impact**: Medium
- 19+ services with no centralized operational docs
- One file per service: start/stop, key URLs, failure patterns, log locations

---

## web-app (Frontend) — 65K lines, only 7.7% test coverage

### 💛 Enable Playwright E2E tests with local backend — Core Bet
**Effort**: 3-4 days · **Impact**: High
- `playwright.config.ts` exists but `webServer` is commented out; critical flows untested
- First E2E tests: login, create hive, view dashboard, upload inspection photo
- Add CI integration so E2E runs on PRs

### 💛 Implement AI Advisor feature (currently a stub) — Strategic Investment
**Effort**: 10-15 days · **Impact**: High
- `web-app/src/page/aiAdvisor/index.tsx` is ~128 lines placeholder; ML models exist but disconnected
- Wire: frame photo → image-splitter queue → varroa/queen detection results → UI overlays
- Add treatment recommendations + one-click from inspection view

### 💛 Connect detection models to web-app UI — Strategic Investment
**Effort**: 7-10 days · **Impact**: High
- Three trained models (queen mAP=0.92, varroa, plantnet) are isolated from app
- Unified inference gateway + GraphQL schema extensions (FrameAnalysis, VarroaCount)
- Build UI: detection overlays, confidence cards, auto-trigger on photo upload

### 💚 Add PWA offline support verification tests — Backlog Item
**Effort**: 2-3 days · **Impact**: Medium
- Dexie + VitePWA mentioned in README but no tests verify offline behavior
- Simulate offline→online transitions; verify sync, push notifications on reconnect
- Test PWA installability and service worker updates

### 💚 Performance: audit and reduce initial bundle size — Backlog Item
**Effort**: 2-3 days · **Impact**: Medium
- 440 files with Preact + Vite should be lean; no code splitting by route yet
- Add route-based lazy loading (inspectionList, warehouse, grafana, aiAdvisor)
- Lazy-load map components and Grafana iframe embeds

### 💚 Add frontend bundle size budgeting — Backlog Item
**Effort**: 1-2 days · **Impact**: Medium
- No CI gate preventing bundle regressions for mobile beekeepers on slow connections
- Vite bundle analyzer + budget: total JS < 150KB gzipped, per-route chunk < 50KB gzipped

---

## Backend Services — Critical Gaps

### ❤️ Add tests for entrance-observer (edge AI inference) — Core Bet
**Effort**: 5-7 days · **Impact**: High
- Runs on Jetson Orin/Nano with GPU video processing; zero tests exist
- Unit test float detection pipeline + integration: video chunk → frame → model → results
- Mock GPU for CI; run TFLite on Jetson locally; add per-frame benchmarks

### 💚 Add rate limiting to all GraphQL endpoints — Backlog Item
**Effort**: 3-4 days · **Impact**: High (security hardening)
- Rate-limiter exists but not wired into graphql-router or other services
- Wire middleware + define per-endpoint limits; add monitoring for limit hits
- Document rate limit headers in API responses

### 💚 Fix swarm-api `config.go` SafeWriteConfig() call — Quick Win
**Effort**: 1 day · **Impact**: Medium
- Viper config writer can panic on misconfigured env vars
- Add error handling + validate all required fields before writing
- Integration test: corrupt env → graceful failure instead of crash

### 💛 Wire telemetry-api CO2 and bee traffic sensors — Strategic Investment
**Effort**: 5-7 days · **Impact**: High (product differentiation)
- README lists CO2, pressure, audio, vibrations as TODOs
- Add InfluxDB measurement schemas + GraphQL resolvers for new metrics
- Frontend: real-time charts in dashboard for bee traffic heatmap

### 💛 Standardize OpenAPI docs across all Node.js services — Core Bet
**Effort**: 3-4 days · **Impact**: Medium
- gate-video-stream and user-cycle already have openapi.json; others don't
- Add OpenAPI middleware to graphql-router, swarm-api (as REST fallback)
- Auto-generate Swagger UI at `/docs` endpoint per service

---

## Edge AI / Hardware Integration

### 💛 Build unified inference pipeline orchestrator — Strategic Investment
**Effort**: 7-10 days · **Impact**: High
- entrance-observer, models-varroa-on-bee, plantnet each run independently
- Create shared `inference-pipeline` service: model loading → preprocessing → postprocessing → results
- Support TFLite + ONNX; expose gRPC API for web-app to call directly

### 💛 Add telemetry streaming from entrance-observer to cloud — Core Bet
**Effort**: 5-7 days · **Impact**: High
- Entrance-observer processes video locally but results don't reach backend
- Push detection events (bees in/out counts per minute) → event-stream-filter via Redis PubSub
- Frontend: live bee traffic counter on dashboard

### 💚 Optimize entrance-observer bandwidth usage — Backlog Item
**Effort**: 2-3 days · **Impact**: Medium
- `optimize_camera_bandwidth_commented.sh` exists but not active
- Implement adaptive bitrate based on network conditions
- Compress and send only changed frames to reduce upstream load

---

## Data & Analytics

### 💛 Add ClickHouse materialized views for time-series aggregations — Core Bet
**Effort**: 3-4 days · **Impact**: High
- clickstack exists but no aggregate queries visible; raw data only
- Pre-compute hourly/daily temperature averages, weight trends
- Expose via GraphQL `timeSeriesAggregated` query

### 💛 Build user-facing analytics dashboard (replaces Grafana iframe) — Strategic Investment
**Effort**: 8-10 days · **Impact**: High
- Current dashboard uses embedded Grafana iframes; poor mobile UX
- Custom Preact charts: temperature, weight, humidity with zoom/pan
- Export to PNG/PDF for beekeeping journals

### 💚 Add data retention policies across all stores — Backlog Item
**Effort**: 2-3 days · **Impact**: Medium
- No TTL on telemetry data → storage grows unbounded
- InfluxDB: `RETENTION_POLICY` on measurement shards (90d hot, 1y warm)
- ClickHouse: partition by month with auto-cleanup older than 2 years

---

## Security & Compliance

### 💛 Add API key rotation workflow — Quick Win
**Effort**: 2 days · **Impact**: High
- user-cycle generates API tokens but no rotation UI or cron
- GraphQL mutation `rotateApiKey` + deprecation window (30d)
- Webhook notification: "Your API key will expire in 7 days"

### 💛 Audit and fix all hardcoded secrets / env var references — Core Bet
**Effort**: 3-4 days · **Impact**: High
- Multiple `.env` files found across services; some may leak to git
- Migrate all secrets to Vault or encrypted env store
- Add pre-commit hook scanning for secret patterns

### 💚 Implement GDPR data deletion endpoint — Backlog Item
**Effort**: 3-4 days · **Impact**: Medium
- User-cycle has billing/user data; swarm-api has hive/inspection history
- `DELETE /user/{id}/data` → cascading soft-delete across services
- Log deletion events for audit trail

---

## Documentation & Developer Experience

### 💛 Add monorepo contributing guide — Core Bet
**Effort**: 2 days · **Impact**: Medium
- Each service has its own CONTRIBUTING.md but no unified onboarding
- `CONTRIBUTING.md` at root: how to run all services, structure conventions
- Link to architecture diagrams in each README

### 💛 Centralize architecture documentation — Core Bet
**Effort**: 5-7 days · **Impact**: Medium
- Architecture diagrams scattered across 10+ READMEs (some outdated)
- Single `ARCHITECTURE.md` at root with mermaid overview + per-service deep dives
- Auto-generate service map from docker-compose.yml

### 💚 Add API changelog for all GraphQL endpoints — Backlog Item
**Effort**: 2 days · **Impact**: Medium
- No visible changelog; breaking schema changes break consumers silently
- Semantic versioning tags on graphql-router/schema.graphql commits
- `CHANGELOG.md` per service updated on each release

---

## ML / Research Pipeline (Papers & Candidates)

### 💛 Automate arXiv paper ingestion pipeline — Quick Win
**Effort**: 2 days · **Impact**: Medium
- `search_arxiv.py`, `filter_candidates.py`, `score_candidates.py` exist but manual
- Wrap in cron job: daily search → filter by relevance → score → store results
- Notify web-app when new high-scoring papers match user's apiary interests

### 💚 Build paper recommendation engine for beekeepers — Backlog Item
**Effort**: 7-10 days · **Impact**: Medium
- Candidates JSON files (30MB+) contain research data; not yet connected to app
- Collaborative filtering: "beekeepers like you also read..."
- Integrate with web-app blog section for contextual learning

---

## Quick Wins Summary (do these first)

| Task | Effort | Impact | Location |
|------|--------|--------|----------|
| Root .gitignore | 1d | High | Monorepo root |
| Dockerfiles for clickstack/blog-engine-md/rate-limiter | 1d | Medium | Three services |
| Fix swarm-api config.go panic | 1d | Medium | swarm-api/config.go |
| API key rotation workflow | 2d | High | user-cycle + web-app |
| Automate arXiv ingestion pipeline | 2d | Medium | Python scripts in root |

---

## Notes

- **Technology stack summary**: Go (swarm-api, graphql-router, telemetry-api), TypeScript/Node.js (web-app, gate-video-stream, rate-limiter), Python (entrance-observer, ML scripts)
- **Databases**: MySQL (primary), Redis (pub/sub + caching), InfluxDB (telemetry), ClickHouse (analytics)
- **Edge hardware**: Jetson Orin/Nano running entrance-observer for real-time bee counting
- **ML models**: Queen detection (mAP=0.92), Varroa mite counter, PlantNet species identifier — all isolated in separate repos
- **Deployment**: Docker Compose per service; no unified orchestration yet
