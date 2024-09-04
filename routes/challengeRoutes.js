const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createChallenge, getChallenges } = require('../controllers/challengeController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory to save uploaded images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Save files with a timestamp
    }
});

const upload = multer({ storage: storage });

// Route to create a new challenge
router.post('/', upload.single('image'), createChallenge);

// Route to get all challenges
router.get('/', getChallenges);

module.exports = router;
