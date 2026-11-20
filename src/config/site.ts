/**
 * Single source of truth for site-wide values.
 *
 * Used by the app (page metadata, GitHub API calls, links) and by
 * vite.config.ts, which generates sitemap.xml, robots.txt, 404.html and
 * fills in the URLs in index.html at build time.
 */
export const SITE = {
    name: "Davide Cipolla",
    url: "https://dav-cip.github.io",
    githubUser: "dav-cip",
    // Public routes, listed in the generated sitemap ("" is the home page).
    routes: ["", "about", "experience", "certificates", "projects", "contact"],
} as const;
