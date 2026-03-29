import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import solid from '@astrojs/solid-js';
import vercel from '@astrojs/vercel';
// import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://maneeshk.now.sh',
  output: 'server',
  integrations: [
    solid(),
    // react({
    //   include: ['**/react/*'],
    // }),
    mdx(), sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});