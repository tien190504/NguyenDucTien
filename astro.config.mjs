import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://tien190504.github.io",
  base: "/NguyenDucTien/",
  outDir: "docs",
  integrations: [tailwind()]
});
