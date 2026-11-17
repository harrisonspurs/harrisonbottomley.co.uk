import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("public sitemap", () => {
  it("lists every public route and excludes the catch-all", () => {
    const source = readFileSync("src/App.tsx", "utf8");
    const routes = [...source.matchAll(/<Route\s+path="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((path) => path !== "*");
    const xml = new DOMParser().parseFromString(
      readFileSync("public/sitemap.xml", "utf8"),
      "application/xml",
    );
    expect(xml.querySelector("parsererror")).toBeNull();
    expect(xml.documentElement.namespaceURI).toBe(
      "http://www.sitemaps.org/schemas/sitemap/0.9",
    );
    expect([...xml.querySelectorAll("loc")].map((loc) => loc.textContent)).toEqual(
      routes.map((path) => `https://harrisonbottomley.lovable.app${path}`),
    );
  });

  it("references the sitemap from robots.txt", () => {
    expect(readFileSync("public/robots.txt", "utf8")).toMatch(
      /^Sitemap: https:\/\/harrisonbottomley\.lovable\.app\/sitemap\.xml$/m,
    );
  });
});