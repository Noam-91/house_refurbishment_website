// --- Auth APIs ---
import express from "express";
const router = express.Router();
import User from "../domain/User.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import {authenticateToken} from "../middlewares/AuthMw.js";
import {sendActivationEmail, sendPasswordRestEmail} from "./EmailSvc.js";
const JWT_SECRET = process.env.JWT_SECRET;
const CLIENT_SIDE_URL = process.env.CLIENT_BASE_URL || 'http://localhost:5173';


// POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Hash password before saving to database
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();

        // Construct the activation link
        const activationToken = crypto.randomBytes(32).toString('hex');
        const activationLink = `${CLIENT_SIDE_URL}/activate-account?token=${activationToken}&email=${email}`;

        // Send the activation email
        try {
            await sendActivationEmail(email, activationLink);
        } catch (emailError) {
            // Log the email failure but still respond with success for registration
            console.error('Registration success, but failed to send activation email:', emailError);
        }

        res.status(201).json({ message: 'User registered successfully. Please check your email for activation.' });
    } catch (err) {
        res.status(500).json({ error: 'Error registering user.', details: err.message });
    }
});

// POST
// forgot password
router.post('/forgot-password', async (req, res) => {
    try{
        const {email} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ message: 'User not found.' });
        }

        // Construct the password reset link
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetLink = `${CLIENT_SIDE_URL}/reset-password?token=${resetToken}&email=${email}`;

        // Send the password reset email
        try {
            await sendPasswordRestEmail(email, resetLink);
        } catch (emailError) {
            res.status(500).json({ error: 'Error during password reset.', details: e.message });
        }
        res.status(200).json({ message: 'Password reset link sent to your email.' });
    }catch (e) {
        res.status(500).json({ error: 'Error during password reset.', details: e.message });
    }
});


// GET /api/auth/activate-account?token=...&email=...
router.get('/activate-account', async (req, res) => {
    try {
        const { token, email } = req.query;

        // Find the user by email and the token
        const user = await User.findOne({
            email: email,
            activationToken: token,
            isActive: false // Only look for inactive accounts
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired activation link.' });
        }

        // Activate the user and clear the token
        user.isActive = true;
        user.activationToken = undefined; // Clear the token after use
        await user.save();

        // TODO: Send success response
        // For a server-side response, you might send a small HTML success page or redirect.
        res.status(200).json({ message: 'Account successfully activated! You can now log in.' });

    } catch (err) {
        res.status(500).json({ error: 'Error during account activation.', details: err.message });
    }
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

// GET /api/auth/checkAuth
router.get('/checkAuth', authenticateToken, (req, res) => {
    // The authenticateToken middleware handles the validation.
    res.json({ message: 'User is authenticated.', user: req.user });
});

export default router;