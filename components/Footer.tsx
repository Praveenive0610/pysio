
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘' },
    { name: 'Instagram', icon: '📷' },
    { name: 'LinkedIn', icon: '💼' },
  ];

  return (
    <footer ref={ref} className="bg-[#1a1a2e] py-16 px-6 text-white/60 relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-8" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#E91E63"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#E91E63"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#E91E63"
          ></path>
        </svg>
      </div>

      <div className={`max-w-7xl mx-auto pt-8 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-white mb-4">
              <span className="w-8 h-8 bg-[#E91E63] rounded-lg flex items-center justify-center text-sm">S</span>
              <span>Shakthi</span>
            </Link>
            <p className="text-sm leading-relaxed">Empowering women through specialized, compassionate physiotherapy care.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-[#E91E63] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-[#E91E63] transition-colors">Prenatal Care</Link></li>
              <li><Link to="/services" className="hover:text-[#E91E63] transition-colors">Postpartum Recovery</Link></li>
              <li><Link to="/services" className="hover:text-[#E91E63] transition-colors">Pelvic Floor Therapy</Link></li>
              <li><Link to="/services" className="hover:text-[#E91E63] transition-colors">Women's Wellness</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Health Street, Wellness Plaza, Chennai 600001</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+91 63835 96139</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@shakthiphysio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shakthi Women's Physiotherapy. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E91E63] transition-all"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-white/40">Made with <span className="text-[#E91E63]">💗</span> for women's health</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
