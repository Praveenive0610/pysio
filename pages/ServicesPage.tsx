
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

// Professional SVG Icons for Services
const ServiceIcons: { [key: string]: React.ReactNode } = {
    prenatal: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
            <path d="M12 13c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4" />
            <path d="M12 13v5" />
            <path d="M9 18h6" />
        </svg>
    ),
    postpartum: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="3" />
            <path d="M12 11c-4 0-6 2-6 5v2h12v-2c0-3-2-5-6-5Z" />
            <path d="M9 21v-3" />
            <path d="M15 21v-3" />
            <path d="M12 14v7" />
        </svg>
    ),
    pelvic: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
            <path d="M22 12c-2.5 0-4-.5-6-2s-4-2-6-2" />
            <path d="M12 22c0-3 1-5 3-7s3-5 3-8" />
            <path d="M18 3l2 2-2 2" />
            <path d="M20 5H16" />
        </svg>
    ),
    sports: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
    manual: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2" />
            <path d="M14 10V4.5a2.5 2.5 0 0 0-5 0V10" />
            <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
    ),
};

const ServicesPage: React.FC = () => {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-[#FCE4EC] to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                        Our <span className="text-[#E91E63]">Services</span>
                    </h1>
                    <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                        Comprehensive physiotherapy solutions designed specifically for women's health at every stage of life.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section ref={titleRef} className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {SERVICES.map((service, index) => (
                            <div
                                key={service.id}
                                className={`group bg-[#FFF5F7] p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden hover:bg-white border border-transparent hover:border-[#FCE4EC] ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#F06292] text-white flex items-center justify-center rounded-2xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                                    {ServiceIcons[service.id]}
                                </div>

                                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#E91E63] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#6b7280] leading-relaxed mb-6">{service.description}</p>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 text-[#E91E63] font-semibold hover:gap-4 transition-all"
                                >
                                    Book Now <span>→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-[#FCE4EC]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                        Ready to Start Your Healing Journey?
                    </h2>
                    <p className="text-[#6b7280] text-lg mb-8">
                        Book a consultation today and take the first step towards better health.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#E91E63] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#C2185B] transition-all hover:shadow-lg hover:shadow-[#E91E63]/30"
                    >
                        Book Your Appointment
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
