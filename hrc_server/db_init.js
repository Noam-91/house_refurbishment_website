/**
 * Database Seeding Script
 * This script connects to MongoDB and populates the database with initial data.
 *
 * To run this script, navigate to your project folder in the terminal and execute:
 * node db_init.js
 */

// Load environment variables from .env file
import 'dotenv/config.js'

// Import required modules
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// --- Import Mongoose Models ---
import User from "./domain/User.js";
import Blog from './domain/Blog.js';
import Project  from "./domain/Project.js";
import CompanyInfo from './domain/CompanyInfo.js';
import PageContent  from "./domain/PageContent.js";

// --- Configuration ---
const MONGODB_URI = process.env.MONGODB_URI;

// --- Sample Data ---
const users = [
    {
        username: 'admin',
        email: 'admin@hrc.com',
        password: 'admin',
        isActive: true,
        role: 'admin'
    },
    {
        username: 'user',
        email: 'user@hrc.com',
        password: 'user',
        isActive: true,
        role: 'user'
    }
];

const blogs = [
    {
        title: 'Top 5 Tips for a Kitchen Remodel',
        content: [
            {
                type:'paragraph',
                data: 'Planning a kitchen remodel can be daunting. Here are our top 5 tips to make the process smooth and successful. From budgeting to choosing materials, we cover it all.'
            }
        ]},
    {
        title: 'How to Choose the Right Paint Colors for Your Home',
        content: [
            {
                type: 'paragraph',
                data: 'Choosing paint colors can be a big decision. We provide a guide to help you select the perfect palette that reflects your style and personality.'
            },
        ]
    },
    {
        title: 'How to Choose the Right Paint Colors for Your Home',
        content: [
            {
                type: 'paragraph',
                data: 'Living in a small apartment? Don\'t worry! We share clever design tricks and furniture choices to make the most of every square foot.'
            },
        ]
    },
];

const projects = [
    {
        title: 'Modern Kitchen Renovation',
        description: [
            {
                type:'beforeImage',
                data: 'https://placehold.co/600x400/000/FFF?text=Kitchen+1'
            },
            {
                type:'afterImage',
                data: 'https://placehold.co/600x400/000/FFF?text=Kitchen+2'
            },
            {
                type: 'paragraph',
                data: 'A complete kitchen overhaul featuring state-of-the-art appliances and a minimalist design.'
            },
        ],
        images: ['https://placehold.co/600x400/000/FFF?text=Kitchen+1', 'https://placehold.co/600x400/000/FFF?text=Kitchen+2'],
        workType: 'kitchen-remodeling',
        finishDate: new Date('2024-05-15T00:00:00Z'),
        status: 'done'
    },
    {
        title: 'Cozy Bathroom Remodel',
        description: [
            {
                type: 'paragraph',
                data: 'Transformed an outdated bathroom into a luxurious, spa-like retreat.'
            },
            {
                type:'image',
                data: 'https://placehold.co/600x400/000/FFF?text=Bathroom+1'
            },
            {
                type:'image',
                data: 'https://placehold.co/600x400/000/FFF?text=Bathroom+2'
            },
        ],
        images: ['https://placehold.co/600x400/000/FFF?text=Bathroom+1', 'https://placehold.co/600x400/000/FFF?text=Bathroom+2'],
        workType: 'bathroom-renovation',
        finishDate: new Date('2024-03-20T00:00:00Z'),
        status: 'done'
    },
];

