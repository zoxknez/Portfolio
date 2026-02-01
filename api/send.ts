import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(
    req: VercelRequest,
    req_res: VercelResponse
) {
    if (req.method !== 'POST') {
        return req_res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY is missing from environment variables');
        return req_res.status(500).json({ error: 'API key is not configured' });
    }

    const resend = new Resend(apiKey);

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return req_res.status(400).json({ error: 'Missing required fields' });
        }

        console.log('Attempting to send email via Resend...');
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['zoxknez@hotmail.com'],
            subject: `Portfolio: Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333;">New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message}
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend API error:', error);
            return req_res.status(400).json({ error });
        }

        console.log('Email sent successfully:', data);
        return req_res.status(200).json({ data });
    } catch (error: any) {
        console.error('Detailed Internal error:', error);
        return req_res.status(500).json({
            error: 'Internal server error',
            message: error.message || 'Unknown error',
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
