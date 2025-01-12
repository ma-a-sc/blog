// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelandpolicy.com",
  integrations: [mdx(), sitemap(), alpinejs()],
  experimental: {
    svg: true,
  },
});