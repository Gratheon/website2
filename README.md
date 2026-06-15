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

Language URLs are generated from `content/<lang>/index.md` and exposed in the text-only language dropdown in `templates/gratheon.html` (no country flags). The root `/` remains the default English front page, while `/en/`, `/ru/`, `/et/`, etc. are explicit localized front-page URLs.

The front page is translated for every supported language via duplicated standalone templates (`templates/front-en.html`, `templates/front-ru.html`, etc.), and `content/<lang>/index.md` points directly to its template with `layout: front-<lang>`. This intentionally avoids a complex translation-router/template-partial layer. When changing shared front-page markup, update each `templates/front-*.html` copy or regenerate them manually from the preferred source.

The Russian pricing page is also localized with its own standalone template: `content/ru/pricing/index.md` uses `layout: pricing-ru`, which maps to `templates/pricing-ru.html`. This keeps `/pricing/` canonical in English while allowing `/ru/pricing/` to diverge safely.

Top-level translated placeholders such as `/<lang>/about/`, `/<lang>/docs/`, and `/<lang>/research/` intentionally redirect to the current English sections until those sections are fully localized. `/ru/blog/` is now backed by a curated set of translated posts, while other untranslated blog placeholders still redirect to the English blog until localized. Other languages may still keep `/<lang>/pricing/` as redirect placeholders until they get their own localized pricing templates.
