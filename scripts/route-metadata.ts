import type { Plugin } from "vite";
import { pageMetadata, renderPageMetadata } from "../src/lib/page-metadata";

export function routeMetadata(): Plugin {
  return {
    name: "portfolio-route-metadata",
    enforce: "post",
    transformIndexHtml(html, context) {
      const requestPath = context.originalUrl?.split("?")[0] || context.path;
      return renderPageMetadata(html, requestPath);
    },
    generateBundle(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset") return;
      const html = String(index.source);
      for (const route of Object.keys(pageMetadata)) {
        if (route === "/") continue;
        this.emitFile({
          type: "asset",
          fileName: `${route.slice(1)}/index.html`,
          source: renderPageMetadata(html, route),
        });
      }
    },
  };
}