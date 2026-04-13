import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import { getAllPojmovi, getPojamBySlug, getCategoryLabel } from '@/data/pojmovnik';
import { getUslugaBySlug } from '@/data/usluge';
import { getOpremaBySlug } from '@/data/oprema';
import '@/styles/homepage.css';
import '@/styles/pojmovnik.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const pojmovi = getAllPojmovi();
  return pojmovi.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pojam = getPojamBySlug(params.slug);

  if (!pojam) {
    return { title: 'Pojam nije pronađen' };
  }

  const pageUrl = `https://mstreetmusic.hr/pojmovnik/${pojam.slug}`;

  return {
    title: pojam.metaTitle,
    description: pojam.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pojam.metaTitle,
      description: pojam.metaDescription,
      type: 'article',
      url: pageUrl,
      siteName: 'M Street Music',
      locale: 'hr_HR',
    },
    twitter: {
      card: 'summary',
      title: pojam.metaTitle,
      description: pojam.metaDescription,
    },
  };
}

export default function PojmovnikTermPage({ params }: Props) {
  const pojam = getPojamBySlug(params.slug);

  if (!pojam) {
    notFound();
  }

  const pageUrl = `https://mstreetmusic.hr/pojmovnik/${pojam.slug}`;

  // Resolve related terms
  const relatedPojmovi = pojam.relatedTerms
    .map((slug) => getPojamBySlug(slug))
    .filter(Boolean);

  // Resolve related services
  const relatedUsluge = (pojam.relatedServices || [])
    .map((slug) => getUslugaBySlug(slug))
    .filter(Boolean);

  // Resolve related gear
  const relatedOprema = (pojam.relatedGear || [])
    .map((slug) => getOpremaBySlug(slug))
    .filter(Boolean);

  // Split explanation into paragraphs
  const explanationParagraphs = pojam.explanation.split('\n\n');

  // JSON-LD: DefinedTerm schema
  const definedTermJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: pojam.term,
    description: pojam.definition,
    url: pageUrl,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Pojmovnik audio produkcije',
      url: 'https://mstreetmusic.hr/pojmovnik',
    },
  };

  // JSON-LD: FAQPage schema
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pojam.faq.map((item) => ({
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
        name: 'Pojmovnik',
        item: 'https://mstreetmusic.hr/pojmovnik',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pojam.term,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="pojmovnik-page">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
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
        <section className="pojmovnik-hero">
          {/* Breadcrumbs */}
          <nav className="pojmovnik-breadcrumbs">
            <Link href="/">Početna</Link>
            <span className="separator">&rsaquo;</span>
            <Link href="/pojmovnik">Pojmovnik</Link>
            <span className="separator">&rsaquo;</span>
            <span className="current">{pojam.term}</span>
          </nav>

          <h1 className="pojmovnik-hero-title">{pojam.term}</h1>

          <div className="pojmovnik-hero-meta">
            {pojam.englishTerm && (
              <span className="pojmovnik-english">{pojam.englishTerm}</span>
            )}
            <span className="pojmovnik-category-badge">
              {getCategoryLabel(pojam.category)}
            </span>
          </div>

          <p className="pojmovnik-definition">{pojam.definition}</p>
        </section>

        {/* Explanation */}
        <section className="pojmovnik-explanation">
          <div className="pojmovnik-section-inner">
            <div className="pojmovnik-explanation-content">
              {explanationParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Context */}
        <section className="pojmovnik-studio">
          <div className="pojmovnik-section-inner">
            <h2 className="pojmovnik-studio-title">Kako koristimo u studiju</h2>
            <div className="pojmovnik-studio-content">
              <p>{pojam.studioContext}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {pojam.faq.length > 0 && (
          <section className="pojmovnik-faq">
            <div className="pojmovnik-section-inner">
              <h2 className="pojmovnik-section-title">Često postavljena pitanja</h2>
              <div className="pojmovnik-faq-list">
                {pojam.faq.map((item, i) => (
                  <div key={i} className="pojmovnik-faq-item">
                    <h3 className="pojmovnik-faq-question">{item.q}</h3>
                    <p className="pojmovnik-faq-answer">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Terms */}
        {relatedPojmovi.length > 0 && (
          <section className="pojmovnik-related">
            <div className="pojmovnik-section-inner">
              <h2 className="pojmovnik-section-title">Povezani pojmovi</h2>
              <div className="pojmovnik-related-grid">
                {relatedPojmovi.map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/pojmovnik/${related!.slug}`}
                    className="pojmovnik-related-card"
                  >
                    <h3 className="pojmovnik-related-card-term">{related!.term}</h3>
                    {related!.englishTerm && (
                      <p className="pojmovnik-related-card-english">{related!.englishTerm}</p>
                    )}
                    <p className="pojmovnik-related-card-def">{related!.definition}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cross-links: Services + Gear */}
        {(relatedUsluge.length > 0 || relatedOprema.length > 0) && (
          <section className="pojmovnik-crosslinks">
            <div className="pojmovnik-section-inner">
              <div className="pojmovnik-crosslinks-inner">
                {relatedUsluge.length > 0 && (
                  <div className="pojmovnik-crosslinks-group">
                    <h3>Povezane usluge</h3>
                    <div className="pojmovnik-crosslinks-list">
                      {relatedUsluge.map((usluga) => (
                        <Link key={usluga!.slug} href={`/usluge/${usluga!.slug}`}>
                          {usluga!.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {relatedOprema.length > 0 && (
                  <div className="pojmovnik-crosslinks-group">
                    <h3>Povezana oprema</h3>
                    <div className="pojmovnik-crosslinks-list">
                      {relatedOprema.map((item) => (
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

        {/* CTA */}
        <section className="pojmovnik-cta">
          <div className="pojmovnik-section-inner">
            <h2 className="pojmovnik-cta-title">Trebate profesionalan zvuk?</h2>
            <p className="pojmovnik-cta-text">
              Javite se s detaljima o vašem projektu i dogovaramo termin.
            </p>
            <Link href="/#contact" className="pojmovnik-cta-button">
              Kontaktiraj nas
            </Link>
          </div>
        </section>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
