interface RoastBannerProps {
  locale?: 'hr' | 'en';
}

export default function RoastBanner({ locale = 'hr' }: RoastBannerProps) {
  return (
    <section className="roast-banner">
      <div className="roast-bg-glow" />

      <div className="roast-badge reveal">
        {locale === 'hr' ? 'NOVA USLUGA' : 'NEW SERVICE'}
      </div>
      <h2 className="reveal">Mix Roast</h2>
      <p className="reveal">
        {locale === 'hr'
          ? 'Uploadaj svoj miks. Dobij brutalnu analizu — i profesionalni izvještaj s točnim uputama za poboljšanje.'
          : 'Upload your mix. Get a brutal analysis — and a professional report with exact instructions for improvement.'}
      </p>

      <div className="roast-steps reveal">
        <div className="roast-step">
          <div className="roast-step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <span className="roast-step-label">Upload</span>
          <span className="roast-step-detail">.wav / .mp3</span>
        </div>

        <div className="roast-step-connector">
          <div className="roast-shimmer-line" />
        </div>

        <div className="roast-step">
          <div className="roast-step-icon roast-step-icon--fire">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z" />
            </svg>
          </div>
          <span className="roast-step-label">
            {locale === 'hr' ? 'Analiza' : 'Analysis'}
          </span>
          <span className="roast-step-detail">
            {locale === 'hr' ? 'detaljni roast' : 'detailed roast'}
          </span>
        </div>

        <div className="roast-step-connector">
          <div className="roast-shimmer-line" />
        </div>

        <div className="roast-step">
          <div className="roast-step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <span className="roast-step-label">
            {locale === 'hr' ? 'Izvještaj' : 'Report'}
          </span>
          <span className="roast-step-detail">
            {locale === 'hr' ? 'konkretne upute' : 'actionable tips'}
          </span>
        </div>
      </div>

      <a
        href="https://roastyourmix.com/"
        target="_blank"
        rel="noopener"
        className="btn-white reveal"
      >
        Roast My Mix
      </a>
    </section>
  );
}
