
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HealthAssistant from './components/HealthAssistant';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollProgress from './components/ScrollProgress';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative overflow-x-hidden selection:bg-[#E91E63] selection:text-white">
        <ScrollProgress />
        <BackgroundAnimation />
        <Navbar />
        <main>
          <ScrollAnimationWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </ScrollAnimationWrapper>
        </main>
        <Footer />
        <HealthAssistant />
      </div>
    </Router>
  );
};

export default App;
