require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

app.get('/api/buses', async (req, res) => {
  try {
    const { source, destination, date } = req.query;
    if (!source || !destination || !date) {
      return res.status(400).json({ error: 'Missing required query parameters' });
    }

    const [rows] = await pool.query(
      `SELECT buses.*, routes.* FROM buses 
       JOIN routes ON buses.id = routes.bus_id 
       WHERE routes.source = ? AND routes.destination = ? 
       AND DATE(routes.departure_time) >= ?`,
      [source, destination, date]
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

