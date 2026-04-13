import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import { getAllUsluge, getUslugaBySlug } from '@/data/usluge';
import { getPojamBySlug } from '@/data/pojmovnik';
import { getOpremaBySlug } from '@/data/oprema';
import '@/styles/homepage.css';
import '@/styles/services.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const usluge = getAllUsluge();
  return usluge.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const usluga = getUslugaBySlug(params.slug);

  if (!usluga) {
    return { title: 'Usluga nije pronađena' };
  }

  const pageUrl = `https://mstreetmusic.hr/usluge/${usluga.slug}`;
  const ogImage = usluga.heroImage.startsWith('http')
    ? usluga.heroImage
    : `https://mstreetmusic.hr${usluga.heroImage}`;

  return {
    title: usluga.metaTitle,
    description: usluga.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: usluga.metaTitle,
      description: usluga.metaDescription,
      type: 'website',
      url: pageUrl,
      siteName: 'M Street Music',
      images: [ogImage],
      locale: 'hr_HR',
    },
    twitter: {
      card: 'summary_large_image',
      title: usluga.metaTitle,
      description: usluga.metaDescription,
      images: [ogImage],
    },
  };
}

export default function UslugaPage({ params }: Props) {
  const usluga = getUslugaBySlug(params.slug);

  if (!usluga) {
    notFound();
  }

  const pageUrl = `https://mstreetmusic.hr/usluge/${usluga.slug}`;

  // Related services data
  const relatedUsluge = (usluga.relatedServices || [])
    .map((slug) => getUslugaBySlug(slug))
    .filter(Boolean);

  // Cross-link data
  const relatedTerms = (usluga.relatedTerms || [])
    .map((slug) => getPojamBySlug(slug))
    .filter(Boolean);
  const relatedGear = (usluga.relatedGear || [])
    .map((slug) => getOpremaBySlug(slug))
    .filter(Boolean);

  // JSON-LD: Service schema
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: usluga.title,
    description: usluga.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://mstreetmusic.hr/#business',
    },
    serviceType: usluga.title,
    areaServed: 'Krapina, Hrvatska',
  };

  // JSON-LD: FAQPage schema
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: usluga.faq.map((item) => ({
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
        name: 'Usluge',
        item: 'https://mstreetmusic.hr/usluge',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: usluga.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="usluga-page">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
        <section className="usluga-hero">
          <div className="usluga-hero-content">
            {/* Breadcrumbs */}
            <nav className="usluga-breadcrumbs">
              <Link href="/">Početna</Link>
              <span className="separator">&rsaquo;</span>
              <Link href="/usluge">Usluge</Link>
              <span className="separator">&rsaquo;</span>
              <span className="current">{usluga.title}</span>
            </nav>

            <h1 className="usluga-hero-title">{usluga.title}</h1>
            <p className="usluga-hero-description">{usluga.description}</p>
          </div>

          <div className="usluga-hero-image">
            <Image
              src={usluga.heroImage}
              alt={usluga.title}
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="usluga-hero-img"
            />
          </div>
        </section>

        {/* Što uključuje */}
        <section className="usluga-includes">
          <div className="usluga-section-inner">
            <h2 className="usluga-section-title">Što uključuje</h2>
            <div className="usluga-includes-grid">
              {usluga.includes.map((item, i) => (
                <div key={i} className="usluga-includes-item">
                  <svg
                    className="usluga-check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proces rada */}
        <section className="usluga-process">
          <div className="usluga-section-inner">
            <h2 className="usluga-section-title">Proces rada</h2>
            <div className="usluga-process-steps">
              {usluga.process.map((item, i) => (
                <div key={i} className="usluga-process-step">
                  <div className="usluga-step-number">
                    <span>{i + 1}</span>
                  </div>
                  <div className="usluga-step-content">
                    <h3 className="usluga-step-title">{item.step}</h3>
                    <p className="usluga-step-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="usluga-faq">
          <div className="usluga-section-inner">
            <h2 className="usluga-section-title">Često postavljena pitanja</h2>
            <div className="usluga-faq-list">
              {usluga.faq.map((item, i) => (
                <div key={i} className="usluga-faq-item">
                  <h3 className="usluga-faq-question">{item.q}</h3>
                  <p className="usluga-faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links: Pojmovnik + Oprema */}
        {(relatedTerms.length > 0 || relatedGear.length > 0) && (
          <section className="usluga-crosslinks">
            <div className="usluga-section-inner">
              <div className="usluga-crosslinks-inner">
                {relatedTerms.length > 0 && (
                  <div className="usluga-crosslinks-group">
                    <h3>Povezani pojmovi</h3>
                    <div className="usluga-crosslinks-list">
                      {relatedTerms.map((term) => (
                        <Link key={term!.slug} href={`/pojmovnik/${term!.slug}`}>
                          {term!.term}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {relatedGear.length > 0 && (
                  <div className="usluga-crosslinks-group">
                    <h3>Oprema koju koristimo</h3>
                    <div className="usluga-crosslinks-list">
                      {relatedGear.map((item) => (
                        <Link key={item!.slug} href={`/oprema/${item!.slug}`}>
                          {item!.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Povezane usluge */}
        {relatedUsluge.length > 0 && (
          <section className="usluga-related">
            <div className="usluga-section-inner">
              <h2 className="usluga-section-title">Povezane usluge</h2>
              <div className="usluga-related-grid">
                {relatedUsluge.map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/usluge/${related!.slug}`}
                    className="usluga-related-card"
                  >
                    <div className="usluga-related-card-image">
                      <Image
                        src={related!.heroImage}
                        alt={related!.title}
                        width={400}
                        height={250}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="usluga-related-img"
                      />
                    </div>
                    <div className="usluga-related-card-body">
                      <h3 className="usluga-related-card-title">{related!.title}</h3>
                      <p className="usluga-related-card-desc">
                        {related!.metaDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="usluga-cta">
          <div className="usluga-section-inner">
            <h2 className="usluga-cta-title">Zainteresirani?</h2>
            <p className="usluga-cta-text">
              Javite se s detaljima o vašem projektu i dogovaramo termin.
            </p>
            <Link href="/#contact" className="usluga-cta-button">
              Kontaktiraj nas
            </Link>
          </div>
        </section>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
