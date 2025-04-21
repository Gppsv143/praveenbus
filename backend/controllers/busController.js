// backend/controllers/busController.js
const db = require('../config/db');

const addBus = async (req, res) => {
  const { busName, seats, price } = req.body;
  try {
    await db.query('INSERT INTO buses (bus_name, seats, price) VALUES (?, ?, ?)', [busName, seats, price]);
    res.status(200).json({ message: 'Bus added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add bus' });
  }
};

module.exports = { addBus };
