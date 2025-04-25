const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Set up Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Function to send OTP via email
const sendOTP = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'Your OTP for PraveenBus',
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return otp;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Error sending OTP');
  }
};

// Register user
const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Query to check if the phone or email already exists in the database
    const [existingPhone] = await global.db.query('SELECT * FROM users WHERE phone = ?', [phone]);
    const [existingEmail] = await global.db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingPhone.length > 0) {
      return res.status(400).json({ message: 'Phone number already registered' });
    }

    if (existingEmail.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Query to insert new user into the database
    const query = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
    await global.db.query(query, [name, email, phone, hashedPassword]);

    // Send OTP email to the user
    const otp = await sendOTP(email);

    // Store OTP temporarily for comparison (you might want to store it in DB or cache for real scenarios)
    // For now, we send it back for demonstration purposes.
    return res.status(200).json({
      message: 'User registered successfully. OTP sent to email.',
      otp: otp, // This is just for testing purposes. Remove in production!
    });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Error during registration', error: error.message });
  }
};

module.exports = { registerUser };

