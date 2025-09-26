import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectsPreview: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'Complete Home Makeover',
            category: 'Full House',
            beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            afterImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            videoUrl: 'https://youtube.com/watch?v=example3'
        },
        {
            id: 2,
            title: 'Modern Kitchen Transformation',
            category: 'Kitchen Remodeling',
            beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            videoUrl: 'https://youtube.com/watch?v=example1'
        },
        {
            id: 3,
            title: 'Luxury Bathroom Renovation',
            category: 'Bathroom Renovation',
            beforeImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            videoUrl: 'https://youtube.com/watch?v=example2'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Recent Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See the incredible transformations we've achieved for our clients.
                        Each project tells a story of craftsmanship and attention to detail.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative">
                                <div className="grid grid-cols-2 h-64">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.beforeImage}
                                            alt={`${project.title} - Before`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                            BEFORE
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.afterImage}
                                            alt={`${project.title} - After`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                            AFTER
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <a
                                        href={project.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 text-indigo-700 p-4 rounded-full hover:bg-opacity-100 transform hover:scale-110"
                                        aria-label={`Watch ${project.title} video`}
                                    >
                                        <Play className="w-8 h-8" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-sm text-emerald-500 font-semibold mb-2">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <a
                                    href={project.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-indigo-700 hover:text-indigo-800 font-medium transition-colors duration-200"
                                >
                                    Watch Full Video
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
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
                        to="/projects"
                        className="inline-flex items-center px-8 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPreview;