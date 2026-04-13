interface ServicesSectionProps {
  locale?: 'hr' | 'en';
}

export default function ServicesSection({ locale = 'hr' }: ServicesSectionProps) {
  const services = locale === 'hr'
    ? [
        {
          icon: (
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          ),
          title: 'Snimanje',
          desc: 'Profesionalno snimanje kroz hibridni analogno/digitalni signal chain u kontroliranom akustičkom okruženju.',
          features: ['Veliki izbor mikrofona', 'Izolirane prostorije', 'UAD low latency monitoring'],
        },
        {
          icon: (
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          ),
          title: 'Miksanje',
          desc: 'Precizno miksanje s dubinom, punch-om i translacijom koristeći high-end alate i kalibrirani monitoring.',
          features: ['PA, FabFilter plugini', 'Analogni hardware', 'D-Box+ konverzija'],
        },
        {
          icon: (
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          ),
          title: 'Mastering',
          desc: 'Finalni mastering optimiziran za Spotify, Apple Music i streaming platforme uz očuvanje muzikalnosti.',
          features: ['Ozone 12', 'Analogni hardware', 'Vintage ekvilajzeri'],
        },
      ]
    : [
        {
          icon: (
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          ),
          title: 'Recording',
          desc: 'Professional recording through a hybrid analog/digital signal chain in a controlled acoustic environment.',
          features: ['Large microphone selection', 'Isolated rooms', 'UAD low latency monitoring'],
        },
        {
          icon: (
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          ),
          title: 'Mixing',
          desc: 'Precise mixing with depth, punch, and translation using high-end tools and calibrated monitoring.',
          features: ['PA, FabFilter plugins', 'Analog hardware', 'D-Box+ conversion'],
        },
        {
          icon: (
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          ),
          title: 'Mastering',
          desc: 'Final mastering optimized for Spotify, Apple Music and streaming platforms while preserving musicality.',
          features: ['Ozone 12', 'Analog hardware', 'Vintage EQs'],
        },
      ];

  return (
    <section className="services" id="services">
      <div className="section-container">
        <h2 className="section-title reveal">
          {locale === 'hr' ? 'Usluge' : 'Services'}
        </h2>
        <p className="section-subtitle reveal">
          {locale === 'hr'
            ? 'Profesionalna audio produkcija za glazbenike koji zahtijevaju kvalitetu'
            : 'Professional audio production for musicians who demand quality'}
        </p>
        <p className="section-about reveal" style={{ maxWidth: '720px', margin: '0 auto 32px', fontSize: '15px', lineHeight: '1.7', color: '#94a3b8', textAlign: 'center' }}>
          {locale === 'hr'
            ? 'M Street Music je profesionalni tonski studio u Krapini, Hrvatska. Vlasnik i inženjer Kristijan Sinković, diplomirani glazbenik i SSL certificirani audio inženjer s 20 godina iskustva, nudi usluge snimanja, miksanja i masteringa optimizirane za Spotify i streaming platforme, te privatno glazbeno mentorstvo.'
            : 'M Street Music is a professional recording studio in Krapina, Croatia. Owner and engineer Kristijan Sinković, a Master of Music graduate and SSL Certified audio engineer with 20 years of experience, offers recording, mixing, and mastering services optimized for Spotify and streaming platforms, as well as private music mentorship.'}
        </p>
        <div className="services-grid stagger-children">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
