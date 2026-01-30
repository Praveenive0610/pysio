
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#E91E63] via-[#F48FB1] to-[#E91E63] z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`fixed top-1 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo with animation */}
          <div className={`font-serif text-2xl font-bold text-[#1a1a2e] tracking-wider transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <span className="inline-block w-8 h-8 bg-[#E91E63] text-white rounded-lg flex items-center justify-center text-sm font-bold mr-2">S</span>
            <span className="inline-block hover:rotate-2 transition-transform duration-300">Shakthi</span>
            <span className="text-[#6b7280] text-sm font-normal ml-2">Women's Physiotherapy</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 items-center">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className="animate-fadeInDown"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
              >
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group py-2 px-4 rounded-full ${link.name === 'Home'
                      ? 'bg-[#E91E63] text-white hover:bg-[#C2185B]'
                      : 'text-[#1a1a2e] hover:text-[#E91E63]'
                    }`}
                >
                  {link.name}
                  {link.name !== 'Home' && (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E91E63] transition-all duration-300 group-hover:w-full"></span>
                  )}
                </a>
              </li>
            ))}

            {/* Phone number */}
            <li className="flex items-center gap-2 text-sm text-[#1a1a2e]">
              <span>📞</span>
              <span>+91 63835 96139</span>
            </li>

            {/* CTA Button */}
            <li>
              <a
                href="#contact"
                className="bg-[#E91E63] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#C2185B] transition-all duration-300 hover:shadow-lg hover:shadow-[#E91E63]/30"
              >
                Book Appointment
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#E91E63] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={link.href}
                  className="block text-[#1a1a2e] hover:text-[#E91E63] font-medium py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
