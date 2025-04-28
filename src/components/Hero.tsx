
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="profile" className="relative min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-darkPurple to-darkBlack">
      <div className="max-w-4xl text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Mohamed Abdu <span className="text-primaryPurple">Farag</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-neutralGray mb-8">Software Engineer</h2>
        
        <div className="max-w-xl mx-auto mb-10">
          <p className="text-lg text-gray-300">
            A passionate Computer Science student specializing in software engineering and competitive programming,
            focused on building scalable and efficient systems.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-darkPurple py-2 px-5 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-primaryPurple rounded-full"></span>
            <span>📍 Egypt</span>
          </div>
          <div className="bg-darkPurple py-2 px-5 rounded-full">
            <span>📧 mohameda.farag7@gmail.com</span>
          </div>
          <div className="bg-darkPurple py-2 px-5 rounded-full">
            <span>📞 (+20)1122537449</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/mohammeda-farag-07751b229/" target="_blank" rel="noopener noreferrer" className="bg-[#0077B5] hover:bg-[#0077B5]/80 text-white px-6 py-3 rounded-lg transition-colors">
            LinkedIn Profile
          </a>
          <a href="https://github.com/Mohamedan-Farag" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-[#333]/80 text-white px-6 py-3 rounded-lg transition-colors">
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#education" className="text-primaryPurple flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
