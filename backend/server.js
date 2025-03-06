require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/api/buses', async (req, res) => {
  try {
    const { source, destination, date } = req.query;
    const result = await pool.query(
      `SELECT buses.*, routes.* FROM buses JOIN routes ON buses.id = routes.bus_id WHERE routes.source = $1 AND routes.destination = $2 AND DATE(routes.departure_time) = $3`,
      [source, destination, date]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/bookings', async (req, res) => {
  try {
    const { userId, routeId, seatNumber } = req.body;
    await pool.query(
      'INSERT INTO bookings (user_id, route_id, seat_number) VALUES ($1, $2, $3)',
      [userId, routeId, seatNumber]
    );
    res.json({ message: 'Booking successful' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
