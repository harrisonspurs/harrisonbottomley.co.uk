import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metadataForPath } from "@/lib/page-metadata";

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const metadata = metadataForPath(pathname);
    if (!metadata) return;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", metadata.canonical);
  }, [pathname]);
  return null;
}