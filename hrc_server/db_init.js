/**
 * Database Seeding Script
 * This script connects to MongoDB and populates the database with sample data.
 * It's useful for setting up a clean development environment.
 *
 * To run this script, navigate to your project folder in the terminal and execute:
 * node seed.js
 */

// Load environment variables from .env file
import 'dotenv/config.js'

// Import required modules
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import * as path from "node:path";

// --- Import Mongoose Models ---
import User from "./mongo/User.js";
import Blog from './mongo/Blog.js';
import Project  from "./mongo/Project.js";
import CompanyInfo from './mongo/CompanyInfo.js';
import PageContent  from "./mongo/PageContent.js";

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

const sampleBlogs = [
    {
        title: 'Top 5 Tips for a Kitchen Remodel',
        content: [
            {
                contentType:'text',
                data: 'Planning a kitchen remodel can be daunting. Here are our top 5 tips to make the process smooth and successful. From budgeting to choosing materials, we cover it all.'
            }
        ]},
    {
        title: 'How to Choose the Right Paint Colors for Your Home',
        content: 'Choosing paint colors can be a big decision. We provide a guide to help you select the perfect palette that reflects your style and personality.',
    },
    {
        title: 'Maximizing Small Spaces with Smart Design',
        content: 'Living in a small apartment? Don\'t worry! We share clever design tricks and furniture choices to make the most of every square foot.',
    }
];

const sampleProjects = [
    {
        title: 'Modern Kitchen Renovation',
        description: 'A complete kitchen overhaul featuring state-of-the-art appliances and a minimalist design.',
        images: ['https://placehold.co/600x400/000/FFF?text=Kitchen+1', 'https://placehold.co/600x400/000/FFF?text=Kitchen+2'],
        workType: 'Kitchen',
        finishDate: new Date('2024-05-15T00:00:00Z'),
        status: 'done'
    },
    {
        title: 'Cozy Bathroom Remodel',
        description: 'Transformed an outdated bathroom into a luxurious, spa-like retreat.',
        images: ['https://placehold.co/600x400/000/FFF?text=Bathroom+1', 'https://placehold.co/600x400/000/FFF?text=Bathroom+2'],
        workType: 'Bathroom',
        finishDate: new Date('2024-03-20T00:00:00Z'),
        status: 'done'
    },
    {
        title: 'Basement Conversion',
        description: 'A dark, unused basement was converted into a bright and functional living space.',
        images: ['https://placehold.co/600x400/000/FFF?text=Basement+1', 'https://placehold.co/600x400/000/FFF?text=Basement+2'],
        workType: 'Basement',
        status: 'ongoing'
    },
    {
        title: 'Bathroom Remodel Phase 2',
        description: 'Adding custom cabinets and a new shower to an existing remodel.',
        images: ['https://placehold.co/600x400/000/FFF?text=Bathroom+3', 'https://placehold.co/600x400/000/FFF?text=Bathroom+4'],
        workType: 'Bathroom',
        status: 'ongoing'
    }
];

const samplePageContent = [
    {
        pageName: 'about',
        content: {
            title: 'Our Story',
            body: 'We are a dedicated team of professionals passionate about transforming homes into beautiful, functional spaces.'
        }
    },
    {
        pageName: 'contact',
        content: {
            phone: '555-123-4567',
            email: 'info@refurbishment.com',
            address: '123 Main St, Anytown, USA'
        }
    }
];

const sampleCompanyInfo = {
    info: {
        companyName: 'Refurbish Pros',
        tagline: 'Your dream home, professionally built.',
        since: 2010
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
        const blogsWithAuthor = sampleBlogs.map(blog => ({ ...blog, author: adminUser._id }));
        await Blog.insertMany(blogsWithAuthor);

        // Insert projects
        await Project.insertMany(sampleProjects);

        // Insert page content
        await PageContent.insertMany(samplePageContent);

        // Insert company info
        await CompanyInfo.create(sampleCompanyInfo);

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
