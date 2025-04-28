const db = require('../config/db'); // Import the db connection pool

// Controller function to add a new bus
const addBus = async (req, res) => {
  const { bus_name, bus_type, total_seats, price, operator_id } = req.body;

  // SQL query to insert the bus data
  const query = `INSERT INTO buses (bus_name, bus_type, total_seats, price, operator_id) VALUES (?, ?, ?, ?, ?)`;

  try {
    // Use db.query with async/await
    const [result] = await db.execute(query, [bus_name, bus_type, total_seats, price, operator_id]);

    return res.status(200).send('Bus added successfully');
  } catch (err) {
    console.error('Error inserting bus:', err);
    return res.status(500).send('Error adding bus');
  }
};

module.exports = {
  addBus,
};

