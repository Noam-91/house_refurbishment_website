import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">H</span>
                            </div>
                            <span className="text-xl font-bold">HRC</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Professional house refurbishment services with over 15 years of experience.
                            Transforming homes with quality craftsmanship and attention to detail.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                Our Services
                            </Link>
                            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                Portfolio
                            </Link>
                            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                About
                            </Link>
                            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                Blog
                            </Link>
                            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <div className="flex flex-col space-y-2 text-sm text-gray-300">
                            <span>Kitchen Remodeling</span>
                            <span>Bathroom Renovation</span>
                            <span>Full House Refurbishment</span>
                            <span>Interior Design</span>
                            <span>Flooring Installation</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-gray-300">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-gray-300">info@hrcrefurbishment.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">
                  123 Construction Ave<br />
                  Building City, BC 12345
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © 2025 HRC House Refurbishment. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                            Terms of Service
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;