import React from 'react';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';
import { motion } from 'framer-motion';
import { Wrench, Paintbrush, Home, Lightbulb, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom';

const Services: React.FC = () => {
    const services = [
        {
            icon: <Wrench className="w-12 h-12" />,
            title: 'Full House Refurbishment',
            description: 'Complete home makeovers from foundation to finishing touches. We coordinate all aspects of your renovation project.',
            features: ['Structural updates', 'Electrical work', 'Plumbing systems', 'HVAC integration', 'Interior finishing'],
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/services/full-house-refurbishment'
        },
        {
            icon: <Home className="w-12 h-12" />,
            title: 'Kitchen Remodeling',
            description: 'Complete kitchen transformations with modern designs and premium materials. From cabinet installation to appliance integration, we handle every detail.',
            features: ['Custom cabinetry', 'Appliance installation', 'Countertop replacement', 'Lighting design', 'Plumbing updates'],
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/services/kitchen-remodeling'
        },
        {
            icon: <Paintbrush className="w-12 h-12" />,
            title: 'Bathroom Renovation',
            description: 'Luxury bathroom renovations that combine style with functionality. We create spa-like environments tailored to your preferences.',
            features: ['Tile installation', 'Fixture replacement', 'Vanity design', 'Shower/tub systems', 'Ventilation'],
            image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/services/bathroom-renovation'
        },
        {
            icon: <Lightbulb className="w-12 h-12" />,
            title: 'Interior Design',
            description: 'Professional interior design services to maximize your space potential. We create functional and beautiful living spaces.',
            features: ['Space planning', 'Color consultation', 'Furniture selection', 'Decor styling', 'Custom solutions'],
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/services/interior-design'
        },
        {
            icon: <Layers className="w-12 h-12" />,
            title: 'Flooring Installation',
            description: 'Professional flooring installation with premium materials and expert craftsmanship. We offer various flooring options for every room.',
            features: ['Hardwood installation', 'Tile work', 'Carpet laying', 'Vinyl flooring', 'Subfloor preparation'],
            image: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/what-to-expect-during-your-hard-surface-flooring-installation-2023-step-2.jpg',
            path: '/services/flooring-installation'
        }
    ];

    const process = [
        {
            step: '01',
            title: 'Consultation',
            description: 'We discuss your vision, budget, and timeline to create a customized plan.'
        },
        {
            step: '02',
            title: 'Design & Planning',
            description: 'Our experts create detailed designs and project timelines with cost estimates.'
        },
        {
            step: '03',
            title: 'Execution',
            description: 'Professional craftsmen execute the work with minimal disruption to your life.'
        },
        {
            step: '04',
            title: 'Completion',
            description: 'Final walkthrough, cleanup, and warranty information provided.'
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://www.shutterstock.com/image-illustration/commode-chair-decor-living-room-600nw-1820572562.jpg"
                            alt="Modern home interior renovation"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-64">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Unlock your dream home with a<br />
                                Chapter renovation
                            </h1>

                            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                                From stylish kitchen renovations to bathroom remodels to full-home projects, Chapter makes it easy to turn your vision into a reality, all while keeping your project on budget and on schedule. We're fully licensed and insured and have a depth of experience to elevate your home.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-indigo-700 text-white text-lg font-semibold hover:bg-indigo-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                                >
                                    Talk to us
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20  bg-gray-200">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <Link to={service.path} key={service.title} className={`block ${service.title === 'Full House Refurbishment' ? 'md:col-span-2' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gray-50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-64 object-cover"
                                            loading="lazy"
                                        />
                                        <div className="p-6">
                                            <div className="text-indigo-700 mb-4">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-gray-700">
                                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Process
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We follow a proven 4-step process to ensure your project is completed
                                efficiently and to your complete satisfaction.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="bg-indigo-700 text-white w-16 h-16  flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-indigo-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                                Contact us today for a free consultation and discover how we can
                                transform your home with our expert services.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white text-lg font-semibold hover:bg-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                Talk to us
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;