// --- Company Info API ---
import express from "express";
const router = express.Router();
import CompanyInfo from '../mongo/CompanyInfo.js';
import {authenticateToken, checkAdminRole} from '../middlewares/AuthMw.js';

// GET /api/companyInfo
// Get all company info.
router.get('', async (req, res) => {
    try {
        const companyInfo = await CompanyInfo.find({});
        res.json({ companyInfo });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching company info.', details: err.message });
    }
});


// PUT /api/companyInfo/edit
router.put('/edit', authenticateToken, checkAdminRole, async (req, res) => {
    try {
        const { info } = req.body;
        // Using findOneAndUpdate with upsert to create or update a single company info document
        const updatedInfo = await CompanyInfo.findOneAndUpdate(
            {}, // Empty filter to find the first/only document
            { info },
            { new: true, upsert: true }
        );
        res.json({ message: 'Company information updated successfully.', companyInfo: updatedInfo });
    } catch (err) {
        res.status(500).json({ error: 'Error editing company info.', details: err.message });
    }
});

export default router;