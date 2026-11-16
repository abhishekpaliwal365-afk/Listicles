import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every listicle is a Markdown file in src/content/listicles/.
// The file name becomes the URL: best-crm-tools.md → /best-crm-tools/
const listicles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/listicles' }),
  schema: z.object({
    title: z.string().max(110),
    description: z.string().min(50).max(170),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Optional per-article override of the product call-to-action. */
    cta: z
      .object({
        text: z.string().optional(),
        url: z.string().optional(),
        tagline: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { listicles };
