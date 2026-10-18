import { renderPackageHtml, renderPackageMarkdown } from "@/lib/package-export";

/**
 * Exports the project package as a single self-contained artifact.
 *
 *   ?format=html&mode=view      → standalone HTML document, opens in a new tab
 *   ?format=html&mode=download  → same file, forced download
 *   ?format=md&mode=download    → Markdown download
 *
 * `mode=view` sends no Content-Disposition so the browser renders it, and the
 * document carries `noindex` so it never competes with the canonical pages.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const format = url.searchParams.get("format") === "md" ? "md" : "html";
  const mode = url.searchParams.get("mode") === "download" ? "download" : "view";

  const body = format === "md" ? renderPackageMarkdown() : renderPackageHtml();
  const filename = `grooming-dogs-project-package.${format === "md" ? "md" : "html"}`;

  const headers = new Headers({
    "Content-Type":
      format === "md" ? "text/markdown; charset=utf-8" : "text/html; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "public, max-age=3600",
  });

  if (mode === "download") {
    headers.set(
      "Content-Disposition",
      `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
    );
  }

  return new Response(body, { status: 200, headers });
}
