import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                    alt="Modern home interior renovation"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Transform Your Home with
                        <span className="block text-emerald-500">Professional Refurbishment</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        From kitchen remodeling to full-house renovations, we bring your vision to life
                        with quality craftsmanship and attention to detail.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Talk to us
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>

                        <button className="inline-flex items-center px-8 py-4 bg-white bg-opacity-10 text-white text-lg font-semibold rounded-lg hover:bg-opacity-20 transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20">
                            <Play className="mr-2 w-5 h-5" />
                            Watch Our Work
                        </button>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-emerald-500">500+</div>
                            <div className="text-gray-200 mt-2">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-emerald-500">15+</div>
                            <div className="text-gray-200 mt-2">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-emerald-500">100%</div>
                            <div className="text-gray-200 mt-2">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-3 bg-white rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;