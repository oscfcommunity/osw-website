import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const jobs = defineCollection({
  loader: glob({ 
    pattern: '**/*.md',
    base: './src/content/jobs'
  }),
  schema: z.object({
    // Core
    title: z.string()
      .min(10, 'Title must be at least 10 characters')
      .max(100, 'Title must not exceed 100 characters'),
    
    description: z.string()
      .min(100, 'Description must be at least 100 characters for SEO')
      .max(5000, 'Description must not exceed 5000 characters'),
    
    datePosted: z.string()
      .or(z.date())
      .transform((val) => new Date(val)),
    
    validThrough: z.string()
      .or(z.date())
      .transform((val) => new Date(val)),
    
    // Company
    company: z.object({
      name: z.string()
        .min(2, 'Company name must be at least 2 characters'),
      
      logo: z.string()
        .url('Company logo must be a valid URL')
        .refine(
          (url) => url.startsWith('https://'),
          'Company logo must use HTTPS protocol (Google requirement)'
        ),
      
      website: z.string()
        .url('Company website must be a valid URL')
        .optional(),
      
      about: z.string()
        .max(500, 'Company description must not exceed 500 characters')
        .optional(),
      
      size: z.enum(['STARTUP', 'SMALL', 'MEDIUM', 'LARGE', 'ENTERPRISE'])
        .optional(),
    }),
    
    // Location
    location: z.object({
      city: z.string()
        .min(2, 'City name must be at least 2 characters'),
      
      state: z.string().optional(),
      
      country: z.string()
        .default('India'),
      
      remote: z.boolean()
        .default(false),
      
      remoteType: z.enum(['FULLY_REMOTE', 'HYBRID', 'ON_SITE'])
        .optional(),
    }),
    
    // Employment
    employmentType: z.enum(
      ['FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY', 'INTERN'],
      { errorMap: () => ({ message: 'Invalid employment type' }) }
    ),
    
    // Compensation
    salary: z.object({
      min: z.number()
        .positive('Minimum salary must be a positive number'),
      
      max: z.number()
        .positive('Maximum salary must be a positive number'),
      
      currency: z.string()
        .length(3, 'Currency must be a 3-letter ISO code (e.g., INR, USD)')
        .default('INR'),
      
      period: z.enum(['HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR']),
    })
    .optional()
    .refine(
      (data) => !data || data.max >= data.min,
      'Maximum salary must be greater than or equal to minimum salary'
    ),
    
    // Qualifications
    experienceLevel: z.enum(
      ['ENTRY_LEVEL', 'MID_LEVEL', 'SENIOR', 'LEAD', 'EXECUTIVE']
    ).optional(),
    
    experience: z.object({
      min: z.number()
        .min(0, 'Minimum experience cannot be negative'),
      
      max: z.number()
        .positive('Maximum experience must be a positive number')
        .optional(),
    }).optional(),
    
    education: z.object({
      level: z.enum([
        'HIGH_SCHOOL',
        'ASSOCIATE_DEGREE',
        'BACHELOR_DEGREE',
        'MASTER_DEGREE',
        'DOCTORATE',
        'NOT_REQUIRED'
      ]),
      
      field: z.string().optional(),
      
      required: z.boolean().default(false),
    }).optional(),
    
    skills: z.array(z.string())
      .optional(),
    
    // Benefits
    benefits: z.object({
      health: z.array(z.string()).optional(),
      timeOff: z.array(z.string()).optional(),
      other: z.array(z.string()).optional(),
    }).optional(),
    
    // Application
    application: z.object({
      applyUrl: z.string()
        .url('Application URL must be a valid URL')
        .optional(),
      
      applyEmail: z.string()
        .email('Application email must be a valid email address')
        .refine(
          (email) => !email.includes('noreply'),
          'Application email should not be a noreply address'
        )
        .optional(),
      
      instructions: z.string()
        .max(1000, 'Application instructions must not exceed 1000 characters')
        .optional(),
      
      deadline: z.string()
        .or(z.date())
        .transform((val) => new Date(val))
        .optional(),
    }).refine(
      (data) => data.applyUrl || data.applyEmail,
      'Must provide either applyUrl or applyEmail for applications'
    ),
    
    // Metadata
    categories: z.array(z.string())
      .min(1, 'At least one category is required')
      .max(5, 'Maximum 5 categories allowed'),
    
    seo: z.object({
      metaTitle: z.string()
        .max(60, 'SEO title must not exceed 60 characters')
        .optional(),
      
      metaDescription: z.string()
        .max(160, 'SEO description must not exceed 160 characters')
        .optional(),
      
      keywords: z.array(z.string()).optional(),
    }).optional(),
    
    // Status
    status: z.enum(['ACTIVE', 'CLOSED', 'DRAFT'])
      .default('ACTIVE'),
    
    featured: z.boolean()
      .default(false),
    
    urgent: z.boolean()
      .default(false),
  }).refine(
    (data) => data.validThrough > data.datePosted,
    'Job expiration date (validThrough) must be after posting date (datePosted)'
  ),
});

