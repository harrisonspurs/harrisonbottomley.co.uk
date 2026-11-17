# Project rules

- Keep the static `public/sitemap.xml` synchronized with public routes in `src/App.tsx`, excluding the catch-all; this lets crawlers discover every public page without a generator.
- Omit sitemap `lastmod` values unless an authoritative page-specific content timestamp is available; build dates do not indicate page changes.
- Load Google Fonts from the document head with `display=swap`, not CSS imports, and keep the homepage headline visible on first render; this avoids delayed font discovery and animation-gated headline paint.
- Define public-page titles, descriptions and canonicals in `src/lib/page-metadata.ts`; the Vite route-metadata plugin emits static route HTML for crawlers and PageMetadata updates them during client navigation.