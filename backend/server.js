// Load environment variables at the very top
const dotenv = require('dotenv');
dotenv.config();

// Required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

console.log('🚀 Server.js is starting...');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('FinScore API is running...');
});

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('🌐 Server listening on port', PORT);
  console.log('Mongo URI:', process.env.MONGO_URI); // For debugging
});
