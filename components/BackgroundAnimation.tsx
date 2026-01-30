
import React, { useEffect, useState } from 'react';

const BackgroundAnimation: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 opacity-40 overflow-hidden pointer-events-none">
      {/* Main floating blobs with parallax - Pink theme */}
      <div
        className="absolute w-[400px] h-[400px] -top-24 -left-24 rounded-full animate-morphBlob animate-floatEnhanced"
        style={{
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.15) 0%, rgba(233, 30, 99, 0) 70%)',
          transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`,
          animationDelay: '0s'
        }}
      ></div>

      <div
        className="absolute w-[300px] h-[300px] top-1/2 -right-12 rounded-full animate-morphBlob animate-floatEnhanced"
        style={{
          background: 'radial-gradient(circle, rgba(252, 228, 236, 0.4) 0%, rgba(252, 228, 236, 0) 70%)',
          transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)`,
          animationDelay: '2s'
        }}
      ></div>

      <div
        className="absolute w-[500px] h-[500px] -bottom-36 left-[30%] rounded-full animate-morphBlob animate-floatEnhanced"
        style={{
          background: 'radial-gradient(circle, rgba(240, 98, 146, 0.2) 0%, rgba(240, 98, 146, 0) 70%)',
          transform: `translateY(${-scrollY * 0.06}px)`,
          animationDelay: '4s'
        }}
      ></div>

      {/* Additional decorative elements */}
      <div
        className="absolute w-[200px] h-[200px] top-[40%] left-[10%] rounded-full animate-floatEnhanced"
        style={{
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%)',
          transform: `translateY(${-scrollY * 0.08}px)`,
          animationDelay: '1s'
        }}
      ></div>

      <div
        className="absolute w-[150px] h-[150px] top-[20%] right-[20%] rounded-full animate-morphBlob"
        style={{
          background: 'radial-gradient(circle, rgba(252, 228, 236, 0.3) 0%, transparent 70%)',
          transform: `translate(${-scrollY * 0.04}px, ${scrollY * 0.03}px)`,
          animationDelay: '3s'
        }}
      ></div>

      {/* Subtle gradient overlay that shifts with scroll */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFF5F7]/20 to-transparent"
        style={{
          opacity: Math.min(scrollY / 1000, 0.3)
        }}
      ></div>

      {/* Floating particles - Pink theme */}
      <div className="absolute w-3 h-3 top-[30%] left-[40%] bg-[#E91E63]/20 rounded-full animate-bounceSoft" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute w-2 h-2 top-[60%] left-[60%] bg-[#FCE4EC]/50 rounded-full animate-bounceSoft" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-4 h-4 top-[70%] left-[20%] bg-[#F06292]/20 rounded-full animate-bounceSoft" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute w-2 h-2 top-[15%] left-[70%] bg-[#E91E63]/15 rounded-full animate-bounceSoft" style={{ animationDelay: '2s' }}></div>
      <div className="absolute w-3 h-3 top-[85%] left-[50%] bg-[#FCE4EC]/40 rounded-full animate-bounceSoft" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;
