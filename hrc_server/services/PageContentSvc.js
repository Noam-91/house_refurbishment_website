// --- PageContent APIs ---
import express from "express";
const router = express.Router();
import {authenticateToken, checkAdminRole} from '../middlewares/AuthMw.js';
import PageContent  from "../domain/PageContent.js";

// GET /api/pageContent
// Get all page content records.
router.get('', async (req, res) => {
    try {
        const pageContents = await PageContent.find({});
        res.json({ pageContents });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching page content.', details: err.message });
    }
});

// PUT /api/pageContent/edit/:pageName
router.put('/edit/:pageName', authenticateToken, checkAdminRole, async (req, res) => {
    try {
        const { content } = req.body;
        const updatedPage = await PageContent.findOneAndUpdate(
            { pageName: req.params.pageName },
            { content },
            { new: true, upsert: true } // Create if it doesn't exist
        );
        res.json({ message: 'Page content updated successfully.', page: updatedPage });
    } catch (err) {
        res.status(500).json({ error: 'Error editing page content.', details: err.message });
    }
});

export default router;