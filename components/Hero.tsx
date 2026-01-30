
import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, offset } = useParallax(0.3);

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6 flex items-center relative overflow-hidden bg-gradient-to-b from-white to-[#FFF5F7]">
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-[#FCE4EC] rounded-full animate-floatEnhanced animate-morphBlob" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-[#F8BBD9]/30 rounded-full animate-floatEnhanced animate-morphBlob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#E91E63]/10 rounded-full animate-floatEnhanced" style={{ animationDelay: '4s' }}></div>

      <div ref={heroRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          {/* Tag */}
          <div className={`inline-flex items-center gap-2 bg-[#FCE4EC] text-[#E91E63] px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 delay-100 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <span>💗</span> Specialized Care for Women
          </div>

          <div className="overflow-hidden">
            <h1 className={`text-5xl md:text-6xl font-bold text-[#1a1a2e] leading-[1.1] mb-6 transition-all duration-700 delay-200 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Empowering Women Through{' '}
              <span className={`block text-[#E91E63] transition-all duration-700 delay-500 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Healing Touch
              </span>
            </h1>
          </div>
          <p className={`text-lg text-[#6b7280] leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-700 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            At Shakthi Women's Physiotherapy, we provide compassionate, evidence-based care tailored to every stage of a woman's life — from pregnancy to menopause and beyond.
          </p>
          <div className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#contact"
              className="btn-animated bg-[#E91E63] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-[#C2185B] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E91E63]/30 flex items-center gap-2"
            >
              Book Your Appointment <span>→</span>
            </a>
            <a
              href="#services"
              className="btn-animated border-2 border-[#1a1a2e] text-[#1a1a2e] px-8 py-4 rounded-full font-semibold hover:bg-[#1a1a2e] hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Explore Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className={`flex flex-wrap gap-8 transition-all duration-700 delay-1200 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-2">
              <span className="text-[#E91E63]">👥</span>
              <span className="text-sm text-[#6b7280]"><strong className="text-[#1a1a2e]">1000+</strong> Patients Treated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E91E63]">🔬</span>
              <span className="text-sm text-[#6b7280]"><strong className="text-[#1a1a2e]">Evidence-Based</strong> Care</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E91E63]">💗</span>
              <span className="text-sm text-[#6b7280]"><strong className="text-[#1a1a2e]">Women-Only</strong> Space</span>
            </div>
          </div>
        </div>

        <div ref={imageRef} className={`relative transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div
            className="rounded-3xl overflow-hidden shadow-2xl relative group bg-[#FCE4EC]"
            style={{ transform: `translateY(${offset * 0.1}px)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              alt="Women's Physiotherapy Treatment"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#E91E63]/10 to-transparent"></div>
          </div>

          {/* Experience badge */}
          <div className={`absolute -bottom-4 right-8 bg-white p-5 rounded-2xl shadow-xl transition-all duration-700 delay-700 hover-lift flex items-center gap-3 ${heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90'}`}>
            <div className="w-12 h-12 bg-[#FCE4EC] rounded-full flex items-center justify-center">
              <span className="text-[#E91E63] text-xl">💗</span>
            </div>
            <div>
              <div className="text-[#E91E63] text-2xl font-bold">10+ Years</div>
              <div className="text-xs text-[#6b7280]">Of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
