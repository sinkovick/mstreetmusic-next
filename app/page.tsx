import type { Metadata } from "next";
import {
  Navigation,
  HeroSection,
  ServicesSection,
  MentorshipBanner,
  RoastBanner,
  StudioSection,
  TestimonialsSlider,
  StatsSection,
  PricingSection,
  ContactSection,
  Footer,
  ScrollReveal,
} from "@/components/homepage";
import "@/styles/homepage.css";

export const metadata: Metadata = {
  title: "M Street Music | Tonski studio Krapina | Snimanje, miks, master",
  description:
    "Profesionalni tonski studio u Krapini. Snimanje glazbe, miksanje i mastering za Spotify i streaming platforme. SSL certificirani inženjer.",
  keywords:
    "tonski studio Krapina, studio za snimanje Zagorje, snimanje glazbe, miks i master, profesionalno snimanje, glazbeni producent, recording studio Croatia, mixing mastering Croatia, snimanje demo pjesme, master za streaming",
  robots: "index, follow",
  alternates: {
    canonical: "https://mstreetmusic.hr/",
    languages: {
      hr: "https://mstreetmusic.hr/",
      en: "https://mstreetmusic.hr/en",
    },
  },
  openGraph: {
    title: "M Street Music | Tonski studio Krapina | Snimanje, miks, master",
    description:
      "Profesionalni tonski studio u Krapini. Snimanje glazbe, miksanje i mastering za Spotify i streaming platforme. SSL certificirani inženjer.",
    url: "https://mstreetmusic.hr/",
    images: [{ url: "https://mstreetmusic.hr/studio.jpg" }],
    locale: "hr_HR",
    type: "website",
    siteName: "M Street Music",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Street Music | Tonski studio Krapina",
    description:
      "Profesionalni tonski studio u Krapini. Snimanje glazbe, miksanje i mastering za Spotify i streaming platforme.",
    images: ["https://mstreetmusic.hr/studio.jpg"],
  },
  other: {
    "geo.region": "HR-01",
    "geo.placename": "Krapina",
    "geo.position": "46.1606;15.8769",
    ICBM: "46.1606, 15.8769",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mstreetmusic.hr/#business",
  name: "M Street Music",
  alternateName: "M Street Music Studio Krapina",
  description:
    "Profesionalni tonski studio za snimanje glazbe, miksanje i mastering. SSL certificirani audio inženjer.",
  url: "https://mstreetmusic.hr",
  logo: "https://mstreetmusic.hr/logo.png",
  image: "https://mstreetmusic.hr/studio.jpg",
  telephone: "+385913050910",
  email: "info@mstreetmusic.hr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Magistratska 21/1",
    addressLocality: "Krapina",
    postalCode: "49000",
    addressRegion: "Krapinsko-zagorska županija",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.1606,
    longitude: 15.8769,
  },
  areaServed: [
    { "@type": "City", name: "Krapina" },
    { "@type": "AdministrativeArea", name: "Hrvatsko Zagorje" },
    { "@type": "City", name: "Varaždin" },
    { "@type": "City", name: "Zagreb" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  priceRange: "€€",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "PayPal"],
  currenciesAccepted: "EUR",
  founder: {
    "@type": "Person",
    name: "Kristijan Sinković",
    jobTitle: "Audio Engineer & Producer",
    description: "SSL certificirani tonski inženjer, Master of Music",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Studio usluge",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Snimanje glazbe",
          description:
            "Profesionalno snimanje vokala, instrumenata i bendova",
        },
        price: "35",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "35",
          priceCurrency: "EUR",
          unitText: "sat",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Miksanje",
          description:
            "Profesionalno miksanje s analog hardware obradama",
        },
        price: "200",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "200",
          priceCurrency: "EUR",
          unitText: "pjesma",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mastering",
          description:
            "Mastering optimiziran za Spotify, Apple Music i streaming platforme",
        },
        price: "50",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "50",
          priceCurrency: "EUR",
          unitText: "pjesma",
        },
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/mstreetmusic/",
    "https://www.facebook.com/mstreetmusic",
    "https://www.youtube.com/@mstreetmusic",
    "https://www.tiktok.com/@mstreetmusic",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "5",
    reviewCount: "5",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "David Temelkov" },
      reviewBody:
        "Rad s Kristijanom na mom albumu bio je nevjerojatno iskustvo. Razumio je moju viziju od prvog dana i oživio svaku pjesmu s pažnjom i preciznošću.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Šarmeri" },
      reviewBody:
        "Profesionalno, brzo, a kvaliteta zvuka je izvanredna. Naši singlovi zvuče točno onako kako smo zamislili — snažno, čisto i spremno za radio.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Danijel Kranjec" },
      reviewBody:
        "Kristijan je moju obradu pretvorio u nešto posebno. Njegove ideje za aranžman i pažnja na detalje napravile su svu razliku.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Iva i Ella Ranogajec" },
      reviewBody:
        "Atmosfera u studiju je kreativna i opuštena, ali rad je ozbiljno profesionalan. Naš singl ispao je prekrasan — čist, moderan i vjeran našem zvuku.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Grupa Motiv" },
      reviewBody:
        "Naš promotivni materijal sada zvuči nevjerojatno. Kristijan je savršeno uhvatio našu live energiju i dao nam audio koji istinski predstavlja ono što radimo.",
    },
  ],
};

export default function HomePage() {
  return (
    <div className="homepage">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Scroll Reveal animation handler */}
      <ScrollReveal />

      {/* Page Sections */}
      <Navigation locale="hr" />
      <HeroSection locale="hr" />
      <ServicesSection locale="hr" />
      <MentorshipBanner locale="hr" />
      <RoastBanner locale="hr" />
      <StudioSection locale="hr" />
      <TestimonialsSlider locale="hr" />
      <StatsSection locale="hr" />
      <PricingSection locale="hr" />
      <section style={{ padding: '32px 24px', background: '#f8fafc', textAlign: 'center' }}>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '15px', lineHeight: '1.7', color: '#475569' }}>
          Snimanje u M Street Music studiju košta od 35 EUR po satu. Miksanje započinje od 200 EUR po pjesmi, a mastering
          košta 50 EUR po pjesmi. Stem mastering je dostupan za 60 EUR po pjesmi. Sve cijene uključuju revizije i konzultacije.
        </p>
      </section>
      <section className="faq-section" id="faq">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Često postavljena pitanja</h2>
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { q: 'Koliko košta snimanje u studiju?', a: 'Cijena snimanja je 35 EUR po satu. Miksanje počinje od 200 EUR po pjesmi, a mastering košta 50 EUR po pjesmi. Stem mastering je 60 EUR po pjesmi. Konačna cijena ovisi o složenosti projekta.' },
              { q: 'Kako se pripremiti za snimanje?', a: 'Pripremite se tako da svoje pjesme uvježbate do razine na kojoj ih možete svirati bez zastajkivanja. Donesite nove žice za gitaru, štapiće za bubnjeve i sve tekstove. Preporučujemo da dođete odmorni i hidrirani.' },
              { q: 'Što je razlika između miksanja i masteringa?', a: 'Miksanje je proces balansiranja i obrade svih individualnih snimljenih traka (vokali, gitare, bubnjevi) u jednu koherentnu stereo pjesmu. Mastering je završna obrada gotovog miksa koja optimizira zvuk za streaming platforme i osigurava konzistentnu glasnoću.' },
              { q: 'Koliko traje snimanje jedne pjesme?', a: 'Snimanje jedne pjesme obično traje 3-6 sati, ovisno o broju instrumenata i složenosti aranžmana. Solo vokal s pratnjom može se snimiti za 2-3 sata, dok puni bend zahtijeva 4-8 sati.' },
              { q: 'Nudite li online mixing i mastering?', a: 'Da, nudimo online mixing i mastering. Možete nam poslati svoje snimke putem WeTransfer ili Google Drive linka, a mi ćemo vam dostaviti gotov mix ili master u roku od 3-5 radnih dana.' },
            ].map((item) => (
              <details key={item.q} style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '17px', padding: '8px 0', color: '#0F172A' }}>{item.q}</summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: '#475569', fontSize: '15px' }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Koliko košta snimanje u studiju?", acceptedAnswer: { "@type": "Answer", text: "Cijena snimanja je 35 EUR po satu. Miksanje počinje od 200 EUR po pjesmi, a mastering košta 50 EUR po pjesmi. Stem mastering je 60 EUR po pjesmi. Konačna cijena ovisi o složenosti projekta." } },
              { "@type": "Question", name: "Kako se pripremiti za snimanje?", acceptedAnswer: { "@type": "Answer", text: "Pripremite se tako da svoje pjesme uvježbate do razine na kojoj ih možete svirati bez zastajkivanja. Donesite nove žice za gitaru, štapiće za bubnjeve i sve tekstove. Preporučujemo da dođete odmorni i hidrirani." } },
              { "@type": "Question", name: "Što je razlika između miksanja i masteringa?", acceptedAnswer: { "@type": "Answer", text: "Miksanje je proces balansiranja i obrade svih individualnih snimljenih traka u jednu koherentnu stereo pjesmu. Mastering je završna obrada gotovog miksa koja optimizira zvuk za streaming platforme i osigurava konzistentnu glasnoću." } },
              { "@type": "Question", name: "Koliko traje snimanje jedne pjesme?", acceptedAnswer: { "@type": "Answer", text: "Snimanje jedne pjesme obično traje 3-6 sati, ovisno o broju instrumenata i složenosti aranžmana. Solo vokal s pratnjom može se snimiti za 2-3 sata, dok puni bend zahtijeva 4-8 sati." } },
              { "@type": "Question", name: "Nudite li online mixing i mastering?", acceptedAnswer: { "@type": "Answer", text: "Da, nudimo online mixing i mastering. Možete nam poslati svoje snimke putem WeTransfer ili Google Drive linka, a mi ćemo vam dostaviti gotov mix ili master u roku od 3-5 radnih dana." } },
            ],
          }) }}
        />
      </section>
      <ContactSection locale="hr" />
      <Footer locale="hr" />
    </div>
  );
}
