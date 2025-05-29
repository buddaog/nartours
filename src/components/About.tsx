import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Shield, Award, ThumbsUp } from 'lucide-react';

export const About: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">{t.aboutUs}</h2>
          <div className="h-1 w-20 bg-rose-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600">{t.aboutDescription}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12">
              <img 
                src="https://images.pexels.com/photos/15637013/pexels-photo-15637013.jpeg"
                alt="About Nar Tour Agency"
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-rose-500 rounded-lg p-6 text-white max-w-xs shadow-xl hidden md:block">
              <p className="font-quicksand text-lg font-bold">{t.yearsExperience}</p>
              <p className="text-sm mt-2 text-white/80">{t.experienceDesc}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 font-quicksand">{t.whyChooseUs}</h3>
            <p className="text-slate-600">{t.whyChooseUsDesc}</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">{t.trustworthyService}</h4>
                  <p className="text-slate-600 text-sm">{t.trustworthyDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">{t.expertGuides}</h4>
                  <p className="text-slate-600 text-sm">{t.expertGuidesDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg mr-4">
                  <ThumbsUp className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">{t.customerSatisfaction}</h4>
                  <p className="text-slate-600 text-sm">{t.customerSatisfactionDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};