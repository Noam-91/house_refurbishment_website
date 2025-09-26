import mongoose from "mongoose";

const pageContentSchema = new mongoose.Schema({
    pageName: { type: String, required: true, unique: true },
    content: [
        {
            element: { type: String, required: true }, // e.g., 'title', 'paragraph', 'image', 'beforeImage', 'afterImage'
            data: { type: mongoose.Schema.Types.Mixed, required: true } // The actual content
        }
    ] // Store content as a generic object
});

const PageContent = mongoose.model('PageContent', pageContentSchema);

export default PageContent;