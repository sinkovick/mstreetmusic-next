import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer, ScrollReveal } from '@/components/homepage';
import FAQAccordion from '@/components/mentorship/FAQAccordion';
import '@/styles/homepage.css';
import '@/styles/mentorship.css';

export const metadata: Metadata = {
  title: 'Privatno Glazbeno Mentorstvo',
  description:
    'Ekskluzivni individualni mentorski programi za glazbenike, producente i autore. 1:1 personalizirani pristup na profesionalnoj razini. M Street Music, Krapina.',
  keywords:
    'glazbeni mentor, privatne poduke glazba, music mentorship Croatia, produkcija mentorstvo, mixing mastering edukacija, skladanje mentorstvo, klavir poduke',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://mstreetmusic.hr/mentorstvo',
  },
  openGraph: {
    type: 'website',
    url: 'https://mstreetmusic.hr/mentorstvo',
    title: 'Privatno glazbeno mentorstvo | M Street Music',
    description:
      'Ekskluzivni individualni mentorski programi za glazbenike, producente i autore. 1:1 personalizirani pristup na profesionalnoj razini.',
    images: [{ url: 'https://mstreetmusic.hr/studio.jpg' }],
    locale: 'hr_HR',
    siteName: 'M Street Music',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privatno glazbeno mentorstvo | M Street Music',
    description:
      'Ekskluzivni individualni mentorski programi za glazbenike, producente i autore. 1:1 personalizirani pristup na profesionalnoj razini.',
    images: ['https://mstreetmusic.hr/studio.jpg'],
  },
};

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Privatni glazbeni mentorski programi',
  description:
    'Ekskluzivni individualni mentorski programi za glazbenike, producente i autore.',
  url: 'https://mstreetmusic.hr/mentorstvo',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Course',
        name: 'Sviranje instrumenta i glazbeni temelji',
        description:
          'Privatni mentorski program za izgradnju snažnih glazbenih temelja. Klavir, klavijature, harmonika, gitara, bas gitara, klarinet, saksofon, tamburaski instrumenti. Glazbena pismenost, ritam, sluh, harmonija, improvizacija.',
        provider: {
          '@type': 'Organization',
          name: 'M Street Music',
          url: 'https://mstreetmusic.hr',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['onsite', 'online'],
          location: {
            '@type': 'Place',
            name: 'M Street Music Studio',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Krapina',
              addressCountry: 'HR',
            },
          },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Course',
        name: 'Napredna harmonija i glazbena inteligencija',
        description:
          'Individualni program za napredne glazbenike, skladatelje i producente. Napredna harmonija, forma, analiza aranzmana, kompozicijski koncepti.',
        provider: {
          '@type': 'Organization',
          name: 'M Street Music',
          url: 'https://mstreetmusic.hr',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['onsite', 'online'],
          location: {
            '@type': 'Place',
            name: 'M Street Music Studio',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Krapina',
              addressCountry: 'HR',
            },
          },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Course',
        name: 'Produkcija, mixing i mastering',
        description:
          'Privatni mentorski program za producente i autore koji zele industrijski standard zvuka. Profesionalni mixing workflow, mastering, loudness standardi.',
        provider: {
          '@type': 'Organization',
          name: 'M Street Music',
          url: 'https://mstreetmusic.hr',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['onsite', 'online'],
          location: {
            '@type': 'Place',
            name: 'M Street Music Studio',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Krapina',
              addressCountry: 'HR',
            },
          },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Course',
        name: 'Skladanje, aranžiranje i filmska glazba',
        description:
          'Mentorstvo za skladatelje, aranzere i library music autore. Songwriting, orkestracija, instrumentacija, cinematic scoring.',
        provider: {
          '@type': 'Organization',
          name: 'M Street Music',
          url: 'https://mstreetmusic.hr',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['onsite', 'online'],
          location: {
            '@type': 'Place',
            name: 'M Street Music Studio',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Krapina',
              addressCountry: 'HR',
            },
          },
        },
      },
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Je li mentorstvo grupno ili individualno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Svi mentorski programi su 100% individualni — privatne sesije jedan na jedan. Ne nudim grupne tečajeve niti masovne online kurseve.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kome je mentorstvo namijenjeno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Programi su namijenjeni početnicima, naprednim glazbenicima, producentima i skladateljima. Svaki kandidat prolazi selekcijski proces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko traje mentorski program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mentorstvo je dugoročno i prilagođeno ciljevima polaznika (3, 6 ili 12+ mjeseci).',
      },
    },
    {
      '@type': 'Question',
      name: 'Održavaju li se sesije online ili uživo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sesije su dostupne online i uživo u studiju, ovisno o programu i dostupnosti termina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Objavljujete li cijene javno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ne. Cijene su individualne i ovise o razini, ciljevima i intenzitetu mentorstva.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mogu li djeca pohađati mentorstvo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foundations program je prilagođen mladim glazbenicima uz individualni pristup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko je mjesta dostupno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Broj polaznika je ograničen kako bi se osigurala maksimalna kvaliteta mentorstva.',
      },
    },
  ],
};

