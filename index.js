const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnection');
const challengeRoutes = require('./routes/challengeRoutes');

const cors=require("cors")
dotenv.config();

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://hackathon-dashboard-damnanuj.vercel.app'];

app.use(cors({
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
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
    res.send('Hello World!');
});


const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
