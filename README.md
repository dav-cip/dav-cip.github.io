# Davide Cipolla | Developer Portfolio

My personal portfolio website: a place to introduce myself, show my technical skills, and share the projects I'm building.

**Live site:** [dav-cip.github.io](https://dav-cip.github.io/)

## About

I'm a Computer Science student at CEGEP who enjoys programming, building applications, and exploring new technologies. This site is built as a responsive single-page app and doubles as a project of its own.

## Features

- **Pages:** Home, About, Projects, and Contact, plus a custom 404 page
- **Live project showcase:** new public repositories appear on the Projects page automatically through the GitHub API, with optional curated descriptions, images, and tech tags
- **Tech filtering:** filter projects by technology, with featured projects listed first
- **Responsive design:** mobile-friendly layout with a collapsible navigation menu
- **Accessible markup:** ARIA labels, semantic landmarks, and status/alert roles for loading and error states
- **Resilient by design:** lazy-loaded routes, an error boundary, and a fallback to the curated project list when the GitHub API fails or is rate limited
- **Per-page metadata:** each route sets its own tab title, description, Open Graph/Twitter tags, and canonical URL through the `usePageTitle` hook
- **SEO and sharing:** meta description, Open Graph and Twitter card tags, a social preview image, `robots.txt`, and a sitemap, all generated at build time from one config file (the sitemap's `lastmod` is the build date)
- **Automated deployment:** every push to `main` is linted, built, and published to GitHub Pages

## Tech Stack

| Area       | Tools                                    |
| ---------- | ---------------------------------------- |
| Framework  | React 19, React Router 7                 |
| Language   | TypeScript                               |
| Build tool | Vite                                     |
| Styling    | Plain CSS (one stylesheet per component) |
| Linting    | ESLint with typescript-eslint and React hooks rules |
| Hosting    | GitHub Pages via GitHub Actions          |

## Getting Started

**Prerequisites:** Node.js 22 or newer (the deploy workflow uses Node 22) and npm.

```bash
# Clone the repository
git clone https://github.com/dav-cip/dav-cip.github.io.git
cd dav-cip.github.io

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at the local URL Vite prints, usually `http://localhost:5173/`.

### Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server with HMR    |
| `npm run build`   | Type-check and create a production build |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |

## Project Structure

```
dav-cip.github.io/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/
│   └── images/                    # Project images and social preview
├── src/
│   ├── components/                # Header, error boundary, fallback
│   ├── config/site.ts             # Site name, URL, GitHub user, routes
│   ├── hooks/                     # usePageTitle (title + SEO meta)
│   ├── pages/
│   │   ├── home/                  # Home page
│   │   ├── about/                 # Bio and skills
│   │   ├── projects/              # GitHub-powered project showcase
│   │   │   ├── components/        # ProjectCard, ProjectFilters
│   │   │   ├── config/projects.ts # Optional per-project overrides
│   │   │   ├── hooks/             # useGithubProjects
│   │   │   └── services/github.ts # GitHub API calls
│   │   ├── contact/               # Contact links
│   │   └── not-found/             # 404 page
│   ├── route/                     # Router, lazy pages, and layout
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Global styles
├── eslint.config.js
├── LICENSE                        # MIT
├── index.html
└── vite.config.ts                 # Also generates sitemap, robots.txt, 404.html
```

## Projects

Projects are discovered automatically. Any public, non-fork repository owned by the GitHub user in `src/config/site.ts` appears on the Projects page with:

- **Description:** the repository's GitHub description
- **Tech tags:** the repository's main language plus its GitHub topics
- **Demo link:** the repository's homepage URL, if set
- **Image:** a default placeholder (`public/images/default-project.svg`)
- **Order:** featured projects first, then most recently pushed

So the normal workflow is: create a repo, give it a description and topics on GitHub, and it shows up on the next page load. No redeploy is needed.

### Customizing a project

To override any of the above, add an entry to `src/pages/projects/config/projects.ts`. Only `name` is required, and it must match the GitHub repository name exactly:

```ts
{
    name: "repo-name",
    description: "A short description of the project.",
    featured: true,
    image: projectImage("repo-name.svg"), // file in public/images/
    tech: ["TypeScript", "React"],
    demo: "https://example.com",
    github: "https://github.com/owner/repo-name" // fallback link if the API is down
}
```

Use the config for:

- **Custom details:** your own description, image, tech tags, or the Featured badge.
- **Repos that aren't automatic:** forks, and repositories owned by someone else that you've committed to (like `graph-your-x`). These only show up if they have a config entry.
- **Hiding a repo:** add `{ name: "repo-name", hidden: true }`.

### How projects are loaded

`services/github.ts` makes two unauthenticated GitHub API requests: repositories owned by the GitHub user, and repositories they've authored commits in (via commit search). The results are merged, de-duplicated, and archived and private repositories are removed. `useGithubProjects` then builds the project list as described above.

> **Note:** if a configured repository is renamed, update its `name` in the config too. The API is unauthenticated, so it is subject to rate limits. If both requests fail, the page falls back to showing only the projects in the config; an error message appears only if the config is empty.

## Deployment

The site deploys automatically through GitHub Actions (`.github/workflows/deploy.yml`):

1. A push to `main` (or a manual run) triggers the workflow.
2. The workflow installs dependencies with `npm ci`, runs `npm run lint`, then `npm run build`.
3. The `dist/` folder is published to GitHub Pages.

A lint error fails the build, so run `npm run lint` locally before pushing.

The site is served from the root of the user domain, so the repository is named `dav-cip.github.io` and the Vite `base` in `vite.config.ts` is `'/'`.

### Generated files

`sitemap.xml`, `robots.txt`, and the GitHub Pages `404.html` redirect are not stored in the repository. A small plugin in `vite.config.ts` creates them on every build from `src/config/site.ts` and the Vite `base`, and it fills the site URL into `index.html`. The sitemap's `lastmod` is the date of the build. To add a page, add its route to `routes` in `src/config/site.ts`.

### Deploying your own copy

1. Name the repository `<your-username>.github.io`.
2. Enable **Settings → Pages → Source: GitHub Actions**.
3. Edit `src/config/site.ts`: set your name, site URL, and GitHub username. Everything else (page metadata, GitHub API calls, sitemap, robots.txt, 404 redirect, Open Graph URLs) follows from it.
4. Keep `base: '/'` in `vite.config.ts`.

If you instead host it under a project path (for example `<username>.github.io/my-site/`), set `base` to `'/my-site/'` in `vite.config.ts` and make the `url` in `src/config/site.ts` include the same path.

## License

Released under the [MIT License](LICENSE).

## Contact

- **Email:** [cipolla.dav@gmail.com](mailto:cipolla.dav@gmail.com)
- **GitHub:** [github.com/dav-cip](https://github.com/dav-cip)
- **LinkedIn:** [linkedin.com/in/cipolladavide](https://www.linkedin.com/in/cipolladavide)