import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { jobsSchema } from './job.schema';

const jobs = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/jobs',
  }),
  schema: jobsSchema,
});

export { jobs };
