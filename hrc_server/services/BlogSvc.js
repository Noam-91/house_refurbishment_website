// --- Blog APIs ---
import express from "express";
const router = express.Router();
import Blog from '../mongo/Blog.js';
import {authenticateToken,checkAdminRole} from "../middlewares/AuthMw.js";

// GET /api/blog
// Get a paginated list of all blog posts, sorted by date.
router.get('', async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 12;
        const skip = (page - 1) * limit;

        const blogs = await Blog.find()
            .sort({ createdAt: -1 }) // Sort by creation date in descending order
            .skip(skip)
            .limit(limit);

        const totalBlogs = await Blog.countDocuments();

        res.json({
            blogs,
            currentPage: page,
            totalPages: Math.ceil(totalBlogs / limit),
            totalBlogs
        });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching blog posts.', details: err.message });
    }
});

// GET /api/blog/:id
// Get a single blog post by its ID.
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }
        res.json({ blog });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching blog post.', details: err.message });
    }
});

// POST /api/blog/create
// Create a new blog
router.post('/create', authenticateToken, async (req, res) => {
    try {
        const { title, content } = req.body;
        const newBlog = new Blog({ title, content, author: req.user.id });
        await newBlog.save();
        res.status(201).json({ message: 'Blog post created successfully.', blog: newBlog });
    } catch (err) {
        res.status(500).json({ error: 'Error creating blog post.', details: err.message });
    }
});

// PUT /api/blog/edit/:id
router.put('/edit/:id', authenticateToken, async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedBlog = await Blog.findOneAndUpdate(
            { _id: req.params.id, author: req.user.id },
            { $set: { title, content } },
            { new: true } // Return the updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog post not found or you are not the author.' });
        }
        res.json({ message: 'Blog post updated successfully.', blog: updatedBlog });
    } catch (err) {
        res.status(500).json({ error: 'Error editing blog post.', details: err.message });
    }
});

export default router;