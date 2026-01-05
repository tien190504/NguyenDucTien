import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const rawBase = process.env.BASE_PATH || "/";
const base = rawBase === "/" ? "/" : `/${rawBase.replace(/^\/+|\/+$/g, "")}`;

export default defineConfig({
  site: "https://tien190504.github.io",
  base: "/NguyenDucTien/"
});
