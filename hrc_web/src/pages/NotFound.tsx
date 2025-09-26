import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center bg-gray-50">
                <div className="max-w-md mx-auto text-center px-4">
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-indigo-700 mb-4">404</h1>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Sorry, we couldn't find the page you're looking for.
                            It might have been moved, deleted, or you entered the wrong URL.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-colors duration-200"
                        >
                            <Home className="mr-2 w-5 h-5" />
                            Go Home
                        </Link>

                        <div className="text-center">
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center text-gray-600 hover:text-indigo-700 transition-colors duration-200"
                            >
                                <ArrowLeft className="mr-1 w-4 h-4" />
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;