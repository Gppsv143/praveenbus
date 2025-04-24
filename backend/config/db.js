// config/db.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

const connectDB = async () => {
  try {
    global.db = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      connectTimeout: 10000,
    });

    console.log("✅ MySQL Database connected successfully.");

    // Optional: Test the connection
    const [rows] = await global.db.query('SELECT 1');
    console.log('✅ Test query result:', rows);
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

