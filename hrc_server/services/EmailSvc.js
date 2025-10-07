// Email Service API

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

/**
 * Sends a confirmation email after a user successfully activates their account.
 * This is the function you requested.
 * @param {string} toEmail - The recipient's email address.
 * @returns {Promise<object>} The nodemailer response info object.
 */
export async function sendActivationSuccessEmail(toEmail) {
    const mailOptions = {
        from: `"Auth Service" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Account Activated Successfully!',
        html: `
      <h1>Success! Your Account is Ready.</h1>
      <p>Great news! Your account has been successfully activated and is ready to use.</p>
      <p>You can now log in using your registered email and password.</p>
      <div style="padding: 10px 0;">
        <a href="${process.env.CLIENT_BASE_URL || 'http://localhost:3001'}/login" style="background-color: #007bff; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 8px;">
          Go to Login Page
        </a>
      </div>
      <p>Happy connecting!</p>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Activation success email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending activation success email:', error);
        // Log the error, but since the account is already active, we shouldn't fail the API response.
    }
}