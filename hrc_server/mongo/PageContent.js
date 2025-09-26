import mongoose from "mongoose";

const pageContentSchema = new mongoose.Schema({
    pageName: { type: String, required: true, unique: true },
    content: { type: Object } // Store content as a generic object
});

const PageContent = mongoose.model('PageContent', pageContentSchema);

export default PageContent;