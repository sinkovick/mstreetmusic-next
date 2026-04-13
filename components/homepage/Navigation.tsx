'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavigationProps {
  locale?: 'hr' | 'en';
}

export default function Navigation({ locale = 'hr' }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Non-anchor links: let browser navigate normally
    if (!href.includes('#')) {
      setMobileOpen(false);
      return;
    }

    // Extract the hash part
    const hash = href.includes('#') ? '#' + href.split('#')[1] : href;

    // Check if we're on the homepage
    const isHomepage = window.location.pathname === '/' || window.location.pathname === '/en';

    if (isHomepage) {
      // On homepage: smooth scroll to section
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // On subpages: let browser navigate to /#section (default behavior, no preventDefault)

    setMobileOpen(false);
  };

  const homeBase = locale === 'en' ? '/en' : '/';

  const links = locale === 'hr'
    ? [
        { href: '/#home', label: 'Početna' },
        { href: '/#services', label: 'Usluge' },
        { href: '/#studio', label: 'Studio' },
        { href: '/#contact', label: 'Kontakt' },
      ]
    : [
        { href: '/en#home', label: 'Home' },
        { href: '/en#services', label: 'Services' },
        { href: '/en#studio', label: 'Studio' },
        { href: '/en#contact', label: 'Contact' },
      ];

  const langSwitchHref = locale === 'hr' ? '/en' : '/';
  const langSwitchLabel = locale === 'hr' ? 'EN' : 'HR';

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-container">
        <a href={homeBase} className="logo">
          <Image src="/logo.png" alt="M Street Music" className="logo-img" width={40} height={40} />
          M STREET MUSIC
        </a>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className={`nav-links${mobileOpen ? ' active' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="lang-switch">
            <a href={langSwitchHref} title={langSwitchLabel === 'EN' ? 'English' : 'Hrvatski'}>
              {langSwitchLabel}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
