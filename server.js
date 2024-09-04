const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnection');
const challengeRoutes = require('./routes/challengeRoutes');

dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve the `uploads` directory as static to access uploaded images
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/challenges', challengeRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
