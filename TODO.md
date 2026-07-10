Priority Legend
| Emoji | Meaning | When to focus |
|-------|---------|---------------|
| ❤️    | Critical / Must-have | Blockers, core value props, revenue-impacting |
| 💛    | High priority / Should have | Important features with clear user impact |
| 💚    | Medium priority / Nice-to-have | Enhancements, polish, secondary workflows |
| 💙    | Low priority / Backlog | Exploration, nice experiments, future ideas |

Effort Guide
- **Low** — 1-2 days, small scoped change
- **Medium** — 3-5 days, needs design + implementation
- **Medium-High** — 5-8 days, multi-component work
- **High** — 10+ days, significant architecture or coordination needed

Impact Guide
- **Core value prop / Revenue impact** — Directly drives product differentiation or income
- **Critical user value / Prevents loss** — Solves acute pain points
- **UX completeness** — Fills gaps in existing workflows
- **Operational visibility / efficiency** — Internal ops, scaling concerns
- **Data-driven insights** — Analytics and intelligence layer



## Added by artjom (💛 Medium-High)
- [ ] 💛 Frame file deletion — Hive details view: delete individual frame files (photo + stats) without removing entire frame; affect both indexDB and backend, update hive bee counts if applicable. **Impact:** User data hygiene. **Effort:** Medium.
- [ ] 💛 Add ability to change frame type <https://github.com/Gratheon/web-app/issues/107> — per-frame foundation type switch. **Impact:** UX completeness. **Effort:** Low-Medium.
- [ ] 💚 Bulk section frame type change (foundation → comb) <https://github.com/Gratheon/web-app/issues/109>. **Impact:** Convenience for apiarists. **Effort:** Medium.
- [ ] 💛 Weather alerts — surface weather warnings in web-app, context-aware for beekeeping decisions. **Impact:** Proactive user value. **Effort:** Medium-High.
- [ ] 🟡 Hive ownership transfer — check docs folder for existing spec; implement transfer flow end-to-end. **Impact:** Business/logic critical. **Effort:** High.
- [ ] 💙 Investigate gratheon.com research papers and suggest ideas to add to web-app, entrance-observer or beehive sensors repos as new features. **Impact:** Innovation pipeline. **Effort:** Low (exploration).

## ML / Varroa Detection (❤️ Critical)
- [ ] ❤️ Integrate varroa-on-bee model into web-app hive detail view — show mite detection per frame, link from entrance images to inference endpoint via graphql-router. Model exists but no frontend path documented. **Impact:** Core product differentiator. **Effort:** Medium-High.
- [ ] ❤️ Varroa alerting — trigger SMS (Twilio) + email (SES) alerts when mite count exceeds threshold; connect inference results to alerts service for proactive beekeeper notifications. **Impact:** Critical user value, prevents colony loss. **Effort:** High.

## Edge Device Management (💚 Medium)
- [ ] 💚 Fleet management dashboard — monitor entrance-observer edge devices (Jetson Orin Nano / Mac): CPU/GPU/temp/FPS, firmware version, last-seen timestamp; trigger remote restart or config update. See `entrance-observer` README for targets. **Impact:** Operational visibility. **Effort:** High.
- [ ] 💛 OTA updates — API endpoint + web-ui flow to push new model weights or app binaries to edge devices without SSH. **Impact:** Operational efficiency, scales deployment. **Effort:** High.

## Analytics & Behavior (💚 Medium)
- [ ] 💛 Bee behavioral analytics dashboards — design for hive activity patterns, forager traffic trends, swarming signals, seasonal patterns on top of entrance-observer tracking data. **Impact:** Data-driven insights. **Effort:** High.
- [ ] 💚 Season-aware dashboard — calendar overlay with key events (spring build-up, honey flow, swarm season, winter cluster) to contextualize telemetry. **Impact:** UX enrichment. **Effort:** Medium-High.

## Data & Export
- [ ] Add CSV/JSON export for hive inspection history and telemetry data in web-app — beekeepers want to back up or analyze their data externally. Should cover frames, inspections, images, varroa counts, and entrance observer metrics.
- [ ] Implement RSS feed generation for gratheon.com blog via blog-engine-md — enable automated content distribution to subscribers

## Security & DevOps
- [ ] Document API rate limiting strategy for graphql-router — add token-based limits per user/plan tier before opening public API. See `rate-limiter` package as reference implementation.
- [ ] Set up CI pipeline monitoring and deployment health checks across all services (swarm-api, entrance-observer, alerts, event-stream-filter) — currently each service has its own README but no unified observability runbook for production incidents

## Added by autonomous analysis (2026-07-10)

### Product & UX (💛 High)
- [ ] 💛 Inspection mode (field-first wizard) — implement guided inspection flow from `gratheon.com/content/products/web_app/future-ideas/hobbyist-tier-ideas/inspection-mode.md`: large glove-friendly controls, frame photo wizard, speech-to-text notes, explicit skip tracking, resume after interruption. **Impact:** Critical user value during apiary visits. **Effort:** Medium-High.
- [ ] 💛 Device registry & management UI — implement `Devices` menu per `future-ideas/pro-tier-ideas/device-management.md`: register entrance-observer / beehive-sensors / third-party devices, link to hive/box, API token per device with `lastUsed` heartbeat, online/offline status. Requires `user-cycle` schema extension (`deviceId` on tokens). **Impact:** Unblocks fleet ops and support. **Effort:** Medium-High.
- [ ] 💛 Entrance live stream embedded player — replace MVP status placeholder in `web-app` `EntranceLiveSessionCard` with HLS/WebRTC playback via `gate-video-stream` relay URLs once session is `active`. Session control mutations already exist. **Impact:** Core entrance-observer product value. **Effort:** Medium.
- [ ] 💚 User email verification & password change — implement flows documented in `future-ideas/hobbyist-tier-ideas/user-email-verification-and-change.md` and `user-password-change.md`. **Impact:** Account security and support load reduction. **Effort:** Medium.

