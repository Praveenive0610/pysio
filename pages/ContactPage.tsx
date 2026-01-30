
import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-[#FCE4EC] to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
                        Contact <span className="text-[#E91E63]">Us</span>
                    </h1>
                    <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
                        Ready to start your wellness journey? Get in touch with us today.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <Contact />

            {/* Map Section */}
            <section className="py-16 px-6 bg-[#FFF5F7]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-10">
                        Find <span className="text-[#E91E63]">Us</span>
                    </h2>
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-[#FCE4EC] flex items-center justify-center">
                        <div className="text-center p-10">
                            <div className="text-6xl mb-4">📍</div>
                            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">Visit Our Clinic</h3>
                            <p className="text-[#6b7280]">123 Health Street, Wellness Plaza<br />Chennai, Tamil Nadu 600001</p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 bg-[#E91E63] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#C2185B] transition-all"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
