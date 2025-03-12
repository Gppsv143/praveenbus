const pool = require('../config/db');

exports.addBus = async (req, res) => {
  const { operator_id, name, type, seats, price } = req.body;
  try {
    await pool.query('INSERT INTO buses (operator_id, name, type, seats, price) VALUES (?, ?, ?, ?, ?)', [operator_id, name, type, seats, price]);
    res.status(201).json({ message: "Bus added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding bus" });
  }
};
