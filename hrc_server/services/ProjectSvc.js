// --- Project APIs ---
import express from "express";
const router = express.Router();
import {authenticateToken, checkAdminRole} from '../middlewares/AuthMw.js';
import Project  from "../domain/Project.js";

// GET /api/project
// Get a paginated list of projects with optional filters.
router.get('', async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 6;
        const skip = (page - 1) * limit;

        const filter = {};
        if (req.query.workType) {
            filter.workType = req.query.workType;
        }
        if (req.query.status) {
            filter.status = req.query.status;
        }

        const projects = await Project.find(filter)
            .sort({ finishDate: -1 }) // Sort by creation date in descending order
            .skip(skip)
            .limit(limit);

        const totalProjects = await Project.countDocuments(filter);

        res.json({
            items: projects,
            currentPage: page,
            totalPages: Math.ceil(totalProjects / limit),
            totalProjects
        });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching projects.', details: err.message });
    }
});

// GET /api/project/byWorkType
// Get at most three projects for each work type.
router.get('/overview', async (req, res) => {
    try {
        const uniqueWorkTypes = await Project.distinct('workType');
        const projectsByWorkType = {};

        // Use a for...of loop to fetch projects for each unique work type.
        for (const workType of uniqueWorkTypes) {
            projectsByWorkType[workType] = await Project.find({workType})
                .sort({createdAt: -1})
                .limit(3);
        }

        res.json(projectsByWorkType);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching projects by work type.', details: err.message });
    }
});

// GET /api/project/:id
// Get a single project by its ID.
router.get('/api/project/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.json({ project });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching project.', details: err.message });
    }
});

// POST /api/project/create
router.post('/create', authenticateToken, checkAdminRole, async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json({ message: 'Project created successfully.', project: newProject });
    } catch (err) {
        res.status(500).json({ error: 'Error creating project.', details: err.message });
    }
});

// PUT /api/project/edit/:id
router.put('/edit/:id', authenticateToken, checkAdminRole, async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        res.json({ message: 'Project updated successfully.', project: updatedProject });
    } catch (err) {
        res.status(500).json({ error: 'Error editing project.', details: err.message });
    }
});

export default router;