import Footer from "../components/Footer";
import Header from "../components/Header";
import {useState} from "react";

const content = {
    header: {
        title: 'View our projects. See our process.',
        description: 'In between a client’s vision and the project’s final transformation, there are many phases, stops, and decisions to be made for a home renovation.\n Explore our projects by city to get an insider’s look at our process. You’ll see how we approach each project and what drives construction and design decisions. With bold before-and-after photos and behind-the-scenes videos, you’ll be inspired to start your new chapter.',
        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Project+Banner'
    },
    projects: {
        categories: [
            {
                name: 'Full House Refurbishment',
                slug: 'full-house-refurbishment',
                projects: [
                    {
                        name: 'The Modern Victorian',
                        address: '123 Oak St, Anytown',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Full+House+1',
                    },
                    {
                        name: 'The Lakeside Retreat',
                        address: '456 Pine Ave, Lakeside',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Full+House+2',
                    },
                    {
                        name: 'Urban Loft Redesign',
                        address: '789 Main St, Metropolis',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Full+House+3',
                    },
                    {
                        name: 'Country Estate Makeover',
                        address: '101 Farm Rd, Countryside',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Full+House+4',
                    },
                ],
            },
            {
                name: 'Kitchen Remodeling',
                slug: 'kitchen-remodeling',
                projects: [
                    {
                        name: 'Chef’s Dream Kitchen',
                        address: '321 Elm St, Metropolis',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Kitchen+1',
                    },
                    {
                        name: 'Farmhouse Style Kitchen',
                        address: '654 Maple Rd, Countryside',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Kitchen+2',
                    },
                    {
                        name: 'Minimalist Kitchen',
                        address: '987 Oak St, Anytown',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Kitchen+3',
                    },
                    {
                        name: 'Coastal Inspired Kitchen',
                        address: '111 Beach Blvd, Seaview',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Kitchen+4',
                    },
                ],
            },
            {
                name: 'Bathroom Renovation',
                slug: 'bathroom-renovation',
                projects: [
                    {
                        name: 'Spa-like Master Bathroom',
                        address: '222 Pine Ave, Lakeside',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Bathroom+1',
                    },
                    {
                        name: 'Guest Bathroom Update',
                        address: '333 Main St, Metropolis',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Bathroom+2',
                    },
                    {
                        name: 'Kid-friendly Bathroom',
                        address: '444 Elm St, Anytown',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Bathroom+3',
                    },
                    {
                        name: 'Powder Room Remodel',
                        address: '555 Maple Rd, Countryside',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Bathroom+4',
                    },
                ],
            },
            {
                name: 'Interior Design',
                slug: 'interior-design',
                projects: [
                    {
                        name: 'Spa-like Master Bathroom',
                        address: '222 Pine Ave, Lakeside',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Design+1',
                    },
                    {
                        name: 'Guest Bathroom Update',
                        address: '333 Main St, Metropolis',
                        imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Design+2',
                    },
                    
                ],
            },
            {
                name: 'Flooring installation',
                slug: 'flooring-installation',
                projects: [


                ],
            },
        ],
    },
};

const Projects = () => {
    const [activeTab, setActiveTab] = useState('full-house-refurbishment');

    const handleTabClick = (slug) => {
        setActiveTab(slug);
        const section = document.getElementById(slug);
        if (section) {

            const headerHeight = 200;
            const offset = section.offsetTop - headerHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }

    };
    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            <Header/>

            {/* Sticky Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
                <div className="container mx-auto px-4 md:px-6 flex justify-start items-center space-x-6 py-4 overflow-x-auto">
                    {content.projects.categories.map((category) => (
                        <button
                            key={category.slug}
                            onClick={() => handleTabClick(category.slug)}
                            className={`whitespace-nowrap pb-2 text-lg font-medium transition-colors duration-300 ${
                                activeTab === category.slug
                                    ? 'text-gray-900 border-b-2 border-gray-900'
                                    : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Banner */}
            <div className="relative bg-[#f8f6f5] py-18 md:py-32">
                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="md:order-1">
                        <img src={content.header.imageUrl} alt="Banner" className="w-full h-auto object-cover" />
                    </div>
                    <div className="md:order-2">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">{content.header.title}</h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                            {content.header.description}
                        </p>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-16">Our Projects</h1>

                {content.projects.categories.map((category, index) => (
                    category.projects.length>0 &&
                    <section key={index} id={category.slug} className="mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">{category.name} Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {category.projects.slice(0,3).map((project, projIndex) => (
                                <div key={projIndex}
                                     className="bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden">
                                    {/* Top part: Picture */}
                                    <div className="relative">
                                        <img src={project.imageUrl} alt={project.name}
                                             className="w-full h-80 object-cover"/>
                                        <div
                                            className="absolute top-4 left-4 text-sm bg-black bg-opacity-50 text-white px-2 py-1 flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-map-pin">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                <circle cx="12" cy="10" r="3"/>
                                            </svg>
                                            {project.address}
                                        </div>
                                    </div>
                                    {/* Bottom part: Details */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.name}</h3>
                                        <button
                                            className="bg-white text-gray-900 font-medium py-2 px-6 border border-gray-900 hover:bg-gray-100 transition-colors mt-4">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {category.projects.length > 3 && (
                            <div className="text-center mt-10">
                                <button
                                    className="inline-flex items-center gap-2 bg-transparent text-gray-700 px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
                                    All {category.name} Projects
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-arrow-right">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        )}
                    </section>
                ))}
            </main>
            <Footer/>
        </div>
    );
};

export default Projects;