const express = require('express');
const router = express.Router();
const multer = require('multer');
const Challenge = require('../models/Challenge');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use original file name
    }
});

const upload = multer({ storage: storage });

// Route to create a new challenge
router.post('/create-challenge', upload.single('image'), async (req, res) => { // Match the field name with FormData
    try {
        const { challangeName, startDate, endDate, description, difficulty } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : ''; // Use req.file directly

        console.log(challangeName, startDate, endDate, description, difficulty, image);

        const newChallenge = new Challenge({
            challangeName,
            startDate,
            endDate,
            description,
            difficulty,
            image
        });

        await newChallenge.save();
        res.status(201).json({ message: 'Challenge created successfully', newChallenge });
    } catch (error) {
        console.error('Error creating challenge:', error);
        res.status(500).json({ message: 'Failed to create challenge' });
    }
});

// Route to get all challenges
router.get('/get-challenges', async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).json(challenges);
    } catch (error) {
        console.error('Error retrieving challenges:', error);
        res.status(500).json({ message: 'Failed to retrieve challenges' });
    }
});

module.exports = router;
