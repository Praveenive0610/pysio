
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const TestimonialsPage: React.FC = () => {
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-[#FCE4EC] to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                        Patient <span className="text-[#E91E63]">Testimonials</span>
                    </h1>
                    <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                        Real stories from women whose lives we've helped transform.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section ref={cardsRef} className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((item, index) => (
                            <div
                                key={item.id}
                                className={`bg-[#FFF5F7] p-10 rounded-3xl relative transition-all duration-500 hover:shadow-xl hover:bg-white group ${cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="text-6xl text-[#E91E63]/20 absolute top-6 left-6 font-serif group-hover:text-[#E91E63]/40 transition-colors">
                                    "
                                </div>

                                <p className="relative text-[#1a1a2e] italic mb-8 leading-relaxed z-10 min-h-[120px] text-lg">
                                    {item.text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-[#E91E63] text-white rounded-full flex items-center justify-center font-bold text-xl">
                                        {item.initial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1a1a2e] text-lg">{item.name}</h4>
                                        <p className="text-sm text-[#6b7280] uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#E91E63]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Be Our Next Success Story
                    </h2>
                    <p className="text-white/80 text-lg mb-8">
                        Join the hundreds of women who have transformed their health with Shakthi.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-[#E91E63] px-10 py-4 rounded-full font-semibold hover:bg-[#FCE4EC] transition-all"
                    >
                        Book Your Appointment
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;
