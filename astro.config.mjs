import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import * as packageJson from "./package.json";
import tailwind from "@astrojs/tailwind";
const { homepage } = packageJson;

// https://astro.build/config
export default defineConfig({
  site: homepage,
  integrations: [react(), sitemap(), tailwind()],
});
