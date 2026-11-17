import { describe, expect, it } from "vitest";
import { buildRobots, buildSitemap } from "./seo";

describe("buildSitemap", () => {
    const xml = buildSitemap(
        "https://example.github.io/",
        ["", "about", "projects"],
        "2026-01-02"
    );

    it("lists the home page with a trailing slash and other routes without one", () => {
        expect(xml).toContain("<loc>https://example.github.io/</loc>");
        expect(xml).toContain("<loc>https://example.github.io/about</loc>");
        expect(xml).toContain("<loc>https://example.github.io/projects</loc>");
    });

    it("adds one URL entry per route with the given lastmod date", () => {
        expect(xml.match(/<url>/g)).toHaveLength(3);
        expect(xml.match(/<lastmod>2026-01-02<\/lastmod>/g)).toHaveLength(3);
    });

    it("never produces a double slash from a trailing slash in the site URL", () => {
        expect(xml).not.toContain("github.io//");
    });
});

describe("buildRobots", () => {
    it("allows crawling and points to the sitemap", () => {
        const robots = buildRobots("https://example.github.io/");

        expect(robots).toContain("Allow: /");
        expect(robots).toContain("Sitemap: https://example.github.io/sitemap.xml");
    });
});
