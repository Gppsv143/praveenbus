const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Import routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the PraveenBus API!');
});

// Use auth routes
app.use('/auth', authRoutes); // Prefix for all auth-related routes

// Listen on port 5000
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

