import { z } from 'astro:content';

const eventsSchema = z
  .object({
    title: z
      .string()
      .min(10, 'Title must be at least 10 characters')
      .max(100, 'Title must not exceed 100 characters'),

    description: z
      .string()
      .min(50, 'Description must be at least 50 characters')
      .max(500, 'Description must not exceed 500 characters'),

    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),

    endDate: z
      .string()
      .or(z.date())
      .transform(val => new Date(val))
      .optional(),

    location: z.string().min(3, 'Location must be at least 3 characters'),

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

    speakers: z.array(z.string()).optional(),

    registrationLink: z
      .string()
      .url('Registration link must be a valid URL')
      .optional(),

    maxParticipants: z
      .number()
      .positive('Maximum participants must be a positive number')
      .optional(),

    tags: z.array(z.string()).default([]),

    featured: z.boolean().default(false),

    coverImage: z.string().url('Cover image must be a valid URL').optional(),

    agenda: z
      .array(
        z.object({
          time: z.string(),
          title: z.string(),
          speaker: z.string(),
          type: z.string(),
          room: z.string(),
          start: z.string(),
          end: z.string(),
          isPanelLeft: z.boolean().optional(),
          isPanelRight: z.boolean().optional(),
        })
      )
      .optional(),
  })
  .refine(
    data => !data.endDate || data.endDate >= data.date,
    'Event end date must be after or equal to start date'
  );

export { eventsSchema };
