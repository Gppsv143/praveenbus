const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register user
const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Query to check if phone or email already exists in the database
    const [existingPhone] = await global.db.query('SELECT * FROM users WHERE phone = ?', [phone]);
    const [existingEmail] = await global.db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingPhone.length > 0) {
      return res.status(400).json({ message: 'Phone number already registered' });
    }

    if (existingEmail.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await global.db.query('INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)', [name, email, phone, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login user (sample, modify as needed)
const loginUser = async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ message: 'Phone and password are required' });
  }

  try {
    const [user] = await global.db.query('SELECT * FROM users WHERE phone = ?', [phone]);

    if (user.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const match = await bcrypt.compare(password, user[0].password);

    if (!match) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user[0].id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { registerUser, loginUser };

