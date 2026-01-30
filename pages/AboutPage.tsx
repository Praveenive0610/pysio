
import React from 'react';
import { useScrollAnimation, useCountAnimation } from '../hooks/useScrollAnimation';
import { STATS } from '../constants';
import { Link } from 'react-router-dom';

const AnimatedCounter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/\d/g, '');
    const { ref, count, isVisible } = useCountAnimation(numericValue, 2000);

    return (
        <div
            ref={ref}
            className={`text-center p-8 bg-white rounded-2xl shadow-lg border border-[#FCE4EC] transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
            <div className="text-4xl md:text-5xl font-bold text-[#E91E63] mb-2">
                {count}{suffix}
            </div>
            <div className="text-sm font-semibold text-[#6b7280] uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-[#FCE4EC] to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                        About <span className="text-[#E91E63]">Shakthi</span>
                    </h1>
                    <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                        Your trusted partner in women's physiotherapy care in Chennai
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {STATS.map((stat) => (
                        <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </section>

            {/* Story Section */}
            <section ref={contentRef} className="py-20 px-6 bg-[#FFF5F7]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`transition-all duration-700 ${contentVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                            alt="Our Clinic"
                            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                        />
                    </div>

                    <div className={`transition-all duration-700 delay-200 ${contentVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                            Our Story
                        </h2>
                        <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                            At Shakthi Women's Physiotherapy, we understand that women's bodies go through unique changes and face distinct challenges throughout life. Our mission is to provide specialized, compassionate care that empowers women to achieve optimal health.
                        </p>
                        <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                            Founded with a vision to create a safe, women-only space for healing, we've helped over 1000+ women reclaim their health and confidence.
                        </p>
                        <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                            We believe in a holistic, patient-centered approach that treats the whole person, not just symptoms. Every treatment plan is customized to your unique needs, goals, and lifestyle.
                        </p>

                        <Link
                            to="/contact"
                            className="inline-block bg-[#E91E63] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C2185B] transition-all hover:shadow-lg"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] text-center mb-16">
                        Our <span className="text-[#E91E63]">Values</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: 'Compassionate Care', desc: 'We treat every patient with empathy, understanding, and respect.', icon: '💗' },
                            { title: 'Evidence-Based', desc: 'Our treatments are backed by the latest scientific research.', icon: '🔬' },
                            { title: 'Women-Focused', desc: 'A safe, comfortable space designed exclusively for women.', icon: '👩' },
                        ].map((value, i) => (
                            <div key={i} className="text-center p-8 bg-[#FFF5F7] rounded-3xl">
                                <div className="text-5xl mb-6">{value.icon}</div>
                                <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">{value.title}</h3>
                                <p className="text-[#6b7280]">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
