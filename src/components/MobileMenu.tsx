import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center rounded-md p-2 text-gray-100 transition-colors hover:text-rose-400"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-16 z-50 w-full bg-gradient-to-b from-slate-800 to-slate-900 py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="mb-4 flex items-center justify-between">
              <Logo className="text-white" />
              <LanguageSwitcher />
            </div>
            
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="rounded-md px-4 py-2 text-white transition-colors hover:bg-white/10"
                onClick={toggleMenu}
              >
                {t.home}
              </a>
              <a
                href="#tours"
                className="rounded-md px-4 py-2 text-white transition-colors hover:bg-white/10"
                onClick={toggleMenu}
              >
                {t.tours}
              </a>
              <a
                href="#about"
                className="rounded-md px-4 py-2 text-white transition-colors hover:bg-white/10"
                onClick={toggleMenu}
              >
                {t.about}
              </a>
              <a
                href="#contact"
                className="rounded-md px-4 py-2 text-white transition-colors hover:bg-white/10"
                onClick={toggleMenu}
              >
                {t.contact}
              </a>
              <a
                href="#contact"
                className="mt-2 block rounded-md bg-rose-500 px-4 py-2 text-center text-white shadow-lg transition-all hover:bg-rose-600"
                onClick={toggleMenu}
              >
                {t.bookNow}
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};