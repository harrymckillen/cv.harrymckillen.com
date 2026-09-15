import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
  schema: experienceSchema,
});

export type Experience = z.infer<typeof experienceSchema>;

const education = defineCollection({
  loader: glob({ base: './src/content/education', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    course: z.string(),
    institute: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
  }),
});

console.log('[content.config] defined collections:', Object.keys({ experience, education }));

export const collections = {
  experience,
  education,
};
