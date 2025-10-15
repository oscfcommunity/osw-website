// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beta.opensourceweekend.org',

  vite: {
    plugins: [tailwindcss()],
  },
});
