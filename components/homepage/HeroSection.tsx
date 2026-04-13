import Image from 'next/image';

interface HeroSectionProps {
  locale?: 'hr' | 'en';
}

export default function HeroSection({ locale = 'hr' }: HeroSectionProps) {
  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        role="img"
        aria-label={
          locale === 'hr'
            ? 'M Street Music studio za snimanje glazbe Krapina'
            : 'M Street Music recording studio in Krapina, Croatia'
        }
      >
        <Image
          src="/studio.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>RECORDS,<br />NOT DEMOS.<br /><span style={{ fontSize: '0.35em', fontWeight: 400, letterSpacing: '0.05em', opacity: 0.85, display: 'block', marginTop: '12px' }}>{locale === 'hr' ? 'Tonski studio Krapina' : 'Recording Studio Krapina, Croatia'}</span></h1>
        <p>
          {locale === 'hr'
            ? 'Profesionalni tonski studio u Krapini — snimanje, miks i master'
            : 'Professional recording studio in Krapina — recording, mixing & mastering'}
        </p>
        <a href="#contact" className="btn-primary">
          {locale === 'hr' ? 'Rezerviraj termin' : 'Book a Session'}
        </a>
      </div>
    </section>
  );
}
