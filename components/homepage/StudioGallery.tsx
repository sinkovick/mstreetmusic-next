'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface GalleryImage {
  thumb: string;
  full: string;
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
      thumb: `/images/gallery/studio-${num}-thumb.webp`,
      full: `/images/gallery/studio-${num}.webp`,
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

  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: 'start',
    skipSnaps: true,
  });

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
    // Preload neighboring full images for instant nav
    const nextIdx = (lightboxIndex + 1) % images.length;
    const prevIdx = (lightboxIndex - 1 + images.length) % images.length;
    [nextIdx, prevIdx].forEach((idx) => {
      const preload = new window.Image();
      preload.src = images[idx].full;
    });
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev, images]);

  // Preload full image on thumb hover - so click opens instantly
  const onSlideMouseEnter = useCallback((i: number) => {
    const preload = new window.Image();
    preload.src = images[i].full;
  }, [images]);

  const currentImage = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <>
      <div className="studio-gallery-viewport" ref={emblaRef}>
        <div className="studio-gallery-track">
          {images.map((img, i) => (
            <button
              key={img.thumb}
              type="button"
              className="studio-gallery-slide"
              onClick={() => setLightboxIndex(i)}
              onMouseEnter={() => onSlideMouseEnter(i)}
              aria-label={img.alt}
            >
              <Image
                src={img.thumb}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage.full}
              alt={currentImage.alt}
              width={currentImage.width}
              height={currentImage.height}
              style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '85vh', width: 'auto', height: 'auto', display: 'block' }}
              decoding="async"
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
