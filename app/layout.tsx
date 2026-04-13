import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "M Street Music | Tonski studio Krapina | Snimanje, miks, master",
    template: "%s | M Street Music",
  },
  description:
    "Profesionalni tonski studio u Krapini. Snimanje glazbe, miksanje i mastering za Spotify i streaming platforme. SSL certificirani inženjer. Krapina, Zagorje.",
  keywords:
    "tonski studio Krapina, studio za snimanje Zagorje, snimanje glazbe, miks i master, profesionalno snimanje, glazbeni producent, recording studio Croatia, mixing mastering Croatia",
  authors: [{ name: "M Street Music - Kristijan Sinković" }],
  metadataBase: new URL("https://mstreetmusic.hr"),
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: "M Street Music",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${dmSans.variable} ${bebasNeue.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="o76la3gaghzuefmmsz6dwb0cp9ujjf" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EE4XETYY65"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EE4XETYY65');
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://mstreetmusic.hr/#website",
                  url: "https://mstreetmusic.hr",
                  name: "M Street Music",
                  description:
                    "Profesionalni tonski studio u Krapini — snimanje, miksanje i mastering.",
                  publisher: {
                    "@id": "https://mstreetmusic.hr/#organization",
                  },
                  inLanguage: ["hr", "en"],
                },
                {
                  "@type": "Organization",
                  "@id": "https://mstreetmusic.hr/#organization",
                  name: "M Street Music",
                  url: "https://mstreetmusic.hr",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://mstreetmusic.hr/#logo",
                    url: "https://mstreetmusic.hr/logo.png",
                    contentUrl: "https://mstreetmusic.hr/logo.png",
                    caption: "M Street Music Logo",
                  },
                  image: "https://mstreetmusic.hr/studio.jpg",
                  email: "info@mstreetmusic.hr",
                  telephone: "+385913050910",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Magistratska 21/1",
                    addressLocality: "Krapina",
                    postalCode: "49000",
                    addressRegion: "Krapinsko-zagorska županija",
                    addressCountry: "HR",
                  },
                  sameAs: [
                    "https://www.instagram.com/mstreetmusic/",
                    "https://www.facebook.com/mstreetmusic",
                    "https://www.youtube.com/@mstreetmusic",
                    "https://www.tiktok.com/@mstreetmusic",
                  ],
                  founder: {
                    "@type": "Person",
                    "@id": "https://mstreetmusic.hr/#founder",
                    name: "Kristijan Sinković",
                    jobTitle: "Audio Engineer & Producer",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
