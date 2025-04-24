const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');  // Import authRoutes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Register routes (Make sure this is correct)
app.use('/api/auth', authRoutes);  // This connects the auth routes to '/api/auth'

// Health check route
app.get('/', (req, res) => {
  res.send('🚍 PraveenBus Backend API Running...');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

