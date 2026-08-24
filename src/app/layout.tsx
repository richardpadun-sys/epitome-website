import type { Metadata, Viewport } from "next";
import { Bitter, IBM_Plex_Mono, Work_Sans } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { BrandDefs } from "@/components/ui/Logo";
import { contact, site, social } from "@/data/site";
import "./globals.css";

/**
 * Three faces, each with one job, per the identity system:
 * Bitter carries the wordmark and nothing else, Work Sans carries headlines,
 * interface and body, IBM Plex Mono carries figures and specifications.
 */
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
  weight: ["700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AI Integration Specialists for UK Small Businesses | The Epitome",
    template: "%s | The Epitome",
  },
  description: site.description,
  keywords: [
    "AI integration",
    "AI consultancy",
    "AI audit",
    "AI agents",
    "AI training",
    "business automation",
    "SME AI solutions",
    "UK business AI",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: "AI Integration Specialists for UK Small Businesses | The Epitome",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Specialists for UK Small Businesses | The Epitome",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#1b0b3a",
  width: "device-width",
  initialScale: 1,
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  email: contact.email,
  telephone: contact.phone,
  areaServed: { "@type": "Country", name: "United Kingdom" },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    postalCode: contact.address.postcode,
    addressCountry: "GB",
  },
  sameAs: social.map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${workSans.variable} ${bitter.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        {/* One copy of the brand gradient and summit mask per document; every
            mark instance references them rather than redeclaring ids. */}
        <BrandDefs />
        <Navigation />
        <main id="main" className="relative pt-64">
          {/* Sentinel for the header's scrolled state — see Navigation. */}
          <span
            id="epi-top-sentinel"
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 h-8 w-full"
          />
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          // Static, developer-authored schema — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
