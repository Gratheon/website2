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

This generates static files in `dist/`.

Generate or refresh research-paper index pages from frontmatter. This keeps `/research/papers/` as a compact overview and writes dedicated sub-pages for former sections: `/research/papers/scientific-publications/`, `/research/papers/topics/`, `/research/papers/years/`, and `/research/papers/product-areas/`, plus detailed topic, year, and product-area pages under `content/research/papers/`:

```bash
just research-indexes
# or
npm run research-indexes
```

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
- Two pages use custom templates:
  - `content/index.md` → `templates/front.html`
  - `content/pricing.md` → `templates/pricing.html`

Legacy Docusaurus files have been removed; `content/` is the source of truth.

## Internationalization

The site supports the same language list as `~/git/gratheon/web-app/src/config/languages.ts`:
`en`, `ru`, `et`, `tr`, `pl`, `de`, `fr`, `zh`, `hi`, `es`, `ar`, `bn`, `pt`, `ja`.

Language URLs are generated from localized `content/<lang>/index.md` files and exposed in the text-only language dropdown in `templates/gratheon.html` (no country flags). English (`en`) is the default locale and is served only from root canonical paths such as `/`, `/blog/`, `/pricing/`, and `/docs/`; it must not be duplicated under `content/en` or linked as `/en/...`. Non-default locales continue to use explicit prefixes such as `/ru/`, `/et/`, etc. The nginx config keeps legacy `/en/...` requests redirecting to their root canonical equivalents.

The front page is translated for every supported non-default language via duplicated standalone templates (`templates/front-ru.html`, `templates/front-et.html`, etc.), and `content/<lang>/index.md` points directly to its template with `layout: front-<lang>`. The canonical English front page uses `content/index.md` with `layout: front`, which delegates to `templates/front-en.html`. This intentionally avoids a complex translation-router/template-partial layer. When changing shared front-page markup, update each `templates/front-*.html` copy or regenerate them manually from the preferred source.

The pricing page is localized for every supported non-default language with standalone templates: `content/<lang>/pricing/index.md` uses `layout: pricing-<lang>`, which maps to `templates/pricing-<lang>.html`. The canonical `/pricing/` page remains English; localized pricing copies intentionally keep plan names and prices exact while translating descriptions, features, limits, and CTAs.

Top-level translated placeholders such as `/<lang>/about/`, `/<lang>/docs/`, and `/<lang>/research/` intentionally redirect to the current English sections until those sections are localized. `/ru/blog/` is backed by a curated set of translated posts, and `/et/blog/` is backed by translated Estonian posts mirroring the current English blog set. Other untranslated non-default blog placeholders still redirect to the English blog until localized.

As of June 2026, Russian `/ru/docs/` and nested `/ru/docs/**` pages are real localized docs copied from `content/docs/**`. Header labels and localized header targets are derived from content frontmatter and localized routes; other languages without localized docs may keep redirect placeholders.

Localized docs must not duplicate heavy binary assets. Keep shared docs images and downloads under `content/img/docs/**`, mirroring the canonical docs content hierarchy (for example `content/img/docs/beehive-sensors/img/example.jpg`). Markdown image embeds in any language should reference the shared image by processed relative path such as `![](docs/beehive-sensors/img/example.jpg)` so the image transformer can generate responsive variants. Non-image downloads/PDF links should use the public shared asset URL such as `/assets/img/docs/robotic-beehive/img/manual.pdf`.

As of June 2026, Estonian `/et/about/` and `/et/about/products/` are real localized sections instead of redirect placeholders. The localized scope intentionally covers the About landing page, Products landing page, top-level product pages, and a small set of important product subpages. Product and brand names such as Gratheon, Entrance Observer, Live Queen Finder, and Varroa destructor stay unchanged in localized copy, while supporting labels and explanatory text are translated. Links outside that Estonian localization scope should point to stable English canonical pages rather than unresolved local markdown links.

As of June 2026, Estonian `/et/research/` is a real localized research landing page and `/et/research/models/**` mirrors the English model-page split. Research paper indexes, datasets, hacker projects, and most detailed paper pages may still link to English canonical routes until those larger sections are localized. Localized research pages must not copy heavy images, videos, or PDFs; reuse generated shared asset URLs such as `/assets/img/research/img/research-preview.webp` and `/assets/assets/entrance-observer-whitepaper.pdf`.

As of June 2026, Russian `/ru/research/models/**` mirrors the English research model-page split. Keep model repositories, videos, and examples linked from shared external or generated asset URLs; do not copy screenshots, PDFs, or other heavy binaries into `content/ru/`.
