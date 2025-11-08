import { z } from 'astro:content';

export const CompanySchema = z.object({
  name: z.string().min(2, 'Company name must be at least 2 characters'),

  logo: z
    .string()
    .url('Company logo must be a valid URL')
    .refine(
      url => url.startsWith('https://'),
      'Company logo must use HTTPS protocol (Google requirement)'
    ),

  website: z.string().url('Company website must be a valid URL').optional(),

  about: z
    .string()
    .max(500, 'Company description must not exceed 500 characters')
    .optional(),

  size: z
    .enum(['STARTUP', 'SMALL', 'MEDIUM', 'LARGE', 'ENTERPRISE'])
    .optional(),
});

export const LocationSchema = z.object({
  city: z.string().min(2, 'City name must be at least 2 characters'),
  state: z.string().optional(),
  country: z.string().default('India'),
});

export const SalarySchema = z
  .object({
    min: z.number().positive('Minimum salary must be a positive number'),
    max: z.number().positive('Maximum salary must be a positive number'),
    currency: z
      .string()
      .length(3, 'Currency must be a 3-letter ISO code (e.g., INR, USD)')
      .default('INR'),
    period: z.enum(['HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR']),
  })
  .refine(
    data => data.max >= data.min,
    'Maximum salary must be greater than or equal to minimum salary'
  );

export const EducationSchema = z.object({
  level: z.enum([
    'HIGH_SCHOOL',
    'ASSOCIATE_DEGREE',
    'BACHELOR_DEGREE',
    'MASTER_DEGREE',
    'DOCTORATE',
    'NOT_REQUIRED',
  ]),
  field: z.string().optional(),
  required: z.boolean().default(false),
});

export const ExperienceSchema = z.object({
  min: z.number().min(0, 'Minimum experience cannot be negative'),
  max: z
    .number()
    .positive('Maximum experience must be a positive number')
    .optional(),
  level: z
    .enum([
      'ENTRY_LEVEL',
      'MID_LEVEL',
      'SENIOR',
      'LEAD',
      'EXECUTIVE',
      'FOUNDER',
      'CO_FOUNDER',
    ])
    .optional(),
});

export const QualificationSchema = z.object({
  experience: ExperienceSchema.optional(),
  education: EducationSchema.optional(),
  skills: z.array(z.string()).optional(),
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
    instructions: z
      .string()
      .max(1000, 'Application instructions must not exceed 1000 characters')
      .optional(),
    deadline: z
      .string()
      .or(z.date())
      .transform(val => new Date(val))
      .optional(),
  })
  .refine(
    data => data.url || data.applyEmail,
    'Must provide either url or applyEmail for applications'
  );

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

export const jobsSchema = z
  .object({
    title: z
      .string()
      .min(10, 'Title must be at least 10 characters')
      .max(100, 'Title must not exceed 100 characters'),

    description: z
      .string()
      .min(100, 'Description must be at least 100 characters for SEO')
      .max(5000, 'Description must not exceed 5000 characters'),

    datePosted: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),

    validThrough: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),

    jobType: z.enum(['REMOTE', 'HYBRID', 'ON_SITE']),

    employmentType: z.enum(
      ['FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY', 'INTERN'],
      { errorMap: () => ({ message: 'Invalid employment type' }) }
    ),

    location: LocationSchema,
    company: CompanySchema,
    qualification: QualificationSchema.optional(),
    salary: SalarySchema.optional(),

    benefits: z
      .string()
      .max(2000, 'Benefits description must not exceed 2000 characters')
      .optional(),

    application: ApplicationSchema,
    seo: SeoSchema.optional(),

    categories: z
      .array(z.string())
      .min(1, 'At least one category is required')
      .max(5, 'Maximum 5 categories allowed'),

    status: z.enum(['ACTIVE', 'CLOSED', 'DRAFT']).default('ACTIVE'),
    isFeatured: z.boolean().default(false),
    isUrgent: z.boolean().default(false),
  })
  .refine(
    data => data.validThrough > data.datePosted,
    'Job expiration date (validThrough) must be after posting date (datePosted)'
  );
