
import React from 'react';
import { SERVICES } from '../constants';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

// Professional SVG Icons for Services
const ServiceIcons: { [key: string]: React.ReactNode } = {
  prenatal: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M12 13c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4" />
      <path d="M12 13v5" />
      <path d="M9 18h6" />
    </svg>
  ),
  postpartum: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3" />
      <path d="M12 11c-4 0-6 2-6 5v2h12v-2c0-3-2-5-6-5Z" />
      <path d="M9 21v-3" />
      <path d="M15 21v-3" />
      <path d="M12 14v7" />
    </svg>
  ),
  pelvic: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  wellness: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
      <path d="M22 12c-2.5 0-4-.5-6-2s-4-2-6-2" />
      <path d="M12 22c0-3 1-5 3-7s3-5 3-8" />
      <path d="M18 3l2 2-2 2" />
      <path d="M20 5H16" />
    </svg>
  ),
  sports: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  manual: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2" />
      <path d="M14 10V4.5a2.5 2.5 0 0 0-5 0V10" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
};

const Services: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible, getDelay } = useStaggerAnimation(SERVICES.length, 150);

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-[#FCE4EC]/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#E91E63]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4 relative inline-block">
            Our Specialized Services
            <span className={`absolute -bottom-2 left-0 h-1 bg-[#E91E63] transition-all duration-1000 delay-300 ${titleVisible ? 'w-full' : 'w-0'}`}></span>
          </h2>
          <p className={`text-[#6b7280] text-lg mt-6 transition-all duration-700 delay-400 ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Comprehensive physiotherapy solutions designed specifically for women's health at every stage of life.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-[#FFF5F7] p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden hover:bg-white ${cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{
                transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/0 via-transparent to-[#FCE4EC]/0 group-hover:from-[#E91E63]/5 group-hover:to-[#FCE4EC]/20 transition-all duration-500"></div>

              {/* Icon with animation */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#F06292] text-white flex items-center justify-center rounded-2xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-[#E91E63]/30">
                {ServiceIcons[service.id]}
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#E91E63] transition-colors duration-300 relative">
                {service.title}
              </h3>
              <p className="text-[#6b7280] leading-relaxed mb-6 relative">{service.description}</p>

              <div className="text-[#E91E63] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Learn More
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#FCE4EC] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
