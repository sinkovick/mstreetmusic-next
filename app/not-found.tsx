import Link from 'next/link';
import { Navigation, Footer } from '@/components/homepage';
import '@/styles/homepage.css';

export default function NotFound() {
  return (
    <div className="homepage">
      <Navigation locale="hr" />

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem 1rem',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              color: '#d4a843',
              lineHeight: 1,
              marginBottom: '0.5rem',
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.75rem',
            }}
          >
            Stranica nije pronađena
          </h2>
          <p
            style={{
              color: '#a1a1aa',
              fontSize: '1rem',
              marginBottom: '2rem',
              maxWidth: '400px',
              margin: '0 auto 2rem',
            }}
          >
            Stranica koju tražite ne postoji ili je premještena.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                background: '#d4a843',
                color: '#000',
                padding: '0.7rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              Početna stranica
            </Link>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#d4a843',
                padding: '0.7rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
                border: '1px solid #d4a843',
              }}
            >
              Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer locale="hr" />
    </div>
  );
}
