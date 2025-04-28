const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const addBusRoute = require('./routes/addBus'); // Ensure the correct router is imported

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the router for /api requests
app.use('/api', addBusRoute); // All routes defined in addBus.js will be prefixed with /api

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

