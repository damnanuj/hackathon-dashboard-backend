// const Challenge = require('../models/Challenge');

// // Create a new challenge
// exports.createChallenge = async (req, res) => {
//     try {
//         const { challengeName, startDate, endDate, description, difficulty } = req.body;
//         const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

//         const newChallenge = new Challenge({
//             challengeName,
//             startDate,
//             endDate,
//             description,
//             difficulty,
//             imageUrl
//         });

//         await newChallenge.save();
//         res.status(201).json({ message: 'Challenge created successfully', newChallenge });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to create challenge' });
//     }
// };

// // Get all challenges
// exports.getChallenges = async (req, res) => {
//     try {
//         const challenges = await Challenge.find();
//         res.status(200).json(challenges);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to retrieve challenges' });
//     }
// };
