
import React from 'react';
import { STATS } from '../constants';
import { useScrollAnimation, useParallax, useCountAnimation } from '../hooks/useScrollAnimation';

// Counter component for animated numbers
const AnimatedCounter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const { ref, count, isVisible } = useCountAnimation(numericValue, 2000);

  return (
    <div
      ref={ref}
      className={`text-center p-6 bg-white rounded-2xl shadow-lg border border-[#FCE4EC] hover-lift transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <div className="text-3xl md:text-4xl font-bold text-[#E91E63] mb-1">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageWrapperRef, offset } = useParallax(0.2);

  return (
    <section id="about" className="py-24 px-6 bg-[#FFF5F7] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#FCE4EC]/50 rounded-full blur-3xl animate-floatEnhanced"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#E91E63]/5 rounded-full blur-3xl animate-floatEnhanced" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
        <div
          ref={imageWrapperRef}
          className="order-2 lg:order-1 relative group"
          style={{ transform: `translateY(${offset * 0.05}px)` }}
        >
          {/* Image container with effects */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Medical Professional"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E91E63]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 bg-[#E91E63] text-white p-6 rounded-2xl shadow-xl hidden lg:flex flex-col items-center animate-bounceSoft">
            <span className="text-2xl">🏆</span>
            <span className="text-xs font-semibold mt-1">Certified</span>
          </div>

          {/* Decorative frame */}
          <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#E91E63]/30 rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>

        <div ref={textRef} className="order-1 lg:order-2">
          <div className={`transition-all duration-700 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6 relative inline-block">
              Your Partner in Women's Health
              <span className={`absolute -bottom-2 left-0 h-1 bg-[#E91E63] transition-all duration-1000 delay-500 ${textVisible ? 'w-2/3' : 'w-0'}`}></span>
            </h2>
          </div>

          <p className={`text-[#6b7280] text-lg leading-relaxed mb-6 transition-all duration-700 delay-200 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            At Shakthi Women's Physiotherapy, we understand that women's bodies go through unique changes and face distinct challenges throughout life. Our mission is to provide specialized, compassionate care that empowers women to achieve optimal health.
          </p>
          <p className={`text-[#6b7280] text-lg leading-relaxed mb-10 transition-all duration-700 delay-400 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            We believe in a holistic, patient-centered approach that treats the whole person, not just symptoms. Every treatment plan is customized to your unique needs, goals, and lifestyle.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <AnimatedCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