const pageContent = [
    {
        pageName: 'services',
        content: {
            services:[
                {
                    title: 'Full House Refurbishment',
                    description: 'Complete home makeovers from foundation to finishing touches. We coordinate all aspects of your renovation project.',
                    features: ['Structural updates', 'Electrical work', 'Plumbing systems', 'HVAC integration', 'Interior finishing'],
                    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    path: '/services/full-house-refurbishment'
                },
                {
                    title: 'Kitchen Remodeling',
                    description: 'Complete kitchen transformations with modern designs and premium materials. From cabinet installation to appliance integration, we handle every detail.',
                    features: ['Custom cabinetry', 'Appliance installation', 'Countertop replacement', 'Lighting design', 'Plumbing updates'],
                    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    path: '/services/kitchen-remodeling'
                },
                {
                    title: 'Bathroom Renovation',
                    description: 'Luxury bathroom renovations that combine style with functionality. We create spa-like environments tailored to your preferences.',
                    features: ['Tile installation', 'Fixture replacement', 'Vanity design', 'Shower/tub systems', 'Ventilation'],
                    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    path: '/services/bathroom-renovation'
                },
                {
                    title: 'Interior Design',
                    description: 'Professional interior design services to maximize your space potential. We create functional and beautiful living spaces.',
                    features: ['Space planning', 'Color consultation', 'Furniture selection', 'Decor styling', 'Custom solutions'],
                    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    path: '/services/interior-design'
                },
                {
                    title: 'Flooring Installation',
                    description: 'Professional flooring installation with premium materials and expert craftsmanship. We offer various flooring options for every room.',
                    features: ['Hardwood installation', 'Tile work', 'Carpet laying', 'Vinyl flooring', 'Subfloor preparation'],
                    image: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/what-to-expect-during-your-hard-surface-flooring-installation-2023-step-2.jpg',
                    path: '/services/flooring-installation'
                }
            ],
            process: [
                {
                    step: '01',
                    title: 'Consultation',
                    description: 'We discuss your vision, budget, and timeline to create a customized plan.'
                },
                {
                    step: '02',
                    title: 'Design & Planning',
                    description: 'Our experts create detailed designs and project timelines with cost estimates.'
                },
                {
                    step: '03',
                    title: 'Execution',
                    description: 'Professional craftsmen execute the work with minimal disruption to your life.'
                },
                {
                    step: '04',
                    title: 'Completion',
                    description: 'Final walkthrough, cleanup, and warranty information provided.'
                }
            ],
            'full-house-refurbishment':{
                title: 'Full House Refurbishment',
                introText: 'From foundation to finishing touches, we handle every aspect of your full-house refurbishment. Our comprehensive approach ensures a cohesive design and seamless execution, transforming your entire home into a functional and beautiful space. We coordinate all trades and manage the project from start to finish, providing a stress-free experience.',
                introImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c6c757?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
                introImageLocation: 'Location: Anytown, USA',
                whatsInvolved: [
                    { title: 'Planning & Design', description: 'Detailed blueprints, 3D renderings, and material selection.' },
                    { title: 'Structural & Demolition', description: 'Safe and precise removal of walls, floors, and other structural elements.' },
                    { title: 'Electrical & Plumbing', description: 'Complete rewiring and repiping to modern standards.' },
                    { title: 'HVAC Integration', description: 'Installation of new heating, ventilation, and air conditioning systems.' },
                    { title: 'Insulation & Drywall', description: 'Upgrading insulation for energy efficiency and preparing walls for finishes.' },
                    { title: 'Flooring & Tiling', description: 'Professional installation of all types of flooring and wall tiles.' },
                    { title: 'Painting & Decorating', description: 'Interior and exterior painting, wallpapering, and finishing.' },
                    { title: 'Fixtures & Fittings', description: 'Installation of light fixtures, faucets, and other hardware.' },
                    { title: 'Quality Assurance', description: 'Regular checks and final inspections to ensure every detail meets our high standards.' }
                ],
                workflowTimeline: [
                    { title: 'Initial Consultation', duration: '1-2 weeks', description: 'We discuss your vision, budget, and project scope.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c6c757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Design & Planning', duration: '2-4 weeks', description: 'Finalizing designs, material selections, and obtaining permits.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Demolition & Prep', duration: '1-2 weeks', description: 'Safe removal of existing structures and preparing the site.', image: 'https://images.unsplash.com/photo-1599809275671-bfb5638c4c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Structural & Utility Work', duration: '4-6 weeks', description: 'Executing major structural, electrical, and plumbing work.', image: 'https://images.unsplash.com/photo-1560417978-62024283c847?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Finishing Touches', duration: '2-3 weeks', description: 'Painting, flooring, cabinetry, and fixture installations.', image: 'https://images.unsplash.com/photo-1588880331179-bc224855a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Final Handover', duration: '1 week', description: 'Final walk-through, cleanup, and providing warranty information.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
                ],
                previousProjects: [
                    { location: 'Anytown, USA', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c6c757?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Greenwich, CT', image: 'https://images.unsplash.com/photo-1588880331179-bc224855a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Brooklyn, NY', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Los Angeles, CA', image: 'https://images.unsplash.com/photo-1513584684333-e1227182285a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Dallas, TX', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' }
                ],
                faqs: [
                    { question: 'How long does a full house refurbishment take?', answer: 'The timeline varies based on the scope, but typically ranges from 3 to 6 months.' },
                    { question: 'Will I need to move out during the refurbishment?', answer: 'For a full refurbishment, it is often recommended for safety and efficiency, but we can discuss options.' },
                    { question: 'Are you licensed and insured?', answer: 'Yes, we are fully licensed and insured, providing peace of mind throughout the project.' }
                ],
                ctaText: 'Ready to Transform Your Entire Home?',
                ctaDescription: 'Contact us today to begin your full house refurbishment journey.',
            },
            'kitchen-remodeling': {
                title: 'Kitchen Remodeling',
                introText: 'Transform your kitchen into the culinary space you’ve always dreamed of. Our kitchen remodeling services cover everything from modernizing cabinetry and countertops to optimizing your layout for maximum efficiency and style. We focus on creating a functional and beautiful space that is perfect for cooking and entertaining.',
                introImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
                introImageLocation: 'Location: Springfield, IL',
                whatsInvolved: [
                    { title: 'Custom Cabinetry', description: 'Design and installation of custom cabinets for optimal storage and aesthetics.' },
                    { title: 'Countertop Installation', description: 'Expert fitting of granite, quartz, butcher block, and other premium materials.' },
                    { title: 'Appliance Integration', description: 'Seamless installation of new appliances, including smart home technology.' },
                    { title: 'Plumbing & Electrical', description: 'Upgrading and rerouting of all necessary plumbing and electrical systems.' },
                    { title: 'Lighting Design', description: 'Creating a layered lighting plan with task, ambient, and accent lighting.' },
                    { title: 'Flooring & Backsplash', description: 'Installation of new kitchen flooring and stylish backsplash tiling.' },
                    { title: 'Ventilation Systems', description: 'Installing high-performance range hoods and ventilation solutions.' },
                    { title: 'Final Touches', description: 'Detailed finishing, hardware installation, and a final cleanup.' }
                ],
                workflowTimeline: [
                    { title: 'Initial Consultation', duration: '1 week', description: 'Discussing design ideas, budget, and project scope.', image: 'https://images.unsplash.com/photo-1616058925562-b9e9b0d2d3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Design & Planning', duration: '2-3 weeks', description: 'Finalizing layouts, material selections, and obtaining permits.', image: 'https://images.unsplash.com/photo-1582268461014-99a374c4383c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Demolition & Prep', duration: '3-5 days', description: 'Careful removal of old fixtures and preparing the space.', image: 'https://images.unsplash.com/photo-1594770267233-8a0a26d1d4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Installation Phase', duration: '3-4 weeks', description: 'Installing new cabinetry, electrical, plumbing, and drywall.', image: 'https://images.unsplash.com/photo-1579624584281-b54133f99e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Finishing Touches', duration: '1-2 weeks', description: 'Countertop, backsplash, painting, and appliance installation.', image: 'https://images.unsplash.com/photo-1618219740924-f7a9f7d4e341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Final Review', duration: '1 day', description: 'Client walkthrough and project completion.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' }
                ],
                previousProjects: [
                    { location: 'Springfield, IL', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'New York, NY', image: 'https://images.unsplash.com/photo-1597872951167-e9a31a9657de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'San Francisco, CA', image: 'https://images.unsplash.com/photo-1616058925562-b9e9b0d2d3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Chicago, IL', image: 'https://images.unsplash.com/photo-1598282361138-038166e4a2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Miami, FL', image: 'https://images.unsplash.com/photo-1579624584281-b54133f99e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' }
                ],
                faqs: [
                    { question: 'What is the average cost of a kitchen remodel?', answer: 'The cost varies widely based on size, materials, and complexity. We provide a detailed estimate after our initial consultation.' },
                    { question: 'How long will my kitchen be unusable?', answer: 'Kitchen remodels typically take 4-8 weeks, depending on the scope. We work to minimize disruption.' },
                    { question: 'Can you help with design ideas?', answer: 'Yes, our team includes professional designers who will work with you to create a personalized plan.' }
                ],
                ctaText: 'Ready for a Kitchen That Inspires?',
                ctaDescription: 'Contact us today for a free consultation on your kitchen remodeling project.',
            },
            'bathroom-renovation': {
                title: 'Bathroom Renovation',
                introText: 'Turn your outdated bathroom into a luxurious, spa-like sanctuary. We handle every aspect of bathroom renovation, from modernizing fixtures and tiling to completely reconfiguring the space for better flow and functionality. Our goal is to create a serene and stylish retreat that enhances your daily routine.',
                introImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
                introImageLocation: 'Location: Seattle, WA',
                whatsInvolved: [
                    { title: 'Tiling & Flooring', description: 'Expert installation of all types of tile, from ceramic to natural stone.' },
                    { title: 'Plumbing & Fixtures', description: 'Upgrading faucets, showerheads, tubs, and toilets for modern performance.' },
                    { title: 'Vanity & Storage', description: 'Installation of new vanities, cabinets, and custom storage solutions.' },
                    { title: 'Lighting & Mirrors', description: 'Designing and installing functional and decorative lighting and mirrors.' },
                    { title: 'Showers & Bathtubs', description: 'Custom shower enclosures, walk-in showers, and bathtub installations.' },
                    { title: 'Ventilation', description: 'Ensuring proper ventilation to prevent moisture and mold issues.' },
                    { title: 'Accessibility Updates', description: 'Installing grab bars and other features for enhanced safety and accessibility.' },
                    { title: 'Final Detailing', description: 'Meticulous finishing, sealing, and cleanup of the renovated space.' }
                ],
                workflowTimeline: [
                    { title: 'Initial Consultation', duration: '1 week', description: 'Defining your vision, budget, and essential features.', image: 'https://images.unsplash.com/photo-1582268461014-99a374c4383c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Design & Planning', duration: '2 weeks', description: 'Creating a detailed layout and selecting all materials and fixtures.', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Demolition & Prep', duration: '1-3 days', description: 'Removing existing fixtures and preparing surfaces for installation.', image: 'https://images.unsplash.com/photo-1594770267233-8a0a26d1d4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Rough-in Phase', duration: '1-2 weeks', description: 'Installing new plumbing and electrical lines as per the design.', image: 'https://images.unsplash.com/photo-1616058925562-b9e9b0d2d3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Installation & Finishing', duration: '2-3 weeks', description: 'Tiling, painting, and installing all new fixtures and hardware.', image: 'https://images.unsplash.com/photo-1588880331179-bc224855a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Final Handover', duration: '1 day', description: 'Final inspection and client walkthrough to ensure satisfaction.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' }
                ],
                previousProjects: [
                    { location: 'Seattle, WA', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Miami, FL', image: 'https://images.unsplash.com/photo-1574889623697-798e4d1f4222?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Atlanta, GA', image: 'https://images.unsplash.com/photo-1616058925562-b9e9b0d2d3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Boston, MA', image: 'https://images.unsplash.com/photo-1579624584281-b54133f99e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Denver, CO', image: 'https://images.unsplash.com/photo-1575051806306-03c20058b885?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' }
                ],
                faqs: [
                    { question: 'What is the most popular style for bathroom renovations?', answer: 'We are seeing a trend towards minimalist, modern designs with clean lines and neutral colors, but we can accommodate any style you prefer.' },
                    { question: 'Do you offer custom shower designs?', answer: 'Yes, we specialize in building custom walk-in showers and spa-like features tailored to your space.' },
                    { question: 'How do you handle water damage?', answer: 'Our team is experienced in identifying and repairing water damage before the renovation to ensure a solid foundation for your new bathroom.' }
                ],
                ctaText: 'Create Your Personal Spa-like Retreat',
                ctaDescription: 'Contact us today for a free consultation on your bathroom renovation project.',
            },
            'interior-design':{
                title: 'Interior Design',
                introText: 'Our professional interior design services are tailored to create beautiful, functional, and personalized living spaces. We work with you to understand your style, needs, and budget, translating your vision into a cohesive design. From selecting color palettes and furniture to optimizing layouts, we ensure every element works in harmony.',
                introImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
                introImageLocation: 'Location: London, UK',
                whatsInvolved: [
                    { title: 'Space Planning', description: 'Optimizing the layout of your home for better flow and functionality.' },
                    { title: 'Color Consultation', description: 'Selecting the perfect paint colors, textures, and finishes for each room.' },
                    { title: 'Furniture & Decor Selection', description: 'Sourcing and curating furniture, lighting, art, and accessories.' },
                    { title: 'Custom Solutions', description: 'Designing bespoke pieces like built-in shelving, cabinetry, and unique fixtures.' },
                    { title: 'Lighting Design', description: 'Creating a strategic lighting plan to enhance mood and highlight features.' },
                    { title: 'Material Sourcing', description: 'Assisting in the selection of all materials, from flooring to fabrics.' }
                ],
                workflowTimeline: [
                    { title: 'Discovery Session', duration: '1-2 weeks', description: 'Getting to know you and your lifestyle to understand your needs.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Concept & Mood Board', duration: '1-2 weeks', description: 'Developing a visual concept to capture the desired aesthetic and feel.', image: 'https://images.unsplash.com/photo-1616058925562-b9e9b0d2d3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Final Design', duration: '2-3 weeks', description: 'Creating a detailed design plan with all specifications and renderings.', image: 'https://images.unsplash.com/photo-1588880331179-bc224855a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Procurement & Coordination', duration: 'Ongoing', description: 'Sourcing materials and managing the coordination of all installations.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Installation & Styling', duration: '1-2 weeks', description: 'Bringing the design to life with furniture placement and styling.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
                ],
                previousProjects: [
                    { location: 'London, UK', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Paris, France', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c6c757?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Milan, Italy', image: 'https://images.unsplash.com/photo-1588880331179-bc224855a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Berlin, Germany', image: 'https://images.unsplash.com/photo-1513584684333-e1227182285a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' }
                ],
                faqs: [
                    { question: 'Do you offer consultations for small projects?', answer: 'Yes, we offer consultations for projects of all sizes, from a single room to an entire home.' },
                    { question: 'What is the difference between a decorator and an interior designer?', answer: 'A decorator focuses on surface-level aesthetics, while an interior designer is trained to create functional spaces and can handle structural changes.' },
                    { question: 'How long does the design process take?', answer: 'The design process typically takes 3-6 weeks, depending on the complexity and client feedback.' }
                ],
                ctaText: 'Design a Home That Reflects You',
                ctaDescription: 'Contact us today to start your interior design journey with our expert team.',
            },
            'flooring-installation': {
                title: 'Flooring Installation',
                introText: 'Enhance the beauty and value of your home with our expert flooring installation services. We specialize in a wide range of materials, including hardwood, tile, laminate, and luxury vinyl. Our team ensures a meticulous installation process, resulting in a flawless and durable finish that lasts for years to come.',
                introImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
                introImageLocation: 'Location: Austin, TX',
                whatsInvolved: [
                    { title: 'Subfloor Preparation', description: 'Ensuring the base surface is clean, level, and ready for installation.' },
                    { title: 'Hardwood Installation', description: 'Professional fitting of solid and engineered hardwood flooring.' },
                    { title: 'Tile & Stone Work', description: 'Laying ceramic, porcelain, and natural stone tiles for kitchens and bathrooms.' },
                    { title: 'Laminate & Vinyl', description: 'Efficient installation of durable laminate and luxury vinyl plank flooring.' },
                    { title: 'Baseboard & Trim', description: 'Installing new baseboards and transition pieces for a finished look.' },
                    { title: 'Finishing & Sealing', description: 'Sanding, staining, and sealing floors for a long-lasting, beautiful finish.' }
                ],
                workflowTimeline: [
                    { title: 'Initial Consultation', duration: '1 day', description: 'Assessing the space and discussing material options and budget.', image: 'https://images.unsplash.com/photo-1582268461014-99a374c4383c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Material Selection', duration: '1 week', description: 'Choosing the perfect flooring material from our extensive catalog.', image: 'https://images.unsplash.com/photo-1616058925562-b9e9b0d2d3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Site Preparation', duration: '1-2 days', description: 'Removing old flooring and preparing the subfloor for the new installation.', image: 'https://images.unsplash.com/photo-1594770267233-8a0a26d1d4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Installation', duration: '3-7 days', description: 'Expert installation of your new flooring, with attention to every detail.', image: 'https://images.unsplash.com/photo-1588880331179-bc224855a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { title: 'Finishing & Cleanup', duration: '1 day', description: 'Applying any necessary finishes and ensuring the space is clean and ready.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
                ],
                previousProjects: [
                    { location: 'Austin, TX', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Nashville, TN', image: 'https://images.unsplash.com/photo-1600481135439-d3e70d4f9012?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Philadelphia, PA', image: 'https://images.unsplash.com/photo-1513584684333-e1227182285a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'San Diego, CA', image: 'https://images.unsplash.com/photo-1598282361138-038166e4a2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
                    { location: 'Kansas City, MO', image: 'https://images.unsplash.com/photo-1582268461014-99a374c4383c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' }
                ],
                faqs: [
                    { question: 'What is the best type of flooring for a kitchen?', answer: 'For kitchens, we recommend durable and water-resistant options like tile, luxury vinyl, or engineered hardwood.' },
                    { question: 'How long does a typical installation take?', answer: 'The timeline varies by material and room size, but most installations are completed within 1-3 days.' },
                    { question: 'Do I need to prepare the room before you arrive?', answer: 'Yes, we ask that you clear the room of all furniture and objects. We will handle the old flooring removal.' }
                ],
                ctaText: 'Step onto Your New Floors',
                ctaDescription: 'Contact us today for a free estimate on your flooring installation project.',
            }
        }
    },
    {
        pageName: 'about',
        content: {
            banner: {
                heading: 'Crafting spaces that tell a story.',
                subheading: 'We believe that great design is a conversation between form and function, tailored to your unique vision.',
                imageUrl: 'https://placehold.co/1600x900/E5E7EB/4B5563?text=About+Us',
            },
            whoWeAre: {
                heading: 'Who We Are',
                paragraphs: [
                    'Founded on the principle that every space has potential, RenovatePro has been transforming homes and businesses for over a decade. Our journey began with a simple idea: to make high-quality, personalized renovation accessible and stress-free. We’re a team of passionate designers, skilled builders, and project managers dedicated to bringing your dreams to life, one detail at a time.',
                    'From the initial consultation to the final reveal, we work collaboratively with our clients, ensuring their voice is heard at every step. We pride ourselves on our transparency, craftsmanship, and a commitment to exceeding expectations.',
                ],
                imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Our+Team',
            },
            whatWeValue: {
                heading: 'What We Value',
                values: [
                    {
                        title: 'Integrity',
                        description: 'We operate with honesty and transparency, building trust through clear communication and ethical practices.',
                    },
                    {
                        title: 'Craftsmanship',
                        description: 'Our work is a testament to our skill and attention to detail. We are dedicated to delivering lasting quality in every project.',
                    },
                    {
                        title: 'Collaboration',
                        description: 'Your vision is our blueprint. We believe the best results come from working together, respecting your ideas and insights.',
                    },
                    {
                        title: 'Innovation',
                        description: 'We stay ahead of design trends and construction technologies to offer modern, efficient, and creative solutions.',
                    },
                ],
            },
            members: [
                {
                    name: 'Jane Doe',
                    title: 'Chief Design Officer',
                    intro: 'A visionary in modern and sustainable design.',
                    imageUrl: 'https://placehold.co/400x500/E5E7EB/4B5563?text=Jane+Doe',
                    link:"#"
                },
                {
                    name: 'John Smith',
                    title: 'CEO & Lead Builder',
                    intro: 'Dedicated to precision and bringing blueprints to life.',
                    imageUrl: 'https://placehold.co/400x500/E5E7EB/4B5563?text=John+Smith',
                    link:"#"
                },
                {
                    name: 'Emily White',
                    title: 'Head of Operations',
                    intro: 'Ensuring every project runs smoothly from start to finish.',
                    imageUrl: 'https://placehold.co/400x500/E5E7EB/4B5563?text=Emily+White',
                    link:"#"
                },
            ],
        }
    },
    {
        pageName: 'contact',
        content: {
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
    },
    {
        pageName: 'projects',
        content: {
            header: {
                title: 'View our projects. See our process.',
                description: 'In between a client’s vision and the project’s final transformation, there are many phases, stops, and decisions to be made for a home renovation.\n Explore our projects by city to get an insider’s look at our process. You’ll see how we approach each project and what drives construction and design decisions. With bold before-and-after photos and behind-the-scenes videos, you’ll be inspired to start your new chapter.',
                imageUrl: 'https://placehold.co/800x600/E5E7EB/4B5563?text=Project+Banner'
            },
        }
    }
];

const companyInfo = {
    tel:{
        salesTel: ['1112223333',]
    },
    offices: {
        'us_east': {
            name: "US East Office",
            tel: "2223334444",
            address: "345 Main St, New York, NY 10001"
        },
        'us_central': {
            name: "US Central Office",
            tel: "2223334444",
            address: "123 Ocean Blvd, Dallas, TX 12345"
        },
    },
    socialMedia: {
        facebook: "#",
        instagram:"#",
        youtube:"#",
        pinterest:"#"
    },
    email:{
        contact:"contact@hrc.com"
    }
};

// --- Main Seeding Function ---
const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected.');

        // 1. Clear existing data
        console.log('Clearing existing data...');
        await User.deleteMany({});
        await Blog.deleteMany({});
        await Project.deleteMany({});
        await PageContent.deleteMany({});
        await CompanyInfo.deleteMany({});
        console.log('All collections cleared.');

        // 2. Insert new data
        console.log('Seeding database with sample data...');

        // Insert users and hash their passwords
        const hashedUsers = await Promise.all(users.map(async user => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return { ...user, password: hashedPassword };
        }));
        const insertedUsers = await User.insertMany(hashedUsers);
        const adminUser = insertedUsers.find(u => u.role === 'admin');

        // Insert blogs, linking them to the admin user
        const blogsWithAuthor = blogs.map(blog => ({ ...blog, author: adminUser._id }));
        await Blog.insertMany(blogsWithAuthor);

        // Insert projects
        await Project.insertMany(projects);

        // Insert page content
        await PageContent.insertMany(pageContent);

        // Insert company info
        await CompanyInfo.create(companyInfo);

        console.log('Database seeded successfully!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        // Close the database connection
        mongoose.connection.close();
        console.log('MongoDB connection closed.');
    }
};

// Run the seeder function
seedDatabase();
