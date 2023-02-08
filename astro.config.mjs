import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: 'es',
      // All urls that don't contain `en` after `http://localhost:3000/` will be treated as default locale, i.e. `es`
      locales: {
        es: 'es-ES', // The `defaultLocale` value must present in `locales` keys
        en: 'en-US',
      }
    }
  })]
});