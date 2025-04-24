const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register user
const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the phone number already exists in the database
    const [existingPhone] = await global.db.query('SELECT * FROM users WHERE phone = ?', [phone]);
    // Check if the email already exists in the database
    const [existingEmail] = await global.db.query('SELECT * FROM users WHERE email = ?', [email]);

    // If phone number is already registered, return an error
    if (existingPhone.length > 0) {
      return res.status(400).json({ message: 'Phone number already registered' });
    }

    // If email is already registered, return an error
    if (existingEmail.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password before saving it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await global.db.query(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      [name, email, phone, hashedPassword]
    );

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    // Catch any unexpected errors and respond with an internal server error
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, phone, password } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ message: 'Email or phone number is required' });
  }
  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  try {
    // Find user by email or phone number
    const [user] = await global.db.query(
      'SELECT * FROM users WHERE email = ? OR phone = ?',
      [email, phone]
    );

    if (user.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the hashed password with the stored password in the database
    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Create JWT token after successful login
    const token = jwt.sign(
      { userId: user[0].id, name: user[0].name },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Respond with the user data and the generated token
    res.status(200).json({ message: 'Login successful', token });

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { registerUser, loginUser };

