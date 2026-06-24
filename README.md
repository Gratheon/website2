# gratheon.com

This website is generated with [`blog-engine-md`](../blog-engine-md) from Markdown content.

## Development

The repo is expected to live next to `blog-engine-md`:

```bash
../blog-engine-md/blog-engine serve
# or
just serve
```

Open the local URL printed by the engine.

## Build

```bash
just build
```

This generates static files in `dist/`. The build runs `scripts/generate-rest-api-docs.py` first, copying OpenAPI specs from sibling `../telemetry-api/openapi.json` and `../gate-video-stream/openapi.json` when available, then regenerating the self-hosted Swagger UI and Postman/Bruno/Insomnia/cURL artifacts under `content/docs/API/rest-docs/`. Production deploys can still build from this repository alone because the generated specs are committed as a fallback.

Refresh only the REST API docs artifacts:

```bash
just rest-api-docs
# or
npm run rest-api-docs
```

Generate or refresh research-paper index pages from frontmatter. This keeps `/research/papers/` as a compact overview and writes dedicated sub-pages for former sections: `/research/papers/scientific-publications/`, `/research/papers/topics/`, `/research/papers/years/`, and `/research/papers/product-areas/`, plus detailed topic, year, and product-area pages under `content/research/papers/`:

```bash
just research-indexes
# or
npm run research-indexes
```

When adding individual paper notes under `content/research/papers/*.md`, keep them discoverable through generated indexes instead of the left sidebar: include YAML frontmatter with `hideNav: true`, `layout: research`, `hideToc: true`, `title`, `description`, `year`, `topics`, `productAreas`, and `paperType`. The research index generator reads this metadata and still lists hidden paper pages under topic, year, and product-area pages.

Research-paper pages should use a consistent rich format so they remain useful as a literature library:

- Keep frontmatter consistent across papers: `hideNav: true`, `layout: research`, `hideToc: true`, `title`, `description`, `year`, `orgs`, `topics`, `productAreas`, and `paperType`. Format `orgs` as a YAML list and prefix each university or research organization with the country flag, for example `- 🇪🇪 University of Tartu`.
- Include the local PDF as a Markdown link, for example `[PDF](pdfs/example.pdf)`, and embed the same local file with an `<object data={require('./pdfs/example.pdf').default} type="application/pdf" width="100%" height="800"></object>` preview.
- Add an `## External links` section with DOI, arXiv, publisher, project, dataset, or GitHub links when available.
- Add an `## Abstract` section summarizing the actual paper from the local PDF rather than only repeating the title.
- Add an `## Relevancy to Gratheon` section describing how the work maps to Gratheon web-app features, hardware products, or the long-term autonomous-apiary vision.

To publish locally into the same immutable-release layout used in production:

```bash
just publish
```

Published releases are stored under `releases/`, and the active site is the
`current` symlink. Generated output is intentionally ignored by Git.

## Deployment

Pushes to `main` deploy through `.github/workflows/deploy.yml`. The workflow expects a GitHub Actions self-hosted runner on the production server, builds the target commit in a temporary Git worktree, publishes it under `/www/website/releases`, flips `/www/website/current` atomically, updates `/www/website`, reloads nginx, and verifies `https://gratheon.com/`.

The production runner must be able to write `/www/website`, execute `/www/blog-engine-md/bin/blog-engine`, and reload nginx. Nginx should use the checked-in `config/nginx.conf`, which serves `/www/website/current`.

Production keeps the two newest immutable releases under `/www/website/releases`. New releases reuse unchanged files from the previous active release via hardlinks when `rsync` is available, keeping rollback support without duplicating static assets on every deploy.

If the runner user is not `root`, give it passwordless sudo for nginx reloads
(replace `www` if the runner uses another account):

```text
www ALL=(root) NOPASSWD: /usr/sbin/nginx -t, /usr/bin/systemctl reload nginx, /usr/sbin/nginx -s reload
```

Manual production deploy:

```bash
ssh root@gratheon.com
cd /www/website
runuser -u www -- git -C /www/website fetch origin main
runuser -u www -- git -C /www/website reset --hard origin/main
./restart.sh
```

## Content

- `content/` is the source used by `blog-engine-md`.
- Most pages are Markdown copied from the previous Docusaurus content roots.
- Several public sections use custom templates:
  - `content/index.md` → `templates/front.html`
  - `content/pricing.md` → `templates/pricing.html`
  - `content/research/**` → `templates/research.html` → `templates/knowledge.html`
  - `content/products/**` and `content/et/products/**` → `templates/products.html` → `templates/knowledge.html`
- The shared `knowledge.html` template is used for research/product pages to avoid the old reference-page left rail while preserving deep navigation as a wide knowledge map. Keep this layout visually restrained: square panels, strong typography, white space, images/visuals, and no rounded content cards or gradients.

