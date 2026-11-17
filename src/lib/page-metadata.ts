export const siteOrigin = "https://harrisonbottomley.lovable.app";

export const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Harrison Bottomley — Portfolio",
    description: "Explore Harrison Bottomley's portfolio of websites, XR experiences, creative coding, AI projects and university work at Salford.",
  },
  "/about": {
    title: "About Harrison Bottomley — Portfolio",
    description: "Meet Harrison Bottomley, a Creative Computing student at the University of Salford. Explore his interests, tools and contact details.",
  },
  "/projects/media-city-light-waves": {
    title: "Orbit Fall at Light Waves — Harrison Bottomley",
    description: "Explore Orbit Fall, Harrison Bottomley's Unreal Engine space survival game exhibited at MediaCityUK's Light Waves festival, with event photos.",
  },
};

export function metadataForPath(pathname: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const metadata = pageMetadata[path];
  return metadata ? { ...metadata, canonical: `${siteOrigin}${path}` } : undefined;
}

export function renderPageMetadata(html: string, pathname: string) {
  const metadata = metadataForPath(pathname);
  if (!metadata) return html;
  const escape = (text: string) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(metadata.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escape(metadata.description)}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${metadata.canonical}$2`);
}