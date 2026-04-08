import 'dotenv/config';
import nodemailer from 'nodemailer';

const mailer = async (req, res) => {
    const { firstName, lastName, subject, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Owner_Email,
                pass: process.env.Owner_Password,
            },
        });
        await transporter.sendMail({
            from: `"Portfolio Website" <${process.env.Owner_Email}>`,
            to: process.env.Owner_Email,
            replyTo: email,
            subject: `Portfolio Contact from ${firstName} ${lastName}`,
            text: `
            
Name: ${firstName} ${lastName}
Email: ${email}
Subject : ${subject || 'Not provided'}
---MESSAGE---
${message}
            `,
        });

        res.status(200).json({
            success: true,
            message: "Mail has been sent",
        });
    } catch (error) {
        console.error("MAIL ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Failed to send email. Please try again.",
        });
    }
};

export default mailer;