import mongoose from "mongoose";

const workTypeEnum = [
    'full-house-refurbishment',
    'kitchen-remodeling',
    'bathroom-renovation',
    'interior-design',
    'flooring-installation'
]

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: [
        {
            type: { type: String, required: true }, // e.g., 'title', 'paragraph', 'image', 'beforeImage', 'afterImage'
            data: { type: mongoose.Schema.Types.Mixed, required: true } // The actual content
        }
    ],
    workType: {type: String, enum:workTypeEnum, required: true},
    finishDate: {type: Date},
    images: [String], // Array of image URLs
    status: { type: String, enum: ['done', 'ongoing'], default: 'ongoing' }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;