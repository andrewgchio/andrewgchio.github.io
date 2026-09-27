# andrewgchio.github.io

Source for Andrew Chio's personal website, <https://andrewgchio.github.io/>, built with [Hugo](https://gohugo.io/) and the [HugoBlox](https://github.com/HugoBlox/kit) Academic CV template.

## Local development

Requirements: Hugo extended (version pinned in `hugoblox.yaml`), Go, Node.js 22+, and pnpm.

```sh
pnpm install
pnpm dev          # http://localhost:1313
```

Hugo runs Tailwind with `node --permission`, so Node 20 and older will fail with `bad option: --permission`.

Search uses a [Pagefind](https://pagefind.app/) index that Hugo itself does not generate. `pnpm dev` builds it into `static/pagefind/` before starting the server; plain `hugo server` has no index, so the search box finds nothing. The index is a snapshot, so rerun `pnpm run pagefind:dev` to pick up content changes made while the server is running.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

## Layout

- `content/` — homepage (`_index.md`), publications, projects, news, and SmartSPEC docs
- `data/authors/me.yaml` — profile, experience, education, and awards
- `config/_default/` — site configuration and navigation menu
- `layouts/` — custom blocks and partial overrides
- `static/uploads/` — CV PDF
