
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#FCE4EC] rounded-full blur-2xl animate-floatEnhanced"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#E91E63]/10 rounded-full blur-2xl animate-floatEnhanced" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4 relative inline-block">
            What Our Patients Say
            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-[#E91E63] transition-all duration-1000 delay-300 ${titleVisible ? 'w-24' : 'w-0'}`}></span>
          </h2>
          <p className={`text-[#6b7280] text-lg mt-6 transition-all duration-700 delay-400 ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Real stories from women whose lives we've helped transform.
          </p>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-3 mb-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                  ? 'bg-[#E91E63] w-8'
                  : 'bg-[#FCE4EC] hover:bg-[#F8BBD9]'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#FFF5F7] p-8 md:p-10 rounded-3xl relative transition-all duration-500 hover-lift group ${cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                } ${activeIndex === index ? 'ring-2 ring-[#E91E63] shadow-xl scale-[1.02] bg-white' : ''}`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Animated quote mark */}
              <div className="text-6xl text-[#E91E63]/20 absolute top-6 left-6 font-serif transition-all duration-300 group-hover:text-[#E91E63]/40 group-hover:scale-110">
                "
              </div>

              <p className="relative text-[#1a1a2e] italic mb-8 leading-relaxed z-10 min-h-[100px] transition-colors duration-300">
                {item.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E91E63] text-white rounded-full flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a2e] group-hover:text-[#E91E63] transition-colors duration-300">{item.name}</h4>
                  <p className="text-xs text-[#6b7280] uppercase tracking-wider">{item.role}</p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#E91E63]/0 group-hover:bg-[#FCE4EC] rounded-tl-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
