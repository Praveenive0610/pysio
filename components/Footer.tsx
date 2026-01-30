
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const socialLinks = [
    { name: 'Facebook', icon: '📘' },
    { name: 'Instagram', icon: '📷' },
    { name: 'LinkedIn', icon: '💼' },
  ];

  return (
    <footer ref={ref} className="bg-[#1a1a2e] py-12 px-6 text-white/60 relative overflow-hidden">
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

      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative pt-8 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className={`text-center md:text-left transition-all duration-500 delay-100 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="font-serif text-2xl font-bold text-white mb-2 group cursor-pointer flex items-center gap-2">
            <span className="w-8 h-8 bg-[#E91E63] rounded-lg flex items-center justify-center text-sm">S</span>
            <span className="inline-block transition-transform duration-300 group-hover:rotate-3">Shakthi</span>
          </div>
          <p className="text-sm">Empowering women through specialized, compassionate care.</p>
        </div>

        <div className={`flex gap-6 transition-all duration-500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href="#"
              className="group flex items-center gap-2 hover:text-white transition-all duration-300"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                {link.icon}
              </span>
              <span className="hidden sm:inline group-hover:text-[#E91E63]">{link.name}</span>
            </a>
          ))}
        </div>

        <div className={`text-sm transition-all duration-500 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <p className="hover:text-white transition-colors duration-300">
            &copy; {new Date().getFullYear()} Shakthi Women's Physiotherapy.
          </p>
          <p className="text-xs mt-1 text-white/40">Made with <span className="text-[#E91E63]">💗</span> for women's health</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
