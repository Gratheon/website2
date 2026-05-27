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

For the current nginx/deployment layout that expects `build/`:

```bash
just publish
```

## Deployment

Pushes to `main` deploy through `.github/workflows/deploy.yml`. The workflow SSHes to `root@gratheon.com`, pulls `/www/website` as the `www` user, runs `./restart.sh`, and verifies `https://gratheon.com/`.

Required GitHub Actions secret:

```bash
GRATHEON_PRODUCTION_SSH_KEY
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
