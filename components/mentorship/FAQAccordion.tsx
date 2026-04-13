'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Je li mentorstvo grupno ili individualno?',
    answer:
      'Svi mentorski programi su 100% individualni — privatne sesije jedan na jedan. Ne nudim grupne tečajeve niti masovne online kurseve.',
  },
  {
    question: 'Kome je mentorstvo namijenjeno?',
    answer:
      'Programi su namijenjeni početnicima, naprednim glazbenicima, producentima i skladateljima. Svaki kandidat prolazi selekcijski proces.',
  },
  {
    question: 'Koliko traje mentorski program?',
    answer:
      'Mentorstvo je dugoročno i prilagođeno ciljevima polaznika (3, 6 ili 12+ mjeseci).',
  },
  {
    question: 'Održavaju li se sesije online ili uživo?',
    answer:
      'Sesije su dostupne online i uživo u studiju, ovisno o programu i dostupnosti termina.',
  },
  {
    question: 'Objavljujete li cijene javno?',
    answer:
      'Ne. Cijene su individualne i ovise o razini, ciljevima i intenzitetu mentorstva.',
  },
  {
    question: 'Mogu li djeca pohađati mentorstvo?',
    answer:
      'Foundations program je prilagođen mladim glazbenicima uz individualni pristup.',
  },
  {
    question: 'Koliko je mjesta dostupno?',
    answer:
      'Broj polaznika je ograničen kako bi se osigurala maksimalna kvaliteta mentorstva.',
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item${activeIndex === index ? ' active' : ''}`}
        >
          <button
            className="faq-question"
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
          >
            {item.question}
            <span className="faq-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
