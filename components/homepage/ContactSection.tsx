'use client';

import { useState, useRef, useEffect } from 'react';

interface ContactSectionProps {
  locale?: 'hr' | 'en';
}

export default function ContactSection({ locale = 'hr' }: ContactSectionProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const lastSubmitRef = useRef(0);
  const timestampRef = useRef('');

  useEffect(() => {
    timestampRef.current = String(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Rate limit: 30s between submissions
    if (Date.now() - lastSubmitRef.current < 30000 && lastSubmitRef.current > 0) {
      setStatus('error');
      setStatusMessage(
        locale === 'hr'
          ? 'Molimo pričekajte prije ponovnog slanja.'
          : 'Please wait before sending again.'
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('website')) {
      setStatus('success');
      setStatusMessage(
        locale === 'hr'
          ? 'Hvala! Poruka je uspješno poslana.'
          : 'Thank you! Message sent successfully.'
      );
      form.reset();
      return;
    }

    setSubmitting(true);
    setStatus('loading');
    setStatusMessage(
      locale === 'hr' ? 'Šaljem poruku...' : 'Sending message...'
    );

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          service: formData.get('service') || '',
          message: formData.get('message'),
          timestamp: timestampRef.current,
          website: formData.get('website'),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage(
          locale === 'hr'
            ? 'Hvala! Poruka je uspješno poslana. Javit ćemo vam se uskoro.'
            : 'Thank you! Message sent successfully. We will get back to you soon.'
        );
        form.reset();
        lastSubmitRef.current = Date.now();
        timestampRef.current = String(Date.now());
      } else {
        throw new Error(result.error || 'Error');
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        locale === 'hr'
          ? 'Greška pri slanju poruke. Molimo pokušajte ponovno ili nas kontaktirajte direktno na info@mstreetmusic.hr'
          : 'Error sending message. Please try again or contact us directly at info@mstreetmusic.hr'
      );
    }

    setSubmitting(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <h2 className="section-title reveal">
          {locale === 'hr' ? 'Kontakt' : 'Contact'}
        </h2>
        <p className="section-subtitle reveal">
          {locale === 'hr'
            ? 'Spreman za novi projekt? Javite se.'
            : 'Ready for a new project? Get in touch.'}
        </p>
        <div className="contact-grid">
          <form className="contact-form reveal-left" onSubmit={handleSubmit}>
            <label htmlFor="cf-name" className="sr-only">
              {locale === 'hr' ? 'Vaše ime' : 'Your Name'}
            </label>
            <input
              type="text"
              name="name"
              id="cf-name"
              className="form-input"
              placeholder={locale === 'hr' ? 'Vaše ime' : 'Your Name'}
              required
            />
            <label htmlFor="cf-email" className="sr-only">
              {locale === 'hr' ? 'Email adresa' : 'Email Address'}
            </label>
            <input
              type="email"
              name="email"
              id="cf-email"
              className="form-input"
              placeholder={locale === 'hr' ? 'Email adresa' : 'Email Address'}
              required
            />
            <label htmlFor="cf-service" className="sr-only">
              {locale === 'hr' ? 'Vrsta usluge' : 'Service Type'}
            </label>
            <select
              name="service"
              id="cf-service"
              className="form-input"
              defaultValue=""
            >
              <option value="" disabled>
                {locale === 'hr' ? 'Vrsta usluge (opcionalno)' : 'Service type (optional)'}
              </option>
              <option value="snimanje">{locale === 'hr' ? 'Snimanje' : 'Recording'}</option>
              <option value="mixing">Mixing</option>
              <option value="mastering">Mastering</option>
              <option value="mentorstvo">{locale === 'hr' ? 'Mentorstvo' : 'Mentorship'}</option>
              <option value="ostalo">{locale === 'hr' ? 'Ostalo / ne znam još' : 'Other / not sure yet'}</option>
            </select>
            <label htmlFor="cf-message" className="sr-only">
              {locale === 'hr' ? 'Poruka' : 'Message'}
            </label>
            <textarea
              name="message"
              id="cf-message"
              className="form-input"
              placeholder={
                locale === 'hr'
                  ? 'Opišite svoj projekt...'
                  : 'Describe your project...'
              }
              required
            />
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              aria-hidden="true"
              aria-label="Do not fill"
              style={{
                position: 'absolute',
                left: '-9999px',
                top: '-9999px',
                opacity: 0,
                height: 0,
                width: 0,
                zIndex: -1,
              }}
              tabIndex={-1}
              autoComplete="off"
            />
            <input type="hidden" name="timestamp" value={timestampRef.current} suppressHydrationWarning />
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting
                ? (locale === 'hr' ? 'Šaljem...' : 'Sending...')
                : (locale === 'hr' ? 'Pošalji poruku' : 'Send Message')}
            </button>
            {status !== 'idle' && (
              <div className={`form-status ${status}`}>{statusMessage}</div>
            )}
          </form>
          <div className="contact-info reveal-right">
            <h3>{locale === 'hr' ? 'Kontakt informacije' : 'Contact Information'}</h3>
            <div className="contact-details">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@mstreetmusic.hr">info@mstreetmusic.hr</a>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+385913050910">+385 91 305 0910</a>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a href="https://maps.google.com/maps?q=M+Street+Music+Krapina+Magistratska+21" target="_blank" rel="noopener noreferrer">Magistratska 21/1, 49000 Krapina, Croatia</a>
              </div>
            </div>
            <div className="contact-divider" />
            <div className="owner-info">
              <h4>Kristijan Sinković</h4>
              <p>{locale === 'hr' ? 'Godine: 34 | Iskustvo: 20 godina' : 'Age: 34 | Experience: 20 years'}</p>
              <p>{locale === 'hr' ? 'Magistar glazbe (Muzička akademija, Sveučilište u Zagrebu)' : 'Master of Music (Academy of Music, University of Zagreb)'}</p>
              <p>{locale === 'hr' ? 'SSL Console certificirani inženjer' : 'SSL Console Certified Engineer'}</p>
            </div>
          </div>
        </div>
        <div className="contact-map reveal" style={{ marginTop: '48px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          <iframe
            src="https://maps.google.com/maps?q=M+Street+Music+Krapina+Magistratska+21&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={locale === 'hr' ? 'M Street Music studio lokacija na karti' : 'M Street Music studio location on map'}
          />
        </div>
      </div>
    </section>
  );
}
