import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const site = vercelHost
  ? `https://${vercelHost}`
  : 'https://tech-fund-play.vercel.app';

// Vercel playground — root hosting. Cash one-pager for the Technology Fund.
export default defineConfig({
  site,
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
