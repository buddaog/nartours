import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

interface TourCardProps {
  id: string;
  image: string;
  title: {
    en: string;
    ru: string;
    az: string;
  };
  description: {
    en: string;
    ru: string;
    az: string;
  };
  details?: {
    location?: string;
    duration?: string;
    groupSize?: string;
    date?: string;
  };
}

export const TourCard: React.FC<TourCardProps> = ({ 
  id, 
  image, 
  title, 
  description,
  details
}) => {
  const [expanded, setExpanded] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      id={id}
      className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title[currentLanguage as keyof typeof title]} 
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>
      
      <div className="p-6">
        <h3 className="font-quicksand mb-3 text-2xl font-bold text-slate-800">
          {title[currentLanguage as keyof typeof title]}
        </h3>
        
        <p className="mb-4 text-slate-600">
          {description[currentLanguage as keyof typeof description]}
        </p>
        
        {details && (
          <div className={`space-y-3 overflow-hidden transition-all ${
            expanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {details.location && (
              <div className="flex items-center text-sm text-slate-600">
                <MapPin className="mr-2 h-4 w-4 text-rose-500" />
                <span>{details.location}</span>
              </div>
            )}
            
            {details.duration && (
              <div className="flex items-center text-sm text-slate-600">
                <Clock className="mr-2 h-4 w-4 text-rose-500" />
                <span>{details.duration}</span>
              </div>
            )}
            
            {details.groupSize && (
              <div className="flex items-center text-sm text-slate-600">
                <Users className="mr-2 h-4 w-4 text-rose-500" />
                <span>{details.groupSize}</span>
              </div>
            )}
            
            {details.date && (
              <div className="flex items-center text-sm text-slate-600">
                <Calendar className="mr-2 h-4 w-4 text-rose-500" />
                <span>{details.date}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          {details && (
            <button 
              onClick={toggleExpanded}
              className="flex items-center text-sm font-medium text-rose-500 transition-colors hover:text-rose-600"
            >
              {expanded ? (
                <>
                  {t.showLess} <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  {t.showMore} <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </button>
          )}
          
          <button className="rounded-lg bg-rose-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-rose-600 hover:shadow-lg">
            {t.bookNow}
          </button>
        </div>
      </div>
    </div>
  );
};