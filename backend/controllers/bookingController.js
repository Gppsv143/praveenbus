const pool = require('../config/db');

exports.bookTicket = async (req, res) => {
  const { user_id, bus_id, seat_number, travel_date } = req.body;
  try {
    await pool.query('INSERT INTO bookings (user_id, bus_id, seat_number, travel_date) VALUES (?, ?, ?, ?)', [user_id, bus_id, seat_number, travel_date]);
    res.status(201).json({ message: "Booking confirmed" });
  } catch (error) {
    res.status(500).json({ message: "Error processing booking" });
  }
};
