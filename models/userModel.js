let mongoose = require("mongoose");
const User = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  details: [
    {
      username: { type: String, required: true },
      password: { type: String, required: true },
      ip: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      loc: { type: String, required: true },
      date: { type: String, required: true },
      region: { type: String, required: true },
      timezone: { type: String, required: true },
      org: { type: String, required: true },
    },
  ],
  image: { type: String },
  voteCast: { type: String },
  voteToWin: { type: String },
  voteTotal: { type: String },
  timestamps: { type: Date, createdAt: "created_at", updatedAt: "updated_at" },
});
module.exports = mongoose.model("votng-users", User);
