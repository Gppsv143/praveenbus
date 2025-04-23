const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendOTP } = require('../utils/otpService');

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.signup = async (req, res) => {
  const { name, age, gender, mobile, email } = req.body;
  const otp = generateOTP();

  try {
    await sendOTP(mobile, otp);
    res.json({ message: "OTP sent", otp }); // show OTP only for testing
  } catch (err) {
    res.status(500).json({ error: "OTP failed" });
  }
};

exports.verifyOtpAndRegister = async (req, res) => {
  const { name, age, gender, mobile, email, otp, enteredOtp, password } = req.body;
  if (otp !== enteredOtp) return res.status(401).json({ error: "Invalid OTP" });

  const hash = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO users (name, age, gender, mobile, email, password) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [name, age, gender, mobile, email, hash], (err, result) => {
    if (err) return res.status(500).json({ error: "Signup failed" });
    const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: "Signup success", token });
  });
};

exports.login = (req, res) => {
  const { mobile, password } = req.body;
  db.query(`SELECT * FROM users WHERE mobile = ?`, [mobile], async (err, result) => {
    if (err || result.length === 0) return res.status(401).json({ error: "User not found" });
    const match = await bcrypt.compare(password, result[0].password);
    if (!match) return res.status(401).json({ error: "Wrong password" });

    const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: "Login success", token });
  });
};

