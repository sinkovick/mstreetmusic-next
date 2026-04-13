'use client';

import { useEffect, useRef } from 'react';

interface StatsSectionProps {
  locale?: 'hr' | 'en';
}

export default function StatsSection({ locale = 'hr' }: StatsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const songsRef = useRef<HTMLDivElement>(null);
  const collabsRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animateCounter = (el: HTMLDivElement, target: number) => {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const update = () => {
        current += increment;
        if (current < target) {
          el.textContent = Math.floor(current) + '+';
          requestAnimationFrame(update);
        } else {
          el.textContent = target + '+';
        }
      };

      el.textContent = '0';
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            if (yearsRef.current) animateCounter(yearsRef.current, 10);
            if (songsRef.current) animateCounter(songsRef.current, 50);
            if (collabsRef.current) animateCounter(collabsRef.current, 20);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const stats = locale === 'hr'
    ? [
        { ref: yearsRef, value: '10+', label: 'Godina iskustva' },
        { ref: songsRef, value: '50+', label: 'Proizvedenih pjesama' },
        { ref: collabsRef, value: '20+', label: 'Suradnji s glazbenicima' },
        { ref: null, value: 'SSL', label: 'Certificirani inženjer' },
      ]
    : [
        { ref: yearsRef, value: '10+', label: 'Years of Experience' },
        { ref: songsRef, value: '50+', label: 'Songs Produced' },
        { ref: collabsRef, value: '20+', label: 'Musician Collaborations' },
        { ref: null, value: 'SSL', label: 'Certified Engineer' },
      ];

  return (
    <section className="stats" ref={sectionRef}>
      <h2 className="sr-only">{locale === 'hr' ? 'Statistike' : 'Statistics'}</h2>
      <div className="stats-container stagger-children">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-value" ref={stat.ref}>{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
