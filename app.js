const express = require('express');
const mongoose = require('mongoose');
const Authroutes = require('./Routes/Authroutes');
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Use routes
app.use('/api/auth', Au);

// Error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = app;