const homeConfig = defineCollection({
  loader: glob({ 
    pattern: 'home.yaml',
    base: './src/content/config'
  }),
  schema: z.object({
    page: z.object({
      title: z.string()
        .min(5, 'Page title must be at least 5 characters')
        .max(60, 'Page title must not exceed 60 characters for SEO'),
      description: z.string()
        .max(160, 'Page description must not exceed 160 characters for SEO')
        .optional(),
    }),
    sections: z.object({
      // Hero Section Configuration
      hero: z.object({
        enabled: z.boolean().default(true),
        
        // Badge configuration
        badge: z.object({
          text: z.string()
            .min(5, 'Badge text must be at least 5 characters')
            .max(50, 'Badge text must not exceed 50 characters'),
          icon: z.string()
            .max(5, 'Icon should be a single emoji or short text')
            .default('🎉'),
          showIcon: z.boolean().default(false),
        }),
        
        // Headline configuration
        headline: z.object({
          line1: z.string()
            .min(3, 'Headline line 1 must be at least 3 characters')
            .max(50, 'Headline line 1 must not exceed 50 characters'),
          line2: z.string()
            .min(3, 'Headline line 2 must be at least 3 characters')
            .max(50, 'Headline line 2 must not exceed 50 characters'),
          subtitle: z.string()
            .min(10, 'Subtitle must be at least 10 characters')
            .max(100, 'Subtitle must not exceed 100 characters'),
          description: z.string()
            .min(50, 'Description must be at least 50 characters')
            .max(300, 'Description must not exceed 300 characters'),
        }),
        
        // Call-to-action buttons
        cta: z.object({
          primary: z.object({
            text: z.string()
              .min(5, 'Button text must be at least 5 characters')
              .max(30, 'Button text must not exceed 30 characters'),
            link: z.string()
              .url('Primary CTA link must be a valid URL'),
            external: z.boolean().default(false),
          }),
          secondary: z.object({
            text: z.string()
              .min(5, 'Button text must be at least 5 characters')
              .max(30, 'Button text must not exceed 30 characters'),
            link: z.string(),
            external: z.boolean().default(false),
          }),
        }),
        
        // Statistics
        stats: z.array(
          z.object({
            value: z.string()
              .min(1, 'Stat value is required')
              .max(10, 'Stat value must not exceed 10 characters'),
            label: z.string()
              .min(3, 'Stat label must be at least 3 characters')
              .max(30, 'Stat label must not exceed 30 characters'),
          })
        )
        .min(1, 'At least one stat is required')
        .max(4, 'Maximum 4 stats allowed for visual balance'),
        
        // Visual settings
        showTerminal: z.boolean().default(true),
      }).optional(),
      
      // Button Demo Section
      buttonDemo: z.object({ 
        enabled: z.boolean().default(true) 
      }).optional(),
      
      // Jobs Section Configuration
      jobs: z.object({
        enabled: z.boolean().default(true),
        title: z.string()
          .min(5, 'Jobs section title must be at least 5 characters')
          .max(100, 'Jobs section title must not exceed 100 characters'),
        subtitle: z.string()
          .max(200, 'Jobs section subtitle must not exceed 200 characters')
          .optional(),
        showCount: z.number()
          .min(1, 'Must show at least 1 job')
          .max(10, 'Cannot show more than 10 jobs')
          .default(3),
        showFeaturedOnly: z.boolean().default(false),
        ctaButton: z.object({
          text: z.string()
            .min(5, 'Button text must be at least 5 characters')
            .max(30, 'Button text must not exceed 30 characters'),
          link: z.string()
            .regex(/^\//, 'Link must start with / for internal links'),
          style: z.enum(['primary', 'secondary', 'accent', 'neutral'])
            .default('primary'),
          size: z.enum(['sm', 'md', 'lg'])
            .default('lg'),
        }),
        sectionBackground: z.string()
          .regex(/^bg-/, 'Background must be a valid Tailwind class starting with bg-')
          .default('bg-base-100'),
        useFluidContainer: z.boolean().default(false),
      }).optional(),
    }),
  }),
});

const jobCardConfig = defineCollection({
  loader: glob({ 
    pattern: 'job-card.yaml',
    base: './src/content/config'
  }),
  schema: z.object({
    categoryColors: z.record(
      z.string(), 
      z.enum(['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral'])
    ),
    defaultCategoryColor: z.enum(['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral'])
      .default('neutral'),
    display: z.object({
      showCompanyLogo: z.boolean().default(true),
      showSalary: z.boolean().default(true),
      showLocation: z.boolean().default(true),
      showCategories: z.boolean().default(true),
      showEmploymentType: z.boolean().default(true),
      showPostedDate: z.boolean().default(true),
    }),
    button: z.object({
      style: z.enum(['primary', 'secondary', 'accent', 'neutral'])
        .default('primary'),
      size: z.enum(['sm', 'md', 'lg'])
        .default('md'),
      text: z.string()
        .default('View Job'),
    }),
  }),
});

export const collections = { 
  jobs,
  homeConfig,
  jobCardConfig,
};