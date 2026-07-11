## Priority Legend

| Emoji | Meaning | When to work on it |
|-------|---------|-------------------|
| ❤️ | Critical — blocks platform viability or security | Do now |
| 💛 | High — accelerates velocity, significant ROI | Next sprint |
| 💚 | Quality — technical debt, compounds over time | Backlog rotation |
| 💙 | Nice-to-have — polish and optimization | When nothing else pulls you |


## New Tasks (Added 2026-07-11)

### Test Coverage & Quality Assurance

**💛 Implement comprehensive test suite for web-app frontend**
- Current state: 440 files with minimal visible test coverage
- Impact: Prevents regression in core hive management UI
- Actions: Add unit tests for key components (hive edit, device view), integration tests for GraphQL queries, E2E tests for critical user flows
- Components: `web-app/src/page/hiveEdit/*`, `web-app/src/page/deviceView/*`, `web-app/src/page/apiaryList/*`

**💚 Expand test coverage to event-stream-filter and plantnet services**
- Current state: Only 7/23+ components have tests (alerts, image-splitter, log-lib-go, rate-limiter, swarm-api, telemetry-api, weather)
- Impact: Prevents silent failures in data pipeline
- Actions: Add unit tests for event filtering logic, integration tests for plant detection models, mock external dependencies

**💙 Standardize testing patterns across monorepo**
- Current state: Mixed testing frameworks (Jest for TypeScript/Node, Go test for Go services)
- Impact: Developer experience and consistency
- Actions: Create shared test utilities, document testing conventions in CONTRIBUTING.md files

### CI/CD Pipeline Improvements

**❤️ Add GitHub Actions workflows to all major services**
- Current state: Only event-stream-filter and swarm-api have CI pipelines
- Impact: Blocks automated deployment and quality gates for most services
- Actions: Create CI workflows for web-app, alerts, plantnet, entrance-observer, gate-video-stream, image-splitter, graphql-router, rate-limiter, user-cycle, weather
- Components: `.github/workflows/` in each service

**💛 Implement integration testing pipeline**
- Current state: No visible cross-service integration tests
- Impact: Catches breaking changes between services before production
- Actions: Set up Docker Compose-based integration tests, test GraphQL federation across services, validate data flow from entrance-observer → event-stream-filter → alerts

**💚 Add security scanning to CI pipelines**
- Current state: No visible SAST/DAST or dependency vulnerability scanning
- Impact: Prevents supply chain attacks and known vulnerabilities in production
- Actions: Integrate Dependabot/Snyk for dependencies, add Trivy for container scanning, validate rate-limiter logic

### AI Advisor Feature Completion

**💛 Complete AI Advisor implementation**
- Current state: `web-app/src/page/aiAdvisor/index.tsx` is only 128 lines (stub)
- Impact: Core differentiator feature - bee health insights powered by ML models
- Actions: 
  - Connect to plantnet/varroa detection models
  - Implement analysis pipeline (image upload → model inference → insights display)
  - Add treatment recommendations based on detected issues
  - Integrate with hive inspection workflow

**💚 Build AI-powered anomaly detection**
- Current state: No visible ML-based anomaly detection in telemetry data
- Impact: Proactive alerts before bee health crises
- Actions:
  - Analyze weight/humidity/temperature trends
  - Detect abnormal patterns (sudden drops, gradual declines)
  - Correlate with weather data from weather service

### Monitoring & Observability

**💛 Implement centralized metrics collection**
- Current state: Multiple services have individual metric exporters but no unified dashboard
- Impact: Hard to monitor system health across all components
- Actions:
  - Aggregate metrics in Grafana/Prometheus
  - Create dashboards for service health, request latency, error rates
  - Set up alerts for critical thresholds (CPU > 80%, memory > 90%, p95 latency > 2s)

**💚 Standardize logging across all services**
- Current state: Three separate logging libraries (log-lib, log-lib-go, log-lib-py) with potential inconsistencies
- Impact: Difficult to correlate logs across microservices during debugging
- Actions:
  - Audit and align log formats (structured JSON vs. plain text)
  - Standardize trace IDs for distributed tracing
  - Implement Logstash/Vector pipeline for aggregation

**💙 Add distributed tracing with OpenTelemetry**
- Current state: No visible APM/tracing infrastructure
- Impact: Hard to debug performance issues across service boundaries
- Actions:
  - Instrument all services with OpenTelemetry SDKs
  - Set up Jaeger or Tempo backend
  - Create sample queries for common patterns (GraphQL request → data fetch → response)

### Performance Optimization

**💛 Optimize web-app bundle size and loading**
- Current state: 440 files, potential for large bundle sizes with Preact/Vite
- Impact: Directly affects user experience and SEO
- Actions:
  - Analyze bundle composition (webpack-bundle-analyzer or similar)
  - Implement code splitting by route/component
  - Optimize image assets (AVIF/WebP conversion, lazy loading)
  - Enable HTTP/2 push for critical resources

**💚 Add caching layers to GraphQL resolvers**
- Current state: No visible caching strategy in swarm-api or graphql-router
- Impact: Repeated queries cause unnecessary database load
- Actions:
  - Implement Redis-based query result caching
  - Add TTL policies per query type (hive data: 30s, apiary list: 5min)
  - Invalidate cache on mutations via pub/sub

**💙 Optimize video streaming performance**
- Current state: gate-video-stream and entrance-observer handle real-time video but no visible optimization
- Impact: Latency issues in live hive monitoring
- Actions:
  - Implement adaptive bitrate streaming (HLS/DASH)
  - Add WebRTC for low-latency options
  - Optimize ffmpeg transcoding pipelines

### Security Hardening

**❤️ Review and fix authentication/authorization gaps**
- Current state: Multiple services handle user sessions but unclear authorization model
- Impact: Potential unauthorized access to hive data, billing info
- Actions:
  - Audit JWT token validation across all services
  - Implement role-based access control (admin, apiary owner, viewer)
  - Add CSRF protection for web-app forms
  - Validate input sanitization in graphql-router


---

## New Tasks (Added 2026-07-11) — Website & Content

### 💛 Implement automated SEO audit pipeline for gratheon.com
**Why**: The site is built with Eleventy and has Obsidian-style content, but there's no visible SEO tooling — meta tags, Open Graph images, structured data (JSON-LD), or robots.txt are not systematically validated. For a public-facing product site serving beekeepers globally, organic search traffic is critical.
**What to do**:
- Add Eleventy plugin that audits every generated page for: missing `<title>`, duplicate meta descriptions, broken internal links, missing alt text on images
- Generate and validate `robots.txt` and `sitemap.xml` as part of the build step
- Add structured data (Organization schema, Product schema) to relevant pages via Eleventy global data or layouts

### 💚 Set up content staging/deployment for blog-engine-md
**Why**: The blog engine (`blog-engine-md`) is used by both gratheon.com and kurapov.ee. There's no visible CI/CD pipeline that validates markdown, builds the static site, and deploys to production. Currently deployments rely on manual `restart.sh` scripts on the server.
**What to do**:
- Create GitHub Actions workflow for blog-engine-md: lint markdown → build → validate links → deploy to staging
- Add pre-commit hooks (husky-style) that catch broken markdown links, frontmatter issues, and image references before they reach CI
- Document deployment procedure in a runbook

### 💙 Implement multilingual SEO for gratheon.com
**Why**: The site targets Russian-speaking beekeepers primarily but English content is growing. There's no visible hreflang tag strategy or language-specific sitemap to signal language variants to search engines. This limits discoverability among non-Russian speakers and hurts international organic traffic.
**What to do**:
- Add `hreflang` annotations to all page templates in Eleventy (matching gratheon.com/ and kurapov.ee/i18n patterns)
- Generate separate sitemaps per language or use `<link rel="alternate">` tags
- Validate hreflang with Google Search Console's international targeting report

### 💚 Add content migration tool from Docusaurus → blog-engine-md
**Why**: Several services (kurapov.ee, potentially gratheon.com docs) were previously built on Docusaurus. The `blog-engine-md` README explicitly states it's a "memory-efficient alternative to Docusaurus" but there's no automated migration script — manual conversion of Docusaurus markdown, routing tables, and navigation config is error-prone.
**What to do**:
- Create a CLI tool (`docusaurus-migrate`) that: converts `docs/` folder structure → blog-engine-md content layout, transforms Docusaurus frontmatter → supported YAML, generates Eleventy navigation config from Docusaurus sidebar.js
- Test migration on kurapov.ee's existing content as the canonical example

### 💛 Optimize gratheon.com build time (Eleventy is slow)
**Why**: The site has 28+ pages with templates, shared layouts, and Obsidian-style content. Eleventy builds are known to be slow with large template counts. Currently there's no incremental build strategy or caching visible in the justfile — every `just serve` rebuilds everything from scratch.
**What to do**:
- Enable Eleventy incremental mode (`--incremental`) and verify output correctness vs full build
- Add cache for generated content (`.cache/` directory already exists but may not be used)
- Profile template processing time per page; identify slow templates

**💚 Secure rate-limiter service**
- Current state: Redis-based rate limiter exists but no visible security controls
- Impact: Could be bypassed or abused by malicious actors
- Actions:
  - Add authentication to rate-limiter API endpoints
  - Implement token bucket algorithm with proper bounds checking
  - Add monitoring for rate limit hits per user

### Deployment & Operations

**💛 Automate deployment pipeline for all services**
- Current state: Manual deployments or unclear process (no visible ArgoCD, Flux, etc.)
- Impact: Slow release cycles, inconsistent environments
- Actions:
  - Implement CI/CD for all services using GitHub Actions
  - Create staging environment mirroring production
  - Add rollback procedures and health checks

**💚 Improve Docker image management**
- Current state: Multiple Dockerfiles but no visible multi-stage build optimization or vulnerability scanning
- Impact: Large images, slower builds, potential security issues in base images
- Actions:
  - Optimize multi-stage builds (especially Go services)
  - Pin base image versions and verify integrity
  - Implement automated rebuild on base image updates

**💙 Add service mesh for inter-service communication**
- Current state: Direct HTTP/gRPC calls between services with no circuit breaking or retries
- Impact: Cascading failures during high load or network issues
- Actions:
  - Evaluate Istio/Linkerd deployment
  - Implement retry policies and circuit breakers
  - Add mTLS for service-to-service encryption

### Documentation & Knowledge Sharing

**💚 Update documentation for all major services**
- Current state: README.md files exist but may be outdated given codebase growth (440+ files in web-app)
- Impact: Onboarding difficulty, knowledge silos
- Actions:
  - Audit and update README.md files in all components
  - Create architecture diagrams showing service interactions
  - Document deployment procedures and troubleshooting guides

**💛 Build developer onboarding guide**
- Current state: No visible centralized documentation for new developers
- Impact: Slow ramp-up time, repeated setup questions
- Actions:
  - Create monorepo README with setup instructions
  - Document local development environment (Docker Compose profiles)
  - Add example workflows (how to test a change end-to-end)

**💙 Implement API documentation generation**
- Current state: GraphQL schemas exist but no auto-generated documentation
- Impact: Hard for frontend/backend teams to collaborate
- Actions:
  - Integrate GraphQl Codegen or similar tools
  - Generate TypeScript types from server schemas
  - Create interactive API explorer (Apollo Studio, Hasura Console)

### Data Management & Backups

**❤️ Implement data backup strategy**
- Current state: No visible automated backups for PostgreSQL/MySQL/Redis/ClickHouse
- Impact: Risk of permanent data loss
- Actions:
  - Set up automated daily backups with retention policies
  - Test restore procedures regularly
  - Encrypt backups at rest and in transit

**💚 Add database migration automation**
- Current state: Manual migrations or unclear schema versioning
- Impact: Schema drift between environments, deployment failures
- Actions:
  - Implement ORM-based migrations (Prisma, GORM)
  - Add pre-deployment validation checks
  - Version schemas alongside code

### Feature Enhancements

**💛 Implement hive inspection sharing feature**
- Current state: `web-app/src/page/inspectionShare` exists but likely incomplete
- Impact: Enables collaboration between beekeepers and advisors
- Actions:
  - Add shareable links with time-limited access
  - Implement annotation tools for shared inspections
  - Integrate with calendar/scheduling

**💚 Build predictive analytics dashboard**
- Current state: No visible trend analysis or forecasting features
- Impact: Reactive rather than proactive hive management
- Actions:
  - Historical data visualization (weight, temperature over seasons)
  - Predictive modeling for honey production
  - Seasonal comparison tools

**💙 Add mobile-first PWA enhancements**
- Current state: web-app uses Preact with potential PWA support but not optimized for mobile
- Impact: Field beekeepers primarily use mobile devices
- Actions:
  - Optimize touch interactions and gestures
  - Implement offline capability with Dexie.js sync
  - Add push notifications for critical alerts

---

## Implementation Priority Matrix

| Category | Priority | Est. Effort | Business Value |
|----------|----------|-------------|----------------|
| Test Coverage (web-app) | 💛 High | Medium-High | Prevents regressions in core feature |
| CI/CD Pipelines | ❤️ Critical | Low-Medium | Enables safe, fast deployments |
| AI Advisor Completion | 💛 High | High | Core differentiator for platform |
| Monitoring & Metrics | 💛 High | Medium | Operational visibility and debugging |
| Security Hardening | ❤️ Critical | Medium-High | Prevents data breaches |
| Performance Optimization | 💚 Quality | Medium | Improves user experience |
| Documentation | 💚 Quality | Low | Reduces onboarding time |
## Effort / Impact Tags

- ⚡ Quick win: < 1 day, immediate value
- 🔧 Medium effort: 2-5 days, significant payoff
- 🏗️ High effort: 1+ week, foundational investment

---

## ❤️ Critical — Do Now

Tasks that block deployment, security, or platform viability. Fix first.

### 38. Replace panic(err) with Graceful Failure in Go Services [⚡ Quick win]
**Priority**: ❤️ | **Impact**: Prevents infinite restart loops masking real failures  
**Issue**: Three core services use `panic(err)` on startup: swarm-api, telemetry-api, weather. The container runtime sees a non-zero exit and restarts it endlessly, hiding the real problem from monitoring systems.  
**Task**: Replace `panic(err)` with structured logging + graceful shutdown/exit code 1; add context cancellation for DB connections; document expected failure modes.

### 47. Fix Critical CORS Configuration Vulnerabilities [⚡ Quick win]
**Priority**: ❤️ | **Impact**: Security — allows unauthorized cross-origin API access  
**Issue**: telemetry-api uses `cors.AllowAll()` and swarm-api sets wildcard origins WITH credentials (violates CORS spec). Any site can call internal APIs from a browser.  
**Task**: Replace AllowAll with explicit origin lists; fix wildcard+credentials combo in swarm-api; add env-based config for dev/prod; document CORS policy.

### 48. Add Security Headers to All HTTP Responses [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Protects against MIME sniffing, clickjacking, referrer leakage  
**Issue**: No security headers across the platform — missing X-Content-Type-Options, X-Frame-Options, Content-Security-Policy, Referrer-Policy, Permissions-Policy.  
**Task**: Add a shared middleware in graphql-router and Fastify apps that sets all standard security headers; configure CSP with Gratheon-specific directives.

### 14. Add Schema Registry Health Monitoring [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Silent API degradation if a subgraph goes offline — no alerting on composition failures  
**Issue**: graphql-router polls a schema registry but has no alerting on composition failures or registry unreachability. A single subgraph going down silently breaks the entire API layer.

### 39. Add Health Check Endpoints to All Services [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Enables load balancers, K8s liveness/readiness, and proper rolling deployments — critical for monitoring all 20+ services  
**Issue**: Only weather and telemetry-api have `/health`. The remaining 15+ services can't be verified as ready — causing traffic to unhealthy instances during deploys.

---

## 💛 High Impact — Next Sprint Focus

Tasks that accelerate development velocity, reduce friction, or deliver significant ROI.

### 1. Add Root Project Documentation [🏗️ High effort]
**Priority**: 💛 | **Impact**: Unlocks onboarding and cross-component understanding for all 23 services  
**Issue**: No root README explaining the monorepo structure. New devs must reverse-engineer how components fit together from scattered READMEs.  
**Task**: Create comprehensive project README with component overview, architecture diagram, dependency map, and "how to run everything locally."

### 4. Add Root docker-compose.yml for Full Stack Development [🔧 Medium effort]
**Priority**: 💛 | **Impact**: One command to start the entire platform — massive DX improvement  
**Issue**: Each component has its own compose files but no root-level file. You must manually start 15+ services in correct order.  
**Task**: Create `docker-compose.yml` at project root defining all core services (swarm-api, graphql-router, web-app, event-stream-filter, alerts) + infrastructure (PostgreSQL, MySQL, Redis, ClickHouse); use named volumes; support profiles for selective service groups.

### 5. Add Root Justfile for Cross-Component Operations [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Unified commands across all 23 components — consistency and speed  
**Issue**: Each component has its own justfile but no root-level orchestration. Running "build all Go services" requires manual per-dir commands.  
**Task**: Create root `justfile` with targets: `build-go`, `test-all`, `lint-all`, `docker-build-all`.

### 6. Migrate GraphQL Router from Apollo Federation v1 to v2 [🏗️ High effort]
**Priority**: 💛 | **Impact**: Performance improvements, better error handling, continued security updates; legacy v1 is deprecated  
**Issue**: graphql-router and subgraphs (swarm-api, alerts, user-cycle) use legacy Apollo Federation v1.  
**Task**: Audit all schemas for v2 compatibility; update to `@apollo/gateway` v2; migrate subgraphs to Federation v2 imports.

### 7. Add Testing Infrastructure for ML Models [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Core functionality (queen detection, varroa counting) lacks any automated QA  
**Issue**: models-queen-bee-detector and models-varroa-on-bee have NO tests or CI/CD. These are the platform's most critical features with zero verification.  
**Task**: Add unit tests for preprocessing pipelines; create integration tests with sample sensor data for telemetry-api ingestion; document expected input/output formats.

### 10. Add Rate Limiting to Public Endpoints [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Protects APIs from abuse — rate-limiter exists but isn't wired in  
**Issue**: rate-limiter component exists but graphql-router doesn't use it as middleware. Public endpoints are unprotected.  
**Task**: Wire rate-limiter into graphql-router; add rate limit headers to all API responses; implement different limits for authenticated vs anonymous users.

