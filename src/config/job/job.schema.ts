import { z } from 'astro:content';

export const CompanySchema = z.object({
  name: z.string().min(2, 'Company name must be at least 2 characters'),
});

export const ApplicationSchema = z
  .object({
    url: z.string().url('Application URL must be a valid URL').optional(),
    applyEmail: z
      .string()
      .email('Application email must be a valid email address')
      .refine(
        email => !email.includes('noreply'),
        'Application email should not be a noreply address'
      )
      .optional(),
  })
  .refine(
    data => data.url || data.applyEmail,
    'Must provide either url or applyEmail for applications'
  );

export const jobsSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must not exceed 100 characters'),

  company: CompanySchema,

  application: ApplicationSchema,

  status: z.enum(['ACTIVE', 'CLOSED', 'DRAFT']).default('ACTIVE'),
  isFeatured: z.boolean().default(false),
  isUrgent: z.boolean().default(false),
});
