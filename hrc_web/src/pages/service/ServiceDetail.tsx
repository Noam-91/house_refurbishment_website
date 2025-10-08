import React, {useEffect} from 'react';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {Link, useParams} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import serviceMap from "../../shared/serviceDetailContent.jsx"


const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
};

const ServiceDetail: React.FC = () => {
    // read work type from url
    const {workType} = useParams();

    // load static content
    const {
        title,
        introText,
        introImage,
        introImageLocation,
        whatsInvolved,
        workflowTimeline,
        previousProjects,
        faqs,
        ctaText,
        ctaDescription
    } = serviceMap[workType];

    // Show from the top always
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [workType]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Introduction Section */}
                <section className="h-full bg-white py-16 md:py-24 overflow-hidden">
                    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full md:w-1/2"
                        >
                            <img
                                src={introImage}
                                alt={title}
                                className="w-full h-auto object-cover rounded-lg shadow-xl"
                            />
                            <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-full">{introImageLocation}</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full md:w-1/2"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
                            <p className="text-lg text-gray-700 leading-relaxed">{introText}</p>
                        </motion.div>
                    </div>
                </section>


                {/* What is Involved Section */}
                <section className="bg-orange-100 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-neutral-800 mb-16">
                            What is Involved
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whatsInvolved.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                    viewport={{once: true}}
                                    className="bg-white rounded-lg shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <span className="text-4xl block mb-4">{card.icon}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow & Timeline Section */}
                <section className="bg-blue-50 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Workflow & Estimated
                            Timeline</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {workflowTimeline.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                    viewport={{once: true}}
                                    className="bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                    <img src={step.image} alt={step.title} className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{step.title}</h3>
                                        <p className="text-sm font-medium text-gray-500 mb-4">{step.duration}</p>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Get Inspired Section */}
                <section className="bg-yellow-50 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Get Inspired</h2>
                        <Slider {...carouselSettings}>
                            {previousProjects.map((project, index) => (
                                <div key={index} className="px-2">
                                    <div className="relative overflow-hidden shadow-lg">
                                        <img src={project.image} alt={`Previous project example ${index + 1}`} className="w-full h-[36rem] object-cover" />
                                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-full">{project.location}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-lg shadow-md p-6"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className="my-8 border-t border-gray-200" />

                {/* CTA Section */}
                <section className="bg-indigo-700 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{ctaText}</h2>
                            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">{ctaDescription}</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white text-lg font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
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

export default ServiceDetail;