### 41. Fix Missing .env.example Files Across Services [⚡ Quick win]
**Priority**: 💛 | **Impact**: Eliminates "missing config" debugging — only clickstack has one  
**Issue**: All other services lack environment variable documentation. Developers guess required vars or copy-paste secrets into git.  
**Task**: Create `.env.example` for every service; mark optional vs required variables clearly; add startup validation that fails fast on missing required env vars.

### 42. Implement Redis PubSub for Real-Time Updates [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Enables live hive dashboard — data is collected but never pushed to clients  
**Issue**: redisPubSub and instrument-redis.ts exist in event-stream-filter but aren't wired into the main pipeline. No real-time updates reach connected clients.  
**Task**: Wire redisPubSub into event-stream-filter's main pipeline; add PubSub subscribers in web-app for live metric updates; document pub/sub schema and channel naming conventions.

### 13. Standardize Docker Base Images Across Services [🏗️ High effort]
**Priority**: 💛 | **Impact**: Security, consistency, faster builds — each service has divergent Dockerfiles  
**Issue**: No shared base images across multiple Dockerfile.dev/prod files; inconsistent runtimes and duplicated config.  
**Task**: Define component-specific extension images from a common base; add multi-stage builds for production-optimized images.

### 43. Add Database Connection Pool Monitoring [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Prevents connection exhaustion under load — no visibility into DB pool health  
**Issue**: swarm-api and telemetry-api connect to PostgreSQL without any pool monitoring or metrics.  
**Task**: Add connection pool metrics (active, idle, waiting) for all DB connections; set explicit MinOpenConns/MaxOpenConns per service; alert when utilization exceeds 80% for >5 minutes.

### 46. Implement Dead Letter Queue for Event Processing [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Prevents silent data loss — failed events are dropped without retry  
**Issue**: event-stream-filter processes events but has no failure handling. Failed sensor readings are lost forever.  
**Task**: Add dead letter queue pattern; implement exponential backoff retry logic; create admin endpoint to inspect/replay failed events; alert when DLQ size exceeds threshold.

---

## 💚 Quality — Technical Debt (Backlog Rotation)

Tasks that compound over time, make the codebase more reliable, and reduce long-term costs.

### 8. Consolidate Configuration Management [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Single source of truth for all service config  
**Issue**: Config scattered across formats (config.yaml, config/ dirs, .env files) with no standardization or documentation.  
**Task**: Define a standard YAML/JSON config format; document required env vars per component; add validation at startup for critical values.

### 9. Improve Error Handling and Logging Consistency [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Makes debugging production issues tractable across all services  
**Issue**: log-lib-go exists but not all services use it consistently. Error handling patterns vary between Go (panic recovery) and Node.js (try/catch). No centralized log aggregation strategy.  
**Task**: Audit all services for structured logging; standardize error formats; document log aggregation strategy with examples.

### 12. Add Missing Tests for Components Without Test Coverage [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Prevents regressions in critical data-processing components  
**Issue**: plantnet, graphql-router, image-splitter, log-lib (Node.js) have "no test specified" — these handle critical data processing and API routing.  
**Task**: Add basic test suites: graphql-router (Gateway composition, query validation, auth middleware); log-lib (log formatting, context propagation); plantnet (integration tests with sample images).

### 15. Remove Dead Code and Unused Dependencies [⚡ Quick win]
**Priority**: 💚 | **Impact**: Reduces attack surface and confusion — stale code accumulates silently  
**Issue**: Multiple components contain commented-out code, unused imports, and outdated dependencies that confuse developers.  
**Task**: Audit all services for dead code; remove unused deps with `npm prune`/`go mod tidy`; add CI check to flag unused imports.

### 16. Add OpenAPI/Swagger Documentation for REST APIs [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Self-documenting APIs — currently developers must read code to understand endpoints  
**Issue**: swagger.yaml exists in telemetry-api but most services (swarm-api, weather, alerts) have no API docs.  
**Task**: Add Swagger/OpenAPI annotations to all REST endpoints; generate interactive docs at `/docs` path for each service.

---

## 💙 Nice-to-Have — Polish & Optimization

Tasks that improve developer experience, add polish, or optimize performance when capacity allows.

### 2. Set Up CI/CD Pipeline [🏗️ High effort]
**Priority**: 💙 | **Impact**: Automated build/test/deploy — currently everything is manual  
**Issue**: No `.github/workflows`, no root-level CircleCI config. Each component's CI isn't coordinated across the monorepo.  
**Task**: Create GitHub Actions workflow for: run tests across all components; lint/TS checks; Go build validation; Docker image builds with multi-stage production images.

### 3. Add Security Policy and Disclosure Guidelines [⚡ Quick win]
**Priority**: 💙 | **Impact**: Defines vulnerability reporting process — currently undefined  
**Issue**: No SECURITY.md file exists. Vulnerability disclosure process is undefined, leading to untrusted reporting channels.  
**Task**: Create SECURITY.md with security contact (security@gratheon.com), disclosure process, supported versions and EOL policy.

### 11. Create Development Environment Setup Guide [⚡ Quick win]
**Priority**: 💙 | **Impact**: Reduces new dev onboarding time from days to hours  
**Issue**: No single guide for setting up the complete dev environment from scratch — must piece together instructions from multiple READMEs and justfiles.  
**Task**: Document full setup: monorepo navigation, dependency installation (Go 1.25, Node.js 24, Python 3.x), database setup for PostgreSQL/MySQL/Redis/ClickHouse.

### 44. Standardize GraphQL Schema Versioning [🔧 Medium effort]
**Priority**: 💙 | **Impact**: Prevents breaking changes from reaching production  
**Issue**: Multiple services define GraphQL schemas with no versioning strategy, changelog, or compatibility validation before deployment.  
**Task**: Add semantic versioning to schema files; create a schema registry that tracks versions and validates backward compatibility; document deprecation strategy.

