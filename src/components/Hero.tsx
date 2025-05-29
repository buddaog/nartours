import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const Hero: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/50 to-slate-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex h-full w-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="font-quicksand mb-6 text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            {t.discoverAzerbaijan}
          </h1>
          <p className="mb-8 text-lg text-white/90 drop-shadow md:text-xl">
            {t.experienceBlend}
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="#tours"
              className="w-full rounded-lg bg-rose-500 px-8 py-3 text-center font-medium text-white shadow-lg transition-all hover:bg-rose-600 sm:w-auto"
            >
              {t.exploreTours}
            </a>
            <a
              href="#contact"
              className="w-full rounded-lg border-2 border-white/20 bg-white/10 px-8 py-3 text-center font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              {t.contactUs}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <p className="mb-2 text-sm font-light text-white">{t.scrollDown}</p>
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};