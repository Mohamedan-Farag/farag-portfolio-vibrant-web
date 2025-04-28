
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { title: 'Profile', href: '#profile' },
    { title: 'Education', href: '#education' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Volunteering', href: '#volunteering' },
    { title: 'Certifications', href: '#certifications' },
  ];

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'bg-darkPurple/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="text-2xl font-bold text-white">
          Mohamed<span className="text-primaryPurple">.Farag</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-neutralGray hover:text-primaryPurple transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-darkBlack z-40 transition-transform duration-300 md:hidden pt-24',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-6 p-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-xl text-neutralGray hover:text-primaryPurple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
