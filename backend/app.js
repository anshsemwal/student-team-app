const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const memberRoutes = require('./routes/memberRoutes');

dotenv.config();         // Load environment variables from .env
connectDB();             // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Routes
app.use('/api/members', memberRoutes);

// Root endpoint (optional, for testing)
app.get('/', (req, res) => {
  res.send('Student Team Members Management API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
