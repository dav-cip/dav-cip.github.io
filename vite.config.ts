/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { SITE } from './src/config/site.ts'
import { buildRobots, buildSitemap } from './src/config/seo.ts'

// Generates sitemap.xml, robots.txt and 404.html at build time and fills the
// site URL / base path into index.html, so none of them are maintained by hand.
function siteFiles(): Plugin {
  let base = '/'

  return {
    name: 'site-files',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml(html) {
      return html
        .replaceAll('__SITE_URL__', SITE.url)
        .replaceAll('__BASE__', base)
    },
    generateBundle() {
      // Date of this build, so lastmod always matches the latest deploy.
      const lastmod = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: buildSitemap(SITE.url, SITE.routes, lastmod),
      })

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: buildRobots(SITE.url),
      })

      // GitHub Pages SPA redirect: unknown paths land here and are forwarded
      // to index.html, which restores the real route.
      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Redirecting...</title>
    <script>
        const base = '${base}';
        const path = window.location.pathname.slice(base.length);
        const search = window.location.search;
        const hash = window.location.hash;

        const encodedPath = path.replace(/&/g, '~and~');
        const encodedSearch = search
            ? '&' + search.slice(1).replace(/&/g, '~and~')
            : '';

        window.location.replace(
            window.location.origin + base +
            '?/' + encodedPath + encodedSearch + hash
        );
    </script>
</head>
<body>
    Redirecting...
</body>
</html>
`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), siteFiles()],
  base: '/',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
