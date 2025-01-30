// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const content = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content" }), 
  schema: z.object({
    type: z.enum(["short", "long"]),
    // everything needs these two
    date: z.date(),
    status: z.enum(["active", "done", "archive"]),
    // link posts
    link: z.string().optional(),
    // essays and lists
    title: z.string().optional(),
    pinned: z.boolean().optional()
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { content };