### AI & Recommendations (💛 High)
- [ ] 💛 Enrich AI beekeeper advice context — extend `image-splitter/src/models/ai-beekeeper.ts` prompt with weather (`weather` service), previous inspections, treatments, hive telemetry (temp/weight), and apiary plant context (`plantnet`). **Impact:** Actionable recommendations vs generic LLM output. **Effort:** Medium.
- [ ] 💚 Timeseries anomaly detection — implement Prophet-based anomaly pipeline per `future-ideas/pro-tier-ideas/timeseries-anomaly-detection.md`; store anomalies and surface in alerts + hive telemetry charts. **Impact:** Proactive colony health. **Effort:** High.
- [ ] 💚 Weekly email digest (Pro tier) — scheduled apiary summary per `future-ideas/pro-tier-ideas/weekly-email-digest.md` via `alerts` SES channel: weight/entrance deltas, unresolved alerts, offline devices, varroa reminders. **Impact:** Retention for professional beekeepers. **Effort:** Medium-High.

### Entrance Observer & Video (💛 High)
- [ ] 💛 Phase 2 Field MVP hardware kit — build first weather-protected pilot unit per `gratheon.com/content/docs/entrance-observer/phase-2-field-mvp/`: IP-rated enclosure, stable power (PoE or mains), mounting, power metering, watchdog recovery. Validate count accuracy and bandwidth at a real hive for 2+ weeks. **Impact:** Product readiness beyond lab TRL 5. **Effort:** High.
- [ ] 💛 Persist bee traffic stats on video segments — `gate-video-stream` README notes segments lack in/out statistics; wire entrance-observer upload metadata into `Segment` model and expose via GraphQL for hive entrance charts. **Impact:** Links video clips to quantitative traffic. **Effort:** Medium.
- [ ] 💚 Entrance observer CI pipeline — add `.github/workflows` to `entrance-observer` (pytest, lint, Docker build); repo currently has tests but no automated CI unlike `swarm-api` / `web-app`. **Impact:** Regression safety for edge releases. **Effort:** Low.
- [ ] 💚 Hornet attack & robbing detection from entrance video — implement ideas from `gratheon.com/content/products/entrance_observer/todo/` using abnormal traffic spikes + visual classifiers on uploaded chunks. **Impact:** Differentiated alert types. **Effort:** High.
- [ ] 💙 Pollen load & foraging statistics — detect pollen-carrying bees at entrance per `entrance_observer/ideas/🌻 Detect bees with pollen for foraging statistics.md`. **Impact:** Data-driven foraging insights. **Effort:** Medium-High.

### Telemetry & Sensors (💚 Medium)
- [ ] 💚 Telemetry API extended metrics — add ingestion + GraphQL queries for CO2, atmospheric pressure, audio noise level, vibrations, and wind speed per `telemetry-api/README.md` TODO list. **Impact:** Hardware roadmap alignment. **Effort:** Medium per metric.
- [ ] 💚 3D hive temperature heatmap endpoint — implement `/metrics/temperature` 3D visualization API noted in `telemetry-api/README.md`; surface in web-app hive telemetry view. **Impact:** Brood nest health insights. **Effort:** Medium-High.
- [ ] 💙 Beep.nl weight telemetry integration — third-party scale ingestion per Notion spec linked from `device-management.md`. **Impact:** Ecosystem interoperability. **Effort:** Medium.

### Platform & Quality (💚 Medium)
- [ ] 💚 Local full-stack developer environment — single `docker-compose` (or `just` recipe) spanning `graphql-router`, `swarm-api`, `user-cycle`, `image-splitter`, `telemetry-api`, `gate-video-stream`, Minio, MySQL, Redis; document in root or `gratheon.com` dev guide. **Impact:** Onboarding and integration test velocity. **Effort:** Medium-High.
- [ ] 💚 Deprecate Clarifai for queen cups — `image-splitter` still uses Clarifai gRPC for queen cup detection; evaluate in-house `models-frame-resources` or train dedicated weights to reduce external dependency and cost. **Impact:** Cost and reliability. **Effort:** Medium.
- [ ] 💙 Product onboarding videos in web-app — embed guided tours per `future-ideas/hobbyist-tier-ideas/product-onboarding-videos-and-ui.md`. **Impact:** Activation for new beekeepers. **Effort:** Low-Medium.
- [ ] 💙 Manual inspection bulk photo upload — field workflow per `future-ideas/manual-inspections-bulk-file-upload.md` for importing many frame photos at once after an offline apiary visit. **Impact:** UX for large apiaries. **Effort:** Medium.

### Research → Product Pipeline (💙 Low)
- [ ] 💙 Vibration-based varroa monitoring spike — prototype piezo/accelerometer pipeline inspired by `gratheon.com/content/research/papers/Automated non-invasive Varroa mite detection by vibrational measurements...md`; compare signal quality vs sticky-board and frame-photo models. **Impact:** Non-invasive monitoring option. **Effort:** High (R&D).
- [ ] 💙 TinyML audio hive-state node — evaluate edge audio classifier from `IoT Embedded Smart Monitoring System with Edge Machine Learning for Beehive Management` paper for queenlessness / swarming cues; complement entrance-observer video. **Impact:** Multi-modal colony health. **Effort:** High (R&D).
