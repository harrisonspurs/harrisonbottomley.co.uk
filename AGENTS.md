# Project rules

- Keep the static `public/sitemap.xml` synchronized with public routes in `src/App.tsx`, excluding the catch-all; this lets crawlers discover every public page without a generator.
- Omit sitemap `lastmod` values unless an authoritative page-specific content timestamp is available; build dates do not indicate page changes.