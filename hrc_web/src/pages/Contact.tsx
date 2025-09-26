import React, { useState } from 'react';
import Header from "../components/Header.tsx";
import Footer from '../components/Footer.tsx';

// Main App component to contain the entire page layout
const Contact = () => {
    // State for the form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectAddress: '',
        howDidYouHear: '',
        message: '',
    });
    // State to manage form submission status
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handles changes to form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        // Simulate a successful submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                projectAddress: '',
                howDidYouHear: '',
                message: '',
            });
        }, 3000);
    };

    // Social media icons as inline SVGs
    const socialIcons = {
        facebook: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.58-1.333h2.42v-3h-3.833c-3.819 0-5.167 2.226-5.167 5.076v1.924z"/></svg>
        ),
        instagram: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.773 1.65 4.92 4.92.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.147 3.252-1.65 4.773-4.92 4.92-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.27-.147-4.774-1.65-4.92-4.92-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.147-3.27 1.65-4.773 4.92-4.92zm0 1.432c-3.112 0-3.473.01-4.739.067-2.441.112-3.397 1.162-3.509 3.509-.058 1.266-.067 1.627-.067 4.739s.01 3.473.067 4.739c.112 2.441 1.162 3.397 3.509 3.509 1.265.058 1.626.067 4.739.067s3.473-.01 4.739-.067c2.44-.111 3.397-1.162 3.508-3.509.058-1.265.067-1.626.067-4.739s-.01-3.473-.067-4.739c-.112-2.441-1.162-3.397-3.509-3.509-1.265-.058-1.627-.067-4.739-.067zm0 2.972a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.432a3.068 3.068 0 1 1 0 6.136 3.068 3.068 0 0 1 0-6.136zm7.252-5.464a1.083 1.083 0 1 0-.001 2.166 1.083 1.083 0 0 0 0-2.166z"/></svg>
        ),
        youtube: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10c4.156 0 7.428-2.585 8.949-6.842l-1.36-4.981c-.139-.512-.663-.827-1.196-.689-.533.138-.848.662-.709 1.194l1.36 4.981c-1.261 3.486-4.636 5.842-8.15 5.842-4.411 0-8-3.589-8-8s3.589-8 8-8c1.942 0 3.731.674 5.148 1.942.348-.363.385-.92.083-1.32-.302-.4-.847-.565-1.25-.363-1.681-2.175-4.144-3.459-7.05-3.459-5.514 0-10 4.486-10 10s4.486 10 10 10c4.156 0 7.428-2.585 8.949-6.842l-1.36-4.981c-.139-.512-.663-.827-1.196-.689-.533.138-.848.662-.709 1.194l1.36 4.981c-1.261 3.486-4.636 5.842-8.15 5.842-4.411 0-8-3.589-8-8s3.589-8 8-8c1.942 0 3.731.674 5.148 1.942.348-.363.385-.92.083-1.32-.302-.4-.847-.565-1.25-.363-1.681-2.175-4.144-3.459-7.05-3.459z"/></svg>
        )
    };

    const info = {
            title: 'Need more information?',
            contactText: 'Contact us or schedule a consultation with our renovation expert',
            image: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Renovation+Experts',
            email: 'contact@hrc.com',
            locations: [
                {
                    name: 'US East Office',
                    phone: '(111) 222-3333',
                    address: '345 Main St, New York, NY 10001',
                },
                {
                    name: 'US Central Office',
                    phone: '(444) 555-6666',
                    address: '123 Ocean Blvd, Dallas, TX 12345',
                },
            ],
            socialMediaLinks: {
                facebook: "#",
                instagram: "#",
                youtube: "#"
            }
        }

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-24">
                    {/* Left Column - Heading and Form */}
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Begin your transformation with us
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg mb-12">
                            Submit this form and a specialist will get back to you shortly.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <div className="col-span-1">
                                    <label htmlFor="firstName" className="sr-only">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        placeholder="First Name*"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 placeholder-gray-500 focus:outline-none focus:border-gray-800"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Last Name*"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 placeholder-gray-500 focus:outline-none focus:border-gray-800"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email*"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 placeholder-gray-500 focus:outline-none focus:border-gray-800"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone Number*"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 placeholder-gray-500 focus:outline-none focus:border-gray-800"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="projectAddress" className="sr-only">Project Address</label>
                                    <input
                                        type="text"
                                        name="projectAddress"
                                        id="projectAddress"
                                        placeholder="Project Address*"
                                        required
                                        value={formData.projectAddress}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 placeholder-gray-500 focus:outline-none focus:border-gray-800"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="howDidYouHear" className="sr-only">How did you hear about us?</label>
                                    <select
                                        name="howDidYouHear"
                                        id="howDidYouHear"
                                        value={formData.howDidYouHear}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 placeholder-gray-500 focus:outline-none focus:border-gray-800"
                                    >
                                        <option value="" disabled hidden>How did you hear about us?</option>
                                        <option value="Online Ad">Online Ad</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Friend/Family">Friend/Family</option>
                                        <option value="Search Engine">Search Engine</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="message" className="sr-only">Tell us more about your project</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us more about your project*"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 placeholder-gray-500 focus:outline-none focus:border-gray-800 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {isSubmitted && (
                                <div className="mt-8 text-sm font-semibold text-emerald-600">
                                    Thank you! Your message has been sent.
                                </div>
                            )}

                            <div className="mt-12">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-12 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column - Image and Contact Info */}
                    <div className="order-1 lg:order-2 space-y-8 md:space-y-12">
                        {/* Placeholder image */}
                        <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                            <img
                                src={info.image}
                                alt="Renovation experts standing in a kitchen"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Contact Information */}
                        <div className="text-gray-700 space-y-4">
                            <h2 className="text-xl font-semibold mb-2">{info.title}</h2>
                            <p className="text-sm">{info.contactText}</p>
                            <p className="text-sm">
                                <a href={`mailto: ${info.email}`} className="font-semibold text-gray-900 hover:underline">{info.email}</a>
                            </p>
                        </div>

                        {/* Locations */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                            {info.locations.map(loc=> (
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{loc.name}</h3>
                                    <p>{loc.phone}</p>
                                    <p>{loc.address}</p>
                                </div>
                            ))}

                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-6 items-center text-gray-500">
                            <a href={info.socialMediaLinks.facebook} className="hover:text-gray-900 transition-colors">{socialIcons.facebook}</a>
                            <a href={info.socialMediaLinks.instagram} className="hover:text-gray-900 transition-colors">{socialIcons.instagram}</a>
                            <a href={info.socialMediaLinks.youtube} className="hover:text-gray-900 transition-colors">{socialIcons.youtube}</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
