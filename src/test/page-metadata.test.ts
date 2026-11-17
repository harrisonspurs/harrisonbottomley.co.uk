import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { pageMetadata, renderPageMetadata, siteOrigin } from "../lib/page-metadata";
import { routeMetadata } from "../../scripts/route-metadata";

describe("page search metadata", () => {
  const html = readFileSync("index.html", "utf8");
  for (const [path, metadata] of Object.entries(pageMetadata)) {
    it(`${path} has a unique title under 60 characters`, () => {
      expect(metadata.title.length).toBeLessThan(60);
      expect(Object.values(pageMetadata).filter((page) => page.title === metadata.title)).toHaveLength(1);
    });
    it(`${path} has a unique description between 50 and 160 characters`, () => {
      expect(metadata.description.length).toBeGreaterThanOrEqual(50);
      expect(metadata.description.length).toBeLessThanOrEqual(160);
      expect(Object.values(pageMetadata).filter((page) => page.description === metadata.description)).toHaveLength(1);
    });
    it(`${path} renders its own canonical and metadata in static HTML`, () => {
      const document = new DOMParser().parseFromString(renderPageMetadata(html, path), "text/html");
      expect(document.title).toBe(metadata.title);
      expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(metadata.description);
      expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(`${siteOrigin}${path}`);
    });
  }
  it("emits static HTML for both nested pages using the built entry", () => {
    const emitted: { fileName: string; source: string }[] = [];
    const hook = routeMetadata().generateBundle;
    if (typeof hook !== "function") throw new Error("Missing route HTML generation hook");
    hook.call({ emitFile: (asset: { fileName: string; source: string }) => emitted.push(asset) } as never, {} as never, {
      "index.html": { type: "asset", source: html },
    } as never, false);
    expect(emitted.map((asset) => asset.fileName)).toEqual(["about/index.html", "projects/media-city-light-waves/index.html"]);
    for (const asset of emitted) {
      const path = `/${asset.fileName.replace(/\/index.html$/, "")}`;
      expect(asset.source).toBe(renderPageMetadata(html, path));
    }
  });
});