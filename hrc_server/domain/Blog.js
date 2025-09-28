import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: [
        {
            type: { type: String, required: true }, // e.g., 'title', 'paragraph', 'image', 'list'
            data: { type: mongoose.Schema.Types.Mixed, required: true } // The actual content
        }
    ],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;