Legacy Docusaurus files have been removed; `content/` is the source of truth.

## Internationalization

The site supports the same language list as `~/git/gratheon/web-app/src/config/languages.ts`:
`en`, `ru`, `et`, `tr`, `pl`, `de`, `fr`, `zh`, `hi`, `es`, `ar`, `he`, `bn`, `pt`, `ja`, `lv`, `lt`, `hu`, `uk`, `it`, `ro`.

Right-to-left languages such as Arabic (`ar`) and Hebrew (`he`) must set `direction: "rtl"` in `config.yaml`. `blog-engine-md` exposes this as `.Page.Direction`, and Gratheon templates must emit `<html lang="{{.Page.Language}}" dir="{{.Page.Direction}}">` so browser bidi behavior, CSS selectors, and accessibility tools agree on page direction.

Language URLs are generated from localized `content/<lang>/index.md` files and exposed in the text-only language dropdown in `templates/gratheon.html` (no country flags). English (`en`) is the default locale and is served only from root canonical paths such as `/`, `/blog/`, `/pricing/`, and `/docs/`; it must not be duplicated under `content/en` or linked as `/en/...`. Non-default locales continue to use explicit prefixes such as `/ru/`, `/et/`, etc. The nginx config keeps legacy `/en/...` requests redirecting to their root canonical equivalents.

The front page is translated for every supported non-default language via duplicated standalone templates (`templates/front-ru.html`, `templates/front-et.html`, etc.), and `content/<lang>/index.md` points directly to its template with `layout: front-<lang>`. The canonical English front page uses `content/index.md` with `layout: front`, which delegates to `templates/front-en.html`. This intentionally avoids a complex translation-router/template-partial layer. When changing shared front-page markup, update each `templates/front-*.html` copy or regenerate them manually from the preferred source.

The pricing page is localized for every supported non-default language with standalone templates: `content/<lang>/pricing/index.md` uses `layout: pricing-<lang>`, which maps to `templates/pricing-<lang>.html`. The canonical `/pricing/` page remains English; localized pricing copies intentionally keep plan names and prices exact while translating descriptions, features, limits, and CTAs.

Top-level translated placeholders such as `/<lang>/about/`, `/<lang>/docs/`, and `/<lang>/research/` intentionally redirect to the current English sections until those sections are localized. `/ru/blog/` is backed by a curated set of translated posts, and `/et/blog/` is backed by translated Estonian posts mirroring the current English blog set. Other untranslated non-default blog placeholders still redirect to the English blog until localized.

As of June 2026, Russian `/ru/docs/` and nested `/ru/docs/**` pages are real localized docs copied from `content/docs/**`. Header labels and localized header targets are derived from content frontmatter and localized routes; other languages without localized docs may keep redirect placeholders.

Localized docs must not duplicate heavy binary assets. Keep shared docs images and downloads under `content/img/docs/**`, mirroring the canonical docs content hierarchy (for example `content/img/docs/beehive-sensors/img/example.jpg`). Markdown image embeds in any language should reference the shared image by processed relative path such as `![](docs/beehive-sensors/img/example.jpg)` so the image transformer can generate responsive variants. Non-image downloads/PDF links should use the public shared asset URL such as `/assets/img/docs/robotic-beehive/img/manual.pdf`.

As of June 2026, Estonian `/et/about/` and `/et/products/` are real localized sections instead of redirect placeholders. The localized scope intentionally covers the About landing page, Products landing page, top-level product pages, and a small set of important product subpages. Product and brand names such as Gratheon, Entrance Observer, Live Queen Finder, and Varroa destructor stay unchanged in localized copy, while supporting labels and explanatory text are translated. Links outside that Estonian localization scope should point to stable English canonical pages rather than unresolved local markdown links.

As of June 2026, Estonian `/et/research/`, Spanish `/es/research/`, Portuguese `/pt/research/`, and Polish `/pl/research/` are real localized research landing pages. `/et/research/models/**`, `/es/research/models/**`, `/pt/research/models/**`, `/pl/research/models/**`, and Russian `/ru/research/models/**` mirror the English model-page split. Research paper indexes, datasets, hacker projects, and most detailed paper pages may still link to English canonical routes until those larger sections are localized. Localized research pages must not copy heavy images, videos, or PDFs; reuse generated shared asset URLs such as `/assets/img/research/img/research-preview.webp` and `/assets/assets/entrance-observer-whitepaper.pdf`.

For localized research model pages, keep model repositories, videos, and examples linked from shared external or generated asset URLs; do not copy screenshots, PDFs, or other heavy binaries into localized `content/<lang>/` research sections.
