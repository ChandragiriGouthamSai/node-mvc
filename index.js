// index.js
const express = require('express');
const app = express();
const port = 3000;

// Import Routes
const userRoutes = require('./routes/userRoutes');

// Middleware for JSON
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

