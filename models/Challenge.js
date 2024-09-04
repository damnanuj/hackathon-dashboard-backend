const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  challengeName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
