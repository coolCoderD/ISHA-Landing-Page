import React, { Suspense } from 'react';
  import  Header  from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { ExpertiseSection } from './components/ExpertiseSection';

import { Footer } from './components/Footer';
import FAQs from './components/FAQs';



function App() {
  return (
  
      <div className=" px-12">
        <Header />
        <main className="">
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
            <MarqueeBanner text="Your Personalized Health Assistant" />
            <ExpertiseSection />
            <FAQs />
            <MarqueeBanner text="Get Started with ISHA" />
          </Suspense>
        </main>
        <Footer />
      </div>

  );
}

export default App;