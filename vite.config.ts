import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { SITE } from './src/config/site.ts'

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
      const root = SITE.url.replace(/\/+$/, '')

      const urls = SITE.routes
        .map((route) => {
          const loc = route ? `${root}/${route}` : `${root}/`
          return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
        })
        .join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${root}/sitemap.xml\n`,
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
})
