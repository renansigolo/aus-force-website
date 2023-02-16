import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import * as packageJson from "./package.json";
const { homepage } = packageJson;

export default defineConfig({
  site: homepage,
  integrations: [sitemap(), tailwind(), solidJs()],
});
