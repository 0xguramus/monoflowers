import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    price: z.number(),
    order: z.number().optional().nullable(),
    old_price: z.number().optional().nullable(),
    category: z.enum(['red-roses', 'spray-roses', 'roses', 'mixed-flowers', 'bouquets', 'boxes', 'single', 'compositions', 'gifts']),
    images: z.array(z.string()).max(4).default([]),
    available: z.boolean().default(true),
    featured: z.boolean().default(false),
    description: z.string(),
    example: z.boolean().default(false),
  }),
});
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional().nullable(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    example: z.boolean().default(false),
  }),
});
export const collections = { products, blog };
