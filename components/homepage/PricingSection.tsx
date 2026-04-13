interface PricingSectionProps {
  locale?: 'hr' | 'en';
}

export default function PricingSection({ locale = 'hr' }: PricingSectionProps) {
  const cards = locale === 'hr'
    ? [
        {
          title: 'Snimanje',
          price: '€35',
          unit: '/sat',
          note: null,
          from: false,
          featured: false,
          features: ['Veliki izbor mikrofona', 'Izolirane prostorije', 'UAD low latency monitoring', 'Uključeno više snimaka'],
        },
        {
          title: 'Miksanje',
          price: '€200',
          unit: '/pjesma',
          note: 'Ovisi o broju traka',
          from: true,
          featured: true,
          features: ['PA, FabFilter plugini', 'Analogni hardware', 'D-Box+ konverzija', 'Mnogo VST instrumenata'],
        },
        {
          title: 'Mastering',
          price: '€50',
          unit: '/pjesma',
          note: 'Stem master +€10',
          from: false,
          featured: false,
          features: ['Ozone 12', 'Analogni hardware', 'Optimizirano za streaming', 'Vintage ekvilajzeri'],
        },
      ]
    : [
        {
          title: 'Recording',
          price: '€35',
          unit: '/hour',
          note: null,
          from: false,
          featured: false,
          features: ['Large microphone selection', 'Isolated rooms', 'UAD low latency monitoring', 'Multiple takes included'],
        },
        {
          title: 'Mixing',
          price: '€200',
          unit: '/song',
          note: 'Depends on track count',
          from: true,
          featured: true,
          features: ['PA, FabFilter plugins', 'Analog hardware', 'D-Box+ conversion', 'Many VST instruments'],
        },
        {
          title: 'Mastering',
          price: '€50',
          unit: '/song',
          note: 'Stem master +€10',
          from: false,
          featured: false,
          features: ['Ozone 12', 'Analog hardware', 'Streaming optimized', 'Vintage EQs'],
        },
      ];

  return (
    <section className="pricing" id="pricing">
      <div className="section-container">
        <h2 className="section-title reveal">
          {locale === 'hr' ? 'Cjenik' : 'Pricing'}
        </h2>
        <p className="section-subtitle reveal">
          {locale === 'hr'
            ? 'Transparentne cijene za sve usluge. Javite se za prilagođene projekte.'
            : 'Transparent pricing for all services. Get in touch for custom projects.'}
        </p>
        <div className="pricing-grid stagger-children">
          {cards.map((card) => (
            <div className={`pricing-card${card.featured ? ' featured' : ''}`} key={card.title}>
              <h3>{card.title}</h3>
              <div className="price">
                {card.from && <span className="price-from">od </span>}
                {card.price}
                <span className="price-unit">{card.unit}</span>
              </div>
              {card.note && <p className="price-note">{card.note}</p>}
              <ul className="pricing-features">
                {card.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`pricing-btn${card.featured ? ' pricing-btn-white' : ''}`}
              >
                {locale === 'hr' ? 'Rezerviraj' : 'Book Now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
