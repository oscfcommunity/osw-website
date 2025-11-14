// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://opensourceweekend.org',

  vite: {
    plugins: [tailwindcss()],
  },
});
