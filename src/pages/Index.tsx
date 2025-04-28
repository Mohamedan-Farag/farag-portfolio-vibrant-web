
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Volunteering from '@/components/Volunteering';
import Footer from '@/components/Footer';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Mohamed Farag | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-darkBlack text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Volunteering />
        <Certifications />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
