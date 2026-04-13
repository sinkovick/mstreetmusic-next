import Link from 'next/link';

interface MentorshipBannerProps {
  locale?: 'hr' | 'en';
}

export default function MentorshipBanner({ locale = 'hr' }: MentorshipBannerProps) {
  return (
    <section className="mentorship-banner">
      <div className="mentorship-badge reveal">{locale === 'hr' ? 'Ekskluzivni privatni programi' : 'Exclusive Private Programs'}</div>
      <h2 className="reveal">{locale === 'hr' ? 'Privatno glazbeno mentorstvo' : 'Private Music Mentorship'}</h2>
      <p className="reveal">
        {locale === 'hr'
          ? 'Ekskluzivni individualni mentorski programi za glazbenike, producente i autore koji žele razvoj na profesionalnoj razini.'
          : 'Exclusive private mentorship programs for musicians, producers and songwriters seeking professional development.'}
      </p>
      <Link href="/mentorstvo" className="btn-gold reveal">
        {locale === 'hr' ? 'Saznaj više' : 'Learn More'}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </section>
  );
}
