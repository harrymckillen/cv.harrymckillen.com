import { defineCollection, z } from "astro:content";

const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
});

const experienceCollection = defineCollection({
  schema: experienceSchema,
});

export type Experience = z.infer<typeof experienceSchema>;

const educationCollection = defineCollection({
  schema: z.object({
    course: z.string(),
    institute: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
  }),
});

export const collections = {
  experience: experienceCollection,
  education: educationCollection,
};
