import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import { getAllPojmovi } from '@/data/pojmovnik';
import PojmovnikGrid from '@/components/pojmovnik/PojmovnikGrid';
import '@/styles/homepage.css';
import '@/styles/pojmovnik.css';

export const metadata: Metadata = {
  title: 'Pojmovnik audio produkcije',
  description:
    'Audio pojmovnik na hrvatskom jeziku. Objašnjenja pojmova iz snimanja, mixing-a, mastering-a i studijske opreme, s primjerima iz prakse M Street Music studija.',
  alternates: {
    canonical: 'https://mstreetmusic.hr/pojmovnik',
  },
  openGraph: {
    title: 'Pojmovnik audio produkcije | M Street Music',
    description:
      'Audio pojmovnik na hrvatskom jeziku. Objašnjenja pojmova iz snimanja, mixing-a, mastering-a i studijske opreme.',
    url: 'https://mstreetmusic.hr/pojmovnik',
    type: 'website',
    siteName: 'M Street Music',
    locale: 'hr_HR',
  },
};

export default function PojmovnikPage() {
  const allPojmovi = getAllPojmovi();

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
        name: 'Pojmovnik',
        item: 'https://mstreetmusic.hr/pojmovnik',
      },
    ],
  };

  // JSON-LD: DefinedTermSet
  const termSetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Pojmovnik audio produkcije',
    description: 'Audio pojmovnik na hrvatskom jeziku s pojmovima iz snimanja, mixing-a, mastering-a i studijske opreme.',
    url: 'https://mstreetmusic.hr/pojmovnik',
    hasDefinedTerm: allPojmovi.map((pojam) => ({
      '@type': 'DefinedTerm',
      name: pojam.term,
      description: pojam.definition,
      url: `https://mstreetmusic.hr/pojmovnik/${pojam.slug}`,
    })),
  };

  return (
    <div className="pojmovnik-listing-page">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSetJsonLd) }}
      />

      <ScrollReveal />
      <Navigation locale="hr" />

      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="pojmovnik-listing-hero">
          <h1>Pojmovnik</h1>
          <p>
            Audio pojmovnik na hrvatskom jeziku. Objašnjenja ključnih pojmova
            iz snimanja, mixing-a, mastering-a i studijske opreme, s primjerima
            iz prakse M Street Music studija u Krapini.
          </p>
        </section>

        {/* Interactive Filter + Alphabetical Grid */}
        <PojmovnikGrid pojmovi={allPojmovi} />

        {/* Bottom CTA */}
        <div className="pojmovnik-listing-cta">
          <h2>Imate pitanje o zvuku?</h2>
          <p>
            Javite se i rado ćemo objasniti sve što vas zanima o snimanju,
            mixing-u ili mastering-u.
          </p>
          <Link href="/#contact" className="pojmovnik-listing-cta-btn">
            Kontaktiraj nas
          </Link>
        </div>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
