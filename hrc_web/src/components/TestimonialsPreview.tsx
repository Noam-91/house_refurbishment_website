import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TestimonialsPreview: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            location: 'Downtown District',
            rating: 5,
            text: 'HRC transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations. Highly recommended!',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            project: 'Kitchen Remodeling'
        },
        {
            id: 2,
            name: 'Michael Chen',
            location: 'Riverside Heights',
            rating: 5,
            text: 'Professional, reliable, and incredibly skilled. Our full house renovation was completed on time and within budget. We couldn\'t be happier with the results.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            project: 'Full House Refurbishment'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            location: 'Garden Valley',
            rating: 5,
            text: 'The team at HRC turned our cramped bathroom into a spa-like retreat. Their creativity and craftsmanship are truly exceptional.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            project: 'Bathroom Renovation'
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${
                    index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
            />
        ));
    };

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
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients
                        have to say about their experience with HRC.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative"
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-indigo-200" />

                            <div className="flex items-center mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                    loading="lazy"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                                    <div className="flex mt-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                "{testimonial.text}"
                            </p>

                            <div className="text-sm text-emerald-500 font-semibold">
                                {testimonial.project}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/testimonials"
                        className="inline-flex items-center px-8 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        Read More Reviews
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsPreview;