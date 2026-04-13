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
  title: "Recording Studio Krapina | Recording, Mix, Master",
  description:
    "Professional recording studio in Krapina, Croatia. Music recording, mixing and mastering for Spotify and streaming platforms. SSL Certified Engineer.",
  keywords:
    "recording studio Croatia, recording studio Krapina, music recording, mixing and mastering, professional recording, music producer, recording studio Zagreb, mixing mastering Croatia",
  robots: "index, follow",
  alternates: {
    canonical: "https://mstreetmusic.hr/en",
    languages: {
      hr: "https://mstreetmusic.hr/",
      en: "https://mstreetmusic.hr/en",
    },
  },
  openGraph: {
    title: "M Street Music | Recording Studio Krapina | Recording, Mix, Master",
    description:
      "Professional recording studio in Krapina, Croatia. Music recording, mixing and mastering for Spotify and streaming platforms. SSL Certified Engineer.",
    url: "https://mstreetmusic.hr/en",
    images: [{ url: "https://mstreetmusic.hr/studio.jpg" }],
    locale: "en_US",
    type: "website",
    siteName: "M Street Music",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Street Music | Recording Studio Krapina",
    description:
      "Professional recording studio in Krapina, Croatia. Recording, mixing & mastering for streaming platforms.",
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
    "Professional recording studio for music recording, mixing and mastering. SSL Certified audio engineer.",
  url: "https://mstreetmusic.hr/en",
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
    description: "SSL Certified audio engineer, Master of Music",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Studio Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Music Recording",
          description:
            "Professional recording of vocals, instruments and bands",
        },
        price: "35",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "35",
          priceCurrency: "EUR",
          unitText: "hour",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mixing",
          description:
            "Professional mixing with analog hardware processing",
        },
        price: "200",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "200",
          priceCurrency: "EUR",
          unitText: "song",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mastering",
          description:
            "Mastering optimized for Spotify, Apple Music and streaming platforms",
        },
        price: "50",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "50",
          priceCurrency: "EUR",
          unitText: "song",
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
        "Working with Kristijan on my album was an incredible experience. He understood my vision from day one and brought every song to life with care and precision.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Šarmeri" },
      reviewBody:
        "Professional, fast, and the sound quality is extraordinary. Our singles sound exactly as we envisioned — powerful, clean, and radio-ready.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Danijel Kranjec" },
      reviewBody:
        "Kristijan turned my cover into something special. His arrangement ideas and attention to detail made all the difference.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Iva & Ella Ranogajec" },
      reviewBody:
        "The studio atmosphere is creative and relaxed, but the work is seriously professional. Our single turned out beautiful — clean, modern, and true to our sound.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Grupa Motiv" },
      reviewBody:
        "Our promo material now sounds incredible. Kristijan perfectly captured our live energy and gave us audio that truly represents what we do.",
    },
  ],
};

export default function HomePageEN() {
  return (
    <div className="homepage">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollReveal />

      <Navigation locale="en" />
      <HeroSection locale="en" />
      <ServicesSection locale="en" />
      <MentorshipBanner locale="en" />
      <RoastBanner locale="en" />
      <StudioSection locale="en" />
      <TestimonialsSlider locale="en" />
      <StatsSection locale="en" />
      <PricingSection locale="en" />
      <section style={{ padding: '32px 24px', background: '#f8fafc', textAlign: 'center' }}>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '15px', lineHeight: '1.7', color: '#475569' }}>
          Recording at M Street Music studio starts at 35 EUR per hour. Mixing starts from 200 EUR per song, and mastering
          costs 50 EUR per song. Stem mastering is available for 60 EUR per song. All prices include revisions and consultations.
        </p>
      </section>
      <section className="faq-section" id="faq">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { q: 'How much does recording cost?', a: 'Recording costs 35 EUR per hour. Mixing starts from 200 EUR per song, and mastering costs 50 EUR per song. Stem mastering is 60 EUR per song. Final pricing depends on project complexity.' },
              { q: 'How should I prepare for a recording session?', a: 'Practice your songs until you can play them without stopping. Bring fresh guitar strings, drumsticks, and all lyrics. We recommend arriving well-rested and hydrated.' },
              { q: 'What is the difference between mixing and mastering?', a: 'Mixing is the process of balancing and processing all individual recorded tracks (vocals, guitars, drums) into one cohesive stereo song. Mastering is the final processing of the finished mix that optimizes the sound for streaming platforms and ensures consistent loudness.' },
              { q: 'How long does it take to record a song?', a: 'Recording a single song typically takes 3-6 hours, depending on the number of instruments and arrangement complexity. A solo vocal with backing can be recorded in 2-3 hours, while a full band requires 4-8 hours.' },
              { q: 'Do you offer online mixing and mastering?', a: 'Yes, we offer online mixing and mastering. You can send us your recordings via WeTransfer or Google Drive, and we will deliver the finished mix or master within 3-5 business days.' },
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
              { "@type": "Question", name: "How much does recording cost?", acceptedAnswer: { "@type": "Answer", text: "Recording costs 35 EUR per hour. Mixing starts from 200 EUR per song, and mastering costs 50 EUR per song. Stem mastering is 60 EUR per song. Final pricing depends on project complexity." } },
              { "@type": "Question", name: "How should I prepare for a recording session?", acceptedAnswer: { "@type": "Answer", text: "Practice your songs until you can play them without stopping. Bring fresh guitar strings, drumsticks, and all lyrics. We recommend arriving well-rested and hydrated." } },
              { "@type": "Question", name: "What is the difference between mixing and mastering?", acceptedAnswer: { "@type": "Answer", text: "Mixing is the process of balancing and processing all individual recorded tracks into one cohesive stereo song. Mastering is the final processing of the finished mix that optimizes the sound for streaming platforms and ensures consistent loudness." } },
              { "@type": "Question", name: "How long does it take to record a song?", acceptedAnswer: { "@type": "Answer", text: "Recording a single song typically takes 3-6 hours, depending on the number of instruments and arrangement complexity. A solo vocal with backing can be recorded in 2-3 hours, while a full band requires 4-8 hours." } },
              { "@type": "Question", name: "Do you offer online mixing and mastering?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer online mixing and mastering. You can send us your recordings via WeTransfer or Google Drive, and we will deliver the finished mix or master within 3-5 business days." } },
            ],
          }) }}
        />
      </section>
      <ContactSection locale="en" />
      <Footer locale="en" />
    </div>
  );
}
