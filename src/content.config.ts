import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workSchema = z.object({
  src: z.string(),
  titleZh: z.string(),
  titleEn: z.string(),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    titleZh: z.string(),
    titleEn: z.string(),
    date: z.coerce.date(),
    summaryZh: z.string(),
    summaryEn: z.string(),
    image: z.string(),
    placeholder: z.boolean().default(true),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/members' }),
  schema: z.object({
    order: z.number().optional(),
    nameZh: z.string(),
    nameEn: z.string(),
    lineName: z.string(),
    titleZh: z.string(),
    titleEn: z.string(),
    bioZh: z.string(),
    bioEn: z.string(),
    educationZh: z.string(),
    educationEn: z.string(),
    awardsZh: z.string(),
    awardsEn: z.string(),
    exhibitionsZh: z.string(),
    exhibitionsEn: z.string(),
    contactZh: z.string(),
    contactEn: z.string(),
    portrait: z.string(),
    published: z.boolean().default(true),
    works: z.array(workSchema).default([]),
  }),
});

const exhibitions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/exhibitions' }),
  schema: z.object({
    titleZh: z.string(),
    titleEn: z.string(),
    status: z.enum(['current', 'past']),
    dateLabelZh: z.string(),
    dateLabelEn: z.string(),
    venueZh: z.string(),
    venueEn: z.string(),
    organizersZh: z.string(),
    organizersEn: z.string(),
    summaryZh: z.string(),
    summaryEn: z.string(),
    hero: z.string(),
    artworks: z.array(workSchema).default([]),
    relatedEventsZh: z.string(),
    relatedEventsEn: z.string(),
  }),
});

export const collections = { news, members, exhibitions };
