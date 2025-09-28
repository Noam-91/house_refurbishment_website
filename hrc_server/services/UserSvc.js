// --- Auth APIs ---
import express from "express";
const router = express.Router();
import User from "../domain/User.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {authenticateToken} from "../middlewares/AuthMw.js";
const JWT_SECRET = process.env.JWT_SECRET;

// PUT /api/users/:id
// Edit a specific user profile.
router.put('/users/:id', authenticateToken, async (req, res) => {
    try {
        const userIdToEdit = req.params.id;
        const authenticatedUserId = req.user.id;
        const authenticatedUserRole = req.user.role;

        // Check if the authenticated user is the owner or an admin
        if (userIdToEdit !== authenticatedUserId && authenticatedUserRole !== 'admin') {
            return res.status(403).json({ message: 'Access denied. You can only edit your own profile or must be an admin.' });
        }

        const { newUsername, newEmail, newPassword } = req.body;
        const updates = {};
        if (newUsername) updates.username = newUsername;
        if (newEmail) updates.email = newEmail;
        if (newPassword) updates.password = await bcrypt.hash(newPassword, 10);

        await User.findByIdAndUpdate(userIdToEdit, updates);
        res.json({ message: 'User profile updated successfully.' });

    } catch (err) {
        res.status(500).json({ error: 'Error updating user profile.', details: err.message });
    }
});

// GET /api/users/:id
// View a specific user profile.
router.get('/users/:id', authenticateToken, async (req, res) => {
    try {
        const userIdToView = req.params.id;
        const authenticatedUserId = req.user.id;
        const authenticatedUserRole = req.user.role;

        // Check if the authenticated user is the owner or an admin
        if (userIdToView !== authenticatedUserId && authenticatedUserRole !== 'admin') {
            return res.status(403).json({ message: 'Access denied. You can only view your own profile or must be an admin.' });
        }

        const user = await User.findById(userIdToView);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching user profile.', details: err.message });
    }
});

// GET /api/users
// View all user profiles.
router.get('/users', authenticateToken, async (req, res) => {
    try {
        // Check if the authenticated user is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Only admins can view all users.' });
        }

        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching users.', details: err.message });
    }
});

export default router;