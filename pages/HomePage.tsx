
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
        </>
    );
};

export default HomePage;
