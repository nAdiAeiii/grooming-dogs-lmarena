import type { NextConfig } from "next";

/**
 * Legacy URL handling.
 *
 * Every URL in the legacy WordPress sitemap is mapped to the canonical page that
 * now owns its intent. Template-only pages (duplicate home, service catalogue,
 * team, archives, the 404 demo) point at the nearest replacement rather than
 * being dropped, so nothing that ever earned a link returns a bare 404.
 */
const legacyRedirects = [
  { source: "/home-b", destination: "/" },
  { source: "/home-b/", destination: "/" },
  { source: "/blog", destination: "/" },
  { source: "/blog/", destination: "/" },
  { source: "/blog1", destination: "/" },
  { source: "/blog1/", destination: "/" },
  { source: "/services", destination: "/choosing-a-dog-groomer/" },
  { source: "/services/", destination: "/choosing-a-dog-groomer/" },
  {
    source: "/services-detail",
    destination: "/choosing-a-dog-groomer/",
  },
  { source: "/services-detail/", destination: "/choosing-a-dog-groomer/" },
  { source: "/pricing", destination: "/dog-grooming-cost/" },
  { source: "/pricing/", destination: "/dog-grooming-cost/" },
  { source: "/team", destination: "/about/" },
  { source: "/team/", destination: "/about/" },
  { source: "/faq", destination: "/dog-grooming-problems/" },
  { source: "/faq/", destination: "/dog-grooming-problems/" },
  { source: "/404-2", destination: "/" },
  { source: "/404-2/", destination: "/" },
  { source: "/about-us", destination: "/about/" },
  { source: "/about-us/", destination: "/about/" },
  {
    source:
      "/top-dog-grooming-tips-for-a-happy-healthy-pup",
    destination: "/how-to-groom-your-dog-at-home/",
  },
  {
    source: "/top-dog-grooming-tips-for-a-happy-healthy-pup/",
    destination: "/how-to-groom-your-dog-at-home/",
  },
  {
    source:
      "/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great",
    destination: "/how-to-groom-your-dog-at-home/",
  },
  {
    source:
      "/dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great/",
    destination: "/how-to-groom-your-dog-at-home/",
  },
];

const nextConfig: NextConfig = {
  /**
   * Canonical URLs across the site use a trailing slash (as the legacy
   * WordPress site did), so the server must serve that form rather than
   * redirecting internal links to a second, near-duplicate URL.
   */
  trailingSlash: true,
  async redirects() {
    return legacyRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
