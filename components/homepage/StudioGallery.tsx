'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const PORTRAIT_INDICES = new Set([1, 5, 6, 8, 9, 10, 12, 14, 22, 23, 27, 29]);

function buildImages(localeAlt: (n: number) => string): GalleryImage[] {
  return Array.from({ length: 29 }, (_, i) => {
    const n = i + 1;
    const num = String(n).padStart(2, '0');
    const isPortrait = PORTRAIT_INDICES.has(n);
    return {
      src: `/images/gallery/studio-${num}.jpg`,
      alt: localeAlt(n),
      width: 1920,
      height: isPortrait ? 2880 : 1280,
    };
  });
}

const galleryImages: { hr: GalleryImage[]; en: GalleryImage[] } = {
  hr: buildImages((n) => `Tonski studio M Street Music u Krapini - fotografija prostora i opreme (${n}/29)`),
  en: buildImages((n) => `M Street Music recording studio in Krapina - studio space and gear (photo ${n}/29)`),
};

interface StudioGalleryProps {
  locale?: 'hr' | 'en';
}

export default function StudioGallery({ locale = 'hr' }: StudioGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = galleryImages[locale];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'start',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    update();
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);
    emblaApi.on('scroll', update);
    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
      emblaApi.off('scroll', update);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const currentImage = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <>
      <div className="studio-gallery-wrap">
        <div className="studio-gallery-viewport" ref={emblaRef}>
          <div className="studio-gallery-track">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className="studio-gallery-slide"
                onClick={() => setLightboxIndex(i)}
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 768px) 70vw, 480px"
                  style={{ objectFit: 'cover', height: '100%', width: 'auto', display: 'block' }}
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
        <button
          className="studio-gallery-arrow studio-gallery-arrow-prev"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label={locale === 'hr' ? 'Prethodna' : 'Previous'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="studio-gallery-arrow studio-gallery-arrow-next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label={locale === 'hr' ? 'Sljedeća' : 'Next'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {currentImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            &times;
          </button>
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <div className="lightbox-image-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={currentImage.width}
              height={currentImage.height}
              sizes="90vw"
              style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '85vh', width: 'auto', height: 'auto' }}
              loading="lazy"
            />
            <div className="lightbox-counter">
              {lightboxIndex! + 1} / {images.length}
            </div>
          </div>
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
