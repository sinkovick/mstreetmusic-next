'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryImages: { hr: GalleryImage[]; en: GalleryImage[] } = {
  hr: [
    { src: '/images/gallery/control-room.jpg', alt: 'Control room - radna stanica s monitorom i analognom opremom', width: 1600, height: 1066 },
    { src: '/images/gallery/mikrofoni.jpg', alt: 'Kolekcija profesionalnih mikrofona - Neumann, Lewitt, UA Sphere', width: 1600, height: 2400 },
    { src: '/images/gallery/control-room-front.jpg', alt: 'Control room frontalni pogled - zvučnici, monitor i oprema', width: 1600, height: 1066 },
    { src: '/images/gallery/live-room.jpg', alt: 'Live room za snimanje - mikrofon i akustički paneli', width: 1600, height: 2400 },
    { src: '/images/gallery/ssl-fusion-detalj.jpg', alt: 'SSL Fusion analogni procesor - detalj šarenih knobova', width: 1600, height: 1066 },
    { src: '/images/gallery/gitare.jpg', alt: 'Kolekcija gitara na stalku - električne i akustična', width: 1600, height: 2399 },
    { src: '/images/gallery/mastering-rack.jpg', alt: 'Mastering rack - analogna oprema i Mac Studio', width: 1600, height: 1066 },
    { src: '/images/gallery/lounge.jpg', alt: 'Lounge zona - plavi kauč za opuštanje', width: 1600, height: 1066 },
    { src: '/images/gallery/pedalboard.jpg', alt: 'Pedalboard s efektima - Kemper, OCD, Boss', width: 1600, height: 2400 },
    { src: '/images/gallery/klavijatura.jpg', alt: 'Klavijatura u studiju - crno-bijeli moody shot', width: 1600, height: 2400 },
  ],
  en: [
    { src: '/images/gallery/control-room.jpg', alt: 'Control room - workstation with monitor and analog gear', width: 1600, height: 1066 },
    { src: '/images/gallery/mikrofoni.jpg', alt: 'Professional microphone collection - Neumann, Lewitt, UA Sphere', width: 1600, height: 2400 },
    { src: '/images/gallery/control-room-front.jpg', alt: 'Control room front view - speakers, monitor and gear', width: 1600, height: 1066 },
    { src: '/images/gallery/live-room.jpg', alt: 'Live recording room - microphone and acoustic panels', width: 1600, height: 2400 },
    { src: '/images/gallery/ssl-fusion-detalj.jpg', alt: 'SSL Fusion analog processor - colorful knobs detail', width: 1600, height: 1066 },
    { src: '/images/gallery/gitare.jpg', alt: 'Guitar collection on stand - electric and acoustic', width: 1600, height: 2399 },
    { src: '/images/gallery/mastering-rack.jpg', alt: 'Mastering rack - analog gear and Mac Studio', width: 1600, height: 1066 },
    { src: '/images/gallery/lounge.jpg', alt: 'Lounge area - blue couch for relaxing', width: 1600, height: 1066 },
    { src: '/images/gallery/pedalboard.jpg', alt: 'Effects pedalboard - Kemper, OCD, Boss', width: 1600, height: 2400 },
    { src: '/images/gallery/klavijatura.jpg', alt: 'Studio keyboard - black and white moody shot', width: 1600, height: 2400 },
  ],
};

interface StudioGalleryProps {
  locale?: 'hr' | 'en';
}

export default function StudioGallery({ locale = 'hr' }: StudioGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = galleryImages[locale];

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
      <div className="studio-gallery">
        {images.map((img, i) => (
          <button
            key={img.src}
            className="studio-gallery-thumb"
            onClick={() => setLightboxIndex(i)}
            aria-label={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              sizes="(max-width: 768px) 33vw, 20vw"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </button>
        ))}
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
