import { file } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { jobsSchema } from './job.schema';

const jobs = defineCollection({
  loader: file('./src/content/jobs.json'),
  schema: jobsSchema,
});

export { jobs };
