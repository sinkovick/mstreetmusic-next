'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { PojmovnikTerm, PojmovnikCategory } from '@/data/pojmovnik';

const CATEGORIES: { key: PojmovnikCategory | 'svi'; label: string }[] = [
  { key: 'svi', label: 'Svi' },
  { key: 'snimanje', label: 'Snimanje' },
  { key: 'mixing', label: 'Mixing' },
  { key: 'mastering', label: 'Mastering' },
  { key: 'oprema', label: 'Oprema' },
  { key: 'osnove', label: 'Osnove' },
];

const HR_ALPHABET = 'ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽ'.split('');

interface Props {
  pojmovi: PojmovnikTerm[];
}

export default function PojmovnikGrid({ pojmovi }: Props) {
  const [activeCategory, setActiveCategory] = useState<PojmovnikCategory | 'svi'>('svi');
  const [search, setSearch] = useState('');
  const reportedTerms = useRef(new Set<string>());

  // Filter by category
  const byCategory = activeCategory === 'svi'
    ? pojmovi
    : pojmovi.filter((p) => p.category === activeCategory);

  // Filter by search query (match term, englishTerm, definition, explanation, studioContext, FAQ)
  const searchLower = search.toLowerCase().trim();
  const filtered = searchLower
    ? byCategory.filter((p) =>
        p.term.toLowerCase().includes(searchLower) ||
        (p.englishTerm && p.englishTerm.toLowerCase().includes(searchLower)) ||
        p.definition.toLowerCase().includes(searchLower) ||
        p.explanation.toLowerCase().includes(searchLower) ||
        p.studioContext.toLowerCase().includes(searchLower) ||
        p.faq.some((f) => f.q.toLowerCase().includes(searchLower) || f.a.toLowerCase().includes(searchLower))
      )
    : byCategory;

  // Sort alphabetically (Croatian locale)
  const sorted = [...filtered].sort((a, b) => a.term.localeCompare(b.term, 'hr'));

  // Get active letters from filtered results
  const activeLetters = new Set(sorted.map((p) => p.term.charAt(0).toUpperCase()));

  // Group by first letter
  const grouped = sorted.reduce<Record<string, PojmovnikTerm[]>>((acc, pojam) => {
    const letter = pojam.term.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(pojam);
    return acc;
  }, {});

  const sortedLetters = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'hr'));

  // Track missing term searches (debounced, fire-and-forget)
  useEffect(() => {
    if (searchLower.length < 3 || sorted.length > 0) return;
    if (reportedTerms.current.has(searchLower)) return;

    const timer = setTimeout(() => {
      if (reportedTerms.current.has(searchLower)) return;
      reportedTerms.current.add(searchLower);
      fetch('/api/pojmovnik/missing-term', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ term: searchLower }),
      }).catch(() => {});
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchLower, sorted.length]);

  return (
    <>
      {/* Search Bar */}
      <div className="pojmovnik-search">
        <div className="pojmovnik-search-inner">
          <svg className="pojmovnik-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="pojmovnik-search-input"
            placeholder="Pretraži pojmove..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="pojmovnik-search-clear"
              onClick={() => setSearch('')}
              aria-label="Obriši pretragu"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="pojmovnik-filter-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`pojmovnik-filter-tab${activeCategory === cat.key ? ' pojmovnik-filter-tab--active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Alphabet Navigation */}
      <nav className="pojmovnik-alphabet-nav" aria-label="Abecedna navigacija">
        {HR_ALPHABET.map((letter) => {
          const isActive = activeLetters.has(letter);
          return (
            <a
              key={letter}
              href={isActive ? `#slovo-${letter.toLowerCase()}` : undefined}
              className={`pojmovnik-alphabet-link${!isActive ? ' pojmovnik-alphabet-link--disabled' : ''}`}
              aria-disabled={!isActive}
              onClick={(e) => {
                if (!isActive) {
                  e.preventDefault();
                  return;
                }
                e.preventDefault();
                const el = document.getElementById(`slovo-${letter.toLowerCase()}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {letter}
            </a>
          );
        })}
      </nav>

      {/* Terms grouped by letter */}
      <div className="pojmovnik-listing-content">
        {sortedLetters.map((letter) => (
          <section key={letter} className="pojmovnik-letter-group" id={`slovo-${letter.toLowerCase()}`}>
            <h2 className="pojmovnik-letter-heading">{letter}</h2>
            <div className="pojmovnik-listing-grid">
              {grouped[letter].map((pojam) => (
                <Link
                  key={pojam.slug}
                  href={`/pojmovnik/${pojam.slug}`}
                  className="pojmovnik-listing-card"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <article>
                    <h3 className="pojmovnik-listing-card-term">{pojam.term}</h3>
                    {pojam.englishTerm && (
                      <p className="pojmovnik-listing-card-english">{pojam.englishTerm}</p>
                    )}
                    <p className="pojmovnik-listing-card-def">{pojam.definition}</p>
                    <span className="pojmovnik-listing-card-link">
                      Saznaj više &rsaquo;
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {sorted.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--gray-500)', padding: '60px 24px' }}>
            {searchLower ? `Nema rezultata za "${search}".` : 'Nema pojmova u ovoj kategoriji.'}
          </p>
        )}
      </div>
    </>
  );
}
