import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import { getAllUsluge, getUslugeByCategory, getCategoryLabel, Usluga } from '@/data/usluge';
import '@/styles/homepage.css';
import '@/styles/services.css';

export const metadata: Metadata = {
  title: 'Usluge tonskog studija',
  description:
    'Snimanje, mixing i mastering u profesionalnom tonskom studiju u Krapini. Pogledajte sve usluge M Street Music studija.',
  alternates: {
    canonical: 'https://mstreetmusic.hr/usluge',
  },
  openGraph: {
    title: 'Usluge tonskog studija | M Street Music',
    description:
      'Snimanje, mixing i mastering u profesionalnom tonskom studiju u Krapini. Pogledajte sve usluge M Street Music studija.',
    url: 'https://mstreetmusic.hr/usluge',
    type: 'website',
    siteName: 'M Street Music',
    locale: 'hr_HR',
  },
};

const CATEGORY_ORDER: Usluga['category'][] = ['snimanje', 'mixing', 'mastering', 'ostalo'];

export default function UslugePage() {
  const allUsluge = getAllUsluge();

  // Group services by category in defined order
  const groupedCategories = CATEGORY_ORDER
    .map((cat) => ({
      key: cat,
      label: getCategoryLabel(cat),
      services: getUslugeByCategory(cat),
    }))
    .filter((group) => group.services.length > 0);

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Početna',
        item: 'https://mstreetmusic.hr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Usluge',
        item: 'https://mstreetmusic.hr/usluge',
      },
    ],
  };

  // JSON-LD: ItemList with all services
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Usluge tonskog studija M Street Music',
    itemListElement: allUsluge.map((usluga, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://mstreetmusic.hr/usluge/${usluga.slug}`,
      name: usluga.title,
    })),
  };

  return (
    <div className="usluge-listing-page">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <ScrollReveal />
      <Navigation locale="hr" />

      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="usluge-listing-hero">
          <h1>Usluge studija</h1>
          <p>
            Sve što vam treba za profesionalan zvuk, od snimanja u studiju do
            finalnog mastering-a. Radimo s bendovima, solo izvođačima i
            producentima - prilagođavamo se vašem projektu i budžetu.
          </p>
        </section>

        {/* Services grouped by category */}
        <div className="usluge-listing-content">
          {groupedCategories.map((group) => (
            <section key={group.key} className="usluge-listing-category">
              <h2 className="usluge-listing-category-title">{group.label}</h2>
              <div className="usluge-listing-grid">
                {group.services.map((usluga) => (
                  <Link
                    key={usluga.slug}
                    href={`/usluge/${usluga.slug}`}
                    className="usluge-listing-card"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <article>
                      <h3 className="usluge-listing-card-title">{usluga.title}</h3>
                      <p className="usluge-listing-card-description">
                        {usluga.metaDescription}
                      </p>
                      <span className="usluge-listing-card-link">
                        Saznaj više &rsaquo;
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="usluge-listing-cta">
          <h2>Ne znate što vam treba?</h2>
          <p>
            Javite se s opisom projekta i pomoći ćemo vam odabrati pravu uslugu.
          </p>
          <Link href="/#contact" className="usluge-listing-cta-btn">
            Kontaktiraj nas
          </Link>
        </div>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
