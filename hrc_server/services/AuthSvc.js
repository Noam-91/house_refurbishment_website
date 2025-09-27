// --- Auth APIs ---
import express from "express";
const router = express.Router();
import User from "../mongo/User.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {authenticateToken} from "../middlewares/AuthMw.js";
const JWT_SECRET = process.env.JWT_SECRET;

// POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Hash password before saving to database
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully. Please check your email for activation.' });
    } catch (err) {
        res.status(500).json({ error: 'Error registering user.', details: err.message });
    }
});

// GET /api/auth/activate/:token
// This is a placeholder for email activation logic.
router.get('/activate/:token', async (req, res) => {
    // In a real app, you would verify the token and update the user's isActive status.
    res.json({ message: `Activation for token '${req.params.token}' is simulated.` });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        // Set the JWT as an httpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000 // 1 hour
        });
        res.json({ message: 'Logged in successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Error during login.', details: err.message });
    }
});

// POST /api/auth/logout
// For token-based authentication, the client simply discards the token.
// This endpoint can be used to blacklist tokens on the server side if needed.
router.post('/logout', authenticateToken, (req, res) => {
    res.json({ message: 'Logged out successfully.' });
});


// PUT /api/auth/users/:id
// This route allows an admin or the user themselves to edit a specific user profile.
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

// GET /api/auth/checkAuth
router.get('/checkAuth', authenticateToken, (req, res) => {
    // The authenticateToken middleware handles the validation.
    res.json({ message: 'User is authenticated.', user: req.user });
});

export default router;