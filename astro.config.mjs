import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import * as packageJson from "./package.json";

const { homepage } = packageJson;

export default defineConfig({
  site: homepage,
  integrations: [react(), sitemap()],
});
