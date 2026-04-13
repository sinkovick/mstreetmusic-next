'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const selector =
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children';

    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -120px 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
