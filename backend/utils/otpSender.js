const sendOTP = require('../utils/sendOtp');

// In your register or login function, use the sendOTP function
const registerUser = async (req, res) => {
  const { phone, email, name, password } = req.body;

  if (!phone || !email || !name || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const otp = await sendOTP(email);  // Send OTP to the email

    // Now, save OTP in DB or perform any other necessary actions
    // Respond with success
    res.status(200).json({ message: 'OTP sent successfully to your email' });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Error sending OTP' });
  }
};

