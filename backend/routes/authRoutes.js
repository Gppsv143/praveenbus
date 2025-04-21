const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../config/db');  // Database connection

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );

    res.status(200).send(`User ${username} signed up successfully`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong during signup');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: `Welcome ${username}, login successful!` });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong during login');
  }
});

module.exports = router;

