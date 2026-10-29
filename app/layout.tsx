import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import "./globals.css";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { site } from "@/data/site";

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} — יהלומים טבעיים ויהלומי מעבדה`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml," +
          encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#F6E9E4"/><path d="M12 26 32 8l20 18-20 30L12 26Z" fill="none" stroke="#1D2940" stroke-width="2.4"/><path d="M12 26h40M32 8l-8 18 8 30 8-30-8-18" fill="none" stroke="#B8925A" stroke-width="1.4"/></svg>`,
          ),
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhl.variable} ${assistant.variable} h-full`}
    >
      <head>
        {/* Interim stock photography is served from Unsplash's CDN */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Reveal-on-scroll starts at opacity 0 and is lifted by JS. Without
            scripting there is nothing to lift it, so force it visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <SiteChrome>
          <AnnouncementBar />
          <Header />
        </SiteChrome>
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteChrome>
          <Footer />
          <WhatsAppFloat />
        </SiteChrome>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
