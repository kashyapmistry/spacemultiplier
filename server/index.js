const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json', // path to your JSON key file
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

// Replace with your actual Google Sheet ID (from the sheet URL)
const SPREADSHEET_ID = '1nJkoDcTztDIR42HMghB4gN1lTMu5bQJFwYVDPFZ4oNk';

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // your Google App Password
  },
});

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, service, budget, message, source } = req.body;

  try {
    // 1. Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Enquiry Received',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget || 'Not provided'}\nMessage: ${message}\nsource: ${source || 'Unknown'}`,
    });

    // 2. Send thank-you email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SpaceMultiplier',
      text: `Hi ${firstName},\n\nThank you for reaching out! We have received your enquiry and will get back to you soon.\n\n- SpaceMultiplier Team`,
    });

    // 3. Save enquiry to Google Sheet
    const values = [[firstName, lastName, email, phone, service, budget || 'Not provided', message, new Date().toLocaleString(), source || 'Unknown' ]];
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:H', // adjust if your sheet name is different
      valueInputOption: 'RAW',
      resource: { values },
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to send or save' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
