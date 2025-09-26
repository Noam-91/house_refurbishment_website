import React from 'react';
import { ArrowRight, Wrench, Paintbrush, Home, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPreview: React.FC = () => {
    const services = [
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'Full House Refurbishment',
            description: 'Complete home makeovers from foundation to finishing touches.',
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/services/full-house-refurbishment'
        },
        {
            icon: <Home className="w-8 h-8" />,
            title: 'Kitchen Remodeling',
            description: 'Complete kitchen transformations with modern designs and premium materials.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/services/kitchen-remodeling'
        },
        {
            icon: <Paintbrush className="w-8 h-8" />,
            title: 'Bathroom Renovation',
            description: 'Luxury bathroom renovations that combine style with functionality.',
            image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            path: '/services/bathroom-renovation'
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Expert Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From concept to completion, we provide comprehensive refurbishment services
                        tailored to your needs and budget.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <Link to={service.path} key={service.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 bg-indigo-700 text-white p-3 rounded-lg">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/services"
                        className="inline-flex items-center px-8 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        View All Services
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;