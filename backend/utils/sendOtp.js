const twilio = require('twilio');

// Create Twilio client with credentials from .env file
const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Function to send OTP
const sendOtp = async (userPhoneNumber, otp) => {
  try {
    const message = await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${userPhoneNumber}` // Must include +91 for Indian numbers
    });

    console.log('OTP sent:', message.sid);
    return { success: true };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendOtp };

