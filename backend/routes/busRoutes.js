// backend/routes/busRoutes.js
const express = require('express');
const { addBus } = require('../controllers/busController');

const router = express.Router();

router.post('/add', addBus);

module.exports = router;
