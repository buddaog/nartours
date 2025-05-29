import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo className="text-white" />
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-100 hover:text-rose-400 transition-colors px-2 py-1 text-sm font-medium"
            >
              {t.home}
            </a>
            
            <div className="relative group">
              <button 
                className="text-gray-100 hover:text-rose-400 transition-colors px-2 py-1 text-sm font-medium flex items-center"
                onClick={() => toggleDropdown(t.tours)}
              >
                {t.tours}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute left-0 mt-2 w-56 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 bg-white rounded-md shadow-lg z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
                  <a
                    href="#night-baku"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t.nightBaku}
                  </a>
                  <a
                    href="#gobustan"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t.gobustan}
                  </a>
                  <a
                    href="#gabala"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t.gabala}
                  </a>
                </div>
              </div>
            </div>
            
            <a
              href="#about"
              className="text-gray-100 hover:text-rose-400 transition-colors px-2 py-1 text-sm font-medium"
            >
              {t.about}
            </a>
            
            <a
              href="#contact"
              className="text-gray-100 hover:text-rose-400 transition-colors px-2 py-1 text-sm font-medium"
            >
              {t.contact}
            </a>
            
            <a
              href="#contact"
              className="bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 transition-colors duration-200 shadow-lg"
            >
              {t.bookNow}
            </a>
            
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};