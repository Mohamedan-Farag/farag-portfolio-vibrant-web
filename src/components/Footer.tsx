
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkBlack py-10 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Mohamed<span className="text-primaryPurple">.Farag</span>
        </h3>
        
        <p className="text-neutralGray mb-6">Software Engineer & Competitive Programmer</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:mohameda.farag7@gmail.com" className="text-neutralGray hover:text-primaryPurple transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutralGray hover:text-primaryPurple transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutralGray hover:text-primaryPurple transition-colors">
            GitHub
          </a>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>© {currentYear} Mohamed Abdu Farag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
