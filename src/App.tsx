import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tours } from './components/Tours';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <Tours />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;