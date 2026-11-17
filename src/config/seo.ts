/** Builds the sitemap XML for the given routes ("" is the home page). */
export function buildSitemap(
    siteUrl: string,
    routes: readonly string[],
    lastmod: string
): string {
    const root = siteUrl.replace(/\/+$/, "");

    const urls = routes
        .map(route => {
            const loc = route ? `${root}/${route}` : `${root}/`;
            return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
        })
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/** Builds robots.txt that allows everything and points to the sitemap. */
export function buildRobots(siteUrl: string): string {
    const root = siteUrl.replace(/\/+$/, "");
    return `User-agent: *\nAllow: /\n\nSitemap: ${root}/sitemap.xml\n`;
}
