import { defineCollection, z } from 'astro:content';

// Events collection schema
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    venue: z.string().optional(),
    eventType: z.enum([
      'workshop',
      'meetup',
      'hackathon',
      'conference',
      'webinar',
      'networking',
    ]),
    status: z
      .enum(['upcoming', 'ongoing', 'completed', 'cancelled'])
      .default('upcoming'),
    organizers: z.array(z.string()),
    speakers: z
      .array(
        z.object({
          name: z.string(),
          bio: z.string().optional(),
          avatar: z.string().optional(),
          social: z
            .object({
              linkedin: z.string().optional(),
              twitter: z.string().optional(),
              github: z.string().optional(),
            })
            .optional(),
        })
      )
      .optional(),
    registrationLink: z.string().url().optional(),
    maxParticipants: z.number().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    prerequisites: z.array(z.string()).optional(),
    agenda: z
      .array(
        z.object({
          time: z.string(),
          topic: z.string(),
          speaker: z.string().optional(),
        })
      )
      .optional(),
    resources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          type: z
            .enum(['slides', 'video', 'github', 'docs', 'other'])
            .default('other'),
        })
      )
      .optional(),
  }),
});

export const collections = {
  events: eventsCollection,
};
