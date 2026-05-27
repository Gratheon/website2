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

The production runner must be able to write `/www/website`, execute `/www/blog-engine-md/bin/blog-engine`, reload nginx, and run Docker Compose for `website-search`. Nginx should use the checked-in `config/nginx.conf`, which serves `/www/website/current`.

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
