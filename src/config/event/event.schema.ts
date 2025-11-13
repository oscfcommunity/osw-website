import { z } from 'astro:content';

export const eventsSchema = z.array(
  z
    .object({
      title: z
        .string()
        .min(10, 'Title must be at least 10 characters')
        .max(100, 'Title must not exceed 100 characters'),
      startDate: z.string().transform(str => new Date(str)),
      endDate: z
        .string()
        .optional()
        .transform(str => (str ? new Date(str) : undefined)),
      websiteLink: z
        .string()
        .url('Website link must be a valid URL')
        .optional(),
      isFeatured: z.boolean().default(false),
    })
    .refine(
      data => {
        const start = new Date(data.startDate);
        const end = data.endDate ? new Date(data.endDate) : null;
        return end ? start <= end : true;
      },
      { message: 'End date must be after start date' }
    )
);
