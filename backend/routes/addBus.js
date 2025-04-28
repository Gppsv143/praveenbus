const express = require('express');
const router = express.Router();

// Define the POST route for adding a bus
router.post('/add', (req, res) => {
  // Logic for adding a bus (e.g., inserting bus data into the database)
  res.send('Bus added successfully');
});

// Export the router to be used in server.js
module.exports = router;

