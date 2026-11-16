# Listicles site

A fast static site for product listicles, built with [Astro](https://astro.build)
and hosted on Cloudflare. Every push to `main` deploys automatically.

## Publishing a listicle

1. Add a Markdown file to `src/content/listicles/` following [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).
2. Commit and push to `main`.
3. Cloudflare builds and publishes the site, usually in about a minute.

To unpublish a post, set `draft: true` in its front matter or delete the file.

## Rebranding

Edit **`src/site.config.ts`**:

- `SITE.url`: the live address. Update this after the first deploy, and again if you add a custom domain. It's used for canonical links, the sitemap and social previews.
- `SITE.name`, `SITE.description`, `SITE.author`: what readers and search engines see.
- `PRODUCT`: the name, link, tagline and button text used in the call-to-action boxes.

Colors and fonts are set at the top of `src/styles/global.css`.

## What's included

- A home page listing every post, newest first
- Listicle pages with an auto-generated "In this list" box, two product call-to-action boxes and reading time
- SEO: titles, meta descriptions, canonical URLs, Open Graph tags, and Article + ItemList structured data
- `sitemap-index.xml`, `robots.txt` and a 404 page
- Light and dark mode

## Cloudflare settings

The repo is set up for **Cloudflare Workers with static assets**, which is what Cloudflare recommends for new sites, connected to GitHub with Workers Builds:

| Setting        | Value               |
| -------------- | ------------------- |
| Build command  | `npm run build`     |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/`                 |

`wrangler.jsonc` tells Cloudflare to serve the `dist/` folder.

## Local development (optional)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
