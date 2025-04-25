const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS to allow requests from your frontend (e.g., running on 52.204.14.231:3000)
app.use(cors({
  origin: 'http://52.204.14.231:3000',  // Update to match your frontend IP and port
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Your existing backend routes, models, etc.
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

// Example API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is data from the backend' });
});

// Listen on all IPs (0.0.0.0) and port 5000
app.listen(5000, '0.0.0.0', () => {
    console.log('Backend server running on port 5000 and accessible via 52.204.14.231');
});

