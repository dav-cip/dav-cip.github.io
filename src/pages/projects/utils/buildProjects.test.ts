import { describe, expect, it } from "vitest";
import type { GithubRepo } from "../services/github";
import type { ProjectConfig } from "../config/projects";
import { buildFallbackProjects, buildProjects, techFromRepo } from "./buildProjects";

const USER = "me";

function repo(overrides: Partial<GithubRepo> & { name: string }): GithubRepo {
    return {
        id: Math.floor(Math.random() * 1_000_000),
        description: null,
        html_url: `https://github.com/${USER}/${overrides.name}`,
        language: null,
        fork: false,
        archived: false,
        owner: { login: USER },
        ...overrides
    };
}

describe("techFromRepo", () => {
    it("combines the language and capitalized topics without duplicates", () => {
        const tags = techFromRepo(
            repo({ name: "a", language: "TypeScript", topics: ["react", "TypeScript", "vite"] })
        );

        expect(tags).toEqual(["TypeScript", "React", "Vite"]);
    });

    it("returns no tags when there is no language or topics", () => {
        expect(techFromRepo(repo({ name: "a" }))).toEqual([]);
    });
});

describe("buildProjects", () => {
    it("lists my own non-fork repos automatically using their GitHub details", () => {
        const projects = buildProjects(
            [repo({ name: "new-app", description: "A new app", language: "Python", homepage: "https://demo.test" })],
            [],
            USER
        );

        expect(projects).toHaveLength(1);
        expect(projects[0]).toMatchObject({
            title: "new-app",
            description: "A new app",
            tech: ["Python"],
            demo: "https://demo.test",
            featured: false
        });
    });

    it("leaves description undefined when the repo has none", () => {
        const [project] = buildProjects([repo({ name: "empty" })], [], USER);

        expect(project.description).toBeUndefined();
        expect(project.demo).toBeUndefined();
    });

    it("skips forks and other people's repos that have no config entry", () => {
        const projects = buildProjects(
            [
                repo({ name: "a-fork", fork: true }),
                repo({ name: "theirs", owner: { login: "someone-else" } })
            ],
            [],
            USER
        );

        expect(projects).toEqual([]);
    });

    it("shows a configured repo even if it is someone else's", () => {
        const config: ProjectConfig[] = [{ name: "theirs", description: "Team project" }];
        const projects = buildProjects(
            [repo({ name: "theirs", owner: { login: "someone-else" } })],
            config,
            USER
        );

        expect(projects.map(project => project.title)).toEqual(["theirs"]);
        expect(projects[0].description).toBe("Team project");
    });

    it("lets config entries override the GitHub details", () => {
        const config: ProjectConfig[] = [
            {
                name: "app",
                description: "Custom",
                descriptionFr: "Personnalisé",
                tech: ["Rust"],
                featured: true,
                image: "/custom.svg"
            }
        ];
        const [project] = buildProjects(
            [repo({ name: "app", description: "From GitHub", language: "Go" })],
            config,
            USER
        );

        expect(project).toMatchObject({
            description: "Custom",
            descriptionFr: "Personnalisé",
            tech: ["Rust"],
            featured: true,
            image: "/custom.svg"
        });
    });

    it("hides repos marked hidden in the config", () => {
        const projects = buildProjects(
            [repo({ name: "secret" })],
            [{ name: "secret", hidden: true }],
            USER
        );

        expect(projects).toEqual([]);
    });

    it("puts featured projects first, then the most recently pushed", () => {
        const config: ProjectConfig[] = [{ name: "featured-old", featured: true }];
        const projects = buildProjects(
            [
                repo({ name: "recent", pushed_at: "2026-03-01T00:00:00Z" }),
                repo({ name: "older", pushed_at: "2026-01-01T00:00:00Z" }),
                repo({ name: "featured-old", pushed_at: "2025-01-01T00:00:00Z" })
            ],
            config,
            USER
        );

        expect(projects.map(project => project.title)).toEqual([
            "featured-old",
            "recent",
            "older"
        ]);
    });
});

describe("buildFallbackProjects", () => {
    it("uses only the config, skipping hidden entries", () => {
        const projects = buildFallbackProjects(
            [
                { name: "shown", description: "Visible" },
                { name: "gone", hidden: true }
            ],
            USER
        );

        expect(projects.map(project => project.title)).toEqual(["shown"]);
    });

    it("builds a GitHub link when the config has none", () => {
        const [project] = buildFallbackProjects([{ name: "shown" }], USER);

        expect(project.github).toBe("https://github.com/me/shown");
    });

    it("keeps an explicit GitHub link from the config", () => {
        const [project] = buildFallbackProjects(
            [{ name: "team-app", github: "https://github.com/team/team-app" }],
            USER
        );

        expect(project.github).toBe("https://github.com/team/team-app");
    });
});
