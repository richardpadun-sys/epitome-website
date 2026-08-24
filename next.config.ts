import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,

  /**
   * URL migration map from the previous live site (theepitome.co.uk), built
   * from a full crawl of its own sitemap.xml plus its in-page links — see
   * the production launch report for the crawl results. Every entry below
   * is a real, previously-indexed URL. Rules:
   *
   * — Pages with a direct equivalent on the new site redirect to it.
   * — Pages consolidated into a broader page (e.g. the 12 individual
   *   /training/* course pages) redirect to that page, not to the homepage.
   * — Pages that were ALREADY broken on the live site itself (confirmed by
   *   direct request: HTTP 200 but a client-rendered "Page not found") are
   *   redirected to the nearest live equivalent anyway, so any residual
   *   search-index entry resolves to real content instead of continuing to
   *   serve a soft-404. Marked below with "dead on old site".
   */
  async redirects() {
    return [
      // --- Direct equivalents, path changed -------------------------------
      { source: "/terms", destination: "/terms-and-conditions-of-sale", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/cookies", destination: "/cookie-policy", permanent: true },
      { source: "/custom-applications", destination: "/services/custom-applications", permanent: true },
      { source: "/ai-workshop", destination: "/ai-training", permanent: true },

      // --- Individual training course pages -> consolidated /ai-training -
      { source: "/training/:slug*", destination: "/ai-training", permanent: true },

      // --- Outsourced Business Solutions: dead subpages -> live overview --
      // (dead on old site: all 9 returned a soft-404 under both URL patterns
      // the old site used; the overview page itself is real and has been
      // rebuilt at the same URL, and is NOT matched by either rule below)
      { source: "/outsourced/:slug+", destination: "/outsourced-business-solutions", permanent: true },
      { source: "/outsourced-business-solutions/:slug+", destination: "/outsourced-business-solutions", permanent: true },

      // --- Old orphaned nav entries, dead on old site ---------------------
      { source: "/sales", destination: "/services", permanent: true },
      { source: "/business-development", destination: "/services", permanent: true },
      { source: "/customer-service", destination: "/services", permanent: true },
      { source: "/operations", destination: "/services", permanent: true },
    ];
  },

  /**
   * Security headers.
   *
   * CSP: this deliberately follows Next.js's own documented "Without
   * Nonces" pattern (node_modules/next/dist/docs/01-app/02-guides/
   * content-security-policy.md) rather than a nonce-based policy. A nonce
   * was tried first and rejected after actually testing it — Next's own
   * docs confirm, and this was reproduced locally, that nonce-based CSP
   * forces every page to dynamic (server) rendering: static generation,
   * ISR and CDN caching all switch off site-wide, for all 27 pages, not
   * just ones that need it. That is a real cost for a site with no auth,
   * no user sessions, and no server-rendered user content — the one thing
   * a strict script-src nonce mainly buys you. `'unsafe-inline'` on
   * script-src is the accepted tradeoff for that reason; every other
   * directive stays as restrictive as the site's actual resource loading
   * allows (self-hosted fonts/video, no third-party scripts, no embeds).
   * If auth, user-generated content, or a third-party script is added
   * later, revisit this — that changes the calculus.
   *
   * `'unsafe-inline'` on style-src is required regardless of the nonce
   * decision, because Next.js inlines critical CSS.
   *
   * HSTS is set with a conservative 6-month max-age and no `preload` — per
   * Phase 11, preload is a one-way door (removal takes months to propagate
   * through browsers) and should only be added once HTTPS is confirmed
   * working on every hostname this domain answers to, including www and any
   * subdomains. See the deployment report for the exact verification step
   * before turning preload on.
   */
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "media-src 'self'",
      "connect-src 'self'",
      "form-action 'self' mailto:",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: csp },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=15552000", // 180 days, no includeSubDomains/preload yet — see note above
          },
        ],
      },
    ];
  },
};

export default nextConfig;
