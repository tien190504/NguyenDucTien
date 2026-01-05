import { getCollection } from "astro:content";
import projects from "../data/projects.json";

const site = import.meta.env.SITE || "https://example.com";
const base = import.meta.env.BASE_URL || "/";

const withBase = (path) => {
  const cleanPath = path.replace(/^\//, "");
  return new URL(`${base}${cleanPath}`, site).toString();
};

export async function GET() {
  const posts = await getCollection("blog");
  const staticPages = [
    "",
    "about/",
    "projects/",
    "blog/",
    "contact/"
  ];

  const urls = [
    ...staticPages.map((page) => withBase(page)),
    ...projects.map((project) => withBase(`projects/${project.slug}/`)),
    ...posts.map((post) => withBase(`blog/${post.slug}/`))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}

