const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes'); // Ensure this is correct
const db = require('./config/db');  // Correct path to db.js in the config folder

const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(express.json());  // Built-in JSON parser, no need for body-parser

// Use the authRoutes for the '/api/auth' endpoint
app.use('/api/auth', authRoutes);

// Error handling middleware (catch unexpected errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

