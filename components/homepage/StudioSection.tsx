import Image from 'next/image';
import StudioGallery from './StudioGallery';

interface StudioSectionProps {
  locale?: 'hr' | 'en';
}

export default function StudioSection({ locale = 'hr' }: StudioSectionProps) {
  const features = locale === 'hr'
    ? [
        { title: 'Akustički tretiran', desc: 'Kontrolirano okruženje za precizno snimanje' },
        { title: 'Hibridni signal chain', desc: 'Analogna toplina susreće digitalnu preciznost' },
        { title: 'Profesionalni monitoring', desc: 'Kalibrirano okruženje za slušanje' },
      ]
    : [
        { title: 'Acoustically Treated', desc: 'Controlled environment for precise recording' },
        { title: 'Hybrid Signal Chain', desc: 'Analog warmth meets digital precision' },
        { title: 'Professional Monitoring', desc: 'Calibrated listening environment' },
      ];

  return (
    <section className="studio" id="studio">
      <div className="section-container">
        <h2 className="section-title reveal">{locale === 'hr' ? 'Studio' : 'Studio'}</h2>
        <p className="section-subtitle reveal">
          {locale === 'hr'
            ? 'Gdje se analogna toplina susreće s digitalnom preciznošću'
            : 'Where analog warmth meets digital precision'}
        </p>
        <div className="studio-content">
          <div className="studio-text reveal-left">
            <h3>
              {locale === 'hr' ? 'Profesionalno okruženje' : 'Professional Environment'}
            </h3>
            <p>
              {locale === 'hr'
                ? 'M Street Music kombinira toplinu analogne opreme s fleksibilnošću modernih digitalnih alata. Naš hibridni workflow osigurava da vaše snimke imaju karakter, dubinu i tehničku kvalitetu.'
                : 'M Street Music combines the warmth of analog gear with the flexibility of modern digital tools. Our hybrid workflow ensures your recordings have character, depth, and technical quality.'}
            </p>
            <div className="studio-features">
              {features.map((f) => (
                <div className="studio-feature" key={f.title}>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="studio-image reveal-right">
            <Image
              src="/studio.jpg"
              alt={
                locale === 'hr'
                  ? 'M Street Music tonski studio Krapina - profesionalna oprema za snimanje glazbe'
                  : 'M Street Music recording studio in Krapina, Croatia — hybrid analog and digital production environment'
              }
              width={800}
              height={534}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <StudioGallery locale={locale} />
      </div>
    </section>
  );
}
