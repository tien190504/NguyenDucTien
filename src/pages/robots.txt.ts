const site = import.meta.env.SITE || "https://example.com";
const base = import.meta.env.BASE_URL || "/";
const sitemapUrl = new URL(`${base}sitemap.xml`, site).toString();

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}

