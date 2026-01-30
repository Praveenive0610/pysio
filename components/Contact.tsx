
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been sent. We will contact you shortly.');
  };

  const contactInfo = [
    { icon: '📍', title: 'Visit Us', content: '123 Health Street, Wellness Plaza<br />Chennai, Tamil Nadu 600001' },
    { icon: '📞', title: 'Call Us', content: '+91 63835 96139' },
    { icon: '✉️', title: 'Email Us', content: 'info@shakthiphysio.com' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#E91E63] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-floatEnhanced"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#C2185B]/30 rounded-full blur-3xl animate-floatEnhanced" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-morphBlob"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 text-white relative">
        <div ref={infoRef}>
          <div className={`transition-all duration-700 ${infoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              Get in Touch
              <span className={`absolute -bottom-2 left-0 h-1 bg-white transition-all duration-1000 delay-300 ${infoVisible ? 'w-1/2' : 'w-0'}`}></span>
            </h2>
          </div>
          <p className={`text-white/80 text-lg mb-12 transition-all duration-700 delay-200 ${infoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ready to start your wellness journey? Book your appointment today or reach out with any questions. We're here to help!
          </p>

          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`flex gap-4 items-start group transition-all duration-500 ${infoVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl shrink-0 transition-all duration-300 group-hover:bg-white group-hover:text-[#E91E63] group-hover:scale-110 group-hover:rotate-12">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{info.title}</h4>
                  <p className="text-white/70" dangerouslySetInnerHTML={{ __html: info.content }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={formRef}
          className={`bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 transition-all duration-700 ${formVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`space-y-2 transition-all duration-500 delay-100 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder:text-white/40 hover:border-white/50"
                />
              </div>
              <div className={`space-y-2 transition-all duration-500 delay-200 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91"
                  className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder:text-white/40 hover:border-white/50"
                />
              </div>
            </div>
            <div className={`space-y-2 transition-all duration-500 delay-300 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder:text-white/40 hover:border-white/50"
              />
            </div>
            <div className={`space-y-2 transition-all duration-500 delay-400 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <label className="text-sm font-medium">Service Interested In</label>
              <select className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 appearance-none text-white hover:border-white/50">
                <option className="bg-[#E91E63] text-white">Prenatal Care</option>
                <option className="bg-[#E91E63] text-white">Postpartum Recovery</option>
                <option className="bg-[#E91E63] text-white">Pelvic Floor Therapy</option>
                <option className="bg-[#E91E63] text-white">General Wellness</option>
              </select>
            </div>
            <div className={`space-y-2 transition-all duration-500 delay-500 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder:text-white/40 resize-none hover:border-white/50"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full bg-white text-[#E91E63] font-bold py-4 rounded-xl shadow-lg hover:bg-[#FCE4EC] transition-all duration-300 btn-animated relative overflow-hidden group ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
              style={{ transitionDelay: formVisible ? '600ms' : '0ms' }}
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E91E63]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
