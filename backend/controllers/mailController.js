import 'dotenv/config';
import nodemailer from 'nodemailer';

const mailer = async (req, res) => {
    const { name, email, message } = req.body;

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
            subject: `Contact from ${name}`,
            text: message,
        });

        res.status(200).json({
            success: true,
            message: "Mail has been sent",
        });
    } catch (error) {
        console.error("MAIL ERROR:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export default mailer;