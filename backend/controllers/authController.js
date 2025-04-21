// backend/controllers/authController.js
const db = require('../config/db');

const login = async (req, res) => {
  const { username, password } = req.body;

  // Logic to check username and password from the database
  try {
    const [rows] = await db.query('SELECT * FROM operators WHERE username = ?', [username]);
    if (rows.length === 0 || rows[0].password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { login };
