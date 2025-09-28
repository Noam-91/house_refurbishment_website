import mongoose from "mongoose";

const pageContentSchema = new mongoose.Schema({
    pageName: { type: String, required: true, unique: true },
    content: [
        {
            type: mongoose.Schema.Types.Mixed,
            required: true
        }
    ] // Store content as a generic object
});

const PageContent = mongoose.model('PageContent', pageContentSchema);

export default PageContent;