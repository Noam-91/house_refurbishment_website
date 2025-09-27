// Load environment variables from .env file
import 'dotenv/config.js'

// Import required modules
import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';

// --- Configuration ---
const MONGODB_URI = process.env.MONGODB_URI;

// --- Initialize App ---
const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

// --- Services ---
// --- Auth ---
import authRoutes from './services/AuthSvc.js'
app.use('/api/auth', authRoutes);
// --- Blog ---
import blogRoutes from './services/BlogSvc.js';
app.use('/api/blog',blogRoutes);
// --- Project ---
import projectRoutes from './services/ProjectSvc.js';
app.use('/api/project', projectRoutes);
// --- Company Info ---
import companyInfoRoutes from './services/CompanyInfoSvc.js'
app.use('/api/companyInfo',companyInfoRoutes);
// --- Page Content ---
import pageContentRoutes from './services/PageContentSvc.js'
app.use('/api/pageContent',pageContentRoutes);

// --- Monitor APIs ---
app.get('/api/health', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    res.status(200).json({
        status: 'ok',
        database: {
            status: dbStatus,
            message: 'Database connection is ' + dbStatus.toLowerCase()
        },
        uptime: process.uptime()
    });
});


// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app
export default app;