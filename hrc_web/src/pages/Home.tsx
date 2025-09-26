import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <ServicesPreview />
                <ProjectsPreview />
                <TestimonialsPreview />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;