export default function MentorstvoPage() {
  return (
    <div className="mentorship-page">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Početna", item: "https://mstreetmusic.hr" },
            { "@type": "ListItem", position: 2, name: "Mentorstvo", item: "https://mstreetmusic.hr/mentorstvo" },
          ],
        }) }}
      />

      {/* Navigation */}
      <Navigation locale="hr" />

      {/* Hero Section */}
      <section className="mentorship-hero">
        <div className="hero-content">
          <div className="hero-badge reveal">Ekskluzivni privatni programi</div>
          <h1 className="reveal">Privatno glazbeno mentorstvo</h1>
          <p className="reveal">
            Ekskluzivni individualni mentorski programi za glazbenike, producente
            i autore koji žele razvoj na profesionalnoj razini.
            <br />
            <br />
            <strong>
              Rad je potpuno personaliziran i projektno orijentiran
            </strong>{' '}
            — bez grupnih tečajeva i generičkih kurikuluma.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="section-container">
          <h2 className="section-title reveal">Mentorski programi</h2>
          <p className="section-subtitle reveal">
            Odaberite program koji odgovara vašim ciljevima
          </p>

          <div className="programs-grid stagger-children">
            {/* Program 1 */}
            <div className="program-card">
              <h3>Sviranje instrumenta i glazbeni temelji</h3>
              <p className="program-subtitle">
                Privatni mentorski program za izgradnju snažnih glazbenih
                temelja.
              </p>
              <p className="program-details">
                <strong>Instrumenti:</strong> klavir, klavijature, harmonika,
                gitara, bas gitara, klarinet, saksofon, tamburaški instrumenti
              </p>
              <p className="program-details">
                <strong>Vještine:</strong> glazbena pismenost, ritam, sluh,
                harmonija, improvizacija, kreativna interpretacija
              </p>
              <p className="program-goal">
                Cilj: izgraditi profesionalni glazbeni identitet od samih
                temelja.
              </p>
            </div>

            {/* Program 2 */}
            <div className="program-card">
              <h3>Napredna harmonija i glazbena inteligencija</h3>
              <p className="program-subtitle">
                Individualni program za napredne glazbenike, skladatelje i
                producente.
              </p>
              <p className="program-details">
                <strong>Fokus:</strong> napredna harmonija, forma, analiza
                aranžmana, kompozicijski koncepti i profesionalni ear training.
              </p>
              <p className="program-goal">
                Cilj: razmišljati kao skladatelj i aranžer, ne kao konzument
                tutoriala.
              </p>
            </div>

            {/* Program 3 */}
            <div className="program-card">
              <h3>Produkcija, mixing i mastering</h3>
              <p className="program-subtitle">
                Privatni mentorski program za producente i autore koji žele
                industrijski standard zvuka.
              </p>
              <p className="program-details">
                <strong>Fokus:</strong> profesionalni mixing workflow, mastering,
                loudness standardi, analogno/digitalni hybrid chain, session
                management, kritičko slušanje i referenciranje.
              </p>
              <p className="program-goal">
                Cilj: release-ready produkcije na profesionalnoj razini.
              </p>
            </div>

            {/* Program 4 */}
            <div className="program-card">
              <h3>Skladanje, aranžiranje i filmska glazba</h3>
              <p className="program-subtitle">
                Mentorstvo za skladatelje, aranžere i library music autore.
              </p>
              <p className="program-details">
                <strong>Fokus:</strong> songwriting, orkestracija,
                instrumentacija, cinematic scoring, sound design, profesionalni
                template workflow i feedback na projektima.
              </p>
              <p className="program-goal">
                Cilj: glazba spremna za izdavanje, sync i licenciranje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Banner */}
      <section className="elite-banner">
        <div className="elite-badge reveal">Premium Tier</div>
        <h2 className="reveal">Elitno privatno mentorstvo</h2>
        <p className="reveal">
          Najviša razina individualnog mentorstva za ozbiljne autore i
          producente.
          <br />
          Uključuje personalizirani razvojni roadmap, detaljnu analizu
          projekata, kreativni coaching i karijerni positioning.
        </p>
        <div className="elite-features reveal">
          <div className="elite-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Personalizirani roadmap
          </div>
          <div className="elite-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Analiza projekata
          </div>
          <div className="elite-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Kreativni coaching
          </div>
          <div className="elite-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Karijerni positioning
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title reveal">Često postavljana pitanja</h2>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container reveal">
          <a
            href="https://forms.gle/JP73dBmPEm2iRMLz9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Prijavi se za Mentorstvo
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <p className="cta-subtext">
            Prijave se razmatraju individualno. Ograničen broj mjesta.
          </p>

          <Link href="/" className="back-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Povratak na početnu
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer locale="hr" />

      {/* Scroll Reveal */}
      <ScrollReveal />
    </div>
  );
}
