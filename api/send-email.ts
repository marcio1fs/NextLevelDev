import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());

// For production, you should restrict this to your frontend's domain.
// Example: app.use(cors({ origin: 'https://your-domain.com' }));
app.use(cors());

// Rate Limiting to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes.',
});

// Apply the rate limiter to this route
app.use('/api/send-email', limiter);

// Validation middleware
const validateContactForm = [
  body('name').trim().isLength({ min: 2 }).escape().withMessage('O nome deve ter pelo menos 2 caracteres.'),
  body('email').isEmail().normalizeEmail().withMessage('Por favor, insira um email válido.'),
  body('message').trim().isLength({ min: 10 }).escape().withMessage('A mensagem deve ter pelo menos 10 caracteres.'),
];

// Nodemailer transporter setup.
// Ensure environment variables are set in your deployment environment (e.g., Vercel).
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', validateContactForm, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `Nova Mensagem do Portfólio de ${name}`,
    text: `Você recebeu uma nova mensagem do seu portfólio.\n\nNome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Nova Mensagem do Portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ message: 'Falha ao enviar a mensagem. Por favor, tente novamente mais tarde.' });
  }
});

// This is required for Vercel to handle the Express app as a serverless function
export default app;
