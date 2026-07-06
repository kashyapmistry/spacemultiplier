const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Google Sheets setup
const auth = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: 'v4', auth });

// Replace with your actual Google Sheet ID (from the sheet URL)
const SPREADSHEET_ID = process.env.SHEET_ID;

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // your Google App Password
  },
});

// app.post('/contact', (req, res) => {
//   console.log("DEBUG: POST /contact reached");
//   res.send("Contact POST route works");
// });


app.post('/contact', async (req, res) => {
  console.log("POST /contact hit", req.body);
  const { firstName, lastName, email, phone, service, budget, message, source } = req.body;

  try {
    console.log("Trying to send admin email...");
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Enquiry Received',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`
    });
    console.log("Admin email sent!");

    console.log("Trying to send thank-you email...");
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SpaceMultiplier',
      text: `Hi ${firstName},\n\nThank you for reaching out!`
    });
    console.log("User email sent!");

    console.log("Trying to save to Google Sheets...");
    const values = [[firstName, lastName, email, phone, service, budget, message, new Date().toLocaleString(), source]];
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:H',
      valueInputOption: 'RAW',
      resource: { values }
    });
    console.log("Saved to Google Sheets!");

    res.json({ success: true });
  } catch (error) {
    console.error("Error in /contact:", error);
    res.status(500).json({ success: false, error: error.message });
  }

});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

