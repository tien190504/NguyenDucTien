import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const rawBase = process.env.BASE_PATH || "/";
const base = rawBase === "/" ? "/" : `/${rawBase.replace(/^\/+|\/+$/g, "")}`;

export default defineConfig({
  site: process.env.SITE_URL || "https://example.com",
  base,
  integrations: [tailwind()],
  trailingSlash: "always"
});

