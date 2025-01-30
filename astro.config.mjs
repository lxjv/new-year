// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), metaTags()]
});