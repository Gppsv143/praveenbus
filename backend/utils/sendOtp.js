const nodemailer = require('nodemailer');
require('dotenv').config();

// Set up Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,  // Your Gmail email
    pass: process.env.GMAIL_PASSWORD,  // The generated app password
  },
});

// Function to send OTP via email
const sendOTP = async (email, otp) => {
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'Your OTP for PraveenBus',
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Error sending OTP');
  }
};

module.exports = sendOTP;

