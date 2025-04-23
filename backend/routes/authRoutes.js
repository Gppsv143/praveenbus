const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.post('/user/signup', auth.signup);
router.post('/user/verify', auth.verifyOtpAndRegister);
router.post('/user/login', auth.login);

module.exports = router;


// =============================
// 📄 backend/utils/otpService.js
// =============================
const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.AWS_REGION });
const sns = new AWS.SNS();

exports.sendOTP = async (mobile, otp) => {
  return sns.publish({
    Message: `Your OTP is: ${otp}`,
    PhoneNumber: mobile,
  }).promise();
};

