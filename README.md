# gratheon.com

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Development on local machine

```bash
pnpm install
pnpm run start
```

Open http://localhost:3000 to preview

## Building for production

The website is built locally and static files are committed to git:

```bash
pnpm run build
```

This generates static files in the `build/` directory which are served by nginx.

## Deployment

On push to main branch:
1. Self-hosted runner pulls latest code (including `build/` directory)
2. Restarts search service (Docker)
3. Reloads nginx to serve updated static files

nginx serves static files from `/www/website/build/` directory.