### 45. Fix Entrance-Observer Edge Device Deployment [🏗️ High effort]
**Priority**: 💙 | **Impact**: Enables field-deployed edge devices (Jetson Orin Nano / Mac) to update safely  
**Issue**: entrance-observer has no OTA updates, no health monitoring for the edge device, `.env` committed to git with real credentials, no automated hardware testing.  
**Task**: Create secure OTA update system (signed Docker images, atomic updates); add edge device health endpoint; remove .env from git and rotate credentials immediately.

---

## Updated (2026-07-11): Priority & effort/impact tagging applied across all 48 tasks
Tasks are now sorted by priority emoji (❤️ → 💛 → 💚 → 💙) with consistent ⚡/🔧/🏗️ effort tags and Impact descriptions for quick triage.

## Updated (2026-07-11): Deep code analysis — 5 new tasks added (49–53)
Tasks discovered through direct source-code review of Go services, event-stream-filter, web-app, and weather components. These are not architectural/organizational but runtime-critical or high-leverage quality issues.

### 49. Implement Unfinished GraphQL Resolvers in swarm-api [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Runtime crashes when API is called with missing resolver fields  
**Issue**: `swarm-api/graph/entity.resolvers.go` has two methods (`FindFrameSideByID` and one other) that literally `panic(fmt.Errorf("not implemented"))`. These are code-generated stubs from gqlgen that were never filled in. Any GraphQL query touching these fields will crash the API process.  
**Task**: Implement both resolver methods with real database queries; add unit tests verifying they return proper errors (not panics); audit all other generated resolvers for similar incomplete stubs across the monorepo.

### 50. Fix Weather Service Panic on Missing Location [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Complete outage of weather data if location lookup fails  
**Issue**: `weather/main.go:917` contains `panic("no closest location found")`. If the weather service cannot determine the nearest location (e.g., sensor reports coordinates outside known range, or geocoding API is down), it crashes entirely instead of returning a graceful error response.  
**Task**: Replace panic with proper error handling — return HTTP 503 with descriptive message; add fallback to last-known-good coordinates; log warning and alert on repeated failures; write test case for missing-location scenario.

### 54. Add Root `.gitignore` for Monorepo Secret Protection [⚡ Quick win]
**Priority**: ❤️ | **Impact**: Prevents accidental secret leaks across all 20+ services  
**Issue**: `entrance-observer/.env` is committed to git (confirmed via filesystem scan). No root-level `.gitignore` exists to block `.env`, `.pem`, credentials, or temporary files at the monorepo level. Developers can accidentally push secrets even when component-specific ignores exist.  
**Task**: Create `/Users/artjomkurapov/git/gratheon/.gitignore` with rules for: `*.env`, `.env.*`, `*.pem`, `credentials.json`, `.venv/`, `__pycache__/`, `.pytest_cache/`. Add git-secrets or pre-commit hook to scan commits for AWS keys, JWT secrets, API tokens. Remove existing .env from history if it contains real credentials (rotate immediately).

### 55. Fix Path Traversal Vulnerability in blog-engine-md [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Remote file read — attacker can access arbitrary files on server  
**Issue**: `blog-engine-md/internal/server/server.go:handleRequest` uses `filepath.Abs(s.outputDir)` but does NOT verify the requested path stays within outputDir. Missing `strings.HasPrefix(result, outputRoot + string(filepath.Separator))` check after path cleaning. An attacker requesting `/../../etc/passwd` could read arbitrary files if outputDir is writable outside its boundaries.  
**Task**: Add explicit prefix validation after filepath.Abs; reject requests where resolved path does not start with outputDir; add regression test that attempts `../../etc/passwd` access and verifies 403 response.

### 56. Authenticate SSE Live-Reload Endpoint in blog-engine-md [⚡ Quick win]
**Priority**: 💛 | **Impact**: Prevents information disclosure of dev server state  
**Issue**: `blog-engine-md/internal/server/server.go:59` registers `/__livereload` handler with NO authentication. Any client connecting to this endpoint receives live reload signals and internal file change notifications — exposing development workflow internals to external actors if the port is exposed.  
**Task**: Add token-based auth (query param or header) to `/__livereload`; require matching token from dev tooling only; log connection attempts for audit trail.

### 57. Implement Database Migration Strategy [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Untracked schema changes cause data loss and deployment failures  
**Issue**: Three database engines (PostgreSQL, MySQL, ClickHouse) have no versioned migration tooling. Schema changes are applied manually or via ad-hoc scripts — impossible to reproduce, rollback, or track what changed between deployments.  
**Task**: Adopt a migration tool (e.g., Golang Migrate, Flyway, or Atlas for Go; Alembic/Migrate for Python); create initial migration files capturing current schema state; add migration step to CI pipeline and deployment scripts; document rollback procedure.

### 58. Add Database Backup and DR Strategy [🏗️ High effort]
**Priority**: 💛 | **Impact**: Sensor data is irreplaceable — losing ClickHouse or PostgreSQL means permanent loss of bee telemetry history  
**Issue**: No automated backups exist for any database. If the production disk fails, all historical sensor readings (temperatures, weights, humidity) are lost forever. ClickHouse data is especially sensitive because it cannot be recreated from sensors alone once collected.  
**Task**: Implement nightly pg_dump/mysql dumps to encrypted S3/GCS; configure ClickHouse `BACKUP` operator or logical backup via cron + custom script; test restore procedure quarterly; document RTO/RPO targets (recommend 24h RPO, 4h RTO for sensor data).

### 59. Add CI/CD Pipeline (GitHub Actions) [🏗️ High effort]
**Priority**: 💛 | **Impact**: Manual deployments are error-prone and slow — no automated testing on PRs  
**Issue**: No `.github/workflows/` directory exists. All builds, tests, and deploys must be triggered manually or via ad-hoc scripts. PRs have no automated quality gates. This contradicts the existing justfiles that already define test/lint targets but can't be run automatically.  
**Task**: Create `.github/workflows/ci.yml` with: (1) matrix build for Go/Node/Python components; (2) lint + test on every PR; (3) docker-compose integration tests; (4) `cd.yml` for staging/production deploy triggers. Reuse existing justfiles via `just -f component/justfile test`.

