import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { TourCard } from './TourCard';
import { tours } from '../data/tours';

export const Tours: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">{t.popularTours}</h2>
          <div className="h-1 w-20 bg-rose-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600">{t.toursDescription}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              image={tour.image}
              title={tour.title}
              description={tour.description}
              details={tour.details}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white border border-rose-500 text-rose-500 rounded-lg hover:bg-rose-50 transition-colors font-medium"
          >
            {t.viewAllTours}
          </a>
        </div>
      </div>
    </section>
  );
};