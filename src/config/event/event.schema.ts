import { z } from 'astro:content';

// Component Schemas
export const SocialMediaLinksSchema = z.object({
  linkedin: z.string().url('LinkedIn must be a valid URL').optional(),
  github: z.string().url('GitHub must be a valid URL').optional(),
  gitlab: z.string().url('GitLab must be a valid URL').optional(),
  twitter: z.string().url('Twitter/X must be a valid URL').optional(),
  other: z.record(z.string().url()).optional(),
});

export const ProfileCardSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  image: z.string().url('Image must be a valid URL'),
  socialMediaLinks: SocialMediaLinksSchema.optional(),
  role: z.string().optional(),
  company: z.string().optional(),
  type: z.enum(['SPEAKER', 'MENTOR', 'VOLUNTEER', 'CORE_TEAM', 'ADVISORY']),
});

export const ScheduleSchema = z.object({
  datetime: z
    .string()
    .or(z.date())
    .transform(val => new Date(val)),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  speaker: z.string().optional(),
  type: z.enum([
    'REGISTRATION',
    'ACTIVITY',
    'OPENING',
    'KEYNOTE',
    'TALK',
    'LUNCH',
    'CLOSING_KEYNOTE',
    'GOODIES_DISTRIBUTION',
  ]),
  venue: z.string().optional(),
  startDatetime: z
    .string()
    .or(z.date())
    .transform(val => new Date(val)),
  endDatetime: z
    .string()
    .or(z.date())
    .transform(val => new Date(val)),
  presentationLink: z
    .string()
    .url('Presentation link must be a valid URL')
    .optional(),
});

export const SponsorSchema = z.object({
  name: z.string().min(2, 'Sponsor name must be at least 2 characters'),
  url: z.string().url('Sponsor URL must be a valid URL'),
  image: z.string().url('Sponsor image must be a valid URL'),
  type: z.enum(['PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'COMMUNITY']),
});

export const SocialMediaPostSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  link: z.string().url('Link must be a valid URL'),
  icon: z.string().optional(),
});

export const LocationSchema = z.object({
  city: z.string().min(2, 'City name must be at least 2 characters'),
  state: z.string().optional(),
  country: z.string().default('India'),
});

export const SeoSchema = z.object({
  metaTitle: z
    .string()
    .max(60, 'SEO title must not exceed 60 characters')
    .optional(),
  metaDescription: z
    .string()
    .max(160, 'SEO description must not exceed 160 characters')
    .optional(),
  keywords: z.array(z.string()).optional(),
  metaImageUrl: z.string().url('Meta image must be a valid URL').optional(),
});

export const eventsSchema = z
  .object({
    title: z
      .string()
      .min(10, 'Title must be at least 10 characters')
      .max(100, 'Title must not exceed 100 characters'),

    description: z
      .string()
      .min(50, 'Description must be at least 50 characters')
      .max(2000, 'Description must not exceed 2000 characters'),

    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),

    endDate: z
      .string()
      .or(z.date())
      .transform(val => new Date(val))
      .optional(),

    location: LocationSchema,
    venue: z.string().optional(),

    eventType: z.enum([
      'WORKSHOP',
      'MEETUP',
      'HACKATHON',
      'CONFERENCE',
      'WEBINAR',
      'NETWORKING',
    ]),

    status: z
      .enum(['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED'])
      .default('UPCOMING'),

    profiles: z.array(ProfileCardSchema).optional(),
    schedule: z.array(ScheduleSchema).optional(),
    sponsors: z.array(SponsorSchema).optional(),
    socialMediaPosts: z.array(SocialMediaPostSchema).optional(),

    registrationLink: z
      .string()
      .url('Registration link must be a valid URL')
      .optional(),

    maxParticipants: z
      .number()
      .positive('Maximum participants must be a positive number')
      .optional(),

    tags: z.array(z.string()).default([]),
    coverImage: z.string().url('Cover image must be a valid URL').optional(),

    seo: SeoSchema.optional(),

    isFeatured: z.boolean().default(false),
  })
  .refine(
    data => !data.endDate || data.endDate >= data.date,
    'Event end date must be after or equal to start date'
  );
