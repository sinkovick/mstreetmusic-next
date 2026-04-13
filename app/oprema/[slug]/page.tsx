import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import { getAllOprema, getOpremaBySlug, getOpremaBySignalChainOrder } from '@/data/oprema';
import { getPojamBySlug } from '@/data/pojmovnik';
import { getUslugaBySlug } from '@/data/usluge';
import '@/styles/homepage.css';
import '@/styles/oprema.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const items = getAllOprema();
  return items.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gear = getOpremaBySlug(params.slug);

  if (!gear) {
    return { title: 'Oprema nije pronađena' };
  }

  const pageUrl = `https://mstreetmusic.hr/oprema/${gear.slug}`;
  const ogImage = gear.heroImage.startsWith('http')
    ? gear.heroImage
    : `https://mstreetmusic.hr${gear.heroImage}`;

  return {
    title: gear.metaTitle,
    description: gear.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: gear.metaTitle,
      description: gear.metaDescription,
      type: 'website',
      url: pageUrl,
      siteName: 'M Street Music',
      images: [ogImage],
      locale: 'hr_HR',
    },
    twitter: {
      card: 'summary_large_image',
      title: gear.metaTitle,
      description: gear.metaDescription,
      images: [ogImage],
    },
  };
}

export default function OpremaPage({ params }: Props) {
  const gear = getOpremaBySlug(params.slug);

  if (!gear) {
    notFound();
  }

  const pageUrl = `https://mstreetmusic.hr/oprema/${gear.slug}`;
  const signalChain = getOpremaBySignalChainOrder();

  // Related gear data
  const relatedGear = (gear.relatedGear || [])
    .map((slug) => getOpremaBySlug(slug))
    .filter(Boolean);

  // Cross-link data
  const relatedTerms = (gear.relatedTerms || [])
    .map((slug) => getPojamBySlug(slug))
    .filter(Boolean);
  const relatedServices = (gear.relatedServices || [])
    .map((slug) => getUslugaBySlug(slug))
    .filter(Boolean);

  // JSON-LD: Product schema
  // NOTE: dangerouslySetInnerHTML is safe here - all data comes from static trusted TS data file, not user input
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: gear.name,
    brand: {
      '@type': 'Brand',
      name: gear.brand,
    },
    description: gear.description,
    image: gear.heroImage.startsWith('http')
      ? gear.heroImage
      : `https://mstreetmusic.hr${gear.heroImage}`,
    url: pageUrl,
    review: {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Kristijan Sinković',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(gear.reviewRating),
        bestRating: '5',
      },
    },
  };

  // JSON-LD: FAQPage schema
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gear.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  // JSON-LD: BreadcrumbList schema
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
      {
        '@type': 'ListItem',
        position: 3,
        name: gear.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="oprema-page">
      {/* JSON-LD Structured Data - all data from static trusted TS file */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ScrollReveal />
      <Navigation locale="hr" />

      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="oprema-hero">
          <div className="oprema-hero-content">
            <nav className="oprema-breadcrumbs">
              <Link href="/">Početna</Link>
              <span className="separator">&rsaquo;</span>
              <Link href="/oprema">Oprema</Link>
              <span className="separator">&rsaquo;</span>
              <span className="current">{gear.name}</span>
            </nav>

            <h1 className="oprema-hero-title">{gear.name}</h1>
            <p className="oprema-hero-brand">{gear.brand}</p>
            <p className="oprema-hero-description">{gear.description}</p>
          </div>

          <div className="oprema-hero-image">
            <Image
              src={gear.heroImage}
              alt={gear.name}
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="oprema-hero-img"
            />
          </div>
        </section>

        {/* Uloga u studiju + Signal Chain */}
        <section className="oprema-role">
          <div className="oprema-section-inner">
            <h2 className="oprema-section-title">Uloga u studiju</h2>
            <p className="oprema-role-text">{gear.role}</p>

            {/* Signal Chain Visualization */}
            <div className="oprema-signal-chain">
              <h3 className="oprema-signal-chain-label">Signal chain</h3>
              <div className="oprema-signal-chain-flow">
                {signalChain.map((item, i) => (
                  <div key={item.slug} className="oprema-signal-chain-step">
                    <Link
                      href={`/oprema/${item.slug}`}
                      className={`oprema-signal-chain-item${item.slug === gear.slug ? ' active' : ''}`}
                    >
                      <span className="oprema-signal-chain-number">{i + 1}</span>
                      <span className="oprema-signal-chain-name">{item.name}</span>
                    </Link>
                    {i < signalChain.length - 1 && (
                      <span className="oprema-signal-chain-arrow">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifikacije */}
        <section className="oprema-specs">
          <div className="oprema-section-inner">
            <h2 className="oprema-section-title">Specifikacije</h2>
            <div className="oprema-specs-table">
              {gear.specs.map((spec, i) => (
                <div key={i} className="oprema-specs-row">
                  <span className="oprema-specs-label">{spec.label}</span>
                  <span className="oprema-specs-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="oprema-faq">
          <div className="oprema-section-inner">
            <h2 className="oprema-section-title">Često postavljena pitanja</h2>
            <div className="oprema-faq-list">
              {gear.faq.map((item, i) => (
                <div key={i} className="oprema-faq-item">
                  <h3 className="oprema-faq-question">{item.q}</h3>
                  <p className="oprema-faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links: Pojmovnik + Usluge */}
        {(relatedTerms.length > 0 || relatedServices.length > 0) && (
          <section className="oprema-crosslinks">
            <div className="oprema-section-inner">
              <div className="oprema-crosslinks-inner">
                {relatedTerms.length > 0 && (
                  <div className="oprema-crosslinks-group">
                    <h3>Povezani pojmovi</h3>
                    <div className="oprema-crosslinks-list">
                      {relatedTerms.map((term) => (
                        <Link key={term!.slug} href={`/pojmovnik/${term!.slug}`}>
                          {term!.term}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {relatedServices.length > 0 && (
                  <div className="oprema-crosslinks-group">
                    <h3>Povezane usluge</h3>
                    <div className="oprema-crosslinks-list">
                      {relatedServices.map((usluga) => (
                        <Link key={usluga!.slug} href={`/usluge/${usluga!.slug}`}>
                          {usluga!.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Povezana oprema */}
        {relatedGear.length > 0 && (
          <section className="oprema-related">
            <div className="oprema-section-inner">
              <h2 className="oprema-section-title">Povezana oprema</h2>
              <div className="oprema-related-grid">
                {relatedGear.map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/oprema/${related!.slug}`}
                    className="oprema-related-card"
                  >
                    <div className="oprema-related-card-image">
                      <Image
                        src={related!.heroImage}
                        alt={related!.name}
                        width={400}
                        height={250}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="oprema-related-img"
                      />
                    </div>
                    <div className="oprema-related-card-body">
                      <h3 className="oprema-related-card-title">{related!.name}</h3>
                      <p className="oprema-related-card-desc">{related!.brand}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="oprema-cta">
          <div className="oprema-section-inner">
            <h2 className="oprema-cta-title">Zainteresirani?</h2>
            <p className="oprema-cta-text">
              Javite se s detaljima o vašem projektu i dogovaramo termin.
            </p>
            <Link href="/#contact" className="oprema-cta-button">
              Kontaktiraj nas
            </Link>
          </div>
        </section>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
