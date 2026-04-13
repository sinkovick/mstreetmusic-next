'use client';

/**
 * Markdown-to-JSX renderer for blog posts.
 * Light theme (white bg) — adapted from RoastYourMix style.
 * Handles: headings (## / ###), bold, links, images, lists (ul/ol/checklist),
 * horizontal rules, and callout boxes (tip/warning/checklist keywords in headings).
 */

export default function BlogContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let currentList: string[] = [];
  let listType: 'ul' | 'ol' | 'checklist' | null = null;
  let key = 0;
  let isFirstSection = true;

  const flushList = () => {
    if (currentList.length > 0 && listType) {
      if (listType === 'checklist') {
        elements.push(
          <ul key={key++} style={{ listStyle: 'none', padding: '0 0 0 2px', margin: '0.6rem 0' }}>
            {currentList.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.2rem 0' }}>
                <span style={{ color: '#16a34a', flexShrink: 0, marginTop: '1px', fontSize: '0.85rem' }}>&#10003;</span>
                <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>{formatInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      } else if (listType === 'ol') {
        elements.push(
          <ol key={key++} style={{ listStyle: 'none', padding: '0 0 0 2px', margin: '0.6rem 0' }}>
            {currentList.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.25rem 0' }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(184,149,79,0.1)',
                    color: '#b8954f',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>{formatInline(item)}</span>
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={key++} style={{ listStyle: 'none', padding: '0 0 0 2px', margin: '0.6rem 0' }}>
            {currentList.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.15rem 0' }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'rgba(184,149,79,0.6)',
                    marginTop: '8px',
                  }}
                />
                <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>{formatInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Horizontal rule
    if (line.trim() === '---') {
      flushList();
      elements.push(
        <hr key={key++} style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '2rem 0' }} />
      );
      continue;
    }

    // Images
    const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    if (imageMatch) {
      flushList();
      elements.push(
        <figure key={key++} style={{ margin: '1.25rem 0', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
          <img
            src={imageMatch[2]}
            alt={imageMatch[1]}
            style={{ width: '100%', display: 'block' }}
          />
          {imageMatch[1] && (
            <figcaption
              style={{
                fontSize: '0.75rem',
                color: '#64748b',
                padding: '0.4rem 0.75rem',
                background: '#f8fafc',
                textAlign: 'center',
              }}
            >
              {imageMatch[1]}
            </figcaption>
          )}
        </figure>
      );
    } else if (line.startsWith('## ')) {
      flushList();
      const headingText = line.slice(3);
      const headingId = headingText
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đ]/g, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const callout = getCalloutType(headingText);

      if (!isFirstSection) {
        elements.push(
          <div key={key++} style={{ borderTop: '1px solid #f1f5f9', margin: '1.75rem 0' }} />
        );
      }
      isFirstSection = false;

      if (callout) {
        const styles = {
          tip: { borderColor: '#3b82f6', background: '#eff6ff', textColor: '#1d4ed8' },
          warning: { borderColor: '#f59e0b', background: '#fffbeb', textColor: '#92400e' },
          checklist: { borderColor: '#22c55e', background: '#f0fdf4', textColor: '#15803d' },
        };
        const icons = { tip: '\u{1F4A1}', warning: '\u26A0\uFE0F', checklist: '\u2705' };

        elements.push(
          <div
            key={key++}
            id={headingId}
            style={{
              borderLeft: `3px solid ${styles[callout].borderColor}`,
              background: styles[callout].background,
              borderRadius: '8px',
              padding: '0.85rem 1.1rem',
              margin: '0.75rem 0',
              scrollMarginTop: '100px',
            }}
          >
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: styles[callout].textColor, display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              {icons[callout]} {headingText}
            </h2>
          </div>
        );
      } else {
        elements.push(
          <h2
            key={key++}
            id={headingId}
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#1e293b',
              marginTop: '0.25rem',
              marginBottom: '0.5rem',
              scrollMarginTop: '100px',
            }}
          >
            {headingText}
          </h2>
        );
      }
    } else if (line.startsWith('### ')) {
      flushList();
      const subHeading = line.slice(4);
      const callout = getCalloutType(subHeading);

      if (callout && (callout === 'warning' || callout === 'tip')) {
        const c = callout;
        const styles = {
          tip: { borderColor: '#3b82f6', background: '#eff6ff', textColor: '#1d4ed8' },
          warning: { borderColor: '#f59e0b', background: '#fffbeb', textColor: '#92400e' },
        };
        const icons = { tip: '\u{1F4A1}', warning: '\u26A0\uFE0F' };

        elements.push(
          <div
            key={key++}
            style={{
              borderLeft: `3px solid ${styles[c].borderColor}`,
              background: styles[c].background,
              borderRadius: '8px',
              padding: '0.65rem 0.9rem',
              margin: '0.6rem 0',
            }}
          >
            <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: styles[c].textColor, display: 'flex', alignItems: 'center', gap: '0.4rem', margin: 0 }}>
              {icons[c]} {subHeading}
            </h3>
          </div>
        );
      } else {
        elements.push(
          <h3
            key={key++}
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#1e293b',
              marginTop: '1rem',
              marginBottom: '0.35rem',
            }}
          >
            {subHeading}
          </h3>
        );
      }
    } else if (line.startsWith('- [ ] ')) {
      if (listType !== 'checklist') {
        flushList();
        listType = 'checklist';
      }
      currentList.push(line.slice(6));
    } else if (line.startsWith('- ')) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
      }
      currentList.push(line.slice(2));
    } else if (line.match(/^\d+\./)) {
      if (listType !== 'ol') {
        flushList();
        listType = 'ol';
      }
      currentList.push(line.replace(/^\d+\.\s*/, ''));
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={key++} style={{ color: '#475569', margin: '0.5rem 0', lineHeight: 1.75, fontSize: '0.88rem' }}>
          {formatInline(line)}
        </p>
      );
    }
  }

  flushList();

  return <>{elements}</>;
}

function getCalloutType(text: string): 'tip' | 'warning' | 'checklist' | null {
  const lower = text.toLowerCase();
  if (lower.includes('checklist') || lower.includes('bonus')) return 'checklist';
  if (lower.includes('tip') || lower.includes('savjet') || lower.includes('secret') || lower.includes('tajna')) return 'tip';
  if (lower.includes('warning') || lower.includes('upozorenje') || lower.includes('greška') || lower.includes('mistake') || lower.includes('problem')) return 'warning';
  return null;
}

function formatInline(text: string): (string | JSX.Element)[] {
  const parts: (string | JSX.Element)[] = [];
  let remaining = text;
  let keyCounter = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    const boldIdx = boldMatch?.index ?? Infinity;
    const linkIdx = linkMatch?.index ?? Infinity;

    if (boldIdx === Infinity && linkIdx === Infinity) {
      parts.push(remaining);
      break;
    }

    if (boldIdx <= linkIdx && boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) {
        parts.push(remaining.slice(0, boldMatch.index));
      }
      parts.push(
        <strong key={keyCounter++} style={{ fontWeight: 600, color: '#1e293b' }}>
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
    } else if (linkMatch && linkMatch.index !== undefined) {
      if (linkMatch.index > 0) {
        parts.push(remaining.slice(0, linkMatch.index));
      }
      parts.push(
        <a
          key={keyCounter++}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#b8954f', textDecoration: 'underline', textUnderlineOffset: '2px' }}
        >
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
    }
  }

  return parts;
}
