
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HealthAssistant from './components/HealthAssistant';
import BackgroundAnimation from './components/BackgroundAnimation';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden selection:bg-[#E91E63] selection:text-white">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <HealthAssistant />
    </div>
  );
};

export default App;
