import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
    return (
        <section className="py-20 bg-indigo-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Home?
                    </h2>
                    <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
                        Get in touch with our expert team today for a free consultation and quote.
                        Let's bring your vision to life with professional craftsmanship.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            <Phone className="mr-3 w-5 h-5" />
                            Call Now: (555) 123-4567
                        </a>

                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white text-lg font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Talk To Us
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-white"
                        >
                            <div className="text-2xl font-bold mb-2">Free Consultation</div>
                            <div className="text-indigo-200">No obligation assessment</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-white"
                        >
                            <div className="text-2xl font-bold mb-2">Licensed & Insured</div>
                            <div className="text-indigo-200">Fully certified professionals</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-white"
                        >
                            <div className="text-2xl font-bold mb-2">Quality Guarantee</div>
                            <div className="text-indigo-200">100% satisfaction promise</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;