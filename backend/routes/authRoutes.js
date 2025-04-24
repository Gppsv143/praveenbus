const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define the POST route for user registration (signup)
router.post('/signup', authController.registerUser);

// Define the POST route for user login
router.post('/login', authController.loginUser);

// Export the router so it can be used in `server.js`
module.exports = router;

