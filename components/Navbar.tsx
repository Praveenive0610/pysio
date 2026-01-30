
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#E91E63] via-[#F48FB1] to-[#E91E63] z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`fixed top-1 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 font-serif text-2xl font-bold text-[#1a1a2e] tracking-wider transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <span className="w-8 h-8 bg-[#E91E63] text-white rounded-lg flex items-center justify-center text-sm font-bold">S</span>
            <span className="hover:rotate-2 transition-transform duration-300">Shakthi</span>
            <span className="text-[#6b7280] text-sm font-normal hidden sm:inline">Women's Physiotherapy</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative py-2 px-4 rounded-full ${isActive(link.href)
                    ? 'bg-[#E91E63] text-white'
                    : 'text-[#1a1a2e] hover:text-[#E91E63]'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Phone number */}
            <li className="flex items-center gap-2 text-sm text-[#1a1a2e] ml-4 whitespace-nowrap flex-shrink-0">
              <span>📞</span>
              <span className="hidden lg:inline">+91 63835 96139</span>
            </li>

            {/* CTA Button */}
            <li className="flex-shrink-0">
              <Link
                to="/contact"
                className="bg-[#E91E63] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#C2185B] transition-all duration-300 hover:shadow-lg hover:shadow-[#E91E63]/30 whitespace-nowrap"
              >
                Book Appointment
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#E91E63] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="px-6 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  to={link.href}
                  className={`block font-medium py-3 px-4 rounded-xl transition-colors duration-300 ${isActive(link.href)
                    ? 'bg-[#FCE4EC] text-[#E91E63]'
                    : 'text-[#1a1a2e] hover:bg-[#FFF5F7]'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-[#E91E63] text-white py-3 rounded-full font-semibold"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
