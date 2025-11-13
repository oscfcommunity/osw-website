import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { eventsSchema } from './event.schema';

const events = defineCollection({
  loader: glob({
    pattern: '**/*.event.json',
    base: './src/content/events',
  }),
  schema: eventsSchema,
});

export { events };
