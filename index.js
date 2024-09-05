const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnection');
const challengeRoutes = require('./routes/challengeRoutes');

const cors=require("cors")
dotenv.config();

const app = express();

// const allowedOrigins = ['http://localhost:3000', 'https://hackathon-dashboard-damnanuj.vercel.app'];

app.use(cors());
app.use(express.urlencoded({extended:true}))

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve the `uploads` directory as static to access uploaded images
app.use('/uploads', express.static('uploads'));

// Routes
app.use(challengeRoutes);  

// Basic route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hackathon Dashboard</title>
      </head>
      <body>
        <h1>Welcome to the Hackathon Dashboard Backend</h1>
        <p>This is the backend for managing hackathons.</p>
        <p>To check the demo, you can use the following routes:</p>
        <ul>
          <li><a href="/get-challenges">/get-challenges</a> - To get a list of challenges</li>
          <li>/create-challenge - To create a new challenge (use POST request)</li>
        </ul>
      </body>
    </html>
  `);
});


const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
