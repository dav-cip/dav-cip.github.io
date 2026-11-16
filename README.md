# Davide Cipolla | Developer Portfolio

My personal portfolio website: a place to introduce myself, show my technical skills, and share the projects I'm building.

**Live site:** [dav-cip.github.io/my-website](https://dav-cip.github.io/my-website/)

## About

I'm a Computer Science student at CEGEP who enjoys programming, building applications, and exploring new technologies. This site is built as a responsive single-page app and doubles as a project of its own.

## Features

- **Pages:** Home, About, Projects, and Contact, plus a custom 404 page
- **Live project showcase:** the Projects page fetches my public repositories from the GitHub API and pairs them with curated descriptions, images, and tech tags
- **Tech filtering:** filter projects by technology, with featured projects listed first
- **Responsive design:** mobile-friendly layout with a collapsible navigation menu
- **Accessible markup:** ARIA labels, semantic landmarks, and status/alert roles for loading and error states
- **Resilient by design:** lazy-loaded routes, an error boundary, and graceful handling of GitHub API rate limits
- **SEO and sharing:** meta description, Open Graph, and Twitter card tags
- **Automated deployment:** every push to `main` is built and published to GitHub Pages

## Tech Stack

| Area       | Tools                                  |
| ---------- | -------------------------------------- |
| Framework  | React 19, React Router 7               |
| Language   | TypeScript                             |
| Build tool | Vite                                   |
| Styling    | Plain CSS (one stylesheet per component) |
| Linting    | ESLint with typescript-eslint          |
| Hosting    | GitHub Pages via GitHub Actions        |

## Getting Started

**Prerequisites:** Node.js 22 or newer (the deploy workflow uses Node 22) and npm.

```bash
# Clone the repository
git clone https://github.com/dav-cip/my-website.git
cd my-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at the local URL Vite prints. Because the site is served from `/my-website/`, open that base path (for example `http://localhost:5173/my-website/`).

### Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server with HMR    |
| `npm run build`   | Type-check and create a production build |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |

## Project Structure

```
my-website/
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/
│   ├── 404.html                   # SPA redirect for GitHub Pages
│   └── images/                    # Project images and logo
├── src/
│   ├── components/                # Header, error boundary, fallback
│   ├── pages/
│   │   ├── landing/               # Home page
│   │   ├── about/                 # Bio and skills
│   │   ├── projects/              # GitHub-powered project showcase
│   │   │   ├── components/        # ProjectCard, ProjectFilters
│   │   │   ├── config/projects.ts # Curated project details
│   │   │   ├── hooks/             # useGithubProjects
│   │   │   └── services/github.ts # GitHub API calls
│   │   ├── contact/               # Contact links
│   │   └── not-found/             # 404 page
│   ├── route/                     # Router and layout
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Global styles
├── index.html
└── vite.config.ts
```

## Adding a Project

The Projects page only shows repositories that have an entry in `src/pages/projects/config/projects.ts`. To add one:

1. Add an image to `public/images/`.
2. Add an entry to the config, where `name` must match the GitHub repository name exactly:

```ts
{
    name: "repo-name",
    description: "A short description of the project.",
    featured: false,
    image: projectImage("repo-name.svg"),
    tech: ["TypeScript", "React"],
    demo: "https://example.com" // optional
}
```

3. Push to `main`. The repository details come from GitHub automatically, and the site redeploys.

> **Note:** archived and private repositories are excluded. The GitHub API is unauthenticated, so it is subject to rate limits; if it is exceeded, the Projects page shows an error message instead.

## Deployment

The site deploys automatically through GitHub Actions (`.github/workflows/deploy.yml`):

1. A push to `main` (or a manual run) triggers the workflow.
2. The workflow installs dependencies with `npm ci` and runs `npm run build`.
3. The `dist/` folder is published to GitHub Pages.

To deploy from your own fork, enable **Settings → Pages → Source: GitHub Actions** and update the `base` value in `vite.config.ts` to match your repository name.

## Contact

- **Email:** [cipolla.dav@gmail.com](mailto:cipolla.dav@gmail.com)
- **GitHub:** [github.com/dav-cip](https://github.com/dav-cip)
- **LinkedIn:** [linkedin.com/in/cipolladavide](https://www.linkedin.com/in/cipolladavide)