### 60. Add JWT Algorithm Confusion Defense in swarm-api [⚡ Quick win]
**Priority**: ❤️ | **Impact**: Token forgery if server accepts any signing algorithm  
**Issue**: `swarm-api/middleware.go:38` uses `jwt.Parse(token, func...)` but does NOT explicitly verify the `alg` header in the token matches expected values. An attacker could craft a JWT signed with `none` (no signature) or RS256 using a public key they know — bypassing authentication entirely if the parser doesn't reject it.  
**Task**: In the jwt.Parse callback, add: `if _, ok := method.(*jwt.SigningMethodHMAC); !ok { return nil, errors.New("invalid signing algorithm") }`; explicitly require HS256 or HS384; log and alert on unexpected alg values.

---

## Updated (2026-07-11): Priority & effort/impact tagging applied across all 48 tasks
Tasks are now sorted by priority emoji (❤️ → 💛 → 💚 → 💙) with consistent ⚡/🔧/🏗️ effort tags and Impact descriptions for quick triage.

## Updated (2026-07-11): Deep code analysis — 5 new tasks added (49–53)
Tasks discovered through direct source-code review of Go services, event-stream-filter, web-app, and weather components. These are not architectural/organizational but runtime-critical or high-leverage quality issues.

### 49. Implement Unfinished GraphQL Resolvers in swarm-api [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Runtime crashes when API is called with missing resolver fields  
**Issue**: `swarm-api/graph/entity.resolvers.go` has two methods (`FindFrameSideByID` and one other) that literally `panic(fmt.Errorf("not implemented"))`. These are code-generated stubs from gqlgen that were never filled in. Any GraphQL query touching these fields will crash the API process.  
**Task**: Implement both resolver methods with real database queries; add unit tests verifying they return proper errors (not panics); audit all other generated resolvers for similar incomplete stubs across the monorepo.

### 50. Fix Weather Service Panic on Missing Location [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Complete outage of weather data if location lookup fails  
**Issue**: `weather/main.go:917` contains `panic("no closest location found")`. If the weather service cannot determine the nearest location (e.g., sensor reports coordinates outside known range, or geocoding API is down), it crashes entirely instead of returning a graceful error response.  
**Task**: Replace panic with proper error handling — return HTTP 503 with descriptive message; add fallback to last-known-good coordinates; log warning and alert on repeated failures; write test case for missing-location scenario.

### 51. Add Cross-Service Observability (OpenTelemetry) [🏗️ High effort]
**Priority**: 💛 | **Impact**: Blind debugging across 9+ Go/Node services — impossible to trace requests through graphql-router → swarm-api → telemetry-api  
**Issue**: No distributed tracing exists. When a beekeeper reports "data is slow", there is no way to trace a single request across the federation boundary between subgraphs, into ClickHouse writes, or through event-stream-filter processing. Each service logs independently with no correlation IDs.  
**Task**: Integrate OpenTelemetry SDKs into all Go and Node services; add HTTP/gRPC instrumentation; configure Jaeger or similar backend (could reuse existing infrastructure); ensure graphql-router propagates trace context to subgraphs via headers.

### 52. Create Root `just test-all` Orchestration Target [⚡ Quick win]
**Priority**: 💛 | **Impact**: Enables fast CI testing and local verification across all components  
**Issue**: Every component has its own justfile with test targets, but there is no unified command to run tests across the entire monorepo. Running `just` at root fails (no root justfile). This makes PR validation manual and slow — devs must remember which components changed and run tests individually.  
**Task**: Add root justfile with: `test-all` (runs all component test targets in parallel where possible), `lint-all`, `build-all`. Each target should short-circuit if a component's source hasn't changed since last commit (use git diff).

### 53. Systematize TODO/FIXME Technical Debt Tracking [🔧 Medium effort]
**Priority**: 💚 | **Impact**: 1,378 unresolved TODO/FIXME comments indicate massive hidden debt — untracked issues accumulate silently across the monorepo  
**Issue**: Multiple components have scattered FIXME/TODO comments without a centralized tracking mechanism. Developers miss or forget about these items, leading to recurring bugs and wasted investigation time.
**Task**: Run `grep -r "FIXME\|TODO" --include="*.go" --include="*.ts" --include="*.tsx"` across all services; create a dedicated section in this document or a separate tracking file; assign priority and effort estimates to each discovered item.

### 61. Integrate Clickstack OpenTelemetry Across All Services [🏗️ High effort]
**Priority**: 💛 | **Impact**: Unified observability — currently each service has its own logging, no traces link events across the platform  
### 61. Integrate Clickstack OpenTelemetry Across All Services [🏗️ High effort]
**Priority**: 💚 | **Impact**: Unified observability — currently each service has its own logging, no traces link events across the platform  
**Issue**: `clickstack` already contains an OTEL collector configuration (`docker/otel-collector/custom.config.yaml`) and a seed dashboard config. However, individual services (swarm-api, graphql-router, web-app) don't emit OpenTelemetry spans. Without distributed tracing, debugging cross-service issues requires manual log correlation across 15+ services.
**Priority**: 💛 | **Impact**: Safe model updates without full outage — queen detector and varroa counter are critical features  
**Issue**: `models-queen-bee-detector` and `models-varroa-on-bee` have single `.pt` weights files with no versioning, rollback mechanism, or A/B testing capability. When a new model is trained, the only option is to swap the binary — any regression breaks detection for all apiaries immediately.  
**Task**: Add semantic versioning to model artifacts (e.g., `queen-detector-v1.2.0.pt`); create deployment script that supports canary rollout (route 10% traffic to new model); implement automatic rollback if false-positive rate exceeds threshold; store model metadata (accuracy, dataset version, training date) in database for audit trail.

### 63. Define Sensor Data Retention and Archival Policy [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Prevents storage explosion — sensor data grows continuously without cleanup  
**Issue**: The platform collects massive amounts of hive telemetry (temperature, humidity, weight, sound) via `telemetry-api` → ClickHouse. No retention policy exists: raw data stays indefinitely in ClickHouse and PostgreSQL. Storage costs will grow linearly with the number of hives deployed in the field.  
**Task**: Define tiered retention: raw daily readings kept 90 days; aggregated hourly/daily summaries kept forever; implement automated archival to S3/GCS for cold storage; add ClickHouse TTL policies; document data volume estimates per hive per month to set capacity planning.

