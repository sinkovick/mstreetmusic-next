import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import { getOpremaBySignalChainOrder } from '@/data/oprema';
import '@/styles/homepage.css';
import '@/styles/oprema.css';

export const metadata: Metadata = {
  title: 'Oprema studija',
  description:
    'Hardware oprema M Street Music studija u Krapini. Analogni signal chain - Universal Audio, Dangerous Music, Tegeler Audio, SSL.',
  alternates: {
    canonical: 'https://mstreetmusic.hr/oprema',
  },
  openGraph: {
    title: 'Oprema studija | M Street Music',
    description:
      'Hardware oprema M Street Music studija u Krapini. Analogni signal chain - Universal Audio, Dangerous Music, Tegeler Audio, SSL.',
    url: 'https://mstreetmusic.hr/oprema',
    type: 'website',
    siteName: 'M Street Music',
    locale: 'hr_HR',
  },
};

export default function OpremaListingPage() {
  const allGear = getOpremaBySignalChainOrder();

  // JSON-LD: BreadcrumbList - static trusted data, no user input
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
        name: 'Oprema',
        item: 'https://mstreetmusic.hr/oprema',
      },
    ],
  };

  // JSON-LD: ItemList - static trusted data, no user input
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Oprema M Street Music studija',
    itemListElement: allGear.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://mstreetmusic.hr/oprema/${item.slug}`,
      name: item.name,
    })),
  };

  return (
    <div className="oprema-listing-page">
      {/* JSON-LD structured data - all from static TS data file, safe */}
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
        {/* Hero */}
        <section className="oprema-listing-hero">
          <h1>Oprema studija</h1>
          <p>
            Koristimo kombinaciju digitalnog i analognog pristupa. Svaki komad opreme
            ima svoju ulogu u signal chainu koji daje našim mixevima i masterima
            prepoznatljiv zvuk.
          </p>
        </section>

        {/* Signal Chain Overview */}
        <section className="oprema-listing-chain">
          <h2 className="oprema-listing-chain-title">Signal chain</h2>
          <div className="oprema-signal-chain-flow">
            {allGear.map((item, i) => (
              <div key={item.slug} className="oprema-signal-chain-step">
                <Link
                  href={`/oprema/${item.slug}`}
                  className="oprema-signal-chain-item"
                >
                  <span className="oprema-signal-chain-number">{i + 1}</span>
                  <span className="oprema-signal-chain-name">{item.name}</span>
                </Link>
                {i < allGear.length - 1 && (
                  <span className="oprema-signal-chain-arrow">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Gear Cards */}
        <div className="oprema-listing-content">
          <div className="oprema-listing-grid">
            {allGear.map((item) => (
              <Link
                key={item.slug}
                href={`/oprema/${item.slug}`}
                className="oprema-listing-card"
              >
                <div className="oprema-listing-card-image">
                  <Image
                    src={item.heroImage}
                    alt={item.name}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="oprema-listing-card-img"
                  />
                </div>
                <article className="oprema-listing-card-body">
                  <span className="oprema-listing-card-brand">{item.brand}</span>
                  <h3 className="oprema-listing-card-title">{item.name}</h3>
                  <p className="oprema-listing-card-description">
                    {item.metaDescription}
                  </p>
                  <span className="oprema-listing-card-link">
                    Saznaj više &rsaquo;
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="oprema-listing-cta">
          <h2>Želite čuti razliku?</h2>
          <p>
            Javite se i dogovorimo session u kojem ćete čuti kako naš signal chain
            zvuči na vašoj glazbi.
          </p>
          <Link href="/#contact" className="oprema-listing-cta-btn">
            Kontaktiraj nas
          </Link>
        </div>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
