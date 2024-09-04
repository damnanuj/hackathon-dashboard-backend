const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  challangeName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
