const AWS = require('aws-sdk');  // Import AWS SDK
AWS.config.update({ region: process.env.AWS_REGION });  // Set AWS region from environment variable

const sns = new AWS.SNS();  // Create an SNS service object

// Function to send OTP to mobile number
exports.sendOTP = async (mobile, otp) => {
  try {
    const params = {
      Message: `Your OTP is: ${otp}`,  // OTP message content
      PhoneNumber: mobile,  // Recipient's mobile number
    };

    // Send OTP message via SNS
    return sns.publish(params).promise();
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP");
  }
};

