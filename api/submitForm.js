import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, service, budget, message, source } = req.body;

  try {
    // Google Sheets setup
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    await auth.authorize();
    const sheets = google.sheets({ version: 'v4', auth });

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Enquiry Received',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget || 'Not provided'}\nMessage: ${message}\nSource: ${source || 'Unknown'}`,
    });

    // 2. Send thank-you email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SpaceMultiplier',
      text: `Hi ${firstName},\n\nThank you for reaching out! We have received your enquiry and will get back to you soon.\n\n- SpaceMultiplier Team`,
    });

    // 3. Save enquiry to Google Sheet
    const values = [[
      firstName,
      lastName,
      email,
      phone,
      service,
      budget || 'Not provided',
      message,
      new Date().toLocaleString(),
      source || 'Unknown'
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A:I',
      valueInputOption: 'RAW',
      resource: { values },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Error in submitForm:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