### 64. Optimize Web App Bundle Size and Code Splitting [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Improves page load times and reduces bandwidth — currently the entire app bundles everything  
**Issue**: `web-app` has 380+ source files across pages like hiveEdit, deviceView, apiaryView, etc. The Preact/Vite build likely includes all code in one bundle even for rarely-used features (designSystem, grafana, accountBilling). This increases initial load time and hurts performance on mobile/low-bandwidth connections common at apiaries.  
**Task**: Audit bundle with `vite-bundle-visualizer`; implement route-based lazy loading for heavy pages; extract shared components into separate chunks; enable gzip/brotli compression in production; set up performance budgets (e.g., initial bundle < 200KB gzipped); add Lighthouse CI to prevent regressions.

### 65. Add Test Coverage for image-splitter and plantnet [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Prevents data corruption — image-splitter processes critical hive imagery, plantnet classifies diseases  
**Issue**: `image-splitter` (28 migrations, complex detection pipeline) and `plantnet` have zero test coverage. These components handle the most sensitive user data: photos of hives used for AI analysis. A bug in frame splitting or disease classification could lead to incorrect management decisions by beekeepers.  
**Task**: Add unit tests for image-splitter's core logic (frame detection, crop boundaries); create integration tests with sample hive images; add plantnet model inference tests with known-positive/negative samples; set up CI to run these tests on every commit; document expected behavior for edge cases (rotated images, low-light, partial frames).

---

### 70. Add API Response Compression Middleware [⚡ Quick win]
**Priority**: 💚 | **Impact**: Reduces bandwidth and improves response times significantly  
**Issue**: Go сервисы (swarm-api, telemetry-api, weather) отдают JSON без gzip/brotli сжатия. В production с большим количеством данных это критично для производительности.  
**Task**: Добавить middleware для gzip compression во все HTTP сервера; включить brotli для статических файлов в web-app; протестировать с реальными данными (hive telemetry, queen list); настроить thresholds для small responses (< 1KB).

---

## 🆕 Newly Added Tasks (2026-07-11) — Deep Analysis

### 71. Secure Token Storage in Entrance Observer [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Prevents API token leakage via app_settings  
**Issue**: `entrance-observer/src/app_settings.py` stores the API token as plain text in a local settings file, and `entrance-observer/src/uploader.py` sends it in plaintext over HTTP (not HTTPS) if configured incorrectly. The token is also exposed in form fields without masking in the UI template.  
**Task**: Encrypt tokens at rest using OS keychain or encrypted storage; enforce HTTPS-only uploads with certificate validation; mask tokens in UI by default with show/hide toggle; add audit logging for token access.

### 72. Protect localStorage Tokens from XSS [⚡ Quick win]
**Priority**: ❤️ | **Impact**: Prevents token theft via XSS attacks  
**Issue**: `web-app/src/user.ts` stores auth tokens in `localStorage` (`authToken`, `shareToken`). If any XSS vulnerability exists (e.g., unsanitized user input, third-party scripts), attackers can steal these tokens and impersonate users. The web version uses cookies correctly but desktop/Tauri version relies on localStorage.  
**Task**: Use httpOnly cookie for web; migrate Tauri/desktop to secure storage (Keychain/Secret Manager); add Content-Security-Policy with `nonce` or hash-based script policies; scan all user inputs for XSS vulnerabilities.

### 73. Validate GStreamer Dependency Before Runtime [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Prevents crashes on systems without GStreamer  
**Issue**: `entrance-observer/src/main.py:46` calls `cv2.CAP_GSTREAMER` unconditionally at startup, which may cause import errors or crashes on Jetson devices without GStreamer installed. The platform targets edge deployment (Jetson Orin Nano) where dependencies must be validated upfront.  
**Task**: Wrap CAP_GSTREAMER access in try/except; add dependency check to startup validation with clear error messages; document required dependencies per OS/platform; add integration test that verifies camera initialization.

### 74. Add Input Validation to Gate Video Stream [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Prevents data corruption and injection attacks  
**Issue**: `gate-video-stream` (Node.js/TypeScript) accepts live frame publishing via GraphQL without input validation or rate limiting on the upload endpoint. Large payloads could cause memory exhaustion; untrusted image data could trigger parser vulnerabilities.  
**Task**: Add schema-level validation for all GraphQL inputs; implement payload size limits and streaming uploads; add rate limiting per API token; validate image metadata (dimensions, format) before processing; log suspicious patterns.

### 75. Secure Image Splitter Pipeline [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Prevents data corruption in hive imagery  
**Issue**: `image-splitter` (Node.js/TypeScript with 28 migrations) processes sensitive hive photos without input validation or file type verification. Malformed images could cause crashes; untrusted uploads could trigger path traversal if output paths are not sanitized.  
**Task**: Validate all uploaded files against allowed types/sizes before processing; sanitize output paths; add checksums for integrity verification; implement retry logic with exponential backoff; add monitoring alerts for split failures.

### 76. Add Structured Logging to Entrance Observer [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Improves debugging and observability  
**Issue**: `entrance-observer/src/main.py` uses print statements throughout (3547 lines), making production debugging difficult. No structured logging for bee count events, upload failures, or camera state changes.  
**Task**: Replace print statements with Python logging module; add JSON log format for structured output; implement log levels and filtering; add correlation IDs for request tracking; document log aggregation strategy.

### 77. Implement Rate Limiting in Gate Video Stream [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Prevents abuse of live frame publishing  
**Issue**: `gate-video-stream` accepts live video streams from entrance-observer without rate limiting per token. A compromised or buggy client could flood the service with frames, causing resource exhaustion.  
**Task**: Implement per-token rate limits (e.g., 10 FPS max); add burst allowance for initial connection; return 429 Too Many Requests with retry-after header; log rate limit violations; document limits in API docs.

### 78. Add Health Checks to Entrance Observer [⚡ Quick win]
**Priority**: 💛 | **Impact**: Enables monitoring and alerting  
**Issue**: `entrance-observer/src/main.py` has no `/health` or `/ready` endpoint. When deployed as a container, there is no way to verify the service is running correctly without checking logs.  
**Task**: Add `/healthz` endpoint returning JSON with camera status, YOLO model state, upload queue size; add readiness check that verifies database connectivity and API token validity; document health check format.

