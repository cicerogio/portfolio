import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    cover: z.string(),
    metric: z.string(),
    client: z.string(),
    role: z.string(),
    duration: z.string(),
    year: z.number(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { cases };
