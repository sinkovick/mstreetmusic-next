'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsSliderProps {
  locale?: 'hr' | 'en';
}

export default function TestimonialsSlider({ locale = 'hr' }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = locale === 'hr'
    ? [
        { quote: '"Rad s Kristijanom na mom albumu bio je nevjerojatno iskustvo. Razumio je moju viziju od prvog dana i oživio svaku pjesmu s pažnjom i preciznošću. Krajnji rezultat nadmašio je sva moja očekivanja."', author: 'David Temelkov', role: 'Produkcija Albuma' },
        { quote: '"Profesionalno, brzo, a kvaliteta zvuka je izvanredna. Naši singlovi zvuče točno onako kako smo zamislili — snažno, čisto i spremno za radio. Definitivno se vraćamo po još."', author: 'Šarmeri', role: 'Produkcija 2 Singla' },
        { quote: '"Kristijan je moju obradu pretvorio u nešto posebno. Njegove ideje za aranžman i pažnja na detalje napravile su svu razliku. Toplo preporučujem za svaki ozbiljan projekt."', author: 'Danijel Kranjec', role: 'Produkcija Obrade' },
        { quote: '"Atmosfera u studiju je kreativna i opuštena, ali rad je ozbiljno profesionalan. Naš singl ispao je prekrasan — čist, moderan i vjeran našem zvuku."', author: 'Iva i Ella Ranogajec', role: 'Produkcija Singla' },
        { quote: '"Naš promotivni materijal sada zvuči nevjerojatno. Kristijan je savršeno uhvatio našu live energiju i dao nam audio koji istinski predstavlja ono što radimo. Odlična komunikacija tijekom cijelog projekta."', author: 'Grupa Motiv', role: 'Promo Audio za Svadbeni Bend' },
      ]
    : [
        { quote: '"Working with Kristijan on my album was an incredible experience. He understood my vision from day one and brought every song to life with care and precision. The final result exceeded all my expectations."', author: 'David Temelkov', role: 'Album Production' },
        { quote: '"Professional, fast, and the sound quality is extraordinary. Our singles sound exactly as we envisioned — powerful, clean, and radio-ready. We\'re definitely coming back for more."', author: 'Šarmeri', role: '2 Singles Production' },
        { quote: '"Kristijan turned my cover into something special. His arrangement ideas and attention to detail made all the difference. Warmly recommended for any serious project."', author: 'Danijel Kranjec', role: 'Cover Production' },
        { quote: '"The studio atmosphere is creative and relaxed, but the work is seriously professional. Our single turned out beautiful — clean, modern, and true to our sound."', author: 'Iva & Ella Ranogajec', role: 'Single Production' },
        { quote: '"Our promo material now sounds incredible. Kristijan perfectly captured our live energy and gave us audio that truly represents what we do. Excellent communication throughout."', author: 'Grupa Motiv', role: 'Promo Audio for Wedding Band' },
      ];

  const getSlidesPerView = useCallback(() => {
    if (!mounted) return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }, [mounted]);

  const getMaxIndex = useCallback(() => {
    return Math.max(0, testimonials.length - getSlidesPerView());
  }, [getSlidesPerView, testimonials.length]);

  const updateSlider = useCallback(() => {
    const track = trackRef.current;
    const slider = sliderRef.current;
    if (!track || !slider) return;

    const slidesPerView = getSlidesPerView();
    const gap = 24;
    const sliderWidth = slider.offsetWidth;
    const cardWidth = (sliderWidth - (gap * (slidesPerView - 1))) / slidesPerView;

    const cards = track.querySelectorAll('.testimonial-card');
    cards.forEach((card) => {
      (card as HTMLElement).style.flex = `0 0 ${cardWidth}px`;
    });

    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex, getSlidesPerView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = getMaxIndex();
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [getMaxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = getMaxIndex();
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }, [getMaxIndex]);

  // Mark as mounted (client-only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update slider on index or resize
  useEffect(() => {
    updateSlider();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const maxIndex = getMaxIndex();
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
        updateSlider();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [updateSlider, getMaxIndex]);

  // Auto-slide
  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [nextSlide]);

  const pauseAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  const resumeAutoSlide = () => {
    autoSlideRef.current = setInterval(nextSlide, 5000);
  };

  // Always render 3 dots on server (maxIndex for 3 slides per view = 5 - 3 = 2, so 3 dots)
  // After mount, recalculate based on actual viewport
  const maxIndex = getMaxIndex();
  const dots = Array.from({ length: maxIndex + 1 }, (_, i) => i);

  return (
    <section className="testimonials">
      <div className="section-container">
        <h2 className="section-title reveal">
          {locale === 'hr' ? 'Što klijenti kažu' : 'What Clients Say'}
        </h2>
        <p className="section-subtitle reveal">
          {locale === 'hr'
            ? 'Glazbenici i bendovi koji su nam povjerili svoj zvuk'
            : 'Musicians and bands who trusted us with their sound'}
        </p>
        <div className="testimonials-slider-wrapper reveal-scale">
          <button className="slider-btn slider-prev" aria-label="Previous" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div
            className="testimonials-slider"
            ref={sliderRef}
            onMouseEnter={pauseAutoSlide}
            onMouseLeave={resumeAutoSlide}
          >
            <div className="testimonials-track" ref={trackRef}>
              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.author}>
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <h3 className="testimonial-author-name">{t.author}</h3>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="slider-btn slider-next" aria-label="Next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div className="slider-dots">
          {dots.map((i) => (
            <button
              key={i}
              className={`slider-dot${i === currentIndex ? ' active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