### 79. Implement Graceful Shutdown in Entrance Observer [🔧 Medium effort]
**Priority**: 💛 | **Impact**: Prevents data loss during restarts  
**Issue**: `entrance-observer/src/main.py` uses signal handlers but doesn't flush pending uploads or wait for active video streams to complete before exiting. A restart could lose recent frames or leave partial uploads.  
**Task**: Implement graceful shutdown with context cancellation; wait for in-flight uploads to complete (with timeout); stop YOLO inference gracefully; flush metrics to storage; document shutdown procedure and expected timeouts.

### 80. Add Database Backup Verification [🏗️ High effort]
**Priority**: 💚 | **Impact**: Ensures backups are actually restorable  
**Issue**: No verification that database backups (PostgreSQL, MySQL, ClickHouse) can be restored. A backup is only as good as the last successful restore test. Without automated verification, you may discover too late that backups are corrupt or incomplete.  
**Task**: Implement nightly backup verification by restoring to a temporary database and comparing row counts/checksums; alert on verification failures; document restore procedures with step-by-step instructions; test quarterly with production-like data volumes.


## Updated (2026-07-11): Deep code review — 6 new tasks added (81–86)

### 81. Fix Apollo Federation v3 Incompatibility in graphql-router [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Runtime errors when schema composition fails silently  
**Issue**: `graphql-router/package.json` uses `apollo-server: 3.x` with `@apollo/gateway: ^2.9.6`. Apollo Federation v3 requires `@apollo/server: ^4.x` (not `apollo-server`). The gateway expects v4-style plugins and context, but the router passes v3-style middleware. This causes subtle bugs where custom plugins don't receive expected lifecycle events.  
**Task**: Upgrade to `@apollo/server: ^4.x`, migrate all Apollo Server plugins from v3 API (`ApolloServerPlugin`) to v4 API with new context signature; update request-logger.ts and supergraph.ts accordingly; verify schema registry polling still works.

### 82. Consolidate Duplicate GraphQL Metrics Middleware [⚡ Quick win]
**Priority**: 💛 | **Impact**: Prevents double-counting metrics on resolver calls  
**Issue**: `swarm-api/metrics.go` (line 92) and `telemetry-api/internal/telemetry/metrics/metrics.go` (line 128) both define nearly identical `GraphQLResolverMiddleware` functions. Both use the same operation type detection logic, field context extraction, and panic recovery pattern — but one uses a helper function (`RecordGraphQLResolverCall`) while the other directly calls Prometheus metrics. When both are registered as middleware on the same GraphQL server (unlikely now but possible), metrics get double-counted. The `telemetry-api` version also has dead code: lines 152–163 contain an unused `defer func()` that re-panics after recording metrics — this masks real panic messages in logs.  
**Task**: Extract shared resolver middleware into a common utility function in log-lib-go; deduplicate the implementation across both services; ensure panic recovery does not swallow original stack traces (use `runtime.Stack` before re-panic).

### 83. Implement AI Advisor Analysis Pipeline [🏗️ High effort]
**Priority**: 💛 | **Impact**: Core product feature — currently non-functional  
**Issue**: `web-app/src/page/aiAdvisor/index.tsx` sets `autoAnalyze={true}` on `HiveAdvisor`, but the component only renders a static UI with no actual analysis. The HiveAdvisor component (171 lines) contains only GraphQL queries for hive data (boxes, frames, family) — there is NO call to plantnet or varroa detection models. Users see "AI Advisor" in menu but get no actionable insights. This is the platform's main differentiator and it delivers nothing.  
**Task**: Connect HiveAdvisor to plantnet/varroa model inference endpoints; implement async analysis pipeline (trigger model → poll for results → display findings); add treatment recommendations based on detected issues; integrate with hive inspection workflow for contextual suggestions.

### 84. Add Schema Registry Polling Race Condition Guard [⚡ Quick win]
**Priority**: 💛 | **Impact**: Prevents schema corruption during concurrent updates  
**Issue**: `graphql-router/src/poll-schema-registry.ts` fetches `/schema/latest` from the registry on a timer without any deduplication or stale-response handling. If two polls start simultaneously (e.g., network retry + scheduled poll), both may call `composeServices()` with different schema versions, potentially producing inconsistent supergraph SDLs that are then published back to the registry. There is also no exponential backoff — failed polls immediately retry at full interval, causing thundering herd on registry restarts.  
**Task**: Add mutex/promise chain around poll executions; implement exponential backoff for failed fetches (base 2s, max 30s); validate response schema before composition; add last-successful-poll timestamp to prevent stale updates.

### 85. Replace Missing Context Propagation in Go Services [🔧 Medium effort]
**Priority**: ❤️ | **Impact**: Prevents resource leaks and ensures graceful shutdown  
**Issue**: Several core services use `context.Background()` instead of proper context propagation:
- `swarm-api/config.go`: config loading uses `context.Background()` with no timeout
- `telemetry-api/main.go`: Postgres connection uses a 30-second timeout but no cancellation on shutdown
- `weather/main.go`: External weather API calls use `http.DefaultClient` without timeouts  
When the process receives SIGTERM, connections remain open until OS cleanup — causing slow shutdowns and port conflicts during rolling deployments. The telemetry-api's 30-second DB connect timeout is also too long for production (should be ~5 seconds).  
**Task**: Pass parent context to all service initialization; reduce DB connection timeout to 5 seconds; add HTTP client timeouts to weather service (10s connect, 30s read); implement signal handler that cancels root context and waits for in-flight requests.

### 86. Add Frontend Error Boundary Coverage [🔧 Medium effort]
**Priority**: 💚 | **Impact**: Prevents white-screen-of-death on GraphQL errors  
**Issue**: `web-app/src/error_handler.tsx` exists but no error boundaries are registered around major pages (hive edit, device view, apiary list). When a GraphQL mutation fails or Dexie database operation throws, the entire SPA unmounts and user loses all unsaved work. There is also no retry mechanism for failed mutations — users must manually reload the page to recover.  
**Task**: Wrap key routes with React error boundaries; implement automatic retry for transient GraphQL errors (network timeout, 503); add optimistic update rollback on mutation failure; display friendly error messages instead of white screens.
