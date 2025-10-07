// Email Service API
import express from "express";
const router = express.Router();
import {authenticateToken} from "../middlewares/AuthMw.js";
const JWT_SECRET = process.env.JWT_SECRET;

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendActivationEmail(toEmail, activationLink) {
    const mailOptions = {
        from: `"Auth Service" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Welcome! Activate Your Account',
        html: `
      <h1>Welcome to Our Service!</h1>
      <p>Thank you for registering. Please click the link below to activate your account:</p>
      <a href="${activationLink}">Activate Account Now</a>
      <p>If you didn't register for this service, please ignore this email.</p>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Activation email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending activation email:', error);
        throw new Error('Failed to send activation email.');
    }
}

export async function sendPasswordRestEmail(toEmail, activationLink) {
    const mailOptions = {
        from: `"Auth Service" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Welcome! Activate Your Account',
        html: `
      <h1>Welcome to Our Service!</h1>
      <p>Please click the link below to reset your password:</p>
      <a href="${activationLink}">Reset Password</a>
      <p>If you didn't send a password reset request, please ignore this email.</p>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Password reset email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw new Error('Failed to send password reset email.');
    }
}
