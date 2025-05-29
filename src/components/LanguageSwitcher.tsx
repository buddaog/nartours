import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'az', name: 'Azərbaycan', flag: 'https://flagcdn.com/w40/az.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' }
  ];

  return (
    <div className="flex items-center gap-3 rounded-lg bg-white/10 p-2 backdrop-blur-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`transition-transform ${
            currentLanguage === lang.code 
              ? 'scale-110 opacity-100 bg-white/20 rounded-md' 
              : 'opacity-70 hover:scale-110 hover:opacity-100 hover:bg-white/10'
          } p-1.5 rounded-md`}
          aria-label={`Switch to ${lang.name}`}
        >
          <img 
            src={lang.flag} 
            alt={`${lang.name} flag`} 
            width="24" 
            height="24"
            className="rounded-sm" 
          />
        </button>
      ))}
    </div>
  );
};