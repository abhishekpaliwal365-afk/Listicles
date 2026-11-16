# Listicle format guide

Follow this guide for every listicle added to this site. A file that follows it
goes live on its own: push it to the `main` branch and Cloudflare rebuilds and
publishes the site in about a minute.

## Where files go

- Put each listicle in `src/content/listicles/` as a Markdown file.
- **The file name becomes the URL.** Use lowercase words joined by hyphens, with no dates and no stop-words where avoidable.
  `best-project-management-tools.md` → `https://<site>/best-project-management-tools/`
- Images go in `public/images/`. Reference them from the root, e.g. `/images/best-pm-tools-hero.jpg`.
- A file whose name starts with `_` (for example `_draft-idea.md`) is ignored.

## Front matter (required block at the top)

```yaml
---
title: "9 Best Project Management Tools for Small Teams (2026)"   # required, ≤ 110 characters
description: "We compared 9 project management tools on price, ease of use and integrations to find the best fit for teams under 20 people."  # required, 50–170 characters; this is the Google snippet
publishDate: 2026-11-16          # required, YYYY-MM-DD
updatedDate: 2026-12-01          # optional; set it when you refresh a post
author: "Jane Doe"               # optional; defaults to the site author
heroImage: "/images/best-pm-tools-hero.jpg"   # optional, 16:9 works best
heroAlt: "Dashboard of a project management app"  # recommended whenever heroImage is set
tags: ["Project management", "Small business"]    # optional
draft: false                     # optional; true hides the post from the site
cta:                             # optional; overrides the default product box for this post only
  text: "Start your free trial"
  url: "https://example.com/signup?utm_source=listicle&utm_campaign=best-pm-tools"
  tagline: "Plan, assign and track work in one place."
---
```

The build fails if a required field is missing or too long. That's deliberate,
so a broken post never goes live.

## Body structure

1. **Intro:** 2–4 short paragraphs. Say who the list is for and how items were picked. Don't use a heading for the intro.
2. **Items:** one level-two heading per item, numbered: `## 1. Item name`.
   - Only numbered `##` headings count as list items. They build the "In this list" box and the search-engine list markup.
   - Use `###` for sub-sections inside an item (for example `### Pros` / `### Cons`).
   - Suggested per-item pattern: one-paragraph summary, then **Best for:**, **Pricing:**, then pros and cons as bullet lists.
3. **Comparison table (optional):** a normal Markdown table, after the items or after the intro.
4. **Wrap-up:** an un-numbered `##` heading such as `## The bottom line` or `## How we chose`.
5. **FAQ (optional):** `## FAQ`, with each question as a `###` heading.

## Product mentions

- The product call-to-action box is added automatically at the top and bottom of every post. **Don't** write your own CTA boxes or banners.
- Link to the product in the text with normal Markdown links: `[Product](https://example.com)`.
- Add UTM parameters to product links if you track campaigns.

## Style rules

- Markdown only. No HTML `<script>`, iframes or inline styles.
- Keep paragraphs short (2–4 sentences).
- Only state facts (prices, features, numbers) you have checked. Note the month the price was checked, e.g. "from $10/user/month (Nov 2026)".
- Write alt text for every image: `![Kanban board view in Tool X](/images/tool-x-board.png)